(()=>{var An="products/",Xc=(i,t)=>Math.round(i*(1-t/100)),id=[{id:"skin-oil",name:"CBD Hudpleje Olie",strength:"1000 mg",size:"30 ml",eyebrow:"CBD Skin Care",price0:499,pct:25,img:An+"skin-oil.webp",hires:An+"skin-oil-hires.webp",hero:!0,badge:"badges/vidunder-olien.svg",nickname:"Vidunder Olien",claim:"Efterlader huden bl\xF8d, velplejet og smuk \u2013 til alle hudtyper.",notes:"CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke."},{id:"day-cream",name:"CBD Dagcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:399,pct:25,img:An+"day-cream.webp",hires:An+"day-cream-hires.webp",claim:"Let dagcreme med CBD, aloe vera og sheasm\xF8r til en glat og velplejet hud."},{id:"night-cream",name:"CBD Natcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:449,pct:25,img:An+"night-cream.webp",hires:An+"night-cream-bottle-hires.webp",claim:"N\xE6rende natcreme med mandelolie og squalane, der underst\xF8tter hudens naturlige fugt."},{id:"serum",name:"CBD Hyaluronic Serum",size:"30 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:An+"hyaluron-serum.webp",hires:An+"hyaluron-serum-hires.webp",claim:"Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk."},{id:"cleansing-gel",name:"CBD Rensegel",size:"100 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:An+"cleansing-gel.webp",hires:An+"cleansing-gel-bottle-hires.webp",claim:"Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance."},{id:"body-lotion",name:"CBD Bodylotion",size:"200 ml",eyebrow:"CBD Skin Care",price0:249,pct:25,img:An+"body-lotion.webp",claim:"Tr\xE6kker hurtigt ind og efterlader kroppen bl\xF8d. Giver intensiv fugtighed til t\xF8r hud."},{id:"shampoo",name:"CBD Shampoo",strength:"750 mg",size:"300 ml",eyebrow:"CBD Hair Care",price0:199,pct:25,img:An+"shampoo.webp",claim:"Mild shampoo uden un\xF8dvendige ingredienser \u2013 til hele familien."},{id:"komplet-pakken",name:"Komplet Pakken",size:"Rens \xB7 Dag \xB7 Nat \xB7 Olie",eyebrow:"Sampakke",price0:1198,valueLoose:1646,pct:25,img:An+"startpakke-plus.webp",bundle:!0,badge:"badges/komplet-pakken.svg",contains:["cleansing-gel","day-cream","night-cream","skin-oil"],claim:"Hele rutinen, morgen og aften \u2013 fire produkter i \xE9n pakke."},{id:"all-day-facial",name:"All Day Facial",size:"Rens \xB7 Dag \xB7 Nat",eyebrow:"Sampakke",price0:860,valueLoose:1147,pct:25,img:An+"all-day-facial.webp",bundle:!0,badge:"badges/all-day-facial.svg",contains:["cleansing-gel","day-cream","night-cream"],claim:"Den daglige ansigtsrutine samlet \u2013 rens, dag og nat."},{id:"lip-balm",name:"CBD Lip Balm",size:"",eyebrow:"Gave",price0:79,pct:0,img:null,gift:!0,claim:"Gratis ved k\xF8b over 699 kr."}],Mo=id.map(i=>({...i,price:Xc(i.price0,i.pct),save:i.price0-Xc(i.price0,i.pct)})),ra={name:"Black Week",startsAt:"2026-11-23T00:00:00+01:00",endsAt:"2026-11-30T23:59:59+01:00",headlinePct:25,giftThreshold:699,giftId:"lip-balm",giftValue:79,freeShipping:399,code:null};var aa=[];function En(i,t){aa.push([i,t])}var sd=Date.parse("2026-11-27T10:00:00+01:00"),rd=performance.now(),ad={now:()=>sd+(performance.now()-rd),end:Date.parse(ra.endsAt),start:Date.parse(ra.startsAt)},bo=new Set,Ai={cart:[]},od={get:()=>Ai,on:i=>(bo.add(i),()=>bo.delete(i)),emit:(i,t)=>bo.forEach(e=>e(i,t,Ai)),add(i,t=1){let e=Ai.cart.find(n=>n.id===i);e?e.qty+=t:Ai.cart.push({id:i,qty:t}),this.emit("cart:add",{id:i,qty:t})},setQty(i,t){let e=Ai.cart.find(n=>n.id===i);e&&(e.qty=Math.max(0,t),e.qty||Ai.cart.splice(Ai.cart.indexOf(e),1),this.emit("cart:change",{id:i}))},count:()=>Ai.cart.reduce((i,t)=>i+t.qty,0),subtotal:()=>Ai.cart.reduce((i,t)=>i+t.qty*Qc[t.id].price,0),openCart(){this.emit("cart:open")}},Qc=Object.fromEntries(Mo.map(i=>[i.id,i])),ld={kr:i=>`${Math.round(i).toLocaleString("da-DK")} kr.`,pct:i=>`${Math.round(i)}%`},Yc=document.currentScript&&document.currentScript.src,cd=window.NC_ASSET_BASE||(Yc?new URL("../assets/",Yc).href:"../assets/"),hd=i=>cd+i;function Zc(){let i={store:od,clock:ad,fmt:ld,products:Mo,byId:Qc,campaign:ra,asset:hd,prefersReducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,isMobile:()=>matchMedia("(max-width: 760px)").matches},t=()=>{let n=0;for(let[r,a]of aa){let o=document.querySelector(`[data-section="${r}"]`);if(o&&(n++,!o.dataset.ncInit)){o.dataset.ncInit="1";try{a(o,i)}catch(l){console.error(`[section ${r}]`,l)}}}let s=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-in"),s.unobserve(a.target))}),{rootMargin:"0px 0px -8% 0px"});return document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(r=>s.observe(r)),n},e=()=>{if(t()>=aa.length)return;let n=new MutationObserver(()=>{t()>=aa.length&&n.disconnect()});n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>n.disconnect(),2e4)};window.NCBW={ctx:i,run:t},window.NC_DEFER_BOOT||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())}var Fs={};try{Fs=JSON.parse(sessionStorage.getItem("nc_ps")||"{}")||{}}catch{Fs={}}var ud=()=>{try{sessionStorage.setItem("nc_ps",JSON.stringify(Fs))}catch{}};function dd(i,t){if(Fs[i])return t(Fs[i]);let e=new Image;e.onload=()=>{let n=e.naturalWidth,s=e.naturalHeight;if(!n||!s)return t(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),d;try{c.drawImage(e,0,0,a,o),d=c.getImageData(0,0,a,o).data}catch{return t(null)}let u=(y,R)=>{let E=(R*a+y)*4;return[d[E],d[E+1],d[E+2],d[E+3]]},f=[u(0,0),u(a-1,0),u(0,o-1),u(a-1,o-1),u(a>>1,0),u(a>>1,o-1),u(0,o>>1),u(a-1,o>>1)],p=[0,1,2,3].map(y=>f.map(R=>R[y]).sort((R,E)=>R-E)[4]),v=p[3]<20,g=a,m=-1,h=o,b=-1;for(let y=0;y<o;y++)for(let R=0;R<a;R++){let E=(y*a+R)*4,C=d[E+3];(v?C>40:C>40&&(Math.abs(d[E]-p[0])>26||Math.abs(d[E+1]-p[1])>26||Math.abs(d[E+2]-p[2])>26))&&(R<g&&(g=R),R>m&&(m=R),y<h&&(h=y),y>b&&(b=y))}if(m<0||m-g<2||b-h<2||(m-g+1)/a>.97&&(b-h+1)/o>.97)return t(null);let T={x0:g/a,x1:(m+1)/a,y0:h/o,y1:(b+1)/o,w:n,h:s};Fs[i]=T,ud(),t(T)},e.onerror=()=>t(null),e.src=i}function Kc(i){let t=i._ncPs;if(!t)return;let e=i.clientWidth,n=i.clientHeight;if(!e||!n)return;let s=Math.min(e/t.w,n/t.h),r=t.w*s,a=t.h*s,o=(e-r)/2,l=(n-a)/2,c=o+t.x0*r,d=o+t.x1*r,u=l+t.y0*a,f=l+t.y1*a,p=d-c,v=f-u,g=(c+d)/2,m=1;v>.78*n?m=.78*n/v:v<.52*n&&(m=Math.min(1.6,.52*n/v)),p*m>.78*e&&(m=.78*e/p);let h=e/2-m*g,b=.86*n-m*f;i.style.transform=`translate(${h.toFixed(2)}px,${b.toFixed(2)}px) scale(${m.toFixed(4)})`,i.classList.add("is-placed")}function Jc(i){if(!document.createElement("canvas").getContext)return;let t="ResizeObserver"in window?new ResizeObserver(n=>n.forEach(s=>Kc(s.target))):null,e=n=>{if(n._ncPsInit)return;n._ncPsInit=!0;let s=n.currentSrc||n.src;s&&dd(s,r=>{r&&(n._ncPs=r,Kc(n),t&&t.observe(n))})};i.querySelectorAll("img.nc-packshot").forEach(n=>{n.complete&&n.naturalWidth?e(n):n.addEventListener("load",()=>e(n),{once:!0})})}function So(i,t){let e=(h,b=i)=>b.querySelector(h),n=(h,b=i)=>Array.from(b.querySelectorAll(h)),s=e("[data-nc-header]"),r=e("[data-nc-mega]"),a=n("[data-nc-mega-toggle]"),o=e("[data-nc-mobilenav]"),l=e("[data-nc-burger]"),c=document.documentElement,d=h=>{r.classList.toggle("is-open",h),a.forEach(b=>b.setAttribute("aria-expanded",h?"true":"false"))};a.forEach(h=>h.addEventListener("click",b=>{b.preventDefault(),d(!r.classList.contains("is-open"))})),document.addEventListener("click",h=>{r.classList.contains("is-open")&&!s.contains(h.target)&&d(!1)}),n("[data-nc-tabs]").forEach(h=>{let b=n("[data-nc-tab]",h),T=n("[data-nc-panel]",h);b.forEach(y=>y.addEventListener("click",()=>{let R=y.getAttribute("data-nc-tab");b.forEach(E=>{E.classList.toggle("is-active",E===y),E.setAttribute("aria-selected",E===y?"true":"false")}),T.forEach(E=>{E.hidden=E.getAttribute("data-nc-panel")!==R})}))});let u=h=>{if(o.classList.toggle("is-open",h),o.setAttribute("aria-hidden",h?"false":"true"),l.setAttribute("aria-expanded",h?"true":"false"),c.classList.toggle("nc-lock",h),h){let b=e(".nc-mobilenav__head [data-nc-close]");b&&b.focus({preventScroll:!0})}};l.addEventListener("click",()=>u(!o.classList.contains("is-open"))),n("[data-nc-close]",o).forEach(h=>h.addEventListener("click",()=>{u(!1),l.focus({preventScroll:!0})})),document.addEventListener("keydown",h=>{h.key==="Escape"&&(r.classList.contains("is-open")&&d(!1),o.classList.contains("is-open")&&(u(!1),l.focus({preventScroll:!0})))});let f=n("[data-nc-cart-count]"),p=()=>{let h=t.store.count();f.forEach(b=>{b.textContent=h,b.classList.toggle("is-empty",h===0)})};t.store.on(h=>{(h==="cart:add"||h==="cart:change")&&p()}),p(),n("[data-nc-cart-open]").forEach(h=>h.addEventListener("click",b=>{b.preventDefault(),t.store.openCart()}));let v=n("[data-nc-fav-count]"),g=()=>{let h=[];try{h=JSON.parse(localStorage.getItem("nc_favs")||"[]")||[]}catch{h=[]}v.forEach(b=>{b.textContent=h.length,b.classList.toggle("is-empty",h.length===0)})};window.addEventListener("nc-favs-changed",g),g();let m=e(".nc-skip-link");m&&!document.getElementById("nc-main")&&m.addEventListener("click",h=>{let b=i.nextElementSibling;b&&(h.preventDefault(),b.hasAttribute("tabindex")||b.setAttribute("tabindex","-1"),b.focus())}),Jc(i)}function jc(i,t){let e=!1;return new IntersectionObserver(([s])=>{e=s.isIntersecting,t&&t(e)},{rootMargin:"120px"}).observe(i),()=>e}var $c=()=>Math.min(window.devicePixelRatio||1,2);var fd=0,th=1,pd=2;var lu=1,md=2,Ii=3,Ki=0,sn=1,Yn=2,pi=0,Zi=1,Ji=2,eh=3,nh=4,Rs=5,hi=100,gd=101,vd=102,xd=103,yd=104,to=200,Kr=201,eo=202,Md=203,jo=204,ys=205,bd=206,Sd=207,wd=208,Ad=209,Ed=210,Td=211,_d=212,Rd=213,Cd=214,$o=0,tl=1,el=2,ir=3,nl=4,il=5,sl=6,rl=7,cu=0,Id=1,Pd=2,mi=0,Ld=1,Dd=2,Ud=3,Nd=4,Fd=5,Bd=6,Od=7;var hu=300,sr=301,rr=302,al=303,ol=304,no=306,ar=1e3,vs=1001,ll=1002,Dn=1003,kd=1004;var oa=1005;var ui=1006,wo=1007;var xs=1008;var Ui=1009,uu=1010,du=1011,Vr=1012,pc=1013,Ms=1014,di=1015,Nn=1016,mc=1017,gc=1018,or=1020,fu=35902,pu=1021,mu=1022,Zn=1023,gu=1024,vu=1025,tr=1026,lr=1027,vc=1028,xc=1029,xu=1030,yc=1031;var Mc=1033,Ia=33776,Pa=33777,La=33778,Da=33779,cl=35840,hl=35841,ul=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37808,vl=37809,xl=37810,yl=37811,Ml=37812,bl=37813,Sl=37814,wl=37815,Al=37816,El=37817,Tl=37818,_l=37819,Rl=37820,Cl=37821,Ua=36492,Il=36494,Pl=36495,yu=36283,Ll=36284,Dl=36285,Ul=36286;var Na=2300,Nl=2301,Ao=2302,ih=2400,sh=2401,rh=2402;var zd=3200,Vd=3201;var Mu=0,Hd=1,Qn="",mn="srgb",fr="srgb-linear",io="linear",ye="srgb";var Bs=7680;var ah=519,Gd=512,Wd=513,qd=514,bu=515,Xd=516,Yd=517,Qd=518,Zd=519,oh=35044;var lh="300 es",Li=2e3,Fa=2001,ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=1234567,Or=Math.PI/180,Hr=180/Math.PI;function pr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function bc(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jd(i,t,e){return i!==t?(e-i)/(t-i):0}function kr(i,t,e){return(1-e)*i+e*t}function jd(i,t,e,n){return kr(i,t,1-Math.exp(-e*n))}function $d(i,t=1){return t-Math.abs(bc(i,t*2)-t)}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sf(i,t){return i+Math.random()*(t-i)}function rf(i){return i*(.5-Math.random())}function af(i){i!==void 0&&(ch=i);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(i){return i*Or}function lf(i){return i*Hr}function cf(i){return(i&i-1)===0&&i!==0}function hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function df(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function js(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Jr={DEG2RAD:Or,RAD2DEG:Hr,generateUUID:pr,clamp:Oe,euclideanModulo:bc,mapLinear:Kd,inverseLerp:Jd,lerp:kr,damp:jd,pingpong:$d,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:hf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:df,normalize:fn,denormalize:js},Ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],p=n[5],v=n[8],g=s[0],m=s[3],h=s[6],b=s[1],T=s[4],y=s[7],R=s[2],E=s[5],C=s[8];return r[0]=a*g+o*b+l*R,r[3]=a*m+o*T+l*E,r[6]=a*h+o*y+l*C,r[1]=c*g+d*b+u*R,r[4]=c*m+d*T+u*E,r[7]=c*h+d*y+u*C,r[2]=f*g+p*b+v*R,r[5]=f*m+p*T+v*E,r[8]=f*h+p*y+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,f=o*l-d*r,p=c*r-a*l,v=e*u+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return t[0]=u*g,t[1]=(s*c-d*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(d*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new jt;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){let i=Ba("canvas");return i.style.display="block",i}var hh={};function Fr(i){i in hh||(hh[i]=!0,console.warn(i))}function pf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function mf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(i.r=er(i.r),i.g=er(i.g),i.b=er(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?io:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var uh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],fh=[.3127,.329],ph=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[fr]:{primaries:uh,whitePoint:fh,transfer:io,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:uh,whitePoint:fh,transfer:ye,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});var Os,Fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=Ba("canvas")),Os.width=t.width,Os.height=t.height;let n=Os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ba("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vf=0,Oa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=pr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xf=0,Tn=class i extends ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vs,s=vs,r=ui,a=xs,o=Zn,l=Ui,c=i.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=pr(),this.name="",this.source=new Oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=hu;Tn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(p+1)/2,R=(h+1)/2,E=(d+f)/4,C=(u+g)/4,L=(v+m)/4;return T>y&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=C/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(u-g)/b,this.z=(f-d)/b,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Oa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ka=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==f||c!==p||d!==v){let m=1-o,h=l*f+c*p+d*v+u*g,b=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){let R=Math.sqrt(T),E=Math.atan2(R,h*b);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let y=o*b;if(l=l*m+f*y,c=c*m+p*y,d=d*m+v*y,u=u*m+g*y,m===1-o){let R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+d*u+l*p-c*f,t[e+1]=l*v+d*f+c*u-o*p,t[e+2]=c*v+d*p+o*f-l*u,t[e+3]=d*v-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u-f*p*v;break;case"YXZ":this._x=f*d*u+c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u+f*p*v;break;case"ZXY":this._x=f*d*u-c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u-f*p*v;break;case"ZYX":this._x=f*d*u-c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u+f*p*v;break;case"YZX":this._x=f*d*u+c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u-f*p*v;break;case"XZY":this._x=f*d*u-c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new U,gh=new $i,Ni=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),ca.subVectors(this.max,Ir),ks.subVectors(t.a,Ir),zs.subVectors(t.b,Ir),Vs.subVectors(t.c,Ir),Gi.subVectors(zs,ks),Wi.subVectors(Vs,zs),ls.subVectors(ks,Vs);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ls.z,ls.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ls.z,0,-ls.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ls.y,ls.x,0];return!Ro(e,ks,zs,Vs,ca)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,ks,zs,Vs,ca))?!1:(ha.crossVectors(Gi,Wi),e=[ha.x,ha.y,ha.z],Ro(e,ks,zs,Vs,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ei=[new U,new U,new U,new U,new U,new U,new U,new U],Wn=new U,la=new Ni,ks=new U,zs=new U,Vs=new U,Gi=new U,Wi=new U,ls=new U,Ir=new U,ca=new U,ha=new U,cs=new U;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){cs.fromArray(i,r);let o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),d=n.dot(cs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var yf=new Ni,Pr=new U,Co=new U,bs=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);let e=Pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(Co)),this.expandByPoint(Pr.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new U,Io=new U,ua=new U,qi=new U,Po=new U,da=new U,Lo=new U,za=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Io.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(Io);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ua),o=qi.dot(this.direction),l=-qi.dot(ua),c=qi.lengthSq(),d=Math.abs(1-a*a),u,f,p,v;if(d>0)if(u=a*l-o,f=a*o-l,v=r*d,u>=0)if(f>=-v)if(f<=v){let g=1/d;u*=g,f*=g,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Io).addScaledVector(ua,f),p}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,r){Po.subVectors(e,t),da.subVectors(n,t),Lo.crossVectors(Po,da);let a=this.direction.dot(Lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,t);let l=o*this.direction.dot(da.crossVectors(qi,da));if(l<0)return null;let c=o*this.direction.dot(Po.cross(qi));if(c<0||l+c>a)return null;let d=-o*qi.dot(Lo);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class i{constructor(t,e,n,s,r,a,o,l,c,d,u,f,p,v,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,u,f,p,v,g,m)}set(t,e,n,s,r,a,o,l,c,d,u,f,p,v,g,m){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=p,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),a=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*d,p=a*u,v=o*d,g=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=p+v*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*d,p=l*u,v=c*d,g=c*u;e[0]=f+g*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=p*o-v,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*d,p=l*u,v=c*d,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*d,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*d,p=a*u,v=o*d,g=o*u;e[0]=l*d,e[4]=v*c-p,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,v=o*l,g=o*c;e[0]=l*d,e[4]=g-f*u,e[8]=v*u+p,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=p*u+v,e[10]=f-g*u}else if(t.order==="XZY"){let f=a*l,p=a*c,v=o*l,g=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=f*u+g,e[5]=a*d,e[9]=p*u-v,e[2]=v*u-p,e[6]=o*d,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,bf)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Xi.crossVectors(n,Pn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Xi.crossVectors(n,Pn)),Xi.normalize(),fa.crossVectors(Pn,Xi),s[0]=Xi.x,s[4]=fa.x,s[8]=Pn.x,s[1]=Xi.y,s[5]=fa.y,s[9]=Pn.y,s[2]=Xi.z,s[6]=fa.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],h=n[14],b=n[3],T=n[7],y=n[11],R=n[15],E=s[0],C=s[4],L=s[8],w=s[12],S=s[1],I=s[5],W=s[9],N=s[13],V=s[2],J=s[6],G=s[10],at=s[14],K=s[3],ot=s[7],pt=s[11],Lt=s[15];return r[0]=a*E+o*S+l*V+c*K,r[4]=a*C+o*I+l*J+c*ot,r[8]=a*L+o*W+l*G+c*pt,r[12]=a*w+o*N+l*at+c*Lt,r[1]=d*E+u*S+f*V+p*K,r[5]=d*C+u*I+f*J+p*ot,r[9]=d*L+u*W+f*G+p*pt,r[13]=d*w+u*N+f*at+p*Lt,r[2]=v*E+g*S+m*V+h*K,r[6]=v*C+g*I+m*J+h*ot,r[10]=v*L+g*W+m*G+h*pt,r[14]=v*w+g*N+m*at+h*Lt,r[3]=b*E+T*S+y*V+R*K,r[7]=b*C+T*I+y*J+R*ot,r[11]=b*L+T*W+y*G+R*pt,r[15]=b*w+T*N+y*at+R*Lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],f=t[10],p=t[14],v=t[3],g=t[7],m=t[11],h=t[15];return v*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+g*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*d-r*l*d)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*d-n*c*d)+h*(-s*o*d-e*l*u+e*o*f+s*a*u-n*a*f+n*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],p=t[11],v=t[12],g=t[13],m=t[14],h=t[15],b=u*m*c-g*f*c+g*l*p-o*m*p-u*l*h+o*f*h,T=v*f*c-d*m*c-v*l*p+a*m*p+d*l*h-a*f*h,y=d*g*c-v*u*c+v*o*p-a*g*p-d*o*h+a*u*h,R=v*u*l-d*g*l-v*o*f+a*g*f+d*o*m-a*u*m,E=e*b+n*T+s*y+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=b*C,t[1]=(g*f*r-u*m*r-g*s*p+n*m*p+u*s*h-n*f*h)*C,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*h+n*l*h)*C,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*C,t[4]=T*C,t[5]=(d*m*r-v*f*r+v*s*p-e*m*p-d*s*h+e*f*h)*C,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*h-e*l*h)*C,t[7]=(a*f*r-d*l*r+d*s*c-e*f*c-a*s*p+e*l*p)*C,t[8]=y*C,t[9]=(v*u*r-d*g*r-v*n*p+e*g*p+d*n*h-e*u*h)*C,t[10]=(a*g*r-v*o*r+v*n*c-e*g*c-a*n*h+e*o*h)*C,t[11]=(d*o*r-a*u*r-d*n*c+e*u*c+a*n*p-e*o*p)*C,t[12]=R*C,t[13]=(d*g*s-v*u*s+v*n*f-e*g*f-d*n*m+e*u*m)*C,t[14]=(v*o*s-a*g*s-v*n*l+e*g*l+a*n*m-e*o*m)*C,t[15]=(a*u*s-d*o*s+d*n*l-e*u*l-a*n*f+e*o*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,u=o+o,f=r*c,p=r*d,v=r*u,g=a*d,m=a*u,h=o*u,b=l*c,T=l*d,y=l*u,R=n.x,E=n.y,C=n.z;return s[0]=(1-(g+h))*R,s[1]=(p+y)*R,s[2]=(v-T)*R,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(f+h))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(v+T)*C,s[9]=(m-b)*C,s[10]=(1-(f+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),o=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);let c=1/r,d=1/a,u=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=d,qn.elements[5]*=d,qn.elements[6]*=d,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,e.setFromRotationMatrix(qn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Li){let l=this.elements,c=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,v;if(o===Li)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Fa)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Li){let l=this.elements,c=1/(e-t),d=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*d,v,g;if(o===Li)v=(a+r)*u,g=-2*u;else if(o===Fa)v=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hs=new U,qn=new Me,Mf=new U(0,0,0),bf=new U(1,1,1),Xi=new U,fa=new U,Pn=new U,vh=new Me,xh=new $i,gi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,yh=new U,Gs=new $i,_i=new Me,pa=new U,Lr=new U,wf=new U,Af=new $i,Mh=new U(1,0,0),bh=new U(0,1,0),Sh=new U(0,0,1),wh={type:"added"},Ef={type:"removed"},Ws={type:"childadded",child:null},Do={type:"childremoved",child:null},_n=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new gi,n=new $i,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new jt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Lr,pa,this.up):_i.lookAt(pa,Lr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(_i),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_n.DEFAULT_UP=new U(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new U,Ri=new U,Uo=new U,Ci=new U,qs=new U,Xs=new U,Ah=new U,No=new U,Fo=new U,Bo=new U,Oo=new Re,ko=new Re,zo=new Re,ms=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),Ri.subVectors(n,e),Uo.subVectors(t,e);let a=Xn.dot(Xn),o=Xn.dot(Ri),l=Xn.dot(Uo),c=Ri.dot(Ri),d=Ri.dot(Uo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*d)*f,v=(a*d-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oo.setScalar(0),ko.setScalar(0),zo.setScalar(0),Oo.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oo,r.x),a.addScaledVector(ko,r.y),a.addScaledVector(zo,r.z),a}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),Ri.subVectors(t,e),Xn.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Xn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;qs.subVectors(s,n),Xs.subVectors(r,n),No.subVectors(t,n);let l=qs.dot(No),c=Xs.dot(No);if(l<=0&&c<=0)return e.copy(n);Fo.subVectors(t,s);let d=qs.dot(Fo),u=Xs.dot(Fo);if(d>=0&&u<=d)return e.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(qs,a);Bo.subVectors(t,r);let p=qs.dot(Bo),v=Xs.dot(Bo);if(v>=0&&p<=v)return e.copy(r);let g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Xs,o);let m=d*v-p*u;if(m<=0&&u-d>=0&&p-v>=0)return Ah.subVectors(r,s),o=(u-d)/(u-d+(p-v)),e.copy(s).addScaledVector(Ah,o);let h=1/(m+g+f);return a=g*h,o=f*h,e.copy(n).addScaledVector(qs,a).addScaledVector(Xs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=bc(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vo(a,r,t+1/3),this.g=Vo(a,r,t),this.b=Vo(a,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return le.fromWorkingColorSpace(nn.copy(this),t),Math.round(Oe(nn.r*255,0,255))*65536+Math.round(Oe(nn.g*255,0,255))*256+Math.round(Oe(nn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=mn){le.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,s=nn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(ma);let n=kr(Yi.h,ma.h,e),s=kr(Yi.s,ma.s,e),r=kr(Yi.l,ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Xt;Xt.NAMES=wu;var Tf=0,Ss=class extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=pr(),this.name="",this.blending=Zi,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=ys,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==ys&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Kn=class extends Ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new U,ga=new Ct,Un=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=js(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=js(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=js(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}};var Va=class extends Un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ha=class extends Un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Un{constructor(t,e,n){super(new Float32Array(t),e,n)}},_f=0,On=new Me,Ho=new _n,Ys=new U,Ln=new Ni,Dr=new Ni,Xe=new U,rn=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?Ha:Va)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(Ln.min,Dr.min),Ln.expandByPoint(Xe),Xe.addVectors(Ln.max,Dr.max),Ln.expandByPoint(Xe)):(Ln.expandByPoint(Dr.min),Ln.expandByPoint(Dr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Xe.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(t,c),Xe.add(Ys)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new U,l[L]=new U;let c=new U,d=new U,u=new U,f=new Ct,p=new Ct,v=new Ct,g=new U,m=new U;function h(L,w,S){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,S),d.sub(c),u.sub(c),p.sub(f),v.sub(f);let I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(g.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(I),o[L].add(g),o[w].add(g),o[S].add(g),l[L].add(m),l[w].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,w=b.length;L<w;++L){let S=b[L],I=S.start,W=S.count;for(let N=I,V=I+W;N<V;N+=3)h(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let T=new U,y=new U,R=new U,E=new U;function C(L){R.fromBufferAttribute(s,L),E.copy(R);let w=o[L];T.copy(w),T.sub(R.multiplyScalar(R.dot(w))).normalize(),y.crossVectors(E,w);let I=y.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,I)}for(let L=0,w=b.length;L<w;++L){let S=b[L],I=S.start,W=S.count;for(let N=I,V=I+W;N<V;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,d=new U,u=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){let v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d),p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let h=0;h<d;h++)f[v++]=c[p++]}return new Un(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eh=new Me,hs=new za,va=new bs,Th=new U,xa=new U,ya=new U,Ma=new U,Go=new U,ba=new U,_h=new U,Sa=new U,se=class extends _n{constructor(t=new rn,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(Go.fromBufferAttribute(u,t),a?ba.addScaledVector(Go,d):ba.addScaledVector(Go.sub(e),d))}e.add(ba)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),hs.copy(t.ray).recast(t.near),!(va.containsPoint(hs.origin)===!1&&(hs.intersectSphere(va,Th)===null||hs.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(Eh.copy(r).invert(),hs.copy(t.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){let m=f[v],h=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,R=T;y<R;y+=3){let E=o.getX(y),C=o.getX(y+1),L=o.getX(y+2);s=wa(this,h,t,n,c,d,u,E,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){let b=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);s=wa(this,a,t,n,c,d,u,b,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){let m=f[v],h=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,R=T;y<R;y+=3){let E=y,C=y+1,L=y+2;s=wa(this,h,t,n,c,d,u,E,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){let b=m,T=m+1,y=m+2;s=wa(this,a,t,n,c,d,u,b,T,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Rf(i,t,e,n,s,r,a,o){let l;if(t.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ki,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function wa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xa),i.getVertexPosition(l,ya),i.getVertexPosition(c,Ma);let d=Rf(i,t,e,n,xa,ya,Ma,_h);if(d){let u=new U;ms.getBarycoord(_h,xa,ya,Ma,u),s&&(d.uv=ms.getInterpolatedAttribute(s,o,l,c,u,new Ct)),r&&(d.uv1=ms.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(d.normal=ms.getInterpolatedAttribute(a,o,l,c,u,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new U,materialIndex:0};ms.getNormal(xa,ya,Ma,f.normal),d.face=f,d.barycoord=u}return d}var ws=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],f=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(u,2));function v(g,m,h,b,T,y,R,E,C,L,w){let S=y/C,I=R/L,W=y/2,N=R/2,V=E/2,J=C+1,G=L+1,at=0,K=0,ot=new U;for(let pt=0;pt<G;pt++){let Lt=pt*I-N;for(let gt=0;gt<J;gt++){let Bt=gt*S-W;ot[g]=Bt*b,ot[m]=Lt*T,ot[h]=V,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[m]=0,ot[h]=E>0?1:-1,d.push(ot.x,ot.y,ot.z),u.push(gt/C),u.push(1-pt/L),at+=1}}for(let pt=0;pt<L;pt++)for(let Lt=0;Lt<C;Lt++){let gt=f+Lt+J*pt,Bt=f+Lt+J*(pt+1),j=f+(Lt+1)+J*(pt+1),lt=f+(Lt+1)+J*pt;l.push(gt,Bt,lt),l.push(Bt,j,lt),K+=6}o.addGroup(p,K,w),p+=K,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=cr(i[e]);for(let s in n)t[s]=n[s]}return t}function Cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var mr={clone:cr,merge:pn},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,we=class extends Ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=Cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ga=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new U,Rh=new Ct,Ch=new Ct,gn=class extends Ga{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ch),e.subVectors(Ch,Rh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qs=-90,Zs=1,kl=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Qs,Zs,t,e);s.layers=this.layers,this.add(s);let r=new gn(Qs,Zs,t,e);r.layers=this.layers,this.add(r);let a=new gn(Qs,Zs,t,e);a.layers=this.layers,this.add(a);let o=new gn(Qs,Zs,t,e);o.layers=this.layers,this.add(o);let l=new gn(Qs,Zs,t,e);l.layers=this.layers,this.add(l);let c=new gn(Qs,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(u,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Wa=class extends Tn{constructor(t,e,n,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zl=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ws(5,5,5),r=new we({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:pi});r.uniforms.tEquirect.value=e;let a=new se(s,r),o=e.minFilter;return e.minFilter===xs&&(e.minFilter=ui),new kl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Wo=new U,Lf=new U,Df=new jt,Pi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wo.subVectors(n,e).cross(Lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Df.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new bs,Aa=new U,Wr=class{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],u=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],h=s[12],b=s[13],T=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-p,y-h).normalize(),n[1].setComponents(l+r,f+c,m+p,y+h).normalize(),n[2].setComponents(l+a,f+d,m+v,y+b).normalize(),n[3].setComponents(l-a,f-d,m-v,y-b).normalize(),n[4].setComponents(l-o,f-u,m-g,y-T).normalize(),e===Li)n[5].setComponents(l+o,f+u,m+g,y+T).normalize();else if(e===Fa)n[5].setComponents(o,u,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Aa.x=s.normal.x>0?t.max.x:t.min.x,Aa.y=s.normal.y>0?t.max.y:t.min.y,Aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Uf(i){let t=new WeakMap;function e(o,l){let c=o.array,d=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){let v=u[f],g=u[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){let g=u[p];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fi=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=t/o,f=e/l,p=[],v=[],g=[],m=[];for(let h=0;h<d;h++){let b=h*f-a;for(let T=0;T<c;T++){let y=T*u-r;v.push(y,-b,0),g.push(0,0,1),m.push(T/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){let T=b+c*h,y=b+c*(h+1),R=b+1+c*(h+1),E=b+1+c*h;p.push(T,y,E),p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new fe(v,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
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
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf=`#ifdef USE_BATCHING
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
#endif`,Wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sp=`#define PI 3.141592653589793
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
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
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
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Dp=`struct PhysicalMaterial {
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
}`,Up=`
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
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
}`,Vm=`#if DEPTH_PACKING == 3200
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
}`,Hm=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,Jm=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,$m=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,ag=`#define TOON
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
}`,og=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Nf,alphahash_pars_fragment:Ff,alphamap_fragment:Bf,alphamap_pars_fragment:Of,alphatest_fragment:kf,alphatest_pars_fragment:zf,aomap_fragment:Vf,aomap_pars_fragment:Hf,batching_pars_vertex:Gf,batching_vertex:Wf,begin_vertex:qf,beginnormal_vertex:Xf,bsdfs:Yf,iridescence_fragment:Qf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:$f,color_fragment:tp,color_pars_fragment:ep,color_pars_vertex:np,color_vertex:ip,common:sp,cube_uv_reflection_fragment:rp,defaultnormal_vertex:ap,displacementmap_pars_vertex:op,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:hp,colorspace_fragment:up,colorspace_pars_fragment:dp,envmap_fragment:fp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:_p,envmap_vertex:vp,fog_vertex:xp,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:bp,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Ep,lights_pars_begin:Tp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Pp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Up,lights_fragment_maps:Np,lights_fragment_end:Fp,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:zp,map_fragment:Vp,map_pars_fragment:Hp,map_particle_fragment:Gp,map_particle_pars_fragment:Wp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:Yp,morphcolor_vertex:Qp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Kp,morphtarget_vertex:Jp,normal_fragment_begin:jp,normal_fragment_maps:$p,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:am,iridescence_pars_fragment:om,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:vm,shadowmap_vertex:xm,shadowmask_pars_fragment:ym,skinbase_vertex:Mm,skinning_pars_vertex:bm,skinning_vertex:Sm,skinnormal_vertex:wm,specularmap_fragment:Am,specularmap_pars_fragment:Em,tonemapping_fragment:Tm,tonemapping_pars_fragment:_m,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Im,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Um,background_frag:Nm,backgroundCube_vert:Fm,backgroundCube_frag:Bm,cube_vert:Om,cube_frag:km,depth_vert:zm,depth_frag:Vm,distanceRGBA_vert:Hm,distanceRGBA_frag:Gm,equirect_vert:Wm,equirect_frag:qm,linedashed_vert:Xm,linedashed_frag:Ym,meshbasic_vert:Qm,meshbasic_frag:Zm,meshlambert_vert:Km,meshlambert_frag:Jm,meshmatcap_vert:jm,meshmatcap_frag:$m,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},St={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ci={basic:{uniforms:pn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:pn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:pn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:pn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:pn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:pn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:pn([St.points,St.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:pn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:pn([St.common,St.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:pn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:pn([St.sprite,St.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:pn([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:pn([St.lights,St.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ci.physical={uniforms:pn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Ea={r:0,b:0,g:0},ds=new gi,pg=new Me;function mg(i,t,e,n,s,r,a){let o=new Xt(0),l=r===!0?0:1,c,d,u=null,f=0,p=null;function v(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function g(b){let T=!1,y=v(b);y===null?h(o,l):y&&y.isColor&&(h(y,1),T=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,T){let y=v(T);y&&(y.isCubeTexture||y.mapping===no)?(d===void 0&&(d=new se(new ws(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:cr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ds.copy(T.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(ds)),d.material.toneMapped=le.getTransfer(y.colorSpace)!==ye,(u!==y||f!==y.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new se(new Fi(2,2),new we({name:"BackgroundMaterial",uniforms:cr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=le.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,T){b.getRGB(Ea,Au(i)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:g,addToRenderList:m}}function gg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(S,I,W,N,V){let J=!1,G=u(N,W,I);r!==G&&(r=G,c(r.object)),J=p(S,N,W,V),J&&v(S,N,W,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(S,I,W,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function u(S,I,W){let N=W.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let J=V[I.id];J===void 0&&(J={},V[I.id]=J);let G=J[N];return G===void 0&&(G=f(l()),J[N]=G),G}function f(S){let I=[],W=[],N=[];for(let V=0;V<e;V++)I[V]=0,W[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,I,W,N){let V=r.attributes,J=I.attributes,G=0,at=W.getAttributes();for(let K in at)if(at[K].location>=0){let pt=V[K],Lt=J[K];if(Lt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Lt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Lt=S.instanceColor)),pt===void 0||pt.attribute!==Lt||Lt&&pt.data!==Lt.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function v(S,I,W,N){let V={},J=I.attributes,G=0,at=W.getAttributes();for(let K in at)if(at[K].location>=0){let pt=J[K];pt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor));let Lt={};Lt.attribute=pt,pt&&pt.data&&(Lt.data=pt.data),V[K]=Lt,G++}r.attributes=V,r.attributesNum=G,r.index=N}function g(){let S=r.newAttributes;for(let I=0,W=S.length;I<W;I++)S[I]=0}function m(S){h(S,0)}function h(S,I){let W=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;W[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),V[S]!==I&&(i.vertexAttribDivisor(S,I),V[S]=I)}function b(){let S=r.newAttributes,I=r.enabledAttributes;for(let W=0,N=I.length;W<N;W++)I[W]!==S[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function T(S,I,W,N,V,J,G){G===!0?i.vertexAttribIPointer(S,I,W,V,J):i.vertexAttribPointer(S,I,W,N,V,J)}function y(S,I,W,N){g();let V=N.attributes,J=W.getAttributes(),G=I.defaultAttributeValues;for(let at in J){let K=J[at];if(K.location>=0){let ot=V[at];if(ot===void 0&&(at==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),at==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){let pt=ot.normalized,Lt=ot.itemSize,gt=t.get(ot);if(gt===void 0)continue;let Bt=gt.buffer,j=gt.type,lt=gt.bytesPerElement,Tt=j===i.INT||j===i.UNSIGNED_INT||ot.gpuType===pc;if(ot.isInterleavedBufferAttribute){let vt=ot.data,Nt=vt.stride,Ht=ot.offset;if(vt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<K.locationSize;Jt++)h(K.location+Jt,vt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Jt=0;Jt<K.locationSize;Jt++)m(K.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Jt=0;Jt<K.locationSize;Jt++)T(K.location+Jt,Lt/K.locationSize,j,pt,Nt*lt,(Ht+Lt/K.locationSize*Jt)*lt,Tt)}else{if(ot.isInstancedBufferAttribute){for(let vt=0;vt<K.locationSize;vt++)h(K.location+vt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let vt=0;vt<K.locationSize;vt++)m(K.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let vt=0;vt<K.locationSize;vt++)T(K.location+vt,Lt/K.locationSize,j,pt,Lt*lt,Lt/K.locationSize*vt*lt,Tt)}}else if(G!==void 0){let pt=G[at];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(K.location,pt);break;case 3:i.vertexAttrib3fv(K.location,pt);break;case 4:i.vertexAttrib4fv(K.location,pt);break;default:i.vertexAttrib1fv(K.location,pt)}}}}b()}function R(){L();for(let S in n){let I=n[S];for(let W in I){let N=I[W];for(let V in N)d(N[V].object),delete N[V];delete I[W]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let W in I){let N=I[W];for(let V in N)d(N[V].object),delete N[V];delete I[W]}delete n[S.id]}function C(S){for(let I in n){let W=n[I];if(W[S.id]===void 0)continue;let N=W[S.id];for(let V in N)d(N[V].object),delete N[V];delete W[S.id]}}function L(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function vg(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function o(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=d[v];e.update(p,n,1)}function l(c,d,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],d[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=d[g]*f[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let L=C===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ui&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==di&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:R,maxSamples:E}}function yg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Pi,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,p){let v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?d(null):c();else{let b=r?0:n,T=b*4,y=h.clippingState||null;l.value=y,y=d(v,f,T,p);for(let R=0;R!==T;++R)y[R]=e[R];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,f,p,v){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let h=p+g*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,y=p;T!==g;++T,y+=4)a.copy(u[T]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Mg(i){let t=new WeakMap;function e(a,o){return o===al?a.mapping=sr:o===ol&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===al||o===ol)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new zl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var hr=class extends Ga{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$s=4,Ih=[.125,.215,.35,.446,.526,.582],gs=20,qo=new hr,Ph=new Xt,Xo=null,Yo=0,Qo=0,Zo=!1,ps=(1+Math.sqrt(5))/2,Ks=1/ps,Lh=[new U(-ps,Ks,0),new U(ps,Ks,0),new U(-Ks,0,ps),new U(Ks,0,ps),new U(0,ps,-Ks),new U(0,ps,Ks),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],ur=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,Yo,Qo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Nn,format:Zn,colorSpace:fr,depthBuffer:!1},s=Dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Sg(r,t,e)}return s}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,s){let o=new gn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ph),d.toneMapping=mi,d.autoClear=!1;let p=new Kn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new se(new ws,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ph),g=!0);for(let h=0;h<6;h++){let b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));let T=this._cubeSize;Ta(s,b*T,h>2?T:0,T,T),d.setRenderTarget(s),g&&d.render(v,o),d.render(t,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lh[(s-r-1)%Lh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new se(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gs-1),g=r/v,m=isFinite(r)?1+Math.floor(d*g):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);let h=[],b=0;for(let C=0;C<gs;++C){let L=C/g,w=Math.exp(-L*L/2);h.push(w),C===0?b+=w:C<m&&(b+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-n;let y=this._sizeLods[s],R=3*y*(s>T-$s?s-T+$s:0),E=4*(this._cubeSize-y);Ta(e,R,E,3*y,2*y),l.setRenderTarget(e),l.render(u,qo)}};function bg(i){let t=[],e=[],n=[],s=i,r=i-$s+1+Ih.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-$s?l=Ih[a-i+$s-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,v=6,g=3,m=2,h=1,b=new Float32Array(g*v*p),T=new Float32Array(m*v*p),y=new Float32Array(h*v*p);for(let E=0;E<p;E++){let C=E%3*2/3-1,L=E>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(w,g*v*E),T.set(f,m*v*E);let S=[E,E,E,E,E,E];y.set(S,h*v*E)}let R=new rn;R.setAttribute("position",new Un(b,g)),R.setAttribute("uv",new Un(T,m)),R.setAttribute("faceIndex",new Un(y,h)),t.push(R),s>$s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dh(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sg(i,t,e){let n=new Float32Array(gs),s=new U(0,1,0);return new we({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Uh(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Nh(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function wg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===al||l===ol,d=l===sr||l===rr;if(c||d){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ur(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new ur(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ag(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let v in f.attributes)t.remove(f.attributes[v]);for(let v in f.morphAttributes){let g=f.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)t.remove(g[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let v in f)t.update(f[v],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let v in p){let g=p[v];for(let m=0,h=g.length;m<h;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,v=u.attributes.position,g=0;if(p!==null){let b=p.array;g=p.version;for(let T=0,y=b.length;T<y;T+=3){let R=b[T+0],E=b[T+1],C=b[T+2];f.push(R,E,E,C,C,R)}}else if(v!==void 0){let b=v.array;g=v.version;for(let T=0,y=b.length/3-1;T<y;T+=3){let R=T+0,E=T+1,C=T+2;f.push(R,E,E,C,C,R)}}else return;let m=new(Su(f)?Ha:Va)(f,1);m.version=g;let h=r.get(u);h&&t.remove(h),r.set(u,m)}function d(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Tg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),e.update(p,n,v))}function d(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];e.update(m,n,1)}function u(f,p,v,g){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,v);let h=0;for(let b=0;b<v;b++)h+=p[b]*g[b];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function _g(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==u){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;p===!0&&(T=1),v===!0&&(T=2),g===!0&&(T=3);let y=o.attributes.position.count*T,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*R*4*u),C=new ka(E,y,R,u);C.type=di,C.needsUpdate=!0;let L=T*4;for(let S=0;S<u;S++){let I=m[S],W=h[S],N=b[S],V=y*R*4*S;for(let J=0;J<I.count;J++){let G=J*L;p===!0&&(s.fromBufferAttribute(I,J),E[V+G+0]=s.x,E[V+G+1]=s.y,E[V+G+2]=s.z,E[V+G+3]=0),v===!0&&(s.fromBufferAttribute(W,J),E[V+G+4]=s.x,E[V+G+5]=s.y,E[V+G+6]=s.z,E[V+G+7]=0),g===!0&&(s.fromBufferAttribute(N,J),E[V+G+8]=s.x,E[V+G+9]=s.y,E[V+G+10]=s.z,E[V+G+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Ct(y,R)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var qa=class extends Tn{constructor(t,e,n,s,r,a,o,l,c,d=tr){if(d!==tr&&d!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===tr&&(n=Ms),n===void 0&&d===lr&&(n=or),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Tu=new Tn,Fh=new qa(1,1),_u=new ka,Ru=new Ol,Cu=new Wa,Bh=[],Oh=[],kh=new Float32Array(16),zh=new Float32Array(9),Vh=new Float32Array(4);function gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function so(i,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;Vh.set(n),i.uniformMatrix2fv(this.addr,!1,Vh),ze(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;zh.set(n),i.uniformMatrix3fv(this.addr,!1,zh),ze(e,n)}}function Fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;kh.set(n),i.uniformMatrix4fv(this.addr,!1,kh),ze(e,n)}}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=bu,r=Fh):r=Tu,e.setTexture2D(t||r,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ru,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cu,s)}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_u,s)}function Zg(i){switch(i){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return Og;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Vg;case 36294:return Hg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Qg}}function Kg(i,t){i.uniform1fv(this.addr,t)}function Jg(i,t){let e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){let e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function $g(i,t){let e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function t0(i,t){let e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e0(i,t){let e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n0(i,t){let e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i0(i,t){i.uniform1iv(this.addr,t)}function s0(i,t){i.uniform2iv(this.addr,t)}function r0(i,t){i.uniform3iv(this.addr,t)}function a0(i,t){i.uniform4iv(this.addr,t)}function o0(i,t){i.uniform1uiv(this.addr,t)}function l0(i,t){i.uniform2uiv(this.addr,t)}function c0(i,t){i.uniform3uiv(this.addr,t)}function h0(i,t){i.uniform4uiv(this.addr,t)}function u0(i,t,e){let n=this.cache,s=t.length,r=so(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Tu,r[a])}function d0(i,t,e){let n=this.cache,s=t.length,r=so(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ru,r[a])}function f0(i,t,e){let n=this.cache,s=t.length,r=so(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cu,r[a])}function p0(i,t,e){let n=this.cache,s=t.length,r=so(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_u,r[a])}function m0(i){switch(i){case 5126:return Kg;case 35664:return Jg;case 35665:return jg;case 35666:return $g;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}var Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}},Hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}},Gl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ko=/(\w+)(\])?(\[|\.)?/g;function Hh(i,t){i.seq.push(t),i.map[t.id]=t}function g0(i,t,e){let n=i.name,s=n.length;for(Ko.lastIndex=0;;){let r=Ko.exec(n),a=Ko.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hh(e,c===void 0?new Vl(o,i,t):new Hl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Gl(o),Hh(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);g0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Gh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var v0=37297,x0=0;function y0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wh=new jt;function M0(i){le._getMatrix(Wh,le.workingColorSpace,i);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case io:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+y0(i.getShaderSource(t),a)}else return s}function b0(i,t){let e=M0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function S0(i,t){let e;switch(t){case Ld:e="Linear";break;case Dd:e="Reinhard";break;case Ud:e="Cineon";break;case Nd:e="ACESFilmic";break;case Bd:e="AgX";break;case Od:e="Neutral";break;case Fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _a=new U;function w0(){le.getLuminanceCoefficients(_a);let i=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function E0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Br(i){return i!==""}function Xh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(_0,C0)}var R0=new Map;function C0(i,t){let e=ne[t];if(e===void 0){let n=R0.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wl(e)}var I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(I0,P0)}function P0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function L0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===md?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function D0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case no:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===rr&&(t="ENVMAP_MODE_REFRACTION"),t}function N0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cu:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Pd:t="ENVMAP_BLENDING_ADD";break}return t}function F0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function B0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=L0(e),c=D0(e),d=U0(e),u=N0(e),f=F0(e),p=A0(e),v=E0(r),g=s.createProgram(),m,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Br).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Br).join(`
`),h.length>0&&(h+=`
`)):(m=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),h=[Zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ne.tonemapping_pars_fragment:"",e.toneMapping!==mi?S0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),w0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),a=Wl(a),a=Xh(a,e),a=Yh(a,e),o=Wl(o),o=Xh(o,e),o=Yh(o,e),a=Qh(a),o=Qh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let T=b+m+a,y=b+h+o,R=Gh(s,s.VERTEX_SHADER,T),E=Gh(s,s.FRAGMENT_SHADER,y);s.attachShader(g,R),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(I){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(E).trim(),J=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,E);else{let at=qh(s,R,"vertex"),K=qh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+at+`
`+K)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(N===""||V==="")&&(G=!1);G&&(I.diagnostics={runnable:J,programLog:W,vertexShader:{log:N,prefix:m},fragmentShader:{log:V,prefix:h}})}s.deleteShader(R),s.deleteShader(E),L=new nr(s,g),w=T0(s,g)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,v0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=E,this}var O0=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xl(t),e.set(t,n)),n}},Xl=class{constructor(t){this.id=O0++,this.code=t,this.usedTimes=0}};function k0(i,t,e,n,s,r,a){let o=new Gr,l=new ql,c=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,I,W,N){let V=W.fog,J=N.geometry,G=w.isMeshStandardMaterial?W.environment:null,at=(w.isMeshStandardMaterial?e:t).get(w.envMap||G),K=at&&at.mapping===no?at.image.height:null,ot=v[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=pt!==void 0?pt.length:0,gt=0;J.morphAttributes.position!==void 0&&(gt=1),J.morphAttributes.normal!==void 0&&(gt=2),J.morphAttributes.color!==void 0&&(gt=3);let Bt,j,lt,Tt;if(ot){let Kt=ci[ot];Bt=Kt.vertexShader,j=Kt.fragmentShader}else Bt=w.vertexShader,j=w.fragmentShader,l.update(w),lt=l.getVertexShaderID(w),Tt=l.getFragmentShaderID(w);let vt=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Ht=N.isInstancedMesh===!0,Jt=N.isBatchedMesh===!0,de=!!w.map,$t=!!w.matcap,be=!!at,O=!!w.aoMap,Ne=!!w.lightMap,te=!!w.bumpMap,Zt=!!w.normalMap,Ft=!!w.displacementMap,ce=!!w.emissiveMap,Ut=!!w.metalnessMap,_=!!w.roughnessMap,M=w.anisotropy>0,H=w.clearcoat>0,et=w.dispersion>0,it=w.iridescence>0,$=w.sheen>0,It=w.transmission>0,bt=M&&!!w.anisotropyMap,Rt=H&&!!w.clearcoatMap,Wt=H&&!!w.clearcoatNormalMap,st=H&&!!w.clearcoatRoughnessMap,Et=it&&!!w.iridescenceMap,kt=it&&!!w.iridescenceThicknessMap,Ot=$&&!!w.sheenColorMap,Mt=$&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,Vt=!!w.specularColorMap,qt=!!w.specularIntensityMap,F=It&&!!w.transmissionMap,dt=It&&!!w.thicknessMap,Z=!!w.gradientMap,nt=!!w.alphaMap,wt=w.alphaTest>0,xt=!!w.alphaHash,Gt=!!w.extensions,ie=mi;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ie={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:Bt,fragmentShader:j,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:Tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Jt,batchingColor:Jt&&N._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&N.instanceColor!==null,instancingMorph:Ht&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:fr,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:$t,envMap:be,envMapMode:be&&at.mapping,envMapCubeUVHeight:K,aoMap:O,lightMap:Ne,bumpMap:te,normalMap:Zt,displacementMap:f&&Ft,emissiveMap:ce,normalMapObjectSpace:Zt&&w.normalMapType===Hd,normalMapTangentSpace:Zt&&w.normalMapType===Mu,metalnessMap:Ut,roughnessMap:_,anisotropy:M,anisotropyMap:bt,clearcoat:H,clearcoatMap:Rt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:st,dispersion:et,iridescence:it,iridescenceMap:Et,iridescenceThicknessMap:kt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:Yt,specularColorMap:Vt,specularIntensityMap:qt,transmission:It,transmissionMap:F,thicknessMap:dt,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Zi&&w.alphaToCoverage===!1,alphaMap:nt,alphaTest:wt,alphaHash:xt,combine:w.combine,mapUv:de&&g(w.map.channel),aoMapUv:O&&g(w.aoMap.channel),lightMapUv:Ne&&g(w.lightMap.channel),bumpMapUv:te&&g(w.bumpMap.channel),normalMapUv:Zt&&g(w.normalMap.channel),displacementMapUv:Ft&&g(w.displacementMap.channel),emissiveMapUv:ce&&g(w.emissiveMap.channel),metalnessMapUv:Ut&&g(w.metalnessMap.channel),roughnessMapUv:_&&g(w.roughnessMap.channel),anisotropyMapUv:bt&&g(w.anisotropyMap.channel),clearcoatMapUv:Rt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(w.sheenRoughnessMap.channel),specularMapUv:Yt&&g(w.specularMap.channel),specularColorMapUv:Vt&&g(w.specularColorMap.channel),specularIntensityMapUv:qt&&g(w.specularIntensityMap.channel),transmissionMapUv:F&&g(w.transmissionMap.channel),thicknessMapUv:dt&&g(w.thicknessMap.channel),alphaMapUv:nt&&g(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Zt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(de||nt),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===ye,decodeVideoTextureEmissive:ce&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Yn,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function h(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(b(S,w),T(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function b(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function T(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){let S=v[w.type],I;if(S){let W=ci[S];I=mr.clone(W.uniforms)}else I=w.uniforms;return I}function R(w,S){let I;for(let W=0,N=d.length;W<N;W++){let V=d[W];if(V.cacheKey===S){I=V,++I.usedTimes;break}}return I===void 0&&(I=new B0(i,S,w,r),d.push(I)),I}function E(w){if(--w.usedTimes===0){let S=d.indexOf(w);d[S]=d[d.length-1],d.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:d,dispose:L}}function z0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,v,g,m){let h=i[t];return h===void 0?(h={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[t]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=u.renderOrder,h.z=g,h.group=m),t++,h}function o(u,f,p,v,g,m){let h=a(u,f,p,v,g,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(u,f,p,v,g,m){let h=a(u,f,p,v,g,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(u,f){e.length>1&&e.sort(u||V0),n.length>1&&n.sort(f||Kh),s.length>1&&s.sort(f||Kh)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function H0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Jh,i.set(n,[a])):s>=r.length?(a=new Jh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function G0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Xt};break;case"SpotLight":e={position:new U,direction:new U,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function W0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var q0=0;function X0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Y0(i){let t=new G0,e=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new Me,a=new Me;function o(c){let d=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,v=0,g=0,m=0,h=0,b=0,T=0,y=0,R=0,E=0,C=0;c.sort(X0);for(let w=0,S=c.length;w<S;w++){let I=c[w],W=I.color,N=I.intensity,V=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=W.r*N,u+=W.g*N,f+=W.b*N;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],N);C++}else if(I.isDirectionalLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let at=I.shadow,K=e.get(I);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,b++}n.directional[p]=G,p++}else if(I.isSpotLight){let G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(W).multiplyScalar(N),G.distance=V,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[g]=G;let at=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,at.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[g]=at.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,n.spotShadow[g]=K,n.spotShadowMap[g]=J,y++}g++}else if(I.isRectAreaLight){let G=t.get(I);G.color.copy(W).multiplyScalar(N),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let at=I.shadow,K=e.get(I);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,K.shadowCameraNear=at.camera.near,K.shadowCameraFar=at.camera.far,n.pointShadow[v]=K,n.pointShadowMap[v]=J,n.pointShadowMatrix[v]=I.shadow.matrix,T++}n.point[v]=G,v++}else if(I.isHemisphereLight){let G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(N),G.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[h]=G,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=C,n.version=q0++)}function l(c,d){let u=0,f=0,p=0,v=0,g=0,m=d.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){let T=c[h];if(T.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(T.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function jh(i){let t=new Y0(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Q0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new jh(i),t.set(s,[o])):r>=a.length?(o=new jh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yl=class extends Ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ql=class extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`;function J0(i,t,e){let n=new Wr,s=new Ct,r=new Ct,a=new Re,o=new Yl({depthPacking:Vd}),l=new Ql,c={},d=e.maxTextureSize,u={[Ki]:sn,[sn]:Ki,[Yn]:Yn},f=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Z0,fragmentShader:K0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new rn;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new se(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let h=this.type;this.render=function(E,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(pi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let N=h!==Ii&&this.type===Ii,V=h===Ii&&this.type!==Ii;for(let J=0,G=E.length;J<G;J++){let at=E[J],K=at.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ot=K.getFrameExtents();if(s.multiply(ot),r.copy(K.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ot.x),s.x=r.x*ot.x,K.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ot.y),s.y=r.y*ot.y,K.mapSize.y=r.y)),K.map===null||N===!0||V===!0){let Lt=this.type!==Ii?{minFilter:Dn,magFilter:Dn}:{};K.map!==null&&K.map.dispose(),K.map=new Ke(s.x,s.y,Lt),K.map.texture.name=at.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let pt=K.getViewportCount();for(let Lt=0;Lt<pt;Lt++){let gt=K.getViewport(Lt);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),W.viewport(a),K.updateMatrices(at,Lt),n=K.getFrustum(),y(C,L,K.camera,at,this.type)}K.isPointLightShadow!==!0&&this.type===Ii&&b(K,L),K.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,I)};function b(E,C){let L=t.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ke(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,L,f,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,L,p,g,null)}function T(E,C,L,w){let S=null,I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let W=S.uuid,N=C.uuid,V=c[W];V===void 0&&(V={},c[W]=V);let J=V[N];J===void 0&&(J=S.clone(),V[N]=J,C.addEventListener("dispose",R)),S=J}if(S.visible=C.visible,S.wireframe=C.wireframe,w===Ii?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let W=i.properties.get(S);W.light=L}return S}function y(E,C,L,w,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Ii)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let N=t.update(E),V=E.material;if(Array.isArray(V)){let J=N.groups;for(let G=0,at=J.length;G<at;G++){let K=J[G],ot=V[K.materialIndex];if(ot&&ot.visible){let pt=T(E,ot,w,S);E.onBeforeShadow(i,E,C,L,N,pt,K),i.renderBufferDirect(L,null,N,pt,E,K),E.onAfterShadow(i,E,C,L,N,pt,K)}}}else if(V.visible){let J=T(E,V,w,S);E.onBeforeShadow(i,E,C,L,N,J,null),i.renderBufferDirect(L,null,N,J,E,null),E.onAfterShadow(i,E,C,L,N,J,null)}}let W=E.children;for(let N=0,V=W.length;N<V;N++)y(W[N],C,L,w,S)}function R(E){E.target.removeEventListener("dispose",R);for(let L in c){let w=c[L],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var j0={[$o]:tl,[el]:sl,[nl]:rl,[ir]:il,[tl]:$o,[sl]:el,[rl]:nl,[il]:ir};function $0(i,t){function e(){let F=!1,dt=new Re,Z=null,nt=new Re(0,0,0,0);return{setMask:function(wt){Z!==wt&&!F&&(i.colorMask(wt,wt,wt,wt),Z=wt)},setLocked:function(wt){F=wt},setClear:function(wt,xt,Gt,ie,Ie){Ie===!0&&(wt*=ie,xt*=ie,Gt*=ie),dt.set(wt,xt,Gt,ie),nt.equals(dt)===!1&&(i.clearColor(wt,xt,Gt,ie),nt.copy(dt))},reset:function(){F=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let F=!1,dt=!1,Z=null,nt=null,wt=null;return{setReversed:function(xt){if(dt!==xt){let Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let ie=wt;wt=null,this.setClear(ie)}dt=xt},getReversed:function(){return dt},setTest:function(xt){xt?vt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(xt){Z!==xt&&!F&&(i.depthMask(xt),Z=xt)},setFunc:function(xt){if(dt&&(xt=j0[xt]),nt!==xt){switch(xt){case $o:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=xt}},setLocked:function(xt){F=xt},setClear:function(xt){wt!==xt&&(dt&&(xt=1-xt),i.clearDepth(xt),wt=xt)},reset:function(){F=!1,Z=null,nt=null,wt=null,dt=!1}}}function s(){let F=!1,dt=null,Z=null,nt=null,wt=null,xt=null,Gt=null,ie=null,Ie=null;return{setTest:function(Kt){F||(Kt?vt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(Kt){dt!==Kt&&!F&&(i.stencilMask(Kt),dt=Kt)},setFunc:function(Kt,Ye,Je){(Z!==Kt||nt!==Ye||wt!==Je)&&(i.stencilFunc(Kt,Ye,Je),Z=Kt,nt=Ye,wt=Je)},setOp:function(Kt,Ye,Je){(xt!==Kt||Gt!==Ye||ie!==Je)&&(i.stencilOp(Kt,Ye,Je),xt=Kt,Gt=Ye,ie=Je)},setLocked:function(Kt){F=Kt},setClear:function(Kt){Ie!==Kt&&(i.clearStencil(Kt),Ie=Kt)},reset:function(){F=!1,dt=null,Z=null,nt=null,wt=null,xt=null,Gt=null,ie=null,Ie=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,h=null,b=null,T=null,y=null,R=null,E=null,C=new Xt(0,0,0),L=0,w=!1,S=null,I=null,W=null,N=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,at=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=at>=1):K.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=at>=2);let ot=null,pt={},Lt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Bt=new Re().fromArray(Lt),j=new Re().fromArray(gt);function lt(F,dt,Z,nt){let wt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(F,xt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<Z;Gt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(dt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return xt}let Tt={};Tt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(ir),te(!1),Zt(th),vt(i.CULL_FACE),O(pi);function vt(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function Nt(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function Ht(F,dt){return u[F]!==dt?(i.bindFramebuffer(F,dt),u[F]=dt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Jt(F,dt){let Z=p,nt=!1;if(F){Z=f.get(dt),Z===void 0&&(Z=[],f.set(dt,Z));let wt=F.textures;if(Z.length!==wt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Gt=wt.length;xt<Gt;xt++)Z[xt]=i.COLOR_ATTACHMENT0+xt;Z.length=wt.length,nt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Z)}function de(F){return v!==F?(i.useProgram(F),v=F,!0):!1}let $t={[hi]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};$t[xd]=i.MIN,$t[yd]=i.MAX;let be={[to]:i.ZERO,[Kr]:i.ONE,[eo]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[ys]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[Rd]:i.CONSTANT_ALPHA,[Cd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(F,dt,Z,nt,wt,xt,Gt,ie,Ie,Kt){if(F===pi){g===!0&&(Nt(i.BLEND),g=!1);return}if(g===!1&&(vt(i.BLEND),g=!0),F!==Rs){if(F!==m||Kt!==w){if((h!==hi||y!==hi)&&(i.blendEquation(i.FUNC_ADD),h=hi,y=hi),Kt)switch(F){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,T=null,R=null,E=null,C.set(0,0,0),L=0,m=F,w=Kt}return}wt=wt||dt,xt=xt||Z,Gt=Gt||nt,(dt!==h||wt!==y)&&(i.blendEquationSeparate($t[dt],$t[wt]),h=dt,y=wt),(Z!==b||nt!==T||xt!==R||Gt!==E)&&(i.blendFuncSeparate(be[Z],be[nt],be[xt],be[Gt]),b=Z,T=nt,R=xt,E=Gt),(ie.equals(C)===!1||Ie!==L)&&(i.blendColor(ie.r,ie.g,ie.b,Ie),C.copy(ie),L=Ie),m=F,w=!1}function Ne(F,dt){F.side===Yn?Nt(i.CULL_FACE):vt(i.CULL_FACE);let Z=F.side===sn;dt&&(Z=!Z),te(Z),F.blending===Zi&&F.transparent===!1?O(pi):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let nt=F.stencilWrite;o.setTest(nt),nt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function Zt(F){F!==fd?(vt(i.CULL_FACE),F!==I&&(F===th?i.cullFace(i.BACK):F===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),I=F}function Ft(F){F!==W&&(G&&i.lineWidth(F),W=F)}function ce(F,dt,Z){F?(vt(i.POLYGON_OFFSET_FILL),(N!==dt||V!==Z)&&(i.polygonOffset(dt,Z),N=dt,V=Z)):Nt(i.POLYGON_OFFSET_FILL)}function Ut(F){F?vt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function _(F){F===void 0&&(F=i.TEXTURE0+J-1),ot!==F&&(i.activeTexture(F),ot=F)}function M(F,dt,Z){Z===void 0&&(ot===null?Z=i.TEXTURE0+J-1:Z=ot);let nt=pt[Z];nt===void 0&&(nt={type:void 0,texture:void 0},pt[Z]=nt),(nt.type!==F||nt.texture!==dt)&&(ot!==Z&&(i.activeTexture(Z),ot=Z),i.bindTexture(F,dt||Tt[F]),nt.type=F,nt.texture=dt)}function H(){let F=pt[ot];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){Bt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Bt.copy(F))}function Mt(F){j.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function Yt(F,dt){let Z=c.get(dt);Z===void 0&&(Z=new WeakMap,c.set(dt,Z));let nt=Z.get(F);nt===void 0&&(nt=i.getUniformBlockIndex(dt,F.name),Z.set(F,nt))}function Vt(F,dt){let nt=c.get(dt).get(F);l.get(dt)!==nt&&(i.uniformBlockBinding(dt,nt,F.__bindingPointIndex),l.set(dt,nt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ot=null,pt={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,h=null,b=null,T=null,y=null,R=null,E=null,C=new Xt(0,0,0),L=0,w=!1,S=null,I=null,W=null,N=null,V=null,Bt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Nt,bindFramebuffer:Ht,drawBuffers:Jt,useProgram:de,setBlending:O,setMaterial:Ne,setFlipSided:te,setCullFace:Zt,setLineWidth:Ft,setPolygonOffset:ce,setScissorTest:Ut,activeTexture:_,bindTexture:M,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:Et,texImage3D:kt,updateUBOMapping:Yt,uniformBlockBinding:Vt,texStorage2D:Wt,texStorage3D:st,texSubImage2D:$,texSubImage3D:It,compressedTexSubImage2D:bt,compressedTexSubImage3D:Rt,scissor:Ot,viewport:Mt,reset:qt}}function $h(i,t,e,n){let s=tv(n);switch(e){case pu:return i*t;case gu:return i*t;case vu:return i*t*2;case vc:return i*t/s.components*s.byteLength;case xc:return i*t/s.components*s.byteLength;case xu:return i*t*2/s.components*s.byteLength;case yc:return i*t*2/s.components*s.byteLength;case mu:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case Mc:return i*t*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hl:case dl:return Math.max(i,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(t,8)/2;case fl:case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ua:case Il:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yu:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tv(i){switch(i){case Ui:case uu:return{byteLength:1,components:1};case Vr:case du:case Nn:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case Ms:case pc:case di:return{byteLength:4,components:1};case fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ev(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,d=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,M){return p?new OffscreenCanvas(_,M):Ba("canvas")}function g(_,M,H){let et=1,it=Ut(_);if((it.width>H||it.height>H)&&(et=H/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let $=Math.floor(et*it.width),It=Math.floor(et*it.height);u===void 0&&(u=v($,It));let bt=M?v($,It):u;return bt.width=$,bt.height=It,bt.getContext("2d").drawImage(_,0,0,$,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+$+"x"+It+")."),bt}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),_;return _}function m(_){return _.generateMipmaps}function h(_){i.generateMipmap(_)}function b(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(_,M,H,et,it=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let $=M;if(M===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),M===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){let It=it?io:le.getTransfer(et);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=It===ye?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(_,M){let H;return _?M===null||M===Ms||M===or?H=i.DEPTH24_STENCIL8:M===di?H=i.DEPTH32F_STENCIL8:M===Vr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ms||M===or?H=i.DEPTH_COMPONENT24:M===di?H=i.DEPTH_COMPONENT32F:M===Vr&&(H=i.DEPTH_COMPONENT16),H}function R(_,M){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Dn&&_.minFilter!==ui?Math.log2(Math.max(M.width,M.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?M.mipmaps.length:1}function E(_){let M=_.target;M.removeEventListener("dispose",E),L(M),M.isVideoTexture&&d.delete(M)}function C(_){let M=_.target;M.removeEventListener("dispose",C),S(M)}function L(_){let M=n.get(_);if(M.__webglInit===void 0)return;let H=_.source,et=f.get(H);if(et){let it=et[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(_),Object.keys(et).length===0&&f.delete(H)}n.remove(_)}function w(_){let M=n.get(_);i.deleteTexture(M.__webglTexture);let H=_.source,et=f.get(H);delete et[M.__cacheKey],a.memory.textures--}function S(_){let M=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let it=0;it<M.__webglFramebuffer[et].length;it++)i.deleteFramebuffer(M.__webglFramebuffer[et][it]);else i.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)i.deleteFramebuffer(M.__webglFramebuffer[et]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=_.textures;for(let et=0,it=H.length;et<it;et++){let $=n.get(H[et]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(H[et])}n.remove(_)}let I=0;function W(){I=0}function N(){let _=I;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),I+=1,_}function V(_){let M=[];return M.push(_.wrapS),M.push(_.wrapT),M.push(_.wrapR||0),M.push(_.magFilter),M.push(_.minFilter),M.push(_.anisotropy),M.push(_.internalFormat),M.push(_.format),M.push(_.type),M.push(_.generateMipmaps),M.push(_.premultiplyAlpha),M.push(_.flipY),M.push(_.unpackAlignment),M.push(_.colorSpace),M.join()}function J(_,M){let H=n.get(_);if(_.isVideoTexture&&Ft(_),_.isRenderTargetTexture===!1&&_.version>0&&H.__version!==_.version){let et=_.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,_,M);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function G(_,M){let H=n.get(_);if(_.version>0&&H.__version!==_.version){j(H,_,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function at(_,M){let H=n.get(_);if(_.version>0&&H.__version!==_.version){j(H,_,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function K(_,M){let H=n.get(_);if(_.version>0&&H.__version!==_.version){lt(H,_,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let ot={[ar]:i.REPEAT,[vs]:i.CLAMP_TO_EDGE,[ll]:i.MIRRORED_REPEAT},pt={[Dn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[ui]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},Lt={[Gd]:i.NEVER,[Zd]:i.ALWAYS,[Wd]:i.LESS,[bu]:i.LEQUAL,[qd]:i.EQUAL,[Qd]:i.GEQUAL,[Xd]:i.GREATER,[Yd]:i.NOTEQUAL};function gt(_,M){if(M.type===di&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ui||M.magFilter===wo||M.magFilter===oa||M.magFilter===xs||M.minFilter===ui||M.minFilter===wo||M.minFilter===oa||M.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,ot[M.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==oa&&M.minFilter!==xs||M.type===di&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(_,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Bt(_,M){let H=!1;_.__webglInit===void 0&&(_.__webglInit=!0,M.addEventListener("dispose",E));let et=M.source,it=f.get(et);it===void 0&&(it={},f.set(et,it));let $=V(M);if($!==_.__cacheKey){it[$]===void 0&&(it[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),it[$].usedTimes++;let It=it[_.__cacheKey];It!==void 0&&(it[_.__cacheKey].usedTimes--,It.usedTimes===0&&w(M)),_.__cacheKey=$,_.__webglTexture=it[$].texture}return H}function j(_,M,H){let et=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=i.TEXTURE_3D);let it=Bt(_,M),$=M.source;e.bindTexture(et,_.__webglTexture,i.TEXTURE0+H);let It=n.get($);if($.version!==It.__version||it===!0){e.activeTexture(i.TEXTURE0+H);let bt=le.getPrimaries(le.workingColorSpace),Rt=M.colorSpace===Qn?null:le.getPrimaries(M.colorSpace),Wt=M.colorSpace===Qn||bt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let st=g(M.image,!1,s.maxTextureSize);st=ce(M,st);let Et=r.convert(M.format,M.colorSpace),kt=r.convert(M.type),Ot=T(M.internalFormat,Et,kt,M.colorSpace,M.isVideoTexture);gt(et,M);let Mt,Yt=M.mipmaps,Vt=M.isVideoTexture!==!0,qt=It.__version===void 0||it===!0,F=$.dataReady,dt=R(M,st);if(M.isDepthTexture)Ot=y(M.format===lr,M.type),qt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ot,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ot,st.width,st.height,0,Et,kt,null));else if(M.isDataTexture)if(Yt.length>0){Vt&&qt&&e.texStorage2D(i.TEXTURE_2D,dt,Ot,Yt[0].width,Yt[0].height);for(let Z=0,nt=Yt.length;Z<nt;Z++)Mt=Yt[Z],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,Et,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,Z,Ot,Mt.width,Mt.height,0,Et,kt,Mt.data);M.generateMipmaps=!1}else Vt?(qt&&e.texStorage2D(i.TEXTURE_2D,dt,Ot,st.width,st.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Et,kt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,st.width,st.height,0,Et,kt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ot,Yt[0].width,Yt[0].height,st.depth);for(let Z=0,nt=Yt.length;Z<nt;Z++)if(Mt=Yt[Z],M.format!==Zn)if(Et!==null)if(Vt){if(F)if(M.layerUpdates.size>0){let wt=$h(Mt.width,Mt.height,M.format,M.type);for(let xt of M.layerUpdates){let Gt=Mt.data.subarray(xt*wt/Mt.data.BYTES_PER_ELEMENT,(xt+1)*wt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,xt,Mt.width,Mt.height,1,Et,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,st.depth,Et,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ot,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,st.depth,Et,kt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ot,Mt.width,Mt.height,st.depth,0,Et,kt,Mt.data)}else{Vt&&qt&&e.texStorage2D(i.TEXTURE_2D,dt,Ot,Yt[0].width,Yt[0].height);for(let Z=0,nt=Yt.length;Z<nt;Z++)Mt=Yt[Z],M.format!==Zn?Et!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,Et,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,Z,Ot,Mt.width,Mt.height,0,Et,kt,Mt.data)}else if(M.isDataArrayTexture)if(Vt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ot,st.width,st.height,st.depth),F)if(M.layerUpdates.size>0){let Z=$h(st.width,st.height,M.format,M.type);for(let nt of M.layerUpdates){let wt=st.data.subarray(nt*Z/st.data.BYTES_PER_ELEMENT,(nt+1)*Z/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,st.width,st.height,1,Et,kt,wt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,kt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,st.width,st.height,st.depth,0,Et,kt,st.data);else if(M.isData3DTexture)Vt?(qt&&e.texStorage3D(i.TEXTURE_3D,dt,Ot,st.width,st.height,st.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,kt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,st.width,st.height,st.depth,0,Et,kt,st.data);else if(M.isFramebufferTexture){if(qt)if(Vt)e.texStorage2D(i.TEXTURE_2D,dt,Ot,st.width,st.height);else{let Z=st.width,nt=st.height;for(let wt=0;wt<dt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Ot,Z,nt,0,Et,kt,null),Z>>=1,nt>>=1}}else if(Yt.length>0){if(Vt&&qt){let Z=Ut(Yt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ot,Z.width,Z.height)}for(let Z=0,nt=Yt.length;Z<nt;Z++)Mt=Yt[Z],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et,kt,Mt):e.texImage2D(i.TEXTURE_2D,Z,Ot,Et,kt,Mt);M.generateMipmaps=!1}else if(Vt){if(qt){let Z=Ut(st);e.texStorage2D(i.TEXTURE_2D,dt,Ot,Z.width,Z.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,kt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Et,kt,st);m(M)&&h(et),It.__version=$.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function lt(_,M,H){if(M.image.length!==6)return;let et=Bt(_,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+H);let $=n.get(it);if(it.version!==$.__version||et===!0){e.activeTexture(i.TEXTURE0+H);let It=le.getPrimaries(le.workingColorSpace),bt=M.colorSpace===Qn?null:le.getPrimaries(M.colorSpace),Rt=M.colorSpace===Qn||It===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let nt=0;nt<6;nt++)!Wt&&!st?Et[nt]=g(M.image[nt],!0,s.maxCubemapSize):Et[nt]=st?M.image[nt].image:M.image[nt],Et[nt]=ce(M,Et[nt]);let kt=Et[0],Ot=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),Yt=T(M.internalFormat,Ot,Mt,M.colorSpace),Vt=M.isVideoTexture!==!0,qt=$.__version===void 0||et===!0,F=it.dataReady,dt=R(M,kt);gt(i.TEXTURE_CUBE_MAP,M);let Z;if(Wt){Vt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Yt,kt.width,kt.height);for(let nt=0;nt<6;nt++){Z=Et[nt].mipmaps;for(let wt=0;wt<Z.length;wt++){let xt=Z[wt];M.format!==Zn?Ot!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,xt.width,xt.height,Ot,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Yt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,0,0,xt.width,xt.height,Ot,Mt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt,Yt,xt.width,xt.height,0,Ot,Mt,xt.data)}}}else{if(Z=M.mipmaps,Vt&&qt){Z.length>0&&dt++;let nt=Ut(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Yt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(st){Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Et[nt].width,Et[nt].height,Ot,Mt,Et[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,Et[nt].width,Et[nt].height,0,Ot,Mt,Et[nt].data);for(let wt=0;wt<Z.length;wt++){let Gt=Z[wt].image[nt].image;Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Gt.width,Gt.height,Ot,Mt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Yt,Gt.width,Gt.height,0,Ot,Mt,Gt.data)}}else{Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ot,Mt,Et[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,Ot,Mt,Et[nt]);for(let wt=0;wt<Z.length;wt++){let xt=Z[wt];Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,0,0,Ot,Mt,xt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,wt+1,Yt,Ot,Mt,xt.image[nt])}}}m(M)&&h(i.TEXTURE_CUBE_MAP),$.__version=it.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function Tt(_,M,H,et,it,$){let It=r.convert(H.format,H.colorSpace),bt=r.convert(H.type),Rt=T(H.internalFormat,It,bt,H.colorSpace),Wt=n.get(M),st=n.get(H);if(st.__renderTarget=M,!Wt.__hasExternalTextures){let Et=Math.max(1,M.width>>$),kt=Math.max(1,M.height>>$);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,$,Rt,Et,kt,M.depth,0,It,bt,null):e.texImage2D(it,$,Rt,Et,kt,0,It,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,_),Zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,it,st.__webglTexture,0,te(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,it,st.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(_,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,_),M.depthBuffer){let et=M.depthTexture,it=et&&et.isDepthTexture?et.type:null,$=y(M.stencilBuffer,it),It=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=te(M);Zt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,$,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,_)}else{let et=M.textures;for(let it=0;it<et.length;it++){let $=et[it],It=r.convert($.format,$.colorSpace),bt=r.convert($.type),Rt=T($.internalFormat,It,bt,$.colorSpace),Wt=te(M);H&&Zt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Rt,M.width,M.height):Zt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,Rt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(_,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,_),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(M.depthTexture);et.__renderTarget=M,(!et.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);let it=et.__webglTexture,$=te(M);if(M.depthTexture.format===tr)Zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(M.depthTexture.format===lr)Zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ht(_){let M=n.get(_),H=_.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==_.depthTexture){let et=_.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){let it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=et}if(_.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,_)}else if(H){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=i.createRenderbuffer(),vt(M.__webglDepthbuffer[et],_,!1);else{let it=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),vt(M.__webglDepthbuffer,_,!1);else{let et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(_,M,H){let et=n.get(_);M!==void 0&&Tt(et.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ht(_)}function de(_){let M=_.texture,H=n.get(_),et=n.get(M);_.addEventListener("dispose",C);let it=_.textures,$=_.isWebGLCubeRenderTarget===!0,It=it.length>1;if(It||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=M.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[bt]=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)H.__webglFramebuffer[bt][Rt]=i.createFramebuffer()}else H.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let bt=0;bt<M.mipmaps.length;bt++)H.__webglFramebuffer[bt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(It)for(let bt=0,Rt=it.length;bt<Rt;bt++){let Wt=n.get(it[bt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&Zt(_)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let bt=0;bt<it.length;bt++){let Rt=it[bt];H.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[bt]);let Wt=r.convert(Rt.format,Rt.colorSpace),st=r.convert(Rt.type),Et=T(Rt.internalFormat,Wt,st,Rt.colorSpace,_.isXRRenderTarget===!0),kt=te(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Et,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,H.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(H.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),gt(i.TEXTURE_CUBE_MAP,M);for(let bt=0;bt<6;bt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)Tt(H.__webglFramebuffer[bt][Rt],_,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt);else Tt(H.__webglFramebuffer[bt],_,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);m(M)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let bt=0,Rt=it.length;bt<Rt;bt++){let Wt=it[bt],st=n.get(Wt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),gt(i.TEXTURE_2D,Wt),Tt(H.__webglFramebuffer,_,Wt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),m(Wt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(bt=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,et.__webglTexture),gt(bt,M),M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)Tt(H.__webglFramebuffer[Rt],_,M,i.COLOR_ATTACHMENT0,bt,Rt);else Tt(H.__webglFramebuffer,_,M,i.COLOR_ATTACHMENT0,bt,0);m(M)&&h(bt),e.unbindTexture()}_.depthBuffer&&Ht(_)}function $t(_){let M=_.textures;for(let H=0,et=M.length;H<et;H++){let it=M[H];if(m(it)){let $=b(_),It=n.get(it).__webglTexture;e.bindTexture($,It),h($),e.unbindTexture()}}}let be=[],O=[];function Ne(_){if(_.samples>0){if(Zt(_)===!1){let M=_.textures,H=_.width,et=_.height,it=i.COLOR_BUFFER_BIT,$=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(_),bt=M.length>1;if(bt)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);let Wt=n.get(M[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,H,et,0,0,H,et,it,i.NEAREST),l===!0&&(be.length=0,O.length=0,be.push(i.COLOR_ATTACHMENT0+Rt),_.depthBuffer&&_.resolveDepthBuffer===!1&&(be.push($),O.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);let Wt=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let M=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function te(_){return Math.min(s.maxSamples,_.samples)}function Zt(_){let M=n.get(_);return _.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ft(_){let M=a.render.frame;d.get(_)!==M&&(d.set(_,M),_.update())}function ce(_,M){let H=_.colorSpace,et=_.format,it=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||H!==fr&&H!==Qn&&(le.getTransfer(H)===ye?(et!==Zn||it!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ut(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=at,this.setTextureCube=K,this.rebindTextures=Jt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Zt}function nv(i,t){function e(n,s=Qn){let r,a=le.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.BYTE;if(n===du)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===Zn)return i.RGBA;if(n===gu)return i.LUMINANCE;if(n===vu)return i.LUMINANCE_ALPHA;if(n===tr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===xu)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Ia||n===Pa||n===La||n===Da)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===pl)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gl||n===vl||n===xl||n===yl||n===Ml||n===bl||n===Sl||n===wl||n===Al||n===El||n===Tl||n===_l||n===Rl||n===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Il||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===Ll||n===Dl||n===Ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fi=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},iv={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new we({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends ji{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,v=null,g=new Kl,m=e.getContextAttributes(),h=null,b=null,T=[],y=[],R=new Ct,E=null,C=new gn;C.viewport=new Re;let L=new gn;L.viewport=new Re;let w=[C,L],S=new Zl,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=T[j];return lt===void 0&&(lt=new zr,T[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=T[j];return lt===void 0&&(lt=new zr,T[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=T[j];return lt===void 0&&(lt=new zr,T[j]=lt),lt.getHandSpace()};function N(j){let lt=y.indexOf(j.inputSource);if(lt===-1)return;let Tt=T[lt];Tt!==void 0&&(Tt.update(j.inputSource,j.frame,c||a),Tt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let j=0;j<T.length;j++){let lt=y[j];lt!==null&&(y[j]=null,T[j].disconnect(lt))}I=null,W=null,g.reset(),t.setRenderTarget(h),p=null,f=null,u=null,s=null,b=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ke(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,Tt=null,vt=null;m.depth&&(vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?lr:tr,Tt=m.stencil?or:Ms);let Nt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ke(f.textureWidth,f.textureHeight,{format:Zn,type:Ui,depthTexture:new qa(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(j){for(let lt=0;lt<j.removed.length;lt++){let Tt=j.removed[lt],vt=y.indexOf(Tt);vt>=0&&(y[vt]=null,T[vt].disconnect(Tt))}for(let lt=0;lt<j.added.length;lt++){let Tt=j.added[lt],vt=y.indexOf(Tt);if(vt===-1){for(let Ht=0;Ht<T.length;Ht++)if(Ht>=y.length){y.push(Tt),vt=Ht;break}else if(y[Ht]===null){y[Ht]=Tt,vt=Ht;break}if(vt===-1)break}let Nt=T[vt];Nt&&Nt.connect(Tt)}}let G=new U,at=new U;function K(j,lt,Tt){G.setFromMatrixPosition(lt.matrixWorld),at.setFromMatrixPosition(Tt.matrixWorld);let vt=G.distanceTo(at),Nt=lt.projectionMatrix.elements,Ht=Tt.projectionMatrix.elements,Jt=Nt[14]/(Nt[10]-1),de=Nt[14]/(Nt[10]+1),$t=(Nt[9]+1)/Nt[5],be=(Nt[9]-1)/Nt[5],O=(Nt[8]-1)/Nt[0],Ne=(Ht[8]+1)/Ht[0],te=Jt*O,Zt=Jt*Ne,Ft=vt/(-O+Ne),ce=Ft*-O;if(lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ce),j.translateZ(Ft),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let Ut=Jt+Ft,_=de+Ft,M=te-ce,H=Zt+(vt-ce),et=$t*de/_*Ut,it=be*de/_*Ut;j.projectionMatrix.makePerspective(M,H,et,it,Ut,_),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ot(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let lt=j.near,Tt=j.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(Tt=g.depthFar)),S.near=L.near=C.near=lt,S.far=L.far=C.far=Tt,(I!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,W=S.far),C.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,S.layers.mask=C.layers.mask|L.layers.mask;let vt=j.parent,Nt=S.cameras;ot(S,vt);for(let Ht=0;Ht<Nt.length;Ht++)ot(Nt[Ht],vt);Nt.length===2?K(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),pt(j,S,vt)};function pt(j,lt,Tt){Tt===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(Tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Lt=null;function gt(j,lt){if(d=lt.getViewerPose(c||a),v=lt,d!==null){let Tt=d.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let vt=!1;Tt.length!==S.cameras.length&&(S.cameras.length=0,vt=!0);for(let Ht=0;Ht<Tt.length;Ht++){let Jt=Tt[Ht],de=null;if(p!==null)de=p.getViewport(Jt);else{let be=u.getViewSubImage(f,Jt);de=be.viewport,Ht===0&&(t.setRenderTargetTextures(b,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(b))}let $t=w[Ht];$t===void 0&&($t=new gn,$t.layers.enable(Ht),$t.viewport=new Re,w[Ht]=$t),$t.matrix.fromArray(Jt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Jt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(de.x,de.y,de.width,de.height),Ht===0&&(S.matrix.copy($t.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),vt===!0&&S.cameras.push($t)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Ht=u.getDepthInformation(Tt[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(t,Ht,s.renderState)}}for(let Tt=0;Tt<T.length;Tt++){let vt=y[Tt],Nt=T[Tt];vt!==null&&Nt!==void 0&&Nt.update(vt,lt,c||a)}Lt&&Lt(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),v=null}let Bt=new Eu;Bt.setAnimationLoop(gt),this.setAnimationLoop=function(j){Lt=j},this.dispose=function(){}}},fs=new gi,av=new Me;function ov(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Au(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),u(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,b,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=t.get(h),T=b.envMap,y=b.envMapRotation;T&&(m.envMap.value=T,fs.copy(y),fs.x*=-1,fs.y*=-1,fs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(fs)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=T*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){let b=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){let y=T.program;n.uniformBlockBinding(b,y)}function c(b,T){let y=s[b.id];y===void 0&&(v(b),y=d(b),s[b.id]=y,b.addEventListener("dispose",m));let R=T.program;n.updateUBOMapping(b,R);let E=t.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function d(b){let T=u();b.__bindingPointIndex=T;let y=i.createBuffer(),R=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let T=s[b.id],y=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,C=y.length;E<C;E++){let L=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,S=L.length;w<S;w++){let I=L[w];if(p(I,E,w,R)===!0){let W=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],V=0;for(let J=0;J<N.length;J++){let G=N[J],at=g(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,W+V,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,V),V+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,T,y,R){let E=b.value,C=T+"_"+y;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:R[C]=E.clone(),!0;{let L=R[C];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return R[C]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function v(b){let T=b.uniforms,y=0,R=16;for(let C=0,L=T.length;C<L;C++){let w=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,I=w.length;S<I;S++){let W=w[S],N=Array.isArray(W.value)?W.value:[W.value];for(let V=0,J=N.length;V<J;V++){let G=N[V],at=g(G),K=y%R,ot=K%at.boundary,pt=K+ot;y+=ot,pt!==0&&R-pt<at.storage&&(y+=R-pt),W.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=at.storage}}}let E=y%R;return E>0&&(y+=R-E),b.__size=y,b.__cache={},this}function g(b){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){let T=b.target;T.removeEventListener("dispose",m);let y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Xa=class{constructor(t={}){let{canvas:e=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=new Uint32Array(4),g=new Int32Array(4),m=null,h=null,b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=mi,this.toneMappingExposure=1;let y=this,R=!1,E=0,C=0,L=null,w=-1,S=null,I=new Re,W=new Re,N=null,V=new Xt(0),J=0,G=e.width,at=e.height,K=1,ot=null,pt=null,Lt=new Re(0,0,G,at),gt=new Re(0,0,G,at),Bt=!1,j=new Wr,lt=!1,Tt=!1,vt=new Me,Nt=new Me,Ht=new U,Jt=new Re,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function be(){return L===null?K:1}let O=n;function Ne(A,D){return e.getContext(A,D)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),O===null){let D="webgl2";if(O=Ne(D,A),O===null)throw Ne(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,Zt,Ft,ce,Ut,_,M,H,et,it,$,It,bt,Rt,Wt,st,Et,kt,Ot,Mt,Yt,Vt,qt,F;function dt(){te=new Ag(O),te.init(),Vt=new nv(O,te),Zt=new xg(O,te,t,Vt),Ft=new $0(O,te),Zt.reverseDepthBuffer&&f&&Ft.buffers.depth.setReversed(!0),ce=new _g(O),Ut=new z0,_=new ev(O,te,Ft,Ut,Zt,Vt,ce),M=new Mg(y),H=new wg(y),et=new Uf(O),qt=new gg(O,et),it=new Eg(O,et,ce,qt),$=new Cg(O,it,et,ce),Ot=new Rg(O,Zt,_),st=new yg(Ut),It=new k0(y,M,H,te,Zt,qt,st),bt=new ov(y,Ut),Rt=new H0,Wt=new Q0(te),kt=new mg(y,M,H,Ft,$,p,l),Et=new J0(y,$,Zt),F=new lv(O,ce,Zt,Ft),Mt=new vg(O,te,ce),Yt=new Tg(O,te,ce),ce.programs=It.programs,y.capabilities=Zt,y.extensions=te,y.properties=Ut,y.renderLists=Rt,y.shadowMap=Et,y.state=Ft,y.info=ce}dt();let Z=new Jl(y,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(G,at,!1))},this.getSize=function(A){return A.set(G,at)},this.setSize=function(A,D,z=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,at=D,e.width=Math.floor(A*K),e.height=Math.floor(D*K),z===!0&&(e.style.width=A+"px",e.style.height=D+"px"),this.setViewport(0,0,A,D)},this.getDrawingBufferSize=function(A){return A.set(G*K,at*K).floor()},this.setDrawingBufferSize=function(A,D,z){G=A,at=D,K=z,e.width=Math.floor(A*z),e.height=Math.floor(D*z),this.setViewport(0,0,A,D)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Lt)},this.setViewport=function(A,D,z,Y){A.isVector4?Lt.set(A.x,A.y,A.z,A.w):Lt.set(A,D,z,Y),Ft.viewport(I.copy(Lt).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,D,z,Y){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,D,z,Y),Ft.scissor(W.copy(gt).multiplyScalar(K).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(A){Ft.setScissorTest(Bt=A)},this.setOpaqueSort=function(A){ot=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(A=!0,D=!0,z=!0){let Y=0;if(A){let B=!1;if(L!==null){let ct=L.texture.format;B=ct===Mc||ct===yc||ct===xc}if(B){let ct=L.texture.type,ft=ct===Ui||ct===Ms||ct===Vr||ct===or||ct===mc||ct===gc,x=kt.getClearColor(),P=kt.getClearAlpha(),k=x.r,X=x.g,q=x.b;ft?(v[0]=k,v[1]=X,v[2]=q,v[3]=P,O.clearBufferuiv(O.COLOR,0,v)):(g[0]=k,g[1]=X,g[2]=q,g[3]=P,O.clearBufferiv(O.COLOR,0,g))}else Y|=O.COLOR_BUFFER_BIT}D&&(Y|=O.DEPTH_BUFFER_BIT),z&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Rt.dispose(),Wt.dispose(),Ut.dispose(),M.dispose(),H.dispose(),$.dispose(),qt.dispose(),F.dispose(),It.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Bi),Z.removeEventListener("sessionend",xn),Qe.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let A=ce.autoReset,D=Et.enabled,z=Et.autoUpdate,Y=Et.needsUpdate,B=Et.type;dt(),ce.autoReset=A,Et.enabled=D,Et.autoUpdate=z,Et.needsUpdate=Y,Et.type=B}function xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gt(A){let D=A.target;D.removeEventListener("dispose",Gt),ie(D)}function ie(A){Ie(A),Ut.remove(A)}function Ie(A){let D=Ut.get(A).programs;D!==void 0&&(D.forEach(function(z){It.releaseProgram(z)}),A.isShaderMaterial&&It.releaseShaderCache(A))}this.renderBufferDirect=function(A,D,z,Y,B,ct){D===null&&(D=de);let ft=B.isMesh&&B.matrixWorld.determinant()<0,x=br(A,D,z,Y,B);Ft.setMaterial(Y,ft);let P=z.index,k=1;if(Y.wireframe===!0){if(P=it.getWireframeAttribute(z),P===void 0)return;k=2}let X=z.drawRange,q=z.attributes.position,ht=X.start*k,Q=(X.start+X.count)*k;ct!==null&&(ht=Math.max(ht,ct.start*k),Q=Math.min(Q,(ct.start+ct.count)*k)),P!==null?(ht=Math.max(ht,0),Q=Math.min(Q,P.count)):q!=null&&(ht=Math.max(ht,0),Q=Math.min(Q,q.count));let tt=Q-ht;if(tt<0||tt===1/0)return;qt.setup(B,Y,x,z,P);let ut,Pt=Mt;if(P!==null&&(ut=et.get(P),Pt=Yt,Pt.setIndex(ut)),B.isMesh)Y.wireframe===!0?(Ft.setLineWidth(Y.wireframeLinewidth*be()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(B.isLine){let At=Y.linewidth;At===void 0&&(At=1),Ft.setLineWidth(At*be()),B.isLineSegments?Pt.setMode(O.LINES):B.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else B.isPoints?Pt.setMode(O.POINTS):B.isSprite&&Pt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let At=B._multiDrawStarts,mt=B._multiDrawCounts,yt=B._multiDrawCount,oe=P?et.get(P).bytesPerElement:1,he=Ut.get(Y).currentProgram.getUniforms();for(let Ae=0;Ae<yt;Ae++)he.setValue(O,"_gl_DrawID",Ae),Pt.render(At[Ae]/oe,mt[Ae])}else if(B.isInstancedMesh)Pt.renderInstances(ht,tt,B.count);else if(z.isInstancedBufferGeometry){let At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mt=Math.min(z.instanceCount,At);Pt.renderInstances(ht,tt,mt)}else Pt.render(ht,tt)};function Kt(A,D,z){A.transparent===!0&&A.side===Yn&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,ei(A,D,z),A.side=Ki,A.needsUpdate=!0,ei(A,D,z),A.side=Yn):ei(A,D,z)}this.compile=function(A,D,z=null){z===null&&(z=A),h=Wt.get(z),h.init(D),T.push(h),z.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),A!==z&&A.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();let Y=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ct=B.material;if(ct)if(Array.isArray(ct))for(let ft=0;ft<ct.length;ft++){let x=ct[ft];Kt(x,z,B),Y.add(x)}else Kt(ct,z,B),Y.add(ct)}),T.pop(),h=null,Y},this.compileAsync=function(A,D,z=null){let Y=this.compile(A,D,z);return new Promise(B=>{function ct(){if(Y.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&Y.delete(ft)}),Y.size===0){B(A);return}setTimeout(ct,10)}te.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ye=null;function Je(A){Ye&&Ye(A)}function Bi(){Qe.stop()}function xn(){Qe.start()}let Qe=new Eu;Qe.setAnimationLoop(Je),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){Ye=A,Z.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},Z.addEventListener("sessionstart",Bi),Z.addEventListener("sessionend",xn),this.render=function(A,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(D),D=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,D,L),h=Wt.get(A,T.length),h.init(D),T.push(h),Nt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(Nt),Tt=this.localClippingEnabled,lt=st.init(this.clippingPlanes,Tt),m=Rt.get(A,b.length),m.init(),b.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ct=y.xr.getDepthSensingMesh();ct!==null&&$n(ct,D,-1/0,y.sortObjects)}$n(A,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,pt),$t=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,$t&&kt.addToRenderList(m,A),this.info.render.frame++,lt===!0&&st.beginShadows();let z=h.state.shadowsArray;Et.render(z,A,D),lt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,B=m.transmissive;if(h.setupLights(),D.isArrayCamera){let ct=D.cameras;if(B.length>0)for(let ft=0,x=ct.length;ft<x;ft++){let P=ct[ft];Oi(Y,B,A,P)}$t&&kt.render(A);for(let ft=0,x=ct.length;ft<x;ft++){let P=ct[ft];ti(m,A,P,P.viewport)}}else B.length>0&&Oi(Y,B,A,D),$t&&kt.render(A),ti(m,A,D);L!==null&&(_.updateMultisampleRenderTarget(L),_.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(y,A,D),qt.resetDefaultState(),w=-1,S=null,T.pop(),T.length>0?(h=T[T.length-1],lt===!0&&st.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function $n(A,D,z,Y){if(A.visible===!1)return;if(A.layers.test(D.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(D);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Y&&Jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Nt);let ft=$.update(A),x=A.material;x.visible&&m.push(A,ft,x,z,Jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){let ft=$.update(A),x=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Jt.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Jt.copy(ft.boundingSphere.center)),Jt.applyMatrix4(A.matrixWorld).applyMatrix4(Nt)),Array.isArray(x)){let P=ft.groups;for(let k=0,X=P.length;k<X;k++){let q=P[k],ht=x[q.materialIndex];ht&&ht.visible&&m.push(A,ft,ht,z,Jt.z,q)}}else x.visible&&m.push(A,ft,x,z,Jt.z,null)}}let ct=A.children;for(let ft=0,x=ct.length;ft<x;ft++)$n(ct[ft],D,z,Y)}function ti(A,D,z,Y){let B=A.opaque,ct=A.transmissive,ft=A.transparent;h.setupLightsView(z),lt===!0&&st.setGlobalState(y.clippingPlanes,z),Y&&Ft.viewport(I.copy(Y)),B.length>0&&je(B,D,z),ct.length>0&&je(ct,D,z),ft.length>0&&je(ft,D,z),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Oi(A,D,z,Y){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Ke(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Nn:Ui,minFilter:xs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let ct=h.state.transmissionRenderTarget[Y.id],ft=Y.viewport||I;ct.setSize(ft.z,ft.w);let x=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(V),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),$t&&kt.render(z);let P=y.toneMapping;y.toneMapping=mi;let k=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),lt===!0&&st.setGlobalState(y.clippingPlanes,Y),je(A,z,Y),_.updateMultisampleRenderTarget(ct),_.updateRenderTargetMipmap(ct),te.has("WEBGL_multisampled_render_to_texture")===!1){let X=!1;for(let q=0,ht=D.length;q<ht;q++){let Q=D[q],tt=Q.object,ut=Q.geometry,Pt=Q.material,At=Q.group;if(Pt.side===Yn&&tt.layers.test(Y.layers)){let mt=Pt.side;Pt.side=sn,Pt.needsUpdate=!0,kn(tt,z,Y,ut,Pt,At),Pt.side=mt,Pt.needsUpdate=!0,X=!0}}X===!0&&(_.updateMultisampleRenderTarget(ct),_.updateRenderTargetMipmap(ct))}y.setRenderTarget(x),y.setClearColor(V,J),k!==void 0&&(Y.viewport=k),y.toneMapping=P}function je(A,D,z){let Y=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ct=A.length;B<ct;B++){let ft=A[B],x=ft.object,P=ft.geometry,k=Y===null?ft.material:Y,X=ft.group;x.layers.test(z.layers)&&kn(x,D,z,P,k,X)}}function kn(A,D,z,Y,B,ct){A.onBeforeRender(y,D,z,Y,B,ct),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(y,D,z,Y,A,ct),B.transparent===!0&&B.side===Yn&&B.forceSinglePass===!1?(B.side=sn,B.needsUpdate=!0,y.renderBufferDirect(z,D,Y,B,A,ct),B.side=Ki,B.needsUpdate=!0,y.renderBufferDirect(z,D,Y,B,A,ct),B.side=Yn):y.renderBufferDirect(z,D,Y,B,A,ct),A.onAfterRender(y,D,z,Y,B,ct)}function ei(A,D,z){D.isScene!==!0&&(D=de);let Y=Ut.get(A),B=h.state.lights,ct=h.state.shadowsArray,ft=B.state.version,x=It.getParameters(A,B.state,ct,D,z),P=It.getProgramCacheKey(x),k=Y.programs;Y.environment=A.isMeshStandardMaterial?D.environment:null,Y.fog=D.fog,Y.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?D.environmentRotation:A.envMapRotation,k===void 0&&(A.addEventListener("dispose",Gt),k=new Map,Y.programs=k);let X=k.get(P);if(X!==void 0){if(Y.currentProgram===X&&Y.lightsStateVersion===ft)return He(A,x),X}else x.uniforms=It.getUniforms(A),A.onBeforeCompile(x,y),X=It.acquireProgram(x,P),k.set(P,X),Y.uniforms=x.uniforms;let q=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(q.clippingPlanes=st.uniform),He(A,x),Y.needsLights=pe(A),Y.lightsStateVersion=ft,Y.needsLights&&(q.ambientLightColor.value=B.state.ambient,q.lightProbe.value=B.state.probe,q.directionalLights.value=B.state.directional,q.directionalLightShadows.value=B.state.directionalShadow,q.spotLights.value=B.state.spot,q.spotLightShadows.value=B.state.spotShadow,q.rectAreaLights.value=B.state.rectArea,q.ltc_1.value=B.state.rectAreaLTC1,q.ltc_2.value=B.state.rectAreaLTC2,q.pointLights.value=B.state.point,q.pointLightShadows.value=B.state.pointShadow,q.hemisphereLights.value=B.state.hemi,q.directionalShadowMap.value=B.state.directionalShadowMap,q.directionalShadowMatrix.value=B.state.directionalShadowMatrix,q.spotShadowMap.value=B.state.spotShadowMap,q.spotLightMatrix.value=B.state.spotLightMatrix,q.spotLightMap.value=B.state.spotLightMap,q.pointShadowMap.value=B.state.pointShadowMap,q.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=X,Y.uniformsList=null,X}function es(A){if(A.uniformsList===null){let D=A.currentProgram.getUniforms();A.uniformsList=nr.seqWithValue(D.seq,A.uniforms)}return A.uniformsList}function He(A,D){let z=Ut.get(A);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function br(A,D,z,Y,B){D.isScene!==!0&&(D=de),_.resetTextureUnits();let ct=D.fog,ft=Y.isMeshStandardMaterial?D.environment:null,x=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fr,P=(Y.isMeshStandardMaterial?H:M).get(Y.envMap||ft),k=Y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,X=!!z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),q=!!z.morphAttributes.position,ht=!!z.morphAttributes.normal,Q=!!z.morphAttributes.color,tt=mi;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(tt=y.toneMapping);let ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=ut!==void 0?ut.length:0,At=Ut.get(Y),mt=h.state.lights;if(lt===!0&&(Tt===!0||A!==S)){let Pe=A===S&&Y.id===w;st.setState(Y,A,Pe)}let yt=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==mt.state.version||At.outputColorSpace!==x||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==P||Y.fog===!0&&At.fog!==ct||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==k||At.vertexTangents!==X||At.morphTargets!==q||At.morphNormals!==ht||At.morphColors!==Q||At.toneMapping!==tt||At.morphTargetsCount!==Pt)&&(yt=!0):(yt=!0,At.__version=Y.version);let oe=At.currentProgram;yt===!0&&(oe=ei(Y,D,B));let he=!1,Ae=!1,ln=!1,Qt=oe.getUniforms(),zt=At.uniforms;if(Ft.useProgram(oe.program)&&(he=!0,Ae=!0,ln=!0),Y.id!==w&&(w=Y.id,Ae=!0),he||S!==A){Ft.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),mf(vt),gf(vt),Qt.setValue(O,"projectionMatrix",vt)):Qt.setValue(O,"projectionMatrix",A.projectionMatrix),Qt.setValue(O,"viewMatrix",A.matrixWorldInverse);let cn=Qt.map.cameraPosition;cn!==void 0&&cn.setValue(O,Ht.setFromMatrixPosition(A.matrixWorld)),Zt.logarithmicDepthBuffer&&Qt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Qt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Ae=!0,ln=!0)}if(B.isSkinnedMesh){Qt.setOptional(O,B,"bindMatrix"),Qt.setOptional(O,B,"bindMatrixInverse");let Pe=B.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Qt.setValue(O,"boneTexture",Pe.boneTexture,_))}B.isBatchedMesh&&(Qt.setOptional(O,B,"batchingTexture"),Qt.setValue(O,"batchingTexture",B._matricesTexture,_),Qt.setOptional(O,B,"batchingIdTexture"),Qt.setValue(O,"batchingIdTexture",B._indirectTexture,_),Qt.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&Qt.setValue(O,"batchingColorTexture",B._colorsTexture,_));let zn=z.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Ot.update(B,z,oe),(Ae||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,Qt.setValue(O,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zt.envMap.value=P,zt.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&D.environment!==null&&(zt.envMapIntensity.value=D.environmentIntensity),Ae&&(Qt.setValue(O,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&re(zt,ln),ct&&Y.fog===!0&&bt.refreshFogUniforms(zt,ct),bt.refreshMaterialUniforms(zt,Y,K,at,h.state.transmissionRenderTarget[A.id]),nr.upload(O,es(At),zt,_)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nr.upload(O,es(At),zt,_),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Qt.setValue(O,"center",B.center),Qt.setValue(O,"modelViewMatrix",B.modelViewMatrix),Qt.setValue(O,"normalMatrix",B.normalMatrix),Qt.setValue(O,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Pe=Y.uniformsGroups;for(let cn=0,hn=Pe.length;cn<hn;cn++){let ni=Pe[cn];F.update(ni,oe),F.bind(ni,oe)}}return oe}function re(A,D){A.ambientLightColor.needsUpdate=D,A.lightProbe.needsUpdate=D,A.directionalLights.needsUpdate=D,A.directionalLightShadows.needsUpdate=D,A.pointLights.needsUpdate=D,A.pointLightShadows.needsUpdate=D,A.spotLights.needsUpdate=D,A.spotLightShadows.needsUpdate=D,A.rectAreaLights.needsUpdate=D,A.hemisphereLights.needsUpdate=D}function pe(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,D,z){Ut.get(A.texture).__webglTexture=D,Ut.get(A.depthTexture).__webglTexture=z;let Y=Ut.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=z===void 0,Y.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,D){let z=Ut.get(A);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(A,D=0,z=0){L=A,E=D,C=z;let Y=!0,B=null,ct=!1,ft=!1;if(A){let P=Ut.get(A);if(P.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(P.__webglFramebuffer===void 0)_.setupRenderTarget(A);else if(P.__hasExternalTextures)_.rebindTextures(A,Ut.get(A.texture).__webglTexture,Ut.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let q=A.depthTexture;if(P.__boundDepthTexture!==q){if(q!==null&&Ut.has(q)&&(A.width!==q.image.width||A.height!==q.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(A)}}let k=A.texture;(k.isData3DTexture||k.isDataArrayTexture||k.isCompressedArrayTexture)&&(ft=!0);let X=Ut.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(X[D])?B=X[D][z]:B=X[D],ct=!0):A.samples>0&&_.useMultisampledRTT(A)===!1?B=Ut.get(A).__webglMultisampledFramebuffer:Array.isArray(X)?B=X[z]:B=X,I.copy(A.viewport),W.copy(A.scissor),N=A.scissorTest}else I.copy(Lt).multiplyScalar(K).floor(),W.copy(gt).multiplyScalar(K).floor(),N=Bt;if(Ft.bindFramebuffer(O.FRAMEBUFFER,B)&&Y&&Ft.drawBuffers(A,B),Ft.viewport(I),Ft.scissor(W),Ft.setScissorTest(N),ct){let P=Ut.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,P.__webglTexture,z)}else if(ft){let P=Ut.get(A.texture),k=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,P.__webglTexture,z||0,k)}w=-1},this.readRenderTargetPixels=function(A,D,z,Y,B,ct,ft){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let x=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(x=x[ft]),x){Ft.bindFramebuffer(O.FRAMEBUFFER,x);try{let P=A.texture,k=P.format,X=P.type;if(!Zt.textureFormatReadable(k)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(X)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=A.width-Y&&z>=0&&z<=A.height-B&&O.readPixels(D,z,Y,B,Vt.convert(k),Vt.convert(X),ct)}finally{let P=L!==null?Ut.get(L).__webglFramebuffer:null;Ft.bindFramebuffer(O.FRAMEBUFFER,P)}}},this.readRenderTargetPixelsAsync=async function(A,D,z,Y,B,ct,ft){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let x=Ut.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(x=x[ft]),x){let P=A.texture,k=P.format,X=P.type;if(!Zt.textureFormatReadable(k))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(X))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=A.width-Y&&z>=0&&z<=A.height-B){Ft.bindFramebuffer(O.FRAMEBUFFER,x);let q=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,q),O.bufferData(O.PIXEL_PACK_BUFFER,ct.byteLength,O.STREAM_READ),O.readPixels(D,z,Y,B,Vt.convert(k),Vt.convert(X),0);let ht=L!==null?Ut.get(L).__webglFramebuffer:null;Ft.bindFramebuffer(O.FRAMEBUFFER,ht);let Q=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pf(O,Q,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,q),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ct),O.deleteBuffer(q),O.deleteSync(Q),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,D=null,z=0){A.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,A=arguments[1]);let Y=Math.pow(2,-z),B=Math.floor(A.image.width*Y),ct=Math.floor(A.image.height*Y),ft=D!==null?D.x:0,x=D!==null?D.y:0;_.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,ft,x,B,ct),Ft.unbindTexture()},this.copyTextureToTexture=function(A,D,z=null,Y=null,B=0){A.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],D=arguments[2],B=arguments[3]||0,z=null);let ct,ft,x,P,k,X,q,ht,Q,tt=A.isCompressedTexture?A.mipmaps[B]:A.image;z!==null?(ct=z.max.x-z.min.x,ft=z.max.y-z.min.y,x=z.isBox3?z.max.z-z.min.z:1,P=z.min.x,k=z.min.y,X=z.isBox3?z.min.z:0):(ct=tt.width,ft=tt.height,x=tt.depth||1,P=0,k=0,X=0),Y!==null?(q=Y.x,ht=Y.y,Q=Y.z):(q=0,ht=0,Q=0);let ut=Vt.convert(D.format),Pt=Vt.convert(D.type),At;D.isData3DTexture?(_.setTexture3D(D,0),At=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(_.setTexture2DArray(D,0),At=O.TEXTURE_2D_ARRAY):(_.setTexture2D(D,0),At=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let mt=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),oe=O.getParameter(O.UNPACK_SKIP_PIXELS),he=O.getParameter(O.UNPACK_SKIP_ROWS),Ae=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,tt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,P),O.pixelStorei(O.UNPACK_SKIP_ROWS,k),O.pixelStorei(O.UNPACK_SKIP_IMAGES,X);let ln=A.isDataArrayTexture||A.isData3DTexture,Qt=D.isDataArrayTexture||D.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let zt=Ut.get(A),zn=Ut.get(D),Pe=Ut.get(zt.__renderTarget),cn=Ut.get(zn.__renderTarget);Ft.bindFramebuffer(O.READ_FRAMEBUFFER,Pe.__webglFramebuffer),Ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let hn=0;hn<x;hn++)ln&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(A).__webglTexture,B,X+hn),A.isDepthTexture?(Qt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(D).__webglTexture,B,Q+hn),O.blitFramebuffer(P,k,ct,ft,q,ht,ct,ft,O.DEPTH_BUFFER_BIT,O.NEAREST)):Qt?O.copyTexSubImage3D(At,B,q,ht,Q+hn,P,k,ct,ft):O.copyTexSubImage2D(At,B,q,ht,Q+hn,P,k,ct,ft);Ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Qt?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(At,B,q,ht,Q,ct,ft,x,ut,Pt,tt.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(At,B,q,ht,Q,ct,ft,x,ut,tt.data):O.texSubImage3D(At,B,q,ht,Q,ct,ft,x,ut,Pt,tt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,q,ht,ct,ft,ut,Pt,tt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,q,ht,tt.width,tt.height,ut,tt.data):O.texSubImage2D(O.TEXTURE_2D,B,q,ht,ct,ft,ut,Pt,tt);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,oe),O.pixelStorei(O.UNPACK_SKIP_ROWS,he),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ae),B===0&&D.generateMipmaps&&O.generateMipmap(At),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,D,z=null,Y=null,B=0){return A.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],D=arguments[3],B=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,D,z,Y,B)},this.initRenderTarget=function(A){Ut.get(A).__webglFramebuffer===void 0&&_.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?_.setTextureCube(A,0):A.isData3DTexture?_.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?_.setTexture2DArray(A,0):_.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){E=0,C=0,L=null,Ft.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var qr=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var jl=class extends Tn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Dn,d=Dn,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class extends Un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Js=new Me,tu=new Me,Ra=[],eu=new Ni,cv=new Me,Ur=new se,Nr=new bs,Ya=class extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),eu.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Js),Nr.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),t.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),tu.multiplyMatrices(n,Js),Ur.matrixWorld=tu,Ur.raycast(t,Ra);for(let a=0,o=Ra.length;a<o;a++){let l=Ra[a];l.instanceId=r,l.object=this,e.push(l)}Ra.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jl(new Float32Array(s*this.count),s,this.count,vc,di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var As=class extends Tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$l=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,p=(a-d)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],a=[],o=new U,l=new Me;for(let p=0;p<=t;p++){let v=p/t;s[p]=this.getTangentAt(v,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Oe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Oe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function nu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}var Qa=class extends $l{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nu(o,l.x,c.x,d.x,u.x),nu(o,l.y,c.y,d.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}};var Xr=class i extends rn{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/e,u=new U,f=new Ct,p=new U,v=new U,g=new U,m=0,h=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,h=t[b+1].y-t[b].y,p.x=h*1,p.y=-m,p.z=h*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[b+1].x-t[b].x,h=t[b+1].y-t[b].y,p.x=h*1,p.y=-m,p.z=h*0,v.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(v)}for(let b=0;b<=e;b++){let T=n+b*d*s,y=Math.sin(T),R=Math.cos(T);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*R,a.push(u.x,u.y,u.z),f.x=b/e,f.y=E/(t.length-1),o.push(f.x,f.y);let C=l[3*E+0]*y,L=l[3*E+1],w=l[3*E+0]*R;c.push(C,L,w)}}for(let b=0;b<e;b++)for(let T=0;T<t.length-1;T++){let y=T+b*t.length,R=y,E=y+t.length,C=y+t.length+1,L=y+1;r.push(R,E,L),r.push(C,L,E)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Yr=class i extends rn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],p=[],v=0,g=[],m=n/2,h=0;b(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(p,2));function b(){let y=new U,R=new U,E=0,C=(e-t)/n;for(let L=0;L<=r;L++){let w=[],S=L/r,I=S*(e-t)+t;for(let W=0;W<=s;W++){let N=W/s,V=N*l+o,J=Math.sin(V),G=Math.cos(V);R.x=I*J,R.y=-S*n+m,R.z=I*G,u.push(R.x,R.y,R.z),y.set(J,C,G).normalize(),f.push(y.x,y.y,y.z),p.push(N,1-S),w.push(v++)}g.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){let S=g[w][L],I=g[w+1][L],W=g[w+1][L+1],N=g[w][L+1];(t>0||w!==0)&&(d.push(S,I,N),E+=3),(e>0||w!==r-1)&&(d.push(I,W,N),E+=3)}c.addGroup(h,E,0),h+=E}function T(y){let R=v,E=new Ct,C=new U,L=0,w=y===!0?t:e,S=y===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),v++;let I=v;for(let W=0;W<=s;W++){let V=W/s*l+o,J=Math.cos(V),G=Math.sin(V);C.x=w*G,C.y=m*S,C.z=w*J,u.push(C.x,C.y,C.z),f.push(0,S,0),E.x=J*.5+.5,E.y=G*.5*S+.5,p.push(E.x,E.y),v++}for(let W=0;W<s;W++){let N=R+W,V=I+W;y===!0?d.push(V,V+1,N):d.push(V+1,V,N),L+=3}c.addGroup(h,L,y===!0?1:2),h+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Za=class i extends rn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],u=t,f=(e-t)/s,p=new U,v=new Ct;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let h=r+m/n*a;p.x=u*Math.cos(h),p.y=u*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,d.push(v.x,v.y)}u+=f}for(let g=0;g<s;g++){let m=g*(n+1);for(let h=0;h<n;h++){let b=h+m,T=b,y=b+n+1,R=b+n+2,E=b+1;o.push(T,y,E),o.push(y,R,E)}}this.setIndex(o),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Qr=class i extends rn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new U,f=new U,p=[],v=[],g=[],m=[];for(let h=0;h<=n;h++){let b=[],T=h/n,y=0;h===0&&a===0?y=.5/e:h===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let E=R/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+T*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(E+y,1-T),b.push(c++)}d.push(b)}for(let h=0;h<n;h++)for(let b=0;b<e;b++){let T=d[h][b+1],y=d[h][b],R=d[h+1][b],E=d[h+1][b+1];(h!==0||a>0)&&p.push(T,y,E),(h!==n-1||l<Math.PI)&&p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new fe(v,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ka=class i extends rn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],d=new U,u=new U,f=new U;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){let g=v/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),d.x=t*Math.cos(g),d.y=t*Math.sin(g),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){let g=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,h=(s+1)*(p-1)+v,b=(s+1)*p+v;a.push(g,m,b),a.push(m,h,b)}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zr=class extends Ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ts=class extends Zr{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Ca(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var dr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends dr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sh:r=t,o=2*e-n;break;case rh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sh:a=t,l=2*n-e;break;case rh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-e)/(s-e),g=v*v,m=g*v,h=-f*m+2*f*g-f*v,b=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*v+1,T=(-1-p)*m+(1.5+p)*g+.5*v,y=p*m-p*g;for(let R=0;R!==o;++R)r[R]=h*a[d+R]+b*a[c+R]+T*a[l+R]+y*a[u+R];return r}},ec=class extends dr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(s-e),u=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*d;return r}},nc=class extends dr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ca(e,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ca(t.times,Array),values:Ca(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Na:e=this.InterpolantFactoryMethodDiscrete;break;case Nl:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&hv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ao,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let v=0;v!==n;++v){let g=e[u+v];if(g!==e[f+v]||g!==e[p+v]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Nl;var Es=class extends Jn{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Na;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends Jn{};ic.prototype.ValueTypeName="color";var sc=class extends Jn{};sc.prototype.ValueTypeName="number";var rc=class extends dr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let d=c+o;c!==d;c+=4)$i.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ja=class extends Jn{InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Jn{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Na;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Jn{};ac.prototype.ValueTypeName="vector";var oc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],v=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null}}},uv=new oc,lc=class{constructor(t){this.manager=t!==void 0?t:uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var cc=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Jo=new Me,iu=new U,su=new U,hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var uc=class extends hc{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends cc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new uc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ja=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ru();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ru(){return performance.now()}var wc="\\[\\]\\.:\\/",dv=new RegExp("["+wc+"]","g"),Ac="[^"+wc+"]",fv="[^"+wc.replace("\\.","")+"]",pv=/((?:WC+[\/:])*)/.source.replace("WC",Ac),mv=/(WCOD+)?/.source.replace("WCOD",fv),gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),xv=new RegExp("^"+pv+mv+gv+vv+"$"),yv=["material","materials","bones","map"],dc=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dv,"")}static parseTrackName(t){let e=xv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=dc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Px=new Float32Array(1);var au=new Me,$a=class{constructor(t,e,n=0,s=1/0){this.ray=new za(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return fc(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fc(t[s],this,n,e);return n.sort(ou),n}};function ou(i,t){return i.distance-t.distance}function fc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},bv=new hr(-1,1,1,-1,0,1),Ec=class extends rn{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}},Sv=new Ec,vr=class{constructor(t){this._mesh=new se(Sv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,bv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xr=class extends jn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=mr.clone(t.uniforms),this.material=new we({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jr=class extends jn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ao=class extends jn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var oo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xr(ro),this.copyPass.material.blending=pi,this.clock=new ja}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jr!==void 0&&(a instanceof jr?n=!0:a instanceof ao&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var lo=class extends jn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Iu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class i extends jn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,a,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ke(r,a,{type:Nn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Ke(r,a,{type:Nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Iu;this.highPassUniforms=mr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new we({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let d=ro;this.copyUniforms=mr.clone(d.uniforms),this.blendMaterial=new we({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Ji,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new Kn,this.fsQuad=new vr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new we({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new we({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};yr.BlurDirectionX=new Ct(1,0);yr.BlurDirectionY=new Ct(0,1);var wv="#7bb1b0",Av="#6b9893",Ev="#b2cfd9",Tv="rgba(226,238,233,0.34)",_v="#7a478a",Rv="#ffffff";async function Pu(i,t,e,n=s=>s){let r=n(await(await fetch(i)).text()).replace("<svg ",`<svg width="${t}" height="${e}" preserveAspectRatio="xMidYMid meet" `),a=new Blob([r],{type:"image/svg+xml"}),o=URL.createObjectURL(a),l=new Image;return l.decoding="async",l.src=o,await l.decode(),l}function Lu(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}async function Du(i,t=4096,e=2e3){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d"),r=t/2,a=t/3,o=t/(360*.97),l=gt=>r+gt*o,c=[l(4),e*.84],d=[l(-60),e*.5],u=[l(62),e*.5],f=(gt,Bt)=>{let j=Bt[0]-gt[0],lt=Bt[1]-gt[1],Tt=Math.hypot(j,lt);return[j/Tt,lt/Tt]},p=f(c,d),v=f(c,u),g=(gt,Bt,j)=>[gt[0]+Bt[0]*j,gt[1]+Bt[1]*j],m=[p[1],-p[0]],h=(gt,Bt)=>[gt[0]+m[0]*Bt,gt[1]+m[1]*Bt],b=t,T=g(c,v,-(e+10-c[1])/-v[1]);s.fillStyle=wv,s.fillRect(0,0,t,e),s.fillStyle=Av,s.beginPath(),s.moveTo(...c),s.lineTo(...g(c,v,b)),s.lineTo(t+10,e+10),s.lineTo(...T),s.closePath(),s.fill();let y=t/3072,R=150*y,E=13*y;s.save(),s.beginPath(),s.moveTo(...g(c,p,b)),s.lineTo(...c),s.lineTo(...T),s.lineTo(l(-125),e+10),s.lineTo(l(-125),-10),s.closePath(),s.clip(),s.fillStyle=Ev,s.beginPath(),s.moveTo(...g(c,p,b)),s.lineTo(...g(c,p,-b)),s.lineTo(...h(g(c,p,-b),R)),s.lineTo(...h(g(c,p,b),R)),s.closePath(),s.fill(),s.fillStyle=_v,s.beginPath(),s.moveTo(...h(g(c,p,b),R-E)),s.lineTo(...h(g(c,p,-b),R-E)),s.lineTo(...h(g(c,p,-b),R)),s.lineTo(...h(g(c,p,b),R)),s.closePath(),s.fill(),s.strokeStyle=Tv,s.lineWidth=5*y,s.lineCap="butt";for(let gt=0;gt<26;gt++){let Bt=R+(24+gt*27)*y;s.beginPath(),s.moveTo(...h(g(c,p,b),Bt)),s.lineTo(...h(g(c,p,-b),Bt)),s.stroke()}s.restore(),s.strokeStyle="rgba(255,255,255,0.10)",s.lineWidth=2*y,s.beginPath(),s.moveTo(...g(c,p,b)),s.lineTo(...c),s.stroke();let C=[194.5,92.2,439.6,113.2],[L,w]=await Promise.all([Pu(i("logo-mark-white.svg"),600,600),Pu(i("logo-wordmark-white.svg"),1319,340,gt=>gt.replace(/<path[^>]*>(<\/path>)?/,"").replace(/viewBox="[^"]*"/,`viewBox="${C.join(" ")}"`))]);try{await Promise.all([document.fonts.load("700 60px Philosopher"),document.fonts.load("400 60px Philosopher"),document.fonts.load('500 40px "Roboto Flex"')])}catch{}let S=30*o,I=69*o,W=I*C[3]/C[2],N=gt=>{gt.drawImage(L,r-S/2,e*.072,S,S),gt.drawImage(w,r-I/2,e*.302,I,W)},V=document.createElement("canvas");V.width=t,V.height=e,N(V.getContext("2d")),n.foil=V;let J=document.createElement("canvas");J.width=t,J.height=e;let G=J.getContext("2d");G.drawImage(V,0,0),G.globalCompositeOperation="source-in";let at=G.createLinearGradient(0,e*.07,0,e*.4);at.addColorStop(0,"#f2f8f8"),at.addColorStop(1,"#dfe8e8"),G.fillStyle=at,G.fillRect(0,0,t,e),s.drawImage(J,0,0),s.fillStyle=Rv,s.textAlign="center",s.textBaseline="alphabetic";let K=(gt,Bt,j)=>{s.font=Bt(100);let lt=s.measureText(gt).width;return Bt(Math.round(100*j/lt))};"letterSpacing"in s&&(s.letterSpacing="0px"),s.font=K("CBD SKIN CARE",gt=>`500 ${gt}px "Roboto Flex", Arial, sans-serif`,a*.36),s.fillText("CBD SKIN CARE",r,e*.52),s.font=K("CBD SKIN OIL",gt=>`700 ${gt}px Philosopher, Georgia, serif`,a*.44),s.fillText("CBD SKIN OIL",r,e*.595),s.font=K("1000 mg",gt=>`700 ${gt}px Philosopher, Georgia, serif`,a*.17),s.fillText("1000 mg",r,e*.65),s.textAlign="right";let ot=l(50);s.font=`400 ${Math.round(a*.04)}px "Roboto Flex", Arial, sans-serif`,s.fillText("For all skin types",ot,e*.85),s.font=`500 ${Math.round(a*.043)}px "Roboto Flex", Arial, sans-serif`,s.fillText("Contains natural &",ot,e*.892),s.fillText("organic ingredients",ot,e*.929),s.font=`400 ${Math.round(a*.03)}px "Roboto Flex", Arial, sans-serif`,s.fillText("30 ml/1 oz \u212E",ot,e*.968),s.fillStyle="rgba(255,255,255,0.55)";let pt=Lu(7);for(let gt of[l(-168),l(124)])for(let Bt=0;Bt<22;Bt++){let j=a*(.32+pt()*.22);s.fillRect(gt,e*.22+Bt*e*.026,j,e*.008)}let Lt=Lu(11);s.globalCompositeOperation="soft-light";for(let gt=0;gt<12e3;gt++){let Bt=Lt()*t,j=Lt()*e,lt=Lt()*.08;s.fillStyle=Lt()>.5?`rgba(255,255,255,${lt})`:`rgba(0,0,0,${lt})`,s.fillRect(Bt,j,(1+Lt()*3)*y,(1+Lt()*1.5)*y)}return s.globalCompositeOperation="source-over",Cv(s,Math.round(r-a*.62),Math.round(e*.04),Math.round(a*1.24),Math.round(e*.94),.55),n}function Cv(i,t,e,n,s,r){let a=i.getImageData(t,e,n,s),o=a.data,l=new Uint8ClampedArray(o),c=n*4;for(let d=1;d<s-1;d++)for(let u=1;u<n-1;u++){let f=d*c+u*4;for(let p=0;p<3;p++){let v=f+p,g=(o[v-c-4]+o[v-c]+o[v-c+4]+o[v-4]+o[v]+o[v+4]+o[v+c-4]+o[v+c]+o[v+c+4])/9;l[v]=o[v]+(o[v]-g)*r}}a.data.set(l),i.putImageData(a,t,e)}function Uu(i){let e=Math.round(2048*i.height/i.width),n=document.createElement("canvas");n.width=2048,n.height=e;let s=n.getContext("2d");s.drawImage(i,0,0,2048,e);let r=s.getImageData(0,0,2048,e),a=r.data,o=null;if(i.foil){let l=document.createElement("canvas");l.width=2048,l.height=e;let c=l.getContext("2d");c.drawImage(i.foil,0,0,2048,e),o=c.getImageData(0,0,2048,e).data}for(let l=0;l<a.length;l+=4){let c=(a[l]+a[l+1]+a[l+2])/3,d=Math.max(0,(c-200)/55),u=o?o[l+3]/255:0,f=(205-d*95)*(1-u)+82*u;a[l]=0,a[l+1]=f,a[l+2]=0}return s.putImageData(r,0,0),n}function Nu(i){let e=Math.round(2048*i.height/i.width),n=document.createElement("canvas");n.width=2048,n.height=e;let s=n.getContext("2d");return s.fillStyle="#000",s.fillRect(0,0,2048,e),i.foil&&s.drawImage(i.foil,0,0,2048,e),n}var ge=i=>new Xt(i),Cs=Math.PI*2,on=(i,t,e)=>Math.min(e,Math.max(t,i)),Ve=(i,t,e)=>{let n=on((e-i)/(t-i),0,1);return n*n*(3-2*n)},Iv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,an=1.35,$r=0,co=.57,ta=new U(-.5,7.3,.75),vn=5.9;function Mr(i,t=96,e=0){let n=i.map(([r,a])=>new Ct(r,a));e&&(n=new Qa(n).getSpacedPoints(e));let s=new Xr(n,t);return s.computeVertexNormals(),s}function Pv(i,t,e,n,s=360){let r=new Yr(i,i,t,s,6,!0),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getZ(o),d=a.getY(o),u=Math.atan2(l,c),f=Math.pow(Math.abs(Math.cos(u*e*.5)),.6),p=Ve(t/2,t/2-.08,Math.abs(d)),g=(i-n+n*f*p+n*(1-p)*.5)/Math.hypot(l,c);a.setX(o,l*g),a.setZ(o,c*g)}return r.computeVertexNormals(),r}function Lv(i,t,e=44,n=128,s=3){let r=[],a=[],o=[],l=u=>Math.atan2(Math.sin(u),Math.cos(u)),c=u=>i*(1+.085*Math.sin(2*u+s)+.06*Math.sin(3*u+1.7*s)+.03*Math.sin(5*u+.3)+.014*Math.sin(9*u+2.1)+.16*Math.exp(-Math.pow(l(u+.85)/.55,2))-.08*Ve(-.25,-.95,Math.cos(u)));r.push(0,t,0),o.push(0);for(let u=1;u<=e;u++){let f=Math.pow(u/e,.8);for(let p=0;p<n;p++){let v=p/n*Cs,g=c(v)*f,m=t*Math.pow(Math.max(0,1-f*f),.35);r.push(Math.sin(v)*g,m,Math.cos(v)*g),o.push(f)}}for(let u=0;u<n;u++)a.push(0,1+u,1+(u+1)%n);for(let u=1;u<e;u++){let f=1+(u-1)*n,p=1+u*n;for(let v=0;v<n;v++){let g=(v+1)%n;a.push(f+v,p+v,p+g,f+v,p+g,f+g)}}let d=new rn;return d.setAttribute("position",new fe(r,3)),d.setAttribute("aT",new fe(o,1)),d.setIndex(a),d.computeVertexNormals(),d}function ho(i,t=256){let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,t,t);let r=new As(e);return r.colorSpace=Qn,r}function Dv(i){let t=new qr,e=new se(new ws(60,30,60),new Kn({color:ge("#28403b").multiplyScalar(.55),side:sn}));e.position.y=10,t.add(e);let n=new se(new Fi(60,60),new Kn({color:ge("#28403b").multiplyScalar(.35)}));n.rotation.x=-Math.PI/2,n.position.y=-2,t.add(n);let s=(o,l,c,d,u)=>{let f=new se(new Fi(o,l),new Kn({color:ge(d).multiplyScalar(u),side:Yn}));return f.position.set(...c),f.lookAt(0,4,0),t.add(f),f};s(11,8,[-15,13,12],"#fff0dc",7),s(2.6,18,[-17,7,-9],"#fff7ee",4.2),s(2.2,18,[16,7,-5],"#eef3ee",3),s(18,18,[0,24,2],"#f6efe4",.7),s(14,5,[6,3,18],"#ddbfa3",.55),s(6,4.5,[-7,4.4,-22],"#f6e2c4",1.9),s(2.5,4.5,[5,4.4,-22],"#f3ece2",1.5),s(1.4,9,[10,6,-1.5],"#dfe8e4",4);let r=new ur(i),a=r.fromScene(t,.03).texture;return r.dispose(),t.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a}var Uv=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.99999, 1.0); }`,Nv=`
  precision highp float;
  uniform vec2 uRes; uniform float uDpr;
  uniform vec3 uNight, uDeep, uWarm, uAmber, uSage, uThread;
  uniform vec2 uGlow; uniform float uGlowR;
  uniform vec2 uSpot; uniform vec2 uSpotR; uniform vec3 uSpotCol;
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
    // warm spot right behind the bottle's shoulder: only ever seen THROUGH the amber glass (transmission picks it
    // up and the attenuation turns it into the backlit amber glow of the shoulder and the heel)
    vec2 sq = (p - uSpot) / uSpotR;
    col += uSpotCol * exp(-dot(sq, sq) * 1.6);
    // light pooling on the (invisible) floor
    vec2 q = (p - uPool) / uPoolR;
    col += mix(uSage, uWarm, 0.5) * 0.035 * exp(-dot(q,q) * 1.6);
    // one diagonal thread hairline (mauve), faded at both ends
    float dl = segDist(p, uTA, uTB);
    float w = 0.35 * uDpr;
    float line = 1.0 - smoothstep(w, w + 0.9 * uDpr, dl);
    vec2 ab = uTB - uTA; float tt = clamp(dot(p - uTA, ab) / dot(ab, ab), 0.0, 1.0);
    float fade = smoothstep(0.06, 0.22, tt) * smoothstep(1.0, 0.7, tt);   // emerges from nothing below the section top
    col = mix(col, uThread, line * fade * uThreadAlpha);
    gl_FragColor = vec4(col, 1.0);
  }`,Fv=`
  attribute vec3 iColor; attribute float iSoft; attribute float iAlpha; attribute vec3 iHi; attribute float iOil;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi; varying float vOil;
  void main(){
    mat4 m = modelMatrix * instanceMatrix;
    vec4 wp = m * vec4(position, 1.0);
    vN = normalize(mat3(m) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    vVN = normalize(normalMatrix * mat3(instanceMatrix) * normal);
    vColor = iColor; vSoft = iSoft; vAlpha = iAlpha; vHi = iHi; vOil = iOil;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,Bv=`
  precision highp float;
  uniform vec3 uKey; uniform vec3 uRim; uniform float uFade;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN; varying vec3 vHi; varying float vOil;
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
    // a sphere of the oil itself: amber body (absorbs the stage, deepens toward the rim), a golden caustic at the
    // bottom where the back light is focused, no iridescence \u2013 it belongs to the drop, not to a soap film
    if (vOil > 0.0) {
      vec3 honey = vec3(0.62, 0.36, 0.1), deep = vec3(0.16, 0.06, 0.01);
      float rimO = smoothstep(0.15, 0.85, rimT);
      vec3 oc = mix(honey * 0.2, deep * 0.5, rimO);
      oc *= mix(1.2, 0.55, smoothstep(-0.5, 0.7, nv.y));                       // ball lens: the warm floor glow below, dark room above
      float cO = smoothstep(0.25, 0.95, dot(nv.xy, normalize(vec2(0.2, -1.0)))) * smoothstep(0.02, 0.4, ndv);
      oc += vec3(0.95, 0.62, 0.24) * cO * 0.7;
      oc += vec3(1.0, 0.85, 0.6) * pow(rimT, 4.0) * 0.12;
      float ao = mix(0.3, 0.94, rimO);
      ao = mix(ao, 0.8, smoothstep(0.84, 0.98, rimT));
      col = mix(col, oc, vOil); a = mix(a, ao, vOil);
    }
    col *= edge; a *= edge;
    float hi = (sp * 1.5 + sp2) * (1.0 - vSoft * 0.7);
    col += uKey * hi; a += hi * 0.55;
    float k = vAlpha * uFade;
    float occl = smoothstep(0.35, 1.0, k) * (1.0 - 0.8 * smoothstep(0.22, 0.5, vSoft));
    gl_FragColor = vec4(col * k, clamp(a, 0.0, 1.0) * k * occl);
  }`,Ov=`
  attribute float aT;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ;
  void main(){
    vT = aT; vXZ = position.xz;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWN = normalize(mat3(modelMatrix) * normal);
    vWV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,kv=`
  precision highp float;
  uniform vec3 uSigma; uniform float uFeather;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ;
  void main(){
    float ndv = max(abs(dot(normalize(vWN), normalize(vWV))), 0.16);
    float thick = 1.0 - 0.5 * smoothstep(0.45, 1.0, vT);                 // deepest where it pooled, thinning toward the rim
    float fw = max(fwidth(vT), 1e-4);
    float film = 1.0 - smoothstep(1.0 - 1.4 * fw, 1.0, vT);              // crisp, anti-aliased film edge
    vec3 T = exp(-uSigma * (0.18 + thick) / ndv * 0.1);
    float F = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);                          // light reflected away is not transmitted
    // the film's own surface reflection replaces part of the floor's diffuse light: oil on a matte floor reads
    // darker and richer than the floor around it
    vec3 tint = T * (1.0 - F * 0.85) * 0.55;
    gl_FragColor = vec4(mix(vec3(1.0), tint, film), 1.0);
  }`,zv={uniforms:{tDiffuse:{value:null},uRes:{value:new Ct(1,1)},uTime:{value:0},uVig:{value:.32},uVigCenter:{value:new Ct(.62,.52)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};async function Fu({canvas:i,host:t,asset:e,reduced:n,onFrame:s,onFirstFrame:r}){let a=new Xa({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});a.toneMapping=mi,a.setClearColor(ge("#28403b"),1);let o=$c();a.setPixelRatio(o);let l=new qr,c=new gn(20,1,1,200),d=Dv(a);l.environment=d;let u={uRes:{value:new Ct(1,1)},uDpr:{value:o},uNight:{value:ge("#28403b")},uDeep:{value:ge("#213631")},uWarm:{value:ge("#ddbfa3")},uAmber:{value:ge("#c7ae92")},uSage:{value:ge("#9ab4ac")},uThread:{value:ge("#b07a7f")},uGlow:{value:new Ct},uGlowR:{value:400},uSpot:{value:new Ct(-1e4,-1e4)},uSpotR:{value:new Ct(100,100)},uSpotCol:{value:ge("#f0a650").multiplyScalar(.4)},uPool:{value:new Ct},uPoolR:{value:new Ct(300,60)},uTA:{value:new Ct},uTB:{value:new Ct},uThreadAlpha:{value:.36}},f=new se(new Fi(2,2),new we({uniforms:u,vertexShader:Uv,fragmentShader:Nv,depthWrite:!1,depthTest:!1}));f.frustumCulled=!1,f.renderOrder=-100,l.add(f);let p=new _s(ge("#fff1e0"),2.5);p.position.set(-7,9,8),l.add(p);let v=new _s(ge("#b6c9c2"),.25);v.position.set(6,2,6),l.add(v);let g=new _s(ge("#ffe6c4"),1.6);g.position.set(3,6,-10),l.add(g);let m=new _s(ge("#dfe8e4"),1.5);m.position.set(9,4.5,-2.5),l.add(m);let h=new ts({color:16777215,metalness:0,roughness:.035,transmission:1,ior:1.52,thickness:.8,attenuationColor:ge("#a24a12"),attenuationDistance:1.6,specularIntensity:1,envMapIntensity:1.35});h.onBeforeCompile=rt=>{rt.fragmentShader=rt.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float hy = vWorldPosition.y;
        float heel = smoothstep(0.62, 0.12, hy) * smoothstep(-0.02, 0.1, hy);
        float ndvH = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance += vec3(0.085, 0.016, 0.0015) * heel * (0.35 + 0.65 * ndvH); }`)};let b={uAxis:{value:new U(0,1,0)},uK1:{value:new U(-17,7,-9).normalize()},uK2:{value:new U(-7,9,8).normalize()},uK3:{value:new U(16,7,-5).normalize()}},T=new we({uniforms:b,transparent:!0,depthWrite:!1,blending:Ji,vertexShader:`
      varying vec3 vN; varying vec3 vV; varying float vY;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vY = position.y;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      precision highp float;
      uniform vec3 uAxis, uK1, uK2, uK3;
      varying vec3 vN; varying vec3 vV; varying float vY;
      void main(){
        vec3 n = normalize(vN), v = normalize(vV);
        float ndv = clamp(abs(dot(n, v)), 0.0, 1.0);
        // lateral coordinate across the tube (\u22121 = silhouette on the key side, +1 = shadow side)
        vec3 side = normalize(cross(uAxis, v));
        float lat = dot(n, side) * sign(dot(side, uK2) + 1e-4) * -1.0;
        // broad soft fresnel: the walls have body instead of a 1px wire
        float rim = pow(1.0 - ndv, 3.5) * 0.22;
        // the key softbox seen in the glass: one soft vertical band ~30% in from the lit edge, and a faint
        // narrow return from the right strip on the shadow side
        // over the oil the softbox is refracted away (the oil index nearly matches the glass): full strength only
        // on the empty glass above the meniscus
        float emptyG = smoothstep(${(-2.5-.05).toFixed(2)}, ${(-2.5+.3).toFixed(2)}, vY);
        float band = exp(-pow((lat + 0.42) / 0.06, 2.0)) * 0.62 * mix(0.18, 1.0, emptyG) + exp(-pow((lat - 0.8) / 0.05, 2.0)) * 0.2 * mix(0.45, 1.0, emptyG);
        float lenFade = smoothstep(-${vn.toFixed(2)}, -${(vn-.3).toFixed(2)}, vY) * (1.0 - smoothstep(-0.2, 0.05, vY));
        // the wall itself: a cool-grey body that thickens toward the silhouette (the tube is glass, not wire)
        vec3 body = vec3(0.78, 0.84, 0.82) * 0.06 * pow(1.0 - ndv, 2.0) * mix(0.5, 1.0, emptyG);
        vec3 c = (vec3(1.0, 0.97, 0.92) * (rim + band) + body) * lenFade;
        gl_FragColor = vec4(c, 1.0);
      }`}),y=-2.5,R={uAxis:b.uAxis,uKey:b.uK2,uR:{value:.248},uTop:{value:y},uDepth:{value:.235}},E=new we({uniforms:R,transparent:!0,depthWrite:!1,blending:Rs,blendSrc:Kr,blendDst:ys,vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vL = position;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      precision highp float;
      uniform vec3 uAxis, uKey; uniform float uR, uTop, uDepth;
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      void main(){
        vec3 n = normalize(vN), v = normalize(vV);
        float ndv = clamp(abs(dot(n, v)), 0.0, 1.0);
        vec3 side = normalize(cross(uAxis, v));
        float lat = dot(n, side) * sign(dot(side, uKey) + 1e-4) * -1.0;      // \u22121 key side \u2026 +1 shadow side
        float edge = pow(1.0 - ndv, 1.6);
        vec3 straw = lin(vec3(0.906, 0.753, 0.439));                           // #e7c070
        vec3 deep  = lin(vec3(0.478, 0.259, 0.063));                           // #7a4210
        // thinner toward the nozzle \u2192 paler
        float thin = 1.0 - smoothstep(-${(vn-.15).toFixed(2)}, -${(vn-2.2).toFixed(2)}, vL.y);
        vec3 gold  = lin(vec3(0.95, 0.72, 0.33));                              // luminous core, where the back light is focused
        gold = mix(gold, lin(vec3(0.157, 0.251, 0.231)) * 1.6, 0.18);          // \u2026 carrying the night-green stage seen through it
        // a cylinder of oil: clear golden middle, the path through the oil lengthens toward the walls \u2192 deep amber
        vec3 col = mix(straw * (0.35 + 0.2 * thin), deep * 0.34, pow(1.0 - ndv, 0.95));
        float a = mix(0.38 - 0.12 * thin, 0.94, edge);
        // focused back light: a soft luminous core a touch toward the shadow side
        col += gold * 0.2 * exp(-pow((lat - 0.12) / 0.26, 2.0));
        // refracted back-light line inside the shadow-side edge (~70% of the radius)
        // modulated along the axis (focused light, not a glass-rod stripe): builds up from the nozzle, breathes,
        // and fades out before the tip and just below the meniscus
        float line = exp(-pow((lat - 0.7) / 0.035, 2.0));
        line *= (0.55 + 0.45 * smoothstep(-${vn.toFixed(2)} + 0.4, -${vn.toFixed(2)} + 2.4, vL.y)) * (0.85 + 0.15 * sin(vL.y * 3.1));
        line *= smoothstep(-${vn.toFixed(2)}, -${vn.toFixed(2)} + 0.25, vL.y) * (1.0 - smoothstep(uTop - 0.08 - 0.06, uTop - 0.08, vL.y));
        col += vec3(1.0, 0.86, 0.58) * line * 0.32;
        // total internal reflection just inside each silhouette: a dark refraction edge that separates oil from wall
        float tir = exp(-pow((abs(lat) - 0.9) / 0.05, 2.0));
        col = mix(col, deep * 0.2, tir * 0.6); a = max(a, tir * 0.9);
        // meniscus: concave (spherical cap, wets the glass). Seen from the side, above the U-curve the ray only
        // grazes oil near the walls \u2192 a thinner, paler crescent, bounded below by one bright meniscus line.
        float x = clamp(abs(lat), 0.0, 1.0) * uR;
        float Rs = (uR * uR + uDepth * uDepth) / (2.0 * uDepth);
        float u = uTop - uDepth + (Rs - sqrt(max(Rs * Rs - x * x, 0.0)));     // height of the cap at this lateral offset
        float above = smoothstep(u - 0.012, u + 0.012, vL.y);
        float climb = smoothstep(uTop - 0.09, uTop + 0.03, vL.y);              // the wetting film at the wall, fading out
        col = mix(col, straw * 0.55 + deep * 0.1, above * 0.75);
        a = mix(a, 0.32 * (1.0 - climb * 0.6) + edge * 0.4, above);
        float men = exp(-pow((vL.y - u) / 0.022, 2.0)) * (1.0 - edge * 0.6);
        col += vec3(1.0, 0.9, 0.7) * men * 0.55;
        a = max(a, men * 0.5);
        // above the film: no oil
        float cut = 1.0 - smoothstep(uTop + 0.02, uTop + 0.06, vL.y);
        gl_FragColor = vec4(col * cut, a * cut);
      }`}),C=new we({uniforms:{uFade:{value:1}},transparent:!0,depthWrite:!1,blending:Rs,blendSrc:Kr,blendDst:ys,vertexShader:`
      varying vec3 vN; varying vec3 vVN; varying vec3 vV;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0);
        vN = normalize(mat3(modelMatrix) * normal); vVN = normalize(normalMatrix * normal); vV = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      precision highp float;
      uniform float uFade;
      varying vec3 vN; varying vec3 vVN; varying vec3 vV;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      void main(){
        vec3 n = normalize(vN), v = normalize(vV), nv = normalize(vVN);
        float ndv = clamp(dot(n, v), 0.0, 1.0);
        vec3 straw = lin(vec3(0.906, 0.753, 0.439));                // #e7c070
        vec3 deep  = lin(vec3(0.478, 0.259, 0.063));                // #7a4210
        vec3 honey = lin(vec3(0.86, 0.63, 0.31));                  // the body colour where the drop is thickest
        float rimT = smoothstep(0.1, 0.7, 1.0 - ndv);
        vec3 col = mix(honey * 0.42, deep * 0.3, rimT);
        // a ball lens inverts the stage: the warm glow behind shows up at the bottom, the dark top of the room at the top
        col *= mix(1.15, 0.7, smoothstep(-0.4, 0.6, nv.y));
        // the lens focuses the back light into a bright crescent at the bottom
        float caust = smoothstep(0.2, 0.95, dot(nv.xy, normalize(vec2(0.15, -1.0)))) * smoothstep(0.02, 0.35, ndv);
        col += straw * caust * 1.05;
        float a = mix(0.3, 0.95, rimT);
        // transmission rim: the last pixel of the silhouette is thin oil seen edge-on \u2192 deep amber, a touch see-through,
        // so the outline feathers into the stage instead of cutting
        float tr = smoothstep(0.82, 0.97, 1.0 - ndv);
        col = mix(col, deep * 0.45, tr); a = mix(a, 0.85, tr);
        // a whisper of the softbox along the upper-left silhouette (fresnel)
        float fr = pow(1.0 - ndv, 4.0) * smoothstep(-0.2, 0.6, dot(nv.xy, normalize(vec2(-0.62, 0.7))));
        col += vec3(1.0, 0.93, 0.8) * fr * 0.22;
        // speculars in view space: key upper-left (pin-sharp) + faint window lower-right
        vec3 vd = vec3(0.0, 0.0, 1.0);
        vec3 Lk = normalize(vec3(-0.55, 0.62, 0.56)), L2 = normalize(vec3(0.5, -0.3, 0.6));
        float sk = pow(max(dot(nv, normalize(Lk + vd)), 0.0), 180.0) * 2.0;
        float s2 = pow(max(dot(nv, normalize(L2 + vd)), 0.0), 60.0) * 0.15;
        vec3 spec = vec3(1.0, 0.97, 0.9) * (sk + s2);
        gl_FragColor = vec4((col + spec) * uFade, clamp(a + sk * 0.3, 0.0, 1.0) * uFade);
      }`}),L=C.clone(),w=new we({uniforms:{uSigma:{value:new U(.3,2.6,6.5)},uFeather:{value:1.1}},vertexShader:Ov,fragmentShader:kv,transparent:!0,depthWrite:!1,blending:Rs,blendEquation:hi,blendSrc:to,blendDst:eo}),S=new ts({color:0,roughness:.03,metalness:0,ior:1.47,specularIntensity:1,envMapIntensity:3,emissive:ge("#e6a850"),emissiveIntensity:1,transparent:!0,depthWrite:!1,blending:Ji}),I=new ts({color:ge("#151817"),roughness:.38,metalness:0,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1}),W=new ts({color:ge("#1a1c1b"),roughness:.58,sheen:.6,sheenRoughness:.5,sheenColor:ge("#5a6662"),envMapIntensity:.9}),N=new fi;N.position.set(an,0,$r),N.rotation.y=-.26,l.add(N),N.updateMatrixWorld(!0);let V=[[0,.16],[.55,.13],[1.05,.06],[1.42,0],[1.545,.035],[1.592,.13],[1.6,.3],[1.6,5.35],[1.592,5.55],[1.55,5.74],[1.46,5.92],[1.3,6.08],[1.1,6.2],[.93,6.28],[.83,6.36],[.8,6.46],[.8,6.52],[.85,6.56],[.85,6.62],[.8,6.66],[.8,6.72],[.85,6.76],[.85,6.82],[.8,6.86],[.81,6.93],[.79,6.99],[.72,7.02],[.64,7],[.61,6.94],[.6,6.7],[.6,6.1]],J=new se(Mr(V,128),h);N.add(J);let G=new ts({color:ge("#7bb1b0"),roughness:.78,metalness:0,sheen:.35,sheenRoughness:.8,sheenColor:ge("#ffffff"),envMapIntensity:.42});G.onBeforeCompile=rt=>{rt.fragmentShader=rt.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
#ifdef USE_MAP
  diffuseColor.rgb = texture2D( map, vMapUv, -0.65 ).rgb;
#endif`).replace("#include <emissivemap_fragment>",`#ifdef USE_EMISSIVEMAP
  totalEmissiveRadiance *= texture2D( emissiveMap, vEmissiveMapUv, -0.65 ).rgb;
#endif`)};let at=new Yr(1.614,1.614,4.75,160,1,!0,-Cs*.97/2,Cs*.97),K=new se(at,G);K.position.y=.48+4.75/2,K.rotation.y=0,N.add(K);for(let rt of[.48,.48+4.75]){let Dt=new se(new Ka(1.613,.006,6,160),new Zr({color:ge("#9dbab0"),roughness:.8}));Dt.rotation.x=Math.PI/2,Dt.position.y=rt,N.add(Dt)}Du(e).then(rt=>{let Dt=new As(rt);Dt.colorSpace=mn,Dt.anisotropy=a.capabilities.getMaxAnisotropy(),Dt.wrapS=ar;let ee=new As(Uu(rt));ee.colorSpace=Qn;let ae=new As(Nu(rt));ae.colorSpace=mn,ae.anisotropy=Dt.anisotropy,ae.wrapS=ar,G.map=Dt,G.roughnessMap=ee,G.metalnessMap=ee,G.roughness=1,G.metalness=1,G.color.set(16777215),G.emissiveMap=ae,G.emissive.setRGB(.135,.165,.215),G.needsUpdate=!0,zn=!0,n&&ni&&Ds()}).catch(rt=>console.warn("[hero] label",rt));let ot=new fi,pt=new fi;pt.position.copy(ta),pt.rotation.z=-co,pt.add(ot),l.add(pt);let Lt=new se(Mr([[.86,0],[1.16,0],[1.205,.035],[1.215,.12],[1.215,.74],[1.2,.79],[1.15,.815],[1.03,.83]],128),I);ot.add(Lt);let gt=new se(Pv(1.04,1.18,44,.05),I);gt.position.y=.83+.59,ot.add(gt);let Bt=new se(Mr([[1,2],[1.01,2.02],[.95,2.06],[.66,2.07]],96),I);ot.add(Bt);let j=new se(new Za(.3,.86,64),I);j.rotation.x=Math.PI/2,j.position.y=.002,ot.add(j);let lt=new se(Mr([[0,2],[.66,2],[.69,2.06],[.68,2.14],[.6,2.2],[.585,2.32],[.56,2.9],[.5,3.45],[.465,3.72],[.455,3.85],[.43,3.96],[.37,4.04],[.27,4.1],[.14,4.13],[0,4.14]],96,80),W);ot.add(lt);let Tt=vn,vt=.302,Nt=.052,Ht=1.95,Jt=rt=>{let Dt=on((rt+Tt)/Ht,0,1);return Nt+(vt-Nt)*(1-Math.pow(1-Dt,2.4))},de=[[0,-Tt],[Nt*.72,-Tt],[Nt*.95,-Tt+.012]];for(let rt=0;rt<=40;rt++){let Dt=-Tt+.03+(Ht+.25-.03)*(rt/40);de.push([Jt(Dt),Dt])}de.push([vt,-2],[vt,-1],[vt,.05],[0,.05]);let $t=Mr(de,96),be=new se($t,new we({transparent:!0,depthWrite:!1,blending:Rs,blendEquation:hi,blendSrc:to,blendDst:eo,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`precision highp float; varying vec3 vN; varying vec3 vV; void main(){ float ndv = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
      vec3 c = mix(vec3(0.92, 0.94, 0.93), vec3(0.42, 0.47, 0.45), pow(1.0 - ndv, 2.2)); gl_FragColor = vec4(c, 1.0); }`}));be.renderOrder=4,ot.add(be);let O=new se($t,T);O.renderOrder=5,ot.add(O);let Ne=[[0,-Tt+.006],[Nt*.7,-Tt+.008]];for(let rt=0;rt<=40;rt++){let Dt=-Tt+.03+(Ht+.25-.03)*(rt/40);Ne.push([Jt(Dt)*.82,Dt])}Ne.push([vt*.82,y+.06],[0,y+.06]);let te=new se(Mr(Ne,64),E);te.renderOrder=3,ot.add(te),ot.traverse(rt=>{rt.isMesh&&rt!==O&&rt!==be&&rt!==te&&(rt.renderOrder=2)});let Zt=new U(0,-vn+.004,0),Ft=ho([[0,1],[.35,.72],[.7,.22],[1,0]]),ce=ho([[0,1],[.5,.45],[1,0]]),Ut=(rt,Dt,ee,ae,Ge,yn,ri,Rn=0,Mn=!1)=>{let Cn=new se(new Fi(1,1),new Kn({color:ge(Dt),alphaMap:rt,transparent:!0,opacity:ee,depthWrite:!1,blending:Mn?Ji:Zi,toneMapped:!1}));return Mn&&(Cn.material.map=rt,Cn.material.alphaMap=null),Cn.rotation.x=-Math.PI/2,Cn.rotation.z=Rn,Cn.scale.set(ae,Ge,1),Cn.position.set(yn,.004,ri),Cn.renderOrder=-50,l.add(Cn),Cn},_="#0f1d1a";Ut(ce,"#ddbfa3",.06,14,7,an-2.2,.6,0,!0),Ut(Ft,_,.72,3.9,3.9,an+.05,$r+.02),Ut(ce,_,.42,7.4,2.6,an+2.6,$r-.9,-.42);let M=Ut(ho([[0,1],[.25,.55],[.6,.12],[1,0]]),"#d9902f",.3,2.2,1,an+1.75,$r-.6,-.42,!0),H=Ut(ce,_,.18,4.6,1.5,-2.5,.2,-.62);pt.updateMatrixWorld(!0);let et=ot.localToWorld(Zt.clone()),it=.008,$=1.1,It={uAge:{value:99},uImpact:{value:new Ct(0,0)},uAmp:{value:.012}},bt=`
        uniform float uAge; uniform vec2 uImpact; uniform float uAmp;
        float wave(float r){
          float h = 0.0;
          for (int i = 0; i < 2; i++){
            float age = uAge - float(i) * 0.22;
            if (age <= 0.0) continue;
            float front = 0.55 * age + 0.04;
            float d = r - front;
            float life = exp(-2.2 * age) * (1.0 - smoothstep(0.85, 1.2, age));
            h += uAmp * life * exp(-d * d / 0.0035) * cos(d * 24.0) * (1.0 - float(i) * 0.3);
          }
          return h;
        }`;S.onBeforeCompile=rt=>{Object.assign(rt.uniforms,It),rt.vertexShader=rt.vertexShader.replace("#include <common>",`#include <common>
        attribute float aT;
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple;
        ${bt}`).replace("#include <beginnormal_vertex>",`
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
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * (1.0 - smoothstep(0.6, 0.95, aT)); }`),rt.fragmentShader=rt.fragmentShader.replace("#include <common>",`#include <common>
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple; float vRipF = 0.0;
        ${bt}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          // ripple normal per fragment (crisp rings, independent of the mesh density)
          vec2 xz = vPoolXZ - uImpact; float r = max(length(xz), 1e-4);
          float e = 0.006; float dw = (wave(r + e) - wave(max(r - e, 0.0))) / (2.0 * e);
          vec3 dn = vec3(-dw * xz.x / r, 0.0, -dw * xz.y / r) * 1.6;
          // a film, not a lens: the shading normal stays close to the floor normal right out to the rim, so the
          // edge does not pick up a bright fresnel outline (the meniscus line is drawn explicitly below)
          vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
          normal = normalize(upV + (viewMatrix * vec4(dn, 0.0)).xyz);
          vRipF = clamp(-dw * 3.0, 0.0, 1.0);          // only the crest's lit flank \u2192 one fine line per ring
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float thick = 1.0 - 0.75 * smoothstep(0.35, 1.0, vPoolT);
          float rn = vPoolXZ.y / ${$.toFixed(2)};
          // key light scattered back up through the film: quiet \u2013 the pool absorbs (amber), it does not glow
          float back = smoothstep(0.5, -0.7, rn);
          totalEmissiveRadiance *= (0.002 + 0.018 * thick * (0.55 + 0.45 * back)) + 0.12 * vRipF * thick;
          // the key softbox as one curved highlight following the far rim (\u2264 35% of the width, Gaussian ends),
          // its thickness breathing with the ripple normal
          float far = smoothstep(0.05, -0.45, rn);
          // the backlit amber bottle mirrored in the film, on the side that faces it: a soft vertical amber streak
          float xs = (vPoolXZ.x - 0.55 * ${$.toFixed(2)}) / (0.12 * ${$.toFixed(2)});
          float filmIn = 1.0 - smoothstep(0.78, 0.96, vPoolT);
          totalEmissiveRadiance += vec3(0.75, 0.42, 0.12) * 0.55 * exp(-xs * xs) * (0.35 + 0.65 * far) * filmIn;
          float across = 1.0 - smoothstep(${$.toFixed(2)} * 0.14, ${$.toFixed(2)} * 0.36, abs(vPoolXZ.x + ${$.toFixed(2)} * 0.05));
          float w = 0.08 * (1.0 + 1.6 * vRipF);
          float gl = exp(-pow((vPoolT - 0.6) / w, 4.0)) * across * far;           // flat-topped, feathered: a softbox glint
          totalEmissiveRadiance += vec3(0.92, 0.86, 0.74) * 0.7 * gl;
          // light refracted through the meniscus on the near side: a soft golden caustic just inside the rim
          float nearS = smoothstep(0.05, 0.75, rn);
          totalEmissiveRadiance += vec3(1.0, 0.68, 0.28) * 0.045 * exp(-pow((vPoolT - 0.86) / 0.07, 2.0)) * nearS;
          // the dark room mirrored in the film: a faint cool sheen that grows toward the far (more grazing) side,
          // so the surface has depth instead of an even fill
          totalEmissiveRadiance += vec3(0.022, 0.03, 0.028) * smoothstep(0.1, -0.9, rn) * filmIn;
          // ripple rings catch the light
          totalEmissiveRadiance += vec3(1.0, 0.88, 0.66) * 0.2 * vRipF * thick;
          // meniscus: a 1\u20132px bright line on the far rim only (light caught where the film curls up), never a contour
          float fw = max(fwidth(vPoolT), 1e-4);
          float ml = 1.0 - smoothstep(0.0, 1.8 * fw, abs(vPoolT - (1.0 - 1.8 * fw)));
          float mid = exp(-pow(vPoolXZ.x / (${$.toFixed(2)} * 0.8), 2.0));
          totalEmissiveRadiance += vec3(0.9, 0.7, 0.4) * 0.35 * ml * far * mid;
        }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        { float fw = max(fwidth(vPoolT), 1e-4); gl_FragColor.rgb *= 1.0 - smoothstep(1.0 - 1.6 * fw, 1.0 - 0.1 * fw, vPoolT); }   // fades with (not after) the absorption layer \u2192 no light halo at the edge`)},w.onBeforeCompile=rt=>{Object.assign(rt.uniforms,It)};let Rt=Lv($,it),Wt=new se(Rt,w);Wt.renderOrder=1;let st=new se(Rt,S);st.renderOrder=2,st.position.set(et.x+.1,.003,et.z-.05),Wt.position.copy(st.position),l.add(Wt,st);let Et=[Ut(Ft,_,.04,$*2.3,$*1.9,st.position.x,st.position.z+.05)],kt=Ut(ho([[0,1],[.3,.5],[.65,.12],[1,0]]),"#e9a443",.12,1.9,.9,st.position.x+.6,st.position.z-.55,-.42,!0);Et.push(kt);for(let rt of Et)rt.userData.s0=[rt.scale.x,rt.scale.y];It.uImpact.value.set(et.x-st.position.x,et.z-st.position.z);let Ot=40,Mt=34,Yt=new Xr(Array.from({length:Mt},(rt,Dt)=>new Ct(.01,-Dt*.01)),Ot),Vt=new se(Yt,C);Vt.renderOrder=3,Vt.frustumCulled=!1,l.add(Vt);let qt=Array.from({length:Mt},()=>[0,0]),F=(rt,Dt,ee)=>{let ae=on(.5+.5*(Dt-rt)/ee,0,1);return rt*(1-ae)+Dt*ae+ee*ae*(1-ae)};function dt(rt,Dt,ee,ae,Ge){let yn=-(ae+Dt*.9),ri=Dt*.96,Rn=Dt*ee,Mn=18,Cn=Math.max(.012,.62*Dt*(1-.55*Ge)),bn=rt*(1-.72*Ge);for(let Ee=0;Ee<Mn;Ee++){let ai=Ee/Mn,oi=yn*Math.pow(ai,.8),li=-oi/Math.max(-yn,.001),rs=Math.abs(oi-yn)<ri?Dt*Math.sqrt(1-Math.pow((oi-yn)/ri,2)):0,Vn=Ve(0,.75,li),ki=rt+(bn-rt)*Vn;qt[Ee][0]=Math.max(5e-4,F(ki,rs,Math.max(.004,Cn*Ve(0,.45,li)))),qt[Ee][1]=oi}for(let Ee=Mn;Ee<Mt;Ee++){let ai=(Ee-Mn)/(Mt-1-Mn)*Math.PI/2;qt[Ee][0]=Dt*Math.cos(ai),qt[Ee][1]=yn-Rn*Math.sin(ai)}qt[Mt-1][0]=0;let yi=Yt.attributes.position.array,Us=Yt.attributes.normal.array;for(let Ee=0;Ee<Mt;Ee++){let ai=qt[Math.max(0,Ee-1)],oi=qt[Math.min(Mt-1,Ee+1)],li=oi[0]-ai[0],rs=oi[1]-ai[1],Vn=Math.hypot(li,rs)||1;li/=Vn,rs/=Vn;let ki=-rs,Ar=li;Ee===Mt-1&&(ki=0,Ar=-1);for(let as=0;as<=Ot;as++){let Er=as/Ot*Cs,me=Math.sin(Er),Se=Math.cos(Er),ue=(as*Mt+(Mt-1-Ee))*3;yi[ue]=qt[Ee][0]*me,yi[ue+1]=qt[Ee][1],yi[ue+2]=qt[Ee][0]*Se,Us[ue]=ki*me,Us[ue+1]=Ar,Us[ue+2]=ki*Se}}return Yt.attributes.position.needsUpdate=!0,Yt.attributes.normal.needsUpdate=!0,yn-Rn}let Z=new se(new Qr(1,48,32),L);Z.renderOrder=3,l.add(Z);let nt=!1,wt=1,xt=1,Gt=()=>nt,ie=3,Ie=[ge("#c98a3a"),ge("#e8d6c3"),ge("#b6c9c2")],Kt=new Qr(1,48,32),Ye=new Float32Array(ie*3),Je=new Float32Array(ie),Bi=new Float32Array(ie),xn=new Float32Array(ie*3),Qe=new Float32Array(ie);Kt.setAttribute("iColor",new vi(Ye,3)),Kt.setAttribute("iSoft",new vi(Je,1)),Kt.setAttribute("iAlpha",new vi(Bi,1)),Kt.setAttribute("iHi",new vi(xn,3)),Kt.setAttribute("iOil",new vi(Qe,1));let $n=new we({uniforms:{uKey:{value:ge("#fff6ea").multiplyScalar(1.6)},uRim:{value:ge("#f6f4ee")},uFade:{value:1}},vertexShader:Fv,fragmentShader:Bv,transparent:!0,depthWrite:!1,blending:Rs,blendSrc:Kr,blendDst:ys}),ti=new Ya(Kt,$n,ie);ti.frustumCulled=!1,ti.renderOrder=10,l.add(ti);let Oi=4,je=()=>(Oi=Oi*16807%2147483647)/2147483647,kn=[],ei=[[4.3,9.6,-.6,.25,0,.04,1],[-1.9,2.6,1.4,.075,1,.02,0],[6.4,5,-1.2,.1,2,.12,0]];matchMedia("(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)").matches&&(ei[0]=[-3.5,8,.4,.25,0,.04,1],ei[1]=[-1.6,2.2,1.4,.075,1,.02,0]);let es=rt=>{xn[rt*3]=(je()-.5)*.26,xn[rt*3+1]=(je()-.5)*.2,xn[rt*3+2]=je()};for(let rt=0;rt<ie;rt++){let[Dt,ee,ae,Ge,yn,ri,Rn]=ei[rt];kn.push({p:new U(Dt,ee,ae),v:new U,r:Ge,r0:Ge,tint:yn,soft:ri,phase:je()*100,born:-10,a:0}),Ie[yn].toArray(Ye,rt*3),Je[rt]=ri,Bi[rt]=0,Qe[rt]=Rn,es(rt)}let He={x0:-7,x1:7.5,y0:-1,y1:13.2,z0:-6,z1:2.5};function br(rt,Dt){let ee=kn.indexOf(rt);rt.p.set(He.x0+je()*(He.x1-He.x0),-.4+je()*3.2,He.z0+je()*(He.z1-He.z0)),rt.v.set(0,0,0),rt.born=Dt,rt.a=0,rt.soft=on((rt.p.z>1.6?.3:0)+(rt.p.z<-4?.25:0)+je()*.08,0,.6)*(Qe[ee]?.3:1),Je[ee]=rt.soft,es(ee),Kt.attributes.iSoft.needsUpdate=!0,Kt.attributes.iHi.needsUpdate=!0}let re={discR:0,tagW:0,tagH:0,copyTop:1e9,pin:null,blocks:[],spot:null,trustTop:0},pe=[0,0],A=[0,0,0,0],D=[0,0,0,0],z={ndc:new Ct(.3,0),target:new Ct(.3,0),active:!1,vel:new Ct},Y=new $a,B=new U,ct=new U,ft=new U,x={az:0,el:0},P={cx:-.75,cy:5.2,h:11},k=(new URLSearchParams(location.search).get("heroframe")||"").split(",").map(Number).filter(rt=>rt>0);k.length!==3&&(k.length=0);let X=-2,q=.01,ht=matchMedia("(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)"),Q=1,tt=1,ut={fx:.66,fy:.5,hs:.8,D:30},Pt=new U;function At(){Q=Math.max(1,t.clientWidth),tt=Math.max(1,t.clientHeight);let rt=ht.matches;nt=rt,wt=rt?1.3:1,xt=rt?1.2:1,st.scale.set(xt,1,xt),Wt.scale.copy(st.scale);for(let ee of Et)ee.scale.set(ee.userData.s0[0]*xt,ee.userData.s0[1]*xt,1);if(a.setPixelRatio(o),a.setSize(Q,tt,!1),he.setPixelRatio(o),he.setSize(Q,tt),c.aspect=Q/tt,rt){let ee=re.spot||[150,Math.min(318,Q*.78)],ae=Q>760?104:92,Ge=Math.min(ee[1]-ae,Q*.84)*1.04;ut={fx:.5,fy:(ee[0]+ee[1]-ae-Ge/2)/tt,hs:Ge,D:0}}else{let ee=Q/tt,ae=(re.trustTop>0?re.trustTop:tt)-34,Ge=Math.min(tt*.8,ae-tt*.05,Q*.44*(11/7.6));ut={fx:ee>1.9?.62:.6,fy:(ae-Ge*.5)/tt,hs:Ge,D:0}}if(k.length){let[ee,ae,Ge]=k;ut={fx:ee,fy:ae,hs:Ge,D:0}}X=rt?-2:Math.min(Q*.5,780)/Q*2-1,q=2*(ut.hs/P.h)/Q;let Dt=Math.tan(Jr.degToRad(c.fov/2));ut.D=tt*P.h/(ut.hs*2*Dt),u.uRes.value.set(Q*o,tt*o),u.uDpr.value=o,ln.uniforms.uRes.value.set(Q*o,tt*o),ln.uniforms.uVigCenter.value.set(rt?.5:.6,rt?.62:.5),ln.uniforms.uVig.value=rt?.26:.34,zn=!0}function mt(rt){let Dt=x.az,ee=Jr.degToRad(11)+x.el,ae=ut.D*(1+.045*rt);Pt.set(P.cx,P.cy,0),c.position.set(Pt.x+Math.sin(Dt)*Math.cos(ee)*ae,Pt.y+Math.sin(ee)*ae,Math.cos(Dt)*Math.cos(ee)*ae),c.lookAt(Pt),c.near=ae*.5,c.far=ae*2.2,c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=-(2*ut.fx-1),c.projectionMatrix.elements[9]=-(1-2*ut.fy),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),c.updateMatrixWorld()}let yt=rt=>(ft.copy(rt).project(c),[(ft.x*.5+.5)*Q,(-ft.y*.5+.5)*tt]),oe=new Ke(2,2,{type:Nn,samples:4}),he=new oo(a,oe);he.addPass(new lo(l,c));let Ae=new yr(new Ct(256,256),.42,.62,.92);he.addPass(Ae);let ln=new xr(zv);he.addPass(ln);let Qt={period:5.6,grow:2.9,hang:.35,fallG:5.2,drag:1.6},zt={t:0,phase:.6,dropY:0,dropV:0,falling:!1,landed:!1,impactT:-99,cyc:0,intro:1},zn=!0,Pe=!1,cn=0,hn=0,ni=!1,vo=new U,ns=new URLSearchParams(location.search),Ls=ns.has("herophase")?+ns.get("herophase"):null,ii=ns.has("heroage")?+ns.get("heroage"):null,si=new U(Math.sin(.95)*1.62,2.7,Math.cos(.95)*1.62),is=new U(Math.sin(-.5)*1.625,1.12,Math.cos(-.5)*1.625),Le={bubble:new U(an+2.35,8.05,.2),tag:new U,glow:new U(an-.6,4.6,-1.5),spot:new U(an,5.6,-1.5),pool:new U(an-1.6,0,.4),tA:new U(an+10.5,8.4,-4),tB:new U(an+.5,4.7,-4),tAm:new U(an+10.5,5,-4),tBm:new U(an+.5,3.9,-4)};function ia(rt,Dt){zt.intro=n?0:Math.max(0,zt.intro-rt/2.6);let ee=Math.pow(zt.intro,3),ae=1-Math.exp(-rt/.9),Ge=z.active?z.target.x:.15*Math.sin(Dt*.13),yn=z.active?z.target.y:.1*Math.sin(Dt*.11+1);z.vel.set((Ge-z.ndc.x)/Math.max(rt,.001),(yn-z.ndc.y)/Math.max(rt,.001)).multiplyScalar(ae),z.ndc.x+=(Ge-z.ndc.x)*ae,z.ndc.y+=(yn-z.ndc.y)*ae,n||(x.az=-z.ndc.x*Jr.degToRad(2.4),x.el=z.ndc.y*Jr.degToRad(1.3)),mt(ee);let ri=n?0:Math.sin(Dt*Cs/7.5)*.07+Math.sin(Dt*Cs/11.3)*.03;pt.position.set(ta.x,ta.y+ri,ta.z),pt.rotation.z=-co+(n?0:Math.sin(Dt*Cs/9.1)*.012),pt.updateMatrixWorld(!0);let Rn=ot.localToWorld(B.copy(Zt));if(H.position.x=Rn.x+1.6+ri*.4,b.uAxis.value.set(-Math.sin(pt.rotation.z),Math.cos(pt.rotation.z),0),N.localToWorld(Le.tag.copy(si)),nt){let me=yt(Le.bubble),Se=re.discR+16;pe[0]=on(me[0]+24,Se,Q-Se),pe[1]=me[1]-6;let ue=yt(N.localToWorld(ct.copy(is))),_t=yt(ct.set(an,0,$r+1.62))[1]+16,Fe=on(ue[0]+22-re.tagW/2,16,Q-16-re.tagW);A[0]=ue[0],A[1]=ue[1],A[2]=Math.max(8,_t-ue[1]),A[3]=Fe-ue[0],D[0]=Fe,D[2]=Fe+re.tagW,D[1]=_t,D[3]=_t+re.tagH}else{let me=yt(Le.bubble),Se=re.discR+14;pe[0]=on(me[0],Se,Q-Se),pe[1]=me[1];let ue=yt(Le.tag);A[0]=ue[0],A[1]=ue[1],A[2]=0,A[3]=0,re.pin?(D[0]=re.pin[0],D[1]=re.pin[1],D[2]=re.pin[2],D[3]=re.pin[3]):(D[0]=ue[0]-8,D[2]=ue[0]+re.tagW,D[1]=ue[1]-re.tagH/2,D[3]=ue[1]+re.tagH/2)}let Mn=n?2.3:Ls!==null?Ls:(Dt+zt.phase)%Qt.period,Cn=Math.floor((Dt+zt.phase)/Qt.period),bn=.19*wt,yi=.046,Us=.004,Ee=.015,ai=.09;if(Vt.position.copy(Rn),Mn<Qt.grow+Qt.hang){zt.falling=!1,zt.landed=!1,zt.dropV=0;let me=Iv(on(Mn/Qt.grow,0,1)),Se=Mn>Qt.grow?Ve(Qt.grow,Qt.grow+Qt.hang,Mn):0,ue=yi+(bn-yi)*me,De=1.02+.3*me+.1*Se,_t=Us+Ee*me+ai*Se;dt(yi,ue,De,_t,Ve(.35,1,Se)),Vt.visible=!0,Z.visible=!1,zt.dropY=Rn.y-(_t+ue*.9)}else{let me=Mn-(Qt.grow+Qt.hang);if(dt(yi,yi+.034*Math.exp(-me*5),1.04,.004,0),Vt.visible=!0,!zt.falling&&!zt.landed&&(zt.falling=!0,zt.cyc=Cn,zt.x0=Rn.x,zt.z0=Rn.z,zt.y0=Rn.y-(Us+Ee+ai+bn*.9)),zt.falling){let Se=Qt.fallG/Qt.drag,ue=Math.exp(-Qt.drag*me);zt.dropV=Se*(1-ue),zt.dropY=zt.y0-Se*(me-(1-ue)/Qt.drag);let De=1+on(zt.dropV/2.4,0,1)*.18,_t=1+.42*Math.exp(-me*7);Z.scale.set(bn/Math.sqrt(De*_t),bn*De*_t,bn/Math.sqrt(De*_t)),Z.position.set(zt.x0,zt.dropY,zt.z0),Z.visible=!0,L.uniforms.uFade.value=1;let Fe=it+.01;if(zt.dropY-bn*De<Fe+.02){let un=on((Fe+.02-(zt.dropY-bn*De))/(bn*2.2),0,1);Z.scale.set(bn*(1+.9*un),bn*De*(1-un*.75),bn*(1+.9*un)),Z.position.y=Math.max(zt.dropY,Fe+bn*De*(1-un)*.5),L.uniforms.uFade.value=1-Ve(.25,.95,un),(zt.impactT<0||zt.impactCyc!==zt.cyc)&&(zt.impactT=Dt,zt.impactCyc=zt.cyc,It.uImpact.value.set((zt.x0-st.position.x)/xt,(zt.z0-st.position.z)/xt)),un>=1&&(zt.falling=!1,zt.landed=!0,Z.visible=!1)}}else Z.visible=!1}It.uAge.value=n?99:ii!==null?ii:Dt-zt.impactT;{Y.setFromCamera(z.ndc,c);let me=Gt(),Se=yt(me?Le.tAm:Le.tA),ue=yt(me?Le.tBm:Le.tB);for(let De=0;De<ie;De++){let _t=kn[De];_t.r=_t.r0*(me?1.45:1);let Fe=1.25,un=.16+.22*_t.r,Tr=Math.sin(Dt*.21+_t.phase)*.06+Math.sin(Dt*.47+_t.phase*1.7)*.03,_r=Math.cos(Dt*.17+_t.phase*.7)*.03,Rr=Tr,os=Fe*un,Cr=_r;if(z.active&&!me&&!n){Y.ray.closestPointToPoint(_t.p,ct);let bi=_t.p.x-ct.x,Ze=_t.p.y-ct.y,_e=_t.p.z-ct.z,ve=Math.hypot(bi,Ze,_e),tn=1.9+_t.r;if(ve<tn){let zi=Math.pow(1-ve/tn,2)*3.4/Math.max(ve,.05);Rr+=bi*zi,os+=Ze*zi,Cr+=_e*zi*.3,Rr+=z.vel.x*2.6*(1-ve/tn),os+=z.vel.y*2*(1-ve/tn)}}n||(_t.v.x+=(Rr-Fe*_t.v.x)*rt,_t.v.y+=(os-Fe*_t.v.y)*rt,_t.v.z+=(Cr-Fe*_t.v.z)*rt,_t.p.addScaledVector(_t.v,rt));let Mi=(bi,Ze,_e,ve,tn,zi,Si)=>{let Vi=ve-bi,Hi=tn-Ze,xe=zi-_e,We=on(((_t.p.x-bi)*Vi+(_t.p.y-Ze)*Hi+(_t.p.z-_e)*xe)/(Vi*Vi+Hi*Hi+xe*xe),0,1),dn=bi+Vi*We,qe=Ze+Hi*We,Bn=_e+xe*We,Sn=_t.p.x-dn,Be=_t.p.y-qe,wn=_t.p.z-Bn,Gn=Math.hypot(Sn,Be,wn)||1e-4,In=Si+_t.r;if(Gn<In){Sn/=Gn,Be/=Gn,wn/=Gn,_t.p.set(dn+Sn*In,qe+Be*In,Bn+wn*In);let wi=_t.v.x*Sn+_t.v.y*Be+_t.v.z*wn;wi<0&&(_t.v.x-=wi*Sn,_t.v.y-=wi*Be,_t.v.z-=wi*wn)}},$e=1;{ft.copy(_t.p).applyMatrix4(c.matrixWorldInverse);let bi=c.projectionMatrix.elements[5]*tt*.5/Math.max(-ft.z,.1);ft.copy(_t.p).project(c);let Ze=(ft.x*.5+.5)*Q,_e=(-ft.y*.5+.5)*tt,ve=_t.r*bi,tn=26,zi=Math.min(1,rt*3)/bi,Si=(xe,We,dn)=>{_t.p.x+=xe*dn*zi,_t.p.y-=We*dn*zi;let qe=_t.v.x*xe-_t.v.y*We;qe<0&&(_t.v.x-=qe*xe,_t.v.y+=qe*We)};if(re.discR>0){let xe=Ze-pe[0],We=_e-pe[1],dn=Math.hypot(xe,We)||.001,qe=dn-ve-re.discR;qe<tn&&Si(xe/dn,We/dn,tn-qe),$e=Math.min($e,Ve(2,tn,qe))}if(re.tagW>0){let We=D[0]-28,dn=D[2]+28,qe=D[1]-28,Bn=D[3]+28,Sn=on(Ze,We,dn),Be=on(_e,qe,Bn),wn=Ze-Sn,Gn=_e-Be,In=Math.hypot(wn,Gn),wi=In-ve;if(In<.001){let Wc=_e-qe,qc=Bn-_e;wn=0,Gn=Wc<qc?-1:1,In=1,wi=-Math.min(Wc,qc)-ve}wi<tn&&Si(wn/In,Gn/In,tn-wi),$e=Math.min($e,Ve(2,tn,wi))}for(let xe of re.blocks){let dn=on(Ze,xe[0]-18,xe[2]+18),qe=on(_e,xe[1]-18,xe[3]+18),Bn=Ze-dn,Sn=_e-qe,Be=Math.hypot(Bn,Sn),wn=Be-ve;if(Be<.001){let Gn=_e-xe[1]+18,In=xe[3]+18-_e;Bn=0,Sn=Gn<In?-1:1,Be=1,wn=-Math.min(Gn,In)-ve}wn<tn&&Si(Bn/Be,Sn/Be,(tn-wn)*.5),$e=Math.min($e,Ve(2,tn,wn))}{let xe=ue[0]-Se[0],We=ue[1]-Se[1],dn=xe*xe+We*We||1,qe=on(((Ze-Se[0])*xe+(_e-Se[1])*We)/dn,0,1),Bn=Ze-(Se[0]+xe*qe),Sn=_e-(Se[1]+We*qe),Be=Math.hypot(Bn,Sn)||.001;Be<ve+12&&Si(Bn/Be,Sn/Be,ve+12-Be),$e=Math.min($e,Ve(ve,ve+20,Be))}if(me&&De===2&&($e=0),me)re.spot&&($e=Math.min($e,Ve(0,24,_e-ve-re.spot[0]+6),Ve(0,24,re.spot[0]+re.spot[1]-(_e+ve))));else{let xe=Ze-ve-(X*.5+.5)*Q;xe<0&&Si(1,0,-xe),$e=Math.min($e,Ve(0,48,xe))}let Vi=Q-Ze-ve,Hi=Ze-ve;Vi<24&&Si(-1,0,24-Vi),Hi<24&&Si(1,0,24-Hi),$e=Math.min($e,Ve(0,80,_e-ve),Ve(ve*.5,ve+48,Vi),Ve(ve*.5,ve+48,Hi)),_e+ve<0&&(_t.p.y=He.y1+1)}let Gc=_t.p.z;Mi(an,-.5,Gc,an,7.3,Gc,1.85);let Hn=ta,sa=Math.sin(co),xo=Math.cos(co),Ns=_t.p.z;Mi(Hn.x,Hn.y,Ns,Hn.x+4.1*sa,Hn.y+4.1*xo,Ns,1.35),Mi(Hn.x,Hn.y,Ns,Hn.x-vn*sa,Hn.y-vn*xo,Ns,.5),Mi(Hn.x-vn*sa,-.5,Ns,Hn.x-vn*sa,Hn.y-vn*xo,Ns,.6);let yo=Ve(0,2.4,Dt-_t.born)*(1-Ve(He.y1-2.4,He.y1,_t.p.y))*$e;_t.a=n||yo<_t.a?yo:_t.a+(yo-_t.a)*Math.min(1,rt*3),Bi[De]=_t.a,(_t.p.y>He.y1||_t.p.x<He.x0-2||_t.p.x>He.x1+2)&&br(_t,Dt)}for(let De=0;De<ie;De++)for(let _t=De+1;_t<ie;_t++){let Fe=kn[De],un=kn[_t],Tr=un.p.x-Fe.p.x,_r=un.p.y-Fe.p.y,Rr=(un.p.z-Fe.p.z)*.35,os=Math.hypot(Tr,_r,Rr)||1e-4,Cr=(Fe.r+un.r)*1.6+.25;if(os<Cr){let Mi=(Cr-os)/os*Math.min(1,rt*2);Fe.p.x-=Tr*Mi*.5,Fe.p.y-=_r*Mi*.5,un.p.x+=Tr*Mi*.5,un.p.y+=_r*Mi*.5}}Kt.attributes.iAlpha.needsUpdate=!0}let oi=new Me;for(let me=0;me<ie;me++){let Se=kn[me],ue=Se.r*(.85+.15*Se.a);oi.makeScale(ue,ue,ue).setPosition(Se.p),ti.setMatrixAt(me,oi)}ti.instanceMatrix.needsUpdate=!0;let li=yt(Le.glow);u.uGlow.value.set(li[0]*o,(tt-li[1])*o);let rs=yt(ct.set(Le.glow.x,Le.glow.y+1,Le.glow.z)),Vn=Math.abs(rs[1]-li[1]);u.uGlowR.value=Vn*6.2*o;let ki=yt(Le.spot);u.uSpot.value.set(ki[0]*o,(tt-ki[1])*o),u.uSpotR.value.set(Vn*1.35*o,Vn*1*o);let Ar=yt(Le.pool);u.uPool.value.set(Ar[0]*o,(tt-Ar[1])*o),u.uPoolR.value.set(Vn*7.5*o,Vn*1.9*o);let as=yt(Gt()?Le.tAm:Le.tA),Er=yt(Gt()?Le.tBm:Le.tB);u.uTA.value.set(as[0]*o,(tt-as[1])*o),u.uTB.value.set(Er[0]*o,(tt-Er[1])*o),ln.uniforms.uTime.value=Dt,M.material.opacity=.26+.04*Math.sin(Dt*.7),s&&s({bubble:pe,tag:A,mobile:nt,ppu:Vn,W:Q,H:tt})}let Sr=0,xi=0,ss=0;function wr(rt){cn=Pe?requestAnimationFrame(wr):0;let Dt=rt/1e3,ee=hn?Math.min(.05,Dt-hn):1/60;if(hn=Dt,ia(ee,Dt),he.render(ee),ni||(ni=!0,r&&r()),ss++,ss>120&&(Sr+=ee,xi++,xi===90)){let ae=Sr/xi;Sr=0,xi=0,ae>.026&&o>1&&(o=Math.max(1,o-.25),At())}}function Ds(){let rt=performance.now()/1e3;ia(1/60,rt),he.render(1/60),ni||(ni=!0,r&&r())}return At(),{start(){if(!Pe){if(n){Ds();return}Pe=!0,hn=0,cn=requestAnimationFrame(wr)}},stop(){Pe=!1,cancelAnimationFrame(cn),cn=0},resize(){At(),Pe||Ds()},pointer(rt,Dt,ee){z.target.set(rt,Dt),z.active=ee},setOverlays(rt){let Dt=JSON.stringify([re.spot,Math.round(re.trustTop)]);Object.assign(re,rt),JSON.stringify([re.spot,Math.round(re.trustTop)])!==Dt&&(At(),Pe||Ds())},get dirty(){return zn},dispose(){this.stop(),a.dispose()}}}function Vv(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function Tc(i,t){let e=i.querySelector(".hero-canvas"),n=i.querySelector(".hero-stage"),s=i.querySelector(".hero-bubble"),r=i.querySelector(".hero-tag"),a=i.querySelector(".hero-tag__card"),o=i.querySelector("[data-hero-add]"),l=t.byId["skin-oil"];if(l){let R=i.querySelector("[data-hero-price]");R&&(R.textContent=t.fmt.kr(l.price));let E=i.querySelector("[data-hero-was]");E&&(E.textContent=t.fmt.kr(l.price0));let C=i.querySelector(".hero-bubble__pct");C&&(C.textContent=`\u2212${l.pct}%`);let L=i.querySelector("[data-hero-save]");L&&(L.textContent=`Spar ${t.fmt.kr(l.save)}`)}{let R=i.querySelector("[data-hero-pct]");R&&t.campaign&&(R.textContent=String(t.campaign.headlinePct))}let c=0;o&&o.addEventListener("click",()=>{t.store.add("skin-oil",1),o.classList.add("is-added"),o.setAttribute("aria-label","Vidunder Olien er lagt i kurven"),clearTimeout(c),c=setTimeout(()=>{o.classList.remove("is-added"),o.setAttribute("aria-label","L\xE6g Vidunder Olien i kurv")},2200)}),requestAnimationFrame(()=>i.classList.add("is-ready"));let d=i.querySelector(".hero-spot"),u=()=>{i.classList.add("is-static");let R=()=>{i.style.setProperty("--spot-top",`${d.getBoundingClientRect().top-i.getBoundingClientRect().top}px`)};R(),new ResizeObserver(R).observe(i);let E=i.querySelector(".hero-fallback");E&&E.dataset.src&&!E.src&&(E.src=E.dataset.src)};if(!Vv()||/[?&]hero=static\b/.test(location.search)){u();return}let f=null,p=!1,v=i.querySelector(".hero-copy"),g=matchMedia("(min-width: 761px) and (max-width: 1100px) and (min-aspect-ratio: 10001/10000)"),m=matchMedia("(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)"),h=i.querySelector(".hero-trust"),b=[".hero-eyebrow",".hero-title",".hero-offer",".hero-ctas",".hero-facts",".hero-trust"].map(R=>i.querySelector(R)),T=()=>{if(!f)return;let R=n.getBoundingClientRect(),E=v.getBoundingClientRect(),C=m.matches,L=N=>[N.left-R.left,N.top-R.top,N.right-R.left,N.bottom-R.top],w=b.filter(Boolean).map(N=>{let V=N.getBoundingClientRect();if(N===h)return L(V);let J=V.left;for(let G of N.children)J=Math.max(J,G.getBoundingClientRect().right);if(!N.children.length||N.classList.contains("hero-title")){let G=document.createRange();G.selectNodeContents(N),J=Math.max(J,G.getBoundingClientRect().right)}return L({left:V.left,top:V.top,right:Math.max(J,V.left+10),bottom:V.bottom})}),S=d.getBoundingClientRect(),I=C?a:r,W=null;if(g.matches){let N=a.getBoundingClientRect();W=[N.left-R.left,N.top-R.top,N.right-R.left,N.bottom-R.top]}f.setOverlays({discR:s.firstElementChild.offsetWidth/2,tagW:I.offsetWidth,tagH:I.offsetHeight,pin:W,copyTop:E.top-R.top,blocks:w,spot:C?[S.top-R.top,S.height]:null,trustTop:h.getBoundingClientRect().top-R.top})},y=({bubble:R,tag:E,mobile:C})=>{s.style.transform=`translate3d(${R[0].toFixed(1)}px, ${R[1].toFixed(1)}px, 0)`,g.matches?r.style.transform="":C?(r.style.transform=`translate3d(${E[0].toFixed(1)}px, ${E[1].toFixed(1)}px, 0)`,r.style.setProperty("--lead-h",`${E[2].toFixed(1)}px`),r.style.setProperty("--card-x",`${E[3].toFixed(1)}px`)):r.style.transform=`translate3d(${E[0].toFixed(1)}px, ${E[1].toFixed(1)}px, 0) translateY(-50%)`,p||(p=!0,i.classList.add("is-tracked"))};Fu({canvas:e,host:n,asset:t.asset,reduced:t.prefersReducedMotion,onFrame:y,onFirstFrame:()=>requestAnimationFrame(()=>i.classList.add("is-live"))}).then(R=>{f=R,T(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(T);let E=!0,C=()=>{E&&!document.hidden?R.start():R.stop()};jc(i,w=>{E=w,C()}),document.addEventListener("visibilitychange",C),C();let L=0;if(new ResizeObserver(()=>{cancelAnimationFrame(L),L=requestAnimationFrame(()=>{T(),R.resize()})}).observe(n),matchMedia("(pointer: fine)").matches){let w=!1;r.addEventListener("pointerenter",()=>{w=!0}),r.addEventListener("pointerleave",()=>{w=!1}),i.addEventListener("pointermove",S=>{if(w)return;let I=n.getBoundingClientRect();R.pointer((S.clientX-I.left)/I.width*2-1,-((S.clientY-I.top)/I.height*2-1),!0)},{passive:!0}),i.addEventListener("pointerleave",()=>R.pointer(0,0,!1))}e.addEventListener("webglcontextlost",w=>{w.preventDefault(),R.stop(),u()})}).catch(R=>{console.warn("[hero] WebGL scene unavailable, using still",R),u()})}function _c(i,t){let e=new URLSearchParams(location.search),n=t.prefersReducedMotion,s=[];return s.push(Hv(i,t,e,n)),Gv(i,t),s.push(Wv(i,t,e,n)),s.push(qv(i,n)),s.push(Xv(i,n)),s.push(Yv(i,n)),()=>s.forEach(r=>r&&r())}function Hv(i,t,e,n){let s=i.querySelector(".offers-clock");if(!s)return null;let r=0,a=e.get("offers-now");if(a){let I=Date.parse(a);Number.isNaN(I)||(r=I-t.clock.now())}let o=()=>t.clock.now()+r,l=t.clock.end,c=t.clock.start,d=s.querySelector("[data-clock-label]"),u=s.querySelector("[data-clock-done]"),f=s.querySelector("[data-clock-sr]"),p=i.querySelector(".offers-title"),v=p?p.innerHTML:"",g=["d","h","m"].map(I=>{let W=s.querySelector(`[data-unit="${I}"]`),N=[...W.querySelectorAll(".offers-dg")].map(V=>{let J=V.textContent.trim();V.textContent="";let G=document.createElement("span");G.className="offers-dg__ghost",G.textContent="0";let at=document.createElement("span");return at.className="offers-dg__v",at.textContent=J,V.append(G,at),{el:V,v:J,cur:at}});return{el:W,dgs:N,lbl:W.querySelector("[data-lbl]")}}),m="cubic-bezier(.65,0,.3,1)",h=620;function b(I,W,N){if(I.v===W)return;if(I.v=W,!N||n||!I.el.animate||document.hidden){I.el.querySelectorAll(".offers-dg__v").forEach(G=>G!==I.cur&&G.remove()),I.cur.getAnimations?.().forEach(G=>G.cancel()),I.cur.textContent=W;return}let V=I.cur,J=document.createElement("span");J.className="offers-dg__v",J.textContent=W,I.el.append(J),I.cur=J,V.animate([{transform:"translateY(0)"},{transform:"translateY(100%)"}],{duration:h,easing:m,fill:"forwards"}).onfinish=()=>V.remove(),J.animate([{transform:"translateY(-100%)"},{transform:"translateY(0)"}],{duration:h,easing:m,fill:"backwards"})}let T="",y=-1;function R(I){let W=o(),N=W<c?"pre":W>=l?"ended":l-W<=864e5?"last":"live";if(N!==T&&(s.dataset.state=N,T=N,d.textContent=N==="pre"?"Black Week begynder om":N==="ended"?"Black Week er slut":N==="last"?"Sidste dag \u2013 slutter om":"Black Week slutter om",u&&(u.hidden=N!=="ended"),i.dataset.campaign=N,p&&(p.innerHTML=N==="ended"?"Tak for denne gang.":v)),N==="ended"){f&&(f.textContent="Black Week er slut.");return}let J=Math.max(0,Math.floor(((N==="pre"?c:l)-W)/6e4)),G=[Math.floor(J/1440),Math.floor(J/60)%24,J%60];if(G.forEach((at,K)=>{let ot=String(Math.min(at,99)).padStart(2,"0");g[K].dgs.forEach((pt,Lt)=>b(pt,ot[Lt],I))}),g[0].dgs[0].el.toggleAttribute("data-off",G[0]<10),g[0].el.hidden=G[0]===0,g[0].lbl&&(g[0].lbl.textContent=G[0]===1?"dag":"dage"),g[1].lbl&&(g[1].lbl.textContent=G[1]===1?"time":"timer"),g[2].lbl&&(g[2].lbl.textContent=G[2]===1?"minut":"minutter"),f&&J!==y){y=J;let[at,K,ot]=G;f.textContent=`${N==="pre"?"Black Week begynder om":"Black Week slutter om"} ${at} ${at===1?"dag":"dage"}, ${K} ${K===1?"time":"timer"} og ${ot} ${ot===1?"minut":"minutter"} \u2013 mandag 30. november kl. 23.59.`}}R(!1);let E=0,C=!0,L=()=>{if(clearTimeout(E),!C||document.hidden)return;let I=6e4-(o()%6e4+6e4)%6e4+20;E=setTimeout(()=>{R(!0),L()},Math.min(I,60020))},w=new IntersectionObserver(I=>{let W=I[I.length-1].isIntersecting;W&&!C&&R(!1),C=W,L()});w.observe(s);let S=()=>{document.hidden||R(!1),L()};return document.addEventListener("visibilitychange",S),L(),()=>{clearTimeout(E),w.disconnect(),document.removeEventListener("visibilitychange",S)}}function Gv(i,t){let e=i.querySelector("[data-add]");if(!e)return;let n=i.querySelector("[data-add-status]"),s=t.byId[e.dataset.add];if(!s){e.disabled=!0;return}let r=d=>d.replace(" kr.","\xA0kr."),a=(d,u)=>{let f=i.querySelector(d);f&&(f.textContent=u)},o=i.querySelector("[data-kp-price]");o&&o.firstChild&&(o.firstChild.textContent=t.fmt.kr(s.price).replace(" kr.","")),a("[data-kp-before]",r(t.fmt.kr(s.price0)));let l=(s.contains||[]).reduce((d,u)=>d+(t.byId[u]?.price||0),0);l&&a("[data-kp-loose]",r(t.fmt.kr(l)));let c=0;e.addEventListener("click",()=>{t.store.add(s.id,1),e.classList.add("is-added"),n&&(n.textContent="",requestAnimationFrame(()=>{n.textContent=`${s.name} er lagt i kurven.`})),clearTimeout(c),c=setTimeout(()=>e.classList.remove("is-added"),2600)})}function Wv(i,t,e,n){let s=i.querySelector("[data-gift]");if(!s)return null;let{giftThreshold:r,freeShipping:a}=t.campaign,o=t.fmt.kr,l=0,c=w=>w.replace(" kr.","\xA0kr.");s.querySelectorAll("[data-ex]").forEach(w=>{let S=t.byId[w.dataset.ex];S&&(w.textContent=String(S.price),l+=S.price)});let d=s.querySelector("[data-ex-sum]");d&&l&&(d.textContent=c(o(l)));let u=s.querySelector("[data-live-sum]"),f=s.querySelector("[data-live-next]"),p=s.querySelector("[data-meter]"),v=s.querySelector("[data-tick]"),g=s.querySelector("[data-gift-status]");v&&(v.style.left=a/r*100+"%");let m=0,h=0,b=0,T=0,y=w=>{p&&(p.style.transform=`scaleX(${w})`)};function R(w){let S=Math.min(.05,(w-(T||w))/1e3);T=w,m+=(h-m)*(1-Math.exp(-S*3)),Math.abs(h-m)<.001&&(m=h),y(m),m!==h?b=requestAnimationFrame(R):(b=0,T=0)}function E(){let w=t.store.subtotal(),S=w>=r?2:w>=a?1:0;s.classList.toggle("has-cart",w>0),s.dataset.level=S,w>0&&(u.textContent=`Din kurv ${o(w)}`,f.textContent=S===2?"Fri fragt og Lip Balm er med":S===1?`Fri fragt \xB7 ${o(r-w)} til Lip Balm`:`${o(a-w)} til fri fragt`),h=Math.min(1,w/r),n?(m=h,y(m)):b||(b=requestAnimationFrame(R)),g&&(g.textContent=w===0?"":S===2?`Din kurv er p\xE5 ${o(w)} \u2013 fri fragt og en gratis CBD Lip Balm f\xF8lger med`:S===1?`Din kurv er p\xE5 ${o(w)} \u2013 fri fragt er med, og ${o(r-w)} mere giver gaven`:`Din kurv er p\xE5 ${o(w)} \u2013 ${o(a-w)} mere giver fri fragt`)}let C=t.store.on(w=>{(w==="cart:add"||w==="cart:change")&&E()});y(0),E();let L=e.get("offers-cart");return L&&setTimeout(()=>L.split(",").forEach(w=>t.byId[w]&&t.store.add(w,1)),+(e.get("offers-cart-delay")||600)),()=>{cancelAnimationFrame(b),typeof C=="function"&&C()}}function qv(i,t){let e=i.querySelector("[data-rail]"),n=[...i.querySelectorAll(".offers-tile")],s=[...i.querySelectorAll("[data-dot]")];if(!e||!s.length)return null;let r=l=>s.find(c=>+c.dataset.dot===n.indexOf(l)),a=l=>s.forEach(c=>c.setAttribute("aria-current",c===l?"true":"false")),o=new IntersectionObserver(l=>{let c=null;l.forEach(d=>{d.isIntersecting&&(!c||d.intersectionRatio>c.intersectionRatio)&&(c=d)}),c&&c.intersectionRatio>.6&&a(r(c.target))},{root:e,threshold:[.6,.8,1]});return n.forEach(l=>o.observe(l)),s.forEach(l=>l.addEventListener("click",()=>{let c=n[+l.dataset.dot],d=parseFloat(getComputedStyle(e).scrollPaddingInlineStart)||0;e.scrollTo({left:c.offsetLeft-d,behavior:t?"auto":"smooth"}),a(l)})),()=>o.disconnect()}function Xv(i,t){if(t||!("IntersectionObserver"in window))return null;let e=[...i.querySelectorAll(".offers-tile")],n=a=>requestAnimationFrame(()=>requestAnimationFrame(()=>a.classList.add("is-settled")));e.forEach(a=>a.classList.add("is-settling"));let s=new IntersectionObserver(a=>a.forEach(o=>{o.isIntersecting&&(s.unobserve(o.target),n(o.target))}),{threshold:0});e.forEach(a=>s.observe(a));let r=setTimeout(()=>e.forEach(a=>a.classList.add("is-settled")),6e3);return()=>{s.disconnect(),clearTimeout(r),e.forEach(a=>a.classList.remove("is-settling","is-settled"))}}function Yv(i,t){let e=i.querySelector(".offers-tile--hero"),n=i.querySelector(".offers-glow");if(!e||!n||t||!matchMedia("(hover: hover) and (pointer: fine)").matches)return null;let s={x:50,y:26},r=s.x,a=s.y,o=r,l=a,c=0,d=0,u=g=>{let m=Math.min(.05,(g-(d||g))/1e3);d=g;let h=1-Math.exp(-m*2.4);r+=(o-r)*h,a+=(l-a)*h,n.style.setProperty("--lx",r.toFixed(2)+"%"),n.style.setProperty("--ly",a.toFixed(2)+"%"),Math.abs(o-r)+Math.abs(l-a)>.05?c=requestAnimationFrame(u):(c=0,d=0)},f=()=>{c||(c=requestAnimationFrame(u))},p=g=>{let m=n.getBoundingClientRect();o=Math.max(10,Math.min(90,(g.clientX-m.left)/m.width*100)),l=Math.max(8,Math.min(70,(g.clientY-m.top)/m.height*100)),f()},v=()=>{o=s.x,l=s.y,f()};return e.addEventListener("pointermove",p),e.addEventListener("pointerleave",v),()=>{cancelAnimationFrame(c),e.removeEventListener("pointermove",p),e.removeEventListener("pointerleave",v)}}var Qv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function uo(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",Qv)}function Rc(){uo()}var Bu="data:image/webp;base64,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";var Ou={"cleansing-gel":{url:"data:image/webp;base64,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",w:229,h:674},"day-cream":{url:"data:image/webp;base64,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",w:166,h:760},"night-cream":{url:"data:image/webp;base64,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",w:167,h:759},"skin-oil":{url:"data:image/webp;base64,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",w:157,h:498}};var fo={"skin-oil":{url:Bu,box:[1e3,1e3,232,100,769,960],h:.635,cyl:[23,47.5]},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,700,1107],h:.635,cyl:[13,43.5]},"day-cream":{src:"products/day-cream.webp",box:[1200,1200,345,97,864,1152],h:.86,cyl:[28.5,47.5]},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,862,1153],h:.86,cyl:[28.5,47.5]},"cleansing-gel":{src:"products/cleansing-gel-box.webp",box:[1200,1200,223,64,933,1113],h:.825,cyl:[18.5,45.5]},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1138],h:.92,cyl:[22,76]},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,65,764,1148],h:1,cyl:[36,65]}},Ic={"cleansing-gel":.748,"day-cream":.841,"night-cream":.841,"skin-oil":.553},ea=Object.fromEntries(Object.entries(Ou).map(([i,t])=>[i,{url:t.url,box:[t.w,t.h,0,0,t.w,t.h],h:Ic[i],cyl:[0,100]}])),ku=.12,Zv=.96,Kv=["komplet-pakken","skin-oil","serum","day-cream","night-cream","all-day-facial","cleansing-gel","body-lotion","shampoo"],Jv={"skin-oil":"face",serum:"face","day-cream":"face","night-cream":"face","cleansing-gel":"face","body-lotion":"body",shampoo:"body"},zu=i=>i.bundle?"sets":Jv[i.id]||"face",Vu={"cleansing-gel":"Rens","day-cream":"Dag","night-cream":"Nat","skin-oil":"Olie"},jv="https://naturecell.dk",$v={"skin-oil":"/products/cbd-olie-1000mg",serum:"/products/naturecell-cbd-hyaluronic-serum","day-cream":"/products/dagcreme","night-cream":"/products/natcreme","cleansing-gel":"/products/rensegel","body-lotion":"/products/bodylotion",shampoo:"/products/shampoo-300ml","komplet-pakken":"/products/hudpleje-startpakke-plus-1","all-day-facial":"/products/ansigtpleje-serie"},Cc=i=>jv+($v[i.id]||(i.handle?`/products/${i.handle}`:"/collections/cbd-hudpleje")),Gu={"body-lotion":"Krop",shampoo:"H\xE5r"},Hu=i=>i.nickname||Gu[i.id]||"Ansigt",tx={"skin-oil":"1000 mg CBD. Bl\xF8d, velplejet hud \u2013 til alle hudtyper.",serum:"Fugtboost med hyaluronsyre og CBD.","day-cream":"Let dagcreme med aloe vera og shea.","night-cream":"N\xE6rende natcreme med mandelolie.","cleansing-gel":"Mild rens, der bevarer fugtbalancen.","body-lotion":"Intensiv fugtighed til t\xF8r hud.",shampoo:"Mild shampoo til hele familien."},Fn={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',plus:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5v11M6.5 12h11"/></svg>',tick:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12.4 3.9 3.9L18 8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',pil:'<svg class="deals-pil" viewBox="14.5 17 31 31" aria-hidden="true"><path d="M31.63,46.75l12.34-7.13-12.55-6.76.05,3.58c-3.88-.64-12.57-3.63-15.45-17.47,0,0,0,19.64,15.54,23.44l.06,4.33Z"/></svg>',gift:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.75 9.25h14.5v3.5H4.75z"/><path d="M6 12.75v7h12v-7M12 9.25v10.5"/><path d="M12 9.25c-1.4-3.3-5.2-3.9-5.2-1.6 0 1.2 1.6 1.6 5.2 1.6zM12 9.25c1.4-3.3 5.2-3.9 5.2-1.6 0 1.2-1.6 1.6-5.2 1.6z"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>'},Ce=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Is=(i,t,e)=>Math.max(t,Math.min(e,i));function Pc(i,t){let{fmt:e,store:n}=t,s=x=>e.kr(x).replace(/ (?=kr\.)/,"\xA0"),r=(x,P=i)=>P.querySelector(x),a=(x,P=i)=>[...P.querySelectorAll(x)],o=t.prefersReducedMotion,l=matchMedia("(hover: hover) and (pointer: fine)").matches,c="cubic-bezier(.16, 1, .3, 1)",d=+((location.search.match(/[?&]dealsSlow=(\d+)/)||[])[1]||1),u=matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0&&t.isMobile();i.classList.toggle("deals-touch",u);let f=r("[data-deals-grid]"),p=r("[data-deals-live]"),v=Kv.map(x=>t.byId[x]).filter(x=>x&&!x.gift&&(fo[x.id]||x.bundle));t.products.forEach(x=>{!x.gift&&x.img&&!v.includes(x)&&!/drops|lubricant/.test(x.img)&&v.push(x)});let g=(x,P)=>x&&x.url?x.url:t.asset(x?x.src:P.img),m=x=>(x.box[4]-x.box[2])/(x.box[5]-x.box[3])*x.h;function h(x,P,k,X="",q=0,ht=1){let[Q,tt,ut,Pt,At,mt]=x.box,yt=At-ut,oe=mt-Pt,he=`width:${(Q/yt*100).toFixed(3)}%;left:${(-ut/yt*100).toFixed(3)}%;top:${(-Pt/oe*100).toFixed(3)}%`,Ae=yt/Q,ln=m(x);return`<div class="deals-prod" style="--ar:${(yt/oe).toFixed(4)};--ph:${x.h.toFixed(4)};--gx0:${(ut/Q*100).toFixed(3)}%;--gw:${Ae.toFixed(4)};--bk:${(Ae/ln).toFixed(4)};--px0:${q.toFixed(4)};--pw:${ht.toFixed(4)};--cy0:${(x.cyl||[0,100])[0]}%;--cy1:${(x.cyl||[0,100])[1]}%;--cyw:${(((x.cyl||[0,100])[1]-(x.cyl||[0,100])[0])/100).toFixed(4)}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack" style="--m:url('${P}')"><img src="${P}" alt="${Ce(k)}" width="${Q}" height="${tt}" draggable="false" style="${he}"><span class="deals-gloss deals-gloss--plane" aria-hidden="true" style="${he};aspect-ratio:${Q}/${tt}"></span><span class="deals-gloss deals-gloss--sheen" aria-hidden="true" style="${he};aspect-ratio:${Q}/${tt}"></span><span class="deals-gloss deals-gloss--glint" aria-hidden="true" style="${he};aspect-ratio:${Q}/${tt}"></span></span>
      ${X}
    </div>`}let b=x=>x.reduce((P,k)=>P+m(k),0)+ku*(x.length-1);function T(x){if(x.bundle){let k=(x.contains||[]).filter(Q=>ea[Q]),X=k.map(Q=>ea[Q]),q=b(X),ht=0;return`<div class="deals-line deals-line--set" style="--lw:${q.toFixed(4)};--n:${k.length}" role="img" aria-label="${Ce(x.name)}: ${k.map(Q=>Ce(t.byId[Q]?.name||Q)).join(", ")}">
        ${k.map((Q,tt)=>{let ut=m(ea[Q]),Pt=h(ea[Q],ea[Q].url,"",`<span class="deals-prod__lbl" aria-hidden="true"><span class="deals-no">${tt+1}</span>${Vu[Q]||""}</span>`,ht/q,ut/q);return ht+=ut+ku,Pt}).join("")}
      </div>`}let P=fo[x.id]||{src:x.img,box:[1e3,1e3,0,0,1e3,1e3],h:.8};return`<div class="deals-line" style="--lw:${b([P]).toFixed(4)}">${h(P,g(P,x),`${x.name}${x.size?", "+x.size:""}`)}</div>`}let y=(x,P=!1)=>`
    <div class="deals-price${P?" deals-price--big":""}">
      <p class="deals-price__line"><span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${s(x.price)}</span>
        <span class="deals-price__was">F\xF8rpris <s>${s(x.price0)}</s></span></p>
      <p class="deals-price__save">Spar ${s(x.save)}</p>
    </div>`,R=(x,P="")=>`
    <button class="nc-btn deals-add${x.bundle?"":" deals-add--ghost"}${P}" type="button" data-add="${x.id}">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a">${Fn.bag}<span>L\xE6g i kurv</span><span class="nc-sr"> \u2013 ${Ce(x.name)}</span></span>
      <span class="deals-add__b" aria-hidden="true">${Fn.check}<span>Lagt i kurv</span></span>
    </button>`,E=x=>[x.size,x.strength].filter(Boolean).join(" \xB7 "),C=x=>(x.contains||[]).map(P=>t.byId[P]).filter(Boolean),L=x=>C(x).reduce((P,k)=>P+k.price,0),w=x=>L(x)-x.price,S=x=>e.kr(x).replace(/\s*kr\.$/,""),I=x=>{let P=C(x);return P.length?`<div class="deals-set__contents">
      <p class="deals-set__cap"><span>Indhold</span><span>F\xF8rpris</span></p>
      <dl class="deals-set__list">
        ${P.map((k,X)=>`<div class="deals-set__row"><dt><span class="deals-no" aria-hidden="true">${X+1}</span>${Ce(k.name)}</dt><dd>${s(k.price0)}</dd></div>`).join("")}
        <div class="deals-set__row deals-set__row--sum0"><dt>Samlet f\xF8rpris enkeltvis</dt><dd>${s(P.reduce((k,X)=>k+X.price0,0))}</dd></div>
        <div class="deals-set__row deals-set__row--sum"><dt>Enkeltvis i Black Week</dt><dd>${s(L(x))}</dd></div>
      </dl>
    </div>`:""},W=x=>{let P=C(x);if(!P.length)return"";let k=P.reduce((X,q)=>X+q.price0,0);return`<div class="deals-set__sum">
      <p class="deals-set__cap">F\xF8rpris pr. produkt</p>
      <p class="deals-set__eq"><span class="nc-sr">${P.map(X=>`${Ce(X.name)} ${s(X.price0)}`).join(", ")}</span><span class="deals-set__eqv" aria-hidden="true">${P.map((X,q)=>`<span class="deals-set__term"><span class="deals-no">${q+1}</span>${S(X.price0)}</span>`).join('<span class="deals-set__op">+</span>')}</span></p>
      <p class="deals-set__tot deals-set__tot--was"><span>Samlet f\xF8rpris enkeltvis</span><b>${s(k)}</b></p>
      <p class="deals-set__tot"><span>Enkeltvis i Black Week</span><b>${s(L(x))}</b></p>
    </div>`},N=x=>w(x)>0?`<p class="deals-set__less"><span class="deals-set__less-dot" aria-hidden="true"></span>${s(w(x))} billigere end k\xF8bt enkeltvis</p>`:"",V=t.campaign.giftThreshold,J=t.campaign.freeShipping,G=x=>{let P=[];return x.price>=V?P.push([Fn.gift,"Udl\xF8ser gratis CBD Lip Balm",' class="is-gift"']):P.push([Fn.gift,`<b>${s(V-x.price)}</b> fra gratis CBD Lip Balm`,' class="is-gift is-nudge"']),x.price>=J&&P.push([Fn.tick,"Fri fragt"]),P.push([Fn.tick,"Ingen kode \u2013 tr\xE6kkes i kurven"]),`<ul class="deals-set__perks">${P.map(([k,X,q=""])=>`<li${q}>${k}<span>${X}</span></li>`).join("")}</ul>`},at=x=>`<span class="deals-flag" aria-hidden="true">\u2212${x.pct}%</span>`,K=x=>`<button class="deals-quick" type="button" data-qv="${x.id}">${Fn.eye}<span class="nc-sr">Hurtig visning \u2013 ${Ce(x.name)}</span></button>`,ot=x=>x.bundle?Math.max(...(x.contains||[]).map(P=>Ic[P]||0)):(fo[x.id]||{h:.8}).h,pt={"komplet-pakken":"sand","all-day-facial":"mint"};function Lt(x,P){let k=zu(x);if(x.bundle){let q=(x.contains||[]).length;return`<li class="deals-item deals-item--set" data-id="${x.id}" data-cat="${k}" data-h="${ot(x).toFixed(4)}" data-tone="${pt[x.id]||"sand"}" style="--ri:${P}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${x.id}">
          <div class="deals-card__stage" data-stage>
            <span class="deals-ground" aria-hidden="true"></span>
            ${T(x)}${at(x)}
            ${K(x)}
          </div>
          <div class="deals-card__body deals-set__body">
            <div class="deals-set__intro">
              <p class="deals-card__eyebrow">Sampakke \xB7 ${q} produkter</p>
              <h3 class="deals-card__name deals-card__name--set" id="deals-n-${x.id}"><a class="deals-card__link" href="${Cc(x)}">${Ce(x.name)}</a></h3>
              <p class="deals-card__claim deals-card__claim--set">${Ce(x.claim)}</p>
              ${W(x)}
            </div>
            <div class="deals-set__side">
              ${G(x)}
              <div class="deals-card__buy">${N(x)}${y(x,!0)}${R(x)}</div>
            </div>
          </div>
        </article>
      </li>`}let X=[Hu(x),x.size].filter(Boolean).join(" \xB7 ");return`<li class="deals-item" data-id="${x.id}" data-cat="${k}" data-h="${ot(x).toFixed(4)}" style="--ri:${P}">
      <article class="deals-card" aria-labelledby="deals-n-${x.id}">
        <div class="deals-card__stage" data-stage>
          <span class="deals-ground" aria-hidden="true"></span>
          ${T(x)}${at(x)}${K(x)}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${Ce(X)}</p>
          <h3 class="deals-card__name" id="deals-n-${x.id}"><a class="deals-card__link" href="${Cc(x)}">${Ce(x.name)}</a></h3>
          <p class="deals-card__claim">${Ce(tx[x.id]||x.claim)}</p>
          <div class="deals-card__buy">${y(x)}${R(x)}</div>
        </div>
      </article>
    </li>`}let gt=t.byId[t.campaign.giftId],Bt=gt?gt.name:"CBD Lip Balm",j=gt&&gt.img?t.asset(gt.img):"",lt=`<svg class="deals-lb" viewBox="0 0 28 100" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="deals-lb-cyl" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" style="stop-color:var(--sage-900);stop-opacity:.28"/><stop offset=".16" style="stop-color:var(--sage-900);stop-opacity:.06"/>
          <stop offset=".34" style="stop-color:var(--cloud);stop-opacity:.7"/><stop offset=".46" style="stop-color:var(--cloud);stop-opacity:0"/>
          <stop offset=".78" style="stop-color:var(--sage-900);stop-opacity:.08"/><stop offset="1" style="stop-color:var(--sage-900);stop-opacity:.34"/>
        </linearGradient>
        <clipPath id="deals-lb-body"><rect x="1" y="31.5" width="26" height="67.5" rx="2.2"/></clipPath>
      </defs>
      <rect x="1.4" y="1" width="25.2" height="29.4" rx="3.2" style="fill:var(--cloud)"/>
      <rect x="1.4" y="1" width="25.2" height="29.4" rx="3.2" fill="url(#deals-lb-cyl)"/>
      <path d="M2.6 4.2h22.8" style="stroke:var(--cloud);stroke-opacity:.9" stroke-width=".7"/>
      <g clip-path="url(#deals-lb-body)">
        <rect x="1" y="31.5" width="26" height="67.5" style="fill:var(--cloud)"/>
        <rect x="1" y="43" width="26" height="44" style="fill:var(--sage-500)"/>
        <path d="M1 83.5 27 66" style="stroke:var(--cloud)" stroke-width=".55" stroke-opacity=".85"/>
        <image href="${t.asset("logo-mark-white.svg")}" x="7.5" y="47.5" width="13" height="13"/>
        <rect x="1" y="31.5" width="26" height="67.5" fill="url(#deals-lb-cyl)"/>
      </g>
      <path d="M1.2 31h25.6" style="stroke:var(--sage-900);stroke-opacity:.22" stroke-width=".8"/>
    </svg>`,Tt=`<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${v.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__art has-pack${j?" has-photo":""}" aria-hidden="true">
          <!-- the gift stands on a small sand plinth in a warm pool of light; its value tag hangs beside it on a sand thread -->
          <span class="deals-gift__pack">${j?`<img src="${j}" alt="" draggable="false">`:lt}<span class="deals-gift__plinth"></span></span>
          <span class="deals-tag">
            <svg class="deals-tag__string" viewBox="0 0 40 60" preserveAspectRatio="none"><path d="M20 0 C 21 18, 26 30, 20 60"/></svg>
            <span class="deals-tag__card">
              <span class="deals-tag__hole"></span>
              <span class="deals-tag__k">V\xE6rdi</span>
              <span class="deals-tag__v">${s(t.campaign.giftValue)}</span>
              <span class="deals-tag__n">Gave \xB7 6 ml</span>
            </span>
          </span>
        </div>
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Black Week-gave</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${Ce(Bt)} med i k\xF8bet</h3>
        </div>
        <p class="deals-gift__copy">Gratis<span class="deals-gift__copy-x">, n\xE5r du handler for</span><span class="deals-gift__copy-s"> ved k\xF8b</span> over ${s(V)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis ${Ce(Bt)}" aria-valuemin="0" aria-valuemax="${V}" aria-valuenow="0" aria-valuetext="0 kr. af ${V} kr.">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(J/V*100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(J/V*100).toFixed(2)}%"><span class="deals-gift__lw">Fri fragt</span><span class="deals-gift__ln">${s(J)}</span></span>
            <span class="deals-gift__lend"><span class="deals-gift__lw">Gave</span><span class="deals-gift__ln">${s(V)}</span></span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
        <button class="nc-btn nc-btn--outline-light deals-gift__cta" type="button" data-gift-cta><span class="deals-gift__cta-l">Se Komplet Pakken</span><span class="deals-gift__cta-s">Komplet Pakken</span>${Fn.pil}</button>
      </div>
    </aside>
  </li>`;f.innerHTML=v.map(Lt).join("")+Tt,f.classList.add("deals-rv");let vt=a(".deals-head [data-reveal]");vt.forEach(x=>{x.removeAttribute("data-reveal"),x.classList.add("deals-hd")});let Nt=()=>vt.forEach(x=>x.classList.add("is-in")),Ht=0,Jt=()=>{Nt(),f.classList.add("is-in"),Ht=performance.now()};if(o)Nt(),f.classList.add("is-in");else{let x=new IntersectionObserver(k=>{k.some(X=>X.isIntersecting)&&(Nt(),x.disconnect())},{rootMargin:"0px 0px -4% 0px"});x.observe(r(".deals-head"));let P=new IntersectionObserver(k=>{k.some(X=>X.isIntersecting)&&(Jt(),P.disconnect())},{rootMargin:"0px 0px -6% 0px"});P.observe(f)}let de=r(".deals-foot");de&&de.removeAttribute("data-reveal");let $t={all:v.length,face:0,body:0,sets:0};v.forEach(x=>$t[zu(x)]++),a("[data-count]").forEach(x=>{x.textContent=$t[x.dataset.count]});function be(x=0){if(o||u)return;let P=Wt().filter(q=>!q.hidden&&q!==st).map(q=>r(".deals-card",q)).filter(q=>q&&!(dt.get(q)||{}).th);if(!P.length)return;let k=P.map(q=>q.getBoundingClientRect().top),X=Math.min(...k);P.forEach(q=>{let ht=q.getBoundingClientRect();if(ht.bottom<0||ht.top>innerHeight)return;let Q=(ht.top-X)/260+ht.left/360;setTimeout(()=>{(dt.get(q)||{}).th||(q.classList.remove("is-sweep"),q.offsetWidth,q.classList.add("is-sweep"))},x+Q*140)})}if(!o&&!u){let x=new WeakSet,P=new IntersectionObserver(k=>k.forEach(X=>{if(!X.isIntersecting)return;let q=X.target.closest(".deals-card");if(P.unobserve(X.target),!q||x.has(q))return;x.add(q);let ht=Math.max(0,760-(performance.now()-(Ht||performance.now())))+X.boundingClientRect.left/innerWidth*480;setTimeout(()=>{(dt.get(q)||{}).th||(q.classList.remove("is-sweep"),q.offsetWidth,q.classList.add("is-sweep"))},ht)}),{threshold:.6});a("[data-stage]",f).forEach(k=>P.observe(k))}f.addEventListener("animationend",x=>{x.animationName==="deals-sweep"&&x.target.closest(".deals-card")?.classList.remove("is-sweep")});let O=r(".deals-gift__fill"),Ne=r(".deals-gift__track"),te=r("[data-gift-status]"),Zt=r(".deals-gift"),Ft=t.byId["komplet-pakken"],ce=r(".deals-tag"),Ut=null;function _(x=1){if(o||!ce||Ut&&Ut.playState==="running")return;let P=[1.6,-1.1,.62,-.3,.1,0];Ut=ce.animate(P.map((k,X)=>({transform:`rotate(${(k*x).toFixed(3)}deg)`,offset:[0,.18,.38,.58,.78,1][X]})),{duration:4200,easing:"cubic-bezier(.33, 0, .3, 1)"})}l&&Zt.addEventListener("pointerenter",()=>_(.8));function M(){let x=n.subtotal();O.style.setProperty("--p",Is(x/V,0,1).toFixed(4)),Ne.setAttribute("aria-valuenow",String(Math.min(x,V))),Ne.setAttribute("aria-valuetext",`${Math.min(x,V)} kr. af ${V} kr.`),Zt.classList.toggle("is-ship",x>=J),x>=V&&!Zt.classList.contains("is-done")&&_(1.4),Zt.classList.toggle("is-done",x>=V),Zt.classList.toggle("is-empty",x<=0);let P;x<=0?P=Ft&&Ft.price>=V?`<b>${Ce(Ft.name)}</b> (${s(Ft.price)}) udl\xF8ser gaven alene.`:`Fri fragt allerede fra ${s(J)}.`:x<J?P=`Du mangler <b>${s(J-x)}</b> til fri fragt og <b>${s(V-x)}</b> til din gave.`:x<V?P=`Fri fragt er din. Du mangler <b>${s(V-x)}</b> til din gave.`:P=`<b>Din ${Ce(Bt)} f\xF8lger med.</b> Fri fragt er ogs\xE5 din.`,te.innerHTML=P}M(),n.on(x=>{(x==="cart:add"||x==="cart:change")&&M()}),r("[data-gift-cta]").addEventListener("click",()=>{let x=r('.deals-item[data-id="komplet-pakken"]',f);if(!x)return;x.hidden&&it.find(X=>X.dataset.filter==="all")?.click();let P=r(".deals-card",x),k=r(".deals-card__link",x);P.scrollIntoView({behavior:o?"auto":"smooth",block:"center"}),setTimeout(()=>{k.focus({preventScroll:!0}),P.classList.remove("is-spot"),P.offsetWidth,P.classList.add("is-spot"),o||(P.classList.remove("is-sweep"),P.offsetWidth,P.classList.add("is-sweep"))},o?0:650)});let H=r(".deals-filter"),et=r(".deals-filter__ink"),it=a(".deals-chip"),$="all";function It(x,P){let k=x.offsetLeft,X=x.offsetWidth;et.style.transition=P||o?"none":"",et.style.width=`${X}px`,et.style.transform=`translateX(${k}px)`,P&&(et.offsetWidth,et.style.transition=""),et.classList.add("is-on")}let bt=()=>it.find(x=>x.getAttribute("aria-pressed")==="true")||it[0];requestAnimationFrame(()=>It(bt(),!0)),document.fonts&&document.fonts.ready.then(()=>It(bt(),!0));let Rt=()=>{let x=H.scrollLeft+H.clientWidth<H.scrollWidth-2,P=H.scrollLeft>2;H.classList.toggle("is-more",x),H.classList.toggle("is-before",P)};H.addEventListener("scroll",Rt,{passive:!0}),new ResizeObserver(()=>{It(bt(),!0),Rt()}).observe(H);let Wt=()=>a(".deals-item",f),st=r(".deals-item--gift",f),Et=()=>getComputedStyle(f).gridTemplateColumns.split(" ").filter(Boolean).length||1,kt=x=>x.classList.contains("deals-item--set")?Math.min(2,Et()):1;function Ot(x=$){let P=Et(),X=Wt().filter(ht=>ht!==st&&(x==="all"||ht.dataset.cat===x)).reduce((ht,Q)=>ht+kt(Q),0),q=(P-X%P)%P||P;return st.style.gridColumn=`span ${q}`,st.dataset.span=q,st.classList.toggle("is-wide",q>=2),q}function Mt(){let x=Et(),P=parseFloat(getComputedStyle(f).columnGap)||0,k=(f.clientWidth-P*(x-1))/x;f.style.setProperty("--dl-u",`${(Zv*k).toFixed(2)}px`);let X=new Map;Wt().filter(q=>!q.hidden&&!q.dataset.leaving).forEach(q=>{let ht=Math.round(q.offsetTop);X.has(ht)||X.set(ht,[]),X.get(ht).push(q)}),X.forEach(q=>{let ht=Math.max(0,...q.map(tt=>+tt.dataset.h||0)),Q=q.some(tt=>tt.classList.contains("deals-item--set"));q.forEach(tt=>{tt.style.setProperty("--row-h",ht.toFixed(4)),tt.classList.toggle("is-setrow",Q)})})}Ot(),Mt();let Yt=Et(),Vt=f.clientWidth;new ResizeObserver(()=>{let x=Et(),P=f.clientWidth;x!==Yt&&(Yt=x,Ot()),(x!==Yt||Math.abs(P-Vt)>.5)&&(Vt=P,Mt())}).observe(f),document.fonts&&document.fonts.ready.then(Mt);let qt=[];function F(x){if(x===$)return;$=x,qt.forEach(mt=>mt.cancel()),qt=[],f.classList.add("is-in"),Wt().forEach(mt=>{mt.style.position=mt.style.left=mt.style.top=mt.style.width=mt.style.height="",mt.classList.remove("is-leaving"),mt.dataset.leaving&&(mt.hidden=!0,delete mt.dataset.leaving)});let P=f.getBoundingClientRect(),k=P.height,X=new Map(Wt().filter(mt=>!mt.hidden).map(mt=>[mt,mt.getBoundingClientRect()])),q=st.dataset.span,ht=mt=>mt===st||x==="all"||mt.dataset.cat===x,Q=[...X.keys()].filter(mt=>!ht(mt)),tt=Wt().filter(mt=>mt.hidden&&ht(mt));Q.forEach(mt=>{let yt=X.get(mt);Object.assign(mt.style,{position:"absolute",left:`${yt.left-P.left}px`,top:`${yt.top-P.top}px`,width:`${yt.width}px`,height:`${yt.height}px`}),mt.classList.add("is-leaving"),mt.dataset.leaving="1"}),tt.forEach(mt=>{mt.hidden=!1});let ut=String(Ot(x));Mt();let Pt=f.getBoundingClientRect().height;if(o){Q.forEach(mt=>{mt.hidden=!0,mt.style.position="",mt.classList.remove("is-leaving"),delete mt.dataset.leaving});return}Q.forEach(mt=>{let yt=mt.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(6px) scale(.965)",filter:"blur(2px)"}],{duration:300,easing:"cubic-bezier(.4,0,.6,1)",fill:"forwards"});qt.push(yt),yt.onfinish=()=>{mt.hidden=!0,Object.assign(mt.style,{position:"",left:"",top:"",width:"",height:""}),mt.classList.remove("is-leaving"),delete mt.dataset.leaving,yt.cancel()}});let At=0;Wt().filter(mt=>!mt.hidden&&!mt.dataset.leaving).forEach(mt=>{let yt=mt.getBoundingClientRect(),oe=X.get(mt);if(mt===st&&q!==ut)qt.push(mt.animate([{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"none"}],{duration:640,delay:260,easing:c,fill:"backwards"}));else if(oe){let he=oe.left-yt.left,Ae=oe.top-yt.top;Math.abs(he)+Math.abs(Ae)>.5&&qt.push(mt.animate([{transform:`translate(${he}px, ${Ae}px)`},{transform:"none"}],{duration:760,easing:c}))}else qt.push(mt.animate([{opacity:0,transform:"translateY(18px) scale(.985)"},{opacity:1,transform:"none"}],{duration:720,delay:160+At++*55,easing:c,fill:"backwards"}))}),Math.abs(Pt-k)>1&&qt.push(f.animate([{height:`${k}px`},{height:`${Pt}px`}],{duration:640,easing:c})),setTimeout(()=>be(0),520)}it.forEach(x=>x.addEventListener("click",()=>{it.forEach(k=>k.setAttribute("aria-pressed",String(k===x))),It(x),H.scrollWidth>H.clientWidth&&H.scrollTo({left:x.offsetLeft-(H.clientWidth-x.offsetWidth)/2,behavior:o?"auto":"smooth"}),F(x.dataset.filter);let P=$t[x.dataset.filter];p.textContent=`Viser ${P} ${P===1?"produkt":"produkter"}`})),H.addEventListener("keydown",x=>{let P=it.indexOf(document.activeElement);if(P<0)return;let k=x.key==="ArrowRight"?P+1:x.key==="ArrowLeft"?P-1:x.key==="Home"?0:x.key==="End"?it.length-1:-1;k<0&&x.key!=="ArrowLeft"||(x.preventDefault(),it[(k+it.length)%it.length].focus())});let dt=new Map,Z=0,nt=0,wt=.18,xt=.12;function Gt(x){let P=Math.min(.05,(x-nt)/1e3);nt=x;let k=1-Math.exp(-P*7),X=1-Math.exp(-P*6),q=1-Math.exp(-P*4.2),ht=x/1e3;dt.forEach((Q,tt)=>{let ut=(mt,yt,oe)=>Math.abs(yt-mt)<.0015?yt:mt+(yt-mt)*oe;Q.rx=ut(Q.rx,Q.trx,k),Q.ry=ut(Q.ry,Q.try,k),Q.h=ut(Q.h,Q.th,X),Q.mx=ut(Q.mx,Q.tmx,q),Q.sx=ut(Q.sx,Q.tsx,q);let Pt=Math.sin((ht-Q.t0)*Math.PI*2*xt)*wt*Q.dk*Q.h;tt.style.transform=`translateY(${Math.round(-Q.h*4)}px)`,tt.classList.add("is-tilt"),tt.style.setProperty("--h",Q.h.toFixed(4)),tt.style.setProperty("--deals-lx",`${((Q.mx+Pt)*100).toFixed(2)}%`),tt.style.setProperty("--deals-sx",`${((Q.sx+Pt*.55)*100).toFixed(2)}%`),tt.style.setProperty("--ry",Q.ry.toFixed(3)),tt.style.setProperty("--rx",Q.rx.toFixed(3)),tt.style.setProperty("--pl",(Q.h*(.16+Math.min(1,Math.abs(Q.ry)/5)*.3)).toFixed(3)),tt.style.setProperty("--pl-ang",Q.ry>=0?"90deg":"270deg"),Math.abs(Q.trx-Q.rx)+Math.abs(Q.try-Q.ry)+Math.abs(Q.th-Q.h)+Math.abs(Q.tsx-Q.sx)+Math.abs(Q.tmx-Q.mx)<.002&&Q.th===0&&(tt.style.transform="",tt.classList.remove("is-tilt"),["--h","--deals-lx","--deals-sx","--ry","--rx","--pl","--pl-ang"].forEach(mt=>tt.style.removeProperty(mt)),dt.delete(tt))}),Z=dt.size?requestAnimationFrame(Gt):0}let ie=()=>{Z||(nt=performance.now(),Z=requestAnimationFrame(Gt))};if(l&&!u&&!o&&(f.addEventListener("pointermove",x=>{let P=x.target.closest(".deals-card");if(!P||x.pointerType!=="mouse")return;let k=P.getBoundingClientRect(),X=Is((x.clientX-k.left)/k.width,0,1),q=Is((x.clientY-k.top)/k.height,0,1),ht=-.08+X*1.16,Q=P.querySelector("[data-stage]").getBoundingClientRect(),tt=Is((x.clientX-Q.left)/Q.width,0,1),ut=dt.get(P);(!ut||ut.th===0)&&(P.classList.remove("is-sweep"),ut||(ut={rx:0,ry:0,h:0,dk:1},dt.set(P,ut)),Object.assign(ut,{mx:ht,sx:tt,t0:performance.now()/1e3}));let Pt=P.classList.contains("deals-card--set")?.5:1;ut.dk=Pt*Pt,ut.try=(X-.5)*12*Pt,ut.trx=-(q-.5)*8*Pt,ut.th=1,ut.tmx=ht,ut.tsx=tt,ie()}),f.addEventListener("pointerout",x=>{let P=x.target.closest(".deals-card");if(!P||P.contains(x.relatedTarget))return;let k=dt.get(P);k&&(k.trx=0,k.try=0,k.th=0,k.tsx=.3,k.tmx=.32,ie())})),u&&!o){let x=null,P=0,k=!1,X=()=>{let tt=scrollY;x=Wt().filter(ut=>!ut.hidden&&ut!==st).map(ut=>{let Pt=r("[data-stage]",ut),At=Pt.getBoundingClientRect();return{c:r(".deals-card",ut),top:At.top+tt,h:At.height}})},q=()=>{if(P=0,!k)return;x||X();let tt=innerHeight,ut=scrollY;x.forEach(({c:Pt,top:At,h:mt})=>{let yt=At-ut;if(yt+mt<-40||yt>tt+40)return;let oe=Is((tt-yt)/(tt+mt),0,1),he=Math.sin(oe*Math.PI);Pt.style.setProperty("--deals-lx",`${((.02+oe*.96)*100).toFixed(2)}%`),Pt.style.setProperty("--deals-sx",`${((.18+oe*.64)*100).toFixed(2)}%`),Pt.style.setProperty("--deals-g",(.34+he*.5).toFixed(3)),Pt.style.setProperty("--pl",(.12+he*.16).toFixed(3))})},ht=()=>{k&&!P&&(P=requestAnimationFrame(q))},Q=()=>{x=null,ht()};addEventListener("scroll",ht,{passive:!0}),addEventListener("resize",Q,{passive:!0}),new ResizeObserver(Q).observe(f),it.forEach(tt=>tt.addEventListener("click",()=>setTimeout(Q,800))),new IntersectionObserver(tt=>{k=tt.some(ut=>ut.isIntersecting),k&&Q()}).observe(f)}let Ie=new WeakMap;function Kt(x,P){let k=x.getBoundingClientRect(),X=P&&P.clientX?P.clientX-k.left:k.width/2,q=P&&P.clientY?P.clientY-k.top:k.height/2;x.style.setProperty("--ix",`${X}px`),x.style.setProperty("--iy",`${q}px`),x.classList.remove("is-added"),x.offsetWidth,x.classList.add("is-added"),clearTimeout(Ie.get(x)),Ie.set(x,setTimeout(()=>x.classList.remove("is-added"),2600))}function Ye(){let x=innerWidth,k=[...document.querySelectorAll("[data-cart]")].map(X=>X.querySelector(".hdr-cart__icon")||X).map(X=>X.getBoundingClientRect()).filter(X=>X.width>0&&X.bottom>0&&X.top<innerHeight&&X.left<x)[0];return k?{x:k.left+k.width/2,y:k.top+k.height/2,real:!0}:{x:x-36,y:30,real:!1}}let Je=(x,P,k,X,q)=>{let ht=1-q;return ht*ht*ht*x+3*ht*ht*q*P+3*ht*q*q*k+q*q*q*X},Bi=x=>(x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2)*.82+(1-Math.pow(1-x,3))*.18,xn=null,Qe=[],$n=0,ti=getComputedStyle(i),Oi=(x,P)=>ti.getPropertyValue(x).trim()||P,je=(x,P)=>{let k=x.replace("#",""),X=parseInt(k.length===3?k.replace(/./g,"$&$&"):k,16);return`rgba(${X>>16&255}, ${X>>8&255}, ${X&255}, ${P})`},kn=Oi("--sage-500","#80a097"),ei=Oi("--sand-500","#ddbfa3");function es(){xn||(xn=document.createElement("canvas"),xn.className="deals-trail",xn.setAttribute("aria-hidden","true"),i.appendChild(xn))}function He(x){let P=xn,k=Math.min(devicePixelRatio||1,2);(P.width!==Math.round(innerWidth*k)||P.height!==Math.round(innerHeight*k))&&(P.width=Math.round(innerWidth*k),P.height=Math.round(innerHeight*k));let X=P.getContext("2d");X.setTransform(k,0,0,k,0,0),X.clearRect(0,0,innerWidth,innerHeight),X.lineCap="round",Qe=Qe.filter(q=>x-q.end<520*d||!q.done);for(let q of Qe){let ht=q.pts,Q=q.done?Math.max(0,1-(x-q.end)/(520*d)):1;for(let tt=1;tt<ht.length;tt++){let ut=(x-ht[tt].t)/(420*d);if(ut>1)continue;let Pt=(1-ut)*(1-ut)*Q;X.strokeStyle=je(kn,(.38*Pt).toFixed(3)),X.lineWidth=1+9*Pt*ht[tt].s,X.beginPath(),X.moveTo(ht[tt-1].x,ht[tt-1].y),X.lineTo(ht[tt].x,ht[tt].y),X.stroke()}for(let tt of q.drops){let ut=(x-tt.t)/(700*d);ut>1||ut<0||(X.fillStyle=je(ei,(.55*(1-ut)*Q).toFixed(3)),X.beginPath(),X.arc(tt.x,tt.y+ut*10,tt.r*(1-ut*.6),0,Math.PI*2),X.fill())}}Qe.length?$n=requestAnimationFrame(He):($n=0,X.clearRect(0,0,innerWidth,innerHeight))}function br(x,P){let k=x?[...x.querySelectorAll(".deals-prod__pack")]:[];if(o||!k.length){P();return}let X=Ye(),q=!1;k.forEach((ht,Q)=>{let tt=ht.getBoundingClientRect();if(tt.width<2){Q===k.length-1&&!q&&(q=!0,P());return}let ut=ht.cloneNode(!0);ut.className="deals-fly",Object.assign(ut.style,{left:`${tt.left}px`,top:`${tt.top}px`,width:`${tt.width}px`,height:`${tt.height}px`});let Pt=ut.querySelector("img");Pt&&(Pt.loading="eager"),ut.querySelectorAll(".deals-gloss").forEach(ii=>ii.remove()),i.appendChild(ut);let At=Q===0,mt=At?Object.assign(document.createElement("span"),{className:"deals-fly__drop"}):null;mt&&i.appendChild(mt);let yt=null;At&&(es(),yt={pts:[],drops:[],done:!1,end:0},Qe.push(yt),$n||($n=requestAnimationFrame(He)));let oe=tt.left+tt.width/2,he=tt.top+tt.height/2,Ae=Math.hypot(X.x-oe,X.y-he),ln=Is(620+Ae*.42,760,1150)*d,Qt=Math.min(140,40+Ae*.12),zt=14,zn=oe,Pe=Math.max(zt,he-Qt-Math.max(0,he-X.y)*.35),cn=oe+(X.x-oe)*.62,hn=Math.max(zt,Math.min(X.y,he)-Qt*.55),ni=22/Math.max(tt.width,tt.height),vo=performance.now()+Q*85*d,ns=.18;function Ls(ii){if(ii<vo){requestAnimationFrame(Ls);return}let si=Is((ii-vo)/ln,0,1),is=Bi(si),Le=Ye(),ia=X.real?Le.x:X.x,Sr=X.real?Le.y:X.y,xi=Je(oe,zn,cn,ia,is),ss=Je(he,Pe,hn,Sr,is),wr=1+(ni-1)*Math.pow(is,.8),Ds=Math.sin(is*Math.PI)*-7;ut.style.transform=`translate(${(xi-oe).toFixed(2)}px, ${(ss-he).toFixed(2)}px) scale(${wr.toFixed(4)}) rotate(${Ds.toFixed(2)}deg)`,ut.style.opacity=String(si<.82?1:1-(si-.82)/.18),mt&&(mt.style.transform=`translate(${(xi-6).toFixed(2)}px, ${(ss-6).toFixed(2)}px) scale(${(.4+.6*Math.sin(is*Math.PI)).toFixed(3)})`,mt.style.opacity=String(Math.sin(si*Math.PI)*.9)),yt&&(yt.pts.push({x:xi,y:ss,t:ii,s:Math.max(.25,wr)}),yt.pts.length>60&&yt.pts.shift(),si>ns&&si<.8&&(yt.drops.push({x:xi+(Math.random()-.5)*10,y:ss+(Math.random()-.5)*8,r:1.4+Math.random()*1.8,t:ii}),ns+=.12+Math.random()*.08)),si>=.93&&Q===k.length-1&&!q&&(q=!0,P()),si<1?requestAnimationFrame(Ls):(ut.remove(),mt&&mt.remove(),yt&&(yt.done=!0,yt.end=ii))}requestAnimationFrame(Ls)})}function re(x,P,k,X){P&&Kt(P,k);let q=!1;br(X,()=>{q||(q=!0,n.add(x.id,1),p.textContent=`${x.name} er lagt i kurven.`)})}f.addEventListener("click",x=>{let P=x.target.closest("[data-add]");if(P){let X=t.byId[P.dataset.add];re(X,P,x,P.closest(".deals-card").querySelector("[data-stage]"));return}let k=x.target.closest("[data-qv]");if(k){ct(t.byId[k.dataset.qv],k);return}});let pe=document.createElement("dialog");pe.className="deals-qv",pe.setAttribute("aria-labelledby","deals-qv-title"),i.appendChild(pe);let A=null,D=null,z=!1,Y=x=>{let P=x.bundle?(x.contains||[]).map(k=>Ic[k]||.8):[(fo[x.id]||{h:.8}).h];return Math.min(1.05,(x.bundle?.56:.62)/Math.max(...P))};function B(x){let P=`<ul class="deals-qv__usp">
      <li>${Fn.truck}Fri fragt over ${s(t.campaign.freeShipping)}</li>
      <li>${Fn.back}14 dages fortrydelsesret</li>
      <li>${Fn.shield}Testet til under 0,2% THC</li>
    </ul>`;return`<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${Fn.close}</button>
      <div class="deals-qv__stage${x.bundle?" deals-qv__stage--set":""}"${pt[x.id]?` data-tone="${pt[x.id]}"`:""} data-stage style="--dl-ufrac:${Y(x).toFixed(4)}">
        <span class="deals-ground" aria-hidden="true"></span>
        ${T(x)}
        <span class="deals-flag deals-flag--qv" aria-hidden="true">\u2212${x.pct}%</span>
        ${x.badge&&x.bundle?`<img class="deals-qv__badge" src="${t.asset(x.badge)}" alt="" width="44" height="44">`:""}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${Ce(x.bundle?`Sampakke \xB7 ${(x.contains||[]).length} produkter`:x.nickname?`${x.nickname} \xB7 ${Gu[x.id]||"Ansigt"}`:Hu(x))}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${Ce(x.name)}</h2>
        <p class="deals-card__size">${Ce(x.bundle?(x.contains||[]).map(k=>Vu[k]||t.byId[k]?.name).join(" \xB7 "):E(x))}</p>
        <p class="deals-qv__claim">${Ce(x.claim)}</p>
        ${x.notes?`<p class="deals-qv__notes">${Ce(x.notes)}</p>`:""}
        ${x.bundle?I(x):""}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${x.bundle?N(x):""}${y(x,!0)}${R(x," nc-btn--lg")}</div>
        <a class="deals-qv__more" href="${Cc(x)}">Se alt om ${Ce(x.name)}${Fn.pil}</a>
        ${P}
      </div>
    </div>`}function ct(x,P){x&&(D=x,A=P,z=!1,pe.innerHTML=B(x),a("img",pe).forEach(k=>{k.loading="eager"}),pe.showModal(),document.documentElement.classList.add("deals-lock"),o||(r(".deals-qv__sheet",pe).animate([{opacity:0,transform:"translateY(22px) scale(.985)"},{opacity:1,transform:"none"}],{duration:620,easing:c}),a(".deals-prod",pe).forEach((X,q)=>X.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:900,delay:90+q*70,easing:c,fill:"backwards"})),r(".deals-qv__stage",pe).classList.add("is-sweep")),r("[data-qv-close]",pe).focus({preventScroll:!0}))}function ft(x){if(!pe.open||z)return;z=!0;let P=()=>{pe.close(),z=!1,document.documentElement.classList.remove("deals-lock"),A&&!x&&A.focus({preventScroll:!0}),x&&x()};if(o)return P();pe.classList.add("is-closing");let k=r(".deals-qv__sheet",pe).animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(14px) scale(.99)"}],{duration:220,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});k.onfinish=()=>{pe.classList.remove("is-closing"),P()}}pe.addEventListener("cancel",x=>{x.preventDefault(),ft()}),pe.addEventListener("click",x=>{if(x.target===pe||x.target.closest("[data-qv-close]"))return ft();let P=x.target.closest("[data-add]");if(P&&D){let k=D;Kt(P,x);let X=f.querySelector(`.deals-item[data-id="${k.id}"]`),q=X&&X.querySelector("[data-add]"),ht=a(".deals-prod__pack",pe).map(Q=>[Q,Q.getBoundingClientRect()]);setTimeout(()=>ft(()=>{let Q=document.createElement("div");Q.style.cssText="position:fixed;left:0;top:0;width:0;height:0;pointer-events:none",ht.forEach(([tt,ut])=>{let Pt=tt.cloneNode(!0);Pt.style.cssText=`position:fixed;left:${ut.left}px;top:${ut.top}px;width:${ut.width}px;height:${ut.height}px;overflow:hidden`,Q.appendChild(Pt)}),i.appendChild(Q),q&&Kt(q),re(k,null,null,Q),setTimeout(()=>Q.remove(),40),A&&A.focus({preventScroll:!0})}),o?0:380)}})}var Lc={};function ex(i,t){if(Lc[i])return t(Lc[i]);let e=new Image;e.onload=()=>{let n=e.naturalWidth,s=e.naturalHeight;if(!n||!s)return t(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),d;try{c.drawImage(e,0,0,a,o),d=c.getImageData(0,0,a,o).data}catch{return t(null)}let u=(y,R)=>{let E=(R*a+y)*4;return[d[E],d[E+1],d[E+2],d[E+3]]},f=[u(0,0),u(a-1,0),u(0,o-1),u(a-1,o-1),u(a>>1,0),u(a>>1,o-1),u(0,o>>1),u(a-1,o>>1)],p=[0,1,2,3].map(y=>f.map(R=>R[y]).sort((R,E)=>R-E)[4]),v=p[3]<20,g=a,m=-1,h=o,b=-1;for(let y=0;y<o;y++)for(let R=0;R<a;R++){let E=(y*a+R)*4,C=d[E+3];(v?C>40:C>40&&(Math.abs(d[E]-p[0])>26||Math.abs(d[E+1]-p[1])>26||Math.abs(d[E+2]-p[2])>26))&&(R<g&&(g=R),R>m&&(m=R),y<h&&(h=y),y>b&&(b=y))}if(m<0||m-g<2||b-h<2||(m-g+1)/a>.97&&(b-h+1)/o>.97)return t(null);let T={x0:g/a,x1:(m+1)/a,y0:h/o,y1:(b+1)/o,w:n,h:s};Lc[i]=T,t(T)},e.onerror=()=>t(null),e.src=i}function Dc(i){let t=i._ncPs;if(!t)return;let e=i.clientWidth,n=i.clientHeight;if(!e||!n)return;let s=Math.min(e/t.w,n/t.h),r=t.w*s,a=t.h*s,o=(e-r)/2,l=(n-a)/2,c=o+t.x0*r,d=o+t.x1*r,u=l+t.y0*a,f=l+t.y1*a,p=d-c,v=f-u,g=(c+d)/2,m=1;v>.78*n?m=.78*n/v:v<.52*n&&(m=Math.min(1.6,.52*n/v)),p*m>.78*e&&(m=.78*e/p);let h=e/2-m*g,b=.86*n-m*f;i.style.transform=`translate(${h.toFixed(2)}px,${b.toFixed(2)}px) scale(${m.toFixed(4)})`,i.classList.add("is-placed")}var Wu="ResizeObserver"in window?new ResizeObserver(i=>i.forEach(t=>Dc(t.target))):null;function qu(i){if(i._ncPsInit)return;i._ncPsInit=!0;let t=i.currentSrc||i.src;t&&ex(t,e=>{e&&(i._ncPs=e,Dc(i),Wu?Wu.observe(i):window.addEventListener("resize",()=>Dc(i)))})}function Xu(i){i.querySelectorAll("img.nc-packshot").forEach(t=>{t.complete&&t.naturalWidth?qu(t):t.addEventListener("load",()=>qu(t),{once:!0})})}function nx(i){i.querySelectorAll("[data-nc-tabs]").forEach(t=>{let e=[...t.querySelectorAll("[data-nc-tab]")],n=[...t.querySelectorAll("[data-nc-panel]")];e.forEach(s=>{s.addEventListener("click",()=>{let r=s.getAttribute("data-nc-tab");e.forEach(a=>{a.classList.toggle("is-active",a===s),a.setAttribute("aria-selected",a===s?"true":"false")}),n.forEach(a=>{a.hidden=a.getAttribute("data-nc-panel")!==r})})})})}function ix(i){i.querySelectorAll("[data-nc-rail]").forEach(t=>{let e=null,n=0;t.getAttribute("data-nc-rail")!=="nodots"&&(e=document.createElement("div"),e.className="nc-raildots",e.setAttribute("aria-hidden","true"),e.hidden=!0,t.insertAdjacentElement("afterend",e));function s(){let a=t.clientWidth?Math.ceil((t.scrollWidth-2)/t.clientWidth):1;if(a!==n){n=a,e.innerHTML="",e.hidden=a<2;for(let o=0;o<a;o++){let l=document.createElement("button");l.type="button",l.tabIndex=-1,l.addEventListener("click",()=>t.scrollTo({left:o*t.clientWidth,behavior:"smooth"})),e.appendChild(l)}}}function r(){let a=t.scrollWidth-t.clientWidth;if(t.classList.toggle("is-more",t.scrollLeft<a-4),t.classList.toggle("is-before",t.scrollLeft>4),!e||(s(),n<2))return;let o=t.scrollLeft>=a-4?n-1:Math.min(n-1,Math.round(t.scrollLeft/t.clientWidth));[...e.children].forEach((l,c)=>l.classList.toggle("is-active",c===o))}t.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),"ResizeObserver"in window&&new ResizeObserver(r).observe(t),r()})}function Uc(i){nx(i),ix(i),Xu(i)}var po=4.7,sx=615,Yu=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",rx="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z";function ax(i){let t=Math.round(i*2)/2,e='<svg class="tp-mc__stars" viewBox="0 0 251 46" aria-hidden="true" focusable="false">';for(let n=0;n<5;n++){let s=n*51,r=t-n;e+=`<rect x="${s}" width="46" height="46" fill="#dcdce6"/>`,r>=1?e+=`<rect x="${s}" width="46" height="46" fill="#00b67a"/>`:r>=.5&&(e+=`<rect x="${s}" width="23" height="46" fill="#00b67a"/>`),e+=`<path transform="translate(${s} 0)" fill="#fff" d="${rx}"/>`}return e+"</svg>"}function Nc(i){let t=i.firstElementChild;if(!t)return;t.style.transform="";let e=Math.min(1,i.clientWidth/t.scrollWidth);e<1&&(t.style.transform=`scale(${e.toFixed(3)})`)}function ox(i){let t=i.querySelector("a");if(!t||i.dataset.tpHydrated)return;let e=i.getAttribute("data-text-color")||"#2f4b45",n=sx.toLocaleString("da-DK");t.className="tp-mc",t.style.setProperty("--tp-text",e),t.setAttribute("aria-label",`${Yu(po)}: ${String(po).replace(".",",")} ud af 5 p\xE5 Trustpilot, ${n} anmeldelser`),t.innerHTML=`<span class="tp-mc__in"><span class="tp-mc__word">${Yu(po)}</span>${ax(po)}<span class="tp-mc__count"><b>${n}</b> anmeldelser p\xE5</span><span class="tp-mc__logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span></span>`,Nc(t),window.addEventListener("resize",()=>Nc(t)),document.fonts&&document.fonts.ready.then(()=>Nc(t)),i.dataset.tpHydrated="1"}function Fc(i){uo(),i.querySelectorAll(".trustpilot-widget").forEach(ox)}function Bc(i,t){let e=i.querySelector(".nc-lifestyle__main video");if(!e)return;if(e.muted=!0,t&&t.prefersReducedMotion){e.removeAttribute("autoplay"),e.pause();return}let n=e.play&&e.play();n&&n.catch&&n.catch(()=>{})}var lx='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function Qu(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",lx)}function cx(i){let t=i.querySelector("[data-nc-railscroll]");t&&(i.querySelectorAll("[data-nc-rail-prev]").forEach(e=>e.addEventListener("click",()=>{t.scrollBy({left:-Math.max(320,t.clientWidth*.7),behavior:"smooth"})})),i.querySelectorAll("[data-nc-rail-next]").forEach(e=>e.addEventListener("click",()=>{t.scrollBy({left:Math.max(320,t.clientWidth*.7),behavior:"smooth"})})))}function hx(i){if(i.dataset.ncRailInit)return;i.dataset.ncRailInit="1";let t=null,e=0;i.getAttribute("data-nc-rail")!=="nodots"&&(t=document.createElement("div"),t.className="nc-raildots",t.setAttribute("aria-hidden","true"),t.hidden=!0,i.insertAdjacentElement("afterend",t));function n(){let r=i.clientWidth?Math.ceil((i.scrollWidth-2)/i.clientWidth):1;if(r!==e){e=r,t.innerHTML="",t.hidden=r<2;for(let a=0;a<r;a++){let o=document.createElement("button");o.type="button",o.tabIndex=-1,o.addEventListener("click",()=>i.scrollTo({left:a*i.clientWidth,behavior:"smooth"})),t.appendChild(o)}}}function s(){let r=i.scrollWidth-i.clientWidth;if(i.classList.toggle("is-more",i.scrollLeft<r-4),i.classList.toggle("is-before",i.scrollLeft>4),!t||(n(),e<2))return;let a=i.scrollLeft>=r-4?e-1:Math.min(e-1,Math.round(i.scrollLeft/i.clientWidth));Array.from(t.children).forEach((o,l)=>o.classList.toggle("is-active",l===a))}i.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),"ResizeObserver"in window&&new ResizeObserver(s).observe(i),s()}function Oc(i){Qu(),i.querySelectorAll("[data-nc-railwrap]").forEach(cx),i.querySelectorAll("[data-nc-rail]").forEach(hx)}var Zu="https://dk.trustpilot.com/review/naturecell.dk",Ku=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",ux="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z",dx=[{stars:5,title:"Bl\xF8d hud hele dagen",text:"Jeg bruger dagcremen hver morgen. Den tr\xE6kker hurtigt ind og efterlader huden bl\xF8d.",name:"Hanne",when:"for 2 dage siden"},{stars:5,title:"Hurtig levering og venlig service",text:"Pakken kom dagen efter, flot pakket, og jeg fik hurtigt svar p\xE5 mit sp\xF8rgsm\xE5l.",name:"Mette",when:"for 4 dage siden"},{stars:5,title:"Fast del af min aftenrutine",text:"Olien har en mild duft, og min hud f\xF8les velplejet om morgenen.",name:"Lars",when:"for 6 dage siden"},{stars:4,title:"Fedter ikke",text:"H\xE5ndcremen giver god fugt uden at fedte. Den st\xE5r nu ved k\xF8kkenvasken.",name:"Susanne",when:"for 1 uge siden"},{stars:5,title:"Rart at handle dansk",text:"Fin kvalitet fra en dansk familievirksomhed, og emballagen er rigtig p\xE6n.",name:"Karin",when:"for 1 uge siden"},{stars:5,title:"Mild mod min sarte hud",text:"Rensegelen er mild, og huden strammer ikke bagefter. Jeg k\xF8ber den igen.",name:"Jonas",when:"for 2 uger siden"}];function Ju(i,t="tp-stars"){let e=Math.round(i*2)/2,n=`<svg class="${t}" viewBox="0 0 251 46" aria-hidden="true" focusable="false">`;for(let s=0;s<5;s++){let r=s*51,a=e-s;n+=`<rect x="${r}" width="46" height="46" fill="#dcdce6"/>`,a>=1?n+=`<rect x="${r}" width="46" height="46" fill="#00b67a"/>`:a>=.5&&(n+=`<rect x="${r}" width="23" height="46" fill="#00b67a"/>`),n+=`<path transform="translate(${r} 0)" fill="#fff" d="${ux}"/>`}return n+"</svg>"}var fx='<span class="tp-logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span>',ju=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${i}"/></svg>`,px='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7 12.5 3.2 3L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',mo=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function mx(i){if(i.dataset.tpHydrated)return;let t=615 .toLocaleString("da-DK"),e=String(4.7).replace(".",","),n=dx.map(u=>`<a class="tp-rv" href="${Zu}" target="_blank" rel="noopener" data-standin><span class="tp-rv__top">${Ju(u.stars)}<span class="tp-rv__ver">${px}Verificeret</span></span><span class="tp-rv__title">${mo(u.title)}</span><span class="tp-rv__text">${mo(u.text)}</span><span class="tp-rv__who"><b>${mo(u.name)}</b>, ${mo(u.when)}</span></a>`).join(""),s=document.createElement("div");s.className="tp-cr",s.innerHTML=`<a class="tp-cr__sum" href="${Zu}" target="_blank" rel="noopener" aria-label="${Ku(4.7)}: ${e} ud af 5 p\xE5 Trustpilot, baseret p\xE5 ${t} anmeldelser"><span class="tp-cr__word">${Ku(4.7)}</span>${Ju(4.7)}<span class="tp-cr__based">Baseret p\xE5 <b>${t} anmeldelser</b></span>${fx}</a><div class="tp-cr__main"><div class="tp-cr__row"><button type="button" class="tp-cr__arrow" data-dir="-1" aria-label="Forrige anmeldelse">${ju("m15 18-6-6 6-6")}</button><div class="tp-cr__track" role="list" aria-label="Anmeldelser p\xE5 Trustpilot">${n}</div><button type="button" class="tp-cr__arrow" data-dir="1" aria-label="N\xE6ste anmeldelse">${ju("m9 18 6-6-6-6")}</button></div><p class="tp-cr__foot" data-standin>Mockup: eksempler p\xE5 anmeldelser \u2013 live-siden viser de rigtige fra Trustpilot</p></div>`,s.querySelectorAll(".tp-rv").forEach(u=>u.setAttribute("role","listitem"));let r=i.querySelector(".nc-testi__tp-fallback");r&&(r.style.display="none"),i.appendChild(s);let a=s.querySelector(".tp-cr__track"),[o,l]=s.querySelectorAll(".tp-cr__arrow"),c=()=>{let u=a.querySelector(".tp-rv"),f=parseFloat(getComputedStyle(a).columnGap)||0;return u?u.getBoundingClientRect().width+f:a.clientWidth},d=()=>{let u=a.scrollWidth-a.clientWidth;o.disabled=a.scrollLeft<=2,l.disabled=a.scrollLeft>=u-2};[o,l].forEach(u=>u.addEventListener("click",()=>a.scrollBy({left:c()*+u.dataset.dir}))),a.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),d(),i.dataset.tpHydrated="1"}function kc(i){i.querySelectorAll(".trustpilot-widget").forEach(mx)}var gx='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function $u(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",gx)}function zc(){$u()}function Vc(i){let t=i.querySelector("form[data-theme-footer-news]");if(!t)return;let e=t.querySelector('input[type="email"]');t.addEventListener("submit",n=>{n.preventDefault(),t.querySelectorAll("[data-theme-footer-msg]").forEach(a=>a.remove());let s=e.value.trim()!==""&&e.checkValidity(),r=document.createElement("p");r.setAttribute("data-theme-footer-msg",""),r.setAttribute("role",s?"status":"alert"),r.style.marginTop="8px",r.textContent=s?"Tak for din tilmelding.":"Tjek din e-mailadresse og pr\xF8v igen.",t.appendChild(r),s?t.reset():e.focus()})}var na="https://naturecell.dk",Ps=i=>i.toLocaleString("da-DK",{minimumFractionDigits:2,maximumFractionDigits:2})+" kr",nd=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),td='<span class="nc-cbd-i"><svg class="nc-cbd" aria-hidden="true" focusable="false"><use href="#nc-cbd"></use></svg></span>',vx=i=>nd(i).replace(/CBD-/g,"").replace(/CBD/g,td).replace(/\u0001/g,`<span class="nc-cbd-w">${td}-</span>`),ed={"skin-oil":["Hudpleje Olie med 1000mg CBD | 30ml","/products/cbd-olie-1000mg"],"day-cream":["Dagcreme NatureCell | Dagcreme, 50ml","/products/dagcreme"],"night-cream":["Natcreme NatureCell | Natcreme, 50ml","/products/natcreme"],serum:["Hyaluronic Serum med CBD | 30ml","/products/naturecell-cbd-hyaluronic-serum"],"cleansing-gel":["Rensegel med CBD | 100ml","/products/rensegel"],"body-lotion":["Bodylotion med CBD - 200ml","/products/bodylotion"],shampoo:["Shampoo med CBD | 300ml","/products/shampoo-300ml"],"komplet-pakken":["Komplet Pakken","/products/hudpleje-startpakke-plus-1"],"all-day-facial":["All Day Facial","/collections/sampakker"],"lip-balm":["Lip Balm | med CBD 6ml","/products/lip-balm"]},go={"skin-oil":[1.318,.21,-2.04],"day-cream":[.954,-3.42,-2.04],"night-cream":[.952,-3.63,-2.12],serum:[1.134,-3.04,-5.79],"cleansing-gel":[.994,0,-.67],"body-lotion":[1.024,.54,-4.58],shampoo:[.927,-.79,-.62],"komplet-pakken":[.958,-5.87,-.25],"all-day-facial":[.959,-6.67,-.29]},xx=i=>go[i]?` style="transform: scale(${go[i][0]}) translate(${go[i][1]}%, ${go[i][2]}%);"`:"",yx='<svg viewBox="22 16 56 76" width="100%" height="100%" aria-hidden="true" style="display:block"><ellipse cx="50" cy="86.4" rx="9" ry="1.8" fill="rgba(62,93,88,0.13)"/><rect x="43" y="22" width="14" height="20" rx="2.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="42" width="14" height="44.4" rx="1.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="49" width="14" height="30" fill="#80A097"/><path d="M45 41.6h10" stroke="rgba(62,93,88,0.22)" stroke-width=".9"/></svg>',Mx='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',bx='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',Sx='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18H3V6h12v4"/><path d="M14 9h4l3 3v6h-2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>',wx='<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';function Hc(i,t){let{store:e,byId:n,campaign:s,asset:r}=t,a=i.querySelector("[data-nc-drawer]"),o=document.documentElement,l=null,c=!1;function d(){let g=e.get().cart.map(({id:y,qty:R})=>{let E=n[y],[C,L]=ed[y]||[E.name,"/collections/cbd-hudpleje"],w=E.save*R;return{key:y,p:E,qty:R,title:C,url:na+L,img:E.img?r(E.img):null,original:E.price0*R,final:E.price*R,unitWas:E.price0,allocations:w>0?[{title:s.name,amount:w}]:[]}}),m=g.reduce((y,R)=>y+R.final,0),h=n[s.giftId];if(h&&m>=s.giftThreshold){let[y,R]=ed[h.id];g.push({key:h.id,p:h,qty:1,title:y,url:na+R,img:null,gift:!0,original:s.giftValue,final:0,unitWas:null,allocations:[{title:`Gave ved k\xF8b over ${s.giftThreshold} kr.`,amount:s.giftValue}]})}let b=g.reduce((y,R)=>y+R.final,0),T=g.reduce((y,R)=>y+R.allocations.reduce((E,C)=>E+C.amount,0),0);return{items:g,total:b,totalDiscount:T,count:g.reduce((y,R)=>y+R.qty,0)}}function u(g){let m=g.img?`<img src="${g.img}" alt="" loading="lazy" width="148" height="148"${xx(g.p.id)}>`:g.p.id==="lip-balm"?yx:"",h=g.gift?'<span class="nc-drawer__qty theme-cart-gift-qty" aria-label="Antal 1">1</span>':`<span class="nc-drawer__qty">
                  <button type="button" data-nc-line="${g.key}" data-nc-line-qty="${g.qty-1}" aria-label="F\xE6rre">\u2212</button>
                  <span>${g.qty}</span>
                  <button type="button" data-nc-line="${g.key}" data-nc-line-qty="${g.qty+1}" aria-label="Flere">+</button>
                </span>`;return`<div class="nc-drawer__line">
            <a class="nc-drawer__line-media" href="${g.url}" tabindex="-1" aria-hidden="true">${m}</a>
            <div class="nc-drawer__line-info">
              <a class="nc-drawer__line-title" href="${g.url}">${vx(g.title)}</a>${g.unitWas?`<span class="nc-drawer__line-meta">F\xF8rpris ${Ps(g.unitWas)}${g.qty>1?" / stk.":""}</span>`:""}${g.allocations.map(b=>`<span class="nc-drawer__line-discount">${nd(b.title)} \u2212${Ps(b.amount)}</span>`).join("")}
              <div class="nc-drawer__line-row">
                ${h}
                <span class="nc-drawer__line-price">${g.allocations.length?`<s class="nc-drawer__line-was">${Ps(g.original)}</s> `:""}${Ps(g.final)}</span>
              </div>
            </div>${g.gift?"":`
            <button class="nc-drawer__remove" type="button" data-nc-line="${g.key}" data-nc-line-qty="0" aria-label="Fjern">${Mx}</button>`}
          </div>`}function f(){let g=d(),m=s.freeShipping,h=Math.min(100,Math.floor(g.total*100/m)),b=`<div class="nc-drawer__head">
      <h2>Din kurv</h2>
      <button class="nc-drawer__close" type="button" data-nc-cart-close aria-label="Luk kurv">${bx}</button>
    </div>`,T;g.count>0?T=`<div class="nc-drawer__ship">
        <p>${Sx}<span>${g.total>=m?"Du har fri fragt":`K\xF8b for ${Ps(m-g.total)} mere og f\xE5 fri fragt`}</span></p>
        <div class="nc-drawer__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${h}" aria-label="Fri fragt-status">
          <div class="nc-drawer__fill" style="width: ${h}%;"></div>
        </div>
      </div>
      <div class="nc-drawer__lines">${g.items.map(u).join("")}</div>
      <div class="nc-drawer__foot">${g.totalDiscount>0?`
        <div class="nc-drawer__savings">
          <span>Du sparer i alt</span>
          <span>\u2212${Ps(g.totalDiscount)}</span>
        </div>`:""}
        <div class="nc-drawer__totals">
          <span>Subtotal</span>
          <strong>${Ps(g.total)}</strong>
        </div>
        <label class="nc-terms nc-drawer__terms" data-nc-terms-scope>
          <input type="checkbox" data-nc-terms${c?" checked":""}>
          <span>Jeg accepterer <a href="${na}/policies/terms-of-service" target="_blank" rel="noopener">handelsbetingelserne</a></span>
        </label>
        <a class="nc-drawer__checkout" href="${na}/cart/checkout" data-nc-terms-btn aria-disabled="${c?"false":"true"}">G\xE5 til kassen \u2192</a>
        <p class="nc-drawer__note">Moms inkluderet \xB7 fragt beregnes ved kassen</p>
      </div>`:T=`<div class="nc-drawer__empty">
        ${wx}
        <p>Din kurv er tom</p>
        <a href="${na}/collections/cbd-hudpleje" data-nc-cart-close>Shop hudpleje</a>
      </div>`;let y=document.activeElement,R=y&&a.contains(y)&&y.matches("[data-nc-line]")?y.getAttribute("data-nc-line")+"|"+y.getAttribute("aria-label"):null;if(a.innerHTML=`<div class="nc-drawer__overlay" data-nc-drawer-overlay></div>
  <div class="nc-drawer__panel">
    ${b}${T}</div>`,R){let[E,C]=R.split("|"),L=a.querySelector(`[data-nc-line="${E}"][aria-label="${C}"]`)||a.querySelector(".nc-drawer__close");L&&L.focus({preventScroll:!0})}}function p(){a.classList.contains("is-open")||(l=document.activeElement),a.classList.add("is-open"),a.removeAttribute("inert"),o.classList.add("nc-lock");let g=!navigator.userActivation||navigator.userActivation.hasBeenActive,m=a.querySelector(".nc-drawer__close");g&&requestAnimationFrame(()=>m&&m.focus({preventScroll:!0}))}function v(){a.classList.contains("is-open")&&(a.classList.remove("is-open"),a.setAttribute("inert",""),o.classList.remove("nc-lock"),l&&l.focus&&l.focus({preventScroll:!0}))}a.addEventListener("click",g=>{let m=g.target;if(m.closest("[data-nc-cart-close]")){g.preventDefault(),v();return}if(m.closest("[data-nc-drawer-overlay]")){v();return}let h=m.closest("[data-nc-line-qty]");if(h){g.preventDefault(),e.setQty(h.getAttribute("data-nc-line"),parseInt(h.getAttribute("data-nc-line-qty"),10));return}let b=m.closest("[data-nc-terms-btn]");if(b&&b.getAttribute("aria-disabled")==="true"){g.preventDefault();let T=a.querySelector("[data-nc-terms]");T&&T.focus();return}b&&g.preventDefault()}),a.addEventListener("change",g=>{if(!g.target.matches("[data-nc-terms]"))return;c=g.target.checked;let m=a.querySelector("[data-nc-terms-btn]");m&&m.setAttribute("aria-disabled",c?"false":"true")}),document.addEventListener("keydown",g=>{if(g.key==="Escape"&&v(),g.key==="Tab"&&a.classList.contains("is-open")){let m=Array.from(a.querySelectorAll('a[href]:not([tabindex="-1"]), button, input')).filter(T=>T.offsetParent!==null);if(!m.length)return;let h=m[0],b=m[m.length-1];g.shiftKey&&document.activeElement===h?(g.preventDefault(),b.focus()):!g.shiftKey&&document.activeElement===b&&(g.preventDefault(),h.focus())}}),e.on(g=>{g==="cart:add"?(f(),p()):g==="cart:change"?f():g==="cart:open"&&(f(),p())}),f(),new URLSearchParams(location.search).get("open")==="1"&&e.count()===0&&(e.add("skin-oil",1),e.add("day-cream",1))}En("theme-header",So);En("hero",Tc);En("offers",_c);En("theme-trust-bar",Rc);En("deals",Pc);En("theme-shop-tabs",Uc);En("theme-trust",Fc);En("theme-lifestyle",Bc);En("theme-cases",Oc);En("theme-testimonials",kc);En("theme-story",zc);En("theme-footer",Vc);En("theme-cart",Hc);Zc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
