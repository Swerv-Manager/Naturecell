(()=>{var fn="products/",Uc=(i,e)=>Math.round(i*(1-e/100)),qu=[{id:"skin-oil",name:"CBD Hudpleje Olie",strength:"1000 mg",size:"30 ml",eyebrow:"CBD Skin Care",price0:499,pct:25,img:fn+"skin-oil.webp",hires:fn+"skin-oil-hires.webp",hero:!0,badge:"badges/vidunder-olien.svg",nickname:"Vidunder Olien",claim:"Efterlader huden bl\xF8d, velplejet og smuk \u2013 til alle hudtyper.",notes:"CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke."},{id:"day-cream",name:"CBD Dagcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:399,pct:25,img:fn+"day-cream.webp",hires:fn+"day-cream-hires.webp",claim:"Let dagcreme med CBD, aloe vera og sheasm\xF8r til en glat og velplejet hud."},{id:"night-cream",name:"CBD Natcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:449,pct:25,img:fn+"night-cream.webp",hires:fn+"night-cream-bottle-hires.webp",claim:"N\xE6rende natcreme med mandelolie og squalane, der underst\xF8tter hudens naturlige fugt."},{id:"serum",name:"CBD Hyaluronic Serum",size:"30 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:fn+"hyaluron-serum.webp",hires:fn+"hyaluron-serum-hires.webp",claim:"Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk."},{id:"cleansing-gel",name:"CBD Rensegel",size:"100 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:fn+"cleansing-gel.webp",hires:fn+"cleansing-gel-bottle-hires.webp",claim:"Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance."},{id:"body-lotion",name:"CBD Bodylotion",size:"200 ml",eyebrow:"CBD Skin Care",price0:249,pct:25,img:fn+"body-lotion.webp",claim:"Tr\xE6kker hurtigt ind og efterlader kroppen bl\xF8d. Giver intensiv fugtighed til t\xF8r hud."},{id:"shampoo",name:"CBD Shampoo",strength:"750 mg",size:"300 ml",eyebrow:"CBD Hair Care",price0:199,pct:25,img:fn+"shampoo.webp",claim:"Mild shampoo uden un\xF8dvendige ingredienser \u2013 til hele familien."},{id:"komplet-pakken",name:"Komplet Pakken",size:"Rens \xB7 Dag \xB7 Nat \xB7 Olie",eyebrow:"Sampakke",price0:1198,valueLoose:1646,pct:25,img:fn+"startpakke-plus.webp",bundle:!0,badge:"badges/komplet-pakken.svg",contains:["cleansing-gel","day-cream","night-cream","skin-oil"],claim:"Hele rutinen, morgen og aften \u2013 fire produkter i \xE9n pakke."},{id:"all-day-facial",name:"All Day Facial",size:"Rens \xB7 Dag \xB7 Nat",eyebrow:"Sampakke",price0:860,valueLoose:1147,pct:25,img:fn+"all-day-facial.webp",bundle:!0,badge:"badges/all-day-facial.svg",contains:["cleansing-gel","day-cream","night-cream"],claim:"Den daglige ansigtsrutine samlet \u2013 rens, dag og nat."},{id:"lip-balm",name:"CBD Lip Balm",size:"",eyebrow:"Gave",price0:79,pct:0,img:null,gift:!0,claim:"Gratis ved k\xF8b over 699 kr."}],oo=qu.map(i=>({...i,price:Uc(i.price0,i.pct),save:i.price0-Uc(i.price0,i.pct)})),Yr={name:"Black Week",startsAt:"2026-11-23T00:00:00+01:00",endsAt:"2026-11-30T23:59:59+01:00",headlinePct:25,giftThreshold:699,giftId:"lip-balm",giftValue:79,freeShipping:399,code:null};var Qr=[];function pn(i,e){Qr.push([i,e])}var Yu=Date.parse("2026-11-27T10:00:00+01:00"),Qu=performance.now(),Zu={now:()=>Yu+(performance.now()-Qu),end:Date.parse(Yr.endsAt),start:Date.parse(Yr.startsAt)},lo=new Set,di={cart:[]},Ku={get:()=>di,on:i=>(lo.add(i),()=>lo.delete(i)),emit:(i,e)=>lo.forEach(t=>t(i,e,di)),add(i,e=1){let t=di.cart.find(n=>n.id===i);t?t.qty+=e:di.cart.push({id:i,qty:e}),this.emit("cart:add",{id:i,qty:e})},setQty(i,e){let t=di.cart.find(n=>n.id===i);t&&(t.qty=Math.max(0,e),t.qty||di.cart.splice(di.cart.indexOf(t),1),this.emit("cart:change",{id:i}))},count:()=>di.cart.reduce((i,e)=>i+e.qty,0),subtotal:()=>di.cart.reduce((i,e)=>i+e.qty*Fc[e.id].price,0),openCart(){this.emit("cart:open")}},Fc=Object.fromEntries(oo.map(i=>[i.id,i])),Ju={kr:i=>`${Math.round(i).toLocaleString("da-DK")} kr.`,pct:i=>`${Math.round(i)}%`},Nc=document.currentScript&&document.currentScript.src,ju=window.NC_ASSET_BASE||(Nc?new URL("../assets/",Nc).href:"../assets/"),$u=i=>ju+i;function Bc(){let i={store:Ku,clock:Zu,fmt:Ju,products:oo,byId:Fc,campaign:Yr,asset:$u,prefersReducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,isMobile:()=>matchMedia("(max-width: 760px)").matches},e=()=>{let n=0;for(let[r,a]of Qr){let o=document.querySelector(`[data-section="${r}"]`);if(o&&(n++,!o.dataset.ncInit)){o.dataset.ncInit="1";try{a(o,i)}catch(l){console.error(`[section ${r}]`,l)}}}let s=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-in"),s.unobserve(a.target))}),{rootMargin:"0px 0px -8% 0px"});return document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(r=>s.observe(r)),n},t=()=>{if(e()>=Qr.length)return;let n=new MutationObserver(()=>{e()>=Qr.length&&n.disconnect()});n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>n.disconnect(),2e4)};window.NCBW={ctx:i,run:e},window.NC_DEFER_BOOT||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t())}var ws={};try{ws=JSON.parse(sessionStorage.getItem("nc_ps")||"{}")||{}}catch{ws={}}var ed=()=>{try{sessionStorage.setItem("nc_ps",JSON.stringify(ws))}catch{}};function td(i,e){if(ws[i])return e(ws[i]);let t=new Image;t.onload=()=>{let n=t.naturalWidth,s=t.naturalHeight;if(!n||!s)return e(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),d;try{c.drawImage(t,0,0,a,o),d=c.getImageData(0,0,a,o).data}catch{return e(null)}let f=(y,L)=>{let T=(L*a+y)*4;return[d[T],d[T+1],d[T+2],d[T+3]]},m=[f(0,0),f(a-1,0),f(0,o-1),f(a-1,o-1),f(a>>1,0),f(a>>1,o-1),f(0,o>>1),f(a-1,o>>1)],p=[0,1,2,3].map(y=>m.map(L=>L[y]).sort((L,T)=>L-T)[4]),x=p[3]<20,v=a,g=-1,u=o,M=-1;for(let y=0;y<o;y++)for(let L=0;L<a;L++){let T=(y*a+L)*4,P=d[T+3];(x?P>40:P>40&&(Math.abs(d[T]-p[0])>26||Math.abs(d[T+1]-p[1])>26||Math.abs(d[T+2]-p[2])>26))&&(L<v&&(v=L),L>g&&(g=L),y<u&&(u=y),y>M&&(M=y))}if(g<0||g-v<2||M-u<2||(g-v+1)/a>.97&&(M-u+1)/o>.97)return e(null);let E={x0:v/a,x1:(g+1)/a,y0:u/o,y1:(M+1)/o,w:n,h:s};ws[i]=E,ed(),e(E)},t.onerror=()=>e(null),t.src=i}function Oc(i){let e=i._ncPs;if(!e)return;let t=i.clientWidth,n=i.clientHeight;if(!t||!n)return;let s=Math.min(t/e.w,n/e.h),r=e.w*s,a=e.h*s,o=(t-r)/2,l=(n-a)/2,c=o+e.x0*r,d=o+e.x1*r,f=l+e.y0*a,m=l+e.y1*a,p=d-c,x=m-f,v=(c+d)/2,g=1;x>.78*n?g=.78*n/x:x<.52*n&&(g=Math.min(1.6,.52*n/x)),p*g>.78*t&&(g=.78*t/p);let u=t/2-g*v,M=.86*n-g*m;i.style.transform=`translate(${u.toFixed(2)}px,${M.toFixed(2)}px) scale(${g.toFixed(4)})`,i.classList.add("is-placed")}function kc(i){if(!document.createElement("canvas").getContext)return;let e="ResizeObserver"in window?new ResizeObserver(n=>n.forEach(s=>Oc(s.target))):null,t=n=>{if(n._ncPsInit)return;n._ncPsInit=!0;let s=n.currentSrc||n.src;s&&td(s,r=>{r&&(n._ncPs=r,Oc(n),e&&e.observe(n))})};i.querySelectorAll("img.nc-packshot").forEach(n=>{n.complete&&n.naturalWidth?t(n):n.addEventListener("load",()=>t(n),{once:!0})})}function co(i,e){let t=(u,M=i)=>M.querySelector(u),n=(u,M=i)=>Array.from(M.querySelectorAll(u)),s=t("[data-nc-header]"),r=t("[data-nc-mega]"),a=n("[data-nc-mega-toggle]"),o=t("[data-nc-mobilenav]"),l=t("[data-nc-burger]"),c=document.documentElement,d=u=>{r.classList.toggle("is-open",u),a.forEach(M=>M.setAttribute("aria-expanded",u?"true":"false"))};a.forEach(u=>u.addEventListener("click",M=>{M.preventDefault(),d(!r.classList.contains("is-open"))})),document.addEventListener("click",u=>{r.classList.contains("is-open")&&!s.contains(u.target)&&d(!1)}),n("[data-nc-tabs]").forEach(u=>{let M=n("[data-nc-tab]",u),E=n("[data-nc-panel]",u);M.forEach(y=>y.addEventListener("click",()=>{let L=y.getAttribute("data-nc-tab");M.forEach(T=>{T.classList.toggle("is-active",T===y),T.setAttribute("aria-selected",T===y?"true":"false")}),E.forEach(T=>{T.hidden=T.getAttribute("data-nc-panel")!==L})}))});let f=u=>{if(o.classList.toggle("is-open",u),o.setAttribute("aria-hidden",u?"false":"true"),l.setAttribute("aria-expanded",u?"true":"false"),c.classList.toggle("nc-lock",u),u){let M=t(".nc-mobilenav__head [data-nc-close]");M&&M.focus({preventScroll:!0})}};l.addEventListener("click",()=>f(!o.classList.contains("is-open"))),n("[data-nc-close]",o).forEach(u=>u.addEventListener("click",()=>{f(!1),l.focus({preventScroll:!0})})),document.addEventListener("keydown",u=>{u.key==="Escape"&&(r.classList.contains("is-open")&&d(!1),o.classList.contains("is-open")&&(f(!1),l.focus({preventScroll:!0})))});let m=n("[data-nc-cart-count]"),p=()=>{let u=e.store.count();m.forEach(M=>{M.textContent=u,M.classList.toggle("is-empty",u===0)})};e.store.on(u=>{(u==="cart:add"||u==="cart:change")&&p()}),p(),n("[data-nc-cart-open]").forEach(u=>u.addEventListener("click",M=>{M.preventDefault(),e.store.openCart()}));let x=n("[data-nc-fav-count]"),v=()=>{let u=[];try{u=JSON.parse(localStorage.getItem("nc_favs")||"[]")||[]}catch{u=[]}x.forEach(M=>{M.textContent=u.length,M.classList.toggle("is-empty",u.length===0)})};window.addEventListener("nc-favs-changed",v),v();let g=t(".nc-skip-link");g&&!document.getElementById("nc-main")&&g.addEventListener("click",u=>{let M=i.nextElementSibling;M&&(u.preventDefault(),M.hasAttribute("tabindex")||M.setAttribute("tabindex","-1"),M.focus())}),kc(i)}function zc(i,e){let t=!1;return new IntersectionObserver(([s])=>{t=s.isIntersecting,e&&e(t)},{rootMargin:"120px"}).observe(i),()=>t}var Vc=()=>Math.min(window.devicePixelRatio||1,2);var nd=0,Hc=1,id=2;var Kh=1,sd=2,xi=3,Oi=0,Jt=1,Wn=2,si=0,Bi=1,ki=2,Gc=3,Wc=4,gs=5,ei=100,rd=101,ad=102,od=103,ld=104,Ha=200,Br=201,Ga=202,cd=203,zo=204,cs=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,vd=213,xd=214,Vo=0,Ho=1,Go=2,Ws=3,Wo=4,Xo=5,qo=6,Yo=7,Jh=0,yd=1,Md=2,ri=0,bd=1,Sd=2,wd=3,Ad=4,Ed=5,Td=6,_d=7;var jh=300,Xs=301,qs=302,Qo=303,Zo=304,Wa=306,_r=1e3,os=1001,Ko=1002,En=1003,Rd=1004;var Zr=1005;var ti=1006,ho=1007;var ls=1008;var Si=1009,$h=1010,eu=1011,Rr=1012,nc=1013,hs=1014,ni=1015,_n=1016,ic=1017,sc=1018,Ys=1020,tu=35902,nu=1021,iu=1022,qn=1023,su=1024,ru=1025,Vs=1026,Qs=1027,rc=1028,ac=1029,au=1030,oc=1031;var lc=1033,xa=33776,ya=33777,Ma=33778,ba=33779,Jo=35840,jo=35841,$o=35842,el=35843,tl=36196,nl=37492,il=37496,sl=37808,rl=37809,al=37810,ol=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,vl=37821,Sa=36492,xl=36494,yl=36495,ou=36283,Ml=36284,bl=36285,Sl=36286;var wa=2300,wl=2301,uo=2302,Xc=2400,qc=2401,Yc=2402;var Cd=3200,Id=3201;var lu=0,Pd=1,Xn="",mn="srgb",tr="srgb-linear",Xa="linear",dt="srgb";var As=7680;var Qc=519,Ld=512,Dd=513,Ud=514,cu=515,Nd=516,Fd=517,Bd=518,Od=519,Zc=35044;var Kc="300 es",Mi=2e3,Aa=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=1234567,Ar=Math.PI/180,Cr=180/Math.PI;function nr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function cc(i,e){return(i%e+e)%e}function kd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zd(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function Vd(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function Hd(i,e=1){return e-Math.abs(cc(i,e*2)-e)}function Gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qd(i,e){return i+Math.random()*(e-i)}function Yd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(Jc=i);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zd(i){return i*Ar}function Kd(i){return i*Cr}function Jd(i){return(i&i-1)===0&&i!==0}function jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ef(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),m=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*f,l*m,o*c);break;case"YZY":i.set(l*m,o*d,l*f,o*c);break;case"ZXZ":i.set(l*f,l*m,o*d,o*c);break;case"XZX":i.set(o*d,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Or={DEG2RAD:Ar,RAD2DEG:Cr,generateUUID:nr,clamp:Dt,euclideanModulo:cc,mapLinear:kd,inverseLerp:zd,lerp:Er,damp:Vd,pingpong:Hd,smoothstep:Gd,smootherstep:Wd,randInt:Xd,randFloat:qd,randFloatSpread:Yd,seededRandom:Qd,degToRad:Zd,radToDeg:Kd,isPowerOfTwo:Jd,ceilPowerOfTwo:jd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:ef,normalize:sn,denormalize:ks},ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],m=n[2],p=n[5],x=n[8],v=s[0],g=s[3],u=s[6],M=s[1],E=s[4],y=s[7],L=s[2],T=s[5],P=s[8];return r[0]=a*v+o*M+l*L,r[3]=a*g+o*E+l*T,r[6]=a*u+o*y+l*P,r[1]=c*v+d*M+f*L,r[4]=c*g+d*E+f*T,r[7]=c*u+d*y+f*P,r[2]=m*v+p*M+x*L,r[5]=m*g+p*E+x*T,r[8]=m*u+p*y+x*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,m=o*l-d*r,p=c*r-a*l,x=t*f+n*m+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=f*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=m*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fo=new qe;function hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tf(){let i=Ea("canvas");return i.style.display="block",i}var jc={};function Sr(i){i in jc||(jc[i]=!0,console.warn(i))}function nf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function sf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rf(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nt={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?Xa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $c=[.64,.33,.3,.6,.15,.06],eh=[.2126,.7152,.0722],th=[.3127,.329],nh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[tr]:{primaries:$c,whitePoint:th,transfer:Xa,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:eh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:$c,whitePoint:th,transfer:dt,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:eh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});var Es,Al=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Ea("canvas")),Es.width=e.width,Es.height=e.height;let n=Es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ea("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},af=0,Ta=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var of=0,gn=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=os,s=os,r=ti,a=ls,o=qn,l=Si,c=i.DEFAULT_ANISOTROPY,d=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=nr(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=jh;gn.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],m=l[1],p=l[5],x=l[9],v=l[2],g=l[6],u=l[10];if(Math.abs(d-m)<.01&&Math.abs(f-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(p+1)/2,L=(u+1)/2,T=(d+m)/4,P=(f+v)/4,U=(x+g)/4;return E>y&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=P/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=U/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=P/r,s=U/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-x)*(g-x)+(f-v)*(f-v)+(m-d)*(m-d));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(f-v)/M,this.z=(m-d)/M,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},El=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ta(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends El{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tl=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],m=r[a+0],p=r[a+1],x=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=m,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==m||c!==p||d!==x){let g=1-o,u=l*m+c*p+d*x+f*v,M=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){let L=Math.sqrt(E),T=Math.atan2(L,u*M);g=Math.sin(g*T)/L,o=Math.sin(o*T)/L}let y=o*M;if(l=l*g+m*y,c=c*g+p*y,d=d*g+x*y,f=f*g+v*y,g===1-o){let L=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=L,c*=L,d*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a],m=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+d*f+l*p-c*m,e[t+1]=l*x+d*m+c*f-o*p,e[t+2]=c*x+d*p+o*m-l*f,e[t+3]=d*x-o*f-l*m-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),f=o(r/2),m=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=m*d*f+c*p*x,this._y=c*p*f-m*d*x,this._z=c*d*x+m*p*f,this._w=c*d*f-m*p*x;break;case"YXZ":this._x=m*d*f+c*p*x,this._y=c*p*f-m*d*x,this._z=c*d*x-m*p*f,this._w=c*d*f+m*p*x;break;case"ZXY":this._x=m*d*f-c*p*x,this._y=c*p*f+m*d*x,this._z=c*d*x+m*p*f,this._w=c*d*f-m*p*x;break;case"ZYX":this._x=m*d*f-c*p*x,this._y=c*p*f+m*d*x,this._z=c*d*x-m*p*f,this._w=c*d*f+m*p*x;break;case"YZX":this._x=m*d*f+c*p*x,this._y=c*p*f+m*d*x,this._z=c*d*x-m*p*f,this._w=c*d*f-m*p*x;break;case"XZY":this._x=m*d*f-c*p*x,this._y=c*p*f-m*d*x,this._z=c*d*x+m*p*f,this._w=c*d*f+m*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],m=n+o+f;if(m>0){let p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,m=Math.sin(t*d)/c;return this._w=a*f+this._w*m,this._x=n*f+this._x*m,this._y=s*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo=new F,sh=new Vi,wi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Jr.subVectors(this.max,gr),Ts.subVectors(e.a,gr),_s.subVectors(e.b,gr),Rs.subVectors(e.c,gr),Pi.subVectors(_s,Ts),Li.subVectors(Rs,_s),ji.subVectors(Ts,Rs);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ji.y,ji.x,0];return!go(t,Ts,_s,Rs,Jr)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Ts,_s,Rs,Jr))?!1:(jr.crossVectors(Pi,Li),t=[jr.x,jr.y,jr.z],go(t,Ts,_s,Rs,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new F,new F,new F,new F,new F,new F,new F,new F],Vn=new F,Kr=new wi,Ts=new F,_s=new F,Rs=new F,Pi=new F,Li=new F,ji=new F,gr=new F,Jr=new F,jr=new F,$i=new F;function go(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),d=n.dot($i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var lf=new wi,vr=new F,vo=new F,us=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(vo)),this.expandByPoint(vr.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new F,xo=new F,$r=new F,Di=new F,yo=new F,ea=new F,Mo=new F,Ra=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xo.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(xo);let r=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=Di.dot(this.direction),l=-Di.dot($r),c=Di.lengthSq(),d=Math.abs(1-a*a),f,m,p,x;if(d>0)if(f=a*l-o,m=a*o-l,x=r*d,f>=0)if(m>=-x)if(m<=x){let v=1/d;f*=v,m*=v,p=f*(f+a*m+2*o)+m*(a*f+m+2*l)+c}else m=r,f=Math.max(0,-(a*m+o)),p=-f*f+m*(m+2*l)+c;else m=-r,f=Math.max(0,-(a*m+o)),p=-f*f+m*(m+2*l)+c;else m<=-x?(f=Math.max(0,-(-a*r+o)),m=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c):m<=x?(f=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+c):(f=Math.max(0,-(a*r+o)),m=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c);else m=a>0?-r:r,f=Math.max(0,-(a*m+o)),p=-f*f+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xo).addScaledVector($r,m),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(n=(e.min.x-m.x)*c,s=(e.max.x-m.x)*c):(n=(e.max.x-m.x)*c,s=(e.min.x-m.x)*c),d>=0?(r=(e.min.y-m.y)*d,a=(e.max.y-m.y)*d):(r=(e.max.y-m.y)*d,a=(e.min.y-m.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(o=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){yo.subVectors(t,e),ea.subVectors(n,e),Mo.crossVectors(yo,ea);let a=this.direction.dot(Mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);let l=o*this.direction.dot(ea.crossVectors(Di,ea));if(l<0)return null;let c=o*this.direction.dot(yo.cross(Di));if(c<0||l+c>a)return null;let d=-o*Di.dot(Mo);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,a,o,l,c,d,f,m,p,x,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,f,m,p,x,v,g)}set(e,t,n,s,r,a,o,l,c,d,f,m,p,x,v,g){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=m,u[3]=p,u[7]=x,u[11]=v,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),a=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let m=a*d,p=a*f,x=o*d,v=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=m-v*c,t[9]=-o*l,t[2]=v-m*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){let m=l*d,p=l*f,x=c*d,v=c*f;t[0]=m+v*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=p*o-x,t[6]=v+m*o,t[10]=a*l}else if(e.order==="ZXY"){let m=l*d,p=l*f,x=c*d,v=c*f;t[0]=m-v*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*d,t[9]=v-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let m=a*d,p=a*f,x=o*d,v=o*f;t[0]=l*d,t[4]=x*c-p,t[8]=m*c+v,t[1]=l*f,t[5]=v*c+m,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let m=a*l,p=a*c,x=o*l,v=o*c;t[0]=l*d,t[4]=v-m*f,t[8]=x*f+p,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*f+x,t[10]=m-v*f}else if(e.order==="XZY"){let m=a*l,p=a*c,x=o*l,v=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=m*f+v,t[5]=a*d,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*d,t[10]=v*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,hf)}lookAt(e,t,n){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ui.crossVectors(n,wn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ui.crossVectors(n,wn)),Ui.normalize(),ta.crossVectors(wn,Ui),s[0]=Ui.x,s[4]=ta.x,s[8]=wn.x,s[1]=Ui.y,s[5]=ta.y,s[9]=wn.y,s[2]=Ui.z,s[6]=ta.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],m=n[9],p=n[13],x=n[2],v=n[6],g=n[10],u=n[14],M=n[3],E=n[7],y=n[11],L=n[15],T=s[0],P=s[4],U=s[8],S=s[12],b=s[1],D=s[5],z=s[9],k=s[13],G=s[2],K=s[6],q=s[10],se=s[14],O=s[3],ne=s[7],ue=s[11],be=s[15];return r[0]=a*T+o*b+l*G+c*O,r[4]=a*P+o*D+l*K+c*ne,r[8]=a*U+o*z+l*q+c*ue,r[12]=a*S+o*k+l*se+c*be,r[1]=d*T+f*b+m*G+p*O,r[5]=d*P+f*D+m*K+p*ne,r[9]=d*U+f*z+m*q+p*ue,r[13]=d*S+f*k+m*se+p*be,r[2]=x*T+v*b+g*G+u*O,r[6]=x*P+v*D+g*K+u*ne,r[10]=x*U+v*z+g*q+u*ue,r[14]=x*S+v*k+g*se+u*be,r[3]=M*T+E*b+y*G+L*O,r[7]=M*P+E*D+y*K+L*ne,r[11]=M*U+E*z+y*q+L*ue,r[15]=M*S+E*k+y*se+L*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],m=e[10],p=e[14],x=e[3],v=e[7],g=e[11],u=e[15];return x*(+r*l*f-s*c*f-r*o*m+n*c*m+s*o*p-n*l*p)+v*(+t*l*p-t*c*m+r*a*m-s*a*p+s*c*d-r*l*d)+g*(+t*c*f-t*o*p-r*a*f+n*a*p+r*o*d-n*c*d)+u*(-s*o*d-t*l*f+t*o*m+s*a*f-n*a*m+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],m=e[10],p=e[11],x=e[12],v=e[13],g=e[14],u=e[15],M=f*g*c-v*m*c+v*l*p-o*g*p-f*l*u+o*m*u,E=x*m*c-d*g*c-x*l*p+a*g*p+d*l*u-a*m*u,y=d*v*c-x*f*c+x*o*p-a*v*p-d*o*u+a*f*u,L=x*f*l-d*v*l-x*o*m+a*v*m+d*o*g-a*f*g,T=t*M+n*E+s*y+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=M*P,e[1]=(v*m*r-f*g*r-v*s*p+n*g*p+f*s*u-n*m*u)*P,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*u+n*l*u)*P,e[3]=(f*l*r-o*m*r-f*s*c+n*m*c+o*s*p-n*l*p)*P,e[4]=E*P,e[5]=(d*g*r-x*m*r+x*s*p-t*g*p-d*s*u+t*m*u)*P,e[6]=(x*l*r-a*g*r-x*s*c+t*g*c+a*s*u-t*l*u)*P,e[7]=(a*m*r-d*l*r+d*s*c-t*m*c-a*s*p+t*l*p)*P,e[8]=y*P,e[9]=(x*f*r-d*v*r-x*n*p+t*v*p+d*n*u-t*f*u)*P,e[10]=(a*v*r-x*o*r+x*n*c-t*v*c-a*n*u+t*o*u)*P,e[11]=(d*o*r-a*f*r-d*n*c+t*f*c+a*n*p-t*o*p)*P,e[12]=L*P,e[13]=(d*v*s-x*f*s+x*n*m-t*v*m-d*n*g+t*f*g)*P,e[14]=(x*o*s-a*v*s-x*n*l+t*v*l+a*n*g-t*o*g)*P,e[15]=(a*f*s-d*o*s+d*n*l-t*f*l-a*n*m+t*o*m)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,m=r*c,p=r*d,x=r*f,v=a*d,g=a*f,u=o*f,M=l*c,E=l*d,y=l*f,L=n.x,T=n.y,P=n.z;return s[0]=(1-(v+u))*L,s[1]=(p+y)*L,s[2]=(x-E)*L,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(m+u))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(x+E)*P,s[9]=(g-M)*P,s[10]=(1-(m+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Cs.set(s[0],s[1],s[2]).length(),a=Cs.set(s[4],s[5],s[6]).length(),o=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let c=1/r,d=1/a,f=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=d,Hn.elements[5]*=d,Hn.elements[6]*=d,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Mi){let l=this.elements,c=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s),p,x;if(o===Mi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Aa)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mi){let l=this.elements,c=1/(t-e),d=1/(n-s),f=1/(a-r),m=(t+e)*c,p=(n+s)*d,x,v;if(o===Mi)x=(a+r)*f,v=-2*f;else if(o===Aa)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cs=new F,Hn=new ft,cf=new F(0,0,0),hf=new F(1,1,1),Ui=new F,ta=new F,wn=new F,rh=new ft,ah=new Vi,ai=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uf=0,oh=new F,Is=new Vi,mi=new ft,na=new F,xr=new F,df=new F,ff=new Vi,lh=new F(1,0,0),ch=new F(0,1,0),hh=new F(0,0,1),uh={type:"added"},pf={type:"removed"},Ps={type:"childadded",child:null},bo={type:"childremoved",child:null},vn=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ai,n=new Vi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(xr,na,this.up):mi.lookAt(na,xr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(mi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),m=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vn.DEFAULT_UP=new F(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new F,gi=new F,So=new F,vi=new F,Ls=new F,Ds=new F,dh=new F,wo=new F,Ao=new F,Eo=new F,To=new Et,_o=new Et,Ro=new Et,rs=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),gi.subVectors(n,t),So.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(gi),l=Gn.dot(So),c=gi.dot(gi),d=gi.dot(So),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let m=1/f,p=(c*l-o*d)*m,x=(a*d-o*l)*m;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return To.setScalar(0),_o.setScalar(0),Ro.setScalar(0),To.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),gi.subVectors(e,t),Gn.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Gn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,n),Ds.subVectors(r,n),wo.subVectors(e,n);let l=Ls.dot(wo),c=Ds.dot(wo);if(l<=0&&c<=0)return t.copy(n);Ao.subVectors(e,s);let d=Ls.dot(Ao),f=Ds.dot(Ao);if(d>=0&&f<=d)return t.copy(s);let m=l*f-d*c;if(m<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Ls,a);Eo.subVectors(e,r);let p=Ls.dot(Eo),x=Ds.dot(Eo);if(x>=0&&p<=x)return t.copy(r);let v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ds,o);let g=d*x-p*f;if(g<=0&&f-d>=0&&p-x>=0)return dh.subVectors(r,s),o=(f-d)/(f-d+(p-x)),t.copy(s).addScaledVector(dh,o);let u=1/(g+v+m);return a=v*u,o=m*u,t.copy(n).addScaledVector(Ls,a).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=cc(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Co(a,r,e+1/3),this.g=Co(a,r,e),this.b=Co(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){let n=uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return nt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Dt(Kt.r*255,0,255))*65536+Math.round(Dt(Kt.g*255,0,255))*256+Math.round(Dt(Kt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=mn){nt.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(ia);let n=Er(Ni.h,ia.h,t),s=Er(Ni.s,ia.s,t),r=Er(Ni.l,ia.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Ve;Ve.NAMES=uu;var mf=0,ds=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=nr(),this.name="",this.blending=Bi,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=cs,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==cs&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yn=class extends ds{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new F,sa=new ye,Tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}};var Ca=class extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ia=class extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},gf=0,Fn=new ft,Io=new vn,Us=new F,An=new wi,yr=new wi,kt=new F,jt=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?Ia:Ca)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(An.min,yr.min),An.expandByPoint(kt),kt.addVectors(An.max,yr.max),An.expandByPoint(kt)):(An.expandByPoint(yr.min),An.expandByPoint(yr.max))}An.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)kt.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(e,c),kt.add(Us)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new F,l[U]=new F;let c=new F,d=new F,f=new F,m=new ye,p=new ye,x=new ye,v=new F,g=new F;function u(U,S,b){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),m.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,b),d.sub(c),f.sub(c),p.sub(m),x.sub(m);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(v.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),o[U].add(v),o[S].add(v),o[b].add(v),l[U].add(g),l[S].add(g),l[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,S=M.length;U<S;++U){let b=M[U],D=b.start,z=b.count;for(let k=D,G=D+z;k<G;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new F,y=new F,L=new F,T=new F;function P(U){L.fromBufferAttribute(s,U),T.copy(L);let S=o[U];E.copy(S),E.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(T,S);let D=y.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,D)}for(let U=0,S=M.length;U<S;++U){let b=M[U],D=b.start,z=b.count;for(let k=D,G=D+z;k<G;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let m=0,p=e.count;m<p;m+=3){let x=e.getX(m+0),v=e.getX(m+1),g=e.getX(m+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,f=o.normalized,m=new c.constructor(l.length*d),p=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let u=0;u<d;u++)m[x++]=c[p++]}return new Tn(m,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){let m=c[d],p=e(m,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,m=c.length;f<m;f++){let p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let m=0,p=f.length;m<p;m++)d.push(f[m].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new ft,es=new Ra,ra=new us,ph=new F,aa=new F,oa=new F,la=new F,Po=new F,ca=new F,mh=new F,ha=new F,je=class extends vn{constructor(e=new jt,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],f=r[l];d!==0&&(Po.fromBufferAttribute(f,e),a?ca.addScaledVector(Po,d):ca.addScaledVector(Po.sub(t),d))}t.add(ca)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(ra.containsPoint(es.origin)===!1&&(es.intersectSphere(ra,ph)===null||es.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(r).invert(),es.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=m.length;x<v;x++){let g=m[x],u=a[g.materialIndex],M=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,L=E;y<L;y+=3){let T=o.getX(y),P=o.getX(y+1),U=o.getX(y+2);s=ua(this,u,e,n,c,d,f,T,P,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=x,u=v;g<u;g+=3){let M=o.getX(g),E=o.getX(g+1),y=o.getX(g+2);s=ua(this,a,e,n,c,d,f,M,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=m.length;x<v;x++){let g=m[x],u=a[g.materialIndex],M=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=M,L=E;y<L;y+=3){let T=y,P=y+1,U=y+2;s=ua(this,u,e,n,c,d,f,T,P,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=x,u=v;g<u;g+=3){let M=g,E=g+1,y=g+2;s=ua(this,a,e,n,c,d,f,M,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function vf(i,e,t,n,s,r,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;ha.copy(o),ha.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:i}}function ua(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,aa),i.getVertexPosition(l,oa),i.getVertexPosition(c,la);let d=vf(i,e,t,n,aa,oa,la,mh);if(d){let f=new F;rs.getBarycoord(mh,aa,oa,la,f),s&&(d.uv=rs.getInterpolatedAttribute(s,o,l,c,f,new ye)),r&&(d.uv1=rs.getInterpolatedAttribute(r,o,l,c,f,new ye)),a&&(d.normal=rs.getInterpolatedAttribute(a,o,l,c,f,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new F,materialIndex:0};rs.getNormal(aa,oa,la,m.normal),d.face=m,d.barycoord=f}return d}var fs=class i extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],f=[],m=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function x(v,g,u,M,E,y,L,T,P,U,S){let b=y/P,D=L/U,z=y/2,k=L/2,G=T/2,K=P+1,q=U+1,se=0,O=0,ne=new F;for(let ue=0;ue<q;ue++){let be=ue*D-k;for(let ke=0;ke<K;ke++){let et=ke*b-z;ne[v]=et*M,ne[g]=be*E,ne[u]=G,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[g]=0,ne[u]=T>0?1:-1,d.push(ne.x,ne.y,ne.z),f.push(ke/P),f.push(1-ue/U),se+=1}}for(let ue=0;ue<U;ue++)for(let be=0;be<P;be++){let ke=m+be+K*ue,et=m+be+K*(ue+1),j=m+(be+1)+K*(ue+1),re=m+(be+1)+K*ue;l.push(ke,et,re),l.push(et,j,re),O+=6}o.addGroup(p,O,S),p+=O,m+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function xf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var ir={clone:Zs,merge:rn},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends ds{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pa=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fi=new F,gh=new ye,vh=new ye,an=class extends Pa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,gh,vh),t.subVectors(vh,gh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Fs=1,_l=class extends vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Ns,Fs,e,t);s.layers=this.layers,this.add(s);let r=new an(Ns,Fs,e,t);r.layers=this.layers,this.add(r);let a=new an(Ns,Fs,e,t);a.layers=this.layers,this.add(a);let o=new an(Ns,Fs,e,t);o.layers=this.layers,this.add(o);let l=new an(Ns,Fs,e,t);l.layers=this.layers,this.add(l);let c=new an(Ns,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(f,m,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},La=class extends gn{constructor(e,t,n,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rl=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new La(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fs(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:si});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===ls&&(t.minFilter=ti),new _l(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Lo=new F,bf=new F,Sf=new qe,yi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Lo.subVectors(n,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sf.getNormalMatrix(e),s=this.coplanarPoint(Lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new us,da=new F,Pr=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],f=s[6],m=s[7],p=s[8],x=s[9],v=s[10],g=s[11],u=s[12],M=s[13],E=s[14],y=s[15];if(n[0].setComponents(l-r,m-c,g-p,y-u).normalize(),n[1].setComponents(l+r,m+c,g+p,y+u).normalize(),n[2].setComponents(l+a,m+d,g+x,y+M).normalize(),n[3].setComponents(l-a,m-d,g-x,y-M).normalize(),n[4].setComponents(l-o,m-f,g-v,y-E).normalize(),t===Mi)n[5].setComponents(l+o,m+f,g+v,y+E).normalize();else if(t===Aa)n[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wf(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,f=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((p,x)=>p.start-x.start);let m=0;for(let p=1;p<f.length;p++){let x=f[m],v=f[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++m,f[m]=v)}f.length=m+1;for(let p=0,x=f.length;p<x;p++){let v=f[p];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ai=class i extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,f=e/o,m=t/l,p=[],x=[],v=[],g=[];for(let u=0;u<d;u++){let M=u*m-a;for(let E=0;E<c;E++){let y=E*f-r;x.push(y,-M,0),v.push(0,0,1),g.push(E/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<o;M++){let E=M+c*u,y=M+c*(u+1),L=M+1+c*(u+1),T=M+1+c*u;p.push(E,y,T),p.push(y,L,T)}this.setIndex(p),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
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
#endif`,Df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Of=`#ifdef USE_BUMPMAP
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yf=`#define PI 3.141592653589793
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
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,wp=`
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Pm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,zm=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Km=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,tg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Af,alphahash_pars_fragment:Ef,alphamap_fragment:Tf,alphamap_pars_fragment:_f,alphatest_fragment:Rf,alphatest_pars_fragment:Cf,aomap_fragment:If,aomap_pars_fragment:Pf,batching_pars_vertex:Lf,batching_vertex:Df,begin_vertex:Uf,beginnormal_vertex:Nf,bsdfs:Ff,iridescence_fragment:Bf,bumpmap_pars_fragment:Of,clipping_planes_fragment:kf,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Hf,color_fragment:Gf,color_pars_fragment:Wf,color_pars_vertex:Xf,color_vertex:qf,common:Yf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Kf,displacementmap_vertex:Jf,emissivemap_fragment:jf,emissivemap_pars_fragment:$f,colorspace_fragment:ep,colorspace_pars_fragment:tp,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:vp,lights_toon_pars_fragment:xp,lights_phong_fragment:yp,lights_phong_pars_fragment:Mp,lights_physical_fragment:bp,lights_physical_pars_fragment:Sp,lights_fragment_begin:wp,lights_fragment_maps:Ap,lights_fragment_end:Ep,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Ip,map_pars_fragment:Pp,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Np,morphinstance_vertex:Fp,morphcolor_vertex:Bp,morphnormal_vertex:Op,morphtarget_pars_vertex:kp,morphtarget_vertex:zp,normal_fragment_begin:Vp,normal_fragment_maps:Hp,normal_pars_fragment:Gp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Kp,opaque_fragment:Jp,packing:jp,premultiplied_alpha_fragment:$p,project_vertex:em,dithering_fragment:tm,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:om,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:vm,transmission_pars_fragment:xm,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:bm,worldpos_vertex:Sm,background_vert:wm,background_frag:Am,backgroundCube_vert:Em,backgroundCube_frag:Tm,cube_vert:_m,cube_frag:Rm,depth_vert:Cm,depth_frag:Im,distanceRGBA_vert:Pm,distanceRGBA_frag:Lm,equirect_vert:Dm,equirect_frag:Um,linedashed_vert:Nm,linedashed_frag:Fm,meshbasic_vert:Bm,meshbasic_frag:Om,meshlambert_vert:km,meshlambert_frag:zm,meshmatcap_vert:Vm,meshmatcap_frag:Hm,meshnormal_vert:Gm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:Ym,meshphysical_frag:Qm,meshtoon_vert:Zm,meshtoon_frag:Km,points_vert:Jm,points_frag:jm,shadow_vert:$m,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},$n={basic:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:rn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:rn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:rn([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:rn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:rn([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:rn([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:rn([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:rn([me.lights,me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};$n.physical={uniforms:rn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var fa={r:0,b:0,g:0},ns=new ai,ig=new ft;function sg(i,e,t,n,s,r,a){let o=new Ve(0),l=r===!0?0:1,c,d,f=null,m=0,p=null;function x(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?t:e).get(E)),E}function v(M){let E=!1,y=x(M);y===null?u(o,l):y&&y.isColor&&(u(y,1),E=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,E){let y=x(E);y&&(y.isCubeTexture||y.mapping===Wa)?(d===void 0&&(d=new je(new fs(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Zs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ns.copy(E.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ns)),d.material.toneMapped=nt.getTransfer(y.colorSpace)!==dt,(f!==y||m!==y.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=y,m=y.version,p=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new je(new Ai(2,2),new xt({name:"BackgroundMaterial",uniforms:Zs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||m!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,m=y.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,E){M.getRGB(fa,du(i)),n.buffers.color.setClear(fa.r,fa.g,fa.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(o,l)},render:v,addToRenderList:g}}function rg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,a=!1;function o(b,D,z,k,G){let K=!1,q=f(k,z,D);r!==q&&(r=q,c(r.object)),K=p(b,k,z,G),K&&x(b,k,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(b,D,z,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function f(b,D,z){let k=z.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let K=G[D.id];K===void 0&&(K={},G[D.id]=K);let q=K[k];return q===void 0&&(q=m(l()),K[k]=q),q}function m(b){let D=[],z=[],k=[];for(let G=0;G<t;G++)D[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,D,z,k){let G=r.attributes,K=D.attributes,q=0,se=z.getAttributes();for(let O in se)if(se[O].location>=0){let ue=G[O],be=K[O];if(be===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),ue===void 0||ue.attribute!==be||be&&ue.data!==be.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function x(b,D,z,k){let G={},K=D.attributes,q=0,se=z.getAttributes();for(let O in se)if(se[O].location>=0){let ue=K[O];ue===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));let be={};be.attribute=ue,ue&&ue.data&&(be.data=ue.data),G[O]=be,q++}r.attributes=G,r.attributesNum=q,r.index=k}function v(){let b=r.newAttributes;for(let D=0,z=b.length;D<z;D++)b[D]=0}function g(b){u(b,0)}function u(b,D){let z=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;z[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),G[b]!==D&&(i.vertexAttribDivisor(b,D),G[b]=D)}function M(){let b=r.newAttributes,D=r.enabledAttributes;for(let z=0,k=D.length;z<k;z++)D[z]!==b[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function E(b,D,z,k,G,K,q){q===!0?i.vertexAttribIPointer(b,D,z,G,K):i.vertexAttribPointer(b,D,z,k,G,K)}function y(b,D,z,k){v();let G=k.attributes,K=z.getAttributes(),q=D.defaultAttributeValues;for(let se in K){let O=K[se];if(O.location>=0){let ne=G[se];if(ne===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){let ue=ne.normalized,be=ne.itemSize,ke=e.get(ne);if(ke===void 0)continue;let et=ke.buffer,j=ke.type,re=ke.bytesPerElement,Ae=j===i.INT||j===i.UNSIGNED_INT||ne.gpuType===nc;if(ne.isInterleavedBufferAttribute){let he=ne.data,Ie=he.stride,Be=ne.offset;if(he.isInstancedInterleavedBuffer){for(let He=0;He<O.locationSize;He++)u(O.location+He,he.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let He=0;He<O.locationSize;He++)g(O.location+He);i.bindBuffer(i.ARRAY_BUFFER,et);for(let He=0;He<O.locationSize;He++)E(O.location+He,be/O.locationSize,j,ue,Ie*re,(Be+be/O.locationSize*He)*re,Ae)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<O.locationSize;he++)u(O.location+he,ne.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<O.locationSize;he++)g(O.location+he);i.bindBuffer(i.ARRAY_BUFFER,et);for(let he=0;he<O.locationSize;he++)E(O.location+he,be/O.locationSize,j,ue,be*re,be/O.locationSize*he*re,Ae)}}else if(q!==void 0){let ue=q[se];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(O.location,ue);break;case 3:i.vertexAttrib3fv(O.location,ue);break;case 4:i.vertexAttrib4fv(O.location,ue);break;default:i.vertexAttrib1fv(O.location,ue)}}}}M()}function L(){U();for(let b in n){let D=n[b];for(let z in D){let k=D[z];for(let G in k)d(k[G].object),delete k[G];delete D[z]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let D=n[b.id];for(let z in D){let k=D[z];for(let G in k)d(k[G].object),delete k[G];delete D[z]}delete n[b.id]}function P(b){for(let D in n){let z=n[D];if(z[b.id]===void 0)continue;let k=z[b.id];for(let G in k)d(k[G].object),delete k[G];delete z[b.id]}}function U(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function ag(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let x=0;x<f;x++)p+=d[x];t.update(p,n,1)}function l(c,d,f,m){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],d[x],m[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,m,0,f);let x=0;for(let v=0;v<f;v++)x+=d[v]*m[v];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function og(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==qn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Si&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ni&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:L,maxSamples:T}}function lg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yi,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let p=f.length!==0||m||n!==0||s;return s=m,n=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=d(f,m,0)},this.setState=function(f,m,p){let x=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?d(null):c();else{let M=r?0:n,E=M*4,y=u.clippingState||null;l.value=y,y=d(x,m,E,p);for(let L=0;L!==E;++L)y[L]=t[L];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,m,p,x){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,x!==!0||g===null){let u=p+v*4,M=m.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<u)&&(g=new Float32Array(u));for(let E=0,y=p;E!==v;++E,y+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function cg(i){let e=new WeakMap;function t(a,o){return o===Qo?a.mapping=Xs:o===Zo&&(a.mapping=qs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qo||o===Zo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Rl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ks=class extends Pa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zs=4,xh=[.125,.215,.35,.446,.526,.582],as=20,Do=new Ks,yh=new Ve,Uo=null,No=0,Fo=0,Bo=!1,ss=(1+Math.sqrt(5))/2,Bs=1/ss,Mh=[new F(-ss,Bs,0),new F(ss,Bs,0),new F(-Bs,0,ss),new F(Bs,0,ss),new F(0,ss,-Bs),new F(0,ss,Bs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,No,Fo),this._renderer.xr.enabled=Bo,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:_n,format:qn,colorSpace:tr,depthBuffer:!1},s=bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(r)),this._blurMaterial=ug(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,s){let o=new an(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(yh),d.toneMapping=ri,d.autoClear=!1;let p=new Yn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),x=new je(new fs,p),v=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(yh),v=!0);for(let u=0;u<6;u++){let M=u%3;M===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):M===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let E=this._cubeSize;pa(s,M*E,u>2?E:0,E,E),d.setRenderTarget(s),v&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Do)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mh[(s-r-1)%Mh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,f=new je(this._lodPlanes[s],c),m=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*as-1),v=r/x,g=isFinite(r)?1+Math.floor(d*v):as;g>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);let u=[],M=0;for(let P=0;P<as;++P){let U=P/v,S=Math.exp(-U*U/2);u.push(S),P===0?M+=S:P<g&&(M+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/M;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=u,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);let{_lodMax:E}=this;m.dTheta.value=x,m.mipInt.value=E-n;let y=this._sizeLods[s],L=3*y*(s>E-zs?s-E+zs:0),T=4*(this._cubeSize-y);pa(t,L,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Do)}};function hg(i){let e=[],t=[],n=[],s=i,r=i-zs+1+xh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-zs?l=xh[a-i+zs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),d=-c,f=1+c,m=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,v=3,g=2,u=1,M=new Float32Array(v*x*p),E=new Float32Array(g*x*p),y=new Float32Array(u*x*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,U=T>2?0:-1,S=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];M.set(S,v*x*T),E.set(m,g*x*T);let b=[T,T,T,T,T,T];y.set(b,u*x*T)}let L=new jt;L.setAttribute("position",new Tn(M,v)),L.setAttribute("uv",new Tn(E,g)),L.setAttribute("faceIndex",new Tn(y,u)),e.push(L),s>zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bh(i,e,t){let n=new Wt(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ug(i,e,t){let n=new Float32Array(as),s=new F(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Sh(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function wh(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function dg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Qo||l===Zo,d=l===Xs||l===qs;if(c||d){let f=e.get(o),m=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new Js(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new Js(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pg(i,e,t,n){let s={},r=new WeakMap;function a(f){let m=f.target;m.index!==null&&e.remove(m.index);for(let x in m.attributes)e.remove(m.attributes[x]);for(let x in m.morphAttributes){let v=m.morphAttributes[x];for(let g=0,u=v.length;g<u;g++)e.remove(v[g])}m.removeEventListener("dispose",a),delete s[m.id];let p=r.get(m);p&&(e.remove(p),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(f,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,t.memory.geometries++),m}function l(f){let m=f.attributes;for(let x in m)e.update(m[x],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let x in p){let v=p[x];for(let g=0,u=v.length;g<u;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(f){let m=[],p=f.index,x=f.attributes.position,v=0;if(p!==null){let M=p.array;v=p.version;for(let E=0,y=M.length;E<y;E+=3){let L=M[E+0],T=M[E+1],P=M[E+2];m.push(L,T,T,P,P,L)}}else if(x!==void 0){let M=x.array;v=x.version;for(let E=0,y=M.length/3-1;E<y;E+=3){let L=E+0,T=E+1,P=E+2;m.push(L,T,T,P,P,L)}}else return;let g=new(hu(m)?Ia:Ca)(m,1);g.version=v;let u=r.get(f);u&&e.remove(u),r.set(f,g)}function d(f){let m=r.get(f);if(m){let p=f.index;p!==null&&m.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function mg(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,p){i.drawElements(n,p,r,m*a),t.update(p,n,1)}function c(m,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,m*a,x),t.update(p,n,x))}function d(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,m,0,x);let g=0;for(let u=0;u<x;u++)g+=p[u];t.update(g,n,1)}function f(m,p,x,v){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<m.length;u++)c(m[u]/a,p[u],v[u]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,m,0,v,0,x);let u=0;for(let M=0;M<x;M++)u+=p[M]*v[M];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function gg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vg(i,e,t){let n=new WeakMap,s=new Et;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,m=n.get(o);if(m===void 0||m.count!==f){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;p===!0&&(E=1),x===!0&&(E=2),v===!0&&(E=3);let y=o.attributes.position.count*E,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*L*4*f),P=new _a(T,y,L,f);P.type=ni,P.needsUpdate=!0;let U=E*4;for(let b=0;b<f;b++){let D=g[b],z=u[b],k=M[b],G=y*L*4*b;for(let K=0;K<D.count;K++){let q=K*U;p===!0&&(s.fromBufferAttribute(D,K),T[G+q+0]=s.x,T[G+q+1]=s.y,T[G+q+2]=s.z,T[G+q+3]=0),x===!0&&(s.fromBufferAttribute(z,K),T[G+q+4]=s.x,T[G+q+5]=s.y,T[G+q+6]=s.z,T[G+q+7]=0),v===!0&&(s.fromBufferAttribute(k,K),T[G+q+8]=s.x,T[G+q+9]=s.y,T[G+q+10]=s.z,T[G+q+11]=k.itemSize===4?s.w:1)}}m={count:f,texture:P,size:new ye(y,L)},n.set(o,m),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function xg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Da=class extends gn{constructor(e,t,n,s,r,a,o,l,c,d=Vs){if(d!==Vs&&d!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Vs&&(n=hs),n===void 0&&d===Qs&&(n=Ys),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pu=new gn,Ah=new Da(1,1),mu=new _a,gu=new Tl,vu=new La,Eh=[],Th=[],_h=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qa(i,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Ch.set(n),i.uniformMatrix2fv(this.addr,!1,Ch),Nt(t,n)}}function Ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Rh.set(n),i.uniformMatrix3fv(this.addr,!1,Rh),Nt(t,n)}}function Eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),Nt(t,n)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ah.compareFunction=cu,r=Ah):r=pu,t.setTexture2D(e||r,s)}function Ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gu,s)}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vu,s)}function Bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mu,s)}function Og(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return bg;case 35666:return Sg;case 35674:return wg;case 35675:return Ag;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return _g;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Bg}}function kg(i,e){i.uniform1fv(this.addr,e)}function zg(i,e){let t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vg(i,e){let t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Hg(i,e){let t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Gg(i,e){let t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wg(i,e){let t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xg(i,e){let t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qg(i,e){i.uniform1iv(this.addr,e)}function Yg(i,e){i.uniform2iv(this.addr,e)}function Qg(i,e){i.uniform3iv(this.addr,e)}function Zg(i,e){i.uniform4iv(this.addr,e)}function Kg(i,e){i.uniform1uiv(this.addr,e)}function Jg(i,e){i.uniform2uiv(this.addr,e)}function jg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function e0(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||pu,r[a])}function t0(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gu,r[a])}function n0(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vu,r[a])}function i0(i,e,t){let n=this.cache,s=e.length,r=qa(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mu,r[a])}function s0(i){switch(i){case 5126:return kg;case 35664:return zg;case 35665:return Vg;case 35666:return Hg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Qg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Jg;case 36295:return jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}},Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},Pl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Oo=/(\w+)(\])?(\[|\.)?/g;function Ih(i,e){i.seq.push(e),i.map[e.id]=e}function r0(i,e,t){let n=i.name,s=n.length;for(Oo.lastIndex=0;;){let r=Oo.exec(n),a=Oo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ih(t,c===void 0?new Cl(o,i,e):new Il(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Pl(o),Ih(t,f)),t=f}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);r0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ph(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var a0=37297,o0=0;function l0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Lh=new qe;function c0(i){nt._getMatrix(Lh,nt.workingColorSpace,i);let e=`mat3( ${Lh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Xa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+l0(i.getShaderSource(e),a)}else return s}function h0(i,e){let t=c0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u0(i,e){let t;switch(e){case bd:t="Linear";break;case Sd:t="Reinhard";break;case wd:t="Cineon";break;case Ad:t="ACESFilmic";break;case Td:t="AgX";break;case _d:t="Neutral";break;case Ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ma=new F;function d0(){nt.getLuminanceCoefficients(ma);let i=ma.x.toFixed(4),e=ma.y.toFixed(4),t=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function p0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wr(i){return i!==""}function Uh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(i){return i.replace(g0,x0)}var v0=new Map;function x0(i,e){let t=Ke[e];if(t===void 0){let n=v0.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ll(t)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(i){return i.replace(y0,M0)}function M0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function S0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===qs&&(e="ENVMAP_MODE_REFRACTION"),e}function A0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case yd:e="ENVMAP_BLENDING_MIX";break;case Md:e="ENVMAP_BLENDING_ADD";break}return e}function E0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=b0(t),c=S0(t),d=w0(t),f=A0(t),m=E0(t),p=f0(t),x=p0(r),v=s.createProgram(),g,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wr).join(`
`),u.length>0&&(u+=`
`)):(g=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),u=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ri?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=Ll(a),a=Uh(a,t),a=Nh(a,t),o=Ll(o),o=Uh(o,t),o=Nh(o,t),a=Fh(a),o=Fh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=M+g+a,y=M+u+o,L=Ph(s,s.VERTEX_SHADER,E),T=Ph(s,s.FRAGMENT_SHADER,y);s.attachShader(v,L),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(D){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(T).trim(),K=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,T);else{let se=Dh(s,L,"vertex"),O=Dh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+se+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(q=!1);q&&(D.diagnostics={runnable:K,programLog:z,vertexShader:{log:k,prefix:g},fragmentShader:{log:G,prefix:u}})}s.deleteShader(L),s.deleteShader(T),U=new Gs(s,v),S=m0(s,v)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,a0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}var _0=0,Dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ul(e),t.set(e,n)),n}},Ul=class{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}};function R0(i,e,t,n,s,r,a){let o=new Ir,l=new Dl,c=new Set,d=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,D,z,k){let G=z.fog,K=k.geometry,q=S.isMeshStandardMaterial?z.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),O=se&&se.mapping===Wa?se.image.height:null,ne=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,be=ue!==void 0?ue.length:0,ke=0;K.morphAttributes.position!==void 0&&(ke=1),K.morphAttributes.normal!==void 0&&(ke=2),K.morphAttributes.color!==void 0&&(ke=3);let et,j,re,Ae;if(ne){let Je=$n[ne];et=Je.vertexShader,j=Je.fragmentShader}else et=S.vertexShader,j=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),Ae=l.getFragmentShaderID(S);let he=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Be=k.isInstancedMesh===!0,He=k.isBatchedMesh===!0,ut=!!S.map,We=!!S.matcap,at=!!se,B=!!S.aoMap,Rt=!!S.lightMap,Ye=!!S.bumpMap,Qe=!!S.normalMap,Se=!!S.displacementMap,Ze=!!S.emissiveMap,Ee=!!S.metalnessMap,_=!!S.roughnessMap,w=S.anisotropy>0,H=S.clearcoat>0,ee=S.dispersion>0,$=S.iridescence>0,Y=S.sheen>0,Te=S.transmission>0,fe=w&&!!S.anisotropyMap,ve=H&&!!S.clearcoatMap,Ne=H&&!!S.clearcoatNormalMap,ae=H&&!!S.clearcoatRoughnessMap,Me=$&&!!S.iridescenceMap,we=$&&!!S.iridescenceThicknessMap,Pe=Y&&!!S.sheenColorMap,ge=Y&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,Ge=!!S.specularColorMap,it=!!S.specularIntensityMap,N=Te&&!!S.transmissionMap,de=Te&&!!S.thicknessMap,W=!!S.gradientMap,J=!!S.alphaMap,pe=S.alphaTest>0,ce=!!S.alphaHash,De=!!S.extensions,st=ri;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(st=i.toneMapping);let yt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:j,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:He,batchingColor:He&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:tr,alphaToCoverage:!!S.alphaToCoverage,map:ut,matcap:We,envMap:at,envMapMode:at&&se.mapping,envMapCubeUVHeight:O,aoMap:B,lightMap:Rt,bumpMap:Ye,normalMap:Qe,displacementMap:m&&Se,emissiveMap:Ze,normalMapObjectSpace:Qe&&S.normalMapType===Pd,normalMapTangentSpace:Qe&&S.normalMapType===lu,metalnessMap:Ee,roughnessMap:_,anisotropy:w,anisotropyMap:fe,clearcoat:H,clearcoatMap:ve,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ae,dispersion:ee,iridescence:$,iridescenceMap:Me,iridescenceThicknessMap:we,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:Oe,specularColorMap:Ge,specularIntensityMap:it,transmission:Te,transmissionMap:N,thicknessMap:de,gradientMap:W,opaque:S.transparent===!1&&S.blending===Bi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:ce,combine:S.combine,mapUv:ut&&v(S.map.channel),aoMapUv:B&&v(S.aoMap.channel),lightMapUv:Rt&&v(S.lightMap.channel),bumpMapUv:Ye&&v(S.bumpMap.channel),normalMapUv:Qe&&v(S.normalMap.channel),displacementMapUv:Se&&v(S.displacementMap.channel),emissiveMapUv:Ze&&v(S.emissiveMap.channel),metalnessMapUv:Ee&&v(S.metalnessMap.channel),roughnessMapUv:_&&v(S.roughnessMap.channel),anisotropyMapUv:fe&&v(S.anisotropyMap.channel),clearcoatMapUv:ve&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(S.sheenRoughnessMap.channel),specularMapUv:Oe&&v(S.specularMap.channel),specularColorMapUv:Ge&&v(S.specularColorMap.channel),specularIntensityMapUv:it&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:J&&v(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Qe||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(ut||J),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ie,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:Ze&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function u(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(b,S),E(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let b=x[S.type],D;if(b){let z=$n[b];D=ir.clone(z.uniforms)}else D=S.uniforms;return D}function L(S,b){let D;for(let z=0,k=d.length;z<k;z++){let G=d[z];if(G.cacheKey===b){D=G,++D.usedTimes;break}}return D===void 0&&(D=new T0(i,b,S,r),d.push(D)),D}function T(S){if(--S.usedTimes===0){let b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function P(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:y,acquireProgram:L,releaseProgram:T,releaseShaderCache:P,programs:d,dispose:U}}function C0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,m,p,x,v,g){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:m,material:p,groupOrder:x,renderOrder:f.renderOrder,z:v,group:g},i[e]=u):(u.id=f.id,u.object=f,u.geometry=m,u.material=p,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=v,u.group=g),e++,u}function o(f,m,p,x,v,g){let u=a(f,m,p,x,v,g);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(f,m,p,x,v,g){let u=a(f,m,p,x,v,g);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,m){t.length>1&&t.sort(f||I0),n.length>1&&n.sort(m||Oh),s.length>1&&s.sort(m||Oh)}function d(){for(let f=e,m=i.length;f<m;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function P0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new kh,i.set(n,[a])):s>=r.length?(a=new kh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function L0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function D0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var U0=0;function N0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function F0(i){let e=new L0,t=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new ft,a=new ft;function o(c){let d=0,f=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,v=0,g=0,u=0,M=0,E=0,y=0,L=0,T=0,P=0;c.sort(N0);for(let S=0,b=c.length;S<b;S++){let D=c[S],z=D.color,k=D.intensity,G=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*k,f+=z.g*k,m+=z.b*k;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],k);P++}else if(D.isDirectionalLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,O=t.get(D);O.shadowIntensity=se.intensity,O.shadowBias=se.bias,O.shadowNormalBias=se.normalBias,O.shadowRadius=se.radius,O.shadowMapSize=se.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=q,p++}else if(D.isSpotLight){let q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(z).multiplyScalar(k),q.distance=G,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[v]=q;let se=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,se.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[v]=se.matrix,D.castShadow){let O=t.get(D);O.shadowIntensity=se.intensity,O.shadowBias=se.bias,O.shadowNormalBias=se.normalBias,O.shadowRadius=se.radius,O.shadowMapSize=se.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=K,y++}v++}else if(D.isRectAreaLight){let q=e.get(D);q.color.copy(z).multiplyScalar(k),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=q,g++}else if(D.isPointLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let se=D.shadow,O=t.get(D);O.shadowIntensity=se.intensity,O.shadowBias=se.bias,O.shadowNormalBias=se.normalBias,O.shadowRadius=se.radius,O.shadowMapSize=se.mapSize,O.shadowCameraNear=se.camera.near,O.shadowCameraFar=se.camera.far,n.pointShadow[x]=O,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=D.shadow.matrix,E++}n.point[x]=q,x++}else if(D.isHemisphereLight){let q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(k),q.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[u]=q,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;let U=n.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==v||U.rectAreaLength!==g||U.hemiLength!==u||U.numDirectionalShadows!==M||U.numPointShadows!==E||U.numSpotShadows!==y||U.numSpotMaps!==L||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,U.directionalLength=p,U.pointLength=x,U.spotLength=v,U.rectAreaLength=g,U.hemiLength=u,U.numDirectionalShadows=M,U.numPointShadows=E,U.numSpotShadows=y,U.numSpotMaps=L,U.numLightProbes=P,n.version=U0++)}function l(c,d){let f=0,m=0,p=0,x=0,v=0,g=d.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){let E=c[u];if(E.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(E.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(E.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let y=n.point[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),m++}else if(E.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function zh(i){let e=new F0(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function B0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zh(i),e.set(s,[o])):r>=a.length?(o=new zh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Nl=class extends ds{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends ds{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function z0(i,e,t){let n=new Pr,s=new ye,r=new ye,a=new Et,o=new Nl({depthPacking:Id}),l=new Fl,c={},d=t.maxTextureSize,f={[Oi]:Jt,[Jt]:Oi,[Wn]:Wn},m=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:O0,fragmentShader:k0}),p=m.clone();p.defines.HORIZONTAL_PASS=1;let x=new jt;x.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new je(x,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let u=this.type;this.render=function(T,P,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(si),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=u!==xi&&this.type===xi,G=u===xi&&this.type!==xi;for(let K=0,q=T.length;K<q;K++){let se=T[K],O=se.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let ne=O.getFrameExtents();if(s.multiply(ne),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,O.mapSize.y=r.y)),O.map===null||k===!0||G===!0){let be=this.type!==xi?{minFilter:En,magFilter:En}:{};O.map!==null&&O.map.dispose(),O.map=new Wt(s.x,s.y,be),O.map.texture.name=se.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let ue=O.getViewportCount();for(let be=0;be<ue;be++){let ke=O.getViewport(be);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),z.viewport(a),O.updateMatrices(se,be),n=O.getFrustum(),y(P,U,O.camera,se,this.type)}O.isPointLightShadow!==!0&&this.type===xi&&M(O,U),O.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,D)};function M(T,P){let U=e.update(v);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wt(s.x,s.y)),m.uniforms.shadow_pass.value=T.map.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,U,m,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,U,p,v,null)}function E(T,P,U,S){let b=null,D=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let z=b.uuid,k=P.uuid,G=c[z];G===void 0&&(G={},c[z]=G);let K=G[k];K===void 0&&(K=b.clone(),G[k]=K,P.addEventListener("dispose",L)),b=K}if(b.visible=P.visible,b.wireframe=P.wireframe,S===xi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:f[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=i.properties.get(b);z.light=U}return b}function y(T,P,U,S,b){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let k=e.update(T),G=T.material;if(Array.isArray(G)){let K=k.groups;for(let q=0,se=K.length;q<se;q++){let O=K[q],ne=G[O.materialIndex];if(ne&&ne.visible){let ue=E(T,ne,S,b);T.onBeforeShadow(i,T,P,U,k,ue,O),i.renderBufferDirect(U,null,k,ue,T,O),T.onAfterShadow(i,T,P,U,k,ue,O)}}}else if(G.visible){let K=E(T,G,S,b);T.onBeforeShadow(i,T,P,U,k,K,null),i.renderBufferDirect(U,null,k,K,T,null),T.onAfterShadow(i,T,P,U,k,K,null)}}let z=T.children;for(let k=0,G=z.length;k<G;k++)y(z[k],P,U,S,b)}function L(T){T.target.removeEventListener("dispose",L);for(let U in c){let S=c[U],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var V0={[Vo]:Ho,[Go]:qo,[Wo]:Yo,[Ws]:Xo,[Ho]:Vo,[qo]:Go,[Yo]:Wo,[Xo]:Ws};function H0(i,e){function t(){let N=!1,de=new Et,W=null,J=new Et(0,0,0,0);return{setMask:function(pe){W!==pe&&!N&&(i.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){N=pe},setClear:function(pe,ce,De,st,yt){yt===!0&&(pe*=st,ce*=st,De*=st),de.set(pe,ce,De,st),J.equals(de)===!1&&(i.clearColor(pe,ce,De,st),J.copy(de))},reset:function(){N=!1,W=null,J.set(-1,0,0,0)}}}function n(){let N=!1,de=!1,W=null,J=null,pe=null;return{setReversed:function(ce){if(de!==ce){let De=e.get("EXT_clip_control");de?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);let st=pe;pe=null,this.setClear(st)}de=ce},getReversed:function(){return de},setTest:function(ce){ce?he(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(ce){W!==ce&&!N&&(i.depthMask(ce),W=ce)},setFunc:function(ce){if(de&&(ce=V0[ce]),J!==ce){switch(ce){case Vo:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ce}},setLocked:function(ce){N=ce},setClear:function(ce){pe!==ce&&(de&&(ce=1-ce),i.clearDepth(ce),pe=ce)},reset:function(){N=!1,W=null,J=null,pe=null,de=!1}}}function s(){let N=!1,de=null,W=null,J=null,pe=null,ce=null,De=null,st=null,yt=null;return{setTest:function(Je){N||(Je?he(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Je){de!==Je&&!N&&(i.stencilMask(Je),de=Je)},setFunc:function(Je,Xt,Ft){(W!==Je||J!==Xt||pe!==Ft)&&(i.stencilFunc(Je,Xt,Ft),W=Je,J=Xt,pe=Ft)},setOp:function(Je,Xt,Ft){(ce!==Je||De!==Xt||st!==Ft)&&(i.stencilOp(Je,Xt,Ft),ce=Je,De=Xt,st=Ft)},setLocked:function(Je){N=Je},setClear:function(Je){yt!==Je&&(i.clearStencil(Je),yt=Je)},reset:function(){N=!1,de=null,W=null,J=null,pe=null,ce=null,De=null,st=null,yt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},f={},m=new WeakMap,p=[],x=null,v=!1,g=null,u=null,M=null,E=null,y=null,L=null,T=null,P=new Ve(0,0,0),U=0,S=!1,b=null,D=null,z=null,k=null,G=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,se=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=se>=1):O.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=se>=2);let ne=null,ue={},be=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),et=new Et().fromArray(be),j=new Et().fromArray(ke);function re(N,de,W,J){let pe=new Uint8Array(4),ce=i.createTexture();i.bindTexture(N,ce),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<W;De++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(de+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return ce}let Ae={};Ae[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Ws),Ye(!1),Qe(Hc),he(i.CULL_FACE),B(si);function he(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Ie(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Be(N,de){return f[N]!==de?(i.bindFramebuffer(N,de),f[N]=de,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de),!0):!1}function He(N,de){let W=p,J=!1;if(N){W=m.get(de),W===void 0&&(W=[],m.set(de,W));let pe=N.textures;if(W.length!==pe.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,De=pe.length;ce<De;ce++)W[ce]=i.COLOR_ATTACHMENT0+ce;W.length=pe.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function ut(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let We={[ei]:i.FUNC_ADD,[rd]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};We[od]=i.MIN,We[ld]=i.MAX;let at={[Ha]:i.ZERO,[Br]:i.ONE,[Ga]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[dd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[cs]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[xd]:i.ONE_MINUS_CONSTANT_ALPHA};function B(N,de,W,J,pe,ce,De,st,yt,Je){if(N===si){v===!0&&(Ie(i.BLEND),v=!1);return}if(v===!1&&(he(i.BLEND),v=!0),N!==gs){if(N!==g||Je!==S){if((u!==ei||y!==ei)&&(i.blendEquation(i.FUNC_ADD),u=ei,y=ei),Je)switch(N){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,E=null,L=null,T=null,P.set(0,0,0),U=0,g=N,S=Je}return}pe=pe||de,ce=ce||W,De=De||J,(de!==u||pe!==y)&&(i.blendEquationSeparate(We[de],We[pe]),u=de,y=pe),(W!==M||J!==E||ce!==L||De!==T)&&(i.blendFuncSeparate(at[W],at[J],at[ce],at[De]),M=W,E=J,L=ce,T=De),(st.equals(P)===!1||yt!==U)&&(i.blendColor(st.r,st.g,st.b,yt),P.copy(st),U=yt),g=N,S=!1}function Rt(N,de){N.side===Wn?Ie(i.CULL_FACE):he(i.CULL_FACE);let W=N.side===Jt;de&&(W=!W),Ye(W),N.blending===Bi&&N.transparent===!1?B(si):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function Qe(N){N!==nd?(he(i.CULL_FACE),N!==D&&(N===Hc?i.cullFace(i.BACK):N===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),D=N}function Se(N){N!==z&&(q&&i.lineWidth(N),z=N)}function Ze(N,de,W){N?(he(i.POLYGON_OFFSET_FILL),(k!==de||G!==W)&&(i.polygonOffset(de,W),k=de,G=W)):Ie(i.POLYGON_OFFSET_FILL)}function Ee(N){N?he(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function _(N){N===void 0&&(N=i.TEXTURE0+K-1),ne!==N&&(i.activeTexture(N),ne=N)}function w(N,de,W){W===void 0&&(ne===null?W=i.TEXTURE0+K-1:W=ne);let J=ue[W];J===void 0&&(J={type:void 0,texture:void 0},ue[W]=J),(J.type!==N||J.texture!==de)&&(ne!==W&&(i.activeTexture(W),ne=W),i.bindTexture(N,de||Ae[N]),J.type=N,J.texture=de)}function H(){let N=ue[ne];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){et.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),et.copy(N))}function ge(N){j.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function Oe(N,de){let W=c.get(de);W===void 0&&(W=new WeakMap,c.set(de,W));let J=W.get(N);J===void 0&&(J=i.getUniformBlockIndex(de,N.name),W.set(N,J))}function Ge(N,de){let J=c.get(de).get(N);l.get(de)!==J&&(i.uniformBlockBinding(de,J,N.__bindingPointIndex),l.set(de,J))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,ue={},f={},m=new WeakMap,p=[],x=null,v=!1,g=null,u=null,M=null,E=null,y=null,L=null,T=null,P=new Ve(0,0,0),U=0,S=!1,b=null,D=null,z=null,k=null,G=null,et.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Ie,bindFramebuffer:Be,drawBuffers:He,useProgram:ut,setBlending:B,setMaterial:Rt,setFlipSided:Ye,setCullFace:Qe,setLineWidth:Se,setPolygonOffset:Ze,setScissorTest:Ee,activeTexture:_,bindTexture:w,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:$,texImage2D:Me,texImage3D:we,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:Ne,texStorage3D:ae,texSubImage2D:Y,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Pe,viewport:ge,reset:it}}function Vh(i,e,t,n){let s=G0(n);switch(t){case nu:return i*e;case su:return i*e;case ru:return i*e*2;case rc:return i*e/s.components*s.byteLength;case ac:return i*e/s.components*s.byteLength;case au:return i*e*2/s.components*s.byteLength;case oc:return i*e*2/s.components*s.byteLength;case iu:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case lc:return i*e*4/s.components*s.byteLength;case xa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:case el:return Math.max(i,16)*Math.max(e,8)/4;case Jo:case $o:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sa:case xl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ou:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bl:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(i){switch(i){case Si:case $h:return{byteLength:1,components:1};case Rr:case eu:case _n:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case hs:case nc:case ni:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function W0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,d=new WeakMap,f,m=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(_,w){return p?new OffscreenCanvas(_,w):Ea("canvas")}function v(_,w,H){let ee=1,$=Ee(_);if(($.width>H||$.height>H)&&(ee=H/Math.max($.width,$.height)),ee<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let Y=Math.floor(ee*$.width),Te=Math.floor(ee*$.height);f===void 0&&(f=x(Y,Te));let fe=w?x(Y,Te):f;return fe.width=Y,fe.height=Te,fe.getContext("2d").drawImage(_,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+Te+")."),fe}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),_;return _}function g(_){return _.generateMipmaps}function u(_){i.generateMipmap(_)}function M(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(_,w,H,ee,$=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let Y=w;if(w===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),w===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),w===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),w===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),w===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),w===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),w===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),w===i.RGBA){let Te=$?Xa:nt.getTransfer(ee);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=Te===dt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(_,w){let H;return _?w===null||w===hs||w===Ys?H=i.DEPTH24_STENCIL8:w===ni?H=i.DEPTH32F_STENCIL8:w===Rr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===hs||w===Ys?H=i.DEPTH_COMPONENT24:w===ni?H=i.DEPTH_COMPONENT32F:w===Rr&&(H=i.DEPTH_COMPONENT16),H}function L(_,w){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==En&&_.minFilter!==ti?Math.log2(Math.max(w.width,w.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?w.mipmaps.length:1}function T(_){let w=_.target;w.removeEventListener("dispose",T),U(w),w.isVideoTexture&&d.delete(w)}function P(_){let w=_.target;w.removeEventListener("dispose",P),b(w)}function U(_){let w=n.get(_);if(w.__webglInit===void 0)return;let H=_.source,ee=m.get(H);if(ee){let $=ee[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(_),Object.keys(ee).length===0&&m.delete(H)}n.remove(_)}function S(_){let w=n.get(_);i.deleteTexture(w.__webglTexture);let H=_.source,ee=m.get(H);delete ee[w.__cacheKey],a.memory.textures--}function b(_){let w=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let $=0;$<w.__webglFramebuffer[ee].length;$++)i.deleteFramebuffer(w.__webglFramebuffer[ee][$]);else i.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)i.deleteFramebuffer(w.__webglFramebuffer[ee]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=_.textures;for(let ee=0,$=H.length;ee<$;ee++){let Y=n.get(H[ee]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(H[ee])}n.remove(_)}let D=0;function z(){D=0}function k(){let _=D;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),D+=1,_}function G(_){let w=[];return w.push(_.wrapS),w.push(_.wrapT),w.push(_.wrapR||0),w.push(_.magFilter),w.push(_.minFilter),w.push(_.anisotropy),w.push(_.internalFormat),w.push(_.format),w.push(_.type),w.push(_.generateMipmaps),w.push(_.premultiplyAlpha),w.push(_.flipY),w.push(_.unpackAlignment),w.push(_.colorSpace),w.join()}function K(_,w){let H=n.get(_);if(_.isVideoTexture&&Se(_),_.isRenderTargetTexture===!1&&_.version>0&&H.__version!==_.version){let ee=_.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,_,w);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+w)}function q(_,w){let H=n.get(_);if(_.version>0&&H.__version!==_.version){j(H,_,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+w)}function se(_,w){let H=n.get(_);if(_.version>0&&H.__version!==_.version){j(H,_,w);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+w)}function O(_,w){let H=n.get(_);if(_.version>0&&H.__version!==_.version){re(H,_,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+w)}let ne={[_r]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},ue={[En]:i.NEAREST,[Rd]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},be={[Ld]:i.NEVER,[Od]:i.ALWAYS,[Dd]:i.LESS,[cu]:i.LEQUAL,[Ud]:i.EQUAL,[Bd]:i.GEQUAL,[Nd]:i.GREATER,[Fd]:i.NOTEQUAL};function ke(_,w){if(w.type===ni&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ti||w.magFilter===ho||w.magFilter===Zr||w.magFilter===ls||w.minFilter===ti||w.minFilter===ho||w.minFilter===Zr||w.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,ne[w.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,ne[w.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,ne[w.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,ue[w.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,ue[w.minFilter]),w.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===En||w.minFilter!==Zr&&w.minFilter!==ls||w.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function et(_,w){let H=!1;_.__webglInit===void 0&&(_.__webglInit=!0,w.addEventListener("dispose",T));let ee=w.source,$=m.get(ee);$===void 0&&($={},m.set(ee,$));let Y=G(w);if(Y!==_.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[Y].usedTimes++;let Te=$[_.__cacheKey];Te!==void 0&&($[_.__cacheKey].usedTimes--,Te.usedTimes===0&&S(w)),_.__cacheKey=Y,_.__webglTexture=$[Y].texture}return H}function j(_,w,H){let ee=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=i.TEXTURE_3D);let $=et(_,w),Y=w.source;t.bindTexture(ee,_.__webglTexture,i.TEXTURE0+H);let Te=n.get(Y);if(Y.version!==Te.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let fe=nt.getPrimaries(nt.workingColorSpace),ve=w.colorSpace===Xn?null:nt.getPrimaries(w.colorSpace),Ne=w.colorSpace===Xn||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ae=v(w.image,!1,s.maxTextureSize);ae=Ze(w,ae);let Me=r.convert(w.format,w.colorSpace),we=r.convert(w.type),Pe=E(w.internalFormat,Me,we,w.colorSpace,w.isVideoTexture);ke(ee,w);let ge,Oe=w.mipmaps,Ge=w.isVideoTexture!==!0,it=Te.__version===void 0||$===!0,N=Y.dataReady,de=L(w,ae);if(w.isDepthTexture)Pe=y(w.format===Qs,w.type),it&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Pe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,Me,we,null));else if(w.isDataTexture)if(Oe.length>0){Ge&&it&&t.texStorage2D(i.TEXTURE_2D,de,Pe,Oe[0].width,Oe[0].height);for(let W=0,J=Oe.length;W<J;W++)ge=Oe[W],Ge?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge.width,ge.height,Me,we,ge.data):t.texImage2D(i.TEXTURE_2D,W,Pe,ge.width,ge.height,0,Me,we,ge.data);w.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(i.TEXTURE_2D,de,Pe,ae.width,ae.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,we,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,Me,we,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Pe,Oe[0].width,Oe[0].height,ae.depth);for(let W=0,J=Oe.length;W<J;W++)if(ge=Oe[W],w.format!==qn)if(Me!==null)if(Ge){if(N)if(w.layerUpdates.size>0){let pe=Vh(ge.width,ge.height,w.format,w.type);for(let ce of w.layerUpdates){let De=ge.data.subarray(ce*pe/ge.data.BYTES_PER_ELEMENT,(ce+1)*pe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ce,ge.width,ge.height,1,Me,De)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,ae.depth,Me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Pe,ge.width,ge.height,ae.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,ae.depth,Me,we,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Pe,ge.width,ge.height,ae.depth,0,Me,we,ge.data)}else{Ge&&it&&t.texStorage2D(i.TEXTURE_2D,de,Pe,Oe[0].width,Oe[0].height);for(let W=0,J=Oe.length;W<J;W++)ge=Oe[W],w.format!==qn?Me!==null?Ge?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ge.width,ge.height,Me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge.width,ge.height,Me,we,ge.data):t.texImage2D(i.TEXTURE_2D,W,Pe,ge.width,ge.height,0,Me,we,ge.data)}else if(w.isDataArrayTexture)if(Ge){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Pe,ae.width,ae.height,ae.depth),N)if(w.layerUpdates.size>0){let W=Vh(ae.width,ae.height,w.format,w.type);for(let J of w.layerUpdates){let pe=ae.data.subarray(J*W/ae.data.BYTES_PER_ELEMENT,(J+1)*W/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,Me,we,pe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,we,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ae.width,ae.height,ae.depth,0,Me,we,ae.data);else if(w.isData3DTexture)Ge?(it&&t.texStorage3D(i.TEXTURE_3D,de,Pe,ae.width,ae.height,ae.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,we,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ae.width,ae.height,ae.depth,0,Me,we,ae.data);else if(w.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(i.TEXTURE_2D,de,Pe,ae.width,ae.height);else{let W=ae.width,J=ae.height;for(let pe=0;pe<de;pe++)t.texImage2D(i.TEXTURE_2D,pe,Pe,W,J,0,Me,we,null),W>>=1,J>>=1}}else if(Oe.length>0){if(Ge&&it){let W=Ee(Oe[0]);t.texStorage2D(i.TEXTURE_2D,de,Pe,W.width,W.height)}for(let W=0,J=Oe.length;W<J;W++)ge=Oe[W],Ge?N&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Me,we,ge):t.texImage2D(i.TEXTURE_2D,W,Pe,Me,we,ge);w.generateMipmaps=!1}else if(Ge){if(it){let W=Ee(ae);t.texStorage2D(i.TEXTURE_2D,de,Pe,W.width,W.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,we,ae)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Me,we,ae);g(w)&&u(ee),Te.__version=Y.version,w.onUpdate&&w.onUpdate(w)}_.__version=w.version}function re(_,w,H){if(w.image.length!==6)return;let ee=et(_,w),$=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+H);let Y=n.get($);if($.version!==Y.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);let Te=nt.getPrimaries(nt.workingColorSpace),fe=w.colorSpace===Xn?null:nt.getPrimaries(w.colorSpace),ve=w.colorSpace===Xn||Te===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ne=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Me=[];for(let J=0;J<6;J++)!Ne&&!ae?Me[J]=v(w.image[J],!0,s.maxCubemapSize):Me[J]=ae?w.image[J].image:w.image[J],Me[J]=Ze(w,Me[J]);let we=Me[0],Pe=r.convert(w.format,w.colorSpace),ge=r.convert(w.type),Oe=E(w.internalFormat,Pe,ge,w.colorSpace),Ge=w.isVideoTexture!==!0,it=Y.__version===void 0||ee===!0,N=$.dataReady,de=L(w,we);ke(i.TEXTURE_CUBE_MAP,w);let W;if(Ne){Ge&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,we.width,we.height);for(let J=0;J<6;J++){W=Me[J].mipmaps;for(let pe=0;pe<W.length;pe++){let ce=W[pe];w.format!==qn?Pe!==null?Ge?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,ce.width,ce.height,Pe,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Oe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,ce.width,ce.height,Pe,ge,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Oe,ce.width,ce.height,0,Pe,ge,ce.data)}}}else{if(W=w.mipmaps,Ge&&it){W.length>0&&de++;let J=Ee(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,J.width,J.height)}for(let J=0;J<6;J++)if(ae){Ge?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Me[J].width,Me[J].height,Pe,ge,Me[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,Me[J].width,Me[J].height,0,Pe,ge,Me[J].data);for(let pe=0;pe<W.length;pe++){let De=W[pe].image[J].image;Ge?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,De.width,De.height,Pe,ge,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Oe,De.width,De.height,0,Pe,ge,De.data)}}else{Ge?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,ge,Me[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,Pe,ge,Me[J]);for(let pe=0;pe<W.length;pe++){let ce=W[pe];Ge?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Pe,ge,ce.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Oe,Pe,ge,ce.image[J])}}}g(w)&&u(i.TEXTURE_CUBE_MAP),Y.__version=$.version,w.onUpdate&&w.onUpdate(w)}_.__version=w.version}function Ae(_,w,H,ee,$,Y){let Te=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),ve=E(H.internalFormat,Te,fe,H.colorSpace),Ne=n.get(w),ae=n.get(H);if(ae.__renderTarget=w,!Ne.__hasExternalTextures){let Me=Math.max(1,w.width>>Y),we=Math.max(1,w.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Y,ve,Me,we,w.depth,0,Te,fe,null):t.texImage2D($,Y,ve,Me,we,0,Te,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,ae.__webglTexture,0,Ye(w)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,ae.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(_,w,H){if(i.bindRenderbuffer(i.RENDERBUFFER,_),w.depthBuffer){let ee=w.depthTexture,$=ee&&ee.isDepthTexture?ee.type:null,Y=y(w.stencilBuffer,$),Te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=Ye(w);Qe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Y,w.width,w.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Y,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Y,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,_)}else{let ee=w.textures;for(let $=0;$<ee.length;$++){let Y=ee[$],Te=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),ve=E(Y.internalFormat,Te,fe,Y.colorSpace),Ne=Ye(w);H&&Qe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ve,w.width,w.height):Qe(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,ve,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ve,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(_,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);let $=ee.__webglTexture,Y=Ye(w);if(w.depthTexture.format===Vs)Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(w.depthTexture.format===Qs)Qe(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Be(_){let w=n.get(_),H=_.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==_.depthTexture){let ee=_.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){let $=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",$)};ee.addEventListener("dispose",$),w.__depthDisposeCallback=$}w.__boundDepthTexture=ee}if(_.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,_)}else if(H){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=i.createRenderbuffer(),he(w.__webglDepthbuffer[ee],_,!1);else{let $=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),he(w.__webglDepthbuffer,_,!1);else{let ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(_,w,H){let ee=n.get(_);w!==void 0&&Ae(ee.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Be(_)}function ut(_){let w=_.texture,H=n.get(_),ee=n.get(w);_.addEventListener("dispose",P);let $=_.textures,Y=_.isWebGLCubeRenderTarget===!0,Te=$.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=w.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let ve=0;ve<w.mipmaps.length;ve++)H.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else H.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)H.__webglFramebuffer[fe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Te)for(let fe=0,ve=$.length;fe<ve;fe++){let Ne=n.get($[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&Qe(_)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<$.length;fe++){let ve=$[fe];H.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);let Ne=r.convert(ve.format,ve.colorSpace),ae=r.convert(ve.type),Me=E(ve.internalFormat,Ne,ae,ve.colorSpace,_.isXRRenderTarget===!0),we=Ye(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Me,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),he(H.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ke(i.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ae(H.__webglFramebuffer[fe][ve],_,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Ae(H.__webglFramebuffer[fe],_,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(w)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,ve=$.length;fe<ve;fe++){let Ne=$[fe],ae=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),ke(i.TEXTURE_2D,Ne),Ae(H.__webglFramebuffer,_,Ne,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),g(Ne)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(fe=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ee.__webglTexture),ke(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ae(H.__webglFramebuffer[ve],_,w,i.COLOR_ATTACHMENT0,fe,ve);else Ae(H.__webglFramebuffer,_,w,i.COLOR_ATTACHMENT0,fe,0);g(w)&&u(fe),t.unbindTexture()}_.depthBuffer&&Be(_)}function We(_){let w=_.textures;for(let H=0,ee=w.length;H<ee;H++){let $=w[H];if(g($)){let Y=M(_),Te=n.get($).__webglTexture;t.bindTexture(Y,Te),u(Y),t.unbindTexture()}}}let at=[],B=[];function Rt(_){if(_.samples>0){if(Qe(_)===!1){let w=_.textures,H=_.width,ee=_.height,$=i.COLOR_BUFFER_BIT,Y=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(_),fe=w.length>1;if(fe)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){if(_.resolveDepthBuffer&&(_.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let Ne=n.get(w[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,H,ee,0,0,H,ee,$,i.NEAREST),l===!0&&(at.length=0,B.length=0,at.push(i.COLOR_ATTACHMENT0+ve),_.depthBuffer&&_.resolveDepthBuffer===!1&&(at.push(Y),B.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let Ne=n.get(w[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let w=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ye(_){return Math.min(s.maxSamples,_.samples)}function Qe(_){let w=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Se(_){let w=a.render.frame;d.get(_)!==w&&(d.set(_,w),_.update())}function Ze(_,w){let H=_.colorSpace,ee=_.format,$=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||H!==tr&&H!==Xn&&(nt.getTransfer(H)===dt?(ee!==qn||$!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Ee(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=O,this.rebindTextures=He,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Qe}function X0(i,e){function t(n,s=Xn){let r,a=nt.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return i.BYTE;if(n===eu)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===hs)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===qn)return i.RGBA;if(n===su)return i.LUMINANCE;if(n===ru)return i.LUMINANCE_ALPHA;if(n===Vs)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===au)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===xa||n===ya||n===Ma||n===ba)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===jo||n===$o||n===el)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===nl)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===xl||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===Ml||n===bl||n===Sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bl=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ii=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},q0={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),u=this._getHandJoint(c,v);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=d.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&m>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q0=`
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

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new gn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xt({vertexShader:Y0,fragmentShader:Q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kl=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,m=null,p=null,x=null,v=new Ol,g=t.getContextAttributes(),u=null,M=null,E=[],y=[],L=new ye,T=null,P=new an;P.viewport=new Et;let U=new an;U.viewport=new Et;let S=[P,U],b=new Bl,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=E[j];return re===void 0&&(re=new Tr,E[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=E[j];return re===void 0&&(re=new Tr,E[j]=re),re.getGripSpace()},this.getHand=function(j){let re=E[j];return re===void 0&&(re=new Tr,E[j]=re),re.getHandSpace()};function k(j){let re=y.indexOf(j.inputSource);if(re===-1)return;let Ae=E[re];Ae!==void 0&&(Ae.update(j.inputSource,j.frame,c||a),Ae.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let j=0;j<E.length;j++){let re=y[j];re!==null&&(y[j]=null,E[j].disconnect(re))}D=null,z=null,v.reset(),e.setRenderTarget(u),p=null,m=null,f=null,s=null,M=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Wt(p.framebufferWidth,p.framebufferHeight,{format:qn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,Ae=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?Qs:Vs,Ae=g.stencil?Ys:hs);let Ie={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=new XRWebGLBinding(s,t),m=f.createProjectionLayer(Ie),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),M=new Wt(m.textureWidth,m.textureHeight,{format:qn,type:Si,depthTexture:new Da(m.textureWidth,m.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(j){for(let re=0;re<j.removed.length;re++){let Ae=j.removed[re],he=y.indexOf(Ae);he>=0&&(y[he]=null,E[he].disconnect(Ae))}for(let re=0;re<j.added.length;re++){let Ae=j.added[re],he=y.indexOf(Ae);if(he===-1){for(let Be=0;Be<E.length;Be++)if(Be>=y.length){y.push(Ae),he=Be;break}else if(y[Be]===null){y[Be]=Ae,he=Be;break}if(he===-1)break}let Ie=E[he];Ie&&Ie.connect(Ae)}}let q=new F,se=new F;function O(j,re,Ae){q.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(Ae.matrixWorld);let he=q.distanceTo(se),Ie=re.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,He=Ie[14]/(Ie[10]-1),ut=Ie[14]/(Ie[10]+1),We=(Ie[9]+1)/Ie[5],at=(Ie[9]-1)/Ie[5],B=(Ie[8]-1)/Ie[0],Rt=(Be[8]+1)/Be[0],Ye=He*B,Qe=He*Rt,Se=he/(-B+Rt),Ze=Se*-B;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ze),j.translateZ(Se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Ee=He+Se,_=ut+Se,w=Ye-Ze,H=Qe+(he-Ze),ee=We*ut/_*Ee,$=at*ut/_*Ee;j.projectionMatrix.makePerspective(w,H,ee,$,Ee,_),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let re=j.near,Ae=j.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),b.near=U.near=P.near=re,b.far=U.far=P.far=Ae,(D!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,z=b.far),P.layers.mask=j.layers.mask|2,U.layers.mask=j.layers.mask|4,b.layers.mask=P.layers.mask|U.layers.mask;let he=j.parent,Ie=b.cameras;ne(b,he);for(let Be=0;Be<Ie.length;Be++)ne(Ie[Be],he);Ie.length===2?O(b,P,U):b.projectionMatrix.copy(P.projectionMatrix),ue(j,b,he)};function ue(j,re,Ae){Ae===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(Ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Cr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(j){l=j,m!==null&&(m.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let be=null;function ke(j,re){if(d=re.getViewerPose(c||a),x=re,d!==null){let Ae=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let he=!1;Ae.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Be=0;Be<Ae.length;Be++){let He=Ae[Be],ut=null;if(p!==null)ut=p.getViewport(He);else{let at=f.getViewSubImage(m,He);ut=at.viewport,Be===0&&(e.setRenderTargetTextures(M,at.colorTexture,m.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(M))}let We=S[Be];We===void 0&&(We=new an,We.layers.enable(Be),We.viewport=new Et,S[Be]=We),We.matrix.fromArray(He.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(He.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),Be===0&&(b.matrix.copy(We.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(We)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Be=f.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,s.renderState)}}for(let Ae=0;Ae<E.length;Ae++){let he=y[Ae],Ie=E[Ae];he!==null&&Ie!==void 0&&Ie.update(he,re,c||a)}be&&be(j,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),x=null}let et=new fu;et.setAnimationLoop(ke),this.setAnimationLoop=function(j){be=j},this.dispose=function(){}}},is=new ai,Z0=new ft;function K0(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,du(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,M,E,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),f(g,u)):u.isMeshPhongMaterial?(r(g,u),d(g,u)):u.isMeshStandardMaterial?(r(g,u),m(g,u),u.isMeshPhysicalMaterial&&p(g,u,y)):u.isMeshMatcapMaterial?(r(g,u),x(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),v(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,M,E):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Jt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Jt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let M=e.get(u),E=M.envMap,y=M.envMapRotation;E&&(g.envMap.value=E,is.copy(y),is.x*=-1,is.y*=-1,is.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),g.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(is)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,M,E){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*M,g.scale.value=E*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function m(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,M){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Jt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function v(g,u){let M=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let y=E.program;n.uniformBlockBinding(M,y)}function c(M,E){let y=s[M.id];y===void 0&&(x(M),y=d(M),s[M.id]=y,M.addEventListener("dispose",g));let L=E.program;n.updateUBOMapping(M,L);let T=e.render.frame;r[M.id]!==T&&(m(M),r[M.id]=T)}function d(M){let E=f();M.__bindingPointIndex=E;let y=i.createBuffer(),L=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){let E=s[M.id],y=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,P=y.length;T<P;T++){let U=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,b=U.length;S<b;S++){let D=U[S];if(p(D,T,S,L)===!0){let z=D.__offset,k=Array.isArray(D.value)?D.value:[D.value],G=0;for(let K=0;K<k.length;K++){let q=k[K],se=v(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,z+G,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,G),G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,E,y,L){let T=M.value,P=E+"_"+y;if(L[P]===void 0)return typeof T=="number"||typeof T=="boolean"?L[P]=T:L[P]=T.clone(),!0;{let U=L[P];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return L[P]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function x(M){let E=M.uniforms,y=0,L=16;for(let P=0,U=E.length;P<U;P++){let S=Array.isArray(E[P])?E[P]:[E[P]];for(let b=0,D=S.length;b<D;b++){let z=S[b],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=k.length;G<K;G++){let q=k[G],se=v(q),O=y%L,ne=O%se.boundary,ue=O+ne;y+=ne,ue!==0&&L-ue<se.storage&&(y+=L-ue),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=se.storage}}}let T=y%L;return T>0&&(y+=L-T),M.__size=y,M.__cache={},this}function v(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function g(M){let E=M.target;E.removeEventListener("dispose",g);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Ua=class{constructor(e={}){let{canvas:t=tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=new Uint32Array(4),v=new Int32Array(4),g=null,u=null,M=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=ri,this.toneMappingExposure=1;let y=this,L=!1,T=0,P=0,U=null,S=-1,b=null,D=new Et,z=new Et,k=null,G=new Ve(0),K=0,q=t.width,se=t.height,O=1,ne=null,ue=null,be=new Et(0,0,q,se),ke=new Et(0,0,q,se),et=!1,j=new Pr,re=!1,Ae=!1,he=new ft,Ie=new ft,Be=new F,He=new Et,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function at(){return U===null?O:1}let B=n;function Rt(h,A){return t.getContext(h,A)}try{let h={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),B===null){let A="webgl2";if(B=Rt(A,h),B===null)throw Rt(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Ye,Qe,Se,Ze,Ee,_,w,H,ee,$,Y,Te,fe,ve,Ne,ae,Me,we,Pe,ge,Oe,Ge,it,N;function de(){Ye=new fg(B),Ye.init(),Ge=new X0(B,Ye),Qe=new og(B,Ye,e,Ge),Se=new H0(B,Ye),Qe.reverseDepthBuffer&&m&&Se.buffers.depth.setReversed(!0),Ze=new gg(B),Ee=new C0,_=new W0(B,Ye,Se,Ee,Qe,Ge,Ze),w=new cg(y),H=new dg(y),ee=new wf(B),it=new rg(B,ee),$=new pg(B,ee,Ze,it),Y=new xg(B,$,ee,Ze),Pe=new vg(B,Qe,_),ae=new lg(Ee),Te=new R0(y,w,H,Ye,Qe,it,ae),fe=new K0(y,Ee),ve=new P0,Ne=new B0(Ye),we=new sg(y,w,H,Se,Y,p,l),Me=new z0(y,Y,Qe),N=new J0(B,Ze,Qe,Se),ge=new ag(B,Ye,Ze),Oe=new mg(B,Ye,Ze),Ze.programs=Te.programs,y.capabilities=Qe,y.extensions=Ye,y.properties=Ee,y.renderLists=ve,y.shadowMap=Me,y.state=Se,y.info=Ze}de();let W=new kl(y,B);this.xr=W,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let h=Ye.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=Ye.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(h){h!==void 0&&(O=h,this.setSize(q,se,!1))},this.getSize=function(h){return h.set(q,se)},this.setSize=function(h,A,R=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=h,se=A,t.width=Math.floor(h*O),t.height=Math.floor(A*O),R===!0&&(t.style.width=h+"px",t.style.height=A+"px"),this.setViewport(0,0,h,A)},this.getDrawingBufferSize=function(h){return h.set(q*O,se*O).floor()},this.setDrawingBufferSize=function(h,A,R){q=h,se=A,O=R,t.width=Math.floor(h*R),t.height=Math.floor(A*R),this.setViewport(0,0,h,A)},this.getCurrentViewport=function(h){return h.copy(D)},this.getViewport=function(h){return h.copy(be)},this.setViewport=function(h,A,R,I){h.isVector4?be.set(h.x,h.y,h.z,h.w):be.set(h,A,R,I),Se.viewport(D.copy(be).multiplyScalar(O).round())},this.getScissor=function(h){return h.copy(ke)},this.setScissor=function(h,A,R,I){h.isVector4?ke.set(h.x,h.y,h.z,h.w):ke.set(h,A,R,I),Se.scissor(z.copy(ke).multiplyScalar(O).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(h){Se.setScissorTest(et=h)},this.setOpaqueSort=function(h){ne=h},this.setTransparentSort=function(h){ue=h},this.getClearColor=function(h){return h.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(h=!0,A=!0,R=!0){let I=0;if(h){let C=!1;if(U!==null){let Q=U.texture.format;C=Q===lc||Q===oc||Q===ac}if(C){let Q=U.texture.type,V=Q===Si||Q===hs||Q===Rr||Q===Ys||Q===ic||Q===sc,te=we.getClearColor(),X=we.getClearAlpha(),oe=te.r,Ce=te.g,Z=te.b;V?(x[0]=oe,x[1]=Ce,x[2]=Z,x[3]=X,B.clearBufferuiv(B.COLOR,0,x)):(v[0]=oe,v[1]=Ce,v[2]=Z,v[3]=X,B.clearBufferiv(B.COLOR,0,v))}else I|=B.COLOR_BUFFER_BIT}A&&(I|=B.DEPTH_BUFFER_BIT),R&&(I|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ve.dispose(),Ne.dispose(),Ee.dispose(),w.dispose(),H.dispose(),Y.dispose(),it.dispose(),N.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",Gi),W.removeEventListener("sessionend",$t),qt.stop()};function J(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let h=Ze.autoReset,A=Me.enabled,R=Me.autoUpdate,I=Me.needsUpdate,C=Me.type;de(),Ze.autoReset=h,Me.enabled=A,Me.autoUpdate=R,Me.needsUpdate=I,Me.type=C}function ce(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function De(h){let A=h.target;A.removeEventListener("dispose",De),st(A)}function st(h){yt(h),Ee.remove(h)}function yt(h){let A=Ee.get(h).programs;A!==void 0&&(A.forEach(function(R){Te.releaseProgram(R)}),h.isShaderMaterial&&Te.releaseShaderCache(h))}this.renderBufferDirect=function(h,A,R,I,C,Q){A===null&&(A=ut);let V=C.isMesh&&C.matrixWorld.determinant()<0,te=wt(h,A,R,I,C);Se.setMaterial(I,V);let X=R.index,oe=1;if(I.wireframe===!0){if(X=$.getWireframeAttribute(R),X===void 0)return;oe=2}let Ce=R.drawRange,Z=R.attributes.position,xe=Ce.start*oe,ze=(Ce.start+Ce.count)*oe;Q!==null&&(xe=Math.max(xe,Q.start*oe),ze=Math.min(ze,(Q.start+Q.count)*oe)),X!==null?(xe=Math.max(xe,0),ze=Math.min(ze,X.count)):Z!=null&&(xe=Math.max(xe,0),ze=Math.min(ze,Z.count));let Le=ze-xe;if(Le<0||Le===1/0)return;it.setup(C,I,te,R,X);let Mt,Xe=ge;if(X!==null&&(Mt=ee.get(X),Xe=Oe,Xe.setIndex(Mt)),C.isMesh)I.wireframe===!0?(Se.setLineWidth(I.wireframeLinewidth*at()),Xe.setMode(B.LINES)):Xe.setMode(B.TRIANGLES);else if(C.isLine){let _e=I.linewidth;_e===void 0&&(_e=1),Se.setLineWidth(_e*at()),C.isLineSegments?Xe.setMode(B.LINES):C.isLineLoop?Xe.setMode(B.LINE_LOOP):Xe.setMode(B.LINE_STRIP)}else C.isPoints?Xe.setMode(B.POINTS):C.isSprite&&Xe.setMode(B.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)Xe.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Xe.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{let _e=C._multiDrawStarts,Ot=C._multiDrawCounts,Fe=C._multiDrawCount,Ue=X?ee.get(X).bytesPerElement:1,In=Ee.get(I).currentProgram.getUniforms();for(let _t=0;_t<Fe;_t++)In.setValue(B,"_gl_DrawID",_t),Xe.render(_e[_t]/Ue,Ot[_t])}else if(C.isInstancedMesh)Xe.renderInstances(xe,Le,C.count);else if(R.isInstancedBufferGeometry){let _e=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Ot=Math.min(R.instanceCount,_e);Xe.renderInstances(xe,Le,Ot)}else Xe.render(xe,Le)};function Je(h,A,R){h.transparent===!0&&h.side===Wn&&h.forceSinglePass===!1?(h.side=Jt,h.needsUpdate=!0,zt(h,A,R),h.side=Oi,h.needsUpdate=!0,zt(h,A,R),h.side=Wn):zt(h,A,R)}this.compile=function(h,A,R=null){R===null&&(R=h),u=Ne.get(R),u.init(A),E.push(u),R.traverseVisible(function(C){C.isLight&&C.layers.test(A.layers)&&(u.pushLight(C),C.castShadow&&u.pushShadow(C))}),h!==R&&h.traverseVisible(function(C){C.isLight&&C.layers.test(A.layers)&&(u.pushLight(C),C.castShadow&&u.pushShadow(C))}),u.setupLights();let I=new Set;return h.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;let Q=C.material;if(Q)if(Array.isArray(Q))for(let V=0;V<Q.length;V++){let te=Q[V];Je(te,R,C),I.add(te)}else Je(Q,R,C),I.add(Q)}),E.pop(),u=null,I},this.compileAsync=function(h,A,R=null){let I=this.compile(h,A,R);return new Promise(C=>{function Q(){if(I.forEach(function(V){Ee.get(V).currentProgram.isReady()&&I.delete(V)}),I.size===0){C(h);return}setTimeout(Q,10)}Ye.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Xt=null;function Ft(h){Xt&&Xt(h)}function Gi(){qt.stop()}function $t(){qt.start()}let qt=new fu;qt.setAnimationLoop(Ft),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(h){Xt=h,W.setAnimationLoop(h),h===null?qt.stop():qt.start()},W.addEventListener("sessionstart",Gi),W.addEventListener("sessionend",$t),this.render=function(h,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(A),A=W.getCamera()),h.isScene===!0&&h.onBeforeRender(y,h,A,U),u=Ne.get(h,E.length),u.init(A),E.push(u),Ie.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),j.setFromProjectionMatrix(Ie),Ae=this.localClippingEnabled,re=ae.init(this.clippingPlanes,Ae),g=ve.get(h,M.length),g.init(),M.push(g),W.enabled===!0&&W.isPresenting===!0){let Q=y.xr.getDepthSensingMesh();Q!==null&&Ti(Q,A,-1/0,y.sortObjects)}Ti(h,A,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ne,ue),We=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,We&&we.addToRenderList(g,h),this.info.render.frame++,re===!0&&ae.beginShadows();let R=u.state.shadowsArray;Me.render(R,h,A),re===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let I=g.opaque,C=g.transmissive;if(u.setupLights(),A.isArrayCamera){let Q=A.cameras;if(C.length>0)for(let V=0,te=Q.length;V<te;V++){let X=Q[V];Bt(I,C,h,X)}We&&we.render(h);for(let V=0,te=Q.length;V<te;V++){let X=Q[V];Wi(g,h,X,X.viewport)}}else C.length>0&&Bt(I,C,h,A),We&&we.render(h),Wi(g,h,A);U!==null&&(_.updateMultisampleRenderTarget(U),_.updateRenderTargetMipmap(U)),h.isScene===!0&&h.onAfterRender(y,h,A),it.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(u=E[E.length-1],re===!0&&ae.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ti(h,A,R,I){if(h.visible===!1)return;if(h.layers.test(A.layers)){if(h.isGroup)R=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(A);else if(h.isLight)u.pushLight(h),h.castShadow&&u.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||j.intersectsSprite(h)){I&&He.setFromMatrixPosition(h.matrixWorld).applyMatrix4(Ie);let V=Y.update(h),te=h.material;te.visible&&g.push(h,V,te,R,He.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||j.intersectsObject(h))){let V=Y.update(h),te=h.material;if(I&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),He.copy(h.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),He.copy(V.boundingSphere.center)),He.applyMatrix4(h.matrixWorld).applyMatrix4(Ie)),Array.isArray(te)){let X=V.groups;for(let oe=0,Ce=X.length;oe<Ce;oe++){let Z=X[oe],xe=te[Z.materialIndex];xe&&xe.visible&&g.push(h,V,xe,R,He.z,Z)}}else te.visible&&g.push(h,V,te,R,He.z,null)}}let Q=h.children;for(let V=0,te=Q.length;V<te;V++)Ti(Q[V],A,R,I)}function Wi(h,A,R,I){let C=h.opaque,Q=h.transmissive,V=h.transparent;u.setupLightsView(R),re===!0&&ae.setGlobalState(y.clippingPlanes,R),I&&Se.viewport(D.copy(I)),C.length>0&&gt(C,A,R),Q.length>0&&gt(Q,A,R),V.length>0&&gt(V,A,R),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Bt(h,A,R,I){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[I.id]===void 0&&(u.state.transmissionRenderTarget[I.id]=new Wt(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?_n:Si,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let Q=u.state.transmissionRenderTarget[I.id],V=I.viewport||D;Q.setSize(V.z,V.w);let te=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(G),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),We&&we.render(R);let X=y.toneMapping;y.toneMapping=ri;let oe=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),u.setupLightsView(I),re===!0&&ae.setGlobalState(y.clippingPlanes,I),gt(h,R,I),_.updateMultisampleRenderTarget(Q),_.updateRenderTargetMipmap(Q),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Z=0,xe=A.length;Z<xe;Z++){let ze=A[Z],Le=ze.object,Mt=ze.geometry,Xe=ze.material,_e=ze.group;if(Xe.side===Wn&&Le.layers.test(I.layers)){let Ot=Xe.side;Xe.side=Jt,Xe.needsUpdate=!0,lt(Le,R,I,Mt,Xe,_e),Xe.side=Ot,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(_.updateMultisampleRenderTarget(Q),_.updateRenderTargetMipmap(Q))}y.setRenderTarget(te),y.setClearColor(G,K),oe!==void 0&&(I.viewport=oe),y.toneMapping=X}function gt(h,A,R){let I=A.isScene===!0?A.overrideMaterial:null;for(let C=0,Q=h.length;C<Q;C++){let V=h[C],te=V.object,X=V.geometry,oe=I===null?V.material:I,Ce=V.group;te.layers.test(R.layers)&&lt(te,A,R,X,oe,Ce)}}function lt(h,A,R,I,C,Q){h.onBeforeRender(y,A,R,I,C,Q),h.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),C.onBeforeRender(y,A,R,I,h,Q),C.transparent===!0&&C.side===Wn&&C.forceSinglePass===!1?(C.side=Jt,C.needsUpdate=!0,y.renderBufferDirect(R,A,I,C,h,Q),C.side=Oi,C.needsUpdate=!0,y.renderBufferDirect(R,A,I,C,h,Q),C.side=Wn):y.renderBufferDirect(R,A,I,C,h,Q),h.onAfterRender(y,A,R,I,C,Q)}function zt(h,A,R){A.isScene!==!0&&(A=ut);let I=Ee.get(h),C=u.state.lights,Q=u.state.shadowsArray,V=C.state.version,te=Te.getParameters(h,C.state,Q,A,R),X=Te.getProgramCacheKey(te),oe=I.programs;I.environment=h.isMeshStandardMaterial?A.environment:null,I.fog=A.fog,I.envMap=(h.isMeshStandardMaterial?H:w).get(h.envMap||I.environment),I.envMapRotation=I.environment!==null&&h.envMap===null?A.environmentRotation:h.envMapRotation,oe===void 0&&(h.addEventListener("dispose",De),oe=new Map,I.programs=oe);let Ce=oe.get(X);if(Ce!==void 0){if(I.currentProgram===Ce&&I.lightsStateVersion===V)return Tt(h,te),Ce}else te.uniforms=Te.getUniforms(h),h.onBeforeCompile(te,y),Ce=Te.acquireProgram(te,X),oe.set(X,Ce),I.uniforms=te.uniforms;let Z=I.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Z.clippingPlanes=ae.uniform),Tt(h,te),I.needsLights=_i(h),I.lightsStateVersion=V,I.needsLights&&(Z.ambientLightColor.value=C.state.ambient,Z.lightProbe.value=C.state.probe,Z.directionalLights.value=C.state.directional,Z.directionalLightShadows.value=C.state.directionalShadow,Z.spotLights.value=C.state.spot,Z.spotLightShadows.value=C.state.spotShadow,Z.rectAreaLights.value=C.state.rectArea,Z.ltc_1.value=C.state.rectAreaLTC1,Z.ltc_2.value=C.state.rectAreaLTC2,Z.pointLights.value=C.state.point,Z.pointLightShadows.value=C.state.pointShadow,Z.hemisphereLights.value=C.state.hemi,Z.directionalShadowMap.value=C.state.directionalShadowMap,Z.directionalShadowMatrix.value=C.state.directionalShadowMatrix,Z.spotShadowMap.value=C.state.spotShadowMap,Z.spotLightMatrix.value=C.state.spotLightMatrix,Z.spotLightMap.value=C.state.spotLightMap,Z.pointShadowMap.value=C.state.pointShadowMap,Z.pointShadowMatrix.value=C.state.pointShadowMatrix),I.currentProgram=Ce,I.uniformsList=null,Ce}function Vt(h){if(h.uniformsList===null){let A=h.currentProgram.getUniforms();h.uniformsList=Gs.seqWithValue(A.seq,h.uniforms)}return h.uniformsList}function Tt(h,A){let R=Ee.get(h);R.outputColorSpace=A.outputColorSpace,R.batching=A.batching,R.batchingColor=A.batchingColor,R.instancing=A.instancing,R.instancingColor=A.instancingColor,R.instancingMorph=A.instancingMorph,R.skinning=A.skinning,R.morphTargets=A.morphTargets,R.morphNormals=A.morphNormals,R.morphColors=A.morphColors,R.morphTargetsCount=A.morphTargetsCount,R.numClippingPlanes=A.numClippingPlanes,R.numIntersection=A.numClipIntersection,R.vertexAlphas=A.vertexAlphas,R.vertexTangents=A.vertexTangents,R.toneMapping=A.toneMapping}function wt(h,A,R,I,C){A.isScene!==!0&&(A=ut),_.resetTextureUnits();let Q=A.fog,V=I.isMeshStandardMaterial?A.environment:null,te=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:tr,X=(I.isMeshStandardMaterial?H:w).get(I.envMap||V),oe=I.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,Ce=!!R.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Z=!!R.morphAttributes.position,xe=!!R.morphAttributes.normal,ze=!!R.morphAttributes.color,Le=ri;I.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Le=y.toneMapping);let Mt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Xe=Mt!==void 0?Mt.length:0,_e=Ee.get(I),Ot=u.state.lights;if(re===!0&&(Ae===!0||h!==b)){let bt=h===b&&I.id===S;ae.setState(I,h,bt)}let Fe=!1;I.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Ot.state.version||_e.outputColorSpace!==te||C.isBatchedMesh&&_e.batching===!1||!C.isBatchedMesh&&_e.batching===!0||C.isBatchedMesh&&_e.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&_e.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&_e.instancing===!1||!C.isInstancedMesh&&_e.instancing===!0||C.isSkinnedMesh&&_e.skinning===!1||!C.isSkinnedMesh&&_e.skinning===!0||C.isInstancedMesh&&_e.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&_e.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&_e.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&_e.instancingMorph===!1&&C.morphTexture!==null||_e.envMap!==X||I.fog===!0&&_e.fog!==Q||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ae.numPlanes||_e.numIntersection!==ae.numIntersection)||_e.vertexAlphas!==oe||_e.vertexTangents!==Ce||_e.morphTargets!==Z||_e.morphNormals!==xe||_e.morphColors!==ze||_e.toneMapping!==Le||_e.morphTargetsCount!==Xe)&&(Fe=!0):(Fe=!0,_e.__version=I.version);let Ue=_e.currentProgram;Fe===!0&&(Ue=zt(I,A,C));let In=!1,_t=!1,Pn=!1,tt=Ue.getUniforms(),Pt=_e.uniforms;if(Se.useProgram(Ue.program)&&(In=!0,_t=!0,Pn=!0),I.id!==S&&(S=I.id,_t=!0),In||b!==h){Se.buffers.depth.getReversed()?(he.copy(h.projectionMatrix),sf(he),rf(he),tt.setValue(B,"projectionMatrix",he)):tt.setValue(B,"projectionMatrix",h.projectionMatrix),tt.setValue(B,"viewMatrix",h.matrixWorldInverse);let Ct=tt.map.cameraPosition;Ct!==void 0&&Ct.setValue(B,Be.setFromMatrixPosition(h.matrixWorld)),Qe.logarithmicDepthBuffer&&tt.setValue(B,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&tt.setValue(B,"isOrthographic",h.isOrthographicCamera===!0),b!==h&&(b=h,_t=!0,Pn=!0)}if(C.isSkinnedMesh){tt.setOptional(B,C,"bindMatrix"),tt.setOptional(B,C,"bindMatrixInverse");let bt=C.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),tt.setValue(B,"boneTexture",bt.boneTexture,_))}C.isBatchedMesh&&(tt.setOptional(B,C,"batchingTexture"),tt.setValue(B,"batchingTexture",C._matricesTexture,_),tt.setOptional(B,C,"batchingIdTexture"),tt.setValue(B,"batchingIdTexture",C._indirectTexture,_),tt.setOptional(B,C,"batchingColorTexture"),C._colorsTexture!==null&&tt.setValue(B,"batchingColorTexture",C._colorsTexture,_));let Kn=R.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Pe.update(C,R,Ue),(_t||_e.receiveShadow!==C.receiveShadow)&&(_e.receiveShadow=C.receiveShadow,tt.setValue(B,"receiveShadow",C.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Pt.envMap.value=X,Pt.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&A.environment!==null&&(Pt.envMapIntensity.value=A.environmentIntensity),_t&&(tt.setValue(B,"toneMappingExposure",y.toneMappingExposure),_e.needsLights&&ys(Pt,Pn),Q&&I.fog===!0&&fe.refreshFogUniforms(Pt,Q),fe.refreshMaterialUniforms(Pt,I,O,se,u.state.transmissionRenderTarget[h.id]),Gs.upload(B,Vt(_e),Pt,_)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Gs.upload(B,Vt(_e),Pt,_),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&tt.setValue(B,"center",C.center),tt.setValue(B,"modelViewMatrix",C.modelViewMatrix),tt.setValue(B,"normalMatrix",C.normalMatrix),tt.setValue(B,"modelMatrix",C.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){let bt=I.uniformsGroups;for(let Ct=0,Ht=bt.length;Ct<Ht;Ct++){let Xi=bt[Ct];N.update(Xi,Ue),N.bind(Xi,Ue)}}return Ue}function ys(h,A){h.ambientLightColor.needsUpdate=A,h.lightProbe.needsUpdate=A,h.directionalLights.needsUpdate=A,h.directionalLightShadows.needsUpdate=A,h.pointLights.needsUpdate=A,h.pointLightShadows.needsUpdate=A,h.spotLights.needsUpdate=A,h.spotLightShadows.needsUpdate=A,h.rectAreaLights.needsUpdate=A,h.hemisphereLights.needsUpdate=A}function _i(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(h,A,R){Ee.get(h.texture).__webglTexture=A,Ee.get(h.depthTexture).__webglTexture=R;let I=Ee.get(h);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=R===void 0,I.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,A){let R=Ee.get(h);R.__webglFramebuffer=A,R.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(h,A=0,R=0){U=h,T=A,P=R;let I=!0,C=null,Q=!1,V=!1;if(h){let X=Ee.get(h);if(X.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(B.FRAMEBUFFER,null),I=!1;else if(X.__webglFramebuffer===void 0)_.setupRenderTarget(h);else if(X.__hasExternalTextures)_.rebindTextures(h,Ee.get(h.texture).__webglTexture,Ee.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){let Z=h.depthTexture;if(X.__boundDepthTexture!==Z){if(Z!==null&&Ee.has(Z)&&(h.width!==Z.image.width||h.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(h)}}let oe=h.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(V=!0);let Ce=Ee.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Ce[A])?C=Ce[A][R]:C=Ce[A],Q=!0):h.samples>0&&_.useMultisampledRTT(h)===!1?C=Ee.get(h).__webglMultisampledFramebuffer:Array.isArray(Ce)?C=Ce[R]:C=Ce,D.copy(h.viewport),z.copy(h.scissor),k=h.scissorTest}else D.copy(be).multiplyScalar(O).floor(),z.copy(ke).multiplyScalar(O).floor(),k=et;if(Se.bindFramebuffer(B.FRAMEBUFFER,C)&&I&&Se.drawBuffers(h,C),Se.viewport(D),Se.scissor(z),Se.setScissorTest(k),Q){let X=Ee.get(h.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+A,X.__webglTexture,R)}else if(V){let X=Ee.get(h.texture),oe=A||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.__webglTexture,R||0,oe)}S=-1},this.readRenderTargetPixels=function(h,A,R,I,C,Q,V){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&V!==void 0&&(te=te[V]),te){Se.bindFramebuffer(B.FRAMEBUFFER,te);try{let X=h.texture,oe=X.format,Ce=X.type;if(!Qe.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=h.width-I&&R>=0&&R<=h.height-C&&B.readPixels(A,R,I,C,Ge.convert(oe),Ge.convert(Ce),Q)}finally{let X=U!==null?Ee.get(U).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,X)}}},this.readRenderTargetPixelsAsync=async function(h,A,R,I,C,Q,V){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=Ee.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&V!==void 0&&(te=te[V]),te){let X=h.texture,oe=X.format,Ce=X.type;if(!Qe.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=h.width-I&&R>=0&&R<=h.height-C){Se.bindFramebuffer(B.FRAMEBUFFER,te);let Z=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Z),B.bufferData(B.PIXEL_PACK_BUFFER,Q.byteLength,B.STREAM_READ),B.readPixels(A,R,I,C,Ge.convert(oe),Ge.convert(Ce),0);let xe=U!==null?Ee.get(U).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,xe);let ze=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await nf(B,ze,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Z),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Q),B.deleteBuffer(Z),B.deleteSync(ze),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,A=null,R=0){h.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,h=arguments[1]);let I=Math.pow(2,-R),C=Math.floor(h.image.width*I),Q=Math.floor(h.image.height*I),V=A!==null?A.x:0,te=A!==null?A.y:0;_.setTexture2D(h,0),B.copyTexSubImage2D(B.TEXTURE_2D,R,0,0,V,te,C,Q),Se.unbindTexture()},this.copyTextureToTexture=function(h,A,R=null,I=null,C=0){h.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,h=arguments[1],A=arguments[2],C=arguments[3]||0,R=null);let Q,V,te,X,oe,Ce,Z,xe,ze,Le=h.isCompressedTexture?h.mipmaps[C]:h.image;R!==null?(Q=R.max.x-R.min.x,V=R.max.y-R.min.y,te=R.isBox3?R.max.z-R.min.z:1,X=R.min.x,oe=R.min.y,Ce=R.isBox3?R.min.z:0):(Q=Le.width,V=Le.height,te=Le.depth||1,X=0,oe=0,Ce=0),I!==null?(Z=I.x,xe=I.y,ze=I.z):(Z=0,xe=0,ze=0);let Mt=Ge.convert(A.format),Xe=Ge.convert(A.type),_e;A.isData3DTexture?(_.setTexture3D(A,0),_e=B.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(_.setTexture2DArray(A,0),_e=B.TEXTURE_2D_ARRAY):(_.setTexture2D(A,0),_e=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,A.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,A.unpackAlignment);let Ot=B.getParameter(B.UNPACK_ROW_LENGTH),Fe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ue=B.getParameter(B.UNPACK_SKIP_PIXELS),In=B.getParameter(B.UNPACK_SKIP_ROWS),_t=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Le.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,X),B.pixelStorei(B.UNPACK_SKIP_ROWS,oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ce);let Pn=h.isDataArrayTexture||h.isData3DTexture,tt=A.isDataArrayTexture||A.isData3DTexture;if(h.isRenderTargetTexture||h.isDepthTexture){let Pt=Ee.get(h),Kn=Ee.get(A),bt=Ee.get(Pt.__renderTarget),Ct=Ee.get(Kn.__renderTarget);Se.bindFramebuffer(B.READ_FRAMEBUFFER,bt.__webglFramebuffer),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Ht=0;Ht<te;Ht++)Pn&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(h).__webglTexture,C,Ce+Ht),h.isDepthTexture?(tt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.get(A).__webglTexture,C,ze+Ht),B.blitFramebuffer(X,oe,Q,V,Z,xe,Q,V,B.DEPTH_BUFFER_BIT,B.NEAREST)):tt?B.copyTexSubImage3D(_e,C,Z,xe,ze+Ht,X,oe,Q,V):B.copyTexSubImage2D(_e,C,Z,xe,ze+Ht,X,oe,Q,V);Se.bindFramebuffer(B.READ_FRAMEBUFFER,null),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else tt?h.isDataTexture||h.isData3DTexture?B.texSubImage3D(_e,C,Z,xe,ze,Q,V,te,Mt,Xe,Le.data):A.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,C,Z,xe,ze,Q,V,te,Mt,Le.data):B.texSubImage3D(_e,C,Z,xe,ze,Q,V,te,Mt,Xe,Le):h.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,C,Z,xe,Q,V,Mt,Xe,Le.data):h.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,C,Z,xe,Le.width,Le.height,Mt,Le.data):B.texSubImage2D(B.TEXTURE_2D,C,Z,xe,Q,V,Mt,Xe,Le);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Fe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,In),B.pixelStorei(B.UNPACK_SKIP_IMAGES,_t),C===0&&A.generateMipmaps&&B.generateMipmap(_e),Se.unbindTexture()},this.copyTextureToTexture3D=function(h,A,R=null,I=null,C=0){return h.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,I=arguments[1]||null,h=arguments[2],A=arguments[3],C=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,A,R,I,C)},this.initRenderTarget=function(h){Ee.get(h).__webglFramebuffer===void 0&&_.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?_.setTextureCube(h,0):h.isData3DTexture?_.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?_.setTexture2DArray(h,0):_.setTexture2D(h,0),Se.unbindTexture()},this.resetState=function(){T=0,P=0,U=null,Se.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Lr=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var zl=class extends gn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=En,d=En,f,m){super(null,a,o,l,c,d,s,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class extends Tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Os=new ft,Hh=new ft,ga=[],Gh=new wi,j0=new ft,Mr=new je,br=new us,Na=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,j0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),Gh.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(Gh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),br.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Hh.multiplyMatrices(n,Os),Mr.matrixWorld=Hh,Mr.raycast(e,ga);for(let a=0,o=ga.length;a<o;a++){let l=ga[a];l.instanceId=r,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zl(new Float32Array(s*this.count),s,this.count,rc,ni));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var js=class extends gn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],m=n[s+1]-d,p=(a-d)/m;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new ft;for(let p=0;p<=e;p++){let x=p/e;s[p]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),m<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Dt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,x))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Dt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Wh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}var Fa=class extends Vl{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Wh(o,l.x,c.x,d.x,f.x),Wh(o,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}};var Dr=class i extends jt{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Dt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/t,f=new F,m=new ye,p=new F,x=new F,v=new F,g=0,u=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,u=e[M+1].y-e[M].y,p.x=u*1,p.y=-g,p.z=u*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[M+1].x-e[M].x,u=e[M+1].y-e[M].y,p.x=u*1,p.y=-g,p.z=u*0,x.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(x)}for(let M=0;M<=t;M++){let E=n+M*d*s,y=Math.sin(E),L=Math.cos(E);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*y,f.y=e[T].y,f.z=e[T].x*L,a.push(f.x,f.y,f.z),m.x=M/t,m.y=T/(e.length-1),o.push(m.x,m.y);let P=l[3*T+0]*y,U=l[3*T+1],S=l[3*T+0]*L;c.push(P,U,S)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){let y=E+M*e.length,L=y,T=y+e.length,P=y+e.length+1,U=y+1;r.push(L,T,U),r.push(P,U,T)}this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ur=class i extends jt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],m=[],p=[],x=0,v=[],g=n/2,u=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(m,3)),this.setAttribute("uv",new ot(p,2));function M(){let y=new F,L=new F,T=0,P=(t-e)/n;for(let U=0;U<=r;U++){let S=[],b=U/r,D=b*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,G=k*l+o,K=Math.sin(G),q=Math.cos(G);L.x=D*K,L.y=-b*n+g,L.z=D*q,f.push(L.x,L.y,L.z),y.set(K,P,q).normalize(),m.push(y.x,y.y,y.z),p.push(k,1-b),S.push(x++)}v.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let b=v[S][U],D=v[S+1][U],z=v[S+1][U+1],k=v[S][U+1];(e>0||S!==0)&&(d.push(b,D,k),T+=3),(t>0||S!==r-1)&&(d.push(D,z,k),T+=3)}c.addGroup(u,T,0),u+=T}function E(y){let L=x,T=new ye,P=new F,U=0,S=y===!0?e:t,b=y===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,g*b,0),m.push(0,b,0),p.push(.5,.5),x++;let D=x;for(let z=0;z<=s;z++){let G=z/s*l+o,K=Math.cos(G),q=Math.sin(G);P.x=S*q,P.y=g*b,P.z=S*K,f.push(P.x,P.y,P.z),m.push(0,b,0),T.x=K*.5+.5,T.y=q*.5*b+.5,p.push(T.x,T.y),x++}for(let z=0;z<s;z++){let k=L+z,G=D+z;y===!0?d.push(G,G+1,k):d.push(G+1,G,k),U+=3}c.addGroup(u,U,y===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ba=class i extends jt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],f=e,m=(t-e)/s,p=new F,x=new ye;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let u=r+g/n*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,d.push(x.x,x.y)}f+=m}for(let v=0;v<s;v++){let g=v*(n+1);for(let u=0;u<n;u++){let M=u+g,E=M,y=M+n+1,L=M+n+2,T=M+1;o.push(E,y,T),o.push(y,L,T)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Nr=class i extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],f=new F,m=new F,p=[],x=[],v=[],g=[];for(let u=0;u<=n;u++){let M=[],E=u/n,y=0;u===0&&a===0?y=.5/t:u===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let T=L/t;f.x=-e*Math.cos(s+T*r)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(s+T*r)*Math.sin(a+E*o),x.push(f.x,f.y,f.z),m.copy(f).normalize(),v.push(m.x,m.y,m.z),g.push(T+y,1-E),M.push(c++)}d.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){let E=d[u][M+1],y=d[u][M],L=d[u+1][M],T=d[u+1][M+1];(u!==0||a>0)&&p.push(E,y,T),(u!==n-1||l<Math.PI)&&p.push(y,L,T)}this.setIndex(p),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oa=class i extends jt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],d=new F,f=new F,m=new F;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let v=x/s*r,g=p/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),m.subVectors(f,d).normalize(),l.push(m.x,m.y,m.z),c.push(x/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let v=(s+1)*p+x-1,g=(s+1)*(p-1)+x-1,u=(s+1)*(p-1)+x,M=(s+1)*p+x;a.push(v,g,M),a.push(g,u,M)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Fr=class extends ds{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hi=class extends Fr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hl=class extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qc:r=e,o=2*t-n;break;case Yc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:a=e,l=2*n-t;break;case Yc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),v=x*x,g=v*x,u=-m*g+2*m*v-m*x,M=(1+m)*g+(-1.5-2*m)*v+(-.5+m)*x+1,E=(-1-p)*g+(1.5+p)*v+.5*x,y=p*g-p*v;for(let L=0;L!==o;++L)r[L]=u*a[d+L]+M*a[c+L]+E*a[l+L]+y*a[f+L];return r}},Gl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),f=1-d;for(let m=0;m!==o;++m)r[m]=a[c+m]*f+a[l+m]*d;return r}},Wl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case wl:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return wl;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,m=f-n,p=f+n;for(let x=0;x!==n;++x){let v=t[f+x];if(v!==t[m+x]||v!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,m=a*n;for(let p=0;p!==n;++p)t[m+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=wl;var ps=class extends Qn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=wa;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Qn{};Xl.prototype.ValueTypeName="color";var ql=class extends Qn{};ql.prototype.ValueTypeName="number";var Yl=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)Vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ka=class extends Qn{InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Qn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=wa;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends Qn{};Ql.prototype.ValueTypeName="vector";var Zl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=c.length;f<m;f+=2){let p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return x}return null}}},ev=new Zl,Kl=class{constructor(e){this.manager=e!==void 0?e:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jl=class extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var ko=new ft,Xh=new F,qh=new F,jl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $l=class extends jl{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends Jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Yh(){return performance.now()}var uc="\\[\\]\\.:\\/",tv=new RegExp("["+uc+"]","g"),dc="[^"+uc+"]",nv="[^"+uc.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",dc),sv=/(WCOD+)?/.source.replace("WCOD",nv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),ov=new RegExp("^"+iv+sv+rv+av+"$"),lv=["material","materials","bones","map"],ec=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tv,"")}static parseTrackName(e){let t=ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=ec;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mx=new Float32Array(1);var Qh=new ft,Va=class{constructor(e,t,n=0,s=1/0){this.ray=new Ra(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(e,t=!0,n=[]){return tc(e,this,n,t),n.sort(Zh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)tc(e[s],this,n,t);return n.sort(Zh),n}};function Zh(i,e){return i.distance-e.distance}function tc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)tc(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ya={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},hv=new Ks(-1,1,1,-1,0,1),fc=class extends jt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},uv=new fc,rr=class{constructor(e){this._mesh=new je(uv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ar=class extends Zn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ir.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var kr=class extends Zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qa=class extends Zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Za=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ar(Ya),this.copyPass.material.blending=si,this.clock=new za}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}kr!==void 0&&(a instanceof kr?n=!0:a instanceof Qa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ka=class extends Zn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var xu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var or=class i extends Zn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new Ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let m=new Wt(r,a,{type:_n});m.texture.name="UnrealBloomPass.h"+f,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);let p=new Wt(r,a,{type:_n});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=xu;this.highPassUniforms=ir.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let d=Ya;this.copyUniforms=ir.clone(d.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ki,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ve,this.oldClearAlpha=1,this.basic=new Yn,this.fsQuad=new rr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};or.BlurDirectionX=new ye(1,0);or.BlurDirectionY=new ye(0,1);var dv="#7bb1b0",fv="#6b9893",pv="#b2cfd9",mv="rgba(226,238,233,0.34)",gv="#7a478a",vv="#ffffff";async function yu(i,e,t,n=s=>s){let r=n(await(await fetch(i)).text()).replace("<svg ",`<svg width="${e}" height="${t}" preserveAspectRatio="xMidYMid meet" `),a=new Blob([r],{type:"image/svg+xml"}),o=URL.createObjectURL(a),l=new Image;return l.decoding="async",l.src=o,await l.decode(),l}function Mu(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}async function bu(i,e=3072,t=1500){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d"),r=e/2,a=e/3,o=e/(360*.97),l=O=>r+O*o,c=[l(4),t*.84],d=[l(-60),t*.5],f=[l(62),t*.5],m=(O,ne)=>{let ue=ne[0]-O[0],be=ne[1]-O[1],ke=Math.hypot(ue,be);return[ue/ke,be/ke]},p=m(c,d),x=m(c,f),v=(O,ne,ue)=>[O[0]+ne[0]*ue,O[1]+ne[1]*ue],g=[p[1],-p[0]],u=(O,ne)=>[O[0]+g[0]*ne,O[1]+g[1]*ne],M=e,E=v(c,x,-(t+10-c[1])/-x[1]);s.fillStyle=dv,s.fillRect(0,0,e,t),s.fillStyle=fv,s.beginPath(),s.moveTo(...c),s.lineTo(...v(c,x,M)),s.lineTo(e+10,t+10),s.lineTo(...E),s.closePath(),s.fill();let y=150,L=13;s.save(),s.beginPath(),s.moveTo(...v(c,p,M)),s.lineTo(...c),s.lineTo(...E),s.lineTo(l(-125),t+10),s.lineTo(l(-125),-10),s.closePath(),s.clip(),s.fillStyle=pv,s.beginPath(),s.moveTo(...v(c,p,M)),s.lineTo(...v(c,p,-M)),s.lineTo(...u(v(c,p,-M),y)),s.lineTo(...u(v(c,p,M),y)),s.closePath(),s.fill(),s.fillStyle=gv,s.beginPath(),s.moveTo(...u(v(c,p,M),y-L)),s.lineTo(...u(v(c,p,-M),y-L)),s.lineTo(...u(v(c,p,-M),y)),s.lineTo(...u(v(c,p,M),y)),s.closePath(),s.fill(),s.strokeStyle=mv,s.lineWidth=5,s.lineCap="butt";for(let O=0;O<26;O++){let ne=y+24+O*27;s.beginPath(),s.moveTo(...u(v(c,p,M),ne)),s.lineTo(...u(v(c,p,-M),ne)),s.stroke()}s.restore(),s.strokeStyle="rgba(255,255,255,0.10)",s.lineWidth=2,s.beginPath(),s.moveTo(...v(c,p,M)),s.lineTo(...c),s.stroke();let T=[194.5,92.2,439.6,113.2],[P,U]=await Promise.all([yu(i("logo-mark-white.svg"),600,600),yu(i("logo-wordmark-white.svg"),1319,340,O=>O.replace(/<path[^>]*>(<\/path>)?/,"").replace(/viewBox="[^"]*"/,`viewBox="${T.join(" ")}"`))]);try{await Promise.all([document.fonts.load("700 60px Philosopher"),document.fonts.load("400 60px Philosopher"),document.fonts.load('500 40px "Roboto Flex"')])}catch{}let S=30*o,b=69*o,D=b*T[3]/T[2],z=O=>{O.drawImage(P,r-S/2,t*.072,S,S),O.drawImage(U,r-b/2,t*.302,b,D)};z(s);let k=document.createElement("canvas");k.width=e,k.height=t,z(k.getContext("2d")),n.foil=k,s.fillStyle=vv,s.textAlign="center",s.textBaseline="alphabetic";let G=(O,ne,ue)=>{s.font=ne(100);let be=s.measureText(O).width;return ne(Math.round(100*ue/be))};"letterSpacing"in s&&(s.letterSpacing="0px"),s.font=G("CBD SKIN CARE",O=>`500 ${O}px "Roboto Flex", Arial, sans-serif`,a*.36),s.fillText("CBD SKIN CARE",r,t*.52),s.font=G("CBD SKIN OIL",O=>`700 ${O}px Philosopher, Georgia, serif`,a*.44),s.fillText("CBD SKIN OIL",r,t*.595),s.font=G("1000 mg",O=>`700 ${O}px Philosopher, Georgia, serif`,a*.17),s.fillText("1000 mg",r,t*.65),s.textAlign="right";let K=l(50);s.font=`400 ${Math.round(a*.04)}px "Roboto Flex", Arial, sans-serif`,s.fillText("For all skin types",K,t*.85),s.font=`500 ${Math.round(a*.043)}px "Roboto Flex", Arial, sans-serif`,s.fillText("Contains natural &",K,t*.892),s.fillText("organic ingredients",K,t*.929),s.font=`400 ${Math.round(a*.03)}px "Roboto Flex", Arial, sans-serif`,s.fillText("30 ml/1 oz \u212E",K,t*.968),s.fillStyle="rgba(255,255,255,0.55)";let q=Mu(7);for(let O of[l(-168),l(124)])for(let ne=0;ne<22;ne++){let ue=a*(.32+q()*.22);s.fillRect(O,t*.22+ne*t*.026,ue,t*.008)}let se=Mu(11);s.globalCompositeOperation="soft-light";for(let O=0;O<9e3;O++){let ne=se()*e,ue=se()*t,be=se()*.08;s.fillStyle=se()>.5?`rgba(255,255,255,${be})`:`rgba(0,0,0,${be})`,s.fillRect(ne,ue,1+se()*3,1+se()*1.5)}return s.globalCompositeOperation="source-over",n}function Su(i){let t=Math.round(2048*i.height/i.width),n=document.createElement("canvas");n.width=2048,n.height=t;let s=n.getContext("2d");s.drawImage(i,0,0,2048,t);let r=s.getImageData(0,0,2048,t),a=r.data,o=null;if(i.foil){let l=document.createElement("canvas");l.width=2048,l.height=t;let c=l.getContext("2d");c.drawImage(i.foil,0,0,2048,t),o=c.getImageData(0,0,2048,t).data}for(let l=0;l<a.length;l+=4){let c=(a[l]+a[l+1]+a[l+2])/3,d=Math.max(0,(c-200)/55),f=o?o[l+3]/255:0,m=(205-d*95)*(1-f)+82*f;a[l]=0,a[l+1]=m,a[l+2]=80*f}return s.putImageData(r,0,0),n}var rt=i=>new Ve(i),vs=Math.PI*2,Rn=(i,e,t)=>Math.min(t,Math.max(e,i)),cn=(i,e,t)=>{let n=Rn((t-i)/(e-i),0,1);return n*n*(3-2*n)},xv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,on=1.35,lr=0,Ja=.57,zr=new F(-.5,7.3,.75),ln=5.9;function cr(i,e=96,t=0){let n=i.map(([r,a])=>new ye(r,a));t&&(n=new Fa(n).getSpacedPoints(t));let s=new Dr(n,e);return s.computeVertexNormals(),s}function yv(i,e,t,n,s=360){let r=new Ur(i,i,e,s,6,!0),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getZ(o),d=a.getY(o),f=Math.atan2(l,c),m=Math.pow(Math.abs(Math.cos(f*t*.5)),.6),p=cn(e/2,e/2-.08,Math.abs(d)),v=(i-n+n*m*p+n*(1-p)*.5)/Math.hypot(l,c);a.setX(o,l*v),a.setZ(o,c*v)}return r.computeVertexNormals(),r}function Mv(i,e,t=44,n=128,s=3){let r=[],a=[],o=[],l=d=>i*(1+.075*Math.sin(2*d+s)+.05*Math.sin(3*d+1.7*s)+.022*Math.sin(5*d+.3)+.012*Math.sin(9*d+2.1));r.push(0,e,0),o.push(0);for(let d=1;d<=t;d++){let f=Math.pow(d/t,.8);for(let m=0;m<n;m++){let p=m/n*vs,x=l(p)*f,v=e*Math.pow(Math.max(0,1-f*f),.35);r.push(Math.sin(p)*x,v,Math.cos(p)*x),o.push(f)}}for(let d=0;d<n;d++)a.push(0,1+d,1+(d+1)%n);for(let d=1;d<t;d++){let f=1+(d-1)*n,m=1+d*n;for(let p=0;p<n;p++){let x=(p+1)%n;a.push(f+p,m+p,m+x,f+p,m+x,f+x)}}let c=new jt;return c.setAttribute("position",new ot(r,3)),c.setAttribute("aT",new ot(o,1)),c.setIndex(a),c.computeVertexNormals(),c}function ja(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new js(t);return r.colorSpace=Xn,r}function bv(i){let e=new Lr,t=new je(new fs(60,30,60),new Yn({color:rt("#28403b").multiplyScalar(.55),side:Jt}));t.position.y=10,e.add(t);let n=new je(new Ai(60,60),new Yn({color:rt("#28403b").multiplyScalar(.35)}));n.rotation.x=-Math.PI/2,n.position.y=-2,e.add(n);let s=(o,l,c,d,f)=>{let m=new je(new Ai(o,l),new Yn({color:rt(d).multiplyScalar(f),side:Wn}));return m.position.set(...c),m.lookAt(0,4,0),e.add(m),m};s(11,8,[-15,13,12],"#fff0dc",7),s(2.6,18,[-17,7,-9],"#fff7ee",4.2),s(2.2,18,[16,7,-5],"#eef3ee",3),s(18,18,[0,24,2],"#f6efe4",.7),s(14,5,[6,3,18],"#ddbfa3",.55),s(6,4.5,[-7,4.4,-22],"#f6e2c4",1.9),s(2.5,4.5,[5,4.4,-22],"#f3ece2",1.5);let r=new Js(i),a=r.fromScene(e,.03).texture;return r.dispose(),e.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a}var Sv=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.99999, 1.0); }`,wv=`
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
  }`,Av=`
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
  }`,Ev=`
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
    float occl = smoothstep(0.35, 1.0, k) * (1.0 - 0.8 * smoothstep(0.22, 0.5, vSoft));
    gl_FragColor = vec4(col * k, clamp(a, 0.0, 1.0) * k * occl);
  }`,Tv=`
  attribute float aT;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ;
  void main(){
    vT = aT; vXZ = position.xz;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWN = normalize(mat3(modelMatrix) * normal);
    vWV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,_v=`
  precision highp float;
  uniform vec3 uSigma; uniform float uFeather;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ;
  void main(){
    float ndv = max(abs(dot(normalize(vWN), normalize(vWV))), 0.16);
    float thick = 1.0 - 0.55 * smoothstep(0.5, 1.0, vT);                 // an even film that thins a little at the rim
    float fw = max(fwidth(vT), 1e-4);
    float film = 1.0 - smoothstep(1.0 - 1.4 * fw, 1.0, vT);              // crisp, anti-aliased film edge
    vec3 T = exp(-uSigma * (0.18 + thick) / ndv * 0.1);
    float F = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);                          // light reflected away is not transmitted
    vec3 tint = T * (1.0 - F * 0.85);
    // near rim: the meniscus edge seen from above reads as one dark hairline
    float near = smoothstep(-0.1, 0.45, vXZ.y / uFeather);
    float dl = 1.0 - smoothstep(0.0, 1.3 * fw, abs(vT - (1.0 - 1.6 * fw)));
    tint *= 1.0 - 0.5 * dl * near;
    gl_FragColor = vec4(mix(vec3(1.0), tint, film), 1.0);
  }`,Rv={uniforms:{tDiffuse:{value:null},uRes:{value:new ye(1,1)},uTime:{value:0},uVig:{value:.32},uVigCenter:{value:new ye(.62,.52)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};async function wu({canvas:i,host:e,asset:t,reduced:n,onFrame:s,onFirstFrame:r}){let a=new Ua({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});a.toneMapping=ri,a.setClearColor(rt("#28403b"),1);let o=Vc();a.setPixelRatio(o);let l=new Lr,c=new an(20,1,1,200),d=bv(a);l.environment=d;let f={uRes:{value:new ye(1,1)},uDpr:{value:o},uNight:{value:rt("#28403b")},uDeep:{value:rt("#213631")},uWarm:{value:rt("#ddbfa3")},uAmber:{value:rt("#c7ae92")},uSage:{value:rt("#9ab4ac")},uThread:{value:rt("#b07a7f")},uGlow:{value:new ye},uGlowR:{value:400},uSpot:{value:new ye(-1e4,-1e4)},uSpotR:{value:new ye(100,100)},uSpotCol:{value:rt("#f0a650").multiplyScalar(.4)},uPool:{value:new ye},uPoolR:{value:new ye(300,60)},uTA:{value:new ye},uTB:{value:new ye},uThreadAlpha:{value:.36}},m=new je(new Ai(2,2),new xt({uniforms:f,vertexShader:Sv,fragmentShader:wv,depthWrite:!1,depthTest:!1}));m.frustumCulled=!1,m.renderOrder=-100,l.add(m);let p=new er(rt("#fff1e0"),2.5);p.position.set(-7,9,8),l.add(p);let x=new er(rt("#b6c9c2"),.25);x.position.set(6,2,6),l.add(x);let v=new er(rt("#ffe6c4"),1.6);v.position.set(3,6,-10),l.add(v);let g=new Hi({color:16777215,metalness:0,roughness:.035,transmission:1,ior:1.52,thickness:.8,attenuationColor:rt("#a24a12"),attenuationDistance:1.6,specularIntensity:1,envMapIntensity:1.35});g.onBeforeCompile=ie=>{ie.fragmentShader=ie.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float hy = vWorldPosition.y;
        float heel = smoothstep(0.62, 0.12, hy) * smoothstep(-0.02, 0.1, hy);
        float ndvH = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance += vec3(0.085, 0.016, 0.0015) * heel * (0.35 + 0.65 * ndvH); }`)};let u={uAxis:{value:new F(0,1,0)},uK1:{value:new F(-17,7,-9).normalize()},uK2:{value:new F(-7,9,8).normalize()},uK3:{value:new F(16,7,-5).normalize()}},M=new xt({uniforms:u,transparent:!0,depthWrite:!1,blending:ki,vertexShader:`
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
        float band = exp(-pow((lat + 0.42) / 0.085, 2.0)) * 0.62 + exp(-pow((lat - 0.8) / 0.05, 2.0)) * 0.2;
        float lenFade = smoothstep(-${ln.toFixed(2)}, -${(ln-.3).toFixed(2)}, vY) * (1.0 - smoothstep(-0.2, 0.05, vY));
        vec3 c = vec3(1.0, 0.97, 0.92) * (rim + band) * lenFade;
        gl_FragColor = vec4(c, 1.0);
      }`}),E=-2.5,y={uAxis:u.uAxis,uKey:u.uK2,uR:{value:.248},uTop:{value:E},uDepth:{value:.235}},L=new xt({uniforms:y,transparent:!0,depthWrite:!1,blending:gs,blendSrc:Br,blendDst:cs,vertexShader:`
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
        float thin = 1.0 - smoothstep(-${(ln-.15).toFixed(2)}, -${(ln-2.2).toFixed(2)}, vL.y);
        vec3 col = mix(straw * (0.72 + 0.24 * thin), deep * 0.5, pow(1.0 - ndv, 1.3));
        float a = mix(0.7 - 0.18 * thin, 0.96, edge);
        // focused back light: a soft brighter core a touch toward the shadow side
        col += straw * 0.18 * exp(-pow((lat - 0.18) / 0.32, 2.0));
        // refracted back-light line inside the shadow-side edge (~70% of the radius)
        // modulated along the axis (focused light, not a glass-rod stripe): builds up from the nozzle, breathes,
        // and fades out before the tip and just below the meniscus
        float line = exp(-pow((lat - 0.7) / 0.07, 2.0));
        line *= (0.55 + 0.45 * smoothstep(-${ln.toFixed(2)} + 0.4, -${ln.toFixed(2)} + 2.4, vL.y)) * (0.85 + 0.15 * sin(vL.y * 3.1));
        line *= smoothstep(-${ln.toFixed(2)}, -${ln.toFixed(2)} + 0.25, vL.y) * (1.0 - smoothstep(uTop - 0.08 - 0.06, uTop - 0.08, vL.y));
        col += vec3(1.0, 0.86, 0.58) * line * 0.75;
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
      }`}),T=new xt({uniforms:{uFade:{value:1}},transparent:!0,depthWrite:!1,blending:gs,blendSrc:Br,blendDst:cs,vertexShader:`
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
        float rimT = pow(1.0 - ndv, 1.4);
        vec3 col = mix(straw * 0.74, deep * 0.5, rimT);
        // the lens focuses the back light into a crescent on the side away from the key (lower-right)
        float caust = smoothstep(0.2, 0.95, dot(nv.xy, normalize(vec2(0.45, -0.6)))) * smoothstep(0.02, 0.35, ndv);
        col += straw * caust * 0.45;
        float a = mix(0.6, 0.95, rimT);
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
      }`}),P=T.clone(),U=new xt({uniforms:{uSigma:{value:new F(.3,1.7,4.4)},uFeather:{value:1.1}},vertexShader:Tv,fragmentShader:_v,transparent:!0,depthWrite:!1,blending:gs,blendEquation:ei,blendSrc:Ha,blendDst:Ga}),S=new Hi({color:0,roughness:.03,metalness:0,ior:1.47,specularIntensity:1,envMapIntensity:2,emissive:rt("#e6a850"),emissiveIntensity:1,transparent:!0,depthWrite:!1,blending:ki}),b=new Hi({color:rt("#151817"),roughness:.38,metalness:0,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1}),D=new Hi({color:rt("#1a1c1b"),roughness:.58,sheen:.6,sheenRoughness:.5,sheenColor:rt("#5a6662"),envMapIntensity:.9}),z=new ii;z.position.set(on,0,lr),z.rotation.y=-.26,l.add(z),z.updateMatrixWorld(!0);let k=[[0,.16],[.55,.13],[1.05,.06],[1.42,0],[1.545,.035],[1.592,.13],[1.6,.3],[1.6,5.35],[1.592,5.55],[1.55,5.74],[1.46,5.92],[1.3,6.08],[1.1,6.2],[.93,6.28],[.83,6.36],[.8,6.46],[.8,6.52],[.85,6.56],[.85,6.62],[.8,6.66],[.8,6.72],[.85,6.76],[.85,6.82],[.8,6.86],[.81,6.93],[.79,6.99],[.72,7.02],[.64,7],[.61,6.94],[.6,6.7],[.6,6.1]],G=new je(cr(k,128),g);z.add(G);let K=new Hi({color:rt("#7bb1b0"),roughness:.78,metalness:0,sheen:.1,sheenRoughness:.8,sheenColor:rt("#ffffff"),envMapIntensity:.42}),q=new Ur(1.614,1.614,4.75,160,1,!0,-vs*.97/2,vs*.97),se=new je(q,K);se.position.y=.48+4.75/2,se.rotation.y=0,z.add(se);for(let ie of[.48,.48+4.75]){let Re=new je(new Oa(1.613,.006,6,160),new Fr({color:rt("#9dbab0"),roughness:.8}));Re.rotation.x=Math.PI/2,Re.position.y=ie,z.add(Re)}bu(t).then(ie=>{let Re=new js(ie);Re.colorSpace=mn,Re.anisotropy=a.capabilities.getMaxAnisotropy(),Re.wrapS=_r;let $e=new js(Su(ie));$e.colorSpace=Xn,K.map=Re,K.roughnessMap=$e,K.metalnessMap=$e,K.roughness=1,K.metalness=1,K.color.set(16777215),K.needsUpdate=!0,In=!0,n&&Pt&&so()}).catch(ie=>console.warn("[hero] label",ie));let O=new ii,ne=new ii;ne.position.copy(zr),ne.rotation.z=-Ja,ne.add(O),l.add(ne);let ue=new je(cr([[.86,0],[1.16,0],[1.205,.035],[1.215,.12],[1.215,.74],[1.2,.79],[1.15,.815],[1.03,.83]],128),b);O.add(ue);let be=new je(yv(1.04,1.18,44,.05),b);be.position.y=.83+.59,O.add(be);let ke=new je(cr([[1,2],[1.01,2.02],[.95,2.06],[.66,2.07]],96),b);O.add(ke);let et=new je(new Ba(.3,.86,64),b);et.rotation.x=Math.PI/2,et.position.y=.002,O.add(et);let j=new je(cr([[0,2],[.66,2],[.69,2.06],[.68,2.14],[.6,2.2],[.585,2.32],[.56,2.9],[.5,3.45],[.465,3.72],[.455,3.85],[.43,3.96],[.37,4.04],[.27,4.1],[.14,4.13],[0,4.14]],96,80),D);O.add(j);let re=ln,Ae=.302,he=.052,Ie=1.95,Be=ie=>{let Re=Rn((ie+re)/Ie,0,1);return he+(Ae-he)*(1-Math.pow(1-Re,2.4))},He=[[0,-re],[he*.72,-re],[he*.95,-re+.012]];for(let ie=0;ie<=40;ie++){let Re=-re+.03+(Ie+.25-.03)*(ie/40);He.push([Be(Re),Re])}He.push([Ae,-2],[Ae,-1],[Ae,.05],[0,.05]);let ut=cr(He,96),We=new je(ut,new xt({transparent:!0,depthWrite:!1,blending:gs,blendEquation:ei,blendSrc:Ha,blendDst:Ga,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`precision highp float; varying vec3 vN; varying vec3 vV; void main(){ float ndv = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
      vec3 c = mix(vec3(0.92, 0.94, 0.93), vec3(0.42, 0.47, 0.45), pow(1.0 - ndv, 2.2)); gl_FragColor = vec4(c, 1.0); }`}));We.renderOrder=4,O.add(We);let at=new je(ut,M);at.renderOrder=5,O.add(at);let B=[[0,-re+.006],[he*.7,-re+.008]];for(let ie=0;ie<=40;ie++){let Re=-re+.03+(Ie+.25-.03)*(ie/40);B.push([Be(Re)*.82,Re])}B.push([Ae*.82,E+.06],[0,E+.06]);let Rt=new je(cr(B,64),L);Rt.renderOrder=3,O.add(Rt),O.traverse(ie=>{ie.isMesh&&ie!==at&&ie!==We&&ie!==Rt&&(ie.renderOrder=2)});let Ye=new F(0,-ln+.004,0),Qe=ja([[0,1],[.35,.72],[.7,.22],[1,0]]),Se=ja([[0,1],[.5,.45],[1,0]]),Ze=(ie,Re,$e,vt,Bn,en,Jn,On=0,un=!1)=>{let tn=new je(new Ai(1,1),new Yn({color:rt(Re),alphaMap:ie,transparent:!0,opacity:$e,depthWrite:!1,blending:un?ki:Bi,toneMapped:!1}));return un&&(tn.material.map=ie,tn.material.alphaMap=null),tn.rotation.x=-Math.PI/2,tn.rotation.z=On,tn.scale.set(vt,Bn,1),tn.position.set(en,.004,Jn),tn.renderOrder=-50,l.add(tn),tn},Ee="#0f1d1a";Ze(Se,"#ddbfa3",.06,14,7,on-2.2,.6,0,!0),Ze(Qe,Ee,.72,3.9,3.9,on+.05,lr+.02),Ze(Se,Ee,.42,7.4,2.6,on+2.6,lr-.9,-.42);let _=Ze(ja([[0,1],[.25,.55],[.6,.12],[1,0]]),"#d9902f",.3,2.2,1,on+1.75,lr-.6,-.42,!0),w=Ze(Se,Ee,.18,4.6,1.5,-2.5,.2,-.62);ne.updateMatrixWorld(!0);let H=O.localToWorld(Ye.clone()),ee=.008,$=1.1,Y={uAge:{value:99},uImpact:{value:new ye(0,0)},uAmp:{value:.012}},Te=`
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
        }`;S.onBeforeCompile=ie=>{Object.assign(ie.uniforms,Y),ie.vertexShader=ie.vertexShader.replace("#include <common>",`#include <common>
        attribute float aT;
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple;
        ${Te}`).replace("#include <beginnormal_vertex>",`
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
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * (1.0 - smoothstep(0.6, 0.95, aT)); }`),ie.fragmentShader=ie.fragmentShader.replace("#include <common>",`#include <common>
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple; float vRipF = 0.0;
        ${Te}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
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
          float thick = 1.0 - 0.55 * smoothstep(0.5, 1.0, vPoolT);
          float rn = vPoolXZ.y / ${$.toFixed(2)};
          // key light scattered back up through the film: quiet \u2013 the pool absorbs (amber), it does not glow
          float back = smoothstep(0.5, -0.7, rn);
          totalEmissiveRadiance *= (0.02 + 0.21 * thick * (0.55 + 0.45 * back)) + 0.12 * vRipF * thick;
          // the key softbox as one curved highlight following the far rim (\u2264 35% of the width, Gaussian ends),
          // its thickness breathing with the ripple normal
          float far = smoothstep(0.05, -0.45, rn);
          float across = 1.0 - smoothstep(${$.toFixed(2)} * 0.14, ${$.toFixed(2)} * 0.36, abs(vPoolXZ.x + ${$.toFixed(2)} * 0.05));
          float w = 0.05 * (1.0 + 1.6 * vRipF);
          float gl = exp(-pow((vPoolT - 0.62) / w, 4.0)) * across * far;          // flat-topped: a softbox, not a sheen
          totalEmissiveRadiance += vec3(1.0, 0.93, 0.8) * 1.4 * gl;
          // ripple rings catch the light
          totalEmissiveRadiance += vec3(1.0, 0.88, 0.66) * 0.2 * vRipF * thick;
          // meniscus: one crisp 1px bright line on the far rim
          float fw = max(fwidth(vPoolT), 1e-4);
          float ml = 1.0 - smoothstep(0.0, 1.2 * fw, abs(vPoolT - (1.0 - 1.4 * fw)));
          float mid = exp(-pow(vPoolXZ.x / (${$.toFixed(2)} * 0.55), 2.0));   // middle ~40% of the far arc only
          totalEmissiveRadiance += vec3(1.0, 0.86, 0.62) * 0.55 * ml * far * mid;
        }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        { float fw = max(fwidth(vPoolT), 1e-4); gl_FragColor.rgb *= 1.0 - smoothstep(1.0 - 1.6 * fw, 1.0 - 0.1 * fw, vPoolT); }   // fades with (not after) the absorption layer \u2192 no light halo at the edge`)},U.onBeforeCompile=ie=>{Object.assign(ie.uniforms,Y)};let fe=Mv($,ee),ve=new je(fe,U);ve.renderOrder=1;let Ne=new je(fe,S);Ne.renderOrder=2,Ne.position.set(H.x+.1,.003,H.z-.05),ve.position.copy(Ne.position),l.add(ve,Ne),Ze(Qe,Ee,.1,$*2.3,$*1.9,Ne.position.x,Ne.position.z+.05);let ae=Ze(ja([[0,1],[.3,.5],[.65,.12],[1,0]]),"#e9a443",.12,1.9,.9,Ne.position.x+.6,Ne.position.z-.55,-.42,!0);Y.uImpact.value.set(H.x-Ne.position.x,H.z-Ne.position.z);let Me=40,we=34,Pe=new Dr(Array.from({length:we},(ie,Re)=>new ye(.01,-Re*.01)),Me),ge=new je(Pe,T);ge.renderOrder=3,ge.frustumCulled=!1,l.add(ge);let Oe=Array.from({length:we},()=>[0,0]),Ge=(ie,Re,$e)=>{let vt=Rn(.5+.5*(Re-ie)/$e,0,1);return ie*(1-vt)+Re*vt+$e*vt*(1-vt)};function it(ie,Re,$e,vt,Bn){let en=-(vt+Re*.92),Jn=Re*.95,On=Re*$e,un=18;for(let pt=0;pt<un;pt++){let jn=pt/un,Ln=en*Math.pow(jn,.85),Qi=Math.abs(Ln-en)<Jn?Re*Math.sqrt(1-Math.pow((Ln-en)/Jn,2)):0,Dn=(ie+(ie*.55-ie)*cn(0,1,-Ln/Math.max(-en,.001)))*(1-Bn*cn(.2,.9,-Ln/Math.max(-en,.001)));Oe[pt][0]=Math.max(5e-4,Ge(Dn,Qi,.035*(1-Bn*.8)+.004)),Oe[pt][1]=Ln}for(let pt=un;pt<we;pt++){let jn=(pt-un)/(we-1-un)*Math.PI/2;Oe[pt][0]=Re*Math.cos(jn),Oe[pt][1]=en-On*Math.sin(jn)}Oe[we-1][0]=0;let tn=Pe.attributes.position.array,Yt=Pe.attributes.normal.array;for(let pt=0;pt<we;pt++){let jn=Oe[Math.max(0,pt-1)],Ln=Oe[Math.min(we-1,pt+1)],Qi=Ln[0]-jn[0],Dn=Ln[1]-jn[1],ur=Math.hypot(Qi,Dn)||1;Qi/=ur,Dn/=ur;let Ms=-Dn,bs=Qi;pt===we-1&&(Ms=0,bs=-1);for(let Ci=0;Ci<=Me;Ci++){let mt=Ci/Me*vs,ct=Math.sin(mt),le=Math.cos(mt),ht=(Ci*we+(we-1-pt))*3;tn[ht]=Oe[pt][0]*ct,tn[ht+1]=Oe[pt][1],tn[ht+2]=Oe[pt][0]*le,Yt[ht]=Ms*ct,Yt[ht+1]=bs,Yt[ht+2]=Ms*le}}return Pe.attributes.position.needsUpdate=!0,Pe.attributes.normal.needsUpdate=!0,en-On}let N=new je(new Nr(1,48,32),P);N.renderOrder=3,l.add(N);let de=!1,W=()=>de,J=10,pe=[rt("#9ab4ac"),rt("#f9b5c4"),rt("#ddbfa3"),rt("#b6c9c2"),rt("#e8d6c3"),rt("#c49b9f")],ce=new Nr(1,40,28),De=new Float32Array(J*3),st=new Float32Array(J),yt=new Float32Array(J),Je=new Float32Array(J*3);ce.setAttribute("iColor",new Ei(De,3)),ce.setAttribute("iSoft",new Ei(st,1)),ce.setAttribute("iAlpha",new Ei(yt,1)),ce.setAttribute("iHi",new Ei(Je,3));let Xt=new xt({uniforms:{uKey:{value:rt("#fff6ea").multiplyScalar(1.6)},uRim:{value:rt("#f6f4ee")},uFade:{value:1}},vertexShader:Av,fragmentShader:Ev,transparent:!0,depthWrite:!1,blending:gs,blendSrc:Br,blendDst:cs}),Ft=new Na(ce,Xt,J);Ft.frustumCulled=!1,Ft.renderOrder=10,l.add(Ft);let Gi=4,$t=()=>(Gi=Gi*16807%2147483647)/2147483647,qt=[],Ti=[[3.9,8.9,-2.5,.3,0,.12],[-3.1,10.2,-1.5,.22,1,.08],[4.6,2.6,1.2,.17,2,.04],[-6,7.4,-4.5,.34,3,.42],[2.6,11.6,-5,.4,2,.5],[-1.9,3.3,1.6,.12,1,.02],[5.9,5.6,-1.5,.26,5,.12],[-4.4,11.6,.8,.18,4,.06],[6.6,10.4,-.5,.32,1,.45],[-2.6,7,-4.8,.28,0,.3]],Wi=ie=>{Je[ie*3]=($t()-.5)*.26,Je[ie*3+1]=($t()-.5)*.2,Je[ie*3+2]=$t()};for(let ie=0;ie<J;ie++){let[Re,$e,vt,Bn,en,Jn]=Ti[ie];qt.push({p:new F(Re,$e,vt),v:new F,r:Bn,tint:en,soft:Jn,phase:$t()*100,born:-10,a:0}),pe[en].toArray(De,ie*3),st[ie]=Jn,yt[ie]=0,Wi(ie)}let Bt={x0:-7,x1:7.5,y0:-1,y1:13.2,z0:-6,z1:2.5};function gt(ie,Re){let $e=qt.indexOf(ie);ie.p.set(Bt.x0+$t()*(Bt.x1-Bt.x0),-.4+$t()*3.2,Bt.z0+$t()*(Bt.z1-Bt.z0)),ie.v.set(0,0,0),ie.born=Re,ie.a=0,ie.r=.12+Math.pow($t(),1.8)*.3,ie.soft=Rn((ie.p.z>1.6?.5:0)+(ie.p.z<-4?.35:0)+$t()*.15,0,.85),ie.tint=Math.floor($t()*pe.length),pe[ie.tint].toArray(De,$e*3),st[$e]=ie.soft,Wi($e),ce.attributes.iColor.needsUpdate=!0,ce.attributes.iSoft.needsUpdate=!0,ce.attributes.iHi.needsUpdate=!0}let lt={discR:0,tagW:0,tagH:0,copyTop:1e9,pin:null},zt=[0,0],Vt=[0,0,0,0],Tt=[0,0,0,0],wt={ndc:new ye(.3,0),target:new ye(.3,0),active:!1,vel:new ye},ys=new Va,_i=new F,h=new F,A=new F,R={az:0,el:0},I={cx:-.75,cy:5.2,h:11},C=(new URLSearchParams(location.search).get("heroframe")||"").split(",").map(Number).filter(ie=>ie>0);C.length!==3&&(C.length=0);let Q=-2,V=.01,te=matchMedia("(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)"),X=1,oe=1,Ce={fx:.66,fy:.5,hs:.8,D:30},Z=new F;function xe(){X=Math.max(1,e.clientWidth),oe=Math.max(1,e.clientHeight);let ie=te.matches;if(de=ie,a.setPixelRatio(o),a.setSize(X,oe,!1),Xe.setPixelRatio(o),Xe.setSize(X,oe),c.aspect=X/oe,ie){let $e=Math.min(X>760?440:284,X*.73);Ce={fx:.5,fy:(30+$e/2)/oe,hs:$e,D:0}}else{let $e=X/oe,vt=Math.min(oe*.8,X*.44*(11/7.6));Ce={fx:$e>1.9?.62:.6,fy:.5,hs:vt,D:0}}if(C.length){let[$e,vt,Bn]=C;Ce={fx:$e,fy:vt,hs:Bn,D:0}}Q=ie?-2:Math.min(X*.5,780)/X*2-1,V=2*(Ce.hs/I.h)/X;let Re=Math.tan(Or.degToRad(c.fov/2));Ce.D=oe*I.h/(Ce.hs*2*Re),f.uRes.value.set(X*o,oe*o),f.uDpr.value=o,Ot.uniforms.uRes.value.set(X*o,oe*o),Ot.uniforms.uVigCenter.value.set(ie?.5:.6,ie?.62:.5),Ot.uniforms.uVig.value=ie?.26:.34,In=!0}function ze(ie){let Re=R.az,$e=Or.degToRad(11)+R.el,vt=Ce.D*(1+.045*ie);Z.set(I.cx,I.cy,0),c.position.set(Z.x+Math.sin(Re)*Math.cos($e)*vt,Z.y+Math.sin($e)*vt,Math.cos(Re)*Math.cos($e)*vt),c.lookAt(Z),c.near=vt*.5,c.far=vt*2.2,c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=-(2*Ce.fx-1),c.projectionMatrix.elements[9]=-(1-2*Ce.fy),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),c.updateMatrixWorld()}let Le=ie=>(A.copy(ie).project(c),[(A.x*.5+.5)*X,(-A.y*.5+.5)*oe]),Mt=new Wt(2,2,{type:_n,samples:4}),Xe=new Za(a,Mt);Xe.addPass(new Ka(l,c));let _e=new or(new ye(256,256),.42,.62,.92);Xe.addPass(_e);let Ot=new ar(Rv);Xe.addPass(Ot);let Fe={period:5.6,grow:2.9,hang:.35,fallG:5.2,drag:1.6},Ue={t:0,phase:.6,dropY:0,dropV:0,falling:!1,landed:!1,impactT:-99,cyc:0,intro:1},In=!0,_t=!1,Pn=0,tt=0,Pt=!1,Kn=new F,bt=new URLSearchParams(location.search),Ct=bt.has("herophase")?+bt.get("herophase"):null,Ht=bt.has("heroage")?+bt.get("heroage"):null,Xi=new F(Math.sin(.95)*1.62,2.7,Math.cos(.95)*1.62),io=new F(Math.sin(-.12)*1.625,.64,Math.cos(-.12)*1.625),hn={bubble:new F(on+2.35,8.05,.2),tag:new F,glow:new F(on-.6,4.6,-1.5),spot:new F(on,5.6,-1.5),pool:new F(on-1.6,0,.4),tA:new F(on+9.5,12.8,-4),tB:new F(on-2.6,-1.55,-4)};function qi(ie,Re){Ue.intro=n?0:Math.max(0,Ue.intro-ie/2.6);let $e=Math.pow(Ue.intro,3),vt=1-Math.exp(-ie/.9),Bn=wt.active?wt.target.x:.15*Math.sin(Re*.13),en=wt.active?wt.target.y:.1*Math.sin(Re*.11+1);wt.vel.set((Bn-wt.ndc.x)/Math.max(ie,.001),(en-wt.ndc.y)/Math.max(ie,.001)).multiplyScalar(vt),wt.ndc.x+=(Bn-wt.ndc.x)*vt,wt.ndc.y+=(en-wt.ndc.y)*vt,n||(R.az=-wt.ndc.x*Or.degToRad(2.4),R.el=wt.ndc.y*Or.degToRad(1.3)),ze($e);let Jn=n?0:Math.sin(Re*vs/7.5)*.07+Math.sin(Re*vs/11.3)*.03;ne.position.set(zr.x,zr.y+Jn,zr.z),ne.rotation.z=-Ja+(n?0:Math.sin(Re*vs/9.1)*.012),ne.updateMatrixWorld(!0);let On=O.localToWorld(_i.copy(Ye));if(w.position.x=On.x+1.6+Jn*.4,u.uAxis.value.set(-Math.sin(ne.rotation.z),Math.cos(ne.rotation.z),0),z.localToWorld(hn.tag.copy(Xi)),de){let mt=Le(hn.bubble),ct=lt.discR+16;zt[0]=Rn(mt[0]+14,ct,X-ct),zt[1]=mt[1]+10;let le=Le(z.localToWorld(h.copy(io))),Lt=Le(h.set(on,0,lr+1.62))[1]+16,xn=Rn(le[0]+22-lt.tagW/2,16,X-16-lt.tagW);Vt[0]=le[0],Vt[1]=le[1],Vt[2]=Math.max(8,Lt-le[1]),Vt[3]=xn-le[0],Tt[0]=xn,Tt[2]=xn+lt.tagW,Tt[1]=Lt,Tt[3]=Lt+lt.tagH}else{let mt=Le(hn.bubble),ct=lt.discR+14;zt[0]=Rn(mt[0],ct,X-ct),zt[1]=mt[1];let le=Le(hn.tag);Vt[0]=le[0],Vt[1]=le[1],Vt[2]=0,Vt[3]=0,lt.pin?(Tt[0]=lt.pin[0],Tt[1]=lt.pin[1],Tt[2]=lt.pin[2],Tt[3]=lt.pin[3]):(Tt[0]=le[0]-8,Tt[2]=le[0]+lt.tagW,Tt[1]=le[1]-lt.tagH/2,Tt[3]=le[1]+lt.tagH/2)}let un=n?2.3:Ct!==null?Ct:(Re+Ue.phase)%Fe.period,tn=Math.floor((Re+Ue.phase)/Fe.period),Yt=.19,pt=.046;if(ge.position.copy(On),un<Fe.grow+Fe.hang){Ue.falling=!1,Ue.landed=!1,Ue.dropV=0;let mt=xv(Rn(un/Fe.grow,0,1)),ct=un>Fe.grow?cn(Fe.grow,Fe.grow+Fe.hang,un):0,le=pt+(Yt-pt)*mt,ht=1.02+.3*mt+.1*ct,Lt=.008+.05*mt+.12*ct;it(pt,le,ht,Lt,cn(.35,1,ct)),ge.visible=!0,N.visible=!1,Ue.dropY=On.y-(Lt+le*.92)}else{let mt=un-(Fe.grow+Fe.hang);if(it(pt,pt+.034*Math.exp(-mt*5),1.04,.004,0),ge.visible=!0,!Ue.falling&&!Ue.landed&&(Ue.falling=!0,Ue.cyc=tn,Ue.x0=On.x,Ue.z0=On.z,Ue.y0=On.y-(.008+.05+.12+Yt*.92)),Ue.falling){let ct=Fe.fallG/Fe.drag,le=Math.exp(-Fe.drag*mt);Ue.dropV=ct*(1-le),Ue.dropY=Ue.y0-ct*(mt-(1-le)/Fe.drag);let ht=1+Rn(Ue.dropV/3.2,0,1)*.16,Lt=1+.42*Math.exp(-mt*7);N.scale.set(Yt/Math.sqrt(ht*Lt),Yt*ht*Lt,Yt/Math.sqrt(ht*Lt)),N.position.set(Ue.x0,Ue.dropY,Ue.z0),N.visible=!0,P.uniforms.uFade.value=1;let xn=ee+.01;if(Ue.dropY-Yt*ht<xn+.02){let Un=Rn((xn+.02-(Ue.dropY-Yt*ht))/(Yt*2.2),0,1);N.scale.set(Yt*(1+.9*Un),Yt*ht*(1-Un*.75),Yt*(1+.9*Un)),N.position.y=Math.max(Ue.dropY,xn+Yt*ht*(1-Un)*.5),P.uniforms.uFade.value=1-cn(.25,.95,Un),(Ue.impactT<0||Ue.impactCyc!==Ue.cyc)&&(Ue.impactT=Re,Ue.impactCyc=Ue.cyc,Y.uImpact.value.set(Ue.x0-Ne.position.x,Ue.z0-Ne.position.z)),Un>=1&&(Ue.falling=!1,Ue.landed=!0,N.visible=!1)}}else N.visible=!1}Y.uAge.value=n?99:Ht!==null?Ht:Re-Ue.impactT;{ys.setFromCamera(wt.ndc,c);let mt=W();for(let ct=0;ct<J;ct++){let le=qt[ct],ht=1.25,Lt=.16+.22*le.r,xn=Math.sin(Re*.21+le.phase)*.06+Math.sin(Re*.47+le.phase*1.7)*.03,Un=Math.cos(Re*.17+le.phase*.7)*.03,dr=xn,Zi=ht*Lt,fr=Un;if(wt.active&&!mt&&!n){ys.ray.closestPointToPoint(le.p,h);let li=le.p.x-h.x,yn=le.p.y-h.y,nn=le.p.z-h.z,Gt=Math.hypot(li,yn,nn),Mn=1.9+le.r;if(Gt<Mn){let Ii=Math.pow(1-Gt/Mn,2)*3.4/Math.max(Gt,.05);dr+=li*Ii,Zi+=yn*Ii,fr+=nn*Ii*.3,dr+=wt.vel.x*2.6*(1-Gt/Mn),Zi+=wt.vel.y*2*(1-Gt/Mn)}}n||(le.v.x+=(dr-ht*le.v.x)*ie,le.v.y+=(Zi-ht*le.v.y)*ie,le.v.z+=(fr-ht*le.v.z)*ie,le.p.addScaledVector(le.v,ie));let oi=(li,yn,nn,Gt,Mn,Ii,pr)=>{let Qt=Gt-li,bn=Mn-yn,Sn=Ii-nn,dn=Rn(((le.p.x-li)*Qt+(le.p.y-yn)*bn+(le.p.z-nn)*Sn)/(Qt*Qt+bn*bn+Sn*Sn),0,1),mr=li+Qt*dn,Xr=yn+bn*dn,qr=nn+Sn*dn,ci=le.p.x-mr,hi=le.p.y-Xr,zn=le.p.z-qr,ui=Math.hypot(ci,hi,zn)||1e-4,Ki=pr+le.r;if(ui<Ki){ci/=ui,hi/=ui,zn/=ui,le.p.set(mr+ci*Ki,Xr+hi*Ki,qr+zn*Ki);let Ji=le.v.x*ci+le.v.y*hi+le.v.z*zn;Ji<0&&(le.v.x-=Ji*ci,le.v.y-=Ji*hi,le.v.z-=Ji*zn)}},Lc=le.p.z>-1.5,kn=1;{A.copy(le.p).applyMatrix4(c.matrixWorldInverse);let li=c.projectionMatrix.elements[5]*oe*.5/Math.max(-A.z,.1);A.copy(le.p).project(c);let yn=(A.x*.5+.5)*X,nn=(-A.y*.5+.5)*oe,Gt=le.r*li,Mn=26,Ii=Math.min(1,ie*3)/li,pr=(Qt,bn,Sn)=>{le.p.x+=Qt*Sn*Ii,le.p.y-=bn*Sn*Ii;let dn=le.v.x*Qt-le.v.y*bn;dn<0&&(le.v.x-=dn*Qt,le.v.y+=dn*bn)};if(lt.discR>0){let Qt=yn-zt[0],bn=nn-zt[1],Sn=Math.hypot(Qt,bn)||.001,dn=Sn-Gt-lt.discR;dn<Mn&&pr(Qt/Sn,bn/Sn,Mn-dn),kn=Math.min(kn,cn(2,Mn,dn))}if(lt.tagW>0){let bn=Tt[0]-28,Sn=Tt[2]+28,dn=Tt[1]-28,mr=Tt[3]+28,Xr=Rn(yn,bn,Sn),qr=Rn(nn,dn,mr),ci=yn-Xr,hi=nn-qr,zn=Math.hypot(ci,hi),ui=zn-Gt;if(zn<.001){let Ki=nn-dn,Ji=mr-nn;ci=0,hi=Ki<Ji?-1:1,zn=1,ui=-Math.min(Ki,Ji)-Gt}ui<Mn&&pr(ci/zn,hi/zn,Mn-ui),kn=Math.min(kn,cn(2,Mn,ui))}if(mt)kn=Math.min(kn,cn(6,40,lt.copyTop-(nn+Gt)));else{let Qt=yn-Gt-(Q*.5+.5)*X;Qt<0&&pr(1,0,-Qt),kn=Math.min(kn,cn(0,48,Qt))}kn=Math.min(kn,cn(0,80,nn-Gt),cn(0,36,X-yn-Gt),cn(0,36,yn-Gt)),nn+Gt<0&&(le.p.y=Bt.y1+1)}let Dc=Lc?le.p.z:lr;oi(on,-.5,Dc,on,7.3,Dc,1.85);let Nn=zr,Wr=Math.sin(Ja),ro=Math.cos(Ja),Ss=Lc?le.p.z:Nn.z;oi(Nn.x,Nn.y,Ss,Nn.x+4.1*Wr,Nn.y+4.1*ro,Ss,1.35),oi(Nn.x,Nn.y,Ss,Nn.x-ln*Wr,Nn.y-ln*ro,Ss,.5),oi(Nn.x-ln*Wr,-.5,Ss,Nn.x-ln*Wr,Nn.y-ln*ro,Ss,.6);let ao=cn(0,2.4,Re-le.born)*(1-cn(Bt.y1-2.4,Bt.y1,le.p.y))*kn;le.a=n||ao<le.a?ao:le.a+(ao-le.a)*Math.min(1,ie*3),yt[ct]=le.a,(le.p.y>Bt.y1||le.p.x<Bt.x0-2||le.p.x>Bt.x1+2)&&gt(le,Re)}for(let ct=0;ct<J;ct++)for(let le=ct+1;le<J;le++){let ht=qt[ct],Lt=qt[le],xn=Lt.p.x-ht.p.x,Un=Lt.p.y-ht.p.y,dr=(Lt.p.z-ht.p.z)*.35,Zi=Math.hypot(xn,Un,dr)||1e-4,fr=(ht.r+Lt.r)*1.6+.25;if(Zi<fr){let oi=(fr-Zi)/Zi*Math.min(1,ie*2);ht.p.x-=xn*oi*.5,ht.p.y-=Un*oi*.5,Lt.p.x+=xn*oi*.5,Lt.p.y+=Un*oi*.5}}ce.attributes.iAlpha.needsUpdate=!0}let jn=new ft;for(let mt=0;mt<J;mt++){let ct=qt[mt],le=ct.r*(.85+.15*ct.a);jn.makeScale(le,le,le).setPosition(ct.p),Ft.setMatrixAt(mt,jn)}Ft.instanceMatrix.needsUpdate=!0;let Ln=Le(hn.glow);f.uGlow.value.set(Ln[0]*o,(oe-Ln[1])*o);let Qi=Le(h.set(hn.glow.x,hn.glow.y+1,hn.glow.z)),Dn=Math.abs(Qi[1]-Ln[1]);f.uGlowR.value=Dn*6.2*o;let ur=Le(hn.spot);f.uSpot.value.set(ur[0]*o,(oe-ur[1])*o),f.uSpotR.value.set(Dn*1.35*o,Dn*1*o);let Ms=Le(hn.pool);f.uPool.value.set(Ms[0]*o,(oe-Ms[1])*o),f.uPoolR.value.set(Dn*7.5*o,Dn*1.9*o);let bs=Le(hn.tA),Ci=Le(hn.tB);if(W()){let mt=Le(h.set(on,0,0));bs=[-24,oe*.05],Ci=[X+24,Math.max(mt[1]-34,zt[1]+lt.discR+90)]}f.uTA.value.set(bs[0]*o,(oe-bs[1])*o),f.uTB.value.set(Ci[0]*o,(oe-Ci[1])*o),Ot.uniforms.uTime.value=Re,_.material.opacity=.26+.04*Math.sin(Re*.7),s&&s({bubble:zt,tag:Vt,mobile:de,ppu:Dn,W:X,H:oe})}let Ri=0,Yi=0,Gr=0;function Pc(ie){Pn=_t?requestAnimationFrame(Pc):0;let Re=ie/1e3,$e=tt?Math.min(.05,Re-tt):1/60;if(tt=Re,qi($e,Re),Xe.render($e),Pt||(Pt=!0,r&&r()),Gr++,Gr>120&&(Ri+=$e,Yi++,Yi===90)){let vt=Ri/Yi;Ri=0,Yi=0,vt>.026&&o>1&&(o=Math.max(1,o-.25),xe())}}function so(){let ie=performance.now()/1e3;qi(1/60,ie),Xe.render(1/60),Pt||(Pt=!0,r&&r())}return xe(),{start(){if(!_t){if(n){so();return}_t=!0,tt=0,Pn=requestAnimationFrame(Pc)}},stop(){_t=!1,cancelAnimationFrame(Pn),Pn=0},resize(){xe(),_t||so()},pointer(ie,Re,$e){wt.target.set(ie,Re),wt.active=$e},setOverlays(ie){Object.assign(lt,ie)},get dirty(){return In},dispose(){this.stop(),a.dispose()}}}function Cv(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function pc(i,e){let t=i.querySelector(".hero-canvas"),n=i.querySelector(".hero-stage"),s=i.querySelector(".hero-bubble"),r=i.querySelector(".hero-tag"),a=i.querySelector(".hero-tag__card"),o=i.querySelector("[data-hero-add]"),l=e.byId["skin-oil"];if(l){let M=i.querySelector("[data-hero-price]");M&&(M.textContent=e.fmt.kr(l.price));let E=i.querySelector("[data-hero-was]");E&&(E.textContent=e.fmt.kr(l.price0));let y=i.querySelector(".hero-bubble__pct");y&&(y.textContent=`\u2212${e.campaign.headlinePct}%`)}let c=0;o&&o.addEventListener("click",()=>{e.store.add("skin-oil",1),o.classList.add("is-added"),o.setAttribute("aria-label","Vidunder Olien er lagt i kurven"),clearTimeout(c),c=setTimeout(()=>{o.classList.remove("is-added"),o.setAttribute("aria-label","L\xE6g Vidunder Olien i kurv")},2200)}),requestAnimationFrame(()=>i.classList.add("is-ready"));let d=()=>{i.classList.add("is-static");let M=i.querySelector(".hero-fallback");M&&M.dataset.src&&!M.src&&(M.src=M.dataset.src)};if(!Cv()||/[?&]hero=static\b/.test(location.search)){d();return}let f=null,m=!1,p=i.querySelector(".hero-copy"),x=matchMedia("(min-width: 761px) and (max-width: 1100px) and (min-aspect-ratio: 10001/10000)"),v=matchMedia("(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 1/1)"),g=()=>{if(!f)return;let M=n.getBoundingClientRect(),E=p.getBoundingClientRect(),L=v.matches?a:r,T=null;if(x.matches){let P=a.getBoundingClientRect();T=[P.left-M.left,P.top-M.top,P.right-M.left,P.bottom-M.top]}f.setOverlays({discR:s.firstElementChild.offsetWidth/2,tagW:L.offsetWidth,tagH:L.offsetHeight,pin:T,copyTop:E.top-M.top+parseFloat(getComputedStyle(p).paddingTop||0)})},u=({bubble:M,tag:E,mobile:y})=>{s.style.transform=`translate3d(${M[0].toFixed(1)}px, ${M[1].toFixed(1)}px, 0)`,x.matches?r.style.transform="":y?(r.style.transform=`translate3d(${E[0].toFixed(1)}px, ${E[1].toFixed(1)}px, 0)`,r.style.setProperty("--lead-h",`${E[2].toFixed(1)}px`),r.style.setProperty("--card-x",`${E[3].toFixed(1)}px`)):r.style.transform=`translate3d(${E[0].toFixed(1)}px, ${E[1].toFixed(1)}px, 0) translateY(-50%)`,m||(m=!0,i.classList.add("is-tracked"))};wu({canvas:t,host:n,asset:e.asset,reduced:e.prefersReducedMotion,onFrame:u,onFirstFrame:()=>requestAnimationFrame(()=>i.classList.add("is-live"))}).then(M=>{f=M,g(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(g);let E=!0,y=()=>{E&&!document.hidden?M.start():M.stop()};zc(i,T=>{E=T,y()}),document.addEventListener("visibilitychange",y),y();let L=0;if(new ResizeObserver(()=>{cancelAnimationFrame(L),L=requestAnimationFrame(()=>{g(),M.resize()})}).observe(n),matchMedia("(pointer: fine)").matches){let T=!1;r.addEventListener("pointerenter",()=>{T=!0}),r.addEventListener("pointerleave",()=>{T=!1}),i.addEventListener("pointermove",P=>{if(T)return;let U=n.getBoundingClientRect();M.pointer((P.clientX-U.left)/U.width*2-1,-((P.clientY-U.top)/U.height*2-1),!0)},{passive:!0}),i.addEventListener("pointerleave",()=>M.pointer(0,0,!1))}t.addEventListener("webglcontextlost",T=>{T.preventDefault(),M.stop(),d()})}).catch(M=>{console.warn("[hero] WebGL scene unavailable, using still",M),d()})}function mc(i,e){let t=new URLSearchParams(location.search),n=e.prefersReducedMotion,s=[];return s.push(Iv(i,e,t,n)),Pv(i,e),s.push(Lv(i,e,t,n)),s.push(Dv(i,n)),()=>s.forEach(r=>r&&r())}function Iv(i,e,t,n){let s=i.querySelector(".offers-clock");if(!s)return null;let r=0,a=t.get("offers-now");if(a){let S=Date.parse(a);Number.isNaN(S)||(r=S-e.clock.now())}let o=()=>e.clock.now()+r,l=e.clock.end,c=e.clock.start,d=s.querySelector("[data-clock-label]"),f=s.querySelector("[data-clock-done]"),m=s.querySelector("[data-clock-sr]"),p=["d","h","m"].map(S=>{let b=s.querySelector(`[data-unit="${S}"]`),D=[...b.querySelectorAll(".offers-dg")].map(z=>{let k=z.textContent.trim();z.textContent="";let G=document.createElement("span");G.className="offers-dg__ghost",G.textContent="0";let K=document.createElement("span");return K.className="offers-dg__v",K.textContent=k,z.append(G,K),{el:z,v:k,cur:K}});return{el:b,dgs:D,lbl:b.querySelector("[data-lbl]")}}),x="cubic-bezier(.65,0,.3,1)",v=620;function g(S,b,D){if(S.v===b)return;if(S.v=b,!D||n||!S.el.animate||document.hidden){S.el.querySelectorAll(".offers-dg__v").forEach(G=>G!==S.cur&&G.remove()),S.cur.getAnimations?.().forEach(G=>G.cancel()),S.cur.textContent=b;return}let z=S.cur,k=document.createElement("span");k.className="offers-dg__v",k.textContent=b,S.el.append(k),S.cur=k,z.animate([{transform:"translateY(0)"},{transform:"translateY(100%)"}],{duration:v,easing:x,fill:"forwards"}).onfinish=()=>z.remove(),k.animate([{transform:"translateY(-100%)"},{transform:"translateY(0)"}],{duration:v,easing:x,fill:"backwards"})}let u="",M=-1;function E(S){let b=o(),D=b<c?"pre":b>=l?"ended":l-b<=864e5?"last":"live";if(D!==u&&(s.dataset.state=D,u=D,d.textContent=D==="pre"?"Black Week begynder om":D==="ended"?"Black Week er slut":D==="last"?"Sidste dag \u2013 slutter om":"Black Week slutter om",f&&(f.hidden=D!=="ended"),i.dataset.campaign=D),D==="ended"){m&&(m.textContent="Black Week er slut.");return}let k=Math.max(0,Math.floor(((D==="pre"?c:l)-b)/6e4)),G=[Math.floor(k/1440),Math.floor(k/60)%24,k%60];if(G.forEach((K,q)=>{let se=String(Math.min(K,99)).padStart(2,"0");p[q].dgs.forEach((O,ne)=>g(O,se[ne],S))}),p[0].dgs[0].el.toggleAttribute("data-off",G[0]<10),p[0].el.hidden=G[0]===0,p[0].lbl&&(p[0].lbl.textContent=G[0]===1?"dag":"dage"),p[1].lbl&&(p[1].lbl.textContent=G[1]===1?"time":"timer"),p[2].lbl&&(p[2].lbl.textContent=G[2]===1?"minut":"minutter"),m&&k!==M){M=k;let[K,q,se]=G;m.textContent=`${D==="pre"?"Black Week begynder om":"Black Week slutter om"} ${K} ${K===1?"dag":"dage"}, ${q} ${q===1?"time":"timer"} og ${se} ${se===1?"minut":"minutter"} \u2013 mandag 30. november kl. 23.59.`}}E(!1);let y=0,L=!0,T=()=>{if(clearTimeout(y),!L||document.hidden)return;let S=6e4-(o()%6e4+6e4)%6e4+20;y=setTimeout(()=>{E(!0),T()},Math.min(S,60020))},P=new IntersectionObserver(S=>{let b=S[S.length-1].isIntersecting;b&&!L&&E(!1),L=b,T()});P.observe(s);let U=()=>{document.hidden||E(!1),T()};return document.addEventListener("visibilitychange",U),T(),()=>{clearTimeout(y),P.disconnect(),document.removeEventListener("visibilitychange",U)}}function Pv(i,e){let t=i.querySelector("[data-add]");if(!t)return;let n=i.querySelector("[data-add-status]"),s=e.byId[t.dataset.add];if(!s){t.disabled=!0;return}let r=d=>d.replace(" kr.","\xA0kr."),a=(d,f)=>{let m=i.querySelector(d);m&&(m.textContent=f)},o=i.querySelector("[data-kp-price]");o&&o.firstChild&&(o.firstChild.textContent=e.fmt.kr(s.price).replace(" kr.","")),a("[data-kp-before]",r(e.fmt.kr(s.price0)));let l=(s.contains||[]).reduce((d,f)=>d+(e.byId[f]?.price||0),0);l&&a("[data-kp-loose]",r(e.fmt.kr(l)));let c=0;t.addEventListener("click",()=>{e.store.add(s.id,1),t.classList.add("is-added"),n&&(n.textContent="",requestAnimationFrame(()=>{n.textContent=`${s.name} er lagt i kurven.`})),clearTimeout(c),c=setTimeout(()=>t.classList.remove("is-added"),2600)})}function Lv(i,e,t,n){let s=i.querySelector("[data-gift]");if(!s)return null;let{giftThreshold:r,freeShipping:a}=e.campaign,o=e.fmt.kr,l=0,c=S=>S.replace(" kr.","\xA0kr.");s.querySelectorAll("[data-ex]").forEach(S=>{let b=e.byId[S.dataset.ex];b&&(S.textContent=String(b.price),l+=b.price)});let d=s.querySelector("[data-ex-sum]");d&&l&&(d.textContent=c(o(l)));let f=s.querySelector("[data-live-sum]"),m=s.querySelector("[data-live-next]"),p=s.querySelector("[data-meter]"),x=s.querySelector("[data-tick]"),v=s.querySelector("[data-gift-status]");x&&(x.style.left=a/r*100+"%");let g=0,u=0,M=0,E=0,y=S=>{p&&(p.style.transform=`scaleX(${S})`)};function L(S){let b=Math.min(.05,(S-(E||S))/1e3);E=S,g+=(u-g)*(1-Math.exp(-b*3)),Math.abs(u-g)<.001&&(g=u),y(g),g!==u?M=requestAnimationFrame(L):(M=0,E=0)}function T(){let S=e.store.subtotal(),b=S>=r?2:S>=a?1:0;s.classList.toggle("has-cart",S>0),s.dataset.level=b,S>0&&(f.textContent=`Din kurv ${o(S)}`,m.textContent=b===2?"Fri fragt og Lip Balm er med":b===1?`Fri fragt \xB7 ${o(r-S)} til Lip Balm`:`${o(a-S)} til fri fragt`),u=Math.min(1,S/r),n?(g=u,y(g)):M||(M=requestAnimationFrame(L)),v&&(v.textContent=S===0?"":b===2?`Din kurv er p\xE5 ${o(S)} \u2013 fri fragt og en gratis CBD Lip Balm f\xF8lger med`:b===1?`Din kurv er p\xE5 ${o(S)} \u2013 fri fragt er med, og ${o(r-S)} mere giver gaven`:`Din kurv er p\xE5 ${o(S)} \u2013 ${o(a-S)} mere giver fri fragt`)}let P=e.store.on(S=>{(S==="cart:add"||S==="cart:change")&&T()});y(0),T();let U=t.get("offers-cart");return U&&setTimeout(()=>U.split(",").forEach(S=>e.byId[S]&&e.store.add(S,1)),+(t.get("offers-cart-delay")||600)),()=>{cancelAnimationFrame(M),typeof P=="function"&&P()}}function Dv(i,e){let t=i.querySelector("[data-rail]"),n=[...i.querySelectorAll(".offers-tile")],s=[...i.querySelectorAll("[data-dot]")];if(!t||!s.length)return null;let r=l=>s.find(c=>+c.dataset.dot===n.indexOf(l)),a=l=>s.forEach(c=>c.setAttribute("aria-current",c===l?"true":"false")),o=new IntersectionObserver(l=>{let c=null;l.forEach(d=>{d.isIntersecting&&(!c||d.intersectionRatio>c.intersectionRatio)&&(c=d)}),c&&c.intersectionRatio>.6&&a(r(c.target))},{root:t,threshold:[.6,.8,1]});return n.forEach(l=>o.observe(l)),s.forEach(l=>l.addEventListener("click",()=>{let c=n[+l.dataset.dot],d=parseFloat(getComputedStyle(t).scrollPaddingInlineStart)||0;t.scrollTo({left:c.offsetLeft-d,behavior:e?"auto":"smooth"}),a(l)})),()=>o.disconnect()}var Uv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function $a(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",Uv)}function gc(){$a()}var Au="data:image/webp;base64,UklGRkjWAABXRUJQVlA4WAoAAAAQAAAA5wMA5wMAQUxQSDMiAAABEUiSJMdtohuQZBv1/w9jJTaFbxH9nwD9X0IGVDybnbXa35xOgPBKIaCfkunyDLZlXwqTeQFnjPNiTEBai4LAa7iiZYrn0mqkGhnTuShJzrwbT8QYHhMVFiFU4vtPMl1+KjToHS17MkJoUPwZwUOuFuQN+XAczqtxFlZzn89CH5N5NbbjyfxlcHdejfQMsY0R9jN6qwwIFK3elB66bQ4jt20jNZHz/0eP0xVzj4gJGH9LWmlbtedihwC6inWEpC42yl401h3tBr5StbF+h+CA/AH8Pp6TP9Dvw2tf+YfwB8o/hBftM5O5JmXmJ/3EeB12JElWI5Y3vzr/XdX5kIAqYgImwGIbSYIkSR49q7++1xXhLoNbfeMjYgL8xrbt2nZtWzmX3ic45yLgASRg7y0zT7a6bdvidmBL2wnO+Z5skN6K0AcDxxhSREyA5/3/17a1tu3z/UmyzI5DbaC8mPfJzOeUcXiOzv1XnQzTc8TMzIuxlKaNA3Yc27L0g88gXevcJv1+3T0HETEB3rRtTyPbtq33/SRLhmCOSGzRGDM7MzMzU2V6NXqhekWYIa3ex0hyC9khO/5ExARQbCTJkt1UVffMHn8u0X+fCF5TkgOJa4GIiAmYTvJ//s//+T//5//8n//zf/7P//k//+f//J//83/+z//5P//n//yf/3+rlG+M5wk9yzMq9JwC/ebrb02H7SxJrI1tHNvYJklildYi8tsvP3z7NNiY4zem532VVePxENXJKWsnp8TJiSROxsQYJ2eBeN7osX1XY6zGALgcQJ4DOAKQ51CH9yxHnZYlzjfJune+ueWkIacUBCICEdGsTUwSszYvffLGb5+f/rWJhMkYJ2NM4pw5UzJnds6cKZmdnZNpnuZpmpNMJpmZM5lkSqxtKdRBKUDla9wBcMfxGOLYf5ZfZ46NuPiHfulWoiIoiZCE0taWFo0anQKM+31Q4jqu+brtqmf0An5xPAVdDoIgzl8fvfWBkyacmMqL25jDFuWiPaEn9SQv4qXkm/nzKGcDDrywaSr/By8h0IvIt39xj7zoGnEQBb+nS7+Ca8ShYig+B+LxqZMm3Nl0R+B3bvYiGvCUg4tXjRKfg+OnJmfjDTjfggHF54inrqL5Jq7zFhT8nnnyWBMO+69BPA8OL8U5G3Ab9D7BU/e4xhuwK4Tv86j/LJpw8D/APYa8+baNACi857Jjw43YDAF0s9fRcBOn1kMAHF5l3mwDqmuQAEDcmUMabo01hEC68f1otgvWm0EAjq/QNdqA9TokBBAvjB1lE6zVEATp9m9AZAO61TCAXN2DhntHKEEAeFBy21oggiBx376b4RYIxS3vwYDbMIBc3QPbf4jDm/iCbfQNA2KZ/oNNeoGwvTeBffQFA6B7AzaPXhjQqQPYpH5kCOCwR1s9AnE2u8sNN3e5dCdbHxIMbU/LFBDxRbZXC8T2H9keFOIP16wXCjK4JhQIfsn2FAcAZ7JdFLDCzSBsZHtEolxk+6oBAbR9EYgOJ9leJAAH2b6uuS9LbvRFw4FrsklfhOJ97iLba809LBxkuySwyTY6JAA71izDcGBNqmZhB1vO320cYKtmYQdbzparI5Owgc0tFGewBYbhJjea3eQENq85KWZhgK3CwuwFps3CAFuFhZlsZkH2Cgsz2czC8AITGGSnYcaaVWFhYE0qyWsORdmiWXIlFmXLmisYZC/NkotY/ICtYCB71lz95ca85sieNVdLblSaFSe1tnzWXK25XnO15vZ8r7nAELAVDGT3misYDLbAQPY9ZxgMtoKB7IbBWBsVDGQPDEaGZPOR4VlsdtQ3pDXPLMILOpXNl9OWnMWNHw8MzKg/caXBMJgUPEZ0MttP/455FpV2mgLz+OPDsS0LDUNIASEk6djWlN8dCc4a1XbWElFxdu/JhCAhK86StwZ1d7GzPb/40kv7Bg7nSBBwww/+7G8eG2dG8arTqGEwJ1Tnnnc/++jZO08/s2sIdw64BDf85L+PjR1+sttORFaabBjCCWkdvvfZR0/vjEcxSZw73WRYODf48Pvf2W1Fqy00GBIEqDpbO4uRFUUU6xyJ4vxHfux739pMVpppCCYcKSrSIiSKJgW0e2/+8I+8vBattMBgSIDOOYKCu5Zp59orr+6kXGEZGMIIioAg7moVp52dnchxdblkFEwIghASd73EtbRweGYYPAico8Niiqqtdyurq4xCZDoQdtAvLBcDqnZlr766xIL4IJx8+j9nZlEkrjd1ZmVFWauCYk4//mBgsKiikpiWqyq7guNP/udxYRcGktRMZlcUjl84iD55/92BxQJJTGO5mhIYlg2U4Xv/fVi4BYIkdU7tarJgfOCA4z/5o0PNhVKJKwxXk2H4skFY399rKCxUvP7Wa02RlZRNAbTeeKOtZJGgqpvdiuAZ4MIhqm5vVRUWWyrVRK2kBIYHDqLiRLDgKumuJyvJsysiBS6YSOu1NzoiZRQYvnBI2s1IFgzSuH69IQh/DxqEa6+90FSyaKpaVWoVwRh90QBpv3SrJijlnmJBeIib9Qil3ZsCEEFpd2D4jw2CMm/D8IWDPEN62FDuYxmFLxoopU4WiaMHDSh3CQqiQ7m3NgUrXbIpQC84kCwjHOGgs0Q8QEkyVUYxCqMvG7pXtmOunqR7l1osIbEgPWjg4PYyAVeNyC7f7KGEo01h+21NrDxVu2vI8qExXzZQCXxIpYUo3xoYHjag0luLwqt05ZM3CaED4fxRxhkSpHzhUOkjGJYNrHZvGA4NXmUJ0eilTPg/o4HVzjQsGip+BoZDA6sdjSc2GF0fOWhozfumNjo0yOSepSVrIqOBnd2RITzJ4HdCo1hN54vQHziQqJHhgDrZaKj6NSwc2CwYhgz0B6NYSohGNviTdrbXltC3f2SgL4j00uGQwe9DBn8yGkxTCX5/ZKA3AKWJ0P98yFAv75CBfmHwm9zln9vcvgJwY07F2iNk6HtkYH9vGPkj/J8Man7fniXropVBWrOORm18MlBFgo0437J83m8WVgZ6poTfsyZq5ocGVyMNGwS18srgW4a+x5ngjwbWScMGvyph2JNWBvrEZDaTkBfpkUE06QnCbPUmQU/SypANU/EEGHXSbuALFwi9dbiI6AknWikGvocFQE8ujyLUxlkYEKURN+NAwqsMfA8MRK2chaFmRg1L5z0sPDDQO+U7MCwMNTMYHLghh9rJMNTMCQz0DsOeyVAzW7e5wMB66QaGmhk0yqiw58BAv+jWVkcCXsYylrDT++Yq4ElooKY/AN3e7oS9A4O0+ol4BMpqBH1jgYh2D6aaHgEcN5KAaHZloFEfOy7QZBFrpJOMRMVnWHBcICq/dUHhxoW62bnLnVR0EHqHLuyNCtRxJH6haBP0LBRpuvvbqXhFZeOeDneZgwL1+NLDt2YRPcJo+7FbAwY7CQpE68LOA+OWgk/17JHnl0nAswYRIPE03YoVvMp4cXNuAt4KRWWoCc/SZFYC3lEBBL0DkthAqp9XAwkOrKGsdQHvYBPy/9cfIUuKAW+h8Cz6NDwQCMGlJQx1KxDKUwjCKSVcToTgqVwJbxYOAQKAAJ8iiGuV2GaZLCNRzj0NgADgkpt1QDxVpZVYgLi9vykX94/V8pGolgpBOj21ABHWGRAnUSSIale2E4ASNxJMjwolSyfq3NiuCJSY4aNzDdJqzedpktbW1RoIxK1WJIAb9iZaGwqWrcSbb+5XIASz85wQmLMn/dw9LyPNq9sbmzUBmD0ZFARsYUgsZVXZaMYAEK/ttyMAZtDr94a6cEFs26dquy9tjY4mDqDWjsRSjyKFy1G9W1OAJJtbeW8yOT4pQtjTvqhzp3sxsSRArEJ5ClQiAqDS3rqyXb+4+/mxCWBbPql2u3nhsIIFl5NqZ7uRqgcPJy50Tf2izg07dFjhElfixro+GVhh2FL7onRtfaS5ygBBsrF7cTBB8H6qJ9Xt7ezcYsVL1NjFyUAHr61efft67Uhz1UEl3av26MyGrelevH6nc1QQqz9qv7Bx/GDgoTIIKt/GjaxwKIGqsnmrcXiX/rG2QJRWNVEKVWVzT39OegfGp3mCiCVBVNKQCyJgZ7TNK5VK0SFol08p50pDAM8VT2r1Sc5nZm5evL19kuOZeXoniNY7A/fszGp+kmg+O9vqQYjn5LzXRmEUrhULestf3nI777jM6i0PN5NwaCsUFm0s7igvOZG9suVsEg5tLC7YrA4HGbLReGizSdg/spVQ+JCNxdWArcKCgiH6J4YB7HuuPCZhwNYi8RHZWTi4DQgLNxKf3hHiQwPC9s6LSySuBmyNwiOyFwr7E6ZRuJ8whcL+hGkQBm4Fgl5095rb19w1T56ljbZ5HkyC4JY112suKNxrbtFWS25QGK2CNSkcZBIVX56hSTfNK59cPoVCSLSEWRiwDQsO2KSQcEJ7kbAftIWEE9c9ZmG4JsUoiMSUpSMYUjoBVelYvg4JO2q8gAoSVSuqRDhRgkIAcInEMgdW3wWASlvNGM2delQeqLIOh5lzhHB5iMPMTt+oau1qY3c3RWV3P5ayQKQXLpuDodWjiYZwSSgcSKe6S629cX1LCk2qSiNBaRSzvWzXYo4ePj6faCzJGIVpmzR3b7cF035hABEpD1C2vX2tpcD88ePB2CwJkei0rbV7s5P3C21JQlAqKdV6HLX2Nzg9un+il4JNwn26Jo3d63EvdyRRQilQkjTX9zfNwf3TYimEhOdf04Tp3s3kWBOlVQBRSXvtSvPoi3O3BGIU/poG1G5s9Qqi3IqodG03unuml4FI3H9VoxnM2xErDkCJR7NUwYMuEr5dA1WkUIEdotiID2ISnrJVZqpsHNMDRmH/iETYvYOZ9kAVCc+HSKCZXuorHxiFQRIYJZoe6JCwUogEEKtvtUl4RPbKojMH7hrXrbZAfDQpWsV2HqiQcCJ7r7kyCYu2RiFoq5BQdrdutUm4rq3dCQsDtkbBInuhcGhrk+DX3FKJcKtnVRaUJxuFQ1t5y7VnPznQByWZg6WSJ0skGm6DwejgRuLvuaXS0Z//bMTRXEzWKksgIIyMJMr0ydmOWgIFgrRIAu1o3ERgOiaJsy5eBs1BRsukpRkOpFzXSM9qFFw1gfOsQuGqBlB8amBw1QjfZuGqBgifl6MprE8FBZdN9+4PtEe1hgOnbNmHf/X+0JYgOhepZVACMao6oQ/+8e+fFCw/ZpI308B0UzWA44Mv+hZll5geXuzFgclqO/P+aebKDpj3s4YEppu2IX35Z3/2Tirlhi7LkwSByaq7bP3I17+1WXayo2xHPfeB1vd8/fvXVamhGz5mAwEqbUvf+IWfuJV+GaWEuPzJeCNeBqOgMKq7XPn+X/7ujjzFTp2kiZQM2uEBm2oZiITMFQ71137hx68ll+zweJJurtcTKRGEGx8V6wkCk+QUTm18y4+8WLtkRseTZHv7ymZdSRkg4LR106OjTlMtiUJhCodo41o3uRS1rzaK48nmi9u1RK00AjQOtON+ZvJBra2wFEdBQZWXJFZCIEoV8uOz8+jq1maqVpczJPTwQsMMDi6Y7rUEyxKFm8p9debnR/eHu6+vR7KqbDbIaKeHTwqqejeNqjGWpKWSObAA6IaH/c61RowVTX34Xk9L1KxGohoxlqojEBEAZjqpJFxV0Kef9Q3SmsLy3QcAhJSVRT0tnOCyAAxWNwhQiRjLlQUSEAEBYsm6SLAIyNpmelysLkkqyAssZWcbxK3dpG+xsuPutejRsV5KQeEGAG78yX+dGq4uN8WuGZqlZKMQAIgZnGQOq1zZjx/kSykicVV/AWEdsdJZ9M5dEi8hFQzpHq0DBCsOTrvKejeRpROReBpVn/p85IiVT0Rrb7zWijSXjM1C9yW2n96fogSKql+/VlMDQ5FlEpH4NE8I1b2RHedlAFDVqlKPi8ISsjwcErZ5jCTqvNClKweESDqScW4cl0dE4hVPqq1IJY1UoSyKpEmqVZ5ruzRsmYOnd6q5t9dSghIpUCpJ6hrZsODyAPFap9LW1RudjahUAAKlkqg+ejQ0jgFqGqfS1tZmRx9XpGQAApE4e3JhC+MYmB4VXqXtzY0rjZNzq1BCRZTVFTW12tjFy5BwfVNpc2tjr3p2ljuUVIGqJJXKxGQ5F63eJGzbJGlvXtmtnPYLR5RYFVcqqnJ6qp7bEFVZu3UjOu8XRLkVUVESnTzsVBZtPvaSZndnU/cLhxIsgunF27fqaoGsMgnXNFHrd3Z4lFmUZeLFnVREZFEEw2pqFjXq+1s8zsnSBNSrStXqERcnJJxqrjov7UsvM0SZFiW1Gy+2ZHFMwlMzRt03b/VyEuVapPHi6+1Iws/0TCjJWtMQZVskbq0lwvAjPUrJnKgoQhkXFQkoXJCQsKq4QECUdgEEC1rmYPQ0TASCsk9AFiIYRB0DCCl5AtJyEYyBlH4JIYLyTxaDCx12tl2EcwDB0mf67342CTr+tgtmNDHwQTv85GDq5q4DQrZddvjR3Yw+QD2eGlbmrSRz8LTLDD/6dEx6AEjYvKPmbvQpR5cPR5rwhOnBdmXuQPR2yxTWOcIXOfqwMAw2KdfgwUAL6A36uKItn0uIHv7rg1wE3sALZIWbqybBrlbt80/PDHyyqKfWcp4OCdlmxe1/uTuhV7Aik8LO13DgK5Z09++eFfCLOE2smacWiNli1favjw39AlEaTQoXZqxiVzfWC8IzRSXK2LkZHRJOSquitGqn3gGVVrLczYtgGLVaVTbrvcI/JIqs1s8XoHa12XfwD5VWxiMXXjJOsRrM6B8QTO4eF3PTHEinVkvaSc5zH4HLekMdZKZVqr1XOTPwUJGkCs15OSio1FLprmVT+ggkirNMQ+ajSXCpBK3ryZmFn0ilxsLNySHhplNQ1b3rDeUniNs3d6vCeRj1Bxziairw1ai10YogcyBdEpxSxY165C+q8+qdOubzkHDTKWm9eLvhLRJ3Xr5dl/loFFRpUZ1XXm4q8RRI0qrHc3JRmEpBxe1WJPDXuFpRc2D5cJCxKk1VSZXAX1Vtf79KmZnk5kA6KYVS9b2t1GNEdd58vYV5TLEwjZKNd15piHgLVHVzM5V5MAyVjuo7W6nAYyWJRM1DmgR3ClKJ4buCuSgSrlMCH5bQYk0apcRzCFGYRzcJp0ZL3KxGfiNRvRHPQ4qErZTqvnwtVX7TuP1Cc0782Ratv3mzBvEYUY2XXm1D5qAF4lWKppsprLUSt9ox5rDq0w1UgjVXVCTzkCbhqRSxDlOiwOJKrcUSJxHnoEg4DbIkWdtKZVZWNQmrRosSrjki9ZfeWsfsXSRcpeJeqrjeQGp7N5syu+pPt+mtXQuuN5BKNcLsXSRspYZXFgZBsELCVUq3rDAItD/dSGLtZTE18xAStlLrMLNHd0ec3TEJxyxy8sn/9jH7yvoC9eAk5+za+ws0hjIrq7PA5rQlc7BwG1E4OmwpAWd3RCK1JK63E5ldo7DQQu3WK23M/mq2l0j99iudOTjicHTMgkSNdjIHrcFAWmgBopTM7opEbs3nC4VD2+Ugg7bRw4EUsokF71suh7aLwoJt9ELhwCZdEsy2h4RYoZqHhRPZ+665h4QduJmDY9sViMu2h4QT2c8lYYdrVoOQObBJ/XAgLdrOI3NwIVtfgbgf5SU3AvspEk5kvyFhh2vWKRIssndI2CHbBSHzlpNOZG+POdgh2xWJbDsaEE5sI9GavONWAtvVgHDiunVEItmkQmHBNrpLTjowTN5yZL8oHNoOCvsDZmA4sAmGfc2d5iW3Ivue6yU3MBy6WJAWWdHjJWcVC+aa/mMMRke2bpGItmLBr7n7BdMHBZMtjcKRrQPCaMlWLWMgmWwnIhFs1lMoHNekm883BoKnQJhWhcIbDgK3BwRJRluRkFO4dlmIKu2MCwJPUHCnstORYQC4KKhUvXfv5aDvWTdjDqxO9z8/Kgj/f0Ri0ik9yR0C4EXBKvUIwUfz+QZhi0S2XRRuyHaW3MBgsEkXhXvNOWQ7KNwoVBsewH5RMNoahUPb0YBgkf2Kw8wN10YHBMnCuqVG4QZrkkrecbFI9HtOYC8WbsCWNVcwfMAWFvZfp4aBEorPX6cgTFDYD9hKMggP2RKRuIM1T4kFgT0sHNmKhUcK194orNDNgnqRFX1+r7nAMGAzDGA/QeFecw/ajMKSrbPljuQtN0JhyIbiCuzNwkO2oyFh2YYi2i4JoyPbQ4LINjSYa9Jl4X7BPCyYa6NLwui4Jj0kSC7VIODLwpWKwf/liWKyPSAIbpeF+43CkGJ2FZxGQWgrFHxkaxRksFXLIOTYRqLRZhRksIWFtIoMAfURFwYDQ8DWYsFgK7MwYEtYMNhKKHrIZhQisEcoWgrWalDIiOvNgtEmFKNSk9904FaFwZaMQSZkKw0HkqdVDAEtFKNaaetD3ADgtHeuPahoGDylcqf//VlGet+QELXq4t5RQXgfip5SwWaFg+8XCxHYmwWTrTQkZMDWQtECe7EQsjULHrAdFtDeLNy85dAOQ8h2WPBrDu3NguctF73l0I5CxmQ7JMC9WTC8GFTG5Cr4sIB2GAy2mAWyNwwhm1g8tpkEspeFoms1ALRYvFoR2GaB7C0W85q71xzZy1uuRybhwFZiMa85sjcMB7aCwWDrYYHsJRZDtiFhdBp0sZD+TQLbaQjZ3iwc2EosBmwdFsjelkkw2MpCkWwdFsjeZsFk06y5z/gBoGBIrQhsGO41F7QNCmRvsXivuYCtYCA7Df6FQm2kkMBAbkaDecoiCgZzi0wu3TsIKKehFmDH222EE3ZrK4VkkQFgEQXDwosIJ2TPmjMMB7aCwWDb8w8MBttPZck92vK/NCikV/Q/g7B4vQqANjCQ3fw/PfuaC70YTsiug8JowVYEBSlg0+BzcgXC4r7mDmx5YAjYipCQ0UMvFpGHBLjrwLBgy8NCDmw6LKA9MNhgK8IC2k1YiGtFfrNBahUCdVhAe2CwlVaRfsQiTFhQxPUiLOQ9Z7DpsID2Iiw4vaI2/ichQa4VJ4e9Kf1OIyjmejX474/G5DcRuFZucnhSEF5fhAWlVuK0JvxehwVfrXyZLMJAQoIMr2K1Q0gM2YwFn4/TDkExYDMmKBhtNiiIbDow+C0XfLEIGxYUehWqw0IMNhMWFLBpC4YEK1izFiExArvVQQHtLix43nIR2K15Xg46KHjoxWCi0KtYDQaDjIdsBiExesspbzmL7DYsDNlMUIjIboOCh20MCBHZC4REjzR5wyWaCNtUkQQTj8DNqDttbcIJ0ltvb89IAsJ+CHqbBUk2b3RmkiMkLoNbbkmqUTDZlwJ6mzXzIigsKGsHaDYgdMXtekiABfB2izozwWSPojda1Mf3hzMxQWFBAL3FIqZ3/+coqCjg8Ao0w954JjooDNZyo02r3UyK0KCgDLFmPoUEBUVAQZshBVFutmeTB4UFRfBma7Y5QuIgiOIATRMMBWUPQVHVmTbLHf2ucAiGskVshWkT3fje/YnnmYAAO9IKtE7g+XsfjUi/syFhS2odqD7l/b528Hqbh4Q9gpX2CTSW4nfFJCRsUSqYPgXAbBwS9gIW+ilUHAn9Lh+DASEUtKrOkrbbsXgPZ1OMEBB3E0KRtEmk9erLTSW+M2N7GhL2d0ABPm2Caty5VRd4LmejcBQckFLouF6LPMdNx3omEhaWu3K9FoHnTh99cu5mAZyA4WD3AuLAq5TvktMv3j2zs5JwsMwUQgmuQDvq5y6QyO7FWix8+kSt6TegM8Qsib4VBgLYzzYdSurErHecO7+Zw/4Y4XCZRyrQaRM5uhddb0I8jjjpg8FgHxEldQKnA+kmCl5/cYxQKBsBRQrttMQRfY5ivggGsBUBYfrkwaTiTKDwfjCQbUBAKk2I19jCpslsiP/KFYNAWXYCCkyhrGZFib+46ZG+Gs8GePcUoXC7jQqg+sys57Yaylsch4eupWZDPHoIBoLNJgBG+kyMHhT73chbOD0aryeYkdIfBAWlmKkTnO2fqq2Wr9ANDtBSM4Lg3yBBoDxv4hooFNzoi+OtaxAvoZ2cTNcSzJr4x6liCIDnbQorVWjqoy/Ge5HyEdrxwZNOQ83Myfv/CRcG7hcFUKZQcHnvodluRB5iRocPo47C7CPzD2AIKP9fRJRrNSdnw2+7mviHnRzei9oKc0j8LVQI4EABr1XA6PHtTiK+4fKzT21bYR4d/rWnGATuR1AAW6V71ViRpEfQZaPhuCOYS0a9v4MLAg8D6Kqt4gQiZjx1oC+Qo4P7crOKORX8IcLgfxVcXbFVZW0rrnaronyAQjd6dH/crsu8KPPiOGII+Je1ALZXkEhNm9e6cSxS/mCK0dGhrMeYY/WfcCHgP8rBml5B6KrbLVWPI5FSR7h8dHQ0SbsR5jh2f4IAGP4/FWuxajahYm2qUZpEAlY0whZ2fHx8mnVbCvOszB8VEb1P/hMO1zTrstZFUYsrsTUaYMUiYIwZnQyz02xzLRHM+Xvvwvvq9r8T4ACqdjtrtJmm9mI8NBIRrEgEaBz1RX98cXhRvdJJBPMeF38E53vwv/uUAuUaTqtz8+jewfVOb2QpWgBWGQJw1pHF+YXVx4dF9UqrnmABFf7ARvS88u/7CSml1zCA1hyf7i16Vw4GOh2kQogQcGSFaOUSnQXsaDC1dnzYK6J2N21EWFD1H/8A53nw/6cXRrGUazkLE5tk+0Lbzg+2LXWrowFSeAzLrAda4KXi4sIie/A/J9okzUaUNCIsrtK/J+J55U97AYolHXuqxLGORlenhq3L19oCMe1Y/k/Ak1gGPWmw7nh6GA6APX//7sTlh5+eWVerKiy2Vb//X8r5HTywKi3XdYIwmRVJl5dbinp0fcsCUCYzJ8nZuFq9SO2xsXkcY7X585+fLEA7/OheRptPNCFYdKrer0LmgoB4SvjxZ795ede2lDTt/0kQKs20UI9ubScA7PxqXx8nJonOQNBxZYo9b2yeF45v//7n+xVjjDqALMYTRxAUQLhgcPgPLZwZKYKv3DP6FfEr1i+TfkH23Z//YgG0MG0DAYAkQNtJFcB492AcHWcnl3rqDMoaWZXunhfO7uZvf33ukcHuaaHgSx+8fEcAoMNlYim66H//lzMgQAAKyKCgIGu+fY8jnuAJhfGzH/3q1b0LZfTtWOL/SQEBlfZjBYBAvHfPJDqdSne2LFdk+6+/Po3z9o/3y6qA8/uvvzhZmKN4Oi8tS5n8qlh++VP4FIHgS4sv/u4LUaJExWiMGo0mJkZjEsNkjBiNIRIikZCgYJAAsRDAE7xAD1i6Kh1ACx3YgW1lFEYdMGDY2tqyvPLxm3yhQvh0SC0lnTuR+H+nKAAIQLUGiT6Ox0j35rWWrMZY7v+35eQCvvjRGy8FsJBpFhH5mrbxb/5xIl/+lK9o8zw7H/bv3zs2CUAAhQKFcrgA5Wg5UUAAAWQtJwoIRU4WwGOu1l2dKUClCCAVEEFUQkwY46V33nnjzdfu1lOmTJkyRQRrx3bzt1//8uVllJYr33kqJThW3DGMhwNLnsZL9azi3bvvvpyTDr4wy/EClK9x0vzKr3/e6/cHJ73HD621Js+m2TTPs8kky7KsMFYliRBf2XJmObNCOVjW5XCxqyLUWsplBYqsPQB4oJ6CRUAq4ElrOgYdy1J0MsnkFCIwOjqWZbd9vP/rv+7uFlra6v/+z//5P//n//yf//N//u+lAFZQOCDuswAAEPICnQEq6APoAz5VKpFHI6ImIyLSWUDAColnSuWi/cv/tnL+0/+3NE2j89y8YYftuSXnp9LY/3onG5jj2Vf4B0K0+vl/8DXf9X/zPKjzr8AHoj8Ck7z/odyh4r/jewBxk8/3/tegp9jdQv/t8emg/ppee+r9nfZX40+/6C/JvmLG7yA8weXp0358f+x60/6x/u/YT/rv+G8+X1ufvL6nP22/cb3dv/P+5fv4/tf/A9hj+W/6r//+2H6wn9//9XsffyL/Eenj+5vwyf1j/ofuN8Bv80/wX/y9gD0APUL/gHn7+T/rp+OXu0+afbf8tfQvsSe5nnw+XDtPxafj39x/gvbD98Plf+tf0v/T9Q785/pv+39cmLr2Y7ueoX7f/Z/+v/oPJR/vPUj7P/9f/C/AF/P/6//wvt++iv+n5N34T/u+wN/Nv8J/wv8J+V300f53/o/2v+v/ef3nfpv+r/93+v+Av+a/2j/o/4v24//b7uv3M//HuMfrp/3Pz/FlZUsbDDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBihx7cWbaGVR2fc2t/g+n32hK1VS+BvlBMeTAMynsioY77V2mbf4/WlW6dPpRC3o2VFilp2w+UsDAqHtZUsbDDFJBikgxSQYpIMUkGKRI5X2TrStUGV3DvaACVmBRBJnPM0K3nAdyzDHquEHtDnn9G+rfkUtRqWJKbwYWNhhikgxSQYpIMUkGKSDFJBikgw7lXLeYZLdeLFl1KxWFimbnM66GxYYE5+uV9/XWkI9TCxmHjuqaF3Sim7tvUFxfWWb5xrmibDDFJBikgxSQYpIMUkGKSDFJBikUtfVjsJZVqUMtxTlrDFdifXdxsG5DZZo5WE9OPiCNhhikgxSQYpIMUkGKSDFJBikgxSP8DFKScGAxuCdZsNsRxYBMuGZDgkf779gENrKljYYYpIMUkGKSDFJBikgxSQYoaHJTsYdrf2Ha8r8hY7xA7sHD4/6JtSAU3Udw4I/9/r+Alf+yeaGwwxSQYpIMUkGKSDFJBikgxSQYpE+LNW/VyvJrnNB6TIBcsjhnBVOahz1Ue49CN2s3k0WAV7GydkGKSDFJBikgxSQYpIMPf0F7KHWt1t407km/jQXhUO7+UOOO5UIYaX7FUM2GM4YD+PU6iS9S13hUPaypY2GGKSDFJBikUPyRA1SVb+X0k3+wWRbfCZeqA4hM8W+qbCQ2Bi6pxZMAodlIkRVvDT49d0a2aV+psRxL04N5OlaGS+jo7QnG7yvdhnS1MFUsbDDFJBikgxSQYpIMUij6i3MlSG0XhM7LFbIxt5bgPqpsI/OKuyJknjutkDtvL7v6wMmiVyUXSmaZT44l1OPGxNQXDc6qQmLdHZBikgxSQYpIMUkGKSDFDbY2V+oOnbu1+KU2jdiXVSbz8n6vLScq6Ux1052Oz6ZwubVD3SmzXW8ko7WpGel5hG6A2ZixNkevmAcM+bR3Myk6BI5C8Kh7WVLGwwxSQYpIMUkFom+yntfQ9+j4o5o0gieadEdd3RysAx7Gm2CB6uaMEEoQvAxnTh8gLactrAs/Mr83ixbM3hwE+SH7P/ml8n0o0mWk121YYiogmk75u4+J2QYpIMUkGKSDFJBikgxQ3FJalRs7iyivErQaHm3a3sFVQnGTJNwqCDwWpBm+354xWBY+9M7yDo+8NVRfxJsJZVCGTgYtoySEwddEWWqhZs7kF20je6TkJcCBDB56PrBFlSxsMMUkGKSDFJBikgw+wuhJwqMLUodmf2Jg84nGqLfe2P95JsZpY4jlubhS434ySeCeFdUvjc3V0vLIqqjI8KjFW3LaX41hjyFmCqWNhhikgxSQYpIMUkGKRSSkyGeGZuTpBQX8usmeJpVI/3kleE1zFqFVN+BNuz+4mhSqzgSZvdK5wWY1kgixO6onpXz4Q/E4EfVk2JyVb8QLen5YwwxSQYpIMUkGKSCz11N0dSXh7Mmm9SAXophxfeva/XiQ3j832QgtFBhCYyDJ8ghPDVcr3UMuR91OHeqfUfU5xKNv1DSrq26cqf73Hub9B0HzVhsM2CiDy5fRyHIbDDFJBikgxSQYpIMUj+082dOX0L+yWTQOuIfjkgZwfrYU7zFH13TSCtfIcdbJ+1EGk2P0aWAQKGXw1yr1VugOgZ9KwFrglyK/stWswa5Zl/3fomL4AZjzuidXId/vvt1pKsiRleUsSIWQSbtPLnZGf/dm0E2UO04nM9zbglWnJqv6yKy8Fnny51TBAxSQYpIMUkGKSDFJBikUp/GwM6TlLsKzSeBqyyVdgEsmOZ7pkjocz3EHvXvvf5OWmlVGm4Ro7yoUeDpkAYmv8Bim4QLBExqGX45pSZNERC3kwSdlritqHCDKwrShmSWAdU3dMrHJLrOA7jbhhbmxh00r0X/4jngOh3qbZaLNBR5GBp/6qJ+oLL6GgSdVfrGe4PjE3eDOhzmy5SQYpIMUkGKSDFJBikgtf2cMvN89ilqZftmP3q12kKI19wN1oX6pM3+umcrz8Uun6ueePxpPqg7tQNkp524XidgpUN+PggLK8z8U+UfwpY6NPOTjhZ1zHNsqRcnFi7ohwd4z6X1TanYn/8PdzYYYpIMUkGKSDFJBikgs524cFwvkdlFXoWlkxN8p3kB0HgbDbk0F2ntHctE98jOCXdBj+XHOFE34/o6++xGYShTSh6nYPYBDYLm7VeEFgRmxKx3BCq+BFf1N4Mih7WVLGwwxSQYpIMUkFr+KpEweK12YzWZ2Q6Jj7rggvQbvPfA7wi1kSBkwkyY3rxwGKTgUllPxGiwndk7IMUkGKSDFJBikgxQ21/0k0bWhkMgYSVkXRVnnHuXXhEw03fRy/vSjNqRRoub7y6WYyM/BtpV47KrKTaJT0fu9i2KZtNSL+75gBOqVGAt6fljDDFJBikgxSQYpFD6GOqqFgxBknw5wPRTOBMfMA9NA6jZzd06+ed2E+tql0x+K0EBBpxvsDxBUOCedur+kxTIiO5OvA06Zxsz408eLGwyJyy2EVRs8sqWNhhikgxSQYpIMUig6FWZjbYL2kGtjEHSGZLTG7Nmc04DrTebRtiJXy8DZn4Nsn5/AYoQMUkGqEWP4HBVLGwwxSQYpIMUkGKSCxX890l9hmbPgqsMG4cgRk/iyQmozpG0hTPUaeXovYdVWfrCCRY6qRLIDZ2jnX+WNUrwYwkc4L+gqBvBtPyxpHjdC/1RY7wluuGUTIsApIMUkGKSDFJBikgxSIuX+rHsOyTqysiLrUCf4amQGKSsQ9wOp+2fTKmVFfjmOdrIL9fG01OA2lon3xvJ1xfkPjZOyGg9rIxzNd8MqA0hD2sqWNhhikgxSQYpIMPdUcIiD9ujwwXQIeE3C3QK+hTUWFvn6zj/Ko0a2qLRz5iUI+k2U6sioo88gIMk7h1z/OllkYwIfd350VQdMgB3it9ajqkki1Y77toEfFLQvCofxMqWIJNUu8md5Qgt4ydkGKSDFJBikgxSQWKDG5m53M0p5WsLQ8qiLR+GIYkVmTDA2dqTGL8cflcM5r7Xva/UjQfh2hJVQrSrJ8vjHzRaXxYNWKeTikr5aRQs5IemSdtwds0rw6f4eNC0QoL/8s7xOETZA3VJQQiSB8CCkm+f/v2wpWN0zMxlCIlk09rte/PIa8ZVCvu+k1Vcml0xLyj/X4qAASMajbkmy8YYYpIMUkGKSDFJBihtriEtogUi4o3pc9eEcqvl5zfYrX2eTIYothipYB2c+Jrejtz4xmtPxWoR82nhUeBKPHyxvAzCn+/4EgdW58w2AfIYe+kM2NEs2x+Zu2nfsHIgwQxjFuguQKBwZiwolu9wy4W1O9gcTYoAdQMCdhjcwTrAhDKelMXE2vAkYKJ8s0nzgjLGE9MkoOr59C1aiQAtgfafVgpDslLk2aHl+gMQgUkGKSDFJBikgxSQYd1QoftgXh5BpVLBUBWmbiIb85zA02HFsPrYslhByLZ/8mrXVsNOaVAgA0eomkDRghhEJAxgiSrJIPtfHAYkkwmU12uRsaSSN6GocWlhSg5p31gGWPZae27TZLwqEdZbeM3W6C53WEHmlrUG3rq3h+enf5K+V8wWJeMDvCoe1lSxsMMUkGKR/fH6k+1QoaNOuc8/ZT0SqyHFcUo54miU5r1Qzj7eb+IJIhTcAwx9NsNMbn7kj7edP76yuYJ4XwHNJFioOl4koeDsGncHKS9phum2hrRIQrYU3gbdgEl9XcXychjvJ2qXTp4oL/Oqz3wBI6uPQ4DLq5/3OrgvV5wv6wBzUIFi8So41AVwjwkfqC2psjiBVvounMfWbdk7IMUkGKSDFJBikgtRcaD8vBN5T9unUQ5wpHuPZ6U308taoToAHW2YIAx6Xm+yjZMRu0no2+7OOcwx+sFLC8onLs28iS9ZkkTB5C68iBZ4v0qBwh4yJsK/iARV50Kb7/srPPNQ3WX9VAsvgw5sUheFQ9rKljYYYpIMUkFsEPffwYhDAOnANRv2s6VdVd8/FwXpGRXCmdDujAMpFUSLXVdD7pY5MwOSf5RWR/kLpAXV41O5VPHXtPGf3N6zAWgo4IuZcuaGhODMSpUOd8Od9CoHnw93ocaTqX/GBdDYYYpIMUkGKSDFJBh81OAhBfLC07Wl+k68JnxR6DOspiX8eQiZxDdAxdyMp44KdygjQByRiXhYpXtjRv9wNBbTZ2kd9l6wALSpvLt7ZyQnoCK0EFgyP/+VpTFBztNo+ZGBkxpe48f3wsHukPXFQsqWNhhikgxSQYpIMPvWl28oRMsco8XcubHCam+c8/v4lbSvQ7tIiiooilmBHUY9ltLezSRFdvYBVdDJ8tqwobE34OJPzKubJaNthY9gzYljJMxYBhLbW79BMfoxeuYPGFQ9rKljYYYpIMUkGKID7yabUPK7MScyKkuMOu2h72dths79nH2Mr3+BKMQ2esG5Kw6YAoVKh9tXpmTge/1eUkdd5pjhkYnVumJy5wvvaT/wI+/5yEer4Ol00td4VD2sqWNhhikgxSJ8yNjWNxpDb+WVt/sFT4OLUSfyaE0oDFctM9tLm9xFdiHXMys85YEDx8tGcU4urMQIObT7mC1jR606O+gPvl2zYfiI+NQusNs7GdkIe1lSxsMMUkGKSDFI/umYmMiUAtp+2cLeqSLOTG9eIfGBnGBw8TeikkIoG/cKp5dF/ZFA9SAxCquawDkEbFxfwUdpYv42AeufsRTpJXhvrmRuTHBLdbnVLhXNiB7BmIlNmanZqgPovmcvTVn33dC0U1PBVLGwwxSQYpIMUkGKRVRct8IyShitIdrYKbd3LtHYE7MuAVgoQ6NNsJq2WTJOwXqwyzHbgw5Nv0adPn/jP7PQnhoimwc3GwxcrcreoKAMduc4jC+4UqL/k7kXp7pdArd6+7sm5UvxY+oC/wDEO08dK76Xx04/fpkdKW0dDAqHtZUsbDDFJBikgw+KS9iXiT/bm1rxV+BRdrC8Z4uLvArCPQvQOmBeFCFYaIfkX2ECWc+wbtZ4Q9je16eGiue+2KDdpgS9LHeFPqFaa2ftRbsD9QWT1K7xysstAqSpDU83I1bOQ+n63yMnwUXGnQA7LSqWWsKh7WVLGwwxSQYpIMUNTyUzDsNjivFeSBd78XyDsKM04jhfbveUSZtQL+NUBry+Lecu6z0mvj8dblwHMRYMolH0fUXDEdi6gMJ7qiZVdtEjOeiuQfBpFvdrKkpDaqK8U2BUPaypY2GGKSDFJBh+ShJcZyj38TCrObV1Mco0KBNK2yj4wvFOWiFWum0KSvfCsaZ6EAVQUgO8WKu5tV+aiOUTn8L+XBVEdkOf7x20ocPiYSBFH24u4hjy7gWfBK2JL1hPGnorYde+ZHX94UyGs7iE3HXjk7n2xFlSm4dGq8svGtyR8GtbNDYYYpIMUkGKSDFJBh+EApn46Du7OABW0klT0Fws/MFX4jqau+emlagU7zbI9G3QabH0/paGOW0BmIvLRnMW2qKLOV+5vNhhsAIoLrvjcY6o1dTYtL1JskltqKspl/LoVukGLO3RF74l0oZynPdNw501vAB1fbIMUkGKSDFJBikgxQ9Kf1g/h/F0e2dStwVTdgfBcrb5opGLajaIb2jzXfujmWHlUA6HQazGS36gwjGekhXa8SGra08RBvbR/ILxCzPsCj1O8OO+NGzJowKhk9nORSt1E0vm8rkWPpgdgAbDdTnzhOOak6cv+TwsYYYpIMUkGKSDFJBahpG/hBIl1+uK0/SQk0Li0Yg+6n15e48e1BKVuzvovzasXlvvAG9S9ztpXVkpb4oeiqOLFaBjC6+KuT9rASyjri9efetRAo6TkyiBtRko+gDAgAgee2MsYYYpIMUkGKSDFJBa5I/wMcvVx1tA/bwybezw2owd8WxgoC1/ZdGRnRWPl++cb6hBPny1o5nXBDoZZzScr++/eOeFk7AP3L1MKyo0IwBHQfOUEi4WT3ZOyDFJBikgxSQYpILVzxbQJwVwGx2bMKu6jcPsnoIc+U+sNzqZCUNkju/fYj1z6jzPXc96oD3yXvM/f9SdI3c+7vlMcaDze6QNeRqodNUWDf1R9/oHGlDlmCf75f5OGR4/GkkOcRHZ/TxCKEW5spp+SQpNFlSxsMMUkGKSDFJBaufvDZKw8ae4+o+Wq/ZbOg8yaJojXZuZIh0m8jvVk8NVcMiU9T404LkuIzOJNt8gD2In2lhuJjdBQXR+ll6mQCCJE2d4+uFrb7neCzjR7xvD9ECIJFWEjm+AujsgxSQYpIMUkGKSDFD5RdUI5mAFOFyBL65htYbaRrtp287SWF2O1GE8fVAW7QC4EVQTqhwWSIGfK+EpRXyG0lCgZNIBxhTjCfhce9WpU863h2rRWQQC/8BPZDF+XCkiGu+SlVkHRgtz5m9tlbQ1z8iMGU/5qd5E+T0vXTCx4SFS71x3ve57HNCALGiobs+oqYHozs8DvCoe1lSxsMMUkGKR/eCYraSeE/N9qpAzr2N/cbiS0bEEPdVkX1B73i5XQpDXcxKOId6wpWeNVe2Htmhlp61e4OxbHT8QqKsHgEuHmPFKJfKdKZVAp85Qs6S80s794Fj5rTdzoRvF0cclG9x+9QzYFJ5VQS64L/QuQGKnQfgbgZl8zITcvdmXBTdmPtmmyYPeOmcvdiRq+IKkaXPDRpSdEFnmUBVLGwwxSQYpIMUkGKRQyT9GuERhWJsQscaGIyh2a/FDOgfxm64YBWOm17Ada98WTQclhSoyhcUB7fhCGP0EoaB0c67NoVHqZYbiB6+F+7h2wFmXdfalfi8dJljhYbSrhZDbqo9m0ZPffgEABhNjkM5ZkQFPrN+GGKSDFJBikgxSQYpH9WmHa3pwAb+2n1hHi4WOptVn9jaVnZkgmn0r3wLYyZ1oJo6SYHVDMWKopaE+6JEqDmDj6q910h8Z//RJfn9/v5JK4w7tTB7mVLSnyFjDImkIl92/A8HMZUkGKSDFJBikgxSQYpFESff0aHZB1R9Zs7XTw05OBkJV+7yI25dGYTM3wSoVJOeMa2x4hvT1LEBE7EpC8sGpy3gp13hUPaypY2GGKSDFI/7+5Vo/2um5NhR6MMQg41BOV7JzsiXSoPAkv15k2TY5uiDHF9e7cwlZ0gfQzA8T5a4xkRR5pY/osJ2naJ4FUSS72UNkjD3T9bELTw049mCWO3MpzwxpgfgAKvS8825gY6ylhhikgxSQYpIMUkGKSC2MxNZnPrCZOajX0X3JfoOw1nmBqhCBLIDZyjZBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpIMUkGKSDFJBikgxSQYpILAAA/v/mxkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp/NUqgaClQoI/aOqqikvnpckO6zTNj4JfN7hErjEdEccVcoBVbmJbKbnoSYA94DPZnraF5KDj58pEDzdVZrY90Kcwln0pDOjGqfrLdJa/YnDOA/Xa1E3qiZKmn20m4UQfjdv+VyylXtkxGOv97Z5sPht72vjcTuKvBpoH93+v6Tja/6z1/sH5c61gp7DWj40GdBWy/ZNVyOSmt5QwUbFS1E9IR1ZCQnObYu+ux5Dq35JQHHn21VgGN4r5DP5A/bMdlptYKpGLHfdYEA2lnPw0vaQcFeMbVsm8Hw2Dp2F//JX21rOt3C/ilfYui3FKFU3GXuyQmOnlCAAb/qkx65NMn4l6NZ7RPSAs6Y9VcAFUfo7QGpsMfL7pH2ETli/cYmeJJLeqUMQwR/rZjlHB8lCW0eFVVYgMPdbwT0ExmgsrUagxwFpoaD9oCnlTmE5S5Lt4fjXR9lMyOmNpMdr8USehenFOWNeoifm9PTCj5m7mRhFDE6QC9iat8LQw7M/MZqSzC7NJ0mi/Nnv73XQ39SdDtThd3RZwAAAAAAL4bw4riYnQHcVqYdD1Al53GpJ5u1cPAnkWL9Lrgxf/6mh7ALFIRAf/c5XxM7TmkW6rCkPLmpr91hDpH+ibUCqL20Si7ds0Q+IQT835sQUFAm8UoPXoRk1UCkwhdMJJ62fRI5mP+ncG3vNnH2nSYpe9VuC4lvrH56mJAzNEN8eVGoZr4iLD9AQzkXVrhWP367pNkkqortql0WeHbOFp365nbxzK3x5qFbovtinnFVvrAHGaeHhZhG9dLSKqyPRFF5pMJTNY8A8nno/7HTk60lx51hId30sne/hxKGexqRze0oaElitoNV3K5TMN8ZgnnegAAAAATYPVj9zOKq5vRqK2WpdIgzuxZUsXzD3Vs7THECnxRbKAgUR7xbvfFcDDYCtXJ4cNCmCf7xqjgppoEyfyO4THGow2IAnjXJ06AOAXFxD1SZk66j1aMGfh8YGUc+0Z5Z5JWZ3wJiUgDGSEbI9RI7fGbFk5jduHNA4UwzvEg2kTigrE1E1NHmwjDEjmDYyZTJfw+B9/4amdrn1mBjQtOoewlXxeas6WJUYmdrVJemx4F3Z7VLT8Bs3ufgsX9nR+EA8yHaWrB9DW5e1JqwdX+MM9jWk2QsikN+2pr2LxvNDPCD7CfWvUnVnfiUMLcJyY7EXWeEkQcb+GE8k9lSAOUf3kFVhKN4u3N6OxQUnyqBKh2FfOg3KcRggsS9H/m5Z1mNkDXRgoeJs1jO1x2O5MP2ArBcRkylJW+DNzP0nSJF3mxt+lWJ/igNEziLdvelcnn4Nyne1v+xRc7kqFSXrcoTOIiEa00+9IKftjBK3haK+asWiXBBFf38kbSzfRS86SHQLOAAAAAAjcsn/eH49gFJrwxuqwoTroO1wBvYOGnYKNtQvhV6BNmpOisg8Rsdq37B2kMVYkrMuN4GHUjUq8N9fmER7qQA1qWKZyGm2ZolR1WMJPnpG4b46+fqHh6Ounbs/NhmzHMdDORTSrWjJgc5AJo0HrPo/qRPtm5l9jph1ybCD2QGdCuZDpvZQDHj/92Xg/2sTzXgEXUGUsIBlobWHAPwuArwqieU3aYaYTVNugHLPW8kk+WrRJ0mWhvzssOLKfwI82j3dUuB38FnxWQKjNfNjvmKej+mNztTEcPBaCyoZCT0ry6KqIJXjyqY2CW6OdoQzIUl/603h2cBSO/mMHSX8pUF29IA24NKNW5NFUAplBSKIJQIwmLpM42Flq9PNrXWAO+k85a7aLll2uhu5j0JM8sLsvGJsqKnQ3en3i6W4QmCRhZs5B/6Kd47gAAAAAUPTrjHI/wyo2WvcOkSUvzFOI1FtU5mqRrrVtaasusRy/4WOfFj1Rra10kY/P1zzQLPoUcmsWQ1Qm+HXkUlt1jcksSvQlrKnsidQFMz4FBcoyw3SK2TL41Ei3bX/CbqqbqCZssB7naUPi5Cl9udBYC538MGT6wF8TCyPtvNcb+wwXqZAuzTalbXx8pjciVlcgZ9XxdGDIOtmFGh9603GoqnfcQa0gczUETWTL/+YJDNVRObirgw0daDzTLD61St0/7XpCIKEhBLXylCzEM3lJTRq+YP7AtZwu2le77CR8kSQKOKPqPjVpqzVeSxmXjXd3R0mL2YG7a7R8Ea+z3gAXBxWnbSFlL/3/sTWijEGeOa1vrMUiEy71CpVSTLCKy4oMvWhUXwAAAAAC5GhMkvPeBcHHMYdEg9XYzQFu9dV585WUmc7+qz3NMzfhehlbGdkAVHLuyrNoMBSi4NUS16ERZ/xl+Gv1HMLdzABsAT+5EXLZ6iXrJFQiDB4rfGcRtV9XAgj8MPeXVho9Mc/CCDeL06CajgILvBFyD5FdKM/reS0v8rxIzcuQOC4sqfOzAKY19slcjA1LP7bts6bs7j1+NdBUtR6aL6tfEtu4ve8/cdUjes2cYqZtcaiVAwVb01H4KZpVFvhGxYBQvhGKIWupz2EcJB8oH9plSR3tuvX+/9Yef5msGM6l76UpbW3Wik2SLtgnxqNAS1EMMIpaHuhfzRSzavPTuGkLhVQ4P3LjHyEbfdzLVYvL5oMj/1zwQGAAAAABqxwQ1E8xS0uBxALy94kZGdvANoHAMV9fCpkCc9RLr4zLw2qd6R72cyUV7BFv2lwQ1/LznlAnSmp1eEb8ym0L1C0z7x/3iOljD+8PVN7GWIxsOqbFG/+zXhG7sRbD+W0kqTfzj/D9fMLP6r4Rp84PO48o+LnlSWnKaipWP2N6wC0B9ZSdBcch4A55pY4RmNy6NS/xIB03mXomy7kiojYTC2cLpQDmFV5KR5n1PD89e6KYU6bCAhWwo11pp7vZVQZ/EFb+9p91nlgmkCfGJNOdazmwNOMBN/3rqKNuftetl2YZJlUlgsMEutmj4HTZxgoznzsdJOnIgZd7U2G2pDTIZ7jL1qbgtmOTQ2mOmUr1t9O0egYoAAAAYbWJzZR6U1vuT8Nh1JETXu79gAB0sJjRJtr6xK4eNWXyUOSLFcRmEEh0Y59z8TOS4cn9TvQSF0+Hgv4ipwGAMuMPvyMZ6ftJIXMwtMnwB8IL82nkQcjHHOvdE4R2/knjIwfMVmhSEXC546i5c7gkPG4oo3TC/kOkLsJJPtII9AV7M9D87Wz4c714KLyO5vO6+xVkr9n/W3W7pv+skRgYo9dbnfx4y+Q8edsk+EswL9byl22ebaaFkNII/6VMTD3JAzOOgRl7v9GlsvDfcyB0knOPu2FPxMjoDI5NyU/Buy+YBu9nrm2/5cKF0AxstWhE1RXCilMTDIcn4umv8C2eE042ylqcUhphdE+g345O2IB8uHmcUpr+Gb3kbKU2hgqBttqZz8BTE28bh76CnxzxbZgsel214ah96rmkOTbYccXo0NZCA7LNgDRFjNcuVYe8xJzlNgSNk0/dXwEU+I17Vbwzuj/bgAAADD0uCLqrMKhT0kiutDljs3lLdjtbxjru4l/KS5zrWU79IRK2idHRZ9wzh+An5wC2vJJQW+4ep70v5nYzfLls52GsR0lZeOVjKqyzTAOaq7e/PekYW+l5YIesJIMuDltUEMw3nlKyEbhvnnDILGIfQm4iJC7HKiMAfyQhKGSxp3twq8rtF5DSE6W5vHLe8q+m/fWH+gC794sjPeyhy2/5AoJL/4UPAJRFv8dVLePp/u1S3EgsjAM113BZFBNPtAk1lDhtpg/bCGYBHxSFi2Qh/7p5+a09LO2akcMbHLXrm1i4EaKKB3v0ubZnenxXNKhrBLJULEjtRTiYjbOAdYgvHqKmGxvcZkSqOJSUrL6FRqaIP77UzsaiBMigNUoRAPsVKiHxv3wUJ/SAf62KsbqOSankBGZ86RLH1BWfQzWx7UO1hteuSt3KkMTCyvEoCsCu7JzWC7EZtj1In6rHF99bzUZHtbnoKP0Sr/PkTPA3GHZl/yA/gyDgdbZG6wc8m9MUN3J7TGtl9iGDyioWPEFzWvPCMIGYxxKyhsFTBAiB6KhkHmMda8NK4GxgPjQ9X8LBRehpeBzPtuEBR8hqlERE4HrCWbVLemeP5Qfg561DIAAADSoQVdeQeIOE0bmdk3W12s3M05Ymz8DGHp5BCsDdeYfdnPsknZQdLRmYfIVWS1tIV3whDV6GdFUb/5gcYmzO67TOl8RIXsUvVBVk7bgu05gxhfwmesKbOBbqf8iaY7U7R5kbx3dEY6XFzEmNOkDZ52gCkYf7E1dssTaMOYatz4AuCN3CYPTPo/5hNMyT7efwua5ZvXtOQW248LZBJjgKH2S9y/qgCAfRvT4wgy0tfmLTp9VsvZAnEJY/lBHNRB57QbbMxUlb18JMDBdQkRC698Ug2hatb3mSeQ5tG/O+61w/HNWtHiXqV+vJmVbTLyHZTPej/XwKg4n6v3CBF7UX2jlNfcwUmJcsR49Ts28ORwnQlBkyoCCmUzD5X/lM4vfHxeW+Khb+b6qqWCxPST4T/fK6Knm5Gu7+gwqZRnurXyQYruX5wKdeVkyk4BDcBDP2FyV6EIlDbUQyHXIkA6uZ/jYONPSIacRBJTUqljgN0E4T8Y5nLx5K6d0tCoVSDPMabKeBnP/bvtT5EdzGG92eFOsJ+1q4XTCBuBRHOKcWqAkQuy4OpvWqv5o407UcUJHBIX7mhMNC7DjxZat9insLZfoj5Cxcw5cFLHaI1LZIowuRbQla1y0yflGbIzXhRI67gelNRkKWuULFWSUJCByctUd6aXpyH5wRc2AAACr3IcDdJ73ZwQ/tfwZP7eBAnhcUAkKUnNPKcLTmfDo2Cjnr4riwPFE3TkOSmojkRBZ9NT4ed5DAbLhqiFFP2xafCL4huHL6dgNkAAKb+90AZfmxG6xdaUABqND9nEttmKWl3dmXyNXtmCAJ6mQ8oAvmU+tTxVj7m8OOuUVe0Gfos5aWFJbfhmVYkgltOUBs1aH8osag91AuIIyx9xTZZAHeGayezloceUyRml3kuBCjWFD4YJ349fgSYb5ydGocy57NDWYN5LfNW/vooeHHucgDMqhmk6aUVuNWlz1dWO58glnvcdofQburkui0GIXtokEbyvDVwXxbvAJ02W7ZLVcHZ7tzRwjWo0xQ767dyRt0wv8hGwYYFb+P7yyVXj8v/MuenW5XSIcACcgE6FEY6LVTSqV/ml4ESbQo6Yq/SYmyC07IwU4fYUjToCvsqiE07tzAo78PX1QU9JV7DdbGVWt0wbYEzJxVTPzb8sTbY+nIe0gkHff2C/ywX6AqmEagObMMPkVyh+14dJUfut1R4AKgYdPnOHWFu7munEgJP4kzPYTdqkpZz3WmgIH+hgFv05V5xQ78IsdMxFX1F/R73Hwh5E8Kv9TVFVoYke96EAOBwPoSVh6QjngGK+Z1XPw0FuIkfKOQgW99NBD98IP499SMgoVZmBetdNkMvpCG5/OOjAkvkFQRIF3x5eT2M5dqYvWtA1cN9jGi2iqwT/ACAYGBjSMqeyfc4zqCJ+vfKBP5JxNF9wC8vLVm4PXOG3HSpKVcK5Sg/v5l5ZekmkbrFYSYPBofxigVAysQLePt+P7sv3+8u98a5UQJl399ObE+5hFtbdMuqi/xNVDbvXOCaEAdUjoNFieE4R2K9P5RwF5P9rB7PcBXQQkx4aqQO0/AnPYeRICWkJhppOhii9PclRxOyo0gnehiinKLZtv4Sda/O1gNvmOrtUyA6I1RF50iCY4AAAGMEAWBv8cKWkuIVyGtjFkB81fIXAK2aaAF5R+uzfiN6ApmF3jckMXOKa8c/l1SLvfRbdcZ7AGjR29LGRCfzhrupkKKXRw0cLpb1W8AIj6RSr0joMFYUwGfzLCEDAIMabohGnxaqWK+BQjRCMBh4Ij6d4+u/4EF/lQDPKrIaOwUqsC3Mn6YF0WmEVoWag4VK0sxwJZ8m/nHQDxXTZEFuJkkJfDuyKqKxXawmDPVq1STpHirz8ljphDKu8s329qXdElWh5QxpZX361BxKWUC537h416wpA8M5fMI3iSU25bjHV+gaQ7hYC/x45v6lPNcw4WY/lGUtM2fphEWaBv/tKgzMkklT/9Ul8X4gwPvmX9cXl6anpGJOW7sSAsIerK5ENQp4vUjvyPVPaK7tRvH5ywTQMUxK8acdVtrjMp3S0U7To+qCgwOC88UGQnH7TAnrrntEfTf3+O8KydS2LNw76AHWKLeyBlpiUqpxdEND1oAu9b8Is9IB50QbRrpK1Mru7CEXEdC/SdqATkaVVBZGudVJmSO+zvI4rX3XD8Upo/ltX3txsmgoB/LEgElvjsxNMHqYEJnS5XGPH2i6CHn8FQnizhnzrNS9RUKvgxfjmxb1eP6Ze68h06onFMg1gNdy2fVVrJuZcQn6L2+JF5rbKb8tNCmpSSz7HVXFPa30zzc/YxOBhJwep6mc+2mcyHg8FAhK2/UAh5J9pUNedR8vwboQLbW6ICrlqge/7URqa4NquweKhzCGeA4aboNgokLOwAkw7yaIUYf369xdz/s0erfcylMC6Pp4sU0ItDx2ToKEdjzVsfATXH8dGZP2t0YO9Uow1rtPAeeQBg9GKIqJdkusmao9AbUR18BPzTuDY9tdB+Z18fOkPPH4xLzxMxGYyIWB5hdkIrRsahvFufDehhomkUbs6mQAb++V1ZnLx8TJQXwLUfaHR3e+Cl42OXhY8YAAAFGhrwU8IQpN1RUU9aOuT3lgUbfjCWvxyX2F9RJzrSXdqDdqJV93X3i8KLbgwTsmRiiNyXL0TJQbqYid/jA0hT6hnTrYaQqQZHwkTeWgJiRXeJzXQSTCz7hES7ZklRbQCRIfc+3KRySHcc7vSmYwsF/F83iNqj6gW0K6ZFLbDMjBcz4JzEAGClef/XNIzvbid5QUtsICGpTA13DosT9t12Mvc0CjScItOBe1MY5Dyw1ekAxPrxdfEl1Mw5Mb+z416Xa3EzNDG34Z9F3l8Afy8swNvqMVnXd8BPfDLiyRkN0AMxqR4JV7c2+i1/g90L3SEr8Z5mO31CfFC2jWzEubfUHHGBxjaAy6+mjLuXdYMIHC/Ab86MeIwxMuiYO8fypB7PK8V+Brr8WBxuIOqw1Big6+sXd/RitV/eiRS7xgkgFfjI3kX4CdcbL0RCcnBwQBHvDxKVAh+9nU1InrVJ+5X55kGubkyQW4zc/BNh1CKXuJIxhjJOAkAx0NIywaB+2nJ6fcxyrwdhZWsLBEtDp+3k9o698uqWMFVV8M8KNf1pttkRvfs/f7pznY+awAkmVKeC2LNaupdAh8BrUGziK/eqDLX36k66/GgX/1ArSS1fkURV993UpAs6UeZ2KDiE2xAfpuDMmnQUn2OLOjR8gwntiEsudt/ZPsJapvfAJLxs6Ca5z2rxEbEc7i3nVERoWWzi0bvL52Es/03E32FMM+V33iRKpOk72t0VC7WoxYkMLYdENOyE5iG2w6IdQfZz1IYKdDawqLy1SziS3PjQjQJDfnjt/8EcHGVdqtM6XX4RFdypUgFjTRP7sq17jp2Tz7x7oV5o8Hqbsgw2h65kJouMXgGi/6hnJSj3sJHvmQORyK4DSBZL/4xCCGGjuHMAAAAB2GT6Wnz7QyHsBKql0xKokfI4qSYNL5HvkAa2TLhWMlEc4WmQziTUgQ4Fh/EWh/DVozIMXBvtmg9axSqFrtIGMlDLuYRNKLLujwEGbgW6x6M8fyPN18xc8PIGk5qBl7LtDNoPXsPUHa7SZLUI/ECdU7eMpLfvwECnXFINOdzgZxJC/0wTHXIy1husmi0NhjgBK2pDbhyhiF1LCyOBNqeNtJ3Q5YVGbajVGypM3JiQoriUl9Shz3HI99Dh5l0lhqXM5219oF31/NoV/FVmKipozqwIOmwVWRl5MdszE5uph2rDoQfSwMZtDXsZpHDUvHIbr+YB5BF83d+DayinoDKfsedrDDMvPeGmo9PP/7R96RVWE5v5BisGG7oguxFiIfjJ3uKmsdqBQ2emdhK3du9tfKJKGJFyksJplxLvOSm1PHINBI5T4RTFy0rLw0owbDVMYhKei+3mfvEDoArztq1FbAu/DWD0mTaWcxqHiZVYRMUGzZdBuPZviiSpTjXsjgXHb1/dfEbu/6lb1KQ1FNMPz1Edfg4qltKQZSj4ffI+6grGC746Glz5MHGgwe2nsvHrYR6yiK1FTD5PWWUosIxeZ9XH+YBOz61aKltHhlSuuMtqksqS7D5YFTN5Xy67YuiMBSGa/zwAydvrkzWoLTUO9H0HchYij+8zua2xis3SxXnnf1xpNbqByyJgv7Ud5XWQjGdyxbsF6352zfGkTL9OC46DBTlpzpnl4gXP4sxCW8oQcyWNUuUq+LFuKuqcDKwhKKQJpVuSJsCemLmVtXgpZJ4PlrfKDgBEWnmLXnOiDofFlhHR3aI+E4XVplitghZN4NoXUub8/e8OENCn8IxRKm+8tACIwAAAFfOItrm2hEGLW1jc+tGHtUoOA1G2OIqJDUqjItknpIgYAFGhIQhZekRNu6Ns4s2c9JKiP9SscKWj8dwbPhc1JSWkwHL8W/q3YvMiJcbqoP8oxy+BRMm7gCIU4VnKLcHIFoq/HrGyzvS+2+/i70dmwvnqo81r+9giX9Hk5zN9oV8NlRfUcMs4L7m3HIMAiorXs6FQ9kcRlig+MmiRXieRVFjnNmhTjTVR2ITa1LFZwo9G9YbXgaSnvThxN0JEVWzhV8BXdLk5PL97EVuacwvMhHNm7MmZgmDTnZga96xNKT9AGDrY5zSUejf/OLtjdNkYBCAigzaaDfZUqTKfYAGmliYP+nkUjvB5l5/qYk5+tbs2qhdF7PaTtOpcRoC/2M5f8u3EoU7eJsovQ5KheBneFjgICECvbYW69ddCb9nU6g3q3BIlvyc5gPXee1XFpvTHb0g0GxxM5Nn17pyGX0vw65klC1r7MEolSqlqK5auxaRfsp13xcou/cftVTRF22T8hpFmBT9iEyWt3p+BCB6qhd/vMyLvLwc3uFFlpAlx+Jmy8kBBF3f+N9LSu/W7eLoHo1/vGWTkweGXiXGcN/quB2lHkvg8sihFbe/fjeGKIXGLuhhlq6fGPbbYfR3THk6/HgHwjjle3T/l68lQX+AevD+NhzbVV4VraFTProzixHLkFEvYTswTVflfnjSBX1xT5Qw4W54E0r6STcZ/JMx+haD0y1Xdjwe2MOsWiSrQ6nBpjuHvqNTlR7wMHPfP3g+ZItsw5r5zA7MYzLNz7aQcnX2Q2wAAAEllBzQqjFySHphOYegiWN6TEfdKRdsL9AfgEQDcAB6Glmmu0qottVN0wro/mhP9cztPQaZEXbSnXwWcpskDT1hseo4W/l0Gc5iRqlfk9QlWu1LzEdNZ6LULdGREhMmlxlwU/qkBshESy5E02Fk8yCZCqvO+ZqjX5cXznVgNvPghDKM4Pcwp1Gk8gKKpTeu9yJpP4ijxsRZOY3iJ65a9XNuIOWlCvxkAXf3jUxaUvod/t12upzLqaF2c2LzA+kbHYVt+F2/A45b9n4Q9AE3wx/e7e/0G05gQ4sCimWlzZ/fTfM4n4C+wFKrL64a4BnJHnYS0PylH1Oa+vuNCsDmsid8oGVKqSmcUicygeCdANJsNdMW31mR59i46ZTDPsGz/cnok1YZCBTZyACl7gG+54HVQj13wd52FCiV02KEnT2ynP3TsttJAXDN6cZ3Q/IIJuy1r9zBSBwGDYe0u8NOQxvxYGBW1Blj9nrrz0SV9gM/4kOpGBKqCJPvIHMaoV5RVX0diEbL/R+DYzFDKx/q8hrLi8kjEPyy4NOL0matn9gY6enU8tGZVcS0F2j0WYNt8Yl1mI49mgtkQS4UqEWnpDijiVXuICj/vVHb8xvCvUcb8XaWGN1dQ6cSe1xw7G2IIRmpgO7OCq1ZZ6u4Q2mlTVY6SplBFnWxVqxgpFdMDerkPHCTZFq3kvvYqh1LhIsplJJK4M2AM0kiznJmrJPYGdYyF0GbQZoP5QAAACm4AggTdg0qLSDqIaormsMqH5NfKDwKy3i4dFDDyfuKFw/TBeJuRdQEx2FtHYmDq/2u9tygE8aXnT/vZSSdQTmEUoV+gh8xq0SLQ9b+VU75ejtUycpUAwQgJhrA88XSdYIQVxEvrQ+mzJypR3/HwJ+r6wYjdybbNT+xfF7lhY4LwT4mAr6mP+GARg5yabXo1FeA2q2JSgf+et5QhTXQVBn2A/fguWqOEYkEAaxQP+Ek19+CO0UJj+VPkFZ8f0kEuFC2Q+n7sDMlzD6zHdl4ICs5C4txoteDLmYreNIGgC3lO32n8STzu+hYyOuB8oK4435UdnKrC1LOc3ealnjcyqupnrt5Xx1Ez52n+mazP9R4cgmdffgng9ntT6BQhH1uwNyrubTlOt1ECZsp+z8ZTzFjnH5MUnsmV0X+2cEzwV+QZY16AHn3UAMPJdmNsebK75LSGtP5eZ/NfAuf0DiY2znW1W39d1oJeKszDczPAD3SBECh8PEMK+pz0RxW1+xWAq+o8iW7pIs++JU1Q3ku3Z9xxFS0/c+i6t5IEFB7wR4sZ7IHARdLkdm9dOfjL98BZzP0r6dDq9NUADEw+PLr/hcVKM6ffj5N2HUJVDyhzQLJWajm+rqdubMbb3m25TsISpL3s7UzXQqLcwADYUx9qPu/wtYi7vrhhfaWD4FBFrJMkngiFHFcvXo2HfaUTgdDdgE6O2yRJHE5ZlJGY+lLIICj83+ukSNH5A7NQGcrRTOc3M1hcn1AHuE7AxXlGoIumkoia1As/3AKKer8kmU4rrYmOTi7qQK8agx4iWVNziZTRZAKSj3b2RCv1zDvSoRMjd1RigPMrFnPcy7x7+HMuBk9E3JAHKqo98K28BrOs3trpPxcwtDfWpv3znqXtcTnMwsOcTp+vQDozecrd06p6HpW6IA5+/zmXNSAKWbvWErQrrSWe6Q07x7c9waWeY9JNSRG41Owac94vdXxZf4gwsUD8kovnt3DG8MYEzBoVs7tMaJUQz978ZX2Zqfg/CPQc3yewMgK3FtWTB2rdlaIvVCsehHqCfo+M+X7UwgPT7C/N6GGLnzmvdEgynBFtBd8s9/6ZPK3vU6kgIc/ChVHUiBZ5Gio649JuvzGuY32AxVPcBi2jpETdUUQ8xaPotl9S0ldZYHbb9VbkX0zLmKlVROuX3QirXTnVDDvy8+0afXBlaBapeGe9I/GyVicMcq5mueD1JnQRaOxF9wcShb0OFqL4kmdMetCDMW7PuF8gp6goqm72yYTXTt8MwDd6joskzI1chfLnenG2JRDyewm2DSOsh7qqeQuwhlYxieH9VGd+M/SW6LcV9A8oyIVq2F8SyHqVOJM+NXbgObMFSP8qF+kKnzNbvZKw/iLTcnKy2zEInmWyhI/wK/d8O37n2BNp4cEHK0vs0/3mD1c1KsC4Fv2n6kQUdp2WIN2Wt+1x9fTvmttKceXmpha55pWvhvmqyeUB18eFlRiJ2mUgi5Ev+KUpdN61jUxY3c1XOaJMsC4xBlBuvvkJ2UXtTOx+6ogFrFgx2jDE9O88d4LjdpLyRD59a6unEnTjgib8sqYLlDTR2mmHjEP/5EuLIUvPDGW9UH/Q8zvQo6xrFeG2O9BLI+LPBLfjfBP1mVhz7vu6jsyHjAGKWT6WJxf1MFobmiX7C13DsFtYHxiY/I6Bu77SxSKmQifcOFB8W3CAsYFqf5oPC8Sm7DoPSZ7VaIecEfUYX94JKjoHNSkpcPx91gf3/yMCFOl32WJ7aLUmuPiKD0m1gJ+sgIVhIXmP+37NCzrNwON8olVrLNWbcNGSFxaujZ5nqracXm83tYeyHwBzK7XU00jYI0wLBDk5Q1ZTvDXEeu3W5bsWCGRPmEcTXwj+d3fHu4/Y44WlS54S28CT1cfDk47Ypzxn6wQErClMehBfJ4oxVZp//zojW825htVVYzizJJB+CjxS/Wp41IsYqgrfwGFRRgAAAAt1xagxxb55eXn385QHrRTFdw8g8rWuNxodgjS/SOxCZt0s0rXjSHUn+ggSYILrnrASHKVvWEGhwKzUy/+TxRjAbSkWjEW8lBuZjbCCp6qbfuVCK9tAkxmgdFef55GgA+OX+Q6ZobfDmTEcKjFDRFDSrBdKeEQVmNx6n0k6T/9Z3oL7NSXQdZGRD9WVf+AVtW1Ovcq1CoRBnZeRPSwlNrOUAsaD0jhk5Wsz2wGmhGR6DfJp+9t5yEszdM7ncT1yzwWeJWfSvpr5C7NZope0EPHOntCqsM84rrqgAqbru67sBw57Ik/gZOS13UJNhGbf/HFa0ev0HwjmxvoyhHAeuSKqOYmJK7YoPN1GbFAK9jaALOB8dpvAVs946k7f9TIflT7E4fJPPjIbXl/CO7V3ug9C/ArULLE3paak8hj5vLZSHdu6KUcaARhXn+dKVCPp7WPPo5v9c03ru3nd8evRdoHx/j8zziC7iJezZuCX6AgYuFkBNfiHGJyLNbCg56p49mGzA+j0xcJ4GmFLY2xsV6q7HUk2RGX647nx/6QIxzS7LN7N9G5VIYIaN1MhnJPEC9n4uctjaxaO41zBD47PdGWaL+kLqjZE8TPi3FTGUxHHwGrsTK03+SPvToQJs0tZjSVJzdaQU+fan5YiH+MJPFFJjxsl8j0+yzryP3/Z4NOSXQ50oQak9Y73kguqQJ1x6km3J+nG7vDaTHuSXocH03fM6OnzYHvMVUJlUhJDSLMj49cFZb+elBRUKoRn3IhmsMiCDS4fnZjob1dVrCynzBqbUqoGgWWd6eZBSA4hAxl9fW0V8pZbJTL0AZ9Sp2SrMmMykaZjM8Go2e+CrHWNQO9JjU6eXUvs2Xd3dc+OyGxPxRIUA6G/KdnIZ3FelAai0AvXdOUxNU9K4r3e7URCkgW+rZS+aMij5otpPcUkH9MNKXwX7MZUF4rzMr4jFX5UQDbeDqujuI58z11KnppTDWoIpCbnjLRBo/xMd45Uj9+RDEjVpaqXtwSv+gRHhpQTf5lsLMpXUCtPVZr5yAqGxlUY0cDCEFcrTXLtxz5OubPuWBmgoBe0MRlJz8dUHctA/2CUZds5tSheX4uLrPP+6+t8oCHEBHbs364g9P6zubBYuTn4ytwypMTANePh9kzTxA0hb3JsD1iLAzA6vvdlT1c6pS/zNSoc//SENZGrCxNjjvJugGhZthImnQldyp/cOP73Ipbkc9nJzGXWZQ29PBzX6/PG3/X9NOsdKaH3OBTGfCKtkOixK2hboRounxekrUUGzjeOXwlDJ/dwIrz/umE4xTJ+YKiRNzhGmsKm+wsbJrpspAXWcK4WxE0OPrgNAzESwyz/JU6fmn9mr9E5J4Y5CjIEJFM+eKBeQQClUx5romYtq6h4OMtje86T8ZwmD3iV49wgLbxJIL216KsTZ9f5dTU3/StqGGQrMu1e0QA9I6e4gWIUY8IhQ4NUOtbXrcT9+3OB2Se2hT+XnKRa8upHFgQkLVNtsdmVKOLW2/gwm0P38h+yETESLUp1Ii9U2J4nREan97M9tjmrCK7+bSlN7yruTJEeYxNx+sFMp5Uu+aAGm0iA9bJAPus9HBbgAAAVfo1LsvWA/prsna00KE+TsxfWDq4QqvgUvKO38snEieaPZQsqBBpB6+pDfb7JS/DZ1w7INxjqlkW5k2rV3D8JSLVvWSnm+RskzmN+E0LtDB1Y/vVz2jk9FDdi3KsRJbEOaasOKPWenvFEvSSyOAmmkTt+6yc+9QPcFHKH62I6pHr+IStcMJdGhdO9u+QFFe/Yt/mrYLHSr6v70Xhlr9DWMDOALmDYM04X8kEHQG5fqQKoB+sUSf2Th+GhVk+EMCanLKmqSXij53MyEnTBy/diBsDnNFIRtvItNIuG1q6vlA/Xh4w8olTJ594mJeOo1OY3Itd8TsSi7todD3Z+HGs2t9erpfZSTsURKaifByTv8JSzx1WCw/bnsnHJh0xR8HALhjc6+AqgKvij3R1qcJ8Q2ox08ipXaN0P7dhTXvynKGFVuVCV/71GMYcLFWj8f6GlQL7sPgfbgbYj0F1ybswADEYKic1kjWcI9pK18XNBLNLS1Pt2oyJZtETmGVOVE/5CFEYx2hRk1Nyfx4GfsrdZLqIDWwbPc1CX/CoJkiiwOimX9G5fAm7C+wqEofANepOdLGB1VW3zkMrm6HqgI3mPyeGTOWEcUz+f81X0fnRKSvdUfmMLTksRe8qe6A6QOpIwgsaqdzuvT93uRLpSEAj6JoGtBXOBmbd/Qms4IVDm8RkTxaM4tTvUlGseOIfxID38w39YlvmseSzwKTc9yTTb+315bMNbibkg4GR89fDfy2PZfJZz8knHWMBMxpAkKeA4RZZk5QIYayjB54OZ3QsWpcckAgppgHbGnfMxdIQXUQ2HAulMEfKRTyGFr8zGRu9G8jmxECbrszS5nki8q1cpeLB2E2xFYvZ0IictU3NE/IHQdykwKYlKWvFr0Z5rKgUYzKY+ZpAURZs6B3DDA3fBsYKA6MT/xU+ubw7u5e9Unrq/IaEJxN/SVIO44ie9tB+3MnHslsd+BGh4TIytnoxBoY6YREcT2Y4csPKCJFa+0BhwKObbhmDs8ANxO0/9Xop7ChTIvDccwvhSoF8Ihf5dEyCkCO6HXiBENT4ghCiZ2FR2GHDscqGx6heGAVuk/JKKGgqGn1pA06xxbMwDt2HdlJMYfvkpnVcMphVOgTUDRSavtPaHnuIzmQ+vz+LZK2ZsT9U7G8UZlCZi9sDAbCl4gEsJzXtYK4+EFeLCYOwYBFkCHrhrnvFGT00Yzwb1QRHDRn0CJQBHBynL3LuhzVAGjC5LWgD2QMVw8i6OcJK82Dsjm/OZJxfpjA4kR6vLc/fQFux62duEjTEQh1UBOshT8j19D1/lxxD/zF8swGjLp0PrY+XaH50rv/TmkAAACMf0DKD4WsFYA3ayOQ1y1ASvfeyXkKkt0Dj7tYXqN5PpZq0QE0lmEuMDxnkTUSIDpFa67mxEyK4pSebCYB3MUg9PcjyFFFzfNUnXmcMDEWPCUR/+rsqjmLnkWCYxFOR0gbxOiW5w6fGHz1r3Ai6r/+j0TnYtulwHa4S9uwCpSLBXNXlmIsnGVV4akmd37QpMBRRusJzHsL7LWNmqlGhojiSVinEZae51uefKuTIk/bAqU5jGfSbzW3JClT4Akx0t3N9evolsZkaX5z9+VvKvsX0row/fGlXApIXblPWYyuMJBEM8Rb3AuEXcvNv9TcrmvaqEJJqINFOgMJz98ZZFu8iZ2RU9+2ox4j3SyhV8xv20SsqzrK0rGsApqpEGBI90O2jFM6wp3iF/ExLkhm5F/z88nusGvgX4fTVy9QaoRJ9Y8XWqcPoM2nNfv28D4YbngnSUO6yJoC3g2kUhy+7NmMQ4inz6lnagEKVkMdepiogg2FxMqXPr65fDEV/ytacpdD8+i91jjabBj1iF0Dt/g9i3459Ba9nPdizbm+G8/zjekpaCmoczmwZkrQWVU8MbzhkB0pE95nwhrouzFb49VYiXoRBg9w+i8gbkkGMOXvzr4uKo7rcSE49BfSJQf0zybmGt+/i0TNYJn8kFJIqIb5SQG0rq+/k9NHn4V5187TP0oHRxMLVfi4PvX5KSMTbnWFOBkUew/jo0u1odHn8Pz+xPFKa5O+nSpGyNcQrJ4oLdPX+j8kwLqoxGrStDwN0bFwcJMvixHXp24Txwp7JONWoOS6VFKl+fH0BmS0wAACJCWIxjcmgtExbPXmLxP/XIdTYOs3XrKMS2TXvjSTqQII7lZNfaMjH/5jrg2n/+Xgbs9F+kSNKtaL0fvr5ejH2tZb7BcYSh1KnKItgnlNssOeVxFHUxeKCXwJ5TBXkxyqiwbVGAmNds+oG1ZmSRGELt6kFuwyHV3yUMIeexv/z9bGMMOlVeqzKl69lhMyfMwtM9yaxfEayjjhyH85qSnh7UkF+bgMSF9fS1YnUwU6uTIlDh3w4GBKJn1ORXISCvYi/I8O7+lq0laRNqFIEtFo7Z5KObqTjmO+dklz3mRbuQE8QHYpPinw2c7veG0FK0ZTYy6a/kDzHXeAHn0OFdt7PySkXE3/Xy73F3l/NBEwplC0UoHZUATgf+WojDqeyFaL3CblhahNj+e4RJgEmPyzT7gDnDpx1+6wZvpOYmZ/qXJB5QLg4VJI2UeVNQXNH3W4aZf947z9XyZut3OiSgm+OaQAyWZ1vroKVMFQ7f2hsTlWPe6SPPcsJiWRloDhT+fKClocqgSOi53QSC2u1tGLUOHpNecI2SgNoUpS0Zk0eoLKlzUc8/hivnhN21CQ1YdfA+Fg4nQB6wNyrwC4DsclDrTIzSuzGkfSh3I1xTseI+paFlBRAfaNnqSc7uWBzlnzdCIAAAABa8DwNe2JX1fFNodoiFr/3TuRgeQkBtDP06tA6UkLeHmYl1Q3U7YTYNymrx6BiqgYVzAVeszVW0I4bH5MDWQjMCry1D0vP8W9x4MDx1lfo+qYsiU5kuE30ZlrDM1XdlNXP+FQfKRqDP7hWfx1FRuJJ1mrk3aBaUdTAkcgaEf7ZJpvSGp7rQQfn6eXRfQFc/64ouxh4f1/yglj0CmmiblZhIdJDm9obOv1/NvADLSFREMZiEHP5EA/mMEMMuI+YLXcI+GSobVfCq2h2Djm6xBAli5IHX+4KJfGN5eVWxZh93Jj7JH+Z4VFtuDB2tRJz3yJi5XJ7y9HkDJzrhSwkWexYi6PyZNEFv4bUZKIMR3CLWVMW6FjzeDpbPjkRa3IdcWr3ALTX5gC0w2qlsY1l1XzvIO2AZQ8qYvepnTN9UfQidfFBzlKIX8t4uyMPonjS3iN5+gE+FIHFxE8Cvqc63zQFqEOLePj6wxuNPBZ+XVTlonWA4jf32xQKpDXDIWi6Vivs7uBfula3/iG9GoiGm001ZqUWMzDgnb8DJYChi2/qS8GMxePuw6efAsizyreisScWq1gMX64E/tpyjgD98a8H08FeLzOCfl/+zY43pYNgzAhr4pn7hGXAJ352hpx7rBLQtWjeUD/CWdVCUM6zrNMxhwropMcjvhRKOWdvCVPQJdZP+5r8pWaSH3jZ4YZ4amwkVO8ZBFruKTAGD4zOjsiiqVeUKdHj0ZNipfYmVjkruGNMr54qxZu/co9jgzxo1SRPpxVyrgr1GEV0f+T+MPrwF4a9z9N6MetNsPQefEbzYIpMKCZ39148l3MaGVtjTsklEXr5bTES0BTiDl6VylvWFZE8ouoZUSjfNiC6RUUJIK9AmW+kurex1XmtmqOyDousq+SYDHjXKQCtXAUPlp+ZqghLTR9VAyQ4QksF1A+eucuBxPoa2RuZ4p8YEe2i2iGvQ0C5XvNCEeO+j7apDeoVAAAAEYbGanzv/0V++TA7Mjs1S+U1yM1aJZMtWJHEhc+kcYFH+9VjONrhwAfNqXUHgacxn9nFqHTp4SLptpm4sKFEJboGc9ff/Wtd0FT2iSfaW22R4xqNTBKFRcAUyrxTzOrjc0bEAZVD0nm8o6e8RcHHL2GuXuAWQZqUE1wbhDuo4ShEhBn579/SDJkDSaFTsdRlvLlLcnbjicPnCh9kXeMR8u4FxRCBSPQFcoL8jPCXgxWf7iNQ+Oc3nG/uqWqYvcdt36PlcR3nzt5os9j667G20MDfepk72/z5CfWxsRyQNHApDSFEMTBPMC7QLFkgqxnVenNAGxlOqenVPN6WJoCyV56hRB+5JkudwWtqftqBwkS/pc0+4W9yWihD4alJsF907nVVW/2jtM77CtZZAd4mvllYjllvxJgJnafIvPTdP6VU9m+5OiMOIyZDzURpu9aj0QfuVEgQN/HG36wl6Cs5bfjmJs7P7zBaQ3nkp9O5DowBj1hXK/o11Fg19FuZurEJ5QgBkmowccie+9/1r1u9m/HQ6YP/EX8Fa1fuyeUcItot2rO7XW1wtRZZ4M3yE6RDX47/HslhOiBZ5+AKP5Pogfuwm75tc7Ip0Xti51oO/Hh+jD9FnEf/M1Gdf//lm489GuJzVEaOOumrIlH8o8hc0mQS+HpgvqoqFxuKLXlliNMzlaIOXkZXl78vE4IK1oyjX51BSOoljcA2IP18xM1m4m72hXYs1/SjWp/AqIiaIgrFrIljQZoy5TD3GzSwcCyr89lrfHHTO2R+inZIx0wrCkkwAAAAAG+g16M+epMlSba5cnZxJ86LIX7Q32UWn2IXUGA/NUhFHAtZjjQTA9etmkTESrTf2B/5NFGHdRrN4/uwKyXuek33NcWZM1TUPhCX/yF0EqEa39aSBgx3YwCAD9fxtnnO7hCTK93m3FSEa67r2A0BhzWHTa73Idv1Q9zlbIXcpwFMJjW2MXq+V8OPw9d/xzwqsdaQQbaqRyh9lmnhk4LclV14wRovtTHLIK0Z68FrgH/UxHCbEOMD+Lmg4BmMW22xf239FhKGtGbM5DFRfbghFHpiM+/IpM6PCPZESZbLdkc41Qyw95+JbDoFO+iW2Qtvu0hOh9iZBBaoTxfuFOuh2eDOmSBiXO7kHNhRbuMTJJkmW1uxEIH1u5qR4Xxe+6Q5/ggFMY+sRj7zwqYBsiwwpa9r/jBRBqgTiXvoKcXwzHP3sZU14LaQAteHSozSE3AxgxdN13ugwF2tKqhN/VZsMuR6uXLL3z66aaUpNgbvIMugC6bUfMqIiDSZwVOYlxj6OoKaown7lsTGeLsww/nep9a9DT06vv8h9gRCOd3Xj8HrLuzvHZOp/ARrJFhUlgBqQIYqn/y7dcxAWtjv8VZjiNMdP04UFRIW4AAAAQ87LeVSdmJ2RIeIfkO4v6FjF7D08Lc4YwDeybgXWmrWgdd2C1qm46Rx8p/rVTm4UMIyt5JNolZL7qbfKY9y2kWYcYPG4CtQd8eqRgjKsSS3roujE0glITOF+lgU902acYcKpHAOQEU2Yjk1ZvOndE7q0Is/CNGSYO4Ng780oH7sCuuZvQh8AAiJO0M8zFNNGZZWDtEHEDDWLrTTX5g2t8ptx2HLHF7LiJVVYiAgpFXwGk+SsQVZ02XAXLGBAWnk16xCLSKylLeChSpwdTG/REq/Vz7Y8XI7oJmRvCwTyOn5sxAXBvsmwvzBxp18Cz9eQEPDZB0fXNjcMpEXE7FBVZHxcdxxenQ1zEY8quhr0NBow4tUDk194tmoLMCEea+1tgGBkqhSR5NT9KOylxKRWV4SBy+/aWEeAnMqxX11QkZ7tMkPuYwWk5DVK2qKtYRwIaaMeby7mSYAJz3BDGhFnYiUN1U/AiN/uveYdImzGdyCEwgvBSD7oG9YB75ziKDkL32Ek/rY3ICWe+ZXZIBnYiLPdqa8W558yYAA1xROUTkw3En+030XCWNj/7YlCCKgoQ4BGwfpIVZtH7804nAaPWtOso7X2wwJYW462Mw/77wh7oxR413XZGYPSiwCfM2OZW3LRKZ/O6+4cOEKHTTxudGNqpP6db2SDYb8Jcrnv7YdL7FLkJcDEFey5fp9NmB17iAysgdkpREFr+I/Yl+CWOmFeCZzZVdW69/dS3gLIso94xe66OfE0Fw8CtyaBbjnXC6LgAAAA7eTBp0FfyaqUH4HWzlEplg8XI0tOGITJAciVupAaPlIsGiFQzX/8RaXNZ1Z7pl1SOUpEKI98x4xj/EAMLosn1IaZgKZFZZ3Msa5NHtu1ylohvDZG02YfAiEXofnZuq+xchzZ+H4cJeAl1twmNKt3JQIxH/F1XHOHQ/86n9CMlyBXyP4kzcwNZ2RvWiTWhE3+cHHBQ365i04RI/gKtKQKcRjKzAkydfL5LaJCzBuwFbc1Lc04Bcga3SDLQJFA/Q+xq7g0EYA1WKdzGy5Qhi2i/Y0Cn1g+si6apHaKuN6camcf+4/jFYtCrmKtbpIH9ac00DJt8kfl9JatrYbe0wWJgd+/FukkPR9/p/YF1HXnhbPAR4g9Xjpi5+QOmRP5CLWYNJoPg4uwuodjwf7FSfHR9/FhQ4vjxSwpVteEkxR3+8nTvUl9BqjemAdD9ONjn1ipiPhIM1DJ10bW9MFo56nGa2+idkr2wl84W40Lg8aMeMwwyu4Oix+CepGZoSvqw8WMw6uvFymHzGqv+BWG6PcxxxhU3f0rTX2j7ujvg2xM2XnAPtxbm1nfDGlaZzuE0drWdbdRNE+v1Bmm8WB2no6o5cXfJenGOhY8udM2sU0u+BSzZjoQD/YmnO9XHwX742Z1L9ot88JdZeNN8IXCIU/LQg0X6tqaPD1cVe0KpuLVYJlRQ6NZbeL+oj14tnh5cXIJX0kZYGewQ+eOgobME4kXHKNzXtKz+BZRDPmg+ANFE2tyd+yYqSUCXIZzKgbM5tZCPiNzF/e9ekUeVWEoFof1i6TmFpFBvwlmorGmFtc3XUVgAt4qqKmxOY5mZjwHoNS3PYBolsxH5hk82OXZy8wwnTPmC7dVQcMkuJtrCpjTsK06UzxYgF97uZDe8H+A+LyAaJXYlNljB50Z0UtAya3whcbotgQnTTcPT/qYy/NLn9W6695scc4Yt12SIHPAqJfnzVcpiTjdBBHxqLVdf/OKtAx5C8y78PYIu+q8pgL1bI8UVZt7sdHlgPLRiz3AAAABTKAt5M/cULXFGyj/+E8CEfspwbXMRQBMOdKx9Q5e61wkcxqMUc+yw7EGPUjtM31B+9pOI/OeIG0U07eAWkUnU+N7MOKcq3coTDmYpQtwsGFReQN/VwTLirAtEpBKspc2QJgzKkTmerPRpgJv1e3JwusqIg/KC0ZpqNMslvEqfrKtuF1Pss4KYIRfKOEwtSOP7adFWk0Dm/ifCcN4hPnTlMvU6B28uVTDr80l3dhYp8RyWMXzAj+SQaaHIWasqkZsLAJnD1GDmnn507ffkapBRS81bu3ptXNXK74ZxSTomwST/5plrcYD3DxZt+rC/35e8Z915+ZTeYsQFVJiZd40y8et6BlWyi+z9jf1FQldXuCiC7eFcAmMdbMDDHXVAQPSRuTc+KN8Btop7M4jX9GLYZhAxH6HpTxgNT1X15nJqRFjTLleA9q0egC1KBgKULNlbMDO2ycOkez2D+6Mq4Ukvcr1TK+LiE5yaYvKw10b/QXU3x7zkRmVvweTOqBXBnhdDSFHM5elgKMigyOg8nqy8m8H4BCE1m3wiFWygqZS9yPt94Sjn4S3xGcySUebudaj5vUQKRh8W7wJQnwUNmwmwQQsBMJLkrYD2BX6gCaDKsqC6S2nMS60tVN5mXq3XCvZw+ccWHCeaPCSM4ud3eme8RyZEK0JChdJ3M8yxM4FaLLxfWUKacD7IxolGuQf6L+m65khwiYaP5tk3qMbT2P/+bbVDBesyySa0deLfiiaSO9r/YLqG4zBG8ea53k6FGry3KlxN1Alyypvgz2SegDP6zmrKVGCsuzvJbsL7ZkDBGAuPPQ0TscF2U9HMALGjrgsVlKiGQsFBaaVeTj423p0VWKdZWDOEsBL9SG1Npf8bJabdbep5FMttpCocx4p09rIibJWm/vLIbdzCL53WE0/uO/yLgGHqsxLJGbcDhDW9XJ2PJIAdL8fVbj5JJ/gIHGS5xYKo3nffTAyVifZfpD8ugto9QJuKTPLfB+MyiO540n93d3y97piIutf1c79SqxgNK3ApvRx/7+9rRjsQVvPNDHcs/RhoTcbcR0/J4+k4pnlNN6rwM1J+GmLtVkZtp5nd7AcTcQqCyQAeBY/mHr9M9Gg8/qfSDXTAwYS29cxG2lo4cSVzqZCPLuacdugfkRQ7qMFiZAOfwuNMGskedGMAaINzuMp0QGMsCyCJnueBnfEyvUWL/YsMC+0GLCsUCdxnQn9VyW3gdQHbx3L/Cq2PzynLVMD+Sarf3i4Hj7CyiPmHp8L9+t/2s45ukkdhAAAAAIf9J6A0aaaD+pEXuFVRjLcTheYfo1fKHzV8oYpRL2UEpfhjNo6fYP52cFlaz3LuO9oSegoWxUR1Cfzc2F3rMZkD3ui/oBQSadJQFcOE6Sf6gCz2b3tgrgHOhsGIbGA/QmEMUqVmXLVnOfMZkbw5zYESw9mQPpnD/uiEvKAvfINugYl+hVhNNUBUPkV/IdahpNXRo3x/ZqFUOuD8w7OVY4VizPJYGEOasbE6MTw2ydBDRO/l8girMYdEkm5aUDTosxsyNP+JXjnnfdKscutsrpxhJZ/+fdqkwavon5mr7qqZjWsj8KvxIXiIAne5fJmF/uljQlB0G9uhDLsDgMqtjHkyCQxybemk3CouO2I0NFRBHxTdJMCVrMVBKCB15i0pwmLfU11gt6i9QbiBmByGLXKWEQbSp0EGHFhZgfAgiwBd59J0i3nZBlzFgAjjsg+SMlIFlR6iRILtL8aq99aF47C+zWDGH8fMva2co1AqrTN/cle3G/Vs0XH1qo4OzPUWwSatKp6y66ThVpTqRI0yvnCA9e9FCEhu19SjYwLRHFyC2t9m68si92BSmWG+d3tO0Djamy9Y1K0qCBsKLhR/eI+NI2VexblVHQLIqHkbWCSBCse+gmZAestmf7eoa4ZwCpNbCQ3jIOy139vk+aEWzsluP5WvcGkLTxFOf8XRUtkGaTfAi5B/RTOUr6IkHBL3BiTAXRplSdReP5ru5EDHWYmVBIeJ1o2dhSyhjPZbB5KHphqnyNULotYt5MhQJuYzkg+TQyW1UjkrP2/i1OKtP1+gFzA0icRulyH0u5/1lWkrMRQhxXZu0GFmKSfB28UCaFpBHx7+gii1uK0jrN0ysnKiCeMFziK5h7/1UjPZs6Lb5Z1Hd/R78qlfUe1LdYEV/P6O54X6ng59HNz0F3JRIDzn1lXlLq3l0nau1e6B/MQSurre/gkSPatqQf4zTSdVr0mpy17YnOIO4F+4TYdeEo1D8hriPD68GZLZaKCLdNYrJh+47y2rWx8pjUlWhcHp3uAvoNRVW9GxzyVAkKj7M8MfA7UuFIySSnkEchEYSMayir4dWd6HvN9FGUt5nj942tYxwGNNfUO05pyIHAz5jaiUzciAZ/kEPT8zPUnxkrtsKlHPGNiqpg9JdAJW5kvGfB3QMjd7TwfjOEJVE0TD63zkHHTA1zSAWU/8N8uXqCThOAmpZv82VupqBRBxy2d+7HSFg8prsS3z2zWs1Cjo93IgC4/ySDfNs2mRnJPnWsHipCt+TPKX0xc8EI2O/7Ki/BHMrQpB/g4BahIxtFTCGBwj8GoRjo56NuVT3pARrQUrE3DtepOJo4Aoy2Ss+TLeaTgvpohVtsUkUXzOvE1HxCvcyU3NjTkpt1Ke+BTAtBW7SZM5qKeO7wp6+0O3lbw6OXWBCsAAAAPf/M+TSea8sIo8lAgxlvo+MnIMfoLyAidZEi/8wvP6qk7zYyzfKOaTbiSTDY5KlqndsVy+wmQ+YfB55422/W9frO/rUru3UxTYSMey0uPLtutSXZNvTt+a0pCQio6I7yZeIX802eEDuvNjinOkOjRhQLzVAJZ5YvfO5THERoMsrhUMiFXmouHyWtwxHn/0yx9fPOI7BiQpvzy0ec98eWRjsIReIu0MhmfFGe8LIabSovSGRYIkaj2e+PKi6/oZ8fhl1cgKzwF0VK6/hYhJXx/YURsPUX3N/jbmBayntNVXUm4agnm6cpC485U1S+8I5xTzfQcQAJQ3a9OGLMOLpqm2qzz7rFgEZSJAsC8m2bTqmbfaVlVkuLRhFdtMGV9sYEe65+LDcjqJHYZciZasykDYzQo5C4rMCQuf9K+xNpHaUJTukE9wCbJRtzu8BkT3zbqcpIT29aHOplWozaAs0YZzOvKpz1pYcYZznpHjs+XCnfmElW9AIxd0u7EqvtdaJfqhUyBGpI+CtoxDnhSFPOoCcsaxVlSVkPnyYzDHkASjSAjkzF5yFrICaXV9DinyC13/1tlrFVQ6nLpZSRg95mJ/W0DTe73SVij2nGvbbSD+pbU4IYRZI/IGHqRKvlHxG15m8WxIXHa/jWuWi+4xIuNmu/cQHM7SDzY9vUyLsNtVzs1oe5hdt2Cy8J8G52Jz4OlG1XSHB9p3tUB0oKas8Kw9Q2LXcupgunvKRixlDY6Twyn6TyJgfzfQSCONFRM5hdm4OXihEO/rwbfLzfMOIttsOGKyFOS66nPxanEHvTURWW2xuySFcw1TwhdBl45DgoBic+IHoOXIJVIGrjszldvyQ3MJZFObQr2DAUO8uQpUzeVdTm9nSS7fqocZKmW0A687MuTM5/udQHte6mQHtsCjSuUQm43STxCTEI4VgK8ZucWHFspFik6jaCxN6J0FJFzp3MMYTnrc1V5JbtBtXuTqF1UrA/WbGP3kvuX7Qwo2AKSBLrgdnuDStHmIwCqZLfKkhpCaSaZdYma1EtfcDmElpUhNX4MrMmrDK20heVQ62VdKfQdxDs1nBj7NKjCKcON5oB8EwCRevkzxWFHUWZaT+DG4ZrESYtuOsF1quXW6yde/9aCH++rABtYdJ6fVsMwNcxY/gQNs20XHsLGmh/qGUFrPEuYHiqBxlkrP4SVI9jFZhp106IP0965Be1rCz5ElVy/Wk0WAqEPJoQaAWvYuWU1+zjyLJOEeVbxjxB6yrhSd0u00pVKcYn8xaRHlgDn0PvDDbhLPUxNsCJ8gQgrDeUk53tEy3msA5FvHQKVGnEgB1eN1HiL3hTkj+q+ObRx5fzuDOC4/BNGHQDDQJiRErxhgAlfDHKcMi/0WmENeHvAJkRp7tt72t7dtho6nnMlq3toSujchy1jiGc3TYj8pPAtch1TNjSiuUXzBELNAPewpssUSwTYdNHZPYXg1xEwoZTBwXs8OmbUsRTz/h/aD5CkGFQ+5weJUFpY1dqdo+D5wcclP8AHjqARJPohx1qR9/LxMKhCn8fFfRKweK+fKD6Y+1femmJ1PpPZAbbZm/ZAwL26DZ4wvI/xC6XBn8Z8wGb/4OPwjrJ6J/22WcfdFwDP16XxoCn+qdP/Uu8iw4KXZYpIa748SckurCN+9kPCcEpRkn3TWD3U0/cfaZ8PPuvw9KgAAACzo0E0rmfN9Q/EUlPm+j5TvWIvuzSL6Jo4lj6/2LdjJCC7C7Ib0j143oIIaUfPKqmyqrmnaQ5wWEJD6WM9xsVAHv7OiYn6rAd9h3m2drOb3V7X+Lmo0Y4+NbLetUSVG6CPGLsEk/jQe5tTQjmibyFEbicE6dz+799Wjsr1s2QrUNT8fBcsOsAE3rzuoKQSoPXp+pzxNKubL+eIwBIi2bWDAleIO48/4zCX6MTgqbmBw4QB4jm8is+IgdTuxnqj10hmkhSh/BBZynZ1bMhIpLP3r/n+VoWCjhTBxk3jDxdSQBOrwancxKkXXR5ubJgMoDHlDN7tDDZPvX62ec3a6gBfta27/ArimjZ786I4kwrooHkA6VyCfiYMVnna4W3H4xlnVaeVLrcOI8+6kY3YEjD28t6XULwsliPTahTzz+2oW9W4pOJCYeXH/CRcBlgOa93qOAK0CdFePqXJFSmtxSj40SUrT4XMwHhaWxYGBdeKA8V3I2mWTB8vjrbyfcT9UrPdUxo4PB/KvFavr5EpEEcmnC+6YFDuBcO3R/La18wDefHK7S3XMjFvnJHLSefrH6UCenD2MupB2n1u8kFodkSuHigRkH64YuiZk8RwP9dBoAyS6asAznI6yKln5OT0cI0pQjLeDg3hE7gvIrKcIPHqzyP6PfzitLpO4GDtrNG8rkPYiDRN5BdXkI1IGJGHbkyPwuhVX7JUyLfx/KlUt3QkTML/1iUmbka9Mr1ITU2nTR7iXb+2n/Xb2ydkgRW1LTik8ZsH8fn92VGe4l6yRVC/zrkOvIVTMF0hB4uVbcE6yC0rwf96sc7BsvcePuzztGNHSvRvX6AXVfoocPSZGoZ51vCb1EXNpwakmZBZZkUGjZcXqwINSe/lyJu5W7wsDOkQmLzYz3j+IbXQQ70vV1NhhHiu6qOruZrkgkW78cAU9e8GBZu8DViPKiN94SBEroA3T/vQoXeb9wHtQ0Ev3170zIPhC7dF7jGRyUjjRNQ6LLA1IzI1CJ95eR9bxVNlbB/IywcGxmmZgezmxMC7eyQd6fA1PcZras3hl2muWAk0KEVJ6Cqag9tetvwrF8wR7PmFOs77k1+KpiF9lUmDeL56RE6+4Bspm6ftaGsz94VvxHYb6GxKlpKOPKrqpH4DFFgqoIsxQmDwlWdN47iXMb7exu9YgzQRNPC0dvcU2PQjFdAyf2l82lTfpXVrzkHnQ1QnaP+P2cKlJSbvUxTe6sQf7cMWznKuQXbVPkGCMM50NPOmay46hOv2UwiJTNoHXg7DfDyv/v1dUHahb9DEMgOspWsJ9glAWNCAAAAQcLuSEvX/zAyPrkCt+pv8e4cEQgAQyR9a36I6g3b4LDd7BHhTUuPht1OlRElKu+2WW89059XUcrfKuVTOS/Iv8o3vUUBTCXA3pPC9BozJsjvdU/ZGBufc1UKfIU4puqHn6xuQYNWhhGwtlcd+eatCWjgBRKSD8U/wpDuY7EL8oS1M1JIApz2p9+s6SkxgA97e1jpdC7qixrb5i/pw1B2HKFaTLZetsxlxUv2OWyde/CIMI7O2lwdFjdEHOAYdXclArIPRr/JuHu1VpD/D2OscHOIbUZ20qTrkQcoVokLFTsHSeUUDjTe0RZ7pehe/jGmZoRI3JGvRzYIoMI0HJ67BKBxEIa6P0XZQC2ySKUMpZwzQz7EkBvn0/K2Vyhrlq+DnRvVWjjgoXfXBe0LwfkHFdh77OidGjY9YVHH2nXpvA/8DcaG8NXw5R2rUdOuH4Aj4IJ4PTnxj8VTAVRQ8y5y6/PQ1Mt26UEQnSqzhQf1PGyhCefZlN9CrL6JP1tT09MaTpWirUXG0AmS3OBVCJBAn2bnpVjWzpqEuruyDb5R4PRsylAJi0p0Lc6VC6kxIapNd9bRbYfmg5ESBpfajG9Htg3OlD8z5Ep2u5TB30LYOzyiwyCIwk645irUH2cB0njLqslwWPSMxP9O8tSt59qtwUEyumWwOqz80GfD09mJVb7ERg2cduF2q5lDpjX382ZY0xXSFvZz5rgTWsNxBJ+ABbKQEliZeoWI2kzplOG/3pLFom3lbTUokD3AHHSa8ujq6BINwiQ/7+2JZiBAB6b4mnWvPleVTDALiENMxe6hBrOcSwR0hqkhQI3oFjJvsjqkcY5qUjfTLLkbHsV54Xyw34QBnzUmWD59eQbLVm9v9dtOSzjOGGRcWnPR15HINXW1bpZuu1bvxZkSpsgPI0WyUYM/XrhMukOt+PW3Zbub4a7HcTBPZfFxnC4F4R8rWGzU3H9w/o3NVjJJYSCd+fvPadxMTyQU73axbqvB5kd3lvW5LT4ko6GJWYEltHJFQCGn4O/pmHyVejLiWYh7xkCpcsWAG8b4cNKYOkkxFk/1YiF+mXTRAGdiossMtR0p2hlf13Bsk5YBvkmZjJguvZotw0jJcrgBKrrl8c/zQ2tW3L3xIIlkaUz5Hxd5/JNDkPU52NlnMoBDONWGdf9wQ34u4FyArbBV719w5flDE3riOkpKMpgXJ7oBjI9gZd3XZZIagtLnS/R8yf8xK37rzxWGNTvUTu3DarqIrqHhypLo+NluWdbK/AWSkp3QtW4060e8aXqAhvtqo9vtXq+ahIpdaewYrSsqjUO2KsF1PK6oI/Ly8MPfzMS9DaXB2KL8v5dqd9kG1QJAnKuGVJiM5NQuAH0EPSF0EXqSsOqQkYUiAYRZm8db6tqBkgb+z2gvw/eOh2jyGEZCSbz6JpvEuePaRTYB3aB797qcxBkJsRuuU9y9MAhgYZQIFgRnM/pUrwiWR1d9KIcvhU607wAZzRSHMR8xAi6vxlmTSwsWIfbm0AzQYOfSW9PvWSrqvJR89qHdWrlLXUHwrfmsOtpjwvlHlJ7yVMOigAcyBGKB0VG41gRVxrpIs5qqIdIBnUmMXswmViJE0EnaPrmxrVxAAAABp/+hCtgOSRikGkDSVBqokbbEapQbQ9JMqDo6BD9S3zv2SuRCY6g7anHOUthgj3SA51dbhhAsqaafkzsZK/DinJpF5b/kSW/vw//pTIPu0oOhuhMzcOHGepV2EwS9F7AlZOlbHYZPyBKblorS/SW6NQvdwbGs0MBW3MHlR+lbEdEqqkY481h2CE6b6ouQozY9r0xV6vKw/koKWlqkS07ji6WlF5+j4GrNkCrEeifwa9NzdQ0CB1Ng7rNUxlS2Tjfw5fnT9BrvrJpoeD8SNd/f7TeNg6ecgfhIKPCj142tNH7G29F+8QzLuQHagHvRyR0+RbhjDeqHlHsZAsAdxAV3SbFq/DQcVbpDMA7OmxNAOtd1VkrNGj/7a0VB5ybwVpoFmwA4TUKJq08w6WnsffcwuqPUvcTa7YmvgBwN149ZX+eeH0GcMefNyORyXimvzadyRAgaK6Cg1Fa1BfHiK/L9BdGg1c7sJ0zTFw0b1jdT0GLkqzvklHnyAg+tp5XN/sXtp/I9gwz22rvOJcc/qUWmDyM/3XFhN7OAIBObsc7NT/4a5fqHkgOWvOXg3GEX2TU5O/MsWtiNWlFdJfw8lLWE1gLNQLnzAXsEr34tqhMsCkoDBibHLtyRNgAJWw6MXwa5JEiUIis9pVDlGyV+97rcK6Im/RI8m4jHJ9KCHoIIuI4VLr6v2L32q1axTj8EVRx1j+3+0Zo/TK0GjZQEdf5ta6HHFyQ6uxoEQBTUaXV1iLl38PRWY7YgwAMxb409OwkgEsy9XA1wwY7vRwoTwn1chcXiQQqNGQT5IEC5ILaVSe2JUtwDKSULNc72x53zlWvPjP0kcb2jt0fVXNnnOXDk/qHESP35bM+92qeoXUKLJPftjSTczQGjcCdJwzVxno8Sf+K6e2M//mJE51Vzd7ZpQ+2uAiaxJqms5i2LdtWEc7j3Re6x35VcPqW3+KwGdXPg4pZw7cUrWK+y2XS85cINKbifY9GEOt8Ka0QK404rn+mIs2eonVz9m9zZc3vGNckVyzf2UWGzhgea/B8Vxpt3l3QyrPENjUobkfKB6wAAADd9RyUKzcmAHnaLgWbllI3e7+p9ydgFBYtq43xmfLoA2xxDYJCpd4CXrv7AeuLGwvwV/0l5r3AWxp1RmfNVkmp8c0iORV6RWb1rT7EJARle9YtUsvNcJT42bcpkTleZpo7lir7YunJcIuF//RJVbMSnLMc/MD6Z1z7iCSrqJmOHiHO2tF+eURZesSMQi6RCvBt1458P7QdM8qBWVZnYAs4pIX2rqCFX5UEA7SoCNy+5vyu6pXmt4cTfIj1ZPT7Zc+puawEKrwVTn2kDGqJezzuFvXUKgtWIe3jRylJm742fhRejwUFlFDHZze4++/7QAvtj1BxVKKAZ51K23aAqeR/lRKAN5DylYCpEcP5OSkouNpoZYaRgeXIBjraMCQEgcA7WkM7opx3TZ+E7g99zxa7ulsI0qfTK70BLaL0HMa3LeHk9ZZfpnvym1tnc6EG5A09zarFl6IX+hfdiJleYrSKk1Bf98Pjb4P9h/XTqs+LBHV57QyADvhdGYcbLNMr+sWFb4HAKxpBTAoHvE2jYUh9ipbXhr7KEWJzC2Cg3LMTl1XaLC6o4BFae8n4eDgKrAdw1XNs+0z2QnpFfw2NnppawUKbsSNNQcht5MXMoN97okJPr0Nh8tigcErASeL0w3tnxLQ5EEOk12H/m4zfJ2+tEht5W3KHUncTt9Tbx1ReJe5tCfCu0D0zzy0tgg6jPh4VWKmDMq0H6aH3fgKIhRE2bbnT6dMWNfXItSiDBRyMjr8tmv3t1vWR3oj33wT4BXtMaEi4uF3ymTgkcXTdXhC1956t/3TzZsKXAY5Gg5PxFqURGx3tyMJW7WgBQkLBQPnIuQJeN/IczZ7pZY6ZioF8Nitu4bal8VmTFzK6JSh8D+XEwFrFTBP4VcEKGoGSqvKqlBtVN9YB51LHfFtVMRE+x0L0+ETBtIBGp0XgDoEvuTTN86E0a+95OPlh8s0YgRQlZowPpWfNGm1T5Iz82Aen6ulnppRQgKNw9pBzvahb2Hik3yEPuqsRJDpLQtrJtH7ox+y+vyOnMLGpLdspG59BvJFPPQ9/WExxSZ1kHEG+MdsZGOJ4BaBMhStdJEZnNna47Hy5x1d6vHU5Xx18b+WtxT1+kWb8JdpsOAKc80tiOTYbgvgJQSL31faQzii6ETNN3ln50IXlLQqhE+moWOR5uj9bVMdxish64mmAYcSrhNtImQA2xI1GMSkEBNLELrUdoRb+FWQ2256p7c8Rk4FQAAAAKLbv5DbSJwnw5VeoJlxssER7apVzMKcCsTlYUjwbzUVv5RxLwU8LTB0Vx4+fWqwBtVJFCSZTeXGZG+7UmURlrfPfrYiLu1e3qMLWn1gSlgGuzG+xgLdbgEXeLSTuA27NtXX7d17wV6a7U2QmG80+6DLxfabK62i7n9sQI3c7szeZuKjzqtQ6zC+GbsbhnmFUg0Crg5QFBi/MOhaEVvqkZl1YXi3tfypQdVQ/bPagVEymE6RyTz2JjJbIWDbvG5zelaCJkJ8EPzDGOTo1Np4hwQyUB9qUKwl0inMSe+DYR9Co7JWhwedcXvW9YP5LK4BTfvWfvf1Q4KCHmo8hXz7Kp3s6h2jB6Hykmrx5adOLW3oZxDFSwHxkZsy8TtqZEbO0WUbBu0An9xugOfmb9ljhXkGihwNN0pZcHLMEdqNtjh9IMpjqAcdQWHBhL3hUEm8vygEa78Aff3S+Gha7ZrdsliogL77dCLoprMiQL5DquR2tAowrlqxVPZvehKvTFtOH3IVmA7l4pVE7GLKMbmOZkAzb0Ar0olBxxWPqAI2TE5xtmnBBVqekq3YKJiT3c8QU1se4lrN3iJugeAsf8Kcq9Thk8jz1+bYuZXvI9ZleTmocK24NsmgCTUlyIz1oHCGYV9YJpP6kCfqjiMUSGhqQXW0sDFQEjJlVK5I9RZdKNrYyG5EeRTd9QzFvnDFEyvKA+8wKfsnMNDt/jiaGsyQC43VNbGy4H+VaV7d2q1TtE0jrTcQqr/ZvtmSyL3w524CnaN7WF+m9RY5rVOnqwyau2u1GRkOQZuhMRl+J1SUQn6TgO0JSfrDTZ++32yPcJwR/zzf+nzEAhIjxgo9u1Y96Y2RhyvSGgczyjJUcRVqzQrqWiFRVEyPK9oI8XhGTbl5RYnYrv8OihwJcz2HSksTw7VLIqMp1DcnIl9N6q07HDwqSTG38gHg3ndOGvGpshYZ79A1UwnsSxIMGeMJcvh+mmal3+BihiK/rxngJEsedvC4optbBKmNgyPd4YlDH7x2DRdn0nSdMwAAAAUjvGczj0Egda9EClqcYuFqqYxfIDG7IuK+JUqWyQ4M04NLsJiMP4pNCRuecFAbk0zZSdZJhZbUiun7L9jHPLB/RSMQPx0cNZva9jUzN1ukWdJ3CKHGtAz7+t5rpSu/W9Er4dIv4xbEGouzOu8qVeRATeSgk4/71sK5Fj2tfZAY8HOnL12fYHLnX7uoYSBgvOLT9eYgjSqwFXePxt4cgOApQWih+B61vAWL2Zy3k+YjxFC1JXXQ+/4QdN53ELU31m3On72cp0H3bJDtu7UPqlsevxOt3w4cmW6TdKWdQ20xVeaQD/IVyverjXS+ok8AqiwZ4odxiL9UJ5i7vWkPUgQOuOlmKLOEXsr/eovwomE7eB0A8GWh7wYJItaKmBU6FQr9DZwDhec2l/lbsmYUXy4ENubiZMb5TMqf9rFnWbrU76lQFG3wYOaKdsmo6cJPe8OqKM2KX6tU8I6X7aUzfVd84L+Hjzdc+F+ubOefurS4S3jSKaOBSA4OyGP4v7GL3TvQw8GjqYfeF2ZTSRoT+SNideuid0yxNvQkLlb/1hlYc5E46iaE8RsQZPvpXfRYnvY2if+Z1raVHUFwmyi8QUoqx7gG0nKxY0VD4uQl3hnc5zg5kYocLZ5MOCqk/cUNNnL6rKjNLx6W9CX9hhC9clSpGu8oWp3JTCt/ZC+yE4Wb95bhKLY8/dAEV+86f1IxW8oBbFJeWDkp1qT9r4QT0+w+LJQ4AEm9j1ewvVoqA/rwsdkNOptQY8tV52IWvgbP0JGmyV5t6u2PyRl2VqCFuq91XCCAV8BU8d4FxjRf9B7wTuWx4KAr6nZKZJLcsVhwmiepcab6eXM4frPJxENh/QAJRSKZUQ+77THxyyCebhsMyNNhREVmkPQRwb+cGFwQyg1XFtB5+AAAAAGgEN01SVOvB7zigequLJ4uvm4jOXDdULHdfhMh5+qsOuEHUJGxlvEtlC1vnVQqdqzwsuIQQ3NKxW8AEF+92ii+/y0hT+TFHDoxrOmf+lmH9cuascP9DstA2WTsesH2/XdMGlJtu9WtYk34L35953hsd9Oon7i3+LXSJ3gmxZzO0n/PphXYjMNFjCgUAWpLVd0YQ0hqvY24qHbwAYulByXMrPWnY1XrRBI2+uqKtbylM/n/oFnntGVObsg9CHx7IIQBHepOH2qDbsfNe5stq7Jg6TpGhjQ5nQ9XDWKXANyoPaulUfpcFd1VBByTIx2/KmZkmVzKB9kjl6GwfvFwiHSrgneBuyx/9Fa5oaBjm2XldEIXrmPXzRa80etvnF93Or2mBmH2RRuLgqQWrIqAPQsAgoY7z752r+4+E+lFWPp/mtS1U8oBEt6v9bp3fd2OxF4dCD9xtUS5SpuFthS8B4v8thN+EP4qVbPurQnnztMtJ4Q4cjEYG74Cp8lzQ6XBZsYEVrlhLbGP9ngq/l5KnxsvezX1CqAWuaBw0363dTwyMZQGnBxXr9NjH+SH2ffvxV+lUu3HrosN31qn4eP8u2ZM7UJm3+771oB6WUowzhoVxbdU1wjBN5I2K7YBHUaisiIq4bTf+lmqOw6efTsbBmWX2I03AOMhC2PD6lnE62CIr1bMRCvKX9mi2w5njBYDJLSBYyonQdHKLbDSCGd45iP5A8l9D3BRHwMRikYkLANSffbKSPiZpZYUMZmWYGPKNVlE/N9uglIe9pr3+FMnxDRAgAAABrHyqT3gNw7TNQdNEVqgxFqltj4z8QNhhz6DIoOTkfrQGtSmfA+MIqAtWl9gyHit9i3OXO+RxKnYQDv4W0F1TVdFVq3FALkHF6BXdHTyc0UMz+v8jmxM53Qz+2c7+oiTtebsm8PiUdaYWHZM77jRvCJ7JUjG/vI8NBEyuleHIUDckMJku5NDbphi1pcbpQWg0/zrxyh/2mp7w8cWjID9SNiykTda3FB++tm5KRNqjPqx7iBc7+kykAGDuYf6GXeoOsKRJVic5pfhYcjTNl0xjADLoXSyPZbiyd+Fs6uev+oqsjGbXceqJoFSFWsG5qMxGRgwoQo51x4HUdXTIhSBawdtS43Qszvz0/yZde6b9jUlNI+EbQeJlCGGW7/7rRTbODyWS1GpNZeHvSYs8z4NTHIJDv33EMx2sK+LsY2pRXistowjly/SBgRCxi35AQbib91jNNWZmdG8bcpU9N3uW7zILpVDykGIpoC6KtHYMob1nzB6MQXkO/idW4ugEaW/0NEVJuvXe1+FPN88PABvTOkqis/p38FwqVBNuRhry59+APjWPfZhENRCX73qjK5r2qVdMZIaBznr46tSGii/lmRkXolGR99EkzJLsdoT/Z3QcLtklWyw1i4IiC2nLBQqubNB7Jus22BAP7LlrjJxTPbAumCDfpkKN8qaxoWOoo7B7Vn9IxErYCexTBKl0fwVA610XxEFAtKJ8oM6BmeHoDDDlaegGrzT0lCXagOMG7s03n3qrDl/MFaw6LbCwlwa7/oXMkUQvzHkwh+qE23Akiy8soGdfOzrnd83WKWJfWRHAAAAANPaxkzoSepH8xHEDC/RttWxTrOxz1EgK05KIvmXkwNWy6o0eq9UAXvaeWKYUt3EfWfu5v2ENPGE0yCmGMv1nL8fFcTB5h7I4yKrT8TVx/u92xbGv3ai4BTycwwKLh+XWEnZFj7egFWse4oMUcDmsIMxxKfhuUSaJ91wWymge1xiUpLA7Gk4QsXxmge4Us7A+yFoRLP9wtUoY6GCw5iS0YvkDTRWoL+ceL7TWqVeYyK2uhtGg3AgebEWLUnlJbkepXLSi4b6UBdkybQ27rA7uV504CfZg4yYhLJ8NNSeGgLVI+3tGDteOBG41F0sNg9ybYICCVVMFRl3SQpXBBidUZM/P/Fkq9TAH5dXDbkL9abt4jky4vwFrcg7m9Ye+CTUUp9g+ttbJDdbn7O3ypCLZUaSmuwxG5p6AvgbFID+7x+Ekr8kzUnq+Ktx+WG7DINepBQUjdUrB/2ZsOJR0gxr8hiYGMtn/SrR59QRMSbXzfG/Mkdd6AlZ5lsJrmcJfEzUg1WimdDdP75RpH4vJr0AYAGeEgocL/kin6ovbolzzbKJSr9ddhagSq21fsbgwWLB64/vIB3/unUkDuTVtgTVI68rQQ1CCLmKqwn7oiR1UKESgrtdN3awgXaRvaoGKV0jnxC3qHkhvRcPIgONmTEvP4xvqPTLL3IRSjNgWQ1WKgKlYLDPGOEJzePnAD4u9OlIeYQ20VsWzrfNZN7iEvju4dSRns89WlkTlNucJ7JQCUKwk/Tv9/+ZjCfPDXV6M67VkdqoqvV9DSyKv45MWEVohmh19fagZ6aOqO2ShMEP8uz2KbP4ENy/TIqjuCng6EQ0AFZenlK/CgF4zZ7QDGILYpGOE0kSWQ3+NqS7auEfmrlwfq1+61qSfsy7cMboAs0I7g4I8DA2jB5KTGin0EKTsTUY7Jis37h+H6Tm8ti1hxb528EVihfpCm5cKhk12ACZ5488AMRa7zWUjGWDhj7SNwoBmNSkEhH1luJ4JiLd1xqUlZqoth94htoBR7M0pxd0SsK1+Ds7qLZ5B4OG+WURhFWQ8C6dS2RRpaVsuHOMm5lFXR9vxshpvJtOIz3kDuLW6DgP6O8yuSu4m73wLooAAAAmUHG/xSICe3wMQpQeLVJNxz4wX7pEbVQ6/cfa5L3mWDJA18yVf1bUwo6ev8gh74ck6g3YVfE5Ko4rL3Kbotp888+aAqanjVGGxP9chLC7BkMfajT1bXzxcOsHkgfoNCndZaRzjez/zCK/ihK05K1s858/8+oyWxXwqH+fXejxrLM/GwlPpAKCbID31QkdoYs8/U9E/9K2xFjWND7EfmeNTN4QIDLKU5B3Ka/mos100LMkHNZyFUxO52p1r4CKgA+69Yo/6lyhgJM35tdAbXEV+twU/wOcofvdDugCqyfBAonBRXlaVpP5cpn60R8SBscHFfC9xrjPp46P3lpBN+6oVx17wRZa+NT9YqpuUNBuAbKvxcBQe346mx4XFrl9PXd+3pDhUAt8wpr0hUnB8SZU02gG9+YRuV8y+b7n3P6JuG1GYgUZKLpxGdDPNU/wuc6L011OCmKrbSPRyL/ma8Ci7W/pyPNXYiLHyzzpuZuhkXS48HDaVV7i/xnE29VtJq4JiGVlWTMbxnTJwLTbN7FPbZ0qBUhDpKssRIBDiJkRCtvyFwJ/KWZBtsCJLzHMa0OC8uDT+ISt1Rmx7aJoZj0Dj19i3Xoepq60STqIXbw6LzGq5D6mXGfqK+xZk1DeA/FLjPrS+dQ3bSfol3XL8Ywyn8UeNejIFdnZyEIK90G3IYB+/3eS94e+Qbefad+5vz4XS5Ym4EIEAZAkqyoWHEGApU7m8LP23kwdOnqTPSSneEzdCkZL72iaYMDxyBvz57nn9I+hEatFqa1GZdMgb3F+ClJYLN8XPxoRQULLNUDTdRg0cW7eItsnJ141aFgX3nyk7q2qSitjFO/C2V4YdmClD39Pbz9tYYYfk6ZMwft2c0/YpgXVL3tBDR+phE8WYbFuGxUxpI7F/Ss2QMjxEyXheCpe4YG+D01HlWXtCUR/JQPC+8zk6JICGWBUM1N1nOedxiEB4nu+V8Ps7oAAAAAskZ7sbJJ+lLhDjeXhTtWhlDTT5WSrR4J4VpzlO8+zDvA9IJcge94+0ZBcYUuAZN3irQLtuOjmVvx+mmGcIVz7EeSZP+y0VW8lGumgHHPkhcoTjEFcl6aZ7cs9LrS7IGuVjfr1geTIwMSaYvXfQBOg02/Jw1CIhKXbnacJTeIVgHYHxUFr2HClk4pQqEjQuvcXGr8jiMbgjQZhKPzxRxKzXj0o4XlQW1sjSrTiqZ0uV6KxgH1URoinigBV8gBayi3KITdkBaJvbYWwMRWDZBrV/ANtuOu7IDYNOy7YHE1QyT6+/39MC2cHndz/upzuT2oyHNk/08KpKPBG+faD0re+wD9dc58KYL2ZrDK6Wp9Qvx6c/YdWEyHcJuIxhkDlvz8SZdqAgR7v1gzGgS3sPgjfkagHQkpcYOEBTevseYBEup+8fy6LbtpAXKZtKzXR0/5n8Pkk1vqUc3AyBcaiGxMB5OjTmgxNssgSkS11Csb3EFTCwUMXdpLGuQcjhT+qOykJO9QhQetMRCJocpcyJ4ZbqI/bCp6CI7VK/sEGZGCbQDTzyINcpTiAjBqZfLL8Go32O0bT4e+gDLFgCPU2lweHF68lTFMaYwEP4FLTDjGmJBF5LL2zhqRdvWkvZNhCfOjWoKZ0B2Pm7oWL1LOMl7n8r4aU0Mzuu3OlobLzayR1otsfFB27yOD883j07GG93pa/XipHoTwlpR9Bn6gXBEfSJs9w1R9ySqh9sux5K0kzgFFQaicisQblc439xkJ1qB6i2zV1lWIau3GWDi+dg+ptEzZKWwkNUZdvnFj9RfQuS8zD2wcHL3KUvzZbTDyt7BSmxFD/tDLfntBgYJftMgHG/T7qW781E6xmAFwa0WR3bF5Urw61qk7VTw7T5tAJ9+qOxo8twb5dWomM1s/+vErFtZVbl0sxSOntxO/3dcq5uk2OukkpfryaPYr1QQAAAK518fcrECkrZcEVNtgOOcApl9CzvWepy9YX7nv5U0uh74T0AsvEL8lDmYpXUz6B1wCCBINFGRPl4EbtS6MRWR26fpD9b8/0IwjI+9aVfqELtOaMESeU2Yoir+3a6iO0Cuh9nnJOtSAFiQFclw/PRBaNt6MbZo8fq2ajrx6L4IGzhsi4vHS1L/MhCw1au/S7RwXynskzqvFX1cAmYsO0bacm8Z4Q1YKHYeDRlMLvD/39dMp1ufsgTIDClLG2X4wb5W0/0goxzL5KptbyQxzbpGriB+yuAm2ACqwKsu59kI5pBFKbWUea83Xi8i4x6u+fBotxvq8KAwNMJr9Ew8TC6FkuSIu23YqsVRXEU5dA0B7ee0cYn1z+gHE/Z75TvKh40hj3fvQ9ZjwXWwS74ddU1pNER+h7p4FIGPpuhsP8lD82Nq/aLKlchKQK2rMJ/6jCsOzcEJ59UFJZwV22KNl658djpRmu3/P2xC5gLboJV4x0wwHBXKv0SOdZukzb5RFY7Ji843VJ4pJ/nEMI4HkUZmrqMcImOn4YbH4iG4Q6P7xZKvfHC2Fe8vGHe58fpOWyl6f5tlbWwee25l29dptl7fmZWbQ3zEmOhj/UeHHnXI/VLCoFtC8C185i+WPjqcxCiUBBgziKSYedPZG4FFzUysiQQ/LxOtEb+Y8/OlZM9w4tu+oZ5uCuyWmmzqRT8MM3LRQjlfC9+jjm0cQfN5Lod7kXi72zHZqTJYK3CvBjijLRSphMCWaXCk7JaCkLwlESNNnr1xG+rejCpTtgkWD1zlMDzEhgSDaq5Q2k1MbdqV8wBCewAcODEBEdrXaQsjwWySu3YNovdPWLckZGKYyaAPtny2DibQwUqw7IUWCKyTIyzOGoKkXK1mpcKIRQiUeT6lpcn4OYaK7cRaq4/rWtcbIpdDFiVUO5All0dkUzefv74tp3T3MLRmU9Qzb4hr3/+oK7fmV+qKA+ensAAANNwytTuNhLYNxpcH2hiFG+SvjHMcGob0zg4MuwR/6GkJrKD6q3TIrSDtA3ss/t7qwMuWtQV5kfbzWRgBtjcX11YIxRPWe+h4aXOPwv9OnE/fWs/1J0hsGmi+e89+oDhAgeHB8YqPuNdscsDTsAYF+haGxfAp8D2J7Q4eVMJi2uSoA+2ESjx9yAp3nejsla16J/AciBItTPb4i91/MgqubfdnabRBQ98tILWr86N20ftHtBHJHCJVjmQN0ZuQI1yraPiZtGCNVbEyfDIwphV6J9Ika9W57szB91MaxSxCk/2KWyHsCnm4zjvlpvhORsRAp6S5dl7A2Jji5Cuv5zvHRUhiV8ti99SkNY2onjgH/LrdpBdBXHmst7PuY1c7LgHHYgD5fO0QSZ3GWv6ZuQpFE9Me3xZ0S7LazsrqVm5dqoUNk6afPhY0yQ+RffrzFjHCAqTzDAaq9RfDkGHKO9/QmopmaouBiNXnExsD1RwisDrOnW/sb4hxLHIQyFO6kvMxyl7EoN5G2C0UPmdoXH/BaqHGtrYZeGGQ9UJKa1iLblN+XbjqiI1NLWsdtI2k/7a815Lh7ye5AUfXD9wMZyvzAzPLX41cxPXPkRg7GDxCdu7SwjuBh6ZMbZnclPHuoJwodbHLDs0B5lRfqzeAx5434ixxLOrilQUpS6ceH9G51urIXbUeI85J2MyTBhm5xDe4Nza5h+zv59aTT1v5ofTnj2lzcq3BOxdS2u6w6gHoTiiyDrNsSL0iOKQ709ZoSSHGKYDpCIx/kYCnbk0ssgicl1HwOEaW5UM8BVciR7BZGKYi+K6h3R1IB6ojOHdPZGrNGYgkRQj0k2iGxXL1i437E5bEuF8TkQziriqB1a+FRJzjN9dtZy7gt603qCTFuwXAQ1okrTbh/FHOZAqiKQfqE1Zzhq+OFthKv2eHvGSrYl76bIXOddYcEixvxErLlYJDgK+ho4FHxW2nMDkyNAqQzW+QbnraHXuIBseDlyG7yO4lLhY4oQ1T2cD7XnmI/nPMR8jkj7VR6TEOmc60gRBMJhDWE0g4+fUVNOFO0N2T1gFqt77yg4kR1jpWF40IRSLmjl6MtPoK4Z3Kdk+6caQGBnF/0FqUzk6tFblbMlAKyyi2+Fn7eDfMA6aQAAAUeAQCjbh9Z7EBeRL3RKL9XeGmjZBe+2fQZI2h/HlNLOY7yT+HxyhybMUUL8ZKqvhsm3I4Qg0lM4AMbFxdH5on9GxcZU0ZjzFWNWJzwbWimXFk17VgW//X7EQKxAADW1AHtJmrkwBSOTw7S/8cMT0QSx5ftbWCZJfccffFtnY0F3u6w0k1AVjwvRuT+FOPxC8A/E7W8wNzpuCGRG0P3dTCm2PZ4Qlz9h26pGPNBDot0M9UrUmDrQo1Ah4qinGPmUKOWBHW8UtWB7i9w6RWhDJg1jBgLIZ/BjkckIXppDmAQmUnYy71o4dprDPfr27Hqmh6gllM9nEVUyiDvkJMNIi0HNQxCFaJZpTjkSowWvDlxZ80lKQcr5V6kVnQOTYHmV8zkqHRajobZYqOFWEVHAG3HMbpdLwm6vt/zhRq4rQIltk6jmQJLPHLwXoBEJUZgqftjoyU8Ae5jZOsP8wu3uamUm7+Ir3WgYshQpEqBwR7lLsQpDMeyhcF+OrwxlHDGvNOLzii1xl85w8dGAW3f0QLq9SzYwpz42h63CFEdXYebyFFVz5iPd1BY43cOL9sEDo5FwmAEJhzpDiaVhTdHXijCosp1VRe28TygyVu3iXoYfFqvtQzndv7ehhrL+jsU5/HQqBEPDdAJquobWUsnO7MxDK8+thLMUOG6tpzF9F8axTbJHIh1lffF7Z2cLs6qC4GlFQqeu0nWE1NZ5/XTIU6e75sg78VFU9qv0lXZXEl1BUheSwO591rGD7TOOE9QuzDp7fwbJTjlOjQCk2oOD6QsJiMX9/stUcwFAuPwvStoerzzzEjUlQdSNRZjXNa+Uq/Fat0ZtW+7snK7nbj17yYFUqMs9Mcedd9BLsDiVMB3RyDzoleBfMc1aKLDWmN0jqZtX5dkG/9IGo2A8pyYn9T2kUzxuOmdgbSbuRYUam7wgKpnmgdXFQmX0dcVxqVU6zUn+m/S8d3esEqJDZKllWCpW/F6Ho5nBeLhnQjzySjbkoB6EVbu1xZvx3EaASsbubPtYDRkObodkJytbx/5jB8jNWIBVEZOTAckFxXjYjHYTqFgkcwJLQnMQlDzqeVmgBGIsve8ldnHVL2LHTCapLbrQJ0P4t9rNFmdEzBVI4ZrzaGe8u9SnFVzxuCNRaeYfBoMxQdbgAAApc1S/qEDXWRfHSFAqV19FUR1WkuMJPu0b6MDLrry+p0MG66KEwxgFqGQ1XUwfwFjNbS6oZwJtFZJJonHLAqF8vyXLDyLaFJPBoDT7GM6ZlJcVLWueUuUpuvYmFQiHbgQ3w3kVSFgG5TGQXDm/V/j1w5/JyrAHX93OwiwySunncEzQi3SzZgG+igzur47rB/sP0uhZINaGS2zvRArP0d1cS3LCOL1fJIXxzUziSBa/D4V8c0Zy/vuvHfu2y3P8ImJekCEtqYc6sTLNcuIJmIWWh3H0s2vVoMMtzEX6l318xRn5R48rDxhUWTpdLokzkgas7YDURB7dsDeEAumh/HNqE2tRTVcaFZGrihd3DdUELLH1VPf4okIb7i5c1PNTYiT2dYpFbeiaGtFyPhflaY6WBgcHS3dKlBYi37s1UsulsQgImGbYGre94la+mhbsPhjsYQtgjaQTyu/FhNPDXRiP6izqzzTpV0OBZPIG0LkVTLJPoFTkI1ZJDOXSxKiyL20PJ0laSB8jWcgNjpmgEutCiGBBbOFr7UyYXhXmxYk7smSMrh+s7LboxAdSBRQWqoG6sjcEd0OnVsDBQCVuwotgopKmIXhVWyGosgwOa362NODqYOjR93DQIzM2eWDjMSJ8aX+MeyN4lStE1SU0qDgVaiTXuDka4tUx18mDb0QsiWGyW3/zT1wSsVsea745g+g5WDYJ/0PXEPiVeHsub+oTp0ZmjnM1KSVC4fiwCLI5mvWwJmQO7PsWyEEaFQrvJZ0xS3qKHj5NHTR9gliCtkD1yuOuwnnqVzDQinReUa82IfGcmKearIU5GYw4ekFz8+JgKO7ZJLT/HJmgkT8BPKqe0+GjESujOx7Sj/JHGpYK1i1II7AzCcgFuO7SWtpWracqhuoUxWo+8/x2zIxecUpKjNFyK94uXc9xrO1YxHFPsesGlIzrMOir4nyGDMvBLqWrA0eI0VIxbPVfBqyNOuRnh2j/7ZQdjklM5z1gxCUyXU8eN8zjH7nKxztRUitmcPA4nyNqyV1LyZ9n3l1/xbHXle5UAAABC7S14K8/YRSo4RwjvJgytxKplqJN8B1IrUvJ2LYliUI9sRnxJzkKw4psfQnZ8ZzUrHLUqMENm3hkEB109HaJxbfwt75cD4veiTwZ+7Mk73cyNDAB+ioHcrzKRXMluMkOAiZ1ZpTN2KW1nVntP2Rc/iYwSwlFTEkEUWMyaBS+kp0fRJQvY4LIob8iz3pimv5OstcY25wj4aMAUJ2b86wEVLkLRKdV8oYIFM55xZkC+i9VfB7kjYt4DCIZDlcuZTz0BTsFgkcB7X05AAqvzfnHvgRYhfu9u95Cmn3OD9wyr9CqXCfY/yyWQ3L8ePbFWpTWbaCzyTJBgORawm0rCAXDS809Mq5ngMLveO4aEx+cPKjLhRF9jn3JqkjMZzmRylocYmSf7Z1c8Em5shjbePT9U4GchoPfVnbPMCEfBntb0A3qOaIWxXiEVDwHTv1hYc/vM3WTuwjZ39MUBfVQrZMNZZ3Nk8B+U0+scdML4cvar6JeNB06/RDY7jowUOCXRmT5NavLk0MLPaEL9Oqd5Zp3VQXHID34cA9wBkmWEwNPWOnAjcunTZKGavXxWeOUYu1nYK4b4iO4dU3wB3nHxyno6EnqvrfYitcZhD3lImF2cjnQOl7PQmB6qhOk5xp5L9a9vM7bKsoiuvQBOt+U2BqJLNcRI8QohTYNtoj0zf6b3dp0EtxGhFbnCJr+PuegtjN4bnUqY9SsDNGPXxLUXoXDrOpdpZ7NySfRev9UUoItu+AO4JQahkofPxWxDjuKxInHVPEpD7PlTAv8GBxrQirp5Eujj8m6pMX2K/XU9mqH/JLOhQxmvX5R53KQ33SHEL0INJt7RAwXbn4bTW8jmBCSD0LRjwjz4J1xzT2Kg6pdc9cAAADDpYFx7CO/z5+x7L+WHEIqCJSKvhxsQSU1LsQwYgtrcE3lUBA6UGaYJ/Lz2WMdF7lra6WGPkkvDQS96TEGmbB7RO5l6QyLuTHEmIwYHpYCUTR0ZjFEdx24Hjm/kO/4CHAIJGp3XXuc6gtbOkVuRpL1M0jJdbrBj2VC3yM0YF4sUZaKeDiCPEbAMKmn+VmAtyXQ6GaMWPBwMbdwkP2a3SdId8349PZ1ySIm59NjPwSmPPW5JuyFO/Ivto0lvdwq0mxI39F4odM8hY6ji8XhXyFZtUhc6d847r6S9nkgjVMDX6+ia2YKP6+pWNjLYlB1oN5hFkE5zRKYjAS2ysGZ06d03ntjXkcjaJ0ABu6WAgGl2Sz5NG7YThoZcM7zdWgqQ/w90wopqUdyp/lwytEqJK+Mm5HpvgkksijYF7dihf8hE2yB8RU7WFN8y+dQT82/5oDcmEyatU/5SXxx9kmIC5BGYl8WZb2l+T/KmszsJPG7LN/HzkJuzC67S3fOPz/ymIoMWwX3v28X4kbMIcB5LYuFR7IaXVtihX8ImJGRVvFRqqxbQMkFtZum2zUJ+blgGp7toIcxgCkKNbSUM6yeJjc0rSlzUxKTfDvqF2R3dmXb9B0aGwyu08k+UVv7BXItKw1n0oWThtFFBD27CJz8JbNrEgMFYhG+lcBpU3wZHkui9gxM7YXdyXw1XglECcCnpj2HWQGvvBenh3NTODv++ba5FLCz3Ikn75H48w51T9M5fwrWrbM4zuhTt2Qq7J6M4XTvj+C1btVfExtMOFwHg3+xJ2xg1NTsmGAAAAdsjJ/S0bQw1Pn7lWtkcisq5Vdv6Y5Cfsr5QcT7Ysm4qTGpXM/ORYsyxsUJvqqpQ9ErS7LG7jp94sjhZsX9AEabcHErxoAC/EMl/keSYyxLNkL2m9Ac3zbQsuvT8JdzvKI1OUVI5GPfHuA1O0eWbgufp3mdLqx+gRq3SaKWE6WkbGsFepagr2WYflyKDKbaZUYlMjfcOtk0KfKSW1GKrSfHVkmktM/4DAlqdmdNNj0I7sFTnql/OwXiBmtgTxnEz7nrFFnQYBM2lKy1njIR7rlzTebSr8Zzotb6ixLKUIOiKHiiekpO1hiqVZUnLJnbWGskbYRL2T9yBkc4ZQKRb+tbhP7nKEmvgLsBKl7QIqFxodo4mlvejQXuIslYo8jfkcqxqcN55PBxHFrq9mVswSsZ34QVOY2rPvFYVQ/F/XUQPBC/waxXDELGqAV3iJRfufHLvGVONnlKnDEu+nFXnVfbhNuXr46IyYWkhw9fq19QtjofAXGT3SlO5wSbr7uhnRdl+pLGNU3RwvsoLawS2QMUyUYx9JiH8HYfYVQgPOq7DGM7NB4vSaU0YCo1n4NO6qvczET8tOe/HwlpX9NN9nb9lE1Oh/VXoYPtanb1cPNpScOTN2OnaON/uVHoVE+yjPJQGm1EzjOxXGsGQvfRdDS2RaEbf0BxxrPiUAv3U1wANr+ieCFDRMtp5SX6Dg89MFTVobWYH+fl+HlhbtmbMSaQmTB/pUmN+vxyI4q71uarPOsAmTUOaNBjk+f7VdWA/jzk7MUfQ+T6YBo3+kPcFNcI2GmoOEOqwF1zRVMJKLHOISA1kZwP/cDuTt73/GN+mnGnmqyJse5mhN/U1jfMRBZMW8D6JO1EspCc3JztPDjYiybIPOPRUeUKE1T3YYAILNSDjbFLQDke4Ej7HkF5o2N4ClA4O3DVRCEHswRAwvaq8OIrK+UcKk4//sEf1S9UBBOAqnDN332moniVT1zSdnxC2Ed9Xn/KKSSQdZ2umFmoGZm6i0Ywv+urCDcZ4bTbfksshm1sbdFE63HnkCDHtxE1xGuDNWqfyOiGSveUTLqmOm8mszHQHOlxwgRl11ScS70fsS4hDwmG0zjbEviiXSrh2dMd9gRCl4fco3tEk10PcYyJy1bERPfohjLIb1qdUuK2tLIvHJXsIE8162AAAALPOI+O/YJ//hI/qLngkaWcnbkfBjqEEv4IS6i4lxCbDxoF1BmOGDkMEUfAAtCHHXHREzJcpt94QXpg3SZ8YD2u+8H1WkpjMuV30yzmhtMcuaeqKIg9qRX6e2IJD+YBmJFox4NKYZrjhMVIsuceUmArWD06k1Ces/4+DkuaCveVLP/ya+ArWKX6RGQXX+IPqonmks8RYyju93/F9tD0D6e+PXbgbB440+n49RzYYUeuj6Y3MYGcFijSAT12DkoPOMei6f/O3zSsYqHV4ewuZeyqsTvH4UBzzTLZ2NhM7Z7j7S4cro8mfPLzvn1DavChEJhyY519YiqXKbZFfVrkDZniKY8N6VUxP7ZuDZo9d69vV0Tt8ohlpf8+5MrUWLcUBPCyO7pGD5o3HdBCRbVf5AW/uk5djn4MgbptbBD+4ajYXTVCA8RTxiT/fHhcfDCBWJ4ppOn7OG0Vov9Ogoiu2V4hqkk9JtQGBfQozxnN2gN96EBbVE1cU8dLgnuQXb8i0/WpLjpMWICrXmXU8edkAe5wet/a2vYGO3Cd+av34YkCz2r+0KphEjxW5E8rCkjV+0zUoL5NHy5d2jOq5tFJs+jv/3P7z8m7YinHRC5T2WpElI8jrsdCYWRSCqQiXJMrV8Tz7S0Qlfr0Qn0BocRRPlDnD2yTKyKSOZtcMeo6tKlTZ/uyZ4siBvv4BqS9Os1cvspMrnIwfG/HAXGcxbys9Y7uMmnd3b4tmkbMetYtLF3ZH77/lTd8hrrie3LqyU3c3Z4AkmmY1X/2SqYYdqWqFPoE6r8lGj7jPdAD7A5kvp5qMu53Bj4itZ0QP7HiN3wUPdf+Kr+goDYX3t33Y/ISrKxJX5qzxIHnR1v/xBGmtNWx+94tWvsQmku3tRxP3J77K0VFA12WcmdHxV1+BgDffwzlGvwa+f/ZmyVa9VzBrFWNQEKhIS9Sh4YrBxrtPZh2f1D51obXf2BC7eu318jSa69ptnYUXLNsop2rHJPnyTLk/vkkS0gX9+VpftDuRZP3SBBLPO/GSCX8YjXPZID4ziZQ3reMchph2smeTz1h6YuiZmZSKS5cOJFgvh4bF0KZyNScXGNySd4+6BC0UAAAAEd///DJwa1YLpk8IDOJK8+eNNZllqsOXePABPwbyoh3EvlIoUgSjiKT0YXjyoitjtaf3W4/ux/inJ8PS/3Q/HzBmtcvaNDHitx0+aYpU+QjWBNnRx54UEAT73NOmxRBBpK3G9b2MzQk5tapDxR6/CzWZsVykyl476dyngVDTxwm7nlyrysUzYNtwO/ZiM7Y913RRFBqZTz/Wl7FINHXIATymbV8bIl4YvkvwIjvDeu3ht5QXC2O4DImpd0C20tM8U5JXWD8FGqyzJc8M4CmDds40mANSGGrAbLah9Ce5Kh6aWFa0ThwSXB5yrdOsYdDVvNEGIWMaH1jiatv8rmMoX2GQMiSt6d2XnAaA2bK8NoG3BEtEuyw5MVN2Gzym5PLOL1wvI2oLT5m2D7n4SOERjqRvm01qI+VrbCUdoYbu0U+G783/JRyYZIwou0LqXUeQ/yoKIv38ejnt6tuxozQkLhdcpheW8de6SSUdu2PB4n0Lqn7al/fZEEnr1aNttsBRwJYyUPXFqyH0RhE1OCIA6QIJjRGf58dtNB1QPrwT/ILvgkxmOi8AvBQe+dXK0aea0+zYjo/zelIk4/5et6K/9AgF2W3sJyiIuW42qedVBOstEU9mKff2+r6QYAhctsKDvLUHv3MZclcsppsduXB+To/J0fmFe6jykk7EWFlan+Z5TuIIGDAeSYQxxBZO6Y+Tg8AbckZ/dlum+qpVKMRsQ8b2TU+L64uaeLNg87htbDMiq/9qRqzHVVY4NE/iSLh8PeLWkITR8AMt1flpgQnfh60Ylg319JTkWdTujUpeBfGmmlNc/NO9yImf0r6xzkVqA0PxKUwKxwIaTqCQllOiC3F39sLibMoiDXugv9ZJoXpTxdl69gvvXJkRpb9OQ8W76fZJgnCv0rcsIhJRKN1v6XWmd4SQZsuwyZ4Fo1EvJxO67hSFXLEYNNSwG+upZ51IZNJ2MdRNNP897jj89R/0TkUpfy7fzktLxFLB17LRB2QM71akiaVkaEzOsVuelnsuzovrRbT+eeA+IEN0DrPKbOWQsM0gm8W7VoPAIsj77hexJfb+uQ4JlyMpUjIi6eRUnZHRAaHASSD9lIN2iM5gOdz2r+5hwAU2h97eio2UU15wUQ9xQcohZ6ZAce3vpwH7V81tXFgU+oo9G71Q50c0EZTXAF5ilJ7WeTihRii2OUa/Fsv0GktkeNNbTT2bk6XQyxwELa8f27vGQMW1lcvcAz/QSsx9MMmQp0wycvlXnKRzVHzj4WjAxY9r19lv3BONASSCgRWt5urXHlXVnAXce8py0HtKlYuEDBXq6O01UI7CAh3676HzlgXUO7h9d0zoDEkrhQnnQSafhCXRvOi14hhz2zfpgKEoXXkrYF/HHzwZon0Vpc2P7Y4nmwncWm/HEnvFIpEI3jhAXmqmrigkmPxdKPhz+3mLHtc2LG840TPGBCjheW9E45Q1kpMepoicUbkE4+QNU75TtJMfVDAEzZt+45eOE9QdUUI7DAYgodUBwZ6Que6dVtCRhmT5TnIsOfCQU//hiSSI/uQKEI2MPgKC8n5tRx7AWPfIBYymBqyNRk5DAuXzYWUAOpWsCQo8JbgaWc6y2qapnWsLHkKOFphGYubR9GysFmDste7psP+rgMtqeWV/E56NUd9AuvcmGRX4n2ik+6QP7avKiAt3m+J0ZVH5VOAqxCtEl11W3sb0hzHcKQmz+6SCc4bgAACGfWATq4uj2GMgg9I2moL4qiCEPxrej69PYy5slkHe+zRa4n9dJQ2Ug97eCJHu2XF3bRxfOMbpIxj7+Vvfpg8m2vWI+PQ2S3O+Z6p8bzwAFhv7TpppSU9W+0GqTLDX5nZcxjI55ntF3KxrAhNlAxuTLMUJh0DA8E4/mR+RDgdG6KcqIX0aeDfE4Pdvavrl4mSLvsU5UgwHNfDpov7DQ3anjwvQUM06A1cVzUp7c0hao61i4up9dBqFCmjkuvhQ0WyFPyN6468g6MF1eb0ATlVFf+bBhNvkdbr9K3PXMdOC5xTXws0s1w6rV7fmjbNYTMOs+QUAtypL1y5nvjomVNZ5uii7fp7T3KjxIxy1TYy4zNiVfWZzs0o9ApsvpeELs6b1LedFxxtQmy55iamRVW1b4m7AlDd4whH2ShHG8BmWIVC7Y3S9Co8DQxxQWDYO8fL+MXllou5iSzupDaC3LR/kVvqSZeUHTg2hFCq7Sze7L+pSehfdvSTL2K5hxxl7XS4UsZ+ioZUuXg/akae4H2ZEYYb9PwuhA1SiehWcNc8+WsTQDJXMx/qNv7aNYmzscLcCrCNsEAaAnPUpI12udO9OQobqiiINZXY8jQdUTNylbYGt3oTPbBTy+/tNqE3HDowG/Ca/qHPbi3ABh5AyUL7jPq0e5zFDXlxaUcyiggKpfmjAdPPJBWidmwCyEcrxgit9pJporEzK9LWRyqn6wvp3gEQjUDO5pFxtCOT5ASs3EdmMiiSwqwy2ZH2GHOpzvbTQ7Zdd5+yBXGt/SXvGBsoi2zCxVwDSoRTtTPNot+P0zmuhze0k3M2+yRQTksDJoL8QF4cdTXaabefBUgqf1rNeuJ7FDDfBx5NgG7gBKd/OtN/hFokRSkajku25pfGUbu6ZmQSqPk99VRG+rOPlrgmI50FtimCKq4jS9Zd0X3o25DtxHnUKM+To6/zGN/WvKpFWEQneJQRxxefnUnKfc63u6qKNFGWL5HBpEZb+fWzyVOBo2ZqaiIBcO8aNWim7exvh63Vc5nVOfUzbDa/j4AP9Kf4ZRIDuKQ+fl/Uk9RJIN9fdcn0UV8SLBd5geZ+Go5Y90OTu9gAFOTVpLBOEWJN8/klsy7cWv0NYcURDDA1xmaHuu54ZkliSCqf33DqlQ+Rt6Ue0ZaCrmO7HNQmKn5UYRwJrj4Otnqka5zR/Ml3c8FYQQe0Qtzq20UYkXAgHlaFsjX+zCrFFDSJ2PNvhN4HEp4kHI6t7zetdmKx7ZXlSj1eacX1SZHo3WBZRkzWbbmapfbsUCLo0yQAprkr0LFI3UvGFtewAY+nO6XmmuiKji2t0i7gW2qHiGvmeqSgPtXZL5KMj+lIVMTexC5xNcBCyABgL/5Q2fvbumIJxp1D0YXIEyFTogItYCO8WkSIG74fksn52JJmqjXsNGbNF7MkytNrDuz7JlXqx0USxdBcI9vZVZe25ink4Gcp+c4x3Oi1c0EGQPGrUijFAb4g3NEHtbEw2bDWAth0Ju+2m/VwfTUfUiOL6Oj7mAW21d0N++XvblEX0VprxvRzcXheC/JTtCbdVDVxbR5i42dUGSVfxalvHepdQECh1UpL16uRtCGZtZ+5omCtIG14EKrgD9IVZiTVVd6/wB3Vnh0H0H1M5I+qMxR8ckF0IKT4tRXwrl9aw49mjfUgKDgfa4uZanDu4lnohGWmTp2gCDhuqwgNO0g87GL45IQpCqYZw/oJ0a5EamzFU1OaAS0YdLkuWiH7HjBPpYj3pvOGcVh04vXTYfwNOuxLVK5Rmk/5UjOl49r+5n4mXdZip1HX/EMKfQ/5slrnuUFUbYSxebwhXrw9Rz8jelPCXvYrGwxWR4xp988ngVPFfz6Ej3BAEz0KRTDRZEPEMMCDkRuH8j8+m+ZlPi+ddz1GkzzqVxMTIcl2fHVCuOfd/95WCizEZ97eGW8kX6EsjZ8VLqL20gpTGvnAh+0+zhI7UW/AQBkAAAAcC/eACXyQT9ZiCXuF4KDTZCPiRzT0BAHNQ+tyt1/8JCahncmfJlv0/DM8Bn8uTFvxQtBnVvZ8Spcfd0dfrYC5tTQNPa9d40K3UwJ2Z3NOC8p3LbZ3zsCeHp2akJnlsA+mFDXipbZcSHFpIQ1PGdnK3+uO+RKv7ulBsUsx24gAt3U3UeH3Ddv3P89/iFM/eWy62LTyzo/X+TfWM/M6c6a9tj75aEvp11/n5yIijPGcXysjmxws2vq2K7AwB9oNelEjaH0c0tiMpa/ey8jfuNtNcGT/nUZUBke9d5FcQN9G/MFe56zCn+uRcUbxo8CGRJ7Sj2BT+K80r10fv++w5s3nGqC2ZnxbW/1HRV3Rlcegj/cnMZDAUiKgs/Msv2R87PlN0KjnmkbgknF8+L4/L8rcvjQozLRC/6gvUjxfPBSRqUTtv3ICC6hnMKQjxjYYrOBJVJl8Jg2RaCX3NwrMe6jFXQ68tZCi4+WRt7eE5wpQUJ4qBJsgrwhhJGpxQ4ibVJeDJWHveuBT/YBLQQSzm/W2kP6hZjaSquXMWiJYxkvJBgBwuTAKYEuBHXUOZWl88hFN5V+TI8TzDRJR3m0CRr0Y7FE4r3c46QHvxIHR1yA7k7bOXEgdnliJyPnVMkXpzRoYlFXCR/5WX7JorXVLzxrAw3HAsG3TG3CJqnwsxV/3pqcrq398Lb3bLXLJs7cNLIXR18LtRHJlYA9uHjQz+jSlqZvh1PHD1sjKPRh6fBVOBkRvP7IuoRmZ2RMt4cjqEa0y7kckkuwW/ybD1uFLRQbLlqiE0nf9xPKUGGXdzJzpTrmvVDOuuQtCDy5w3zZ/vHnS4uU4hHTLCOxGmxawg9WSFnXIXkOhXbLoF6xe6S1t7UYnNpfm4NsfWSj2Y2yC2rWeASxmTYBIT9sqgGlLy7HMsPKSMnUVN2o90fF9V8uZ+qvgwyJ+DmJOuoSRaBY3zAi+RzDJq2NTc6WlzwgIUTk8fz7FICY+5YTQx46D2sYlGyMwuGGycw5kIGpGOLjCXF7qmjMplnWAR3oCxQgsi4dnmXp0vk+6hOwncETev2whXf343E8Zok10ezBrCI/TG6z4e9+MubDrIYXCRgbA4rAGhHp4c6uV1tPszYdDcs2s5fN1tOPtFbuysJlBE5uaB9Rom4NhQJWCzL0kjNmO/AvDiU8lPUV6PIRmwA/T3l/XL21LgQFpGadV0HTKBwhrqzz2wzu4BefJuBbKXgXu/+UCN3YGhUeDvLXB22UjPTAhtK7pd2TrGSLK5wXrlada1IAtY+fNEFXQNrgXanWtej16QOC/K8Sm9wFJXVyqpXa/mgcPc38yNDe73tejDvV89dNZfnpiU6hN9XxZxw23WnciVNdQ/xrGoykhoJ6UkJhbcj8Os+iwpCAAAAAOk+0z4d9dH8Jy9G6lDm9IBz5OmXbUJVw49mihfaBADszV5VYH+SO8PGQ1Fo4RdA08ajD/L9ua5MPEqY+ziGnhiUqrY3jH3e0tdZJbpYOabl3QLX7Tx6z9a0PSfsfH2T7totGkGrAARKDuq1Y0tV/yDBuUqp5gr3p4adxhUBVj5suiS5yngUGzy3juhWt9QMQDxiL8fuk0yFuwUzgLXelT8WWdVkq7NUFL7G9Z6qTXaEdMjkQJ2p7mxUdn2/RJi+49Hvz9s+uaTJI75comXfUZkzwKhmXAddhXcKn7yT+gimdjgTSGbYIXDrZdPJyaJ5STxhcAt9OuJFkX0IUzhMqGDMYsXA5xZzZw7Q1tIRQsSl8/7rKV4yxOor4aerotb84VymTvpf9oIdL5G/KVFm6FCtv7pKuOk4hbx216mdbSukLVPkEFGjks2nF5g/UCVDtdJ+5KWGIGOPyid+Iio5nsQ9rmWjFA244HH4OkzYnU3eDm+Zlpvkzz89cT/CHTGQB7fMwlIoXpdB6lhoKT/hPr8KQSXDg2Ey/GlOfw3cSsSHZMjuc56teiNLKqYQdhfS3Z2bqS3QPcuytJfnDvGP0wqHZdUYU2NILKuJSZmAgIsAXHaYvu3IW5ge/j0lCHtEJROhV05qjfWnose5AACL3r1mzGaoQSxTOYqoAx1oyn2ITSI520n5eMxqKDdC5xHaxhawzWJYcRmTnfveCUkL9Lh7Ey9t7PwkNdmls8hQw1M7lTkcESvk2x6Oy5ihj7GJ0uwEpDdEVcGEN8dp7RgyaH72AeZ+8YVqZEXK6oWU7oUENePi9Gf6P4etwQ1vqHiP2Nd0HeinXM3i1YaJ2PqyDFdSwUjglaiYUvRQ4CRSbc/DhqmjR3asiudDRVNBFFnfoSUR0aZtN9SPvK0DpR43VwI9XBDkrnN1cSuteduLX7bGA7ROYMu1I4fI3+RY5VaO9tmp+v/8zkxd4CTH36gR243Zs3KuAc9MJoOj2X4nz8ijOgvYhkiQF+Ku7ITdzLSIGDPEX1Nxf29I939AAAEiJcZrgeaVFfMcQtoMH6c1CQbNXTBgS4BtGdRde23vp+iIU4j4a5Fbn+/7kM8474vLWLzqo5/W+3TFIKjp56/6SHp4cJ7i0+nvN/J99O1YAE4TNxUyy+6yRgoCpWJKNOHFtM0y91wMJrehEp7a02WI5VbU7bdKwdRtfIP+KACfIZgemiLOjwrEfshJGHvvUAg1BbHZxh/HNNIii80PiHLvlpYUPmN57h4AxF3GeiWfIdeLM+uli21n3D1OGsoFYwtmXzZAfHQmUrBEh//TCQzr5is6z1B1l4YpNoulm4Aa5+lliuypelRaZeL6QLY6irA55UX6Hmldz7erq/ItnrXEeDS7r+bW53n37DGsF2Lul4kToVbcsfLHQIFBV68OywgbouhxLV6e7BSbwTjxI+C1nV/ZZ6ZbqWkYG9rL86WjPljNc8RBfEHt1U4kaa90JJl3ZuLdQ7hNFn1XlCLw5nRAJWzWlRmujc5KPvHXZ03ER8MxcP4H3KJSnQLci/kNOPADi7Ln3arYHCWMAZuUqOLl5KtwBb697zxpbrFAkZ6Fm+6LulY/EnFcVPoCv52uqlja3aibW+UUtn3cj7Pv2EjgEuETBPd88BrdK70aKkr1UV9tdXl3DolM7Ly5VU2HhDH6L6g1lNe3Pn8xqb9ou5JkqHh+U9Sf3X/KOnT2zd9MCCx7zXNEyBrTHiNbGIispSAAAAZfaLse0MZfS2Wd5N+dIK3TyeaRyw2KQ9WItAechxTS3rb9M5Avg1SZZ6dReHJpz6oN1Jp8mj0lNdmvE+KoeJV2TVOXxBNdxzamyuUwG7ZzoD1a6tichccNG4wFyxFCu0i0/0Jg/ICqDuz76igQ0FsILFhkUFPOARh3GtZfwUd8GL5pVwZfGcLfb/YFhYvpvWoiN0rEJxIc6y36rdKZ3OEXfE0PTEKjtqgpxqaJ43A8czRrZo0kgzgIB6cjWpFobF3yer9QKr+5amiL97GR2akOIKaticNn6Dl370oZb07iQuVrdaNOt7a9kfEPyhyYffluO0auY1MQnxMIH6HPE6vaII7BdUOvMGEoOo9Oo8hIH042u9kUigMg8V2NnSttaQsaUFiWYQBT9lQWPqDrzAr5bi7vIop/S4LJKtRZKGRJpiuSGFiTm7uRG23a3a+/KQwirXj1ubWz+GFX/7DbaLdCYZhAVJMC2ljLpcR/nuKBnhOOfdUMeEk+c0jnzvJahqPYGVAEYU+0W2T6tfUCTq12I1lY7jlYS86oJqaH22peI3+WLZnZ6PHlT1Jhl6OKoGnXpuv2tTJX62kZrgBNhNNbP9KLT9fAMIZXgkQqHsEOOEAozDN6/YXJ/rAuWREoKrGvmZelu+cxVlxuzjEO5m0Qk2T98CGHsK7g4Zb1iftdlOAJOPnprxw+eKEL6pgKBB20ffiazf6YXdTK/yHvaGFkGJ6aOFQJMjKPVtgU2zxU1PSICbnAnJ+y6sT163HIqfhMZlv4Uv+D9z3K/hKJqeAVj+BahPuxuv1mpqffUr09I6RhAKPZooxqaIV2rEFpiJAIK9aXl6yUOUwR3zI8BnOhntmeJ0xm88p4yQ+mY8LsQp7YOc1YF7RnQTSi3OT/T83FpVqyuXLMKHWomVegv52mjqSZzLEByKOXzk+f6XlhMp7/BTzIOV0/YvnzGULygAEpZCY5RjS2z8K2ecMGKz/g6cOiF5Mt9OC4NYlkNAmRHcnb6nNrguKeYRMc8yzdYOVbmH2A5yzINCex6XBRPTJqMJnIXdub/7Gs2Q1qYPxtx254T5M5uy6dfyZVxTK5rfyVvHwL/VZ65niRxtGoAcUFXaOxE0uwlAHLBsn9Y2HrTHOXC69Nb41iHO/DjaSM5yTchaX6/PSRYic9VPdOpBw243Odocl6Y9/4d0d4RqP0ZuozISQHBkb1g0H/7HaxK7dLGCVKSmxeqtSlGekFGmDthHnwIlVxBe9RMjVhT13rmBktq+VovGbBcDppVzIhnojtaQLL7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";var Eu={"cleansing-gel":{url:"data:image/webp;base64,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",w:229,h:674},"day-cream":{url:"data:image/webp;base64,UklGRqY9AABXRUJQVlA4WAoAAAAQAAAApQAA9wIAQUxQSHUFAAABBmrYth1vpOcNvq8azzTf2PZMMTbX3nRt295N17Ztb7p72LZ3jPV2bE/wvj8+JKPnyDSZ5n4jYgKQfuFO3v2BoKNhN4HO+4ZRtVUe1L/ABGA4Bh0DfvIonGnrFa7kMdCsVIfsFjD6kmog4rX6mb8WLdw6a9+8JuK9GsAVe7SyENKlunkBuQrHLSUAcg92KSt3Dj9ZE3Wt+WF9LNWE2mqTsTRumv561PGlkyvKAZR1MchZIH0CIEAYJqw9DgNOjk6f5vx3THmVUN7lVq22YLJ2+jQA06MnH3r4AV0KDAIE0iIAAopatd3ruptufGTOiuV6ZUx5lF7VdlUq6axcYyuX6f9fuunKUa2KKe1W5fAzo29P3xTXWqodeiK+7vuac0d09qWjWB9z12+zF0kFSNcdk3RWcvGs5yv9Kfn6V3+9YoNipn6heyqhqc+tkQoSrJCq9pgCby2unLVeSUBxM/5qWxIefBN+V0z9toy8Nr5zLVeWXWyScCuNKsmUxH3FXkJskcn7Sna+3cukBxqxCJ8PZZFacTyPVp+UbVe6Cw6RkyRUj681pwWIP8DmpzuQYBBmD+eQVPNGZJRGZpRGZY1YOZdCTLKyMkZn2YWy4qwcIiEmWbk9gL/39xOHNj3aggSD8H7bnEvt6gf2Xvvsjvc78GjaboI4tPF6gwR/ZOJ2Jt1h1lkqyCTdXrgTrijX0j0NWYSvh7FILT+SRyuPyUEy9GvFVy++C9YoyaGrYlJljPyRmMogVW9mjthpF4jEWLP67ALiD5B4pycJBmHWEA5JNWvoTrtg1sawXHTA/N18xKF1dzUhwSC8afHorZY8erNV3SajLlLr3CHvdOSQVPOqfCTIZA6w+foAh2TsxmBWnJHlYZIgIxKTHLLuj7OngARNnaFYFF7Eo4MX8ijMIJMEVdWjwcjyCGaUDCaZdZYK8uwKL+LR1Bk8su6Ps8iIxFhkRmIqc2TklRC/sZBFiZe7sEj9dwCPlh+aBRLMdlt2WF4fgXo2+JnkuyomM0pKcui4Whah67uKtW5WVMm8/+pIhPKLA4dWX1TCICD5aW8SDMK0sjwVSnOElOf9t4u/OZN9xKF1dzRkEXQzDkn1WnMe6VwiLZhUms9H88xRqN4irynmOpVcu4pFGDOTQ4LKp+Wes/KNq2nFIeC3KYJBUm243M8gIBbJLAXqK1KWWymYn8LgLI9BWR4Df+NR28c3MYjgP2a5ktwxSNBhy3YFZ+Z/JGMRg0Xxh1uzSM3eg0eLwjxamFmqyvsv7788Wg7lzwLblBmSPWES1OLBOHP0h5UkyLx0jZJskVCxz6YaBIhBL6xTTJUKiX9e2c0gu6/s+RUJJfkhFWL/v3h0R4Oc/X3P/nBJUkHaGSDtCkgumfvSkR2D5LWw/zlv/rg2KRUggR2ZBBSAZGLzzA/ePHt0Fz95FqDitqMij89ZtXKdcpTYEUkoALHVK5d9cOfN+3RoV0yA8AQIAkxrr2OPue7H2Vim7NJ1eyY9OiBROwuInnbMkYNLivwECEpdgByblQ8fedEbb7351apELKl2jDqu9cbf3npTv/XyCcOAbkEBAiBAaRZ2AtCgZetWZRfdpF9fuFxrvd5NetwWpJLuHjYst//z3I1aXz2ljdatrUKyCzttaQFyNAoKe4UPA46465dp9vmbVNplmlOCck/WTp9m//X+Iw8DDt+vQ4HWpo8cBQDaaoWd3K3B5fY9H4w61/yyMZZqQqVRxmMp6iUfRl1fOKGi3D64tSCPwpG2QeFOzv4mpSGttQVMuCySYvWL/yxMedGvd0ZSPbVXyAK01rqFSa7CK20HhSN5DQQBw246d9vvYIRRZQeAgwFMbGaYjoarn7wKV9p6AQBWUDggCjgAAFD1AJ0BKqYA+AI+SSCNRaKhoSKkEbvwUAkJZ2v5IIdryj43Ntpv467ncTAv6ayStZoGhbu7s/b6C3/4cYYDfSHSnh7uXY5HZ7/A+5z56ftV+QH0E/wPm99OvzK/zP+wf6j/I+6Z6bv7N6gv6yetH61noZfqF6Z//L/zvw9ftD+1XwIfyj+k/8H8/+4A4JrrkeKfoW+Q+3nOi7O/73ol/N/xj+39bX95+xnln+3/z//G9Q72J/sf7b7eML9wj7VfWv+l/lPIt/xPSb7O/8z3AP5n/Tf+F65/8Lx9/tn/F9hD+cf2//f/5T8pvla+vPTl+lf7X/2f674FP5z/av+n9xvIO/sSEGxpz7R8TKgeb8lBl6/2n5FKMPNU4rb65hyN+KdCg50gRkVXEy3UoBMwK07CEQMwpwlv0kOXMw7UVZ2Snn6WiAUlbOJxxB4aJVsnUDRasfvIxFmcMgdMJsMOXZ5uwrLcvQBG6NcqA1rCu1W9urCXCIQcw+iHL/lWAuu3IBddNKJw1brsvVxLDBC+2k00Cldpeh4wpnouUo0DL+BupKn2Pg6RQw9Z6+PbBcXYLfpN1NlLcRpfn9Na7HYNrHTYjLwKFCkpxuYz87yw1yzzIp5ox0QgMKvk6H3oRUxRlGKB/J2pjdLcWJD5FQbtpk922RaAvOxhgcYCGP5e0qqalmTeVA6KSBiCgEDrEpX19MkDzNr34Oynz+ukgaPPBjlEfoS4Rd1kvtRSVF5eC157qhFEJGVx8VjgxANjqdjgubtcV1M0Tvfzx1+FxTNvDI9dcIHwIwojoBEAu3MZvHfl0WqLfSSCmx4cjnrZl1gfDkUdDQIjlW1n96v2i0OatU4INWAezM82tllqr2O/JJWR1UqPPRL33wLOVRRSKZmBu0Ug1HFPw3R/nDvFn1GsP4BOXYktEx+Nfez1qZSKY/JBPJrVPVNUktETwQhowq5ipI24m/eB005RUXJRnXZq3caPG3mThlexvbzqsnrx0EP+LE828zOvv9mfBIKnf6un+d4NqHlPbGyldAp3XIs2pJGMy7xEbmZUnpDotXaHGAvMCoOtyKRFqwoFKX80nPdPqOlUrD7q+pQbOo9OBknPIsLPHCGf0E14kbuiCanitMA6PYWTVaUDCmBy0O1lp0OKD9+nGc4/8fbkdSr2a6ddgOx7IgVhLIZf1kRsmoySsakD3/ZuH5t8mrVigTn9I1Br785dInnRZtT083WAMs3WPxLw+GtzoiX+nCo92EOGoBHbY6A8TxghbeaIrb6Ds2UY5gROCZSzOKtLLIcs26PpshWshbxEsI0GsCFJkq/g7mOsKrLJtKPKTchcu85iQkgtmK/qoxUCvcSljDJlzq0Qd1haQPinhk4Wr+cVEq2CkNaTjqDMCODP5IgaKg8GbNqRp9IRHCZd8iwB06059CjXrIjVz+KlqMLH5xwJEMo/n68qhJiVVg65wWfJ2oeWqGQybPrrNbFkZkYCyHz1mwK8aauh2eHXuQjtYvZN1FfBqlJE/7/gngpUqTAOm++VF1axLl85+4a4r3YCeVDYQywRjHRjt0+f7C4WA4THmtGwVHto9eLOTuU3Xvj/sLBs/XgzfOnd2m4RRD6QrptQCi9XVUnf0J/bczYNV1iqQGaZtPcLOrK6f5amvACDr04r+rTRCtDWisrO/nb7jleeTinsGN/93wbfG5F+VcOJ+xim9ivUfVF/t8E1t99qtAYBxnQaTR5Mgn+wPe5Fz4QgQ1WvvDe7yg61qkLOAdg4hotYZB4UaurXZHOAkNzxaWbwmnrFkNOxNmLo/Xa6sdh9JFHeM5AZvGxScHaH/Zl46nGBALcq73sRznGAM+VlyVDZk5RhtPwHWlC+g0M2GksvNRLx9tn2rOUjc0SN9OpI9YYkc9MFkaaq4dzcGBzvVU4Lgc2KdvI/INe34IHu3jmx0I0sRqnMnZoltot1RWlo0ZN2X3T292RDaV6seUbXCQW/p8XI5ztH5ESBEp+7SLizHyRQQeIXAf6ZOcmG0F7AiWLTE56dQbqcVAAEgpVxT9e99hHz/Cud5uH0dIBqewCNlRJ1FiM7ATlQKkSdr1VYnkhfFCgCPFU6vR8ePF2sYhHTae3r1WdRRAi2tJb8J2aqssP2gODazG24ceJtDg0/91PIJyuq+9qr5MWYcPz4tLnPwF2nGTWUArgkP3rrcOcJ2MRf+BhrPIZD7qrqJizoW1yoAH2DinhMyl/zasJE+OeGU1oVly/oCQU7PFIVoa9ATQXUMwSLFqr99TPbp9HmZbmmbH0HnwAot3MHgDfcbAOfcua+LzoaXezB3MUWkxm2/RE9M3fRsVV+wPkV1BdtMQevgAzSiBSpb359UOx2b4swIRzOhoxMsbZJd3KXuURbzDUnuon3BEtTwhdUxChgGPHaKvxtAVqj7M4oGyCgJknbwlB0hTqqJxEysWEeQgIvSG9My36suxjYUxQTd5sjKVYqJ7iuH54A7MR7HqNccyLFO1X9EUW3UwHUMYqo9lyOtwPSaDgQ1SSooGI/heBob9NEs2PFjxukfSpikGQLiOvxv8c4F4CI/vpIjO4B2zXyenpDBmpmJJJ5xQBFgJ8hbfBIFtcKJXCGVYVbiAj6yLaMtUr3ou5UkAD++W30K3lPJAphzIlfcUNnKyT1LzPsEKqs0LbB0pGgwrBrNgyhFxkX/OsOr9UGOmto1lP22pXX5cZKRLr7PHluG83ykUwCN0ehgAeQ3rx/5hfWMm3xt/jbymbKDKy5Y+Oi4pJneL3ySyPzaaQBk6vq41xSSCY0O772iMwdNn54TJzAx0J/DVsNeeqAD13czqZn9ueRHx7FmfHlj4Sp4z9C5l5DoRkJ8rcHbDL50Hi7heYgdjv8Ysof3NAzNRyFy8G5e/lbcIzlWbqzIuq8VrbLv0o6oOxXuYbifKNmcQ0xpL53cL5PDLOTBjO+yMc0iQmY5yE25EQd7oNxaxFvHhbBOzVBBJ5rm9oRXme3K8UHALVZ96XEuQ/Kwx62fj3/Bj8W6056//4w10BXkwME5qrnfaRsa9nlmqngjnTpldCbURVMZxVu2Mjji/+aAy7UOCWjtmDrSOOR/ZXyp/y7apSFkYq9vFC/9OsVogf30htJCVTHa2AJaCKOlGdmzyiGewZbdqD4td/yx7C8DAgemcPv8SQbz6jiBHot90hjWh6/+Yu/899SG1CUFEpU8omvRZlH3cEUfyLxhAbF5WrlZcPBYnMJR3ztKVgs29JA/6RjXCnN8Yay0k/JJsW8qW+mKv7Zcls0W8QDsTNxex8RRA8WbOD888JCIACZ3hhw3+AD33lgr5ZIcB50H5DieknjT6JUGiH4e7VEhhEWYR6MaljVgKnz7UVpsvjWHr0/X7FUrMXypWbHo5BrnuAr9BZurrnmMxNywICmMl2CGW5+kFg13teE7IYJybKsZ3b1zbb6ztHsY5tTNsNwIFoNelwd8CwaeztyeXBKqMdHYHvAPPOvE/K9SXNexndWjs8Xd7aBOlJmDo5Efu+ekA53eXjHIL572q50VMq8/2Nf2QbC/JHK67WCQ/B/DxAt+gq2tm4xt6/9qoeiq7LdGZCcZTTbarPOjhyJxF9FkHUM7rSAZO9c4ssGgv5e82k/h6EZJ/Pn35Og75eMYsEBPPzFbQrzunNCURezmXtLrJDU3HfRNGwiO8IAx1skmg1ZYl0WoOojZ2Z5ap/k2x6h51LPTxKCfZBHb6DFxzU0rJAAXiwGyXgKB7KZpsz4eh7J88wFe4avGAhcIb8nPkOuwXwWmAjRfMGmCqHmPxg66mlZmzXBJsGTH9bN2LdF/qtaYM5y735HXvoZZuFBviR/GYyATLhUzeDEXPeWLIvaXY+rf7fadGhrQbhOxKojs0RQ447QA9tyzRBNXCoJQ+e5du92ydvI43B5HCCm1HEJQ4FyRtkq/+PHbTBP4n6m/+0RGKZ7e4jHz2BKgvqQSsa4oFf2L+OjNuRHfd1IkJERAorlXAECpMd+J2aA4OTVs2HWx31xxkuom+xDY3kVZwmLMph6RGFTXqLsFbBWnQoVz5K+3nxbSjjPj+vDaXTjxg5g9rQOQYp0etN1Tvzi29yBuQqqRmx4XPAo6SZ52kha9YGKrSY93UKA1qKHOO/He3PW0ZjMX+sVqmUcqVunBxPSibI/8hH5uw2hbZoSXsMg7MDLaggIjrepTOWkvbEQgHiKtWjfECXCy8V1irn6qgzR6SbyLdxb/s0QZiLreoQNJTYquVMe3YlQ+4u8/m7YWZRNUBLgKDjW/pmJKvNB7jCBruuVac+ZGDa2z8Ofn94No9jCFGA1yVV8K5DA9kwzok3ef4Zcs6QV7e/eBjZcgbkypDlonw6mPBt3GoNLK0pPSXiC0Ukl+EZvwvrj28oy/lwGI+86YBokFZ23LtKPDEkqWz6WKbR18I7r1kCsXMnjdci6MlyZKtkZQqvYS5EOPz4eehQz8GzPMJUf1BW0sKd3tsuizhitXb/lLq+Z2u36ptHvRTRqrgUtury0Gz1HSw3lCFdj4GlYZoMNiYv4G5Su46eLJPjisuc9EKpPIWyHQzJpP3tyJQS117nyMNCh0k8OjxTFzGeRPMPnHdhnQG/Hp0wd7qivOzeB0upAvyniNdViJ4PBHrA6Ug9nKnc5VzKi07swM7ExX91wES5ZLFl96EGNjCqc6V8A46/nMS6dbvTkzB4gqie2vlyBmyn5wcwCVCc6LddIt+SVOBeX11Lh815x5/3RRn3f5aqfGna7ma4cSRawMiu1HIZLdKM60e+r/N2CtKU2hjro4/v6EAt/r/WD/kG+fw7KIex9rkOGEGQBwcfeeFiRZ71hWbFYor0/mBAg0c7+elKbpU4hOwubc9Lyi3mFAiRr27JWDk0BgYAc/0ERxZoH62gw69sNno6F2/+MqQC0s31bf8qflhVCzBNAFmTllodmuZivKusxlcQZWjmCdAyuJa9LMjNuByOXZ5/rHB21WP7FDhQOG6mKTjBvXrsI3ssU4ffD+S1gd9fW0M3PLh8siIzp0efb4Lo+VwpBCjYG7pIiDjV+4ED6PgjWltXD82abiEM4JgKyShir2aA2ZPXBbG1CcedBpoZ8BMwrU5UGeGA9oNscuUd6VR/RrdHpTAfQo/oMiDNZbYPeYM8PNdUgyRfGYi8T6yP/w3EU/arqhj7tNk4qWa49YrxrqkGAtCDvhn/ABFQHB+vZgviWdv6UE2KcGSdTVK1fgI/NeV5C2LBiplRZlrUjsPAi1rwwkbKyTea8nRWc2jZnjvSMx1gx2QbAQk687suuvAdZ82qcQjegD4soa7AWnKrfcYlck/l6pG48suV1eQ1Hkz8XOiIOSxHvCp0PtWmGZJfXjtvU4NZmNmJyGbXPYd1RAcOPrV0rsl6wmjQ48M0Mo/mCwWloaJCMt4gq8EDXohkwZHE2Tld8xkG8tRW2tz93XGck2YNViePFimx7BrfgAmudDBkOdkx7jEr85QlCS9RIHeuKZ5h03H0YWFpqs2VgX6sABR7nDN7s+GQ1T8xFjhXNw4mvi1UprABB6c97JGq3tkxW9DwTnKX+H7GDUv1vxyJWtF/QxyVrg91AIJRpf6/NYwL+4sxa6NtlIeNzsrn4lgIpMvCX08jyP1bI2V1lBgwvIL6qYfg0h4svGLN5OgUkN912WaBdYYfyKXjtZqu9Od+vY50TBCJ3bt5962kTcgKOjq+s51Vcb8isrTxqIQmZDxlK3wG/I4DxWjLAskafwIp1P/LQwaDcUNeoEqmcoDOWxhPqfAf+RGhPpNCZEIzEvE345KMYGlUoCsx/8onNXazD4zT+6+gh4kD80zu7hoggOK/fLA9vQEdkzXef/kAyUQSRjaSUmp0+TtJttP/DtPV1BsXaqGiSYMXzZJj417Ityotr8BT3lxWdlEjGxlXYH4b7ibLbBwygghb0Zixoky2Uv9RMqJQfMC2DvGGRjosLVxGYkwIm31B98/6uu/IyHO3f+16igQ7cxOabMr9Ctm8R5PZfav+pqmVfNwSCqDx+HAIKuidEyoyaq9zluuznZUQOvXOW3Y/k13+umOW5/O2GbAueBRaOXlqelkSdyYRqCcC7iNzJvcxK/hhV1ts9QShl/ICLqjQOPa13BmqgZHuKeT9I9toEiUqck+hbAWic/DPqLjzxLYN63LAJ+oCx4e6zgy1Ww+HipE5J82TjquGv0e/lGy3c8gYGOt89iMjml032DPrpCDWfjGr8bhrwQ4Ol7t8lkRuQXAQ/iTXHGzO4f+ViZUlsLlOd1Uc/gy25wFPXNTkn3OqYBpWB2xPuxao3x+uzjOYh9C2hPl2hoZb0rT3mimpF5nlVGYpV6ZTjlZfrFGHzi9XKkGDMPSK8vR6+twqVLuR5bOpoC1YOOa6DoQRM147BpwfAaCpSmHoW9sEaYwVm4gZnw5MbUQTkcCpaO50tFMJVtnDVnadBj9XmQEt2ol29xuuG/4z2lXnzbnHbp8c7xJznowEDemnoU6ivK8Y3sMbx/QfmaR7Zi5zAI6i/1xSMt+GAVQzQog3kqMUK7cEXrA0Ty5gZQ3MfIUx4+GGv3pF6qH+PKUGr4uZiIUfspuhwicYXKg1BdqRMS4shKcf5E4n0kALSDH+urXrTZWRAAxYPqIfRYLBXvtusB+vsbwskb9Lf0xRIdWk96BAvadUnDdj4fQwqll9rI0q5LIGzwmslX/8xjR++OfG/LOZkSTuF/2k2mdiIX+2++Vsi62d8UMSISmwluijT8s4RH0Fk2J8DTMr+XgTssUhsUkpONeVixjoXqBBoGZFh6sVZ1SJmATY8WF21eJirNmlT2BAhV5YlgJMek7pdwTxD2CBmgyjJWmk+Vu1ZmGfnuapYDu4+uoCWyJbb859RG1bdfgo49GFjr2GiWhZtuK6m5rzgAgW+ra/kDBYOXMg9HMyQrk8GGvkfEAwzW1vtd3IwYTv+V1qqkztMlp8XD9JnaL/vbcTmWWJEwXqZX9bor9VNwGeTqYFfjxt/24ef9v/eD8LSbVBd9EnqGZ4DTSEMmiPcpF3hHvFoJwTOwEKY4sCczYDHCDWahpcc4qOOP09YzCJ9f4krBqxbtpkdu/5zXZTVqL8U6Kyn2rs7RHx83pq8yWZPX804uYu84CFyp2emBPXw+ww12bNA0Nvu1xIQ1q+HBV05kKZxRlDK8cbgIUw0Ocj5b/ixRvlZTWxi4gWCPh+mw5gf6ZRNz4zKzIB/7iapeFYAQ5EdDsVOjqVZynXZetPcSriVi/URpweVF4SgzaaAz9y7ivSOET2meDdvaBJNHJZIWLhLnDAxJ/f86oXWU0qGEmBVT9JW8rTlnqqIa6IfFf5+2q+msNvcfO+9YbeY3REMfNjx6s0RG48K3QRWIPclgWSt6LmO7LcP1FuPwBxQ2W6TsFUhCSD/wkQbEFXHKdrf1H1Xuylh6ZOwffMNgtHHOiChpDgVVRG2JWyK5VgECxwUDO9kVqkidE3ZXhYGO68L1b/x1fXg2xoT3m6bZB2vqtq/ojkf768ZKRP8+SAXkNkn0GqjpPe9y8kf/Y96HTgEYU58YcIVtJvbV88ve3aXTwRyd2gOagdGG4PklWTBGJo0fa1nSeVJSpJWQbGh0nZnzevT7b/gsu9mZm6PP3dY+WfsEMbmhKwnq68JbN4twMtPs9zpDMnb0USzv1Qe4rkG2ZtkAvogfxENTVKA8kuqBbZJ+ayMEIN+3gqYRTBVH45ZU8Qxz95v4/20pB73wgbQ5sP2ZrVEjpGuFmYeUe+XXnPesC3Xh6Y5EFzQi1nuH6m0MyoiRpHbsVIEJUN0fM71J0UOqEu72sdWxWi1kuzSedZxkGGFaDrykh2xYVaPAZuhDv3sGpAXL4KYxDiuTkZerpIwe/F3vr2sylf349gebMWXul4LK16GrYG7nV+3Axp+S99BgFXFBrfpR9Igzkz/urGA/U1TLLFSnw8uvHqPI4K2+RMQDYZ3fwVhBmOaCUtAOzjXNqlgNmc1e+npTb0Q9FroG8yG5czADxht5LIL4hvbKH1eSnvVVsF3V5UFHEz5KuWG7UtICNgRubtFTKqDgMYFOT81tpDoQPTVSwyACWfxZaWoYx+5FxzawQNPG6xpGtTxtF7u5Lw9mbPyq3AThSenHTM4KE4LfOOxNSKebadGpecdcPTqEO4dkYh2BexhAaPMrF+bOzI8gpbXnLNa1yki/8dV6H1KEZiXW54Bq7caQ9DRSwhbwJa8RHoA4oBjw1Aeb4UUG0xu9JdufIk14zyxpcwC7JFs+L7BcPfEvEeBkg86NU7BUm5DWU4hPQGmVUYRpfbpb1EmOIUAClmLYYwK+SwmNhow7nD8DXEfpFASjBSVcewdOgjxU5P/Z/zww+Gs3EXh4n0AoyQ4fIbfapQRXcU1f0EKGtwC3gmJmtzVmbnOpiW4KrgoaQZfwEvm/bxfn+QI6BeZ+9v0w5k9KTr3q2nv/lZGaV85YeraKe+0cMbbja94xJil6EVqoW6uwOthnL+0qOQUiLVEIeYBo2V/f5FJBQwS0cJ0LG6/2BTqg9AHeaF8gn5O57QGbxOwwUcAoqkm8KD7l5R6tidff/y7aqaiokiUYD5oPbmtncTk4CVic4VXMWfIb2/hFgHCQNOcP6Y0vbGNpHIDW0u4LyerKENu3G0HV3jFLXnDX4VkdD+c/szk28VDr9rSB0yVwujyHlIFykjwGKdbAWMz1RDYu86F4E69Dx0q/8hdIy+E2gFGmkDqPmfp3NKGyux5UDty7DrVKFoh1HG69U9zNlkSpJUAWSUSSCCxmh6+bCSZ/RmZabyBBlh9WramgI6ucggU66C1dwNc6nkPR498XxBa6tTFYDtTrkctsW74g+Q1PXl5MSaeUYqdL1QEzILTT/DqQpyibabYHxdPPgkT45hB3/oA8JJ9DlRETkL000EZtmnLYn1xSKO4uYcmKJKPgxxd4LyCCQtlVeRuLulAoRsvDHUWvnB5EyNAk+e8CiOY4KthXmlkLNJ3av7RrcC3vwEYAzCoJNFXfbphwmEfscPtbaLj10sRynVsDHvL3zqXyQc7r989bSaW5BgDwW4njclhJNFGxic2b0nEFbBKsekw/jb1NZLtq5XRz0D+TT/QrTLe1nbCJJscWZcQ+DiDpEFKTM3tJ0LNkRruGXp55BUpswNsg1aawKe8/XfgcOapLGZFxB4tD/54YHQ3ss+QZpR+zP5MnQ8K6PZni6gLDxSTFK8J+Oecj6L8Xva2jTfCNs5dnQOVB47mioVYSshMwRgsLYQlletwcCrKqH9u7d4AriN3xN7HLhR7blKT/9OhWm55yf/CpyAYHxi0i9H5RvN2k7SEYubvQ5jA6r7C3ebmI5JRPMFXrTXIT4tqmO4nvnp6zecFrehWqtAlHuENuQXQn04FAJQeeB7wOFqf4LI/Gul4YSpmb8bh9AdsaZBe1E/1UgGwrIwG3e/jtKhyK4QsclhqvGdrUxNosEvq7L+U9yDyM7w7QDImhYhLXNiDTzaQtNlrXagXjQaLL/L4lsl9wr6gfKMyUjq+j2XL5oKSVW19Apblk4DrXVOcFny+3cGtx1qaRcl8Ulc8qN+fSB/lYNUbs1vyMWPP4XF2Nxm/Atrop/y6bNwUqY6v5JAmZmGa1boYdWUmtx1Wwi+etxwlFjNjMq1SACyVPvTX5T5QzEdYU1fZ6k6xT6YJ5usSc7JGL2AlU8oyrDndHVMJiNS+Z81q7yKW2nbQvIMr7z9SzIpsDmkmP71fnOJKqyZUmMtqXFFKznKWLUPEIpWzympN/TriXTVmK1CHxweYbQdD1Y8pvAVnPc7GhPEzb7uWCmt7eT42ag6L6r1I3iuwbzaaEZuJPi1hXPHDw/CyjM6lIhyGqLiofuEmS3xAJU6UY9+KBTe9B6lVbyIQiRMrYNMcbh5Gv2lXWL+5foGnAfbjRFRna+mkdZ6b5Gacj/EEHkoBIKbhOw0Lac5LO0LukHKzd3jIHEYPpqTri4t+r0hNz5T+JKsj5xWDaC4IW8HUk1gRsckKtpBYg3o5vigyG5M4KYkM3udnaoUqfMG3oEn6zE71Q8Ux7XKofiehlBbiNXGhHKyw9VqE8EXHsT5J+xTMnSq9LtpqZGHUKd48NeKVdBVsRud3Yy3vqf/ycEzelaC6EqbkH3YuyEDEZnuH0pHcA0qlF309cauEPXFH7C1ubxVZI8sIG9xvHkMQrM1pnaecmmuU1x6ifNTfrbjwyS9ljGPBf3NRf+fZm1EIMvVOBZUaZaLWGpKjngyVRvPFNiW9Ed9eSJhnt5a88tn8v4bpxgaPZqrbe2vFu2QWbLGTwill1067rQX/5QwZmxSbeiZo8ve/LKNOuU3nYe9qU9S5d4FPt2nLRVwVph/5aVxu1RaOGqUZnvkw8whAEr0bk6+qqc93/vpIJz3kmHsUF+d77P7eiWvt52iLNNYDVclfK7yefgKXzzJP0q9IuVk/KPxHvF0oXGikHCgswI3tbPEg6z/5b1qYq+DHyAD/xw2x7X75FTvsyqdZqqhdpyq+AhT6k8C+LR+cD2IcGw4nzB3C9sUOSKRaleX1NFXkFX986ASFxNBpVHHXPhKUn+GQxEQaHPaSyBsuVWygLGRVsJfOkEHSP6LwUNVLV5SCRgCGU/QVUVmvTOrsVV67j7LJmrd4sOUGkq2hC+wkOKRa7YBxZyWTT0FG8ICjwywPNKawphvC2A6SQuP/zM6+2BftO05Kvlva/4WRBeNqroOIrSSIdMtjMGg6umsjLIyaE8OyP95JQtxUi62vDEib3Qa8VqV6mSSEOUV75q6kPe7NUUvCtrPeFT9Fy7mpIAoatENR++SmtOiDBv4ooDdn33Sz0GFlLlhFbesRddRj8pB2AASSPuxXu+5V2rJPNsLhEP08vmf56juaos0XchJ+jFZBXWaz92U99X4YJBn3p/7wrXPQsgNv116O9qn7ZJ16uOkG9ryWauNVufURdsKkoANpSXEq7ImBlD2nZGz2cqu+f22FcwWNaSzp84BTVs4hA5pzGVe6Ie9XJQ/XmDkUjrMXFSZ8dHIsLfmlWrLadyBvR5RPMtoXydb71nbtXqJyk5oP8Ez6pnAp4cWnd98Gd9wyHuXZj02b/KSK2SKFkEI2IBukHOWdTy1bpmWx9hXr+MxVbIAnyfvgkxTUuR1AUtubRS16JTosgaJULcqhSprp1+kaWTWNZajlgENZs3i92iv7KFcO63URRjTNRROj5GeRbnoOqd1Y3ru/BM1rMW3pN4WFQEy7Ilqy/yAW0m4i6JVW7sl5ZL/N6M4I1cyygF39tBt60IwPw/8EwBWsfvSpoBAm3GFxG0IA1qFCP9b2P/9n7r+Qof6mHs94lpZKQUnF8nE95mhy3r9FFrHIFL2Dpx7+7NoKN6gKKZaSkbJrKLALGi0aweBelmLgEw4qbWQ6joON2Y6XkzS3h7DRUogOKsHZCOYVIbLxdW9gsfwuZsoCZZ4yESCaE2yudHQK6ocIqNkCOjVnQY8Nl55vi4pcMbFxWt3XiUEB6fBCUmepNC+Vvikj28ER77tgZVyIBObKxtD9LqeoPOkSZVFhee/iS/89zp78bWY5e85MTU7SSFieaOW6gF6hdJPFZmzN84o3Z9V/O4GpZa03qC2G+0wcMdIXgfP2yF197xf8/IpwuHYmhYBJ/pax5w/jX4w/hM27lB/ny4u+v+prNJDv7sX+gg9i2dL7RZ1RxBngoff4pcPIjALRT9P/D5+dYZObrrTN3iPNERwZVMgmXmWxPxayNjtDe7dBYHiLCDfpDgZqZvlUfZ+MIc//TIzYPwZbr9i3rnwFRQSh/UEX76WglP3e1qB6KnPHdr6wDITmEpgFw/0C7lSpA9EhP18ayq3fzOPP55Mcy76rd4KRA69V7+0/bCRQfF/7LIYoa5Bvna5DnnyE/6mZZKy9t/qxo+5sull7Wb4nAEc93BIxx7/2Lwufr4/xeqgaUgb/+LHcJlhVQ+K5rjhfR1OwfB8f3cDdeVyHu2tUdxJxjvso+4AGSSQhMN0Dpr7KgX6PcOteUQltaI1QUTl6nSPIXcYHdgKmXB64HVSzY2XMx3PNplUHPjafebTbiBSePyYecqZavZbAM3kDhfH7WD4kdRlcnAjZykKkIFUMEssUq8o56B0Rh5Wl4ZYwxTdw1YS1/plawXkve3U6dIedY2Avq8JUVA5y8aRpNWmdm0iTPi6O0KJtTSMtrJCyRpTCnBqgoQuX9334LaIKqG+dSa8ViTxITsitIcs0iskVLkOUBNYucgh9pcr2NlaL+V9JqDvOkbVvsh9FbIy3tR3w5qNAgoX0aBrHutVkLb2a2CJBZ8CY1QWFwWorj3bMwLkRF+mBMTpk66uomkedopMVLuDUQPDJeai8Bbd/l6WL/+wG2jof2rSsNb1hQosFx0NulInfk6LumrNjQ39HwkKU33mW+uXOMbAxDcLnun//3+VX99WPR0O6vvZczpXCpemKPZuNNkDlUlqg3OuYlAFFzzfS/C/ZFK3iQItxF8rUTS6PP19ZeEzYi/3uycaA2eKMeAxM3D/o2fBmsmqa75ufyJ9BOfKLfQfnKxDO+ExPeVju3hcLFu7WRXcYdI2fJoRwen+u9RaTZBJZOO2Zn9c5mTZZY+X8VUPa2v3zBSKIQj4yjQ0EhnKmw0P/wu35FIjDRBaDBCcTkt5a+7wDt91R51n/+MyaNn/qKMcyKeZXrUc9s2p7CLjqk2vWngQC5I6fTWZTRG/xCLtmrTFj5YDFxNlZM0VFWDMV0iRDpB4WLVzVKgyv6V4sMurBXchYR66TgWIbsmq1R0LJWgDxtF+q6OHxcfd6keK/lVwlxpNeZu9+4Kt0ARRyx1e1HB0EqmuMHrGbquaYCS13OF5pouyBtJGJllu0c8dTj6/pStZG2jETG1hTxM+Qu+rtHhN4AuiPDOigw7MWLXXni+D0UF1sfpAPxNgXmUpPnGc/7MaiCXAAKrhwLKZWezeUlCCKLZIzQdFDmo3958pa/7irwMrjkdOMzgtYQUiYMRSW8SbPwuEisFUjpE6CpF0fT+BcJtyaRp3PleN8Zwy1yFvGUgE6/Y2WiSDjhx4nDX/NRSU/WRW6zQTOX+DT2lUDD191M900smYTvDDwSLUQu4DSNh7k/bQJn3L/OoUZMgS46HZHLmmZQ9WbkjxgflyaMmeZc1DsHcx/MWjMoYAi41g/pOI5roADWrPajd9La+R1LixLmcfvpsp5ggIeFWgL4kS/cii2iKMsKKZOdrdBN58A9AXkDeJkz2ANUw1b1P08o6OeKZG+GhdlJXtLVcwL8vmu/cIawrqdpHYrxjG2A/Y7cFJziT7viYyO0pjbkCk8XiKoku970z9FtmiMWna3a/1q1FC8vNs50DdCPo48UTIsR3O4zukmtNdOxDBHhADyR+x1LJ60k4jiJGKi+YJP4QoqJe71+/f6SO5rRXHwSsxu6NqypWpuWG++1pdSPo3JdWdm0HATDxu0YySucBqHboJuB2L+CLS5lVra5cvtH0hbXgA7IPOXn40DJXFJDUD7+IDBwOCVi5OB3GuparWjIRW9k0tQDC3EcxvmFHipG5NoNVixBVLSv2NdCuAlGCVN38M1ZGTXyPqBH3ca0stlhOAmQNyfDJ95ocP6zWjQoxcsnPHj3IZGFFfJdGoft77tvLqrm/DEOklggFhNzxTfI89pIaYlVPqO08VNye3Cyz0eVRD/Fq4Te6Fznx4TCTf5nOFNFixev2sjLA1rRFY7mAvGnJyoN6XtdgsfHcz7ktR8YRErftoNzwMMUFyZOQP+LXN39OANFGYP2zNatbeYIS3xF3iNdkpfXyPYyaGbKJwhqCYphmhimJzGbaXTi7ebijL/J8Quc1fMH6ko8BWEVwWqWBrF6I8SwE2X3IlTeOl3FCnUI+xgj9g0xBpz0PSsrEFExNZKduL8y2tbx3qkpeziQyLr5eELwqDIjrZN2f2sjJOYXsWUQoe2c8Fz9bl5RwUyovWuoKrnAnxnWW0cAXKIh/ZdrXm8JiwypEo0HfOUHdPA3RJ+qL2q6NyKPoo+lU5oNS2JhvPktCaVf883c99CpH6A8/w0Yt+1JoMsvQYmhSJ9HrZHLGOldfrZmik9ZNXLDCBw/n/pXXScZaQS/4fBPAIge2bEF3CcoWyVcTKACaWaysvoaG3ObuMZeKpve9kCEtgWpJ7Ehrz5FT/tn8q5F6ZapavnBRqlL2H1gCmxh5e6/yNgR/RkViiOZPTgN8UzSRMx3lL0jd70qEiFmsBr4Jc0xfuDYhD/QNEB/XPVndGB43zyJ8vL27jGUZfpnQfuN6JXHTdZehnfe+G2VMYz8MccnwzqFbWffRseZXVeScS7StNPGLsixh7VFSj7SceEA0xtSpn9uvwT4p0dExhvsVJ4XOW0P4djc84iewSbcPyZIFT43Ln+719D9h7bGO4mDIZFfMRot5FGu2Oq252wYCfyDGfZCNnSbMR3/4tXr48jLETe6W6FH4VD2fCCQQ3fx+l/kVA189QWmXttXqVv0xGVezugdMY+k1u0C9UFIgZON3MmvM8E/2ofXlgStCl1ryNbclbgYtg/XgVB4P/K2OvH1mXc6bmETHfVqpCYlxTiXTDusWfa8Qk7c7e9MB6AFv5Mo2rqny0uPoXRjc9tVof0ko/cjJQsH++xV5Kdo12Z+JxEW07MwnFCnXhp9Jsepstz15Dp9wANIh9mSkEBhPNIeN7WPobkNxkJWHCFQ3L3G3dzcR9JpNkVYcUet8FZ9vNM2gQ/iiLPDjciRZp2u7H9h8zKctMApi8L53NmS84gUDLqDI9HCYf7FJA0xNe4yq1f7LaMa9xwi52cPZwBxsALCC525sTeb8vBXbBXavvYPID//y88tqklG2ayr2GUcCXjQIxYrxNP3spgKhZ7YpXYVjeBRJqImQsZYWz1vljHXg9RIvTPYH/NqtYaR+nvUs2n6WFuOn6GGmoXX5jvzd7JZ4sMAivB1TINjHlMyeapn8qgH4+J8Bjl6ziXKSw9VuXI3l3b2WLYl/oniu/j0ANa95Ch4y2pDtnkrjtn/Dlg45v1/4EILN/Ff/Ze017NSm2CCb59BKaviyrNsL/z7XnBpidpQkcUp8RE0JQRiS/J+dbFsR3vMgdoR2dmay0JfAqWorn5+Xp1P08TP6l3VT/rFfYEknfsIZ5IvS0OTgjmbsz7wK3c4kjKOhnPVGA5A6YWufUomfkuRCmDf21s38kDGHV/DNCMwjudIvvAnvYw3zhOKj8KN7DfBTmV49raG4rb7nUAeJhd5JKmDUuzc/t8W+cgMvKtGEO4bIT82pAojjG7yITRjvTF8+e0uhSwGVvAsxzK/UmcQMKEAJO6d9Tz8BMyBaGkuZwEN8aczXXUq2uJ0fquetm75MUurT+8vid191Aro2UWKV0oPKUmKPl8gr5OqSsXdBaNo5Arc2OvLr6L62siLkUSdYfrFWjhGFwPP89UzjDM+M8k8zWaD3tHn+dj2k6oRs/ZYkR533snRr4pHVMTFfl7XeZckJtyUz3dzS45DWGyTLzPLrKD/dZA8WWeMI90sQlNesSxVa8J03e0qCVYPH1ct1w37a6jTvDy4jFPyigZ9308WUizz49dWXUh7vE2h5y/le4wHypWRUGi6Tu77HGflNOqIoEd2FOEiT28HKfWk1PGSTCGYcZu3qCBJBEM0kbnEKIHiAZ4hD2E5XrrAWU81Xtocz7lTOfNtM9KfAoRrUjMATQwsmtAwl7btOhf1TIRjz8gSgoJJFjLIPF+nyn2jyu0SdlSUxYqy7nqQUXsjLiJJ+RytNOyAm2/uI+pkjlFYXLV1HYu/Y60mCCMc2cXyrJgtEpzlgqAviHuTVEmE5naifRTXVb/gIU5LL8qHHiQYCwoYkQ/9MQNPK0wEJJb0dA4XIVl1TgMI4iRFxI6tVmhMu527PrM5AGwpHEtBpGE2/iFyJQobRix3OuBqAWYmfzqBrl6c0J+uj5XpH6Exhc0/rlE2YUIKR7da0DIusj9z09PkmAhKQ2XmpCyNMaS7fiUiehxronvYTU3XV63mwqfr0PbFnDxesBHUmfssYxejeAdduLWYMGAeq2tOj7UscZ81vfjSIFr5FYqRBLM9BO++MUyWz8SM/6QpxHT0Qyfz7DBtF0/UL3Wbp2eFJwrECJHMcVp7tQXd+VYqsTRZKOhWgJhxnS4zp6UJGEDZChNazik5TGSPTqBgiA3kUkZS2URHthEQ4uYrvUrB+i4EM9t19IflQhmwc6lKRlcS5BheWFZvVrXZ+hvvTQCFd4JwLyQ+n80/9Dz6AfcrZRzlKlEZ+ZFmAqz74PIKY8N0NvF99VSppChAQ6Bn8rf6d7ec3yWVwcnTN0ZTHDUR/mV1FsEdO2tRMNAlGD1TsMkBugaH0vOcbvY5keKMV9rLMc11zSKOX/UKtAnQMfhvQZx7071kCpFrqmSgI54VPcO5kVrCeGAxlPvtb2xqpGvWGdPPmj5dGqWu2ENUsW90k4CW5C65W9BNXHkXE6XlQ4LRe/pt2UMCPfjqSFNrntZqxzu7+K4fc2+j6jHT/cyc2OOzwsUYml3dlVHAa0h/0YGB1P/Y/nNZ4q9a/K5vyOS5nWqdEU3KMpyVOtJBZbuI2cUQM3HTHYN0c24lW9tuo0tQ7huESWA1wlV+203fNWcpVPGFaS70eWLx0Qcwn7r8ba4gzFrPQIxEjzPMsvOMZBa91fvrG/iJFkXVSaGc2HLqNYbDHqv2eDUpAb0hN9anzm8A7npyUVO1Knj7gfILx5gIO/069ceGLdUxPFhEyN7v6blMP8jPUms3UVbl5PInmViRFXAZlul2IHokzNX74cNInoN04v9lM5tb5a77G/hllH3Kbj82/dv0unH6VY7Ms/pti87DtRK69omo2ELDEkNJ87nJVhpuX/Mhfn+nS2s/kQHFwjF7vVjp/H9ip6HdEm4aHxaGtVCfAs4eHD8SPxh9NmGbCnNX2dkyXU9jN75Elyja4QPvYkNpSPx7rtvOfO8G47SsTwRg9CREuT/j5s8oJbi87TRcPFpnOtt8kHqgLgMDYMpxsZi15GkhZNMRPC4Pm66wy4OmQC6hfMvs0LCLcEK+gtF/HP6Hfp2t/q3THg6SLnYNr5qEJtxhXEPEfw1dqTTvnOvyzZ1oCtI3BnTKHlf5P0l4SHL6F6/1Lr2OQVcknkR8F0gX42mndAXSenFaFQ1dWa/nvjtYzQatxl+tHCwoT/KCoe6kgYKGQZN6q+W7LMcrLh8PssSqn8zG/rGoF7VYsdh5VaIuSfyhZAu+UYzLCmxfl1NuRwRw0gKq9oPIrsIMV5GfqhEk4V/y//GeHmS+zI6TX04KY8vvS1IrnQQhr4hqCBK+7Iz+u/pGglLCJSE8ysKyTnh20Eibfr+hgVqPif0pFN1UrDo03Iz3UWntlrxu7x1/SqTAOUP0H3gWhNOBQqe0vesSa2a2cbetETk3K5xmWLL4mgHcvn0tXyiEfXYUB9yATL/TjqeIFcVUo9RRIK6vGDbdJv5htbREf9r9IDzAGa3savECUMuxmfsCpyb8UiCCRIdjqbNH9eba/Q+1mr4LUIPHX+fMpFod8NvgA1lntvf1+83sZyHT9wJnmD9+zKOgDFk2nQumumNty3GJ5ncAdcytlb9jM2pkS9urmiD5HpKKhFm7ZCoIVP+YFWdSQ+exXE/LNqk26CTJRfVYQ0Msulh7aPXsi2Xba6mzuOhWsSqpJOhFrlm/EhTd1nDKKhaGy9AMBElF3sMi+9xddStTyJOY0m+7OvOXWHMvTxtKNovnNsBrwGWXKdDdHnPc3iUY2dPrtiaCKJDqUvSrm458C0yv5hA+L65kdI4D807CEYK7qQDKfO9uyB6LV2RT2ElsvM+7vUi/pBnTvNbcCnH9tzBEpnzWTUHqQlzngSpIXACtrtfJlyOzpigS817Maj/cVtSOp6dauoeclAYtp7su2cN75c4+7/CCwvFxn6TQA15+En9ranCura/rLGfM6G+4wysuJfWc7iVWIzYM00DmV0dmg1oNNxo9xokMp06N2t5Cop16MOfH5ihNNKG+rrN6lCFVYpPhXbjbWh+1t3K5oEBxovP3NEO/ZqDIYt/NbLst8k9NxPC2gvfDTn2o61u67VRBnaDXThxZGqQHWoUGx50ZwyTtTonrlRVNi8QmWCjXS4CQmd7XwDquHhbUCnkSK6K8D39+qj1yNjQqAe3Vl0T8VXWSx4+VbMi1Kts5Y3Qiu4xaA+5B0RR9d6cNnxQ6nqwuoG5R/ucDrgVfb3oPATvxKb4Hk0OG7/xLf/8HUpC2GdQhmHau8U8uC74sRPq6s0+FWHrfDNmhe4MCFVQs2q+DQV7cl2X1VciSGeXZDqO1tgh849cSU0qipuQIVx4YATxy3LOVrUNlXqOFZ2fDqMGgEoevzrYZFXlAgFAUDC+WIcoqYxdsIvnU4+tCbI9reRTIZPGOvn2ttDJxoyiucgDJx7ScFCtoOUccQW+OukHQqqEE2KsfPspQ1s/8ChOxVcJ1wdjGdFfBTkO+bH86GJm4oeDEHF6RxPyTavL/BhyTIBg39g4HrHocCaz/836ApW0bXVF9qDVZ8mhyYw9Gb9ck5Gq5/DW/TzS/4ELjm5aKjhi8yRSWR/fTTRiF+kDNKAAuAprnkBhjh+96LlFcKpFcRlkUmvrWvIvA3pWYTWPPpx/5DK5dSWU4H3y9ZVHiRFI1b/z+lnF9Vep5pVynnj0f6Cci3FoJIUmjDZOPhcvFgPv4iZf/jeHJEC1tZ8IiqbHpbtC0Ohd7JzJqV49oedR9u9PZ/EX6SO06WIFEuERhyEgKgA9wueNhpvNIEfPe9wXh5ECk40HSACAVES3qJdKB/rLJokSRuVk1eCu/DOmBoUeeKw/F4xg+MQq2WVATgJhmwU7DOTXuYKr1nvlggIguLK4SsmPEIsPd+IDuCScSGf7auO8tZenph0gDqUlKB9+iXeK1e9n8S8t97D/MR587lwuMpvR7UCc+cKN/DfwqhnKGKqbnix1KTGy9kppOslIu7PhuURXhI9uHj4bUYclll6hvFPi7Yz/Op9uX2B53/4pWt/xL6Xdmi36QFwYIXlx8MZwUc5E+jnt1ychpXF0Gf6gWHfREiMMnv9nvrWEPpyvXLvw6QAAAA==",w:166,h:760},"night-cream":{url:"data:image/webp;base64,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",w:167,h:759},"skin-oil":{url:"data:image/webp;base64,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",w:157,h:498}};var vc={"skin-oil":{url:Au,box:[1e3,1e3,232,100,769,960],h:.635},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,700,1107],h:.635},"day-cream":{src:"products/day-cream.webp",box:[1200,1200,345,97,864,1152],h:.86},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,862,1153],h:.86},"cleansing-gel":{src:"products/cleansing-gel-box.webp",box:[1200,1200,223,64,933,1113],h:.825},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1138],h:.92},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,65,764,1148],h:1}},Pu={"cleansing-gel":.748,"day-cream":.841,"night-cream":.841,"skin-oil":.553},Vr=Object.fromEntries(Object.entries(Eu).map(([i,e])=>[i,{url:e.url,box:[e.w,e.h,0,0,e.w,e.h],h:Pu[i]}])),Tu=.22,Nv=["komplet-pakken","skin-oil","serum","day-cream","night-cream","all-day-facial","cleansing-gel","body-lotion","shampoo"],Fv={"skin-oil":"face",serum:"face","day-cream":"face","night-cream":"face","cleansing-gel":"face","body-lotion":"body",shampoo:"body"},_u=i=>i.bundle?"sets":Fv[i.id]||"face",Ru={"cleansing-gel":"Rens","day-cream":"Dag","night-cream":"Nat","skin-oil":"Olie"},Bv="https://naturecell.dk",Ov={"skin-oil":"/products/cbd-olie-1000mg",serum:"/products/naturecell-cbd-hyaluronic-serum","day-cream":"/products/dagcreme","night-cream":"/products/natcreme","cleansing-gel":"/products/rensegel","body-lotion":"/products/bodylotion",shampoo:"/products/shampoo-300ml","komplet-pakken":"/products/hudpleje-startpakke-plus-1","all-day-facial":"/products/ansigtpleje-serie"},xc=i=>Bv+(Ov[i.id]||(i.handle?`/products/${i.handle}`:"/collections/cbd-hudpleje")),Lu={"body-lotion":"Krop",shampoo:"H\xE5r"},Cu=i=>i.nickname||Lu[i.id]||"Ansigt",Iu={"skin-oil":"Bl\xF8d og velplejet hud \u2013 alle hudtyper.",serum:"Fugtboost med hyaluronsyre og CBD.","day-cream":"Let dagcreme med aloe vera og shea.","night-cream":"N\xE6rende natcreme med mandelolie.","cleansing-gel":"Mild rens, der bevarer fugtbalancen.","body-lotion":"Intensiv fugtighed til t\xF8r hud.",shampoo:"Mild shampoo til hele familien."},Cn={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',plus:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5v11M6.5 12h11"/></svg>',tick:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12.4 3.9 3.9L18 8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',pil:'<svg class="deals-pil" viewBox="14.5 17 31 31" aria-hidden="true"><path d="M31.63,46.75l12.34-7.13-12.55-6.76.05,3.58c-3.88-.64-12.57-3.63-15.45-17.47,0,0,0,19.64,15.54,23.44l.06,4.33Z"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>'},At=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),hr=(i,e,t)=>Math.max(e,Math.min(t,i));function yc(i,e){let{fmt:t,store:n}=e,s=h=>t.kr(h).replace(/ (?=kr\.)/,"\xA0"),r=(h,A=i)=>A.querySelector(h),a=(h,A=i)=>[...A.querySelectorAll(h)],o=e.prefersReducedMotion,l=matchMedia("(hover: hover) and (pointer: fine)").matches,c="cubic-bezier(.16, 1, .3, 1)",d=+((location.search.match(/[?&]dealsSlow=(\d+)/)||[])[1]||1),f=matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0&&e.isMobile();i.classList.toggle("deals-touch",f);let m=r("[data-deals-grid]"),p=r("[data-deals-live]"),x=Nv.map(h=>e.byId[h]).filter(h=>h&&!h.gift&&(vc[h.id]||h.bundle));e.products.forEach(h=>{!h.gift&&h.img&&!x.includes(h)&&!/drops|lubricant/.test(h.img)&&x.push(h)});let v=(h,A)=>h&&h.url?h.url:e.asset(h?h.src:A.img),g=h=>(h.box[4]-h.box[2])/(h.box[5]-h.box[3])*h.h;function u(h,A,R,I="",C=0,Q=1){let[V,te,X,oe,Ce,Z]=h.box,xe=Ce-X,ze=Z-oe,Le=`width:${(V/xe*100).toFixed(3)}%;left:${(-X/xe*100).toFixed(3)}%;top:${(-oe/ze*100).toFixed(3)}%`,Mt=xe/V,Xe=g(h);return`<div class="deals-prod" style="--ar:${(xe/ze).toFixed(4)};--ph:${h.h.toFixed(4)};--gx0:${(X/V*100).toFixed(3)}%;--gw:${Mt.toFixed(4)};--bk:${(Mt/Xe).toFixed(4)};--px0:${C.toFixed(4)};--pw:${Q.toFixed(4)}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack" style="--m:url('${A}')"><img src="${A}" alt="${At(R)}" width="${V}" height="${te}" draggable="false" style="${Le}"><span class="deals-gloss deals-gloss--sheen" aria-hidden="true" style="${Le};aspect-ratio:${V}/${te}"></span><span class="deals-gloss" aria-hidden="true" style="${Le};aspect-ratio:${V}/${te}"></span></span>
      ${I}
    </div>`}let M=h=>h.reduce((A,R)=>A+g(R),0)+Tu*(h.length-1);function E(h){if(h.bundle){let R=(h.contains||[]).filter(V=>Vr[V]),I=R.map(V=>Vr[V]),C=M(I),Q=0;return`<div class="deals-line deals-line--set" style="--lw:${C.toFixed(4)};--n:${R.length}" role="img" aria-label="${At(h.name)}: ${R.map(V=>At(e.byId[V]?.name||V)).join(", ")}">
        ${R.map((V,te)=>{let X=g(Vr[V]),oe=u(Vr[V],Vr[V].url,"",`<span class="deals-prod__lbl" aria-hidden="true"><span class="deals-no">${te+1}</span>${Ru[V]||""}</span>`,Q/C,X/C);return Q+=X+Tu,oe}).join("")}
      </div>`}let A=vc[h.id]||{src:h.img,box:[1e3,1e3,0,0,1e3,1e3],h:.8};return`<div class="deals-line" style="--lw:${M([A]).toFixed(4)}">${u(A,v(A,h),`${h.name}${h.size?", "+h.size:""}`)}</div>`}let y=(h,A=!1)=>`
    <div class="deals-price${A?" deals-price--big":""}">
      <span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${s(h.price)}</span>
      <span class="deals-price__save">Spar ${s(h.save)}</span>
      <span class="deals-price__was">F\xF8rpris ${s(h.price0)}</span>
    </div>`,L=(h,A="")=>`
    <button class="nc-btn deals-add${A}" type="button" data-add="${h.id}">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a">${Cn.bag}<span>L\xE6g i kurv</span><span class="nc-sr"> \u2013 ${At(h.name)}</span></span>
      <span class="deals-add__b" aria-hidden="true">${Cn.check}<span>Lagt i kurv</span></span>
    </button>`,T=h=>[h.size,h.strength].filter(Boolean).join(" \xB7 "),P=h=>(h.contains||[]).map(A=>e.byId[A]).filter(Boolean),U=h=>P(h).reduce((A,R)=>A+R.price,0),S=h=>U(h)-h.price,b=h=>{let A=P(h);return A.length?`<div class="deals-set__contents">
      <p class="deals-set__cap"><span>Indhold</span><span>F\xF8rpris</span></p>
      <dl class="deals-set__list">
        ${A.map((R,I)=>`<div class="deals-set__row"><dt><span class="deals-no" aria-hidden="true">${I+1}</span>${At(R.name)}</dt><dd>${s(R.price0)}</dd></div>`).join("")}
        <div class="deals-set__row deals-set__row--sum0"><dt>Samlet f\xF8rpris enkeltvis</dt><dd>${s(A.reduce((R,I)=>R+I.price0,0))}</dd></div>
        <div class="deals-set__row deals-set__row--sum"><dt>Enkeltvis i Black Week</dt><dd>${s(U(h))}</dd></div>
      </dl>
    </div>`:""},D=h=>S(h)>0&&S(h)!==h.save?`<p class="deals-set__less"><span class="deals-set__less-dot" aria-hidden="true"></span>Pakken er ${s(S(h))} billigere end enkeltvis</p>`:"",z=e.campaign.giftThreshold,k=e.campaign.freeShipping,G=h=>{let A=[];return h.price>=z&&A.push([Cn.tick,"Udl\xF8ser gratis CBD Lip Balm"]),h.price>=k&&A.push([Cn.tick,"Fri fragt"]),A.push([Cn.tick,"Ingen kode \u2013 rabatten tr\xE6kkes i kurven"]),h.price<z&&A.push([Cn.plus,`<b>${s(z-h.price)}</b> fra gratis CBD Lip Balm`,' class="is-nudge"']),`<ul class="deals-set__perks">${A.map(([R,I,C=""])=>`<li${C}>${R}<span>${I}</span></li>`).join("")}</ul>`},K=h=>`<span class="nc-bubble nc-bubble--sale deals-bubble" aria-hidden="true">\u2212${h.pct}%</span>`,q=h=>`<button class="deals-quick" type="button" data-qv="${h.id}">${Cn.eye}<span class="nc-sr">Hurtig visning \u2013 ${At(h.name)}</span></button>`;function se(h,A){let R=_u(h);if(h.bundle){let I=(h.contains||[]).length;return`<li class="deals-item deals-item--set" data-id="${h.id}" data-cat="${R}" style="--ri:${A}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${h.id}">
          <div class="deals-card__stage" data-stage>
            <span class="deals-ground" aria-hidden="true"></span>
            ${E(h)}${K(h)}
            ${q(h)}
          </div>
          <div class="deals-card__body deals-set__body">
            <div class="deals-set__intro">
              <p class="deals-card__eyebrow">Sampakke \xB7 ${I} produkter</p>
              <h3 class="deals-card__name deals-card__name--set" id="deals-n-${h.id}"><a class="deals-card__link" href="${xc(h)}">${At(h.name)}</a></h3>
              <p class="deals-card__claim deals-card__claim--set">${At(h.claim)}</p>
              ${b(h)}
            </div>
            <div class="deals-set__side">
              ${G(h)}
              <div class="deals-card__buy">${D(h)}${y(h,!0)}${L(h)}</div>
            </div>
          </div>
        </article>
      </li>`}return`<li class="deals-item" data-id="${h.id}" data-cat="${R}" style="--ri:${A}">
      <article class="deals-card" aria-labelledby="deals-n-${h.id}">
        <div class="deals-card__stage" data-stage>
          <span class="deals-ground" aria-hidden="true"></span>
          ${E(h)}${K(h)}${q(h)}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${At(Cu(h))}</p>
          <h3 class="deals-card__name" id="deals-n-${h.id}"><a class="deals-card__link" href="${xc(h)}">${At(h.name)}</a></h3>
          <p class="deals-card__size">${At(T(h))}</p>
          <p class="deals-card__claim">${At(h.claim)}</p>
          ${Iu[h.id]?`<p class="deals-card__claim deals-card__claim--s">${At(Iu[h.id])}</p>`:""}
          <div class="deals-card__buy">${y(h)}${L(h)}</div>
        </div>
      </article>
    </li>`}let O=e.byId[e.campaign.giftId],ne=O?O.name:"CBD Lip Balm",ue=`<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${x.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__art" aria-hidden="true">
          <!-- no Lip Balm packshot exists yet: an honest gift tag (value + size) hangs on a sand thread instead of a stand-in product -->
          <span class="deals-drop deals-drop--bg"><span class="deals-drop__spec"></span></span>
          <span class="deals-tag">
            <svg class="deals-tag__string" viewBox="0 0 40 60" preserveAspectRatio="none"><path d="M20 0 C 21 18, 26 30, 20 60"/></svg>
            <span class="deals-tag__card">
              <span class="deals-tag__hole"></span>
              <span class="deals-tag__k">V\xE6rdi</span>
              <span class="deals-tag__v">${s(e.campaign.giftValue)}</span>
              <span class="deals-tag__n">Gave \xB7 6 ml</span>
            </span>
          </span>
        </div>
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Black Week-gave</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${At(ne)} med i k\xF8bet</h3>
        </div>
        <p class="deals-gift__copy">Gratis <span class="deals-gift__copy-x">(v\xE6rdi ${s(e.campaign.giftValue)}), n\xE5r du handler for</span><span class="deals-gift__copy-s">ved k\xF8b</span> over ${s(z)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis ${At(ne)}" aria-valuemin="0" aria-valuemax="${z}" aria-valuenow="0" aria-valuetext="0 kr. af ${z} kr.">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(k/z*100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(k/z*100).toFixed(2)}%"><span class="deals-gift__lx">Fri </span>fragt</span>
            <span class="deals-gift__lend">Gave</span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
        <button class="nc-btn nc-btn--outline-light deals-gift__cta" type="button" data-gift-cta><span>Se Komplet Pakken</span>${Cn.pil}</button>
      </div>
    </aside>
  </li>`;m.innerHTML=x.map(se).join("")+ue,m.classList.add("deals-rv");let be=a(".deals-head [data-reveal]");be.forEach(h=>{h.removeAttribute("data-reveal"),h.classList.add("deals-hd")});let ke=()=>be.forEach(h=>h.classList.add("is-in")),et=()=>{ke(),m.classList.add("is-in"),o||setTimeout(()=>Ie(0),650)};if(o)ke(),m.classList.add("is-in");else{let h=new IntersectionObserver(R=>{R.some(I=>I.isIntersecting)&&(ke(),h.disconnect())},{rootMargin:"0px 0px -4% 0px"});h.observe(r(".deals-head"));let A=new IntersectionObserver(R=>{R.some(I=>I.isIntersecting)&&(et(),A.disconnect())},{rootMargin:"0px 0px -6% 0px"});A.observe(m)}let j=r(".deals-foot");j&&j.removeAttribute("data-reveal");let re={all:x.length,face:0,body:0,sets:0};x.forEach(h=>re[_u(h)]++),a("[data-count]").forEach(h=>{h.textContent=re[h.dataset.count]});let Ae=!1,he=!1;new IntersectionObserver(h=>{Ae=h.some(A=>A.isIntersecting)},{threshold:.15}).observe(m);function Ie(h=0){if(o)return;let A=$().filter(C=>!C.hidden&&C!==Y).map(C=>r(".deals-card",C)).filter(C=>C&&!(we.get(C)||{}).th),R=A.map(C=>C.getBoundingClientRect()).map(C=>C.top),I=Math.min(...R);A.forEach((C,Q)=>{let V=C.getBoundingClientRect(),te=(V.top-I)/260+V.left/360;setTimeout(()=>{C.classList.remove("is-sweep"),C.offsetWidth,C.classList.add("is-sweep")},h+te*140)})}o||setInterval(()=>{Ae&&!he&&!document.hidden&&m.classList.contains("is-in")&&Ie(0)},12e3),m.addEventListener("animationend",h=>{h.animationName==="deals-sweep"&&h.target.closest(".deals-card")?.classList.remove("is-sweep")});let Be=r(".deals-gift__fill"),He=r(".deals-gift__track"),ut=r("[data-gift-status]"),We=r(".deals-gift"),at=e.byId["komplet-pakken"],B=r(".deals-tag"),Rt=null;function Ye(h=1){if(o||!B||Rt&&Rt.playState==="running")return;let A=[1.6,-1.1,.62,-.3,.1,0];Rt=B.animate(A.map((R,I)=>({transform:`rotate(${(R*h).toFixed(3)}deg)`,offset:[0,.18,.38,.58,.78,1][I]})),{duration:4200,easing:"cubic-bezier(.33, 0, .3, 1)"})}l&&We.addEventListener("pointerenter",()=>Ye(.8));function Qe(){let h=n.subtotal();Be.style.setProperty("--p",hr(h/z,0,1).toFixed(4)),He.setAttribute("aria-valuenow",String(Math.min(h,z))),He.setAttribute("aria-valuetext",`${Math.min(h,z)} kr. af ${z} kr.`),We.classList.toggle("is-ship",h>=k),h>=z&&!We.classList.contains("is-done")&&Ye(1.4),We.classList.toggle("is-done",h>=z);let A;h<=0?A=at&&at.price>=z?`<b>${At(at.name)}</b> (${s(at.price)}) udl\xF8ser gaven alene.`:`Fri fragt allerede fra ${s(k)}.`:h<k?A=`Du mangler <b>${s(k-h)}</b> til fri fragt og <b>${s(z-h)}</b> til din gave.`:h<z?A=`Fri fragt er din. Du mangler <b>${s(z-h)}</b> til din gave.`:A=`<b>Din ${At(ne)} f\xF8lger med.</b> Fri fragt er ogs\xE5 din.`,ut.innerHTML=A}Qe(),n.on(h=>{(h==="cart:add"||h==="cart:change")&&Qe()}),r("[data-gift-cta]").addEventListener("click",()=>{let h=r('.deals-item[data-id="komplet-pakken"]',m);if(!h)return;h.hidden&&Ee.find(I=>I.dataset.filter==="all")?.click();let A=r(".deals-card",h),R=r(".deals-card__link",h);A.scrollIntoView({behavior:o?"auto":"smooth",block:"center"}),setTimeout(()=>{R.focus({preventScroll:!0}),A.classList.remove("is-spot"),A.offsetWidth,A.classList.add("is-spot"),o||(A.classList.remove("is-sweep"),A.offsetWidth,A.classList.add("is-sweep"))},o?0:650)});let Se=r(".deals-filter"),Ze=r(".deals-filter__ink"),Ee=a(".deals-chip"),_="all";function w(h,A){let R=h.offsetLeft,I=h.offsetWidth;Ze.style.transition=A||o?"none":"",Ze.style.width=`${I}px`,Ze.style.transform=`translateX(${R}px)`,A&&(Ze.offsetWidth,Ze.style.transition=""),Ze.classList.add("is-on")}let H=()=>Ee.find(h=>h.getAttribute("aria-pressed")==="true")||Ee[0];requestAnimationFrame(()=>w(H(),!0)),document.fonts&&document.fonts.ready.then(()=>w(H(),!0));let ee=()=>{let h=Se.scrollLeft+Se.clientWidth<Se.scrollWidth-2,A=Se.scrollLeft>2;Se.classList.toggle("is-more",h),Se.classList.toggle("is-before",A)};Se.addEventListener("scroll",ee,{passive:!0}),new ResizeObserver(()=>{w(H(),!0),ee()}).observe(Se);let $=()=>a(".deals-item",m),Y=r(".deals-item--gift",m),Te=()=>getComputedStyle(m).gridTemplateColumns.split(" ").filter(Boolean).length||1,fe=h=>h.classList.contains("deals-item--set")?Math.min(2,Te()):1;function ve(h=_){let A=Te(),I=$().filter(Q=>Q!==Y&&(h==="all"||Q.dataset.cat===h)).reduce((Q,V)=>Q+fe(V),0),C=(A-I%A)%A||A;return Y.style.gridColumn=`span ${C}`,Y.dataset.span=C,Y.classList.toggle("is-wide",C>=2),C}ve();let Ne=Te();new ResizeObserver(()=>{let h=Te();h!==Ne&&(Ne=h,ve())}).observe(m);let ae=[];function Me(h){if(h===_)return;_=h,ae.forEach(Z=>Z.cancel()),ae=[],m.classList.add("is-in"),$().forEach(Z=>{Z.style.position=Z.style.left=Z.style.top=Z.style.width=Z.style.height="",Z.classList.remove("is-leaving"),Z.dataset.leaving&&(Z.hidden=!0,delete Z.dataset.leaving)});let A=m.getBoundingClientRect(),R=A.height,I=new Map($().filter(Z=>!Z.hidden).map(Z=>[Z,Z.getBoundingClientRect()])),C=Y.dataset.span,Q=Z=>Z===Y||h==="all"||Z.dataset.cat===h,V=[...I.keys()].filter(Z=>!Q(Z)),te=$().filter(Z=>Z.hidden&&Q(Z));V.forEach(Z=>{let xe=I.get(Z);Object.assign(Z.style,{position:"absolute",left:`${xe.left-A.left}px`,top:`${xe.top-A.top}px`,width:`${xe.width}px`,height:`${xe.height}px`}),Z.classList.add("is-leaving"),Z.dataset.leaving="1"}),te.forEach(Z=>{Z.hidden=!1});let X=String(ve(h)),oe=m.getBoundingClientRect().height;if(o){V.forEach(Z=>{Z.hidden=!0,Z.style.position="",Z.classList.remove("is-leaving"),delete Z.dataset.leaving});return}V.forEach(Z=>{let xe=Z.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(6px) scale(.965)",filter:"blur(2px)"}],{duration:300,easing:"cubic-bezier(.4,0,.6,1)",fill:"forwards"});ae.push(xe),xe.onfinish=()=>{Z.hidden=!0,Object.assign(Z.style,{position:"",left:"",top:"",width:"",height:""}),Z.classList.remove("is-leaving"),delete Z.dataset.leaving,xe.cancel()}});let Ce=0;$().filter(Z=>!Z.hidden&&!Z.dataset.leaving).forEach(Z=>{let xe=Z.getBoundingClientRect(),ze=I.get(Z);if(Z===Y&&C!==X)ae.push(Z.animate([{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"none"}],{duration:640,delay:260,easing:c,fill:"backwards"}));else if(ze){let Le=ze.left-xe.left,Mt=ze.top-xe.top;Math.abs(Le)+Math.abs(Mt)>.5&&ae.push(Z.animate([{transform:`translate(${Le}px, ${Mt}px)`},{transform:"none"}],{duration:760,easing:c}))}else ae.push(Z.animate([{opacity:0,transform:"translateY(18px) scale(.985)"},{opacity:1,transform:"none"}],{duration:720,delay:160+Ce++*55,easing:c,fill:"backwards"}))}),Math.abs(oe-R)>1&&ae.push(m.animate([{height:`${R}px`},{height:`${oe}px`}],{duration:640,easing:c})),setTimeout(()=>Ie(0),520)}Ee.forEach(h=>h.addEventListener("click",()=>{Ee.forEach(R=>R.setAttribute("aria-pressed",String(R===h))),w(h),Se.scrollWidth>Se.clientWidth&&Se.scrollTo({left:h.offsetLeft-(Se.clientWidth-h.offsetWidth)/2,behavior:o?"auto":"smooth"}),Me(h.dataset.filter);let A=re[h.dataset.filter];p.textContent=`Viser ${A} ${A===1?"produkt":"produkter"}`})),Se.addEventListener("keydown",h=>{let A=Ee.indexOf(document.activeElement);if(A<0)return;let R=h.key==="ArrowRight"?A+1:h.key==="ArrowLeft"?A-1:h.key==="Home"?0:h.key==="End"?Ee.length-1:-1;R<0&&h.key!=="ArrowLeft"||(h.preventDefault(),Ee[(R+Ee.length)%Ee.length].focus())});let we=new Map,Pe=0,ge=0,Oe=.18,Ge=.12;function it(h){let A=Math.min(.05,(h-ge)/1e3);ge=h;let R=1-Math.exp(-A*7),I=1-Math.exp(-A*6),C=1-Math.exp(-A*4.2),Q=h/1e3;we.forEach((V,te)=>{let X=(xe,ze,Le)=>Math.abs(ze-xe)<.0015?ze:xe+(ze-xe)*Le;V.rx=X(V.rx,V.trx,R),V.ry=X(V.ry,V.try,R),V.h=X(V.h,V.th,I),V.mx=X(V.mx,V.tmx,C),V.sx=X(V.sx,V.tsx,C);let oe=Math.sin((Q-V.t0)*Math.PI*2*Ge)*Oe*V.dk*V.h,Ce=Math.abs(V.trx-V.rx)+Math.abs(V.try-V.ry)+Math.abs(V.th-V.h)<.01;te.style.transform=Ce?`perspective(1100px) rotateX(${V.rx.toFixed(1)}deg) rotateY(${V.ry.toFixed(1)}deg) translateY(${Math.round(-V.h*4)}px)`:`perspective(1100px) rotateX(${V.rx.toFixed(3)}deg) rotateY(${V.ry.toFixed(3)}deg) translateY(${(-V.h*4).toFixed(2)}px)`,te.style.setProperty("--h",V.h.toFixed(4)),te.style.setProperty("--deals-lx",`${((V.mx+oe)*100).toFixed(2)}%`),te.style.setProperty("--deals-sx",`${((V.sx+oe*.55)*100).toFixed(2)}%`),te.style.setProperty("--ry",V.ry.toFixed(3)),te.style.setProperty("--rx",V.rx.toFixed(3)),Math.abs(V.trx-V.rx)+Math.abs(V.try-V.ry)+Math.abs(V.th-V.h)+Math.abs(V.tsx-V.sx)<.002&&V.th===0&&(te.style.transform="",["--h","--deals-lx","--deals-sx","--ry","--rx"].forEach(xe=>te.style.removeProperty(xe)),we.delete(te))}),Pe=we.size?requestAnimationFrame(it):0}let N=()=>{Pe||(ge=performance.now(),Pe=requestAnimationFrame(it))};l&&!f&&!o&&(m.addEventListener("pointermove",h=>{let A=h.target.closest(".deals-card");if(!A||h.pointerType!=="mouse")return;he=!0;let R=A.getBoundingClientRect(),I=hr((h.clientX-R.left)/R.width,0,1),C=hr((h.clientY-R.top)/R.height,0,1),Q=-.08+I*1.16,V=A.querySelector("[data-stage]").getBoundingClientRect(),te=hr((h.clientX-V.left)/V.width,0,1),X=we.get(A);(!X||X.th===0)&&(A.classList.remove("is-sweep"),X||(X={rx:0,ry:0,h:0,dk:1},we.set(A,X)),Object.assign(X,{mx:Q,sx:te,t0:performance.now()/1e3}));let oe=A.classList.contains("deals-card--set")?.5:1;X.dk=oe*oe,X.try=(I-.5)*6*oe,X.trx=-(C-.5)*4*oe,X.th=1,X.tmx=Q,X.tsx=te,N()}),m.addEventListener("pointerout",h=>{let A=h.target.closest(".deals-card");if(!A||A.contains(h.relatedTarget))return;he=!1;let R=we.get(A);R&&(R.trx=0,R.try=0,R.th=0,R.tsx=.3,N())}));let de=new WeakMap;function W(h,A){let R=h.getBoundingClientRect(),I=A&&A.clientX?A.clientX-R.left:R.width/2,C=A&&A.clientY?A.clientY-R.top:R.height/2;h.style.setProperty("--ix",`${I}px`),h.style.setProperty("--iy",`${C}px`),h.classList.remove("is-added"),h.offsetWidth,h.classList.add("is-added"),clearTimeout(de.get(h)),de.set(h,setTimeout(()=>h.classList.remove("is-added"),2600))}function J(){let h=innerWidth,R=[...document.querySelectorAll("[data-cart]")].map(I=>I.querySelector(".hdr-cart__icon")||I).map(I=>I.getBoundingClientRect()).filter(I=>I.width>0&&I.bottom>0&&I.top<innerHeight&&I.left<h)[0];return R?{x:R.left+R.width/2,y:R.top+R.height/2,real:!0}:{x:h-36,y:30,real:!1}}let pe=(h,A,R,I,C)=>{let Q=1-C;return Q*Q*Q*h+3*Q*Q*C*A+3*Q*C*C*R+C*C*C*I},ce=h=>(h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2)*.82+(1-Math.pow(1-h,3))*.18,De=null,st=[],yt=0,Je=getComputedStyle(i),Xt=(h,A)=>Je.getPropertyValue(h).trim()||A,Ft=(h,A)=>{let R=h.replace("#",""),I=parseInt(R.length===3?R.replace(/./g,"$&$&"):R,16);return`rgba(${I>>16&255}, ${I>>8&255}, ${I&255}, ${A})`},Gi=Xt("--sage-500","#80a097"),$t=Xt("--sand-500","#ddbfa3");function qt(){De||(De=document.createElement("canvas"),De.className="deals-trail",De.setAttribute("aria-hidden","true"),i.appendChild(De))}function Ti(h){let A=De,R=Math.min(devicePixelRatio||1,2);(A.width!==Math.round(innerWidth*R)||A.height!==Math.round(innerHeight*R))&&(A.width=Math.round(innerWidth*R),A.height=Math.round(innerHeight*R));let I=A.getContext("2d");I.setTransform(R,0,0,R,0,0),I.clearRect(0,0,innerWidth,innerHeight),I.lineCap="round",st=st.filter(C=>h-C.end<520*d||!C.done);for(let C of st){let Q=C.pts,V=C.done?Math.max(0,1-(h-C.end)/(520*d)):1;for(let te=1;te<Q.length;te++){let X=(h-Q[te].t)/(420*d);if(X>1)continue;let oe=(1-X)*(1-X)*V;I.strokeStyle=Ft(Gi,(.38*oe).toFixed(3)),I.lineWidth=1+9*oe*Q[te].s,I.beginPath(),I.moveTo(Q[te-1].x,Q[te-1].y),I.lineTo(Q[te].x,Q[te].y),I.stroke()}for(let te of C.drops){let X=(h-te.t)/(700*d);X>1||X<0||(I.fillStyle=Ft($t,(.55*(1-X)*V).toFixed(3)),I.beginPath(),I.arc(te.x,te.y+X*10,te.r*(1-X*.6),0,Math.PI*2),I.fill())}}st.length?yt=requestAnimationFrame(Ti):(yt=0,I.clearRect(0,0,innerWidth,innerHeight))}function Wi(h,A){let R=h?[...h.querySelectorAll(".deals-prod__pack")]:[];if(o||!R.length){A();return}let I=J(),C=!1;R.forEach((Q,V)=>{let te=Q.getBoundingClientRect();if(te.width<2){V===R.length-1&&!C&&(C=!0,A());return}let X=Q.cloneNode(!0);X.className="deals-fly",Object.assign(X.style,{left:`${te.left}px`,top:`${te.top}px`,width:`${te.width}px`,height:`${te.height}px`});let oe=X.querySelector("img");oe&&(oe.loading="eager"),X.querySelectorAll(".deals-gloss").forEach(bt=>bt.remove()),i.appendChild(X);let Ce=V===0,Z=Ce?Object.assign(document.createElement("span"),{className:"deals-fly__drop"}):null;Z&&i.appendChild(Z);let xe=null;Ce&&(qt(),xe={pts:[],drops:[],done:!1,end:0},st.push(xe),yt||(yt=requestAnimationFrame(Ti)));let ze=te.left+te.width/2,Le=te.top+te.height/2,Mt=Math.hypot(I.x-ze,I.y-Le),Xe=hr(620+Mt*.42,760,1150)*d,_e=Math.min(140,40+Mt*.12),Ot=14,Fe=ze,Ue=Math.max(Ot,Le-_e-Math.max(0,Le-I.y)*.35),In=ze+(I.x-ze)*.62,_t=Math.max(Ot,Math.min(I.y,Le)-_e*.55),Pn=22/Math.max(te.width,te.height),tt=performance.now()+V*85*d,Pt=.18;function Kn(bt){if(bt<tt){requestAnimationFrame(Kn);return}let Ct=hr((bt-tt)/Xe,0,1),Ht=ce(Ct),Xi=J(),io=I.real?Xi.x:I.x,hn=I.real?Xi.y:I.y,qi=pe(ze,Fe,In,io,Ht),Ri=pe(Le,Ue,_t,hn,Ht),Yi=1+(Pn-1)*Math.pow(Ht,.8),Gr=Math.sin(Ht*Math.PI)*-7;X.style.transform=`translate(${(qi-ze).toFixed(2)}px, ${(Ri-Le).toFixed(2)}px) scale(${Yi.toFixed(4)}) rotate(${Gr.toFixed(2)}deg)`,X.style.opacity=String(Ct<.82?1:1-(Ct-.82)/.18),Z&&(Z.style.transform=`translate(${(qi-6).toFixed(2)}px, ${(Ri-6).toFixed(2)}px) scale(${(.4+.6*Math.sin(Ht*Math.PI)).toFixed(3)})`,Z.style.opacity=String(Math.sin(Ct*Math.PI)*.9)),xe&&(xe.pts.push({x:qi,y:Ri,t:bt,s:Math.max(.25,Yi)}),xe.pts.length>60&&xe.pts.shift(),Ct>Pt&&Ct<.8&&(xe.drops.push({x:qi+(Math.random()-.5)*10,y:Ri+(Math.random()-.5)*8,r:1.4+Math.random()*1.8,t:bt}),Pt+=.12+Math.random()*.08)),Ct>=.93&&V===R.length-1&&!C&&(C=!0,A()),Ct<1?requestAnimationFrame(Kn):(X.remove(),Z&&Z.remove(),xe&&(xe.done=!0,xe.end=bt))}requestAnimationFrame(Kn)})}function Bt(h,A,R,I){A&&W(A,R);let C=!1;Wi(I,()=>{C||(C=!0,n.add(h.id,1),p.textContent=`${h.name} er lagt i kurven.`)})}m.addEventListener("click",h=>{let A=h.target.closest("[data-add]");if(A){let I=e.byId[A.dataset.add];Bt(I,A,h,A.closest(".deals-card").querySelector("[data-stage]"));return}let R=h.target.closest("[data-qv]");if(R){ys(e.byId[R.dataset.qv],R);return}});let gt=document.createElement("dialog");gt.className="deals-qv",gt.setAttribute("aria-labelledby","deals-qv-title"),i.appendChild(gt);let lt=null,zt=null,Vt=!1,Tt=h=>{let A=h.bundle?(h.contains||[]).map(R=>Pu[R]||.8):[(vc[h.id]||{h:.8}).h];return Math.min(1.05,(h.bundle?.56:.62)/Math.max(...A))};function wt(h){let A=`<ul class="deals-qv__usp">
      <li>${Cn.truck}Fri fragt over ${s(e.campaign.freeShipping)}</li>
      <li>${Cn.back}14 dages fortrydelsesret</li>
      <li>${Cn.shield}Testet til under 0,2% THC</li>
    </ul>`;return`<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${Cn.close}</button>
      <div class="deals-qv__stage${h.bundle?" deals-qv__stage--set":""}" data-stage style="--dl-ufrac:${Tt(h).toFixed(4)}">
        <span class="deals-ground" aria-hidden="true"></span>
        ${E(h)}
        <span class="nc-bubble nc-bubble--sale deals-bubble deals-bubble--qv" aria-hidden="true">\u2212${h.pct}%</span>
        ${h.badge&&h.bundle?`<img class="deals-qv__badge" src="${e.asset(h.badge)}" alt="" width="64" height="64">`:""}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${At(h.bundle?`Sampakke \xB7 ${(h.contains||[]).length} produkter`:h.nickname?`${h.nickname} \xB7 ${Lu[h.id]||"Ansigt"}`:Cu(h))}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${At(h.name)}</h2>
        <p class="deals-card__size">${At(h.bundle?(h.contains||[]).map(R=>Ru[R]||e.byId[R]?.name).join(" \xB7 "):T(h))}</p>
        <p class="deals-qv__claim">${At(h.claim)}</p>
        ${h.notes?`<p class="deals-qv__notes">${At(h.notes)}</p>`:""}
        ${h.bundle?b(h):""}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${h.bundle?D(h):""}${y(h,!0)}${L(h," nc-btn--lg")}</div>
        <a class="deals-qv__more" href="${xc(h)}">Se alt om ${At(h.name)}${Cn.pil}</a>
        ${A}
      </div>
    </div>`}function ys(h,A){h&&(zt=h,lt=A,Vt=!1,gt.innerHTML=wt(h),a("img",gt).forEach(R=>{R.loading="eager"}),gt.showModal(),document.documentElement.classList.add("deals-lock"),o||(r(".deals-qv__sheet",gt).animate([{opacity:0,transform:"translateY(22px) scale(.985)"},{opacity:1,transform:"none"}],{duration:620,easing:c}),a(".deals-prod",gt).forEach((I,C)=>I.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:900,delay:90+C*70,easing:c,fill:"backwards"})),r(".deals-qv__stage",gt).classList.add("is-sweep")),r("[data-qv-close]",gt).focus({preventScroll:!0}))}function _i(h){if(!gt.open||Vt)return;Vt=!0;let A=()=>{gt.close(),Vt=!1,document.documentElement.classList.remove("deals-lock"),lt&&!h&&lt.focus({preventScroll:!0}),h&&h()};if(o)return A();gt.classList.add("is-closing");let R=r(".deals-qv__sheet",gt).animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(14px) scale(.99)"}],{duration:220,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});R.onfinish=()=>{gt.classList.remove("is-closing"),A()}}gt.addEventListener("cancel",h=>{h.preventDefault(),_i()}),gt.addEventListener("click",h=>{if(h.target===gt||h.target.closest("[data-qv-close]"))return _i();let A=h.target.closest("[data-add]");if(A&&zt){let R=zt;W(A,h);let I=m.querySelector(`.deals-item[data-id="${R.id}"]`),C=I&&I.querySelector("[data-add]"),Q=a(".deals-prod__pack",gt).map(V=>[V,V.getBoundingClientRect()]);setTimeout(()=>_i(()=>{let V=document.createElement("div");V.style.cssText="position:fixed;left:0;top:0;width:0;height:0;pointer-events:none",Q.forEach(([te,X])=>{let oe=te.cloneNode(!0);oe.style.cssText=`position:fixed;left:${X.left}px;top:${X.top}px;width:${X.width}px;height:${X.height}px;overflow:hidden`,V.appendChild(oe)}),i.appendChild(V),C&&W(C),Bt(R,null,null,V),setTimeout(()=>V.remove(),40),lt&&lt.focus({preventScroll:!0})}),o?0:380)}})}var Mc={};function kv(i,e){if(Mc[i])return e(Mc[i]);let t=new Image;t.onload=()=>{let n=t.naturalWidth,s=t.naturalHeight;if(!n||!s)return e(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),d;try{c.drawImage(t,0,0,a,o),d=c.getImageData(0,0,a,o).data}catch{return e(null)}let f=(y,L)=>{let T=(L*a+y)*4;return[d[T],d[T+1],d[T+2],d[T+3]]},m=[f(0,0),f(a-1,0),f(0,o-1),f(a-1,o-1),f(a>>1,0),f(a>>1,o-1),f(0,o>>1),f(a-1,o>>1)],p=[0,1,2,3].map(y=>m.map(L=>L[y]).sort((L,T)=>L-T)[4]),x=p[3]<20,v=a,g=-1,u=o,M=-1;for(let y=0;y<o;y++)for(let L=0;L<a;L++){let T=(y*a+L)*4,P=d[T+3];(x?P>40:P>40&&(Math.abs(d[T]-p[0])>26||Math.abs(d[T+1]-p[1])>26||Math.abs(d[T+2]-p[2])>26))&&(L<v&&(v=L),L>g&&(g=L),y<u&&(u=y),y>M&&(M=y))}if(g<0||g-v<2||M-u<2||(g-v+1)/a>.97&&(M-u+1)/o>.97)return e(null);let E={x0:v/a,x1:(g+1)/a,y0:u/o,y1:(M+1)/o,w:n,h:s};Mc[i]=E,e(E)},t.onerror=()=>e(null),t.src=i}function bc(i){let e=i._ncPs;if(!e)return;let t=i.clientWidth,n=i.clientHeight;if(!t||!n)return;let s=Math.min(t/e.w,n/e.h),r=e.w*s,a=e.h*s,o=(t-r)/2,l=(n-a)/2,c=o+e.x0*r,d=o+e.x1*r,f=l+e.y0*a,m=l+e.y1*a,p=d-c,x=m-f,v=(c+d)/2,g=1;x>.78*n?g=.78*n/x:x<.52*n&&(g=Math.min(1.6,.52*n/x)),p*g>.78*t&&(g=.78*t/p);let u=t/2-g*v,M=.86*n-g*m;i.style.transform=`translate(${u.toFixed(2)}px,${M.toFixed(2)}px) scale(${g.toFixed(4)})`,i.classList.add("is-placed")}var Du="ResizeObserver"in window?new ResizeObserver(i=>i.forEach(e=>bc(e.target))):null;function Uu(i){if(i._ncPsInit)return;i._ncPsInit=!0;let e=i.currentSrc||i.src;e&&kv(e,t=>{t&&(i._ncPs=t,bc(i),Du?Du.observe(i):window.addEventListener("resize",()=>bc(i)))})}function Nu(i){i.querySelectorAll("img.nc-packshot").forEach(e=>{e.complete&&e.naturalWidth?Uu(e):e.addEventListener("load",()=>Uu(e),{once:!0})})}function zv(i){i.querySelectorAll("[data-nc-tabs]").forEach(e=>{let t=[...e.querySelectorAll("[data-nc-tab]")],n=[...e.querySelectorAll("[data-nc-panel]")];t.forEach(s=>{s.addEventListener("click",()=>{let r=s.getAttribute("data-nc-tab");t.forEach(a=>{a.classList.toggle("is-active",a===s),a.setAttribute("aria-selected",a===s?"true":"false")}),n.forEach(a=>{a.hidden=a.getAttribute("data-nc-panel")!==r})})})})}function Vv(i){i.querySelectorAll("[data-nc-rail]").forEach(e=>{let t=null,n=0;e.getAttribute("data-nc-rail")!=="nodots"&&(t=document.createElement("div"),t.className="nc-raildots",t.setAttribute("aria-hidden","true"),t.hidden=!0,e.insertAdjacentElement("afterend",t));function s(){let a=e.clientWidth?Math.ceil((e.scrollWidth-2)/e.clientWidth):1;if(a!==n){n=a,t.innerHTML="",t.hidden=a<2;for(let o=0;o<a;o++){let l=document.createElement("button");l.type="button",l.tabIndex=-1,l.addEventListener("click",()=>e.scrollTo({left:o*e.clientWidth,behavior:"smooth"})),t.appendChild(l)}}}function r(){let a=e.scrollWidth-e.clientWidth;if(e.classList.toggle("is-more",e.scrollLeft<a-4),e.classList.toggle("is-before",e.scrollLeft>4),!t||(s(),n<2))return;let o=e.scrollLeft>=a-4?n-1:Math.min(n-1,Math.round(e.scrollLeft/e.clientWidth));[...t.children].forEach((l,c)=>l.classList.toggle("is-active",c===o))}e.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),"ResizeObserver"in window&&new ResizeObserver(r).observe(e),r()})}function Sc(i){zv(i),Vv(i),Nu(i)}var eo=4.7,Hv=615,Fu=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",Gv="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z";function Wv(i){let e=Math.round(i*2)/2,t='<svg class="tp-mc__stars" viewBox="0 0 251 46" aria-hidden="true" focusable="false">';for(let n=0;n<5;n++){let s=n*51,r=e-n;t+=`<rect x="${s}" width="46" height="46" fill="#dcdce6"/>`,r>=1?t+=`<rect x="${s}" width="46" height="46" fill="#00b67a"/>`:r>=.5&&(t+=`<rect x="${s}" width="23" height="46" fill="#00b67a"/>`),t+=`<path transform="translate(${s} 0)" fill="#fff" d="${Gv}"/>`}return t+"</svg>"}function wc(i){let e=i.firstElementChild;if(!e)return;e.style.transform="";let t=Math.min(1,i.clientWidth/e.scrollWidth);t<1&&(e.style.transform=`scale(${t.toFixed(3)})`)}function Xv(i){let e=i.querySelector("a");if(!e||i.dataset.tpHydrated)return;let t=i.getAttribute("data-text-color")||"#2f4b45",n=Hv.toLocaleString("da-DK");e.className="tp-mc",e.style.setProperty("--tp-text",t),e.setAttribute("aria-label",`${Fu(eo)}: ${String(eo).replace(".",",")} ud af 5 p\xE5 Trustpilot, ${n} anmeldelser`),e.innerHTML=`<span class="tp-mc__in"><span class="tp-mc__word">${Fu(eo)}</span>${Wv(eo)}<span class="tp-mc__count"><b>${n}</b> anmeldelser p\xE5</span><span class="tp-mc__logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span></span>`,wc(e),window.addEventListener("resize",()=>wc(e)),document.fonts&&document.fonts.ready.then(()=>wc(e)),i.dataset.tpHydrated="1"}function Ac(i){$a(),i.querySelectorAll(".trustpilot-widget").forEach(Xv)}function Ec(i,e){let t=i.querySelector(".nc-lifestyle__main video");if(!t)return;if(t.muted=!0,e&&e.prefersReducedMotion){t.removeAttribute("autoplay"),t.pause();return}let n=t.play&&t.play();n&&n.catch&&n.catch(()=>{})}var qv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function Bu(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",qv)}function Yv(i){let e=i.querySelector("[data-nc-railscroll]");e&&(i.querySelectorAll("[data-nc-rail-prev]").forEach(t=>t.addEventListener("click",()=>{e.scrollBy({left:-Math.max(320,e.clientWidth*.7),behavior:"smooth"})})),i.querySelectorAll("[data-nc-rail-next]").forEach(t=>t.addEventListener("click",()=>{e.scrollBy({left:Math.max(320,e.clientWidth*.7),behavior:"smooth"})})))}function Qv(i){if(i.dataset.ncRailInit)return;i.dataset.ncRailInit="1";let e=null,t=0;i.getAttribute("data-nc-rail")!=="nodots"&&(e=document.createElement("div"),e.className="nc-raildots",e.setAttribute("aria-hidden","true"),e.hidden=!0,i.insertAdjacentElement("afterend",e));function n(){let r=i.clientWidth?Math.ceil((i.scrollWidth-2)/i.clientWidth):1;if(r!==t){t=r,e.innerHTML="",e.hidden=r<2;for(let a=0;a<r;a++){let o=document.createElement("button");o.type="button",o.tabIndex=-1,o.addEventListener("click",()=>i.scrollTo({left:a*i.clientWidth,behavior:"smooth"})),e.appendChild(o)}}}function s(){let r=i.scrollWidth-i.clientWidth;if(i.classList.toggle("is-more",i.scrollLeft<r-4),i.classList.toggle("is-before",i.scrollLeft>4),!e||(n(),t<2))return;let a=i.scrollLeft>=r-4?t-1:Math.min(t-1,Math.round(i.scrollLeft/i.clientWidth));Array.from(e.children).forEach((o,l)=>o.classList.toggle("is-active",l===a))}i.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),"ResizeObserver"in window&&new ResizeObserver(s).observe(i),s()}function Tc(i){Bu(),i.querySelectorAll("[data-nc-railwrap]").forEach(Yv),i.querySelectorAll("[data-nc-rail]").forEach(Qv)}var Ou="https://dk.trustpilot.com/review/naturecell.dk",ku=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",Zv="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z",Kv=[{stars:5,title:"Bl\xF8d hud hele dagen",text:"Jeg bruger dagcremen hver morgen. Den tr\xE6kker hurtigt ind og efterlader huden bl\xF8d.",name:"Hanne",when:"for 2 dage siden"},{stars:5,title:"Hurtig levering og venlig service",text:"Pakken kom dagen efter, flot pakket, og jeg fik hurtigt svar p\xE5 mit sp\xF8rgsm\xE5l.",name:"Mette",when:"for 4 dage siden"},{stars:5,title:"Fast del af min aftenrutine",text:"Olien har en mild duft, og min hud f\xF8les velplejet om morgenen.",name:"Lars",when:"for 6 dage siden"},{stars:4,title:"Fedter ikke",text:"H\xE5ndcremen giver god fugt uden at fedte. Den st\xE5r nu ved k\xF8kkenvasken.",name:"Susanne",when:"for 1 uge siden"},{stars:5,title:"Rart at handle dansk",text:"Fin kvalitet fra en dansk familievirksomhed, og emballagen er rigtig p\xE6n.",name:"Karin",when:"for 1 uge siden"},{stars:5,title:"Mild mod min sarte hud",text:"Rensegelen er mild, og huden strammer ikke bagefter. Jeg k\xF8ber den igen.",name:"Jonas",when:"for 2 uger siden"}];function zu(i,e="tp-stars"){let t=Math.round(i*2)/2,n=`<svg class="${e}" viewBox="0 0 251 46" aria-hidden="true" focusable="false">`;for(let s=0;s<5;s++){let r=s*51,a=t-s;n+=`<rect x="${r}" width="46" height="46" fill="#dcdce6"/>`,a>=1?n+=`<rect x="${r}" width="46" height="46" fill="#00b67a"/>`:a>=.5&&(n+=`<rect x="${r}" width="23" height="46" fill="#00b67a"/>`),n+=`<path transform="translate(${r} 0)" fill="#fff" d="${Zv}"/>`}return n+"</svg>"}var Jv='<span class="tp-logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span>',Vu=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${i}"/></svg>`,jv='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7 12.5 3.2 3L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',to=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function $v(i){if(i.dataset.tpHydrated)return;let e=615 .toLocaleString("da-DK"),t=String(4.7).replace(".",","),n=Kv.map(f=>`<a class="tp-rv" href="${Ou}" target="_blank" rel="noopener" data-standin><span class="tp-rv__top">${zu(f.stars)}<span class="tp-rv__ver">${jv}Verificeret</span></span><span class="tp-rv__title">${to(f.title)}</span><span class="tp-rv__text">${to(f.text)}</span><span class="tp-rv__who"><b>${to(f.name)}</b>, ${to(f.when)}</span></a>`).join(""),s=document.createElement("div");s.className="tp-cr",s.innerHTML=`<a class="tp-cr__sum" href="${Ou}" target="_blank" rel="noopener" aria-label="${ku(4.7)}: ${t} ud af 5 p\xE5 Trustpilot, baseret p\xE5 ${e} anmeldelser"><span class="tp-cr__word">${ku(4.7)}</span>${zu(4.7)}<span class="tp-cr__based">Baseret p\xE5 <b>${e} anmeldelser</b></span>${Jv}</a><div class="tp-cr__main"><div class="tp-cr__row"><button type="button" class="tp-cr__arrow" data-dir="-1" aria-label="Forrige anmeldelse">${Vu("m15 18-6-6 6-6")}</button><div class="tp-cr__track" role="list" aria-label="Anmeldelser p\xE5 Trustpilot">${n}</div><button type="button" class="tp-cr__arrow" data-dir="1" aria-label="N\xE6ste anmeldelse">${Vu("m9 18 6-6-6-6")}</button></div><p class="tp-cr__foot" data-standin>Mockup: eksempler p\xE5 anmeldelser \u2013 live-siden viser de rigtige fra Trustpilot</p></div>`,s.querySelectorAll(".tp-rv").forEach(f=>f.setAttribute("role","listitem"));let r=i.querySelector(".nc-testi__tp-fallback");r&&(r.style.display="none"),i.appendChild(s);let a=s.querySelector(".tp-cr__track"),[o,l]=s.querySelectorAll(".tp-cr__arrow"),c=()=>{let f=a.querySelector(".tp-rv"),m=parseFloat(getComputedStyle(a).columnGap)||0;return f?f.getBoundingClientRect().width+m:a.clientWidth},d=()=>{let f=a.scrollWidth-a.clientWidth;o.disabled=a.scrollLeft<=2,l.disabled=a.scrollLeft>=f-2};[o,l].forEach(f=>f.addEventListener("click",()=>a.scrollBy({left:c()*+f.dataset.dir}))),a.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),d(),i.dataset.tpHydrated="1"}function _c(i){i.querySelectorAll(".trustpilot-widget").forEach($v)}var ex='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function Hu(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",ex)}function Rc(){Hu()}function Cc(i){let e=i.querySelector("form[data-theme-footer-news]");if(!e)return;let t=e.querySelector('input[type="email"]');e.addEventListener("submit",n=>{n.preventDefault(),e.querySelectorAll("[data-theme-footer-msg]").forEach(a=>a.remove());let s=t.value.trim()!==""&&t.checkValidity(),r=document.createElement("p");r.setAttribute("data-theme-footer-msg",""),r.setAttribute("role",s?"status":"alert"),r.style.marginTop="8px",r.textContent=s?"Tak for din tilmelding.":"Tjek din e-mailadresse og pr\xF8v igen.",e.appendChild(r),s?e.reset():t.focus()})}var Hr="https://naturecell.dk",xs=i=>i.toLocaleString("da-DK",{minimumFractionDigits:2,maximumFractionDigits:2})+" kr",Xu=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Gu='<span class="nc-cbd-i"><svg class="nc-cbd" aria-hidden="true" focusable="false"><use href="#nc-cbd"></use></svg></span>',tx=i=>Xu(i).replace(/CBD-/g,"").replace(/CBD/g,Gu).replace(/\u0001/g,`<span class="nc-cbd-w">${Gu}-</span>`),Wu={"skin-oil":["Hudpleje Olie med 1000mg CBD | 30ml","/products/cbd-olie-1000mg"],"day-cream":["Dagcreme NatureCell | Dagcreme, 50ml","/products/dagcreme"],"night-cream":["Natcreme NatureCell | Natcreme, 50ml","/products/natcreme"],serum:["Hyaluronic Serum med CBD | 30ml","/products/naturecell-cbd-hyaluronic-serum"],"cleansing-gel":["Rensegel med CBD | 100ml","/products/rensegel"],"body-lotion":["Bodylotion med CBD - 200ml","/products/bodylotion"],shampoo:["Shampoo med CBD | 300ml","/products/shampoo-300ml"],"komplet-pakken":["Komplet Pakken","/products/hudpleje-startpakke-plus-1"],"all-day-facial":["All Day Facial","/collections/sampakker"],"lip-balm":["Lip Balm | med CBD 6ml","/products/lip-balm"]},no={"skin-oil":[1.318,.21,-2.04],"day-cream":[.954,-3.42,-2.04],"night-cream":[.952,-3.63,-2.12],serum:[1.134,-3.04,-5.79],"cleansing-gel":[.994,0,-.67],"body-lotion":[1.024,.54,-4.58],shampoo:[.927,-.79,-.62],"komplet-pakken":[.958,-5.87,-.25],"all-day-facial":[.959,-6.67,-.29]},nx=i=>no[i]?` style="transform: scale(${no[i][0]}) translate(${no[i][1]}%, ${no[i][2]}%);"`:"",ix='<svg viewBox="22 16 56 76" width="100%" height="100%" aria-hidden="true" style="display:block"><ellipse cx="50" cy="86.4" rx="9" ry="1.8" fill="rgba(62,93,88,0.13)"/><rect x="43" y="22" width="14" height="20" rx="2.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="42" width="14" height="44.4" rx="1.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="49" width="14" height="30" fill="#80A097"/><path d="M45 41.6h10" stroke="rgba(62,93,88,0.22)" stroke-width=".9"/></svg>',sx='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',rx='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',ax='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18H3V6h12v4"/><path d="M14 9h4l3 3v6h-2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>',ox='<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';function Ic(i,e){let{store:t,byId:n,campaign:s,asset:r}=e,a=i.querySelector("[data-nc-drawer]"),o=document.documentElement,l=null,c=!1;function d(){let v=t.get().cart.map(({id:y,qty:L})=>{let T=n[y],[P,U]=Wu[y]||[T.name,"/collections/cbd-hudpleje"],S=T.save*L;return{key:y,p:T,qty:L,title:P,url:Hr+U,img:T.img?r(T.img):null,original:T.price0*L,final:T.price*L,unitWas:T.price0,allocations:S>0?[{title:s.name,amount:S}]:[]}}),g=v.reduce((y,L)=>y+L.final,0),u=n[s.giftId];if(u&&g>=s.giftThreshold){let[y,L]=Wu[u.id];v.push({key:u.id,p:u,qty:1,title:y,url:Hr+L,img:null,gift:!0,original:s.giftValue,final:0,unitWas:null,allocations:[{title:`Gave ved k\xF8b over ${s.giftThreshold} kr.`,amount:s.giftValue}]})}let M=v.reduce((y,L)=>y+L.final,0),E=v.reduce((y,L)=>y+L.allocations.reduce((T,P)=>T+P.amount,0),0);return{items:v,total:M,totalDiscount:E,count:v.reduce((y,L)=>y+L.qty,0)}}function f(v){let g=v.img?`<img src="${v.img}" alt="" loading="lazy" width="148" height="148"${nx(v.p.id)}>`:v.p.id==="lip-balm"?ix:"",u=v.gift?'<span class="nc-drawer__qty theme-cart-gift-qty" aria-label="Antal 1">1</span>':`<span class="nc-drawer__qty">
                  <button type="button" data-nc-line="${v.key}" data-nc-line-qty="${v.qty-1}" aria-label="F\xE6rre">\u2212</button>
                  <span>${v.qty}</span>
                  <button type="button" data-nc-line="${v.key}" data-nc-line-qty="${v.qty+1}" aria-label="Flere">+</button>
                </span>`;return`<div class="nc-drawer__line">
            <a class="nc-drawer__line-media" href="${v.url}" tabindex="-1" aria-hidden="true">${g}</a>
            <div class="nc-drawer__line-info">
              <a class="nc-drawer__line-title" href="${v.url}">${tx(v.title)}</a>${v.unitWas?`<span class="nc-drawer__line-meta">F\xF8rpris ${xs(v.unitWas)}${v.qty>1?" / stk.":""}</span>`:""}${v.allocations.map(M=>`<span class="nc-drawer__line-discount">${Xu(M.title)} \u2212${xs(M.amount)}</span>`).join("")}
              <div class="nc-drawer__line-row">
                ${u}
                <span class="nc-drawer__line-price">${v.allocations.length?`<s class="nc-drawer__line-was">${xs(v.original)}</s> `:""}${xs(v.final)}</span>
              </div>
            </div>${v.gift?"":`
            <button class="nc-drawer__remove" type="button" data-nc-line="${v.key}" data-nc-line-qty="0" aria-label="Fjern">${sx}</button>`}
          </div>`}function m(){let v=d(),g=s.freeShipping,u=Math.min(100,Math.floor(v.total*100/g)),M=`<div class="nc-drawer__head">
      <h2>Din kurv</h2>
      <button class="nc-drawer__close" type="button" data-nc-cart-close aria-label="Luk kurv">${rx}</button>
    </div>`,E;v.count>0?E=`<div class="nc-drawer__ship">
        <p>${ax}<span>${v.total>=g?"Du har fri fragt":`K\xF8b for ${xs(g-v.total)} mere og f\xE5 fri fragt`}</span></p>
        <div class="nc-drawer__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${u}" aria-label="Fri fragt-status">
          <div class="nc-drawer__fill" style="width: ${u}%;"></div>
        </div>
      </div>
      <div class="nc-drawer__lines">${v.items.map(f).join("")}</div>
      <div class="nc-drawer__foot">${v.totalDiscount>0?`
        <div class="nc-drawer__savings">
          <span>Du sparer i alt</span>
          <span>\u2212${xs(v.totalDiscount)}</span>
        </div>`:""}
        <div class="nc-drawer__totals">
          <span>Subtotal</span>
          <strong>${xs(v.total)}</strong>
        </div>
        <label class="nc-terms nc-drawer__terms" data-nc-terms-scope>
          <input type="checkbox" data-nc-terms${c?" checked":""}>
          <span>Jeg accepterer <a href="${Hr}/policies/terms-of-service" target="_blank" rel="noopener">handelsbetingelserne</a></span>
        </label>
        <a class="nc-drawer__checkout" href="${Hr}/cart/checkout" data-nc-terms-btn aria-disabled="${c?"false":"true"}">G\xE5 til kassen \u2192</a>
        <p class="nc-drawer__note">Moms inkluderet \xB7 fragt beregnes ved kassen</p>
      </div>`:E=`<div class="nc-drawer__empty">
        ${ox}
        <p>Din kurv er tom</p>
        <a href="${Hr}/collections/cbd-hudpleje" data-nc-cart-close>Shop hudpleje</a>
      </div>`;let y=document.activeElement,L=y&&a.contains(y)&&y.matches("[data-nc-line]")?y.getAttribute("data-nc-line")+"|"+y.getAttribute("aria-label"):null;if(a.innerHTML=`<div class="nc-drawer__overlay" data-nc-drawer-overlay></div>
  <div class="nc-drawer__panel">
    ${M}${E}</div>`,L){let[T,P]=L.split("|"),U=a.querySelector(`[data-nc-line="${T}"][aria-label="${P}"]`)||a.querySelector(".nc-drawer__close");U&&U.focus({preventScroll:!0})}}function p(){a.classList.contains("is-open")||(l=document.activeElement),a.classList.add("is-open"),a.removeAttribute("inert"),o.classList.add("nc-lock");let v=!navigator.userActivation||navigator.userActivation.hasBeenActive,g=a.querySelector(".nc-drawer__close");v&&requestAnimationFrame(()=>g&&g.focus({preventScroll:!0}))}function x(){a.classList.contains("is-open")&&(a.classList.remove("is-open"),a.setAttribute("inert",""),o.classList.remove("nc-lock"),l&&l.focus&&l.focus({preventScroll:!0}))}a.addEventListener("click",v=>{let g=v.target;if(g.closest("[data-nc-cart-close]")){v.preventDefault(),x();return}if(g.closest("[data-nc-drawer-overlay]")){x();return}let u=g.closest("[data-nc-line-qty]");if(u){v.preventDefault(),t.setQty(u.getAttribute("data-nc-line"),parseInt(u.getAttribute("data-nc-line-qty"),10));return}let M=g.closest("[data-nc-terms-btn]");if(M&&M.getAttribute("aria-disabled")==="true"){v.preventDefault();let E=a.querySelector("[data-nc-terms]");E&&E.focus();return}M&&v.preventDefault()}),a.addEventListener("change",v=>{if(!v.target.matches("[data-nc-terms]"))return;c=v.target.checked;let g=a.querySelector("[data-nc-terms-btn]");g&&g.setAttribute("aria-disabled",c?"false":"true")}),document.addEventListener("keydown",v=>{if(v.key==="Escape"&&x(),v.key==="Tab"&&a.classList.contains("is-open")){let g=Array.from(a.querySelectorAll('a[href]:not([tabindex="-1"]), button, input')).filter(E=>E.offsetParent!==null);if(!g.length)return;let u=g[0],M=g[g.length-1];v.shiftKey&&document.activeElement===u?(v.preventDefault(),M.focus()):!v.shiftKey&&document.activeElement===M&&(v.preventDefault(),u.focus())}}),t.on(v=>{v==="cart:add"?(m(),p()):v==="cart:change"?m():v==="cart:open"&&(m(),p())}),m(),new URLSearchParams(location.search).get("open")==="1"&&t.count()===0&&(t.add("skin-oil",1),t.add("day-cream",1))}pn("theme-header",co);pn("hero",pc);pn("offers",mc);pn("theme-trust-bar",gc);pn("deals",yc);pn("theme-shop-tabs",Sc);pn("theme-trust",Ac);pn("theme-lifestyle",Ec);pn("theme-cases",Tc);pn("theme-testimonials",_c);pn("theme-story",Rc);pn("theme-footer",Cc);pn("theme-cart",Ic);Bc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
