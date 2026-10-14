(()=>{var un="products/",Pc=(i,e)=>Math.round(i*(1-e/100)),Hu=[{id:"skin-oil",name:"CBD Hudpleje Olie",strength:"1000 mg",size:"30 ml",eyebrow:"CBD Skin Care",price0:499,pct:25,img:un+"skin-oil.webp",hires:un+"skin-oil-hires.webp",hero:!0,badge:"badges/vidunder-olien.svg",nickname:"Vidunder Olien",claim:"Efterlader huden bl\xF8d, velplejet og smuk \u2013 til alle hudtyper.",notes:"CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke."},{id:"day-cream",name:"CBD Dagcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:399,pct:25,img:un+"day-cream.webp",hires:un+"day-cream-hires.webp",claim:"Let dagcreme med CBD, aloe vera og sheasm\xF8r til en glat og velplejet hud."},{id:"night-cream",name:"CBD Natcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:449,pct:25,img:un+"night-cream.webp",hires:un+"night-cream-bottle-hires.webp",claim:"N\xE6rende natcreme med mandelolie og squalane, der underst\xF8tter hudens naturlige fugt."},{id:"serum",name:"CBD Hyaluronic Serum",size:"30 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:un+"hyaluron-serum.webp",hires:un+"hyaluron-serum-hires.webp",claim:"Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk."},{id:"cleansing-gel",name:"CBD Rensegel",size:"100 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:un+"cleansing-gel.webp",hires:un+"cleansing-gel-bottle-hires.webp",claim:"Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance."},{id:"body-lotion",name:"CBD Bodylotion",size:"200 ml",eyebrow:"CBD Skin Care",price0:249,pct:25,img:un+"body-lotion.webp",claim:"Tr\xE6kker hurtigt ind og efterlader kroppen bl\xF8d. Giver intensiv fugtighed til t\xF8r hud."},{id:"shampoo",name:"CBD Shampoo",strength:"750 mg",size:"300 ml",eyebrow:"CBD Hair Care",price0:199,pct:25,img:un+"shampoo.webp",claim:"Mild shampoo uden un\xF8dvendige ingredienser \u2013 til hele familien."},{id:"komplet-pakken",name:"Komplet Pakken",size:"Rens \xB7 Dag \xB7 Nat \xB7 Olie",eyebrow:"Sampakke",price0:1198,valueLoose:1646,pct:25,img:un+"startpakke-plus.webp",bundle:!0,badge:"badges/komplet-pakken.svg",contains:["cleansing-gel","day-cream","night-cream","skin-oil"],claim:"Hele rutinen, morgen og aften \u2013 fire produkter i \xE9n pakke."},{id:"all-day-facial",name:"All Day Facial",size:"Rens \xB7 Dag \xB7 Nat",eyebrow:"Sampakke",price0:860,valueLoose:1147,pct:25,img:un+"all-day-facial.webp",bundle:!0,badge:"badges/all-day-facial.svg",contains:["cleansing-gel","day-cream","night-cream"],claim:"Den daglige ansigtsrutine samlet \u2013 rens, dag og nat."},{id:"lip-balm",name:"CBD Lip Balm",size:"",eyebrow:"Gave",price0:79,pct:0,img:null,gift:!0,claim:"Gratis ved k\xF8b over 699 kr."}],no=Hu.map(i=>({...i,price:Pc(i.price0,i.pct),save:i.price0-Pc(i.price0,i.pct)})),zr={name:"Black Week",startsAt:"2026-11-23T00:00:00+01:00",endsAt:"2026-11-30T23:59:59+01:00",headlinePct:25,giftThreshold:699,giftId:"lip-balm",giftValue:79,freeShipping:399,code:null};var Vr=[];function dn(i,e){Vr.push([i,e])}var Gu=Date.parse("2026-11-27T10:00:00+01:00"),Wu=performance.now(),Xu={now:()=>Gu+(performance.now()-Wu),end:Date.parse(zr.endsAt),start:Date.parse(zr.startsAt)},io=new Set,mi={cart:[]},qu={get:()=>mi,on:i=>(io.add(i),()=>io.delete(i)),emit:(i,e)=>io.forEach(t=>t(i,e,mi)),add(i,e=1){let t=mi.cart.find(n=>n.id===i);t?t.qty+=e:mi.cart.push({id:i,qty:e}),this.emit("cart:add",{id:i,qty:e})},setQty(i,e){let t=mi.cart.find(n=>n.id===i);t&&(t.qty=Math.max(0,e),t.qty||mi.cart.splice(mi.cart.indexOf(t),1),this.emit("cart:change",{id:i}))},count:()=>mi.cart.reduce((i,e)=>i+e.qty,0),subtotal:()=>mi.cart.reduce((i,e)=>i+e.qty*Dc[e.id].price,0),openCart(){this.emit("cart:open")}},Dc=Object.fromEntries(no.map(i=>[i.id,i])),Yu={kr:i=>`${Math.round(i).toLocaleString("da-DK")} kr.`,pct:i=>`${Math.round(i)}%`},Lc=document.currentScript&&document.currentScript.src,Qu=window.NC_ASSET_BASE||(Lc?new URL("../assets/",Lc).href:"../assets/"),Zu=i=>Qu+i;function Uc(){let i={store:qu,clock:Xu,fmt:Yu,products:no,byId:Dc,campaign:zr,asset:Zu,prefersReducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,isMobile:()=>matchMedia("(max-width: 760px)").matches},e=()=>{let n=0;for(let[r,a]of Vr){let o=document.querySelector(`[data-section="${r}"]`);if(o&&(n++,!o.dataset.ncInit)){o.dataset.ncInit="1";try{a(o,i)}catch(l){console.error(`[section ${r}]`,l)}}}let s=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-in"),s.unobserve(a.target))}),{rootMargin:"0px 0px -8% 0px"});return document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(r=>s.observe(r)),n},t=()=>{if(e()>=Vr.length)return;let n=new MutationObserver(()=>{e()>=Vr.length&&n.disconnect()});n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>n.disconnect(),2e4)};window.NCBW={ctx:i,run:e},window.NC_DEFER_BOOT||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t())}var gs={};try{gs=JSON.parse(sessionStorage.getItem("nc_ps")||"{}")||{}}catch{gs={}}var Ku=()=>{try{sessionStorage.setItem("nc_ps",JSON.stringify(gs))}catch{}};function Ju(i,e){if(gs[i])return e(gs[i]);let t=new Image;t.onload=()=>{let n=t.naturalWidth,s=t.naturalHeight;if(!n||!s)return e(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),u;try{c.drawImage(t,0,0,a,o),u=c.getImageData(0,0,a,o).data}catch{return e(null)}let d=(x,I)=>{let E=(I*a+x)*4;return[u[E],u[E+1],u[E+2],u[E+3]]},p=[d(0,0),d(a-1,0),d(0,o-1),d(a-1,o-1),d(a>>1,0),d(a>>1,o-1),d(0,o>>1),d(a-1,o>>1)],f=[0,1,2,3].map(x=>p.map(I=>I[x]).sort((I,E)=>I-E)[4]),v=f[3]<20,g=a,m=-1,h=o,b=-1;for(let x=0;x<o;x++)for(let I=0;I<a;I++){let E=(x*a+I)*4,R=u[E+3];(v?R>40:R>40&&(Math.abs(u[E]-f[0])>26||Math.abs(u[E+1]-f[1])>26||Math.abs(u[E+2]-f[2])>26))&&(I<g&&(g=I),I>m&&(m=I),x<h&&(h=x),x>b&&(b=x))}if(m<0||m-g<2||b-h<2||(m-g+1)/a>.97&&(b-h+1)/o>.97)return e(null);let A={x0:g/a,x1:(m+1)/a,y0:h/o,y1:(b+1)/o,w:n,h:s};gs[i]=A,Ku(),e(A)},t.onerror=()=>e(null),t.src=i}function Nc(i){let e=i._ncPs;if(!e)return;let t=i.clientWidth,n=i.clientHeight;if(!t||!n)return;let s=Math.min(t/e.w,n/e.h),r=e.w*s,a=e.h*s,o=(t-r)/2,l=(n-a)/2,c=o+e.x0*r,u=o+e.x1*r,d=l+e.y0*a,p=l+e.y1*a,f=u-c,v=p-d,g=(c+u)/2,m=1;v>.78*n?m=.78*n/v:v<.52*n&&(m=Math.min(1.6,.52*n/v)),f*m>.78*t&&(m=.78*t/f);let h=t/2-m*g,b=.86*n-m*p;i.style.transform=`translate(${h.toFixed(2)}px,${b.toFixed(2)}px) scale(${m.toFixed(4)})`,i.classList.add("is-placed")}function Fc(i){if(!document.createElement("canvas").getContext)return;let e="ResizeObserver"in window?new ResizeObserver(n=>n.forEach(s=>Nc(s.target))):null,t=n=>{if(n._ncPsInit)return;n._ncPsInit=!0;let s=n.currentSrc||n.src;s&&Ju(s,r=>{r&&(n._ncPs=r,Nc(n),e&&e.observe(n))})};i.querySelectorAll("img.nc-packshot").forEach(n=>{n.complete&&n.naturalWidth?t(n):n.addEventListener("load",()=>t(n),{once:!0})})}function so(i,e){let t=(h,b=i)=>b.querySelector(h),n=(h,b=i)=>Array.from(b.querySelectorAll(h)),s=t("[data-nc-header]"),r=t("[data-nc-mega]"),a=n("[data-nc-mega-toggle]"),o=t("[data-nc-mobilenav]"),l=t("[data-nc-burger]"),c=document.documentElement,u=h=>{r.classList.toggle("is-open",h),a.forEach(b=>b.setAttribute("aria-expanded",h?"true":"false"))};a.forEach(h=>h.addEventListener("click",b=>{b.preventDefault(),u(!r.classList.contains("is-open"))})),document.addEventListener("click",h=>{r.classList.contains("is-open")&&!s.contains(h.target)&&u(!1)}),n("[data-nc-tabs]").forEach(h=>{let b=n("[data-nc-tab]",h),A=n("[data-nc-panel]",h);b.forEach(x=>x.addEventListener("click",()=>{let I=x.getAttribute("data-nc-tab");b.forEach(E=>{E.classList.toggle("is-active",E===x),E.setAttribute("aria-selected",E===x?"true":"false")}),A.forEach(E=>{E.hidden=E.getAttribute("data-nc-panel")!==I})}))});let d=h=>{if(o.classList.toggle("is-open",h),o.setAttribute("aria-hidden",h?"false":"true"),l.setAttribute("aria-expanded",h?"true":"false"),c.classList.toggle("nc-lock",h),h){let b=t(".nc-mobilenav__head [data-nc-close]");b&&b.focus({preventScroll:!0})}};l.addEventListener("click",()=>d(!o.classList.contains("is-open"))),n("[data-nc-close]",o).forEach(h=>h.addEventListener("click",()=>{d(!1),l.focus({preventScroll:!0})})),document.addEventListener("keydown",h=>{h.key==="Escape"&&(r.classList.contains("is-open")&&u(!1),o.classList.contains("is-open")&&(d(!1),l.focus({preventScroll:!0})))});let p=n("[data-nc-cart-count]"),f=()=>{let h=e.store.count();p.forEach(b=>{b.textContent=h,b.classList.toggle("is-empty",h===0)})};e.store.on(h=>{(h==="cart:add"||h==="cart:change")&&f()}),f(),n("[data-nc-cart-open]").forEach(h=>h.addEventListener("click",b=>{b.preventDefault(),e.store.openCart()}));let v=n("[data-nc-fav-count]"),g=()=>{let h=[];try{h=JSON.parse(localStorage.getItem("nc_favs")||"[]")||[]}catch{h=[]}v.forEach(b=>{b.textContent=h.length,b.classList.toggle("is-empty",h.length===0)})};window.addEventListener("nc-favs-changed",g),g();let m=t(".nc-skip-link");m&&!document.getElementById("nc-main")&&m.addEventListener("click",h=>{let b=i.nextElementSibling;b&&(h.preventDefault(),b.hasAttribute("tabindex")||b.setAttribute("tabindex","-1"),b.focus())}),Fc(i)}function Bc(i,e){let t=!1;return new IntersectionObserver(([s])=>{t=s.isIntersecting,e&&e(t)},{rootMargin:"120px"}).observe(i),()=>t}var Oc=()=>Math.min(window.devicePixelRatio||1,2);var ju=0,kc=1,$u=2;var Yh=1,ed=2,bi=3,ki=0,jt=1,Wn=2,oi=0,Oi=1,zi=2,zc=3,Vc=4,Zs=5,ii=100,td=101,nd=102,id=103,sd=104,Na=200,Fa=201,Ba=202,rd=203,No=204,Bs=205,ad=206,od=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,Fo=0,Bo=1,Oo=2,Os=3,ko=4,zo=5,Vo=6,Ho=7,Qh=0,md=1,gd=2,li=0,vd=1,xd=2,yd=3,Md=4,bd=5,Sd=6,wd=7;var Zh=300,ks=301,zs=302,Go=303,Wo=304,Oa=306,Sr=1e3,ss=1001,Xo=1002,Tn=1003,Ad=1004;var Hr=1005;var si=1006,ro=1007;var rs=1008;var Ei=1009,Kh=1010,Jh=1011,wr=1012,Jl=1013,as=1014,ri=1015,Rn=1016,jl=1017,$l=1018,Vs=1020,jh=35902,$h=1021,eu=1022,qn=1023,tu=1024,nu=1025,Us=1026,Hs=1027,ec=1028,tc=1029,iu=1030,nc=1031;var ic=1033,ua=33776,da=33777,fa=33778,pa=33779,qo=35840,Yo=35841,Qo=35842,Zo=35843,Ko=36196,Jo=37492,jo=37496,$o=37808,el=37809,tl=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,ma=36492,fl=36494,pl=36495,su=36283,ml=36284,gl=36285,vl=36286;var ga=2300,xl=2301,ao=2302,Hc=2400,Gc=2401,Wc=2402;var Ed=3200,Td=3201;var ru=0,_d=1,Xn="",fn="srgb",Ks="srgb-linear",ka="linear",Mt="srgb";var vs=7680;var Xc=519,Rd=512,Cd=513,Id=514,au=515,Pd=516,Ld=517,Dd=518,Ud=519,qc=35044;var Yc="300 es",wi=2e3,va=2001,Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=1234567,yr=Math.PI/180,Ar=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function sc(i,e){return(i%e+e)%e}function Nd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fd(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function Bd(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function Od(i,e=1){return e-Math.abs(sc(i,e*2)-e)}function kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hd(i,e){return i+Math.random()*(e-i)}function Gd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(Qc=i);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xd(i){return i*yr}function qd(i){return i*Ar}function Yd(i){return(i&i-1)===0&&i!==0}function Qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),p=a((e-n)/2),f=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lr={DEG2RAD:yr,RAD2DEG:Ar,generateUUID:Js,clamp:Ot,euclideanModulo:sc,mapLinear:Nd,inverseLerp:Fd,lerp:Mr,damp:Bd,pingpong:Od,smoothstep:kd,smootherstep:zd,randInt:Vd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:Qd,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:Kd,normalize:sn,denormalize:Ls},Ee=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],f=n[5],v=n[8],g=s[0],m=s[3],h=s[6],b=s[1],A=s[4],x=s[7],I=s[2],E=s[5],R=s[8];return r[0]=a*g+o*b+l*I,r[3]=a*m+o*A+l*E,r[6]=a*h+o*x+l*R,r[1]=c*g+u*b+d*I,r[4]=c*m+u*A+d*E,r[7]=c*h+u*x+d*R,r[2]=p*g+f*b+v*I,r[5]=p*m+f*A+v*E,r[8]=p*h+f*x+v*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*r,f=c*r-a*l,v=t*d+n*p+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return e[0]=d*g,e[1]=(s*c-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=p*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oo=new tt;function ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){let i=xa("canvas");return i.style.display="block",i}var Zc={};function vr(i){i in Zc||(Zc[i]=!0,console.warn(i))}function jd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $d(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ef(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=Ns(i.r),i.g=Ns(i.g),i.b=Ns(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kc=[.64,.33,.3,.6,.15,.06],Jc=[.2126,.7152,.0722],jc=[.3127,.329],$c=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[Ks]:{primaries:Kc,whitePoint:jc,transfer:ka,toXYZ:$c,fromXYZ:eh,luminanceCoefficients:Jc,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:Kc,whitePoint:jc,transfer:Mt,toXYZ:$c,fromXYZ:eh,luminanceCoefficients:Jc,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}});var xs,yl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=xa("canvas")),xs.width=e.width,xs.height=e.height;let n=xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tf=0,ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nf=0,pn=class i extends Vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ss,s=ss,r=si,a=rs,o=qn,l=Ei,c=i.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Js(),this.name="",this.source=new ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Zh;pn.DEFAULT_ANISOTROPY=1;var Pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],f=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,x=(f+1)/2,I=(h+1)/2,E=(u+p)/4,R=(d+g)/4,C=(v+m)/4;return A>x&&A>I?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=R/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=C/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(d-g)/b,this.z=(p-u)/b,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ml=class extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ma=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==p||c!==f||u!==v){let m=1-o,h=l*p+c*f+u*v+d*g,b=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){let I=Math.sqrt(A),E=Math.atan2(I,h*b);m=Math.sin(m*E)/I,o=Math.sin(o*E)/I}let x=o*b;if(l=l*m+p*x,c=c*m+f*x,u=u*m+v*x,d=d*m+g*x,m===1-o){let I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*f-c*p,e[t+1]=l*v+u*p+c*d-o*f,e[t+2]=c*v+u*f+o*p-l*d,e[t+3]=u*v-o*d-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d-p*f*v;break;case"YXZ":this._x=p*u*d+c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d+p*f*v;break;case"ZXY":this._x=p*u*d-c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d-p*f*v;break;case"ZYX":this._x=p*u*d-c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d+p*f*v;break;case"YZX":this._x=p*u*d+c*f*v,this._y=c*f*d+p*u*v,this._z=c*u*v-p*f*d,this._w=c*u*d-p*f*v;break;case"XZY":this._x=p*u*d-c*f*v,this._y=c*f*d-p*u*v,this._z=c*u*v+p*f*d,this._w=c*u*d+p*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},co=new F,th=new Hi,Ti=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Wr.subVectors(this.max,ur),ys.subVectors(e.a,ur),Ms.subVectors(e.b,ur),bs.subVectors(e.c,ur),Li.subVectors(Ms,ys),Di.subVectors(bs,Ms),Zi.subVectors(ys,bs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Zi.z,Zi.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Zi.z,0,-Zi.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Zi.y,Zi.x,0];return!ho(t,ys,Ms,bs,Wr)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,ys,Ms,bs,Wr))?!1:(Xr.crossVectors(Li,Di),t=[Xr.x,Xr.y,Xr.z],ho(t,ys,Ms,bs,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new F,new F,new F,new F,new F,new F,new F,new F],Vn=new F,Gr=new Ti,ys=new F,Ms=new F,bs=new F,Li=new F,Di=new F,Zi=new F,ur=new F,Wr=new F,Xr=new F,Ki=new F;function ho(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var sf=new Ti,dr=new F,uo=new F,os=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(uo)),this.expandByPoint(dr.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new F,fo=new F,qr=new F,Ui=new F,po=new F,Yr=new F,mo=new F,ba=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(fo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Ui.dot(this.direction),l=-Ui.dot(qr),c=Ui.lengthSq(),u=Math.abs(1-a*a),d,p,f,v;if(u>0)if(d=a*l-o,p=a*o-l,v=r*u,d>=0)if(p>=-v)if(p<=v){let g=1/u;d*=g,p*=g,f=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;else p<=-v?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=v?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fo).addScaledVector(qr,p),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){po.subVectors(t,e),Yr.subVectors(n,e),mo.crossVectors(po,Yr);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);let l=o*this.direction.dot(Yr.crossVectors(Ui,Yr));if(l<0)return null;let c=o*this.direction.dot(po.cross(Ui));if(c<0||l+c>a)return null;let u=-o*Ui.dot(mo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class i{constructor(e,t,n,s,r,a,o,l,c,u,d,p,f,v,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,p,f,v,g,m)}set(e,t,n,s,r,a,o,l,c,u,d,p,f,v,g,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*d,v=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+v*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,f=l*d,v=c*u,g=c*d;t[0]=p+g*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,f=l*d,v=c*u,g=c*d;t[0]=p-g*o,t[4]=-a*d,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,f=a*d,v=o*u,g=o*d;t[0]=l*u,t[4]=v*c-f,t[8]=p*c+g,t[1]=l*d,t[5]=g*c+p,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-p*d,t[8]=v*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+v,t[10]=p-g*d}else if(e.order==="XZY"){let p=a*l,f=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+g,t[5]=a*u,t[9]=f*d-v,t[2]=v*d-f,t[6]=o*u,t[10]=g*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,af)}lookAt(e,t,n){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Ni.crossVectors(n,An),Ni.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ni.crossVectors(n,An)),Ni.normalize(),Qr.crossVectors(An,Ni),s[0]=Ni.x,s[4]=Qr.x,s[8]=An.x,s[1]=Ni.y,s[5]=Qr.y,s[9]=An.y,s[2]=Ni.z,s[6]=Qr.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],f=n[13],v=n[2],g=n[6],m=n[10],h=n[14],b=n[3],A=n[7],x=n[11],I=n[15],E=s[0],R=s[4],C=s[8],w=s[12],S=s[1],P=s[5],X=s[9],k=s[13],z=s[2],q=s[6],G=s[10],J=s[14],W=s[3],ce=s[7],Se=s[11],Le=s[15];return r[0]=a*E+o*S+l*z+c*W,r[4]=a*R+o*P+l*q+c*ce,r[8]=a*C+o*X+l*G+c*Se,r[12]=a*w+o*k+l*J+c*Le,r[1]=u*E+d*S+p*z+f*W,r[5]=u*R+d*P+p*q+f*ce,r[9]=u*C+d*X+p*G+f*Se,r[13]=u*w+d*k+p*J+f*Le,r[2]=v*E+g*S+m*z+h*W,r[6]=v*R+g*P+m*q+h*ce,r[10]=v*C+g*X+m*G+h*Se,r[14]=v*w+g*k+m*J+h*Le,r[3]=b*E+A*S+x*z+I*W,r[7]=b*R+A*P+x*q+I*ce,r[11]=b*C+A*X+x*G+I*Se,r[15]=b*w+A*k+x*J+I*Le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],f=e[14],v=e[3],g=e[7],m=e[11],h=e[15];return v*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*f-n*l*f)+g*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*p+s*a*d-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],f=e[11],v=e[12],g=e[13],m=e[14],h=e[15],b=d*m*c-g*p*c+g*l*f-o*m*f-d*l*h+o*p*h,A=v*p*c-u*m*c-v*l*f+a*m*f+u*l*h-a*p*h,x=u*g*c-v*d*c+v*o*f-a*g*f-u*o*h+a*d*h,I=v*d*l-u*g*l-v*o*p+a*g*p+u*o*m-a*d*m,E=t*b+n*A+s*x+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=b*R,e[1]=(g*p*r-d*m*r-g*s*f+n*m*f+d*s*h-n*p*h)*R,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*h+n*l*h)*R,e[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*f-n*l*f)*R,e[4]=A*R,e[5]=(u*m*r-v*p*r+v*s*f-t*m*f-u*s*h+t*p*h)*R,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*h-t*l*h)*R,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*f+t*l*f)*R,e[8]=x*R,e[9]=(v*d*r-u*g*r-v*n*f+t*g*f+u*n*h-t*d*h)*R,e[10]=(a*g*r-v*o*r+v*n*c-t*g*c-a*n*h+t*o*h)*R,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*R,e[12]=I*R,e[13]=(u*g*s-v*d*s+v*n*p-t*g*p-u*n*m+t*d*m)*R,e[14]=(v*o*s-a*g*s-v*n*l+t*g*l+a*n*m-t*o*m)*R,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*p+t*o*p)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,p=r*c,f=r*u,v=r*d,g=a*u,m=a*d,h=o*d,b=l*c,A=l*u,x=l*d,I=n.x,E=n.y,R=n.z;return s[0]=(1-(g+h))*I,s[1]=(f+x)*I,s[2]=(v-A)*I,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(p+h))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(v+A)*R,s[9]=(m-b)*R,s[10]=(1-(p+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ss.set(s[0],s[1],s[2]).length(),a=Ss.set(s[4],s[5],s[6]).length(),o=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let c=1/r,u=1/a,d=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=wi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),f,v;if(o===wi)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===va)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wi){let l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),p=(t+e)*c,f=(n+s)*u,v,g;if(o===wi)v=(a+r)*d,g=-2*d;else if(o===va)v=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ss=new F,Hn=new bt,rf=new F(0,0,0),af=new F(1,1,1),Ni=new F,Qr=new F,An=new F,nh=new bt,ih=new Hi,ci=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},of=0,sh=new F,ws=new Hi,xi=new bt,Zr=new F,fr=new F,lf=new F,cf=new Hi,rh=new F(1,0,0),ah=new F(0,1,0),oh=new F(0,0,1),lh={type:"added"},hf={type:"removed"},As={type:"childadded",child:null},go={type:"childremoved",child:null},mn=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ci,n=new Hi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new tt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(fr,Zr,this.up):xi.lookAt(Zr,fr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(xi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),go.child=e,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mn.DEFAULT_UP=new F(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new F,yi=new F,vo=new F,Mi=new F,Es=new F,Ts=new F,ch=new F,xo=new F,yo=new F,Mo=new F,bo=new Pt,So=new Pt,wo=new Pt,ns=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),yi.subVectors(n,t),vo.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(yi),l=Gn.dot(vo),c=yi.dot(yi),u=yi.dot(vo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(c*l-o*u)*p,v=(a*u-o*l)*p;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return bo.setScalar(0),So.setScalar(0),wo.setScalar(0),bo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,n),wo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),yi.subVectors(e,t),Gn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Es.subVectors(s,n),Ts.subVectors(r,n),xo.subVectors(e,n);let l=Es.dot(xo),c=Ts.dot(xo);if(l<=0&&c<=0)return t.copy(n);yo.subVectors(e,s);let u=Es.dot(yo),d=Ts.dot(yo);if(u>=0&&d<=u)return t.copy(s);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Es,a);Mo.subVectors(e,r);let f=Es.dot(Mo),v=Ts.dot(Mo);if(v>=0&&f<=v)return t.copy(r);let g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ts,o);let m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return ch.subVectors(r,s),o=(d-u)/(d-u+(f-v)),t.copy(s).addScaledVector(ch,o);let h=1/(m+g+p);return a=g*h,o=p*h,t.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Ao(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=sc(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ao(a,r,e+1/3),this.g=Ao(a,r,e),this.b=Ao(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ht.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Ot(Jt.r*255,0,255))*65536+Math.round(Ot(Jt.g*255,0,255))*256+Math.round(Ot(Jt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=fn){ht.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Kr);let n=Mr(Fi.h,Kr.h,t),s=Mr(Fi.s,Kr.s,t),r=Mr(Fi.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ze;Ze.NAMES=lu;var uf=0,ls=class extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Js(),this.name="",this.blending=Oi,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Bs,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Bs&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yn=class extends ls{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new F,Jr=new Ee,_n=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}};var Sa=class extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wa=class extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}},df=0,Ln=new bt,Eo=new mn,_s=new F,En=new Ti,pr=new Ti,Gt=new F,$t=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?wa:Sa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Eo.lookAt(e),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(En.min,pr.min),En.expandByPoint(Gt),Gt.addVectors(En.max,pr.max),En.expandByPoint(Gt)):(En.expandByPoint(pr.min),En.expandByPoint(pr.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Gt.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),Gt.add(_s)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;let c=new F,u=new F,d=new F,p=new Ee,f=new Ee,v=new Ee,g=new F,m=new F;function h(C,w,S){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),p.fromBufferAttribute(r,C),f.fromBufferAttribute(r,w),v.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(p),v.sub(p);let P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(P),o[C].add(g),o[w].add(g),o[S].add(g),l[C].add(m),l[w].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,w=b.length;C<w;++C){let S=b[C],P=S.start,X=S.count;for(let k=P,z=P+X;k<z;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let A=new F,x=new F,I=new F,E=new F;function R(C){I.fromBufferAttribute(s,C),E.copy(I);let w=o[C];A.copy(w),A.sub(I.multiplyScalar(I.dot(w))).normalize(),x.crossVectors(E,w);let P=x.dot(l[C])<0?-1:1;a.setXYZW(C,A.x,A.y,A.z,P)}for(let C=0,w=b.length;C<w;++C){let S=b[C],P=S.start,X=S.count;for(let k=P,z=P+X;k<z;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let p=0,f=e.count;p<f;p+=3){let v=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u),f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let h=0;h<u;h++)p[v++]=c[f++]}return new _n(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let p=c[u],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new bt,Ji=new ba,jr=new os,uh=new F,$r=new F,ea=new F,ta=new F,To=new F,na=new F,dh=new F,ia=new F,at=class extends mn{constructor(e=new $t,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(To.fromBufferAttribute(d,e),a?na.addScaledVector(To,u):na.addScaledVector(To.sub(t),u))}t.add(na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(jr.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(jr,uh)===null||Ji.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(hh.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){let m=p[v],h=a[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,I=A;x<I;x+=3){let E=o.getX(x),R=o.getX(x+1),C=o.getX(x+2);s=sa(this,h,e,n,c,u,d,E,R,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,h=g;m<h;m+=3){let b=o.getX(m),A=o.getX(m+1),x=o.getX(m+2);s=sa(this,a,e,n,c,u,d,b,A,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=p.length;v<g;v++){let m=p[v],h=a[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,I=A;x<I;x+=3){let E=x,R=x+1,C=x+2;s=sa(this,h,e,n,c,u,d,E,R,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,h=g;m<h;m+=3){let b=m,A=m+1,x=m+2;s=sa(this,a,e,n,c,u,d,b,A,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ff(i,e,t,n,s,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ki,o),l===null)return null;ia.copy(o),ia.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,$r),i.getVertexPosition(l,ea),i.getVertexPosition(c,ta);let u=ff(i,e,t,n,$r,ea,ta,dh);if(u){let d=new F;ns.getBarycoord(dh,$r,ea,ta,d),s&&(u.uv=ns.getInterpolatedAttribute(s,o,l,c,d,new Ee)),r&&(u.uv1=ns.getInterpolatedAttribute(r,o,l,c,d,new Ee)),a&&(u.normal=ns.getInterpolatedAttribute(a,o,l,c,d,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new F,materialIndex:0};ns.getNormal($r,ea,ta,p.normal),u.face=p,u.barycoord=d}return u}var cs=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],p=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function v(g,m,h,b,A,x,I,E,R,C,w){let S=x/R,P=I/C,X=x/2,k=I/2,z=E/2,q=R+1,G=C+1,J=0,W=0,ce=new F;for(let Se=0;Se<G;Se++){let Le=Se*P-k;for(let Qe=0;Qe<q;Qe++){let ct=Qe*S-X;ce[g]=ct*b,ce[m]=Le*A,ce[h]=z,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[h]=E>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(Qe/R),d.push(1-Se/C),J+=1}}for(let Se=0;Se<C;Se++)for(let Le=0;Le<R;Le++){let Qe=p+Le+q*Se,ct=p+Le+q*(Se+1),Q=p+(Le+1)+q*(Se+1),ae=p+(Le+1)+q*Se;l.push(Qe,ct,ae),l.push(ct,Q,ae),W+=6}o.addGroup(f,W,w),f+=W,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=Gs(i[t]);for(let s in n)e[s]=n[s]}return e}function pf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var js={clone:Gs,merge:rn},mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends ls{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Aa=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new F,fh=new Ee,ph=new Ee,an=class extends Aa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,fh,ph),t.subVectors(ph,fh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,Cs=1,Sl=class extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new an(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let a=new an(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let o=new an(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let l=new an(Rs,Cs,e,t);l.layers=this.layers,this.add(l);let c=new an(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Ea=class extends pn{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wl=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ea(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cs(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:oi});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=si),new Sl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_o=new F,vf=new F,xf=new tt,Si=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_o.subVectors(n,t).cross(vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xf.getNormalMatrix(e),s=this.coplanarPoint(_o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new os,ra=new F,Tr=class{constructor(e=new Si,t=new Si,n=new Si,s=new Si,r=new Si,a=new Si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],f=s[8],v=s[9],g=s[10],m=s[11],h=s[12],b=s[13],A=s[14],x=s[15];if(n[0].setComponents(l-r,p-c,m-f,x-h).normalize(),n[1].setComponents(l+r,p+c,m+f,x+h).normalize(),n[2].setComponents(l+a,p+u,m+v,x+b).normalize(),n[3].setComponents(l-a,p-u,m-v,x-b).normalize(),n[4].setComponents(l-o,p-d,m-g,x-A).normalize(),t===wi)n[5].setComponents(l+o,p+d,m+g,x+A).normalize();else if(t===va)n[5].setComponents(o,d,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yf(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let p=0;for(let f=1;f<d.length;f++){let v=d[p],g=d[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++p,d[p]=g)}d.length=p+1;for(let f=0,v=d.length;f<v;f++){let g=d[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _i=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,p=t/l,f=[],v=[],g=[],m=[];for(let h=0;h<u;h++){let b=h*p-a;for(let A=0;A<c;A++){let x=A*d-r;v.push(x,-b,0),g.push(0,0,1),m.push(A/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){let A=b+c*h,x=b+c*(h+1),I=b+1+c*(h+1),E=b+1+c*h;f.push(A,x,E),f.push(x,I,E)}this.setIndex(f),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
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
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Fm=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Mf,alphahash_pars_fragment:bf,alphamap_fragment:Sf,alphamap_pars_fragment:wf,alphatest_fragment:Af,alphatest_pars_fragment:Ef,aomap_fragment:Tf,aomap_pars_fragment:_f,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:If,beginnormal_vertex:Pf,bsdfs:Lf,iridescence_fragment:Df,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:Of,color_fragment:kf,color_pars_fragment:zf,color_pars_vertex:Vf,color_vertex:Hf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:Qf,emissivemap_pars_fragment:Zf,colorspace_fragment:Kf,colorspace_pars_fragment:Jf,envmap_fragment:jf,envmap_common_pars_fragment:$f,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:bp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:_p,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Lp,morphcolor_vertex:Dp,morphnormal_vertex:Up,morphtarget_pars_vertex:Np,morphtarget_vertex:Fp,normal_fragment_begin:Bp,normal_fragment_maps:Op,normal_pars_fragment:kp,normal_pars_vertex:zp,normal_vertex:Vp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:Qp,premultiplied_alpha_fragment:Zp,project_vertex:Kp,dithering_fragment:Jp,dithering_pars_fragment:jp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:vm,worldpos_vertex:xm,background_vert:ym,background_frag:Mm,backgroundCube_vert:bm,backgroundCube_frag:Sm,cube_vert:wm,cube_frag:Am,depth_vert:Em,depth_frag:Tm,distanceRGBA_vert:_m,distanceRGBA_frag:Rm,equirect_vert:Cm,equirect_frag:Im,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Fm,meshmatcap_vert:Bm,meshmatcap_frag:Om,meshnormal_vert:km,meshnormal_frag:zm,meshphong_vert:Vm,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:Qm,shadow_vert:Zm,shadow_frag:Km,sprite_vert:Jm,sprite_frag:jm},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ni={basic:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:rn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:rn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:rn([Me.points,Me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:rn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:rn([Me.common,Me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:rn([Me.sprite,Me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:rn([Me.common,Me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:rn([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ni.physical={uniforms:rn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var aa={r:0,b:0,g:0},$i=new ci,$m=new bt;function eg(i,e,t,n,s,r,a){let o=new Ze(0),l=r===!0?0:1,c,u,d=null,p=0,f=null;function v(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function g(b){let A=!1,x=v(b);x===null?h(o,l):x&&x.isColor&&(h(x,1),A=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,A){let x=v(A);x&&(x.isCubeTexture||x.mapping===Oa)?(u===void 0&&(u=new at(new cs(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Gs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(A.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler($i)),u.material.toneMapped=ht.getTransfer(x.colorSpace)!==Mt,(d!==x||p!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new at(new _i(2,2),new Tt({name:"BackgroundMaterial",uniforms:Gs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ht.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,A){b.getRGB(aa,cu(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:g,addToRenderList:m}}function tg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(S,P,X,k,z){let q=!1,G=d(k,X,P);r!==G&&(r=G,c(r.object)),q=f(S,k,X,z),q&&v(S,k,X,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(S,P,X,k),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,P,X){let k=X.wireframe===!0,z=n[S.id];z===void 0&&(z={},n[S.id]=z);let q=z[P.id];q===void 0&&(q={},z[P.id]=q);let G=q[k];return G===void 0&&(G=p(l()),q[k]=G),G}function p(S){let P=[],X=[],k=[];for(let z=0;z<t;z++)P[z]=0,X[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,P,X,k){let z=r.attributes,q=P.attributes,G=0,J=X.getAttributes();for(let W in J)if(J[W].location>=0){let Se=z[W],Le=q[W];if(Le===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Le=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Le=S.instanceColor)),Se===void 0||Se.attribute!==Le||Le&&Se.data!==Le.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function v(S,P,X,k){let z={},q=P.attributes,G=0,J=X.getAttributes();for(let W in J)if(J[W].location>=0){let Se=q[W];Se===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor));let Le={};Le.attribute=Se,Se&&Se.data&&(Le.data=Se.data),z[W]=Le,G++}r.attributes=z,r.attributesNum=G,r.index=k}function g(){let S=r.newAttributes;for(let P=0,X=S.length;P<X;P++)S[P]=0}function m(S){h(S,0)}function h(S,P){let X=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;X[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),z[S]!==P&&(i.vertexAttribDivisor(S,P),z[S]=P)}function b(){let S=r.newAttributes,P=r.enabledAttributes;for(let X=0,k=P.length;X<k;X++)P[X]!==S[X]&&(i.disableVertexAttribArray(X),P[X]=0)}function A(S,P,X,k,z,q,G){G===!0?i.vertexAttribIPointer(S,P,X,z,q):i.vertexAttribPointer(S,P,X,k,z,q)}function x(S,P,X,k){g();let z=k.attributes,q=X.getAttributes(),G=P.defaultAttributeValues;for(let J in q){let W=q[J];if(W.location>=0){let ce=z[J];if(ce===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){let Se=ce.normalized,Le=ce.itemSize,Qe=e.get(ce);if(Qe===void 0)continue;let ct=Qe.buffer,Q=Qe.type,ae=Qe.bytesPerElement,Te=Q===i.INT||Q===i.UNSIGNED_INT||ce.gpuType===Jl;if(ce.isInterleavedBufferAttribute){let fe=ce.data,Oe=fe.stride,Pe=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let We=0;We<W.locationSize;We++)h(W.location+We,fe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let We=0;We<W.locationSize;We++)m(W.location+We);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let We=0;We<W.locationSize;We++)A(W.location+We,Le/W.locationSize,Q,Se,Oe*ae,(Pe+Le/W.locationSize*We)*ae,Te)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)h(W.location+fe,ce.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<W.locationSize;fe++)m(W.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let fe=0;fe<W.locationSize;fe++)A(W.location+fe,Le/W.locationSize,Q,Se,Le*ae,Le/W.locationSize*fe*ae,Te)}}else if(G!==void 0){let Se=G[J];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(W.location,Se);break;case 3:i.vertexAttrib3fv(W.location,Se);break;case 4:i.vertexAttrib4fv(W.location,Se);break;default:i.vertexAttrib1fv(W.location,Se)}}}}b()}function I(){C();for(let S in n){let P=n[S];for(let X in P){let k=P[X];for(let z in k)u(k[z].object),delete k[z];delete P[X]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let X in P){let k=P[X];for(let z in k)u(k[z].object),delete k[z];delete P[X]}delete n[S.id]}function R(S){for(let P in n){let X=n[P];if(X[S.id]===void 0)continue;let k=X[S.id];for(let z in k)u(k[z].object),delete k[z];delete X[S.id]}}function C(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function ng(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=u[v];t.update(f,n,1)}function l(c,u,d,p){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],p[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*p[g];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ig(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==qn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let C=R===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ei&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ri&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:x,vertexTextures:I,maxSamples:E}}function sg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Si,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){let v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,A=b*4,x=h.clippingState||null;l.value=x,x=u(v,p,A,f);for(let I=0;I!==A;++I)x[I]=t[I];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,f,v){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let h=f+g*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,x=f;A!==g;++A,x+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function rg(i){let e=new WeakMap;function t(a,o){return o===Go?a.mapping=ks:o===Wo&&(a.mapping=zs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Go||o===Wo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new wl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ws=class extends Aa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=4,mh=[.125,.215,.35,.446,.526,.582],is=20,Ro=new Ws,gh=new Ze,Co=null,Io=0,Po=0,Lo=!1,ts=(1+Math.sqrt(5))/2,Is=1/ts,vh=[new F(-ts,Is,0),new F(ts,Is,0),new F(-Is,0,ts),new F(Is,0,ts),new F(0,ts,-Is),new F(0,ts,Is),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Co=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Io,Po),this._renderer.xr.enabled=Lo,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Rn,format:qn,colorSpace:Ks,depthBuffer:!1},s=xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(r)),this._blurMaterial=og(r,e,t)}return s}_compileMaterial(e){let t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,s){let o=new an(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(gh),u.toneMapping=li,u.autoClear=!1;let f=new Yn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new at(new cs,f),g=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(gh),g=!0);for(let h=0;h<6;h++){let b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));let A=this._cubeSize;oa(s,b*A,h>2?A:0,A,A),u.setRenderTarget(s),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ks||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vh[(s-r-1)%vh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new at(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*is-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);let h=[],b=0;for(let R=0;R<is;++R){let C=R/g,w=Math.exp(-C*C/2);h.push(w),R===0?b+=w:R<m&&(b+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:A}=this;p.dTheta.value=v,p.mipInt.value=A-n;let x=this._sizeLods[s],I=3*x*(s>A-Ds?s-A+Ds:0),E=4*(this._cubeSize-x);oa(t,I,E,3*x,2*x),l.setRenderTarget(t),l.render(d,Ro)}};function ag(i){let e=[],t=[],n=[],s=i,r=i-Ds+1+mh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ds?l=mh[a-i+Ds-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,g=3,m=2,h=1,b=new Float32Array(g*v*f),A=new Float32Array(m*v*f),x=new Float32Array(h*v*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,C=E>2?0:-1,w=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];b.set(w,g*v*E),A.set(p,m*v*E);let S=[E,E,E,E,E,E];x.set(S,h*v*E)}let I=new $t;I.setAttribute("position",new _n(b,g)),I.setAttribute("uv",new _n(A,m)),I.setAttribute("faceIndex",new _n(x,h)),e.push(I),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xh(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function og(i,e,t){let n=new Float32Array(is),s=new F(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function yh(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Mh(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function lg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Go||l===Wo,u=l===ks||l===zs;if(c||u){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Xs(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Xs(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hg(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let v in p.attributes)e.remove(p.attributes[v]);for(let v in p.morphAttributes){let g=p.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let v in p)e.update(p[v],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let v in f){let g=f[v];for(let m=0,h=g.length;m<h;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(d){let p=[],f=d.index,v=d.attributes.position,g=0;if(f!==null){let b=f.array;g=f.version;for(let A=0,x=b.length;A<x;A+=3){let I=b[A+0],E=b[A+1],R=b[A+2];p.push(I,E,E,R,R,I)}}else if(v!==void 0){let b=v.array;g=v.version;for(let A=0,x=b.length/3-1;A<x;A+=3){let I=A+0,E=A+1,R=A+2;p.push(I,E,E,R,R,I)}}else return;let m=new(ou(p)?wa:Sa)(p,1);m.version=g;let h=r.get(d);h&&e.remove(h),r.set(d,m)}function u(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ug(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}function c(p,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,p*a,v),t.update(f,n,v))}function u(p,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,v);let m=0;for(let h=0;h<v;h++)m+=f[h];t.update(m,n,1)}function d(p,f,v,g){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/a,f[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,g,0,v);let h=0;for(let b=0;b<v;b++)h+=f[b]*g[b];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fg(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;f===!0&&(A=1),v===!0&&(A=2),g===!0&&(A=3);let x=o.attributes.position.count*A,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*I*4*d),R=new Ma(E,x,I,d);R.type=ri,R.needsUpdate=!0;let C=A*4;for(let S=0;S<d;S++){let P=m[S],X=h[S],k=b[S],z=x*I*4*S;for(let q=0;q<P.count;q++){let G=q*C;f===!0&&(s.fromBufferAttribute(P,q),E[z+G+0]=s.x,E[z+G+1]=s.y,E[z+G+2]=s.z,E[z+G+3]=0),v===!0&&(s.fromBufferAttribute(X,q),E[z+G+4]=s.x,E[z+G+5]=s.y,E[z+G+6]=s.z,E[z+G+7]=0),g===!0&&(s.fromBufferAttribute(k,q),E[z+G+8]=s.x,E[z+G+9]=s.y,E[z+G+10]=s.z,E[z+G+11]=k.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new Ee(x,I)},n.set(o,p),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function pg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ta=class extends pn{constructor(e,t,n,s,r,a,o,l,c,u=Us){if(u!==Us&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Us&&(n=as),n===void 0&&u===Hs&&(n=Vs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},uu=new pn,bh=new Ta(1,1),du=new Ma,fu=new bl,pu=new Ea,Sh=[],wh=[],Ah=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function $s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function za(i,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),zt(t,n)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),zt(t,n)}}function bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Ah.set(n),i.uniformMatrix4fv(this.addr,!1,Ah),zt(t,n)}}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bh.compareFunction=au,r=bh):r=uu,t.setTexture2D(e||r,s)}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fu,s)}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pu,s)}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||du,s)}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return vg;case 35666:return xg;case 35674:return yg;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return Sg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return _g;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ng(i,e){i.uniform1fv(this.addr,e)}function Fg(i,e){let t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function Bg(i,e){let t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function Og(i,e){let t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function kg(i,e){let t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zg(i,e){let t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vg(i,e){let t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hg(i,e){i.uniform1iv(this.addr,e)}function Gg(i,e){i.uniform2iv(this.addr,e)}function Wg(i,e){i.uniform3iv(this.addr,e)}function Xg(i,e){i.uniform4iv(this.addr,e)}function qg(i,e){i.uniform1uiv(this.addr,e)}function Yg(i,e){i.uniform2uiv(this.addr,e)}function Qg(i,e){i.uniform3uiv(this.addr,e)}function Zg(i,e){i.uniform4uiv(this.addr,e)}function Kg(i,e,t){let n=this.cache,s=e.length,r=za(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||uu,r[a])}function Jg(i,e,t){let n=this.cache,s=e.length,r=za(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fu,r[a])}function jg(i,e,t){let n=this.cache,s=e.length,r=za(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pu,r[a])}function $g(i,e,t){let n=this.cache,s=e.length,r=za(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||du,r[a])}function e0(i){switch(i){case 5126:return Ng;case 35664:return Fg;case 35665:return Bg;case 35666:return Og;case 35674:return kg;case 35675:return zg;case 35676:return Vg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return Qg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return $g}}var Al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ug(t.type)}},El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}},Tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Do=/(\w+)(\])?(\[|\.)?/g;function _h(i,e){i.seq.push(e),i.map[e.id]=e}function t0(i,e,t){let n=i.name,s=n.length;for(Do.lastIndex=0;;){let r=Do.exec(n),a=Do.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_h(t,c===void 0?new Al(o,i,e):new El(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Tl(o),_h(t,d)),t=d}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);t0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Rh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var n0=37297,i0=0;function s0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ch=new tt;function r0(i){ht._getMatrix(Ch,ht.workingColorSpace,i);let e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case ka:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ih(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+s0(i.getShaderSource(e),a)}else return s}function a0(i,e){let t=r0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o0(i,e){let t;switch(e){case vd:t="Linear";break;case xd:t="Reinhard";break;case yd:t="Cineon";break;case Md:t="ACESFilmic";break;case Sd:t="AgX";break;case wd:t="Neutral";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var la=new F;function l0(){ht.getLuminanceCoefficients(la);let i=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function h0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xr(i){return i!==""}function Ph(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(d0,p0)}var f0=new Map;function p0(i,e){let t=nt[e];if(t===void 0){let n=f0.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}var m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(m0,g0)}function g0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function v0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case zs:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zs&&(e="ENVMAP_MODE_REFRACTION"),e}function M0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case md:e="ENVMAP_BLENDING_MIX";break;case gd:e="ENVMAP_BLENDING_ADD";break}return e}function b0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=v0(t),c=x0(t),u=y0(t),d=M0(t),p=b0(t),f=c0(t),v=h0(r),g=s.createProgram(),m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xr).join(`
`),h.length>0&&(h+=`
`)):(m=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),h=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?nt.tonemapping_pars_fragment:"",t.toneMapping!==li?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=_l(a),a=Ph(a,t),a=Lh(a,t),o=_l(o),o=Ph(o,t),o=Lh(o,t),a=Dh(a),o=Dh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let A=b+m+a,x=b+h+o,I=Rh(s,s.VERTEX_SHADER,A),E=Rh(s,s.FRAGMENT_SHADER,x);s.attachShader(g,I),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(P){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(I).trim(),z=s.getShaderInfoLog(E).trim(),q=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,E);else{let J=Ih(s,I,"vertex"),W=Ih(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+J+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(k===""||z==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:X,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:h}})}s.deleteShader(I),s.deleteShader(E),C=new Fs(s,g),w=u0(s,g)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,n0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=E,this}var w0=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=w0++,this.code=e,this.usedTimes=0}};function A0(i,e,t,n,s,r,a){let o=new Er,l=new Rl,c=new Set,u=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,P,X,k){let z=X.fog,q=k.geometry,G=w.isMeshStandardMaterial?X.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),W=J&&J.mapping===Oa?J.image.height:null,ce=v[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let Se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Le=Se!==void 0?Se.length:0,Qe=0;q.morphAttributes.position!==void 0&&(Qe=1),q.morphAttributes.normal!==void 0&&(Qe=2),q.morphAttributes.color!==void 0&&(Qe=3);let ct,Q,ae,Te;if(ce){let ze=ni[ce];ct=ze.vertexShader,Q=ze.fragmentShader}else ct=w.vertexShader,Q=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),Te=l.getFragmentShaderID(w);let fe=i.getRenderTarget(),Oe=i.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,We=k.isBatchedMesh===!0,st=!!w.map,et=!!w.matcap,pt=!!J,B=!!w.aoMap,Vt=!!w.lightMap,Ke=!!w.bumpMap,Xe=!!w.normalMap,_e=!!w.displacementMap,dt=!!w.emissiveMap,Ue=!!w.metalnessMap,_=!!w.roughnessMap,y=w.anisotropy>0,V=w.clearcoat>0,Z=w.dispersion>0,ee=w.iridescence>0,K=w.sheen>0,Ce=w.transmission>0,ge=y&&!!w.anisotropyMap,ue=V&&!!w.clearcoatMap,rt=V&&!!w.clearcoatNormalMap,re=V&&!!w.clearcoatRoughnessMap,pe=ee&&!!w.iridescenceMap,De=ee&&!!w.iridescenceThicknessMap,Fe=K&&!!w.sheenColorMap,ve=K&&!!w.sheenRoughnessMap,Je=!!w.specularMap,He=!!w.specularColorMap,$e=!!w.specularIntensityMap,N=Ce&&!!w.transmissionMap,me=Ce&&!!w.thicknessMap,Y=!!w.gradientMap,$=!!w.alphaMap,he=w.alphaTest>0,xe=!!w.alphaHash,Ge=!!w.extensions,yt=li;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(yt=i.toneMapping);let _t={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:ct,fragmentShader:Q,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:Te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:We,batchingColor:We&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ks,alphaToCoverage:!!w.alphaToCoverage,map:st,matcap:et,envMap:pt,envMapMode:pt&&J.mapping,envMapCubeUVHeight:W,aoMap:B,lightMap:Vt,bumpMap:Ke,normalMap:Xe,displacementMap:p&&_e,emissiveMap:dt,normalMapObjectSpace:Xe&&w.normalMapType===_d,normalMapTangentSpace:Xe&&w.normalMapType===ru,metalnessMap:Ue,roughnessMap:_,anisotropy:y,anisotropyMap:ge,clearcoat:V,clearcoatMap:ue,clearcoatNormalMap:rt,clearcoatRoughnessMap:re,dispersion:Z,iridescence:ee,iridescenceMap:pe,iridescenceThicknessMap:De,sheen:K,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:Je,specularColorMap:He,specularIntensityMap:$e,transmission:Ce,transmissionMap:N,thicknessMap:me,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Oi&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:he,alphaHash:xe,combine:w.combine,mapUv:st&&g(w.map.channel),aoMapUv:B&&g(w.aoMap.channel),lightMapUv:Vt&&g(w.lightMap.channel),bumpMapUv:Ke&&g(w.bumpMap.channel),normalMapUv:Xe&&g(w.normalMap.channel),displacementMapUv:_e&&g(w.displacementMap.channel),emissiveMapUv:dt&&g(w.emissiveMap.channel),metalnessMapUv:Ue&&g(w.metalnessMap.channel),roughnessMapUv:_&&g(w.roughnessMap.channel),anisotropyMapUv:ge&&g(w.anisotropyMap.channel),clearcoatMapUv:ue&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(w.sheenRoughnessMap.channel),specularMapUv:Je&&g(w.specularMap.channel),specularColorMapUv:He&&g(w.specularColorMap.channel),specularIntensityMapUv:$e&&g(w.specularIntensityMap.channel),transmissionMapUv:N&&g(w.transmissionMap.channel),thicknessMapUv:me&&g(w.thicknessMap.channel),alphaMapUv:$&&g(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xe||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(st||$),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Oe,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:st&&w.map.isVideoTexture===!0&&ht.getTransfer(w.map.colorSpace)===Mt,decodeVideoTextureEmissive:dt&&w.emissiveMap.isVideoTexture===!0&&ht.getTransfer(w.emissiveMap.colorSpace)===Mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wn,flipSided:w.side===jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function h(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(b(S,w),A(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function b(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function A(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){let S=v[w.type],P;if(S){let X=ni[S];P=js.clone(X.uniforms)}else P=w.uniforms;return P}function I(w,S){let P;for(let X=0,k=u.length;X<k;X++){let z=u[X];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new S0(i,S,w,r),u.push(P)),P}function E(w){if(--w.usedTimes===0){let S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:I,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:C}}function E0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function T0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,f,v,g,m){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:f,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=f,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function o(d,p,f,v,g,m){let h=a(d,p,f,v,g,m);f.transmission>0?n.push(h):f.transparent===!0?s.push(h):t.push(h)}function l(d,p,f,v,g,m){let h=a(d,p,f,v,g,m);f.transmission>0?n.unshift(h):f.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,p){t.length>1&&t.sort(d||T0),n.length>1&&n.sort(p||Nh),s.length>1&&s.sort(p||Nh)}function u(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function _0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Fh,i.set(n,[a])):s>=r.length?(a=new Fh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function R0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function C0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var I0=0;function P0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L0(i){let e=new R0,t=C0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new bt,a=new bt;function o(c){let u=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,v=0,g=0,m=0,h=0,b=0,A=0,x=0,I=0,E=0,R=0;c.sort(P0);for(let w=0,S=c.length;w<S;w++){let P=c[w],X=P.color,k=P.intensity,z=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=X.r*k,d+=X.g*k,p+=X.b*k;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],k);R++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=G,f++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(X).multiplyScalar(k),G.distance=z,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;let J=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=J.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=q,x++}g++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(X).multiplyScalar(k),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[v]=W,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=P.shadow.matrix,A++}n.point[v]=G,v++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(k),G.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[h]=G,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==f||C.pointLength!==v||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==b||C.numPointShadows!==A||C.numSpotShadows!==x||C.numSpotMaps!==I||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=x+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.directionalLength=f,C.pointLength=v,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=b,C.numPointShadows=A,C.numSpotShadows=x,C.numSpotMaps=I,C.numLightProbes=R,n.version=I0++)}function l(c,u){let d=0,p=0,f=0,v=0,g=0,m=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){let A=c[h];if(A.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(A.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let x=n.rectArea[v];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),p++}else if(A.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Bh(i){let e=new L0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function D0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Bh(i),e.set(s,[o])):r>=a.length?(o=new Bh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Il=class extends ls{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends ls{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
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
}`;function F0(i,e,t){let n=new Tr,s=new Ee,r=new Ee,a=new Pt,o=new Il({depthPacking:Td}),l=new Pl,c={},u=t.maxTextureSize,d={[ki]:jt,[jt]:ki,[Wn]:Wn},p=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:U0,fragmentShader:N0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let v=new $t;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new at(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let h=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),X=i.state;X.setBlending(oi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let k=h!==bi&&this.type===bi,z=h===bi&&this.type!==bi;for(let q=0,G=E.length;q<G;q++){let J=E[q],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ce=W.getFrameExtents();if(s.multiply(ce),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,W.mapSize.y=r.y)),W.map===null||k===!0||z===!0){let Le=this.type!==bi?{minFilter:Tn,magFilter:Tn}:{};W.map!==null&&W.map.dispose(),W.map=new qt(s.x,s.y,Le),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let Se=W.getViewportCount();for(let Le=0;Le<Se;Le++){let Qe=W.getViewport(Le);a.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),X.viewport(a),W.updateMatrices(J,Le),n=W.getFrustum(),x(R,C,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===bi&&b(W,C),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,P)};function b(E,R){let C=e.update(g);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qt(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,C,p,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,C,f,g,null)}function A(E,R,C,w){let S=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let X=S.uuid,k=R.uuid,z=c[X];z===void 0&&(z={},c[X]=z);let q=z[k];q===void 0&&(q=S.clone(),z[k]=q,R.addEventListener("dispose",I)),S=q}if(S.visible=R.visible,S.wireframe=R.wireframe,w===bi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let X=i.properties.get(S);X.light=C}return S}function x(E,R,C,w,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===bi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let k=e.update(E),z=E.material;if(Array.isArray(z)){let q=k.groups;for(let G=0,J=q.length;G<J;G++){let W=q[G],ce=z[W.materialIndex];if(ce&&ce.visible){let Se=A(E,ce,w,S);E.onBeforeShadow(i,E,R,C,k,Se,W),i.renderBufferDirect(C,null,k,Se,E,W),E.onAfterShadow(i,E,R,C,k,Se,W)}}}else if(z.visible){let q=A(E,z,w,S);E.onBeforeShadow(i,E,R,C,k,q,null),i.renderBufferDirect(C,null,k,q,E,null),E.onAfterShadow(i,E,R,C,k,q,null)}}let X=E.children;for(let k=0,z=X.length;k<z;k++)x(X[k],R,C,w,S)}function I(E){E.target.removeEventListener("dispose",I);for(let C in c){let w=c[C],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var B0={[Fo]:Bo,[Oo]:Vo,[ko]:Ho,[Os]:zo,[Bo]:Fo,[Vo]:Oo,[Ho]:ko,[zo]:Os};function O0(i,e){function t(){let N=!1,me=new Pt,Y=null,$=new Pt(0,0,0,0);return{setMask:function(he){Y!==he&&!N&&(i.colorMask(he,he,he,he),Y=he)},setLocked:function(he){N=he},setClear:function(he,xe,Ge,yt,_t){_t===!0&&(he*=yt,xe*=yt,Ge*=yt),me.set(he,xe,Ge,yt),$.equals(me)===!1&&(i.clearColor(he,xe,Ge,yt),$.copy(me))},reset:function(){N=!1,Y=null,$.set(-1,0,0,0)}}}function n(){let N=!1,me=!1,Y=null,$=null,he=null;return{setReversed:function(xe){if(me!==xe){let Ge=e.get("EXT_clip_control");me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let yt=he;he=null,this.setClear(yt)}me=xe},getReversed:function(){return me},setTest:function(xe){xe?fe(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(xe){Y!==xe&&!N&&(i.depthMask(xe),Y=xe)},setFunc:function(xe){if(me&&(xe=B0[xe]),$!==xe){switch(xe){case Fo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=xe}},setLocked:function(xe){N=xe},setClear:function(xe){he!==xe&&(me&&(xe=1-xe),i.clearDepth(xe),he=xe)},reset:function(){N=!1,Y=null,$=null,he=null,me=!1}}}function s(){let N=!1,me=null,Y=null,$=null,he=null,xe=null,Ge=null,yt=null,_t=null;return{setTest:function(ze){N||(ze?fe(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(ze){me!==ze&&!N&&(i.stencilMask(ze),me=ze)},setFunc:function(ze,Ct,Yt){(Y!==ze||$!==Ct||he!==Yt)&&(i.stencilFunc(ze,Ct,Yt),Y=ze,$=Ct,he=Yt)},setOp:function(ze,Ct,Yt){(xe!==ze||Ge!==Ct||yt!==Yt)&&(i.stencilOp(ze,Ct,Yt),xe=ze,Ge=Ct,yt=Yt)},setLocked:function(ze){N=ze},setClear:function(ze){_t!==ze&&(i.clearStencil(ze),_t=ze)},reset:function(){N=!1,me=null,Y=null,$=null,he=null,xe=null,Ge=null,yt=null,_t=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,f=[],v=null,g=!1,m=null,h=null,b=null,A=null,x=null,I=null,E=null,R=new Ze(0,0,0),C=0,w=!1,S=null,P=null,X=null,k=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,J=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=J>=2);let ce=null,Se={},Le=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),ct=new Pt().fromArray(Le),Q=new Pt().fromArray(Qe);function ae(N,me,Y,$){let he=new Uint8Array(4),xe=i.createTexture();i.bindTexture(N,xe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Y;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(me+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return xe}let Te={};Te[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),a.setFunc(Os),Ke(!1),Xe(kc),fe(i.CULL_FACE),B(oi);function fe(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Oe(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Pe(N,me){return d[N]!==me?(i.bindFramebuffer(N,me),d[N]=me,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=me),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=me),!0):!1}function We(N,me){let Y=f,$=!1;if(N){Y=p.get(me),Y===void 0&&(Y=[],p.set(me,Y));let he=N.textures;if(Y.length!==he.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ge=he.length;xe<Ge;xe++)Y[xe]=i.COLOR_ATTACHMENT0+xe;Y.length=he.length,$=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,$=!0);$&&i.drawBuffers(Y)}function st(N){return v!==N?(i.useProgram(N),v=N,!0):!1}let et={[ii]:i.FUNC_ADD,[td]:i.FUNC_SUBTRACT,[nd]:i.FUNC_REVERSE_SUBTRACT};et[id]=i.MIN,et[sd]=i.MAX;let pt={[Na]:i.ZERO,[Fa]:i.ONE,[Ba]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[ad]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[Bs]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function B(N,me,Y,$,he,xe,Ge,yt,_t,ze){if(N===oi){g===!0&&(Oe(i.BLEND),g=!1);return}if(g===!1&&(fe(i.BLEND),g=!0),N!==Zs){if(N!==m||ze!==w){if((h!==ii||x!==ii)&&(i.blendEquation(i.FUNC_ADD),h=ii,x=ii),ze)switch(N){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,A=null,I=null,E=null,R.set(0,0,0),C=0,m=N,w=ze}return}he=he||me,xe=xe||Y,Ge=Ge||$,(me!==h||he!==x)&&(i.blendEquationSeparate(et[me],et[he]),h=me,x=he),(Y!==b||$!==A||xe!==I||Ge!==E)&&(i.blendFuncSeparate(pt[Y],pt[$],pt[xe],pt[Ge]),b=Y,A=$,I=xe,E=Ge),(yt.equals(R)===!1||_t!==C)&&(i.blendColor(yt.r,yt.g,yt.b,_t),R.copy(yt),C=_t),m=N,w=!1}function Vt(N,me){N.side===Wn?Oe(i.CULL_FACE):fe(i.CULL_FACE);let Y=N.side===jt;me&&(Y=!Y),Ke(Y),N.blending===Oi&&N.transparent===!1?B(oi):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let $=N.stencilWrite;o.setTest($),$&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function Xe(N){N!==ju?(fe(i.CULL_FACE),N!==P&&(N===kc?i.cullFace(i.BACK):N===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),P=N}function _e(N){N!==X&&(G&&i.lineWidth(N),X=N)}function dt(N,me,Y){N?(fe(i.POLYGON_OFFSET_FILL),(k!==me||z!==Y)&&(i.polygonOffset(me,Y),k=me,z=Y)):Oe(i.POLYGON_OFFSET_FILL)}function Ue(N){N?fe(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function _(N){N===void 0&&(N=i.TEXTURE0+q-1),ce!==N&&(i.activeTexture(N),ce=N)}function y(N,me,Y){Y===void 0&&(ce===null?Y=i.TEXTURE0+q-1:Y=ce);let $=Se[Y];$===void 0&&($={type:void 0,texture:void 0},Se[Y]=$),($.type!==N||$.texture!==me)&&(ce!==Y&&(i.activeTexture(Y),ce=Y),i.bindTexture(N,me||Te[N]),$.type=N,$.texture=me)}function V(){let N=Se[ce];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(N){ct.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function ve(N){Q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function Je(N,me){let Y=c.get(me);Y===void 0&&(Y=new WeakMap,c.set(me,Y));let $=Y.get(N);$===void 0&&($=i.getUniformBlockIndex(me,N.name),Y.set(N,$))}function He(N,me){let $=c.get(me).get(N);l.get(me)!==$&&(i.uniformBlockBinding(me,$,N.__bindingPointIndex),l.set(me,$))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ce=null,Se={},d={},p=new WeakMap,f=[],v=null,g=!1,m=null,h=null,b=null,A=null,x=null,I=null,E=null,R=new Ze(0,0,0),C=0,w=!1,S=null,P=null,X=null,k=null,z=null,ct.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Oe,bindFramebuffer:Pe,drawBuffers:We,useProgram:st,setBlending:B,setMaterial:Vt,setFlipSided:Ke,setCullFace:Xe,setLineWidth:_e,setPolygonOffset:dt,setScissorTest:Ue,activeTexture:_,bindTexture:y,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:pe,texImage3D:De,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:rt,texStorage3D:re,texSubImage2D:K,texSubImage3D:Ce,compressedTexSubImage2D:ge,compressedTexSubImage3D:ue,scissor:Fe,viewport:ve,reset:$e}}function Oh(i,e,t,n){let s=k0(n);switch(t){case $h:return i*e;case tu:return i*e;case nu:return i*e*2;case ec:return i*e/s.components*s.byteLength;case tc:return i*e/s.components*s.byteLength;case iu:return i*e*2/s.components*s.byteLength;case nc:return i*e*2/s.components*s.byteLength;case eu:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case ic:return i*e*4/s.components*s.byteLength;case ua:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:case Zo:return Math.max(i,16)*Math.max(e,8)/4;case qo:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case Ko:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case fl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case su:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k0(i){switch(i){case Ei:case Kh:return{byteLength:1,components:1};case wr:case Jh:case Rn:return{byteLength:2,components:1};case jl:case $l:return{byteLength:2,components:4};case as:case Jl:case ri:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function z0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,y){return f?new OffscreenCanvas(_,y):xa("canvas")}function g(_,y,V){let Z=1,ee=Ue(_);if((ee.width>V||ee.height>V)&&(Z=V/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let K=Math.floor(Z*ee.width),Ce=Math.floor(Z*ee.height);d===void 0&&(d=v(K,Ce));let ge=y?v(K,Ce):d;return ge.width=K,ge.height=Ce,ge.getContext("2d").drawImage(_,0,0,K,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Ce+")."),ge}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),_;return _}function m(_){return _.generateMipmaps}function h(_){i.generateMipmap(_)}function b(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(_,y,V,Z,ee=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let K=y;if(y===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),y===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),y===i.RGBA){let Ce=ee?ka:ht.getTransfer(Z);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Ce===Mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(_,y){let V;return _?y===null||y===as||y===Vs?V=i.DEPTH24_STENCIL8:y===ri?V=i.DEPTH32F_STENCIL8:y===wr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===as||y===Vs?V=i.DEPTH_COMPONENT24:y===ri?V=i.DEPTH_COMPONENT32F:y===wr&&(V=i.DEPTH_COMPONENT16),V}function I(_,y){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Tn&&_.minFilter!==si?Math.log2(Math.max(y.width,y.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?y.mipmaps.length:1}function E(_){let y=_.target;y.removeEventListener("dispose",E),C(y),y.isVideoTexture&&u.delete(y)}function R(_){let y=_.target;y.removeEventListener("dispose",R),S(y)}function C(_){let y=n.get(_);if(y.__webglInit===void 0)return;let V=_.source,Z=p.get(V);if(Z){let ee=Z[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(_),Object.keys(Z).length===0&&p.delete(V)}n.remove(_)}function w(_){let y=n.get(_);i.deleteTexture(y.__webglTexture);let V=_.source,Z=p.get(V);delete Z[y.__cacheKey],a.memory.textures--}function S(_){let y=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ee=0;ee<y.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(y.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=_.textures;for(let Z=0,ee=V.length;Z<ee;Z++){let K=n.get(V[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(_)}let P=0;function X(){P=0}function k(){let _=P;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),P+=1,_}function z(_){let y=[];return y.push(_.wrapS),y.push(_.wrapT),y.push(_.wrapR||0),y.push(_.magFilter),y.push(_.minFilter),y.push(_.anisotropy),y.push(_.internalFormat),y.push(_.format),y.push(_.type),y.push(_.generateMipmaps),y.push(_.premultiplyAlpha),y.push(_.flipY),y.push(_.unpackAlignment),y.push(_.colorSpace),y.join()}function q(_,y){let V=n.get(_);if(_.isVideoTexture&&_e(_),_.isRenderTargetTexture===!1&&_.version>0&&V.__version!==_.version){let Z=_.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,_,y);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function G(_,y){let V=n.get(_);if(_.version>0&&V.__version!==_.version){Q(V,_,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function J(_,y){let V=n.get(_);if(_.version>0&&V.__version!==_.version){Q(V,_,y);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function W(_,y){let V=n.get(_);if(_.version>0&&V.__version!==_.version){ae(V,_,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let ce={[Sr]:i.REPEAT,[ss]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},Se={[Tn]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Le={[Rd]:i.NEVER,[Ud]:i.ALWAYS,[Cd]:i.LESS,[au]:i.LEQUAL,[Id]:i.EQUAL,[Dd]:i.GEQUAL,[Pd]:i.GREATER,[Ld]:i.NOTEQUAL};function Qe(_,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===si||y.magFilter===ro||y.magFilter===Hr||y.magFilter===rs||y.minFilter===si||y.minFilter===ro||y.minFilter===Hr||y.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,ce[y.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,ce[y.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,ce[y.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,Se[y.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Tn||y.minFilter!==Hr&&y.minFilter!==rs||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ct(_,y){let V=!1;_.__webglInit===void 0&&(_.__webglInit=!0,y.addEventListener("dispose",E));let Z=y.source,ee=p.get(Z);ee===void 0&&(ee={},p.set(Z,ee));let K=z(y);if(K!==_.__cacheKey){ee[K]===void 0&&(ee[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ee[K].usedTimes++;let Ce=ee[_.__cacheKey];Ce!==void 0&&(ee[_.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(y)),_.__cacheKey=K,_.__webglTexture=ee[K].texture}return V}function Q(_,y,V){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);let ee=ct(_,y),K=y.source;t.bindTexture(Z,_.__webglTexture,i.TEXTURE0+V);let Ce=n.get(K);if(K.version!==Ce.__version||ee===!0){t.activeTexture(i.TEXTURE0+V);let ge=ht.getPrimaries(ht.workingColorSpace),ue=y.colorSpace===Xn?null:ht.getPrimaries(y.colorSpace),rt=y.colorSpace===Xn||ge===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let re=g(y.image,!1,s.maxTextureSize);re=dt(y,re);let pe=r.convert(y.format,y.colorSpace),De=r.convert(y.type),Fe=A(y.internalFormat,pe,De,y.colorSpace,y.isVideoTexture);Qe(Z,y);let ve,Je=y.mipmaps,He=y.isVideoTexture!==!0,$e=Ce.__version===void 0||ee===!0,N=K.dataReady,me=I(y,re);if(y.isDepthTexture)Fe=x(y.format===Hs,y.type),$e&&(He?t.texStorage2D(i.TEXTURE_2D,1,Fe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Fe,re.width,re.height,0,pe,De,null));else if(y.isDataTexture)if(Je.length>0){He&&$e&&t.texStorage2D(i.TEXTURE_2D,me,Fe,Je[0].width,Je[0].height);for(let Y=0,$=Je.length;Y<$;Y++)ve=Je[Y],He?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,pe,De,ve.data):t.texImage2D(i.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,pe,De,ve.data);y.generateMipmaps=!1}else He?($e&&t.texStorage2D(i.TEXTURE_2D,me,Fe,re.width,re.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,pe,De,re.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,re.width,re.height,0,pe,De,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,Je[0].width,Je[0].height,re.depth);for(let Y=0,$=Je.length;Y<$;Y++)if(ve=Je[Y],y.format!==qn)if(pe!==null)if(He){if(N)if(y.layerUpdates.size>0){let he=Oh(ve.width,ve.height,y.format,y.type);for(let xe of y.layerUpdates){let Ge=ve.data.subarray(xe*he/ve.data.BYTES_PER_ELEMENT,(xe+1)*he/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xe,ve.width,ve.height,1,pe,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,pe,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,pe,De,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Fe,ve.width,ve.height,re.depth,0,pe,De,ve.data)}else{He&&$e&&t.texStorage2D(i.TEXTURE_2D,me,Fe,Je[0].width,Je[0].height);for(let Y=0,$=Je.length;Y<$;Y++)ve=Je[Y],y.format!==qn?pe!==null?He?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,pe,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ve.width,ve.height,pe,De,ve.data):t.texImage2D(i.TEXTURE_2D,Y,Fe,ve.width,ve.height,0,pe,De,ve.data)}else if(y.isDataArrayTexture)if(He){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Fe,re.width,re.height,re.depth),N)if(y.layerUpdates.size>0){let Y=Oh(re.width,re.height,y.format,y.type);for(let $ of y.layerUpdates){let he=re.data.subarray($*Y/re.data.BYTES_PER_ELEMENT,($+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,pe,De,he)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,De,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,re.width,re.height,re.depth,0,pe,De,re.data);else if(y.isData3DTexture)He?($e&&t.texStorage3D(i.TEXTURE_3D,me,Fe,re.width,re.height,re.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,De,re.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,re.width,re.height,re.depth,0,pe,De,re.data);else if(y.isFramebufferTexture){if($e)if(He)t.texStorage2D(i.TEXTURE_2D,me,Fe,re.width,re.height);else{let Y=re.width,$=re.height;for(let he=0;he<me;he++)t.texImage2D(i.TEXTURE_2D,he,Fe,Y,$,0,pe,De,null),Y>>=1,$>>=1}}else if(Je.length>0){if(He&&$e){let Y=Ue(Je[0]);t.texStorage2D(i.TEXTURE_2D,me,Fe,Y.width,Y.height)}for(let Y=0,$=Je.length;Y<$;Y++)ve=Je[Y],He?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,pe,De,ve):t.texImage2D(i.TEXTURE_2D,Y,Fe,pe,De,ve);y.generateMipmaps=!1}else if(He){if($e){let Y=Ue(re);t.texStorage2D(i.TEXTURE_2D,me,Fe,Y.width,Y.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,De,re)}else t.texImage2D(i.TEXTURE_2D,0,Fe,pe,De,re);m(y)&&h(Z),Ce.__version=K.version,y.onUpdate&&y.onUpdate(y)}_.__version=y.version}function ae(_,y,V){if(y.image.length!==6)return;let Z=ct(_,y),ee=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+V);let K=n.get(ee);if(ee.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);let Ce=ht.getPrimaries(ht.workingColorSpace),ge=y.colorSpace===Xn?null:ht.getPrimaries(y.colorSpace),ue=y.colorSpace===Xn||Ce===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let rt=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!rt&&!re?pe[$]=g(y.image[$],!0,s.maxCubemapSize):pe[$]=re?y.image[$].image:y.image[$],pe[$]=dt(y,pe[$]);let De=pe[0],Fe=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),Je=A(y.internalFormat,Fe,ve,y.colorSpace),He=y.isVideoTexture!==!0,$e=K.__version===void 0||Z===!0,N=ee.dataReady,me=I(y,De);Qe(i.TEXTURE_CUBE_MAP,y);let Y;if(rt){He&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Je,De.width,De.height);for(let $=0;$<6;$++){Y=pe[$].mipmaps;for(let he=0;he<Y.length;he++){let xe=Y[he];y.format!==qn?Fe!==null?He?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,xe.width,xe.height,Fe,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Je,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,xe.width,xe.height,Fe,ve,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Je,xe.width,xe.height,0,Fe,ve,xe.data)}}}else{if(Y=y.mipmaps,He&&$e){Y.length>0&&me++;let $=Ue(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Je,$.width,$.height)}for(let $=0;$<6;$++)if(re){He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Fe,ve,pe[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Je,pe[$].width,pe[$].height,0,Fe,ve,pe[$].data);for(let he=0;he<Y.length;he++){let Ge=Y[he].image[$].image;He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Ge.width,Ge.height,Fe,ve,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Je,Ge.width,Ge.height,0,Fe,ve,Ge.data)}}else{He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Fe,ve,pe[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Je,Fe,ve,pe[$]);for(let he=0;he<Y.length;he++){let xe=Y[he];He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Fe,ve,xe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Je,Fe,ve,xe.image[$])}}}m(y)&&h(i.TEXTURE_CUBE_MAP),K.__version=ee.version,y.onUpdate&&y.onUpdate(y)}_.__version=y.version}function Te(_,y,V,Z,ee,K){let Ce=r.convert(V.format,V.colorSpace),ge=r.convert(V.type),ue=A(V.internalFormat,Ce,ge,V.colorSpace),rt=n.get(y),re=n.get(V);if(re.__renderTarget=y,!rt.__hasExternalTextures){let pe=Math.max(1,y.width>>K),De=Math.max(1,y.height>>K);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,ue,pe,De,y.depth,0,Ce,ge,null):t.texImage2D(ee,K,ue,pe,De,0,Ce,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,re.__webglTexture,0,Ke(y)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,re.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(_,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,_),y.depthBuffer){let Z=y.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=x(y.stencilBuffer,ee),Ce=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=Ke(y);Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,K,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,_)}else{let Z=y.textures;for(let ee=0;ee<Z.length;ee++){let K=Z[ee],Ce=r.convert(K.format,K.colorSpace),ge=r.convert(K.type),ue=A(K.internalFormat,Ce,ge,K.colorSpace),rt=Ke(y);V&&Xe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ue,y.width,y.height):Xe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ue,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(_,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);let ee=Z.__webglTexture,K=Ke(y);if(y.depthTexture.format===Us)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Hs)Xe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(_){let y=n.get(_),V=_.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==_.depthTexture){let Z=_.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Z}if(_.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Oe(y.__webglFramebuffer,_)}else if(V){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),fe(y.__webglDepthbuffer[Z],_,!1);else{let ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),fe(y.__webglDepthbuffer,_,!1);else{let Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(_,y,V){let Z=n.get(_);y!==void 0&&Te(Z.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Pe(_)}function st(_){let y=_.texture,V=n.get(_),Z=n.get(y);_.addEventListener("dispose",R);let ee=_.textures,K=_.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ge]=[];for(let ue=0;ue<y.mipmaps.length;ue++)V.__webglFramebuffer[ge][ue]=i.createFramebuffer()}else V.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ge=0;ge<y.mipmaps.length;ge++)V.__webglFramebuffer[ge]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ge=0,ue=ee.length;ge<ue;ge++){let rt=n.get(ee[ge]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&Xe(_)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ge=0;ge<ee.length;ge++){let ue=ee[ge];V.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ge]);let rt=r.convert(ue.format,ue.colorSpace),re=r.convert(ue.type),pe=A(ue.internalFormat,rt,re,ue.colorSpace,_.isXRRenderTarget===!0),De=Ke(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,pe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,V.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,y);for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Te(V.__webglFramebuffer[ge][ue],_,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ue);else Te(V.__webglFramebuffer[ge],_,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(y)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,ue=ee.length;ge<ue;ge++){let rt=ee[ge],re=n.get(rt);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Qe(i.TEXTURE_2D,rt),Te(V.__webglFramebuffer,_,rt,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(rt)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ge=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),Qe(ge,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Te(V.__webglFramebuffer[ue],_,y,i.COLOR_ATTACHMENT0,ge,ue);else Te(V.__webglFramebuffer,_,y,i.COLOR_ATTACHMENT0,ge,0);m(y)&&h(ge),t.unbindTexture()}_.depthBuffer&&Pe(_)}function et(_){let y=_.textures;for(let V=0,Z=y.length;V<Z;V++){let ee=y[V];if(m(ee)){let K=b(_),Ce=n.get(ee).__webglTexture;t.bindTexture(K,Ce),h(K),t.unbindTexture()}}}let pt=[],B=[];function Vt(_){if(_.samples>0){if(Xe(_)===!1){let y=_.textures,V=_.width,Z=_.height,ee=i.COLOR_BUFFER_BIT,K=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(_),ge=y.length>1;if(ge)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]);let rt=n.get(y[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,ee,i.NEAREST),l===!0&&(pt.length=0,B.length=0,pt.push(i.COLOR_ATTACHMENT0+ue),_.depthBuffer&&_.resolveDepthBuffer===!1&&(pt.push(K),B.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ue]);let rt=n.get(y[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let y=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ke(_){return Math.min(s.maxSamples,_.samples)}function Xe(_){let y=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(_){let y=a.render.frame;u.get(_)!==y&&(u.set(_,y),_.update())}function dt(_,y){let V=_.colorSpace,Z=_.format,ee=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||V!==Ks&&V!==Xn&&(ht.getTransfer(V)===Mt?(Z!==qn||ee!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Ue(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=st,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Xe}function V0(i,e){function t(n,s=Xn){let r,a=ht.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===eu)return i.RGB;if(n===qn)return i.RGBA;if(n===tu)return i.LUMINANCE;if(n===nu)return i.LUMINANCE_ALPHA;if(n===Us)return i.DEPTH_COMPONENT;if(n===Hs)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===iu)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===Qo||n===Zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Jo||n===jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===Jo)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$o||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===fl||n===pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===ml||n===gl||n===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ll=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ai=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},H0={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&p>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new pn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:G0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends Vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,f=null,v=null,g=new Dl,m=t.getContextAttributes(),h=null,b=null,A=[],x=[],I=new Ee,E=null,R=new an;R.viewport=new Pt;let C=new an;C.viewport=new Pt;let w=[R,C],S=new Ll,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=A[Q];return ae===void 0&&(ae=new br,A[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=A[Q];return ae===void 0&&(ae=new br,A[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=A[Q];return ae===void 0&&(ae=new br,A[Q]=ae),ae.getHandSpace()};function k(Q){let ae=x.indexOf(Q.inputSource);if(ae===-1)return;let Te=A[ae];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,c||a),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",q);for(let Q=0;Q<A.length;Q++){let ae=x[Q];ae!==null&&(x[Q]=null,A[Q].disconnect(ae))}P=null,X=null,g.reset(),e.setRenderTarget(h),f=null,p=null,d=null,s=null,b=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new qt(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Te=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Hs:Us,Te=m.stencil?Vs:as);let Oe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Oe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new qt(p.textureWidth,p.textureHeight,{format:qn,type:Ei,depthTexture:new Ta(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Q){for(let ae=0;ae<Q.removed.length;ae++){let Te=Q.removed[ae],fe=x.indexOf(Te);fe>=0&&(x[fe]=null,A[fe].disconnect(Te))}for(let ae=0;ae<Q.added.length;ae++){let Te=Q.added[ae],fe=x.indexOf(Te);if(fe===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=x.length){x.push(Te),fe=Pe;break}else if(x[Pe]===null){x[Pe]=Te,fe=Pe;break}if(fe===-1)break}let Oe=A[fe];Oe&&Oe.connect(Te)}}let G=new F,J=new F;function W(Q,ae,Te){G.setFromMatrixPosition(ae.matrixWorld),J.setFromMatrixPosition(Te.matrixWorld);let fe=G.distanceTo(J),Oe=ae.projectionMatrix.elements,Pe=Te.projectionMatrix.elements,We=Oe[14]/(Oe[10]-1),st=Oe[14]/(Oe[10]+1),et=(Oe[9]+1)/Oe[5],pt=(Oe[9]-1)/Oe[5],B=(Oe[8]-1)/Oe[0],Vt=(Pe[8]+1)/Pe[0],Ke=We*B,Xe=We*Vt,_e=fe/(-B+Vt),dt=_e*-B;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(dt),Q.translateZ(_e),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Oe[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Ue=We+_e,_=st+_e,y=Ke-dt,V=Xe+(fe-dt),Z=et*st/_*Ue,ee=pt*st/_*Ue;Q.projectionMatrix.makePerspective(y,V,Z,ee,Ue,_),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,Te=Q.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),S.near=C.near=R.near=ae,S.far=C.far=R.far=Te,(P!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,X=S.far),R.layers.mask=Q.layers.mask|2,C.layers.mask=Q.layers.mask|4,S.layers.mask=R.layers.mask|C.layers.mask;let fe=Q.parent,Oe=S.cameras;ce(S,fe);for(let Pe=0;Pe<Oe.length;Pe++)ce(Oe[Pe],fe);Oe.length===2?W(S,R,C):S.projectionMatrix.copy(R.projectionMatrix),Se(Q,S,fe)};function Se(Q,ae,Te){Te===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ar*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let Le=null;function Qe(Q,ae){if(u=ae.getViewerPose(c||a),v=ae,u!==null){let Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let fe=!1;Te.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Pe=0;Pe<Te.length;Pe++){let We=Te[Pe],st=null;if(f!==null)st=f.getViewport(We);else{let pt=d.getViewSubImage(p,We);st=pt.viewport,Pe===0&&(e.setRenderTargetTextures(b,pt.colorTexture,p.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(b))}let et=w[Pe];et===void 0&&(et=new an,et.layers.enable(Pe),et.viewport=new Pt,w[Pe]=et),et.matrix.fromArray(We.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(We.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),Pe===0&&(S.matrix.copy(et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(et)}let Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){let Pe=d.getDepthInformation(Te[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,s.renderState)}}for(let Te=0;Te<A.length;Te++){let fe=x[Te],Oe=A[Te];fe!==null&&Oe!==void 0&&Oe.update(fe,ae,c||a)}Le&&Le(Q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),v=null}let ct=new hu;ct.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){Le=Q},this.dispose=function(){}}},es=new ci,X0=new bt;function q0(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,cu(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,b,A,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,b,A):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===jt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===jt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=e.get(h),A=b.envMap,x=b.envMapRotation;A&&(m.envMap.value=A,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(es)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=A*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===jt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){let b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let x=A.program;n.uniformBlockBinding(b,x)}function c(b,A){let x=s[b.id];x===void 0&&(v(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",m));let I=A.program;n.updateUBOMapping(b,I);let E=e.render.frame;r[b.id]!==E&&(p(b),r[b.id]=E)}function u(b){let A=d();b.__bindingPointIndex=A;let x=i.createBuffer(),I=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,x),x}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){let A=s[b.id],x=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let E=0,R=x.length;E<R;E++){let C=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,S=C.length;w<S;w++){let P=C[w];if(f(P,E,w,I)===!0){let X=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],z=0;for(let q=0;q<k.length;q++){let G=k[q],J=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,X+z,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,A,x,I){let E=b.value,R=A+"_"+x;if(I[R]===void 0)return typeof E=="number"||typeof E=="boolean"?I[R]=E:I[R]=E.clone(),!0;{let C=I[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return I[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function v(b){let A=b.uniforms,x=0,I=16;for(let R=0,C=A.length;R<C;R++){let w=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,P=w.length;S<P;S++){let X=w[S],k=Array.isArray(X.value)?X.value:[X.value];for(let z=0,q=k.length;z<q;z++){let G=k[z],J=g(G),W=x%I,ce=W%J.boundary,Se=W+ce;x+=ce,Se!==0&&I-Se<J.storage&&(x+=I-Se),X.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=J.storage}}}let E=x%I;return E>0&&(x+=I-E),b.__size=x,b.__cache={},this}function g(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){let A=b.target;A.removeEventListener("dispose",m);let x=a.indexOf(A.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var _a=class{constructor(e={}){let{canvas:t=Jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=new Uint32Array(4),g=new Int32Array(4),m=null,h=null,b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=li,this.toneMappingExposure=1;let x=this,I=!1,E=0,R=0,C=null,w=-1,S=null,P=new Pt,X=new Pt,k=null,z=new Ze(0),q=0,G=t.width,J=t.height,W=1,ce=null,Se=null,Le=new Pt(0,0,G,J),Qe=new Pt(0,0,G,J),ct=!1,Q=new Tr,ae=!1,Te=!1,fe=new bt,Oe=new bt,Pe=new F,We=new Pt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function pt(){return C===null?W:1}let B=n;function Vt(M,D){return t.getContext(M,D)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",xe,!1),B===null){let D="webgl2";if(B=Vt(D,M),B===null)throw Vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ke,Xe,_e,dt,Ue,_,y,V,Z,ee,K,Ce,ge,ue,rt,re,pe,De,Fe,ve,Je,He,$e,N;function me(){Ke=new cg(B),Ke.init(),He=new V0(B,Ke),Xe=new ig(B,Ke,e,He),_e=new O0(B,Ke),Xe.reverseDepthBuffer&&p&&_e.buffers.depth.setReversed(!0),dt=new dg(B),Ue=new E0,_=new z0(B,Ke,_e,Ue,Xe,He,dt),y=new rg(x),V=new lg(x),Z=new yf(B),$e=new tg(B,Z),ee=new hg(B,Z,dt,$e),K=new pg(B,ee,Z,dt),Fe=new fg(B,Xe,_),re=new sg(Ue),Ce=new A0(x,y,V,Ke,Xe,$e,re),ge=new q0(x,Ue),ue=new _0,rt=new D0(Ke),De=new eg(x,y,V,_e,K,f,l),pe=new F0(x,K,Xe),N=new Y0(B,dt,Xe,_e),ve=new ng(B,Ke,dt),Je=new ug(B,Ke,dt),dt.programs=Ce.programs,x.capabilities=Xe,x.extensions=Ke,x.properties=Ue,x.renderLists=ue,x.shadowMap=pe,x.state=_e,x.info=dt}me();let Y=new Ul(x,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(G,J,!1))},this.getSize=function(M){return M.set(G,J)},this.setSize=function(M,D,L=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,J=D,t.width=Math.floor(M*W),t.height=Math.floor(D*W),L===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(G*W,J*W).floor()},this.setDrawingBufferSize=function(M,D,L){G=M,J=D,W=L,t.width=Math.floor(M*L),t.height=Math.floor(D*L),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,D,L,O){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,D,L,O),_e.viewport(P.copy(Le).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(Qe)},this.setScissor=function(M,D,L,O){M.isVector4?Qe.set(M.x,M.y,M.z,M.w):Qe.set(M,D,L,O),_e.scissor(X.copy(Qe).multiplyScalar(W).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(M){_e.setScissorTest(ct=M)},this.setOpaqueSort=function(M){ce=M},this.setTransparentSort=function(M){Se=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(M=!0,D=!0,L=!0){let O=0;if(M){let U=!1;if(C!==null){let ie=C.texture.format;U=ie===ic||ie===nc||ie===tc}if(U){let ie=C.texture.type,ne=ie===Ei||ie===as||ie===wr||ie===Vs||ie===jl||ie===$l,de=De.getClearColor(),we=De.getClearAlpha(),ke=de.r,qe=de.g,Re=de.b;ne?(v[0]=ke,v[1]=qe,v[2]=Re,v[3]=we,B.clearBufferuiv(B.COLOR,0,v)):(g[0]=ke,g[1]=qe,g[2]=Re,g[3]=we,B.clearBufferiv(B.COLOR,0,g))}else O|=B.COLOR_BUFFER_BIT}D&&(O|=B.DEPTH_BUFFER_BIT),L&&(O|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ue.dispose(),rt.dispose(),Ue.dispose(),y.dispose(),V.dispose(),K.dispose(),$e.dispose(),N.dispose(),Ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ht),Y.removeEventListener("sessionend",Dn),Un.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let M=dt.autoReset,D=pe.enabled,L=pe.autoUpdate,O=pe.needsUpdate,U=pe.type;me(),dt.autoReset=M,pe.enabled=D,pe.autoUpdate=L,pe.needsUpdate=O,pe.type=U}function xe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ge(M){let D=M.target;D.removeEventListener("dispose",Ge),yt(D)}function yt(M){_t(M),Ue.remove(M)}function _t(M){let D=Ue.get(M).programs;D!==void 0&&(D.forEach(function(L){Ce.releaseProgram(L)}),M.isShaderMaterial&&Ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,L,O,U,ie){D===null&&(D=st);let ne=U.isMesh&&U.matrixWorld.determinant()<0,de=be(M,D,L,O,U);_e.setMaterial(O,ne);let we=L.index,ke=1;if(O.wireframe===!0){if(we=ee.getWireframeAttribute(L),we===void 0)return;ke=2}let qe=L.drawRange,Re=L.attributes.position,Ye=qe.start*ke,mt=(qe.start+qe.count)*ke;ie!==null&&(Ye=Math.max(Ye,ie.start*ke),mt=Math.min(mt,(ie.start+ie.count)*ke)),we!==null?(Ye=Math.max(Ye,0),mt=Math.min(mt,we.count)):Re!=null&&(Ye=Math.max(Ye,0),mt=Math.min(mt,Re.count));let ot=mt-Ye;if(ot<0||ot===1/0)return;$e.setup(U,O,de,L,we);let Bt,it=ve;if(we!==null&&(Bt=Z.get(we),it=Je,it.setIndex(Bt)),U.isMesh)O.wireframe===!0?(_e.setLineWidth(O.wireframeLinewidth*pt()),it.setMode(B.LINES)):it.setMode(B.TRIANGLES);else if(U.isLine){let ye=O.linewidth;ye===void 0&&(ye=1),_e.setLineWidth(ye*pt()),U.isLineSegments?it.setMode(B.LINES):U.isLineLoop?it.setMode(B.LINE_LOOP):it.setMode(B.LINE_STRIP)}else U.isPoints?it.setMode(B.POINTS):U.isSprite&&it.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ye=U._multiDrawStarts,Be=U._multiDrawCounts,je=U._multiDrawCount,It=we?Z.get(we).bytesPerElement:1,on=Ue.get(O).currentProgram.getUniforms();for(let Ut=0;Ut<je;Ut++)on.setValue(B,"_gl_DrawID",Ut),it.render(ye[Ut]/It,Be[Ut])}else if(U.isInstancedMesh)it.renderInstances(Ye,ot,U.count);else if(L.isInstancedBufferGeometry){let ye=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Be=Math.min(L.instanceCount,ye);it.renderInstances(Ye,ot,Be)}else it.render(Ye,ot)};function ze(M,D,L){M.transparent===!0&&M.side===Wn&&M.forceSinglePass===!1?(M.side=jt,M.needsUpdate=!0,se(M,D,L),M.side=ki,M.needsUpdate=!0,se(M,D,L),M.side=Wn):se(M,D,L)}this.compile=function(M,D,L=null){L===null&&(L=M),h=rt.get(L),h.init(D),A.push(h),L.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),M!==L&&M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();let O=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ie=U.material;if(ie)if(Array.isArray(ie))for(let ne=0;ne<ie.length;ne++){let de=ie[ne];ze(de,L,U),O.add(de)}else ze(ie,L,U),O.add(ie)}),A.pop(),h=null,O},this.compileAsync=function(M,D,L=null){let O=this.compile(M,D,L);return new Promise(U=>{function ie(){if(O.forEach(function(ne){Ue.get(ne).currentProgram.isReady()&&O.delete(ne)}),O.size===0){U(M);return}setTimeout(ie,10)}Ke.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ct=null;function Yt(M){Ct&&Ct(M)}function Ht(){Un.stop()}function Dn(){Un.start()}let Un=new hu;Un.setAnimationLoop(Yt),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(M){Ct=M,Y.setAnimationLoop(M),M===null?Un.stop():Un.start()},Y.addEventListener("sessionstart",Ht),Y.addEventListener("sessionend",Dn),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,D,C),h=rt.get(M,A.length),h.init(D),A.push(h),Oe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Q.setFromProjectionMatrix(Oe),Te=this.localClippingEnabled,ae=re.init(this.clippingPlanes,Te),m=ue.get(M,b.length),m.init(),b.push(m),Y.enabled===!0&&Y.isPresenting===!0){let ie=x.xr.getDepthSensingMesh();ie!==null&&Ii(ie,D,-1/0,x.sortObjects)}Ii(M,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,Se),et=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,et&&De.addToRenderList(m,M),this.info.render.frame++,ae===!0&&re.beginShadows();let L=h.state.shadowsArray;pe.render(L,M,D),ae===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,U=m.transmissive;if(h.setupLights(),D.isArrayCamera){let ie=D.cameras;if(U.length>0)for(let ne=0,de=ie.length;ne<de;ne++){let we=ie[ne];T(O,U,M,we)}et&&De.render(M);for(let ne=0,de=ie.length;ne<de;ne++){let we=ie[ne];Dt(m,M,we,we.viewport)}}else U.length>0&&T(O,U,M,D),et&&De.render(M),Dt(m,M,D);C!==null&&(_.updateMultisampleRenderTarget(C),_.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,D),$e.resetDefaultState(),w=-1,S=null,A.pop(),A.length>0?(h=A[A.length-1],ae===!0&&re.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ii(M,D,L,O){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)L=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){O&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Oe);let ne=K.update(M),de=M.material;de.visible&&m.push(M,ne,de,L,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Q.intersectsObject(M))){let ne=K.update(M),de=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),We.copy(ne.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(Oe)),Array.isArray(de)){let we=ne.groups;for(let ke=0,qe=we.length;ke<qe;ke++){let Re=we[ke],Ye=de[Re.materialIndex];Ye&&Ye.visible&&m.push(M,ne,Ye,L,We.z,Re)}}else de.visible&&m.push(M,ne,de,L,We.z,null)}}let ie=M.children;for(let ne=0,de=ie.length;ne<de;ne++)Ii(ie[ne],D,L,O)}function Dt(M,D,L,O){let U=M.opaque,ie=M.transmissive,ne=M.transparent;h.setupLightsView(L),ae===!0&&re.setGlobalState(x.clippingPlanes,L),O&&_e.viewport(P.copy(O)),U.length>0&&H(U,D,L),ie.length>0&&H(ie,D,L),ne.length>0&&H(ne,D,L),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function T(M,D,L,O){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[O.id]===void 0&&(h.state.transmissionRenderTarget[O.id]=new qt(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Rn:Ei,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let ie=h.state.transmissionRenderTarget[O.id],ne=O.viewport||P;ie.setSize(ne.z,ne.w);let de=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(z),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),et&&De.render(L);let we=x.toneMapping;x.toneMapping=li;let ke=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),h.setupLightsView(O),ae===!0&&re.setGlobalState(x.clippingPlanes,O),H(M,L,O),_.updateMultisampleRenderTarget(ie),_.updateRenderTargetMipmap(ie),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Re=0,Ye=D.length;Re<Ye;Re++){let mt=D[Re],ot=mt.object,Bt=mt.geometry,it=mt.material,ye=mt.group;if(it.side===Wn&&ot.layers.test(O.layers)){let Be=it.side;it.side=jt,it.needsUpdate=!0,j(ot,L,O,Bt,it,ye),it.side=Be,it.needsUpdate=!0,qe=!0}}qe===!0&&(_.updateMultisampleRenderTarget(ie),_.updateRenderTargetMipmap(ie))}x.setRenderTarget(de),x.setClearColor(z,q),ke!==void 0&&(O.viewport=ke),x.toneMapping=we}function H(M,D,L){let O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ie=M.length;U<ie;U++){let ne=M[U],de=ne.object,we=ne.geometry,ke=O===null?ne.material:O,qe=ne.group;de.layers.test(L.layers)&&j(de,D,L,we,ke,qe)}}function j(M,D,L,O,U,ie){M.onBeforeRender(x,D,L,O,U,ie),M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(x,D,L,O,M,ie),U.transparent===!0&&U.side===Wn&&U.forceSinglePass===!1?(U.side=jt,U.needsUpdate=!0,x.renderBufferDirect(L,D,O,U,M,ie),U.side=ki,U.needsUpdate=!0,x.renderBufferDirect(L,D,O,U,M,ie),U.side=Wn):x.renderBufferDirect(L,D,O,U,M,ie),M.onAfterRender(x,D,L,O,U,ie)}function se(M,D,L){D.isScene!==!0&&(D=st);let O=Ue.get(M),U=h.state.lights,ie=h.state.shadowsArray,ne=U.state.version,de=Ce.getParameters(M,U.state,ie,D,L),we=Ce.getProgramCacheKey(de),ke=O.programs;O.environment=M.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(M.isMeshStandardMaterial?V:y).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,ke===void 0&&(M.addEventListener("dispose",Ge),ke=new Map,O.programs=ke);let qe=ke.get(we);if(qe!==void 0){if(O.currentProgram===qe&&O.lightsStateVersion===ne)return Ae(M,de),qe}else de.uniforms=Ce.getUniforms(M),M.onBeforeCompile(de,x),qe=Ce.acquireProgram(de,we),ke.set(we,qe),O.uniforms=de.uniforms;let Re=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=re.uniform),Ae(M,de),O.needsLights=Ne(M),O.lightsStateVersion=ne,O.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=qe,O.uniformsList=null,qe}function le(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Fs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Ae(M,D){let L=Ue.get(M);L.outputColorSpace=D.outputColorSpace,L.batching=D.batching,L.batchingColor=D.batchingColor,L.instancing=D.instancing,L.instancingColor=D.instancingColor,L.instancingMorph=D.instancingMorph,L.skinning=D.skinning,L.morphTargets=D.morphTargets,L.morphNormals=D.morphNormals,L.morphColors=D.morphColors,L.morphTargetsCount=D.morphTargetsCount,L.numClippingPlanes=D.numClippingPlanes,L.numIntersection=D.numClipIntersection,L.vertexAlphas=D.vertexAlphas,L.vertexTangents=D.vertexTangents,L.toneMapping=D.toneMapping}function be(M,D,L,O,U){D.isScene!==!0&&(D=st),_.resetTextureUnits();let ie=D.fog,ne=O.isMeshStandardMaterial?D.environment:null,de=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ks,we=(O.isMeshStandardMaterial?V:y).get(O.envMap||ne),ke=O.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,qe=!!L.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Re=!!L.morphAttributes.position,Ye=!!L.morphAttributes.normal,mt=!!L.morphAttributes.color,ot=li;O.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ot=x.toneMapping);let Bt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,it=Bt!==void 0?Bt.length:0,ye=Ue.get(O),Be=h.state.lights;if(ae===!0&&(Te===!0||M!==S)){let Wt=M===S&&O.id===w;re.setState(O,M,Wt)}let je=!1;O.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Be.state.version||ye.outputColorSpace!==de||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==we||O.fog===!0&&ye.fog!==ie||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==re.numPlanes||ye.numIntersection!==re.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==qe||ye.morphTargets!==Re||ye.morphNormals!==Ye||ye.morphColors!==mt||ye.toneMapping!==ot||ye.morphTargetsCount!==it)&&(je=!0):(je=!0,ye.__version=O.version);let It=ye.currentProgram;je===!0&&(It=se(O,D,U));let on=!1,Ut=!1,xn=!1,ft=It.getUniforms(),Nt=ye.uniforms;if(_e.useProgram(It.program)&&(on=!0,Ut=!0,xn=!0),O.id!==w&&(w=O.id,Ut=!0),on||S!==M){_e.buffers.depth.getReversed()?(fe.copy(M.projectionMatrix),$d(fe),ef(fe),ft.setValue(B,"projectionMatrix",fe)):ft.setValue(B,"projectionMatrix",M.projectionMatrix),ft.setValue(B,"viewMatrix",M.matrixWorldInverse);let Jn=ft.map.cameraPosition;Jn!==void 0&&Jn.setValue(B,Pe.setFromMatrixPosition(M.matrixWorld)),Xe.logarithmicDepthBuffer&&ft.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ft.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ut=!0,xn=!0)}if(U.isSkinnedMesh){ft.setOptional(B,U,"bindMatrix"),ft.setOptional(B,U,"bindMatrixInverse");let Wt=U.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ft.setValue(B,"boneTexture",Wt.boneTexture,_))}U.isBatchedMesh&&(ft.setOptional(B,U,"batchingTexture"),ft.setValue(B,"batchingTexture",U._matricesTexture,_),ft.setOptional(B,U,"batchingIdTexture"),ft.setValue(B,"batchingIdTexture",U._indirectTexture,_),ft.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(B,"batchingColorTexture",U._colorsTexture,_));let Nn=L.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Fe.update(U,L,It),(Ut||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,ft.setValue(B,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Nt.envMap.value=we,Nt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Nt.envMapIntensity.value=D.environmentIntensity),Ut&&(ft.setValue(B,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&Ve(Nt,xn),ie&&O.fog===!0&&ge.refreshFogUniforms(Nt,ie),ge.refreshMaterialUniforms(Nt,O,W,J,h.state.transmissionRenderTarget[M.id]),Fs.upload(B,le(ye),Nt,_)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Fs.upload(B,le(ye),Nt,_),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ft.setValue(B,"center",U.center),ft.setValue(B,"modelViewMatrix",U.modelViewMatrix),ft.setValue(B,"normalMatrix",U.normalMatrix),ft.setValue(B,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Wt=O.uniformsGroups;for(let Jn=0,jn=Wt.length;Jn<jn;Jn++){let ln=Wt[Jn];N.update(ln,It),N.bind(ln,It)}}return It}function Ve(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ne(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,D,L){Ue.get(M.texture).__webglTexture=D,Ue.get(M.depthTexture).__webglTexture=L;let O=Ue.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=L===void 0,O.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){let L=Ue.get(M);L.__webglFramebuffer=D,L.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,L=0){C=M,E=D,R=L;let O=!0,U=null,ie=!1,ne=!1;if(M){let we=Ue.get(M);if(we.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(B.FRAMEBUFFER,null),O=!1;else if(we.__webglFramebuffer===void 0)_.setupRenderTarget(M);else if(we.__hasExternalTextures)_.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Re=M.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&Ue.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(M)}}let ke=M.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ne=!0);let qe=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qe[D])?U=qe[D][L]:U=qe[D],ie=!0):M.samples>0&&_.useMultisampledRTT(M)===!1?U=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(qe)?U=qe[L]:U=qe,P.copy(M.viewport),X.copy(M.scissor),k=M.scissorTest}else P.copy(Le).multiplyScalar(W).floor(),X.copy(Qe).multiplyScalar(W).floor(),k=ct;if(_e.bindFramebuffer(B.FRAMEBUFFER,U)&&O&&_e.drawBuffers(M,U),_e.viewport(P),_e.scissor(X),_e.setScissorTest(k),ie){let we=Ue.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,L)}else if(ne){let we=Ue.get(M.texture),ke=D||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,L||0,ke)}w=-1},this.readRenderTargetPixels=function(M,D,L,O,U,ie,ne){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de){_e.bindFramebuffer(B.FRAMEBUFFER,de);try{let we=M.texture,ke=we.format,qe=we.type;if(!Xe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-O&&L>=0&&L<=M.height-U&&B.readPixels(D,L,O,U,He.convert(ke),He.convert(qe),ie)}finally{let we=C!==null?Ue.get(C).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,D,L,O,U,ie,ne){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de){let we=M.texture,ke=we.format,qe=we.type;if(!Xe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-O&&L>=0&&L<=M.height-U){_e.bindFramebuffer(B.FRAMEBUFFER,de);let Re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.bufferData(B.PIXEL_PACK_BUFFER,ie.byteLength,B.STREAM_READ),B.readPixels(D,L,O,U,He.convert(ke),He.convert(qe),0);let Ye=C!==null?Ue.get(C).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Ye);let mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jd(B,mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ie),B.deleteBuffer(Re),B.deleteSync(mt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,L=0){M.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);let O=Math.pow(2,-L),U=Math.floor(M.image.width*O),ie=Math.floor(M.image.height*O),ne=D!==null?D.x:0,de=D!==null?D.y:0;_.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,L,0,0,ne,de,U,ie),_e.unbindTexture()},this.copyTextureToTexture=function(M,D,L=null,O=null,U=0){M.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],D=arguments[2],U=arguments[3]||0,L=null);let ie,ne,de,we,ke,qe,Re,Ye,mt,ot=M.isCompressedTexture?M.mipmaps[U]:M.image;L!==null?(ie=L.max.x-L.min.x,ne=L.max.y-L.min.y,de=L.isBox3?L.max.z-L.min.z:1,we=L.min.x,ke=L.min.y,qe=L.isBox3?L.min.z:0):(ie=ot.width,ne=ot.height,de=ot.depth||1,we=0,ke=0,qe=0),O!==null?(Re=O.x,Ye=O.y,mt=O.z):(Re=0,Ye=0,mt=0);let Bt=He.convert(D.format),it=He.convert(D.type),ye;D.isData3DTexture?(_.setTexture3D(D,0),ye=B.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(_.setTexture2DArray(D,0),ye=B.TEXTURE_2D_ARRAY):(_.setTexture2D(D,0),ye=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,D.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,D.unpackAlignment);let Be=B.getParameter(B.UNPACK_ROW_LENGTH),je=B.getParameter(B.UNPACK_IMAGE_HEIGHT),It=B.getParameter(B.UNPACK_SKIP_PIXELS),on=B.getParameter(B.UNPACK_SKIP_ROWS),Ut=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,we),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qe);let xn=M.isDataArrayTexture||M.isData3DTexture,ft=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let Nt=Ue.get(M),Nn=Ue.get(D),Wt=Ue.get(Nt.__renderTarget),Jn=Ue.get(Nn.__renderTarget);_e.bindFramebuffer(B.READ_FRAMEBUFFER,Wt.__webglFramebuffer),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let jn=0;jn<de;jn++)xn&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(M).__webglTexture,U,qe+jn),M.isDepthTexture?(ft&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(D).__webglTexture,U,mt+jn),B.blitFramebuffer(we,ke,ie,ne,Re,Ye,ie,ne,B.DEPTH_BUFFER_BIT,B.NEAREST)):ft?B.copyTexSubImage3D(ye,U,Re,Ye,mt+jn,we,ke,ie,ne):B.copyTexSubImage2D(ye,U,Re,Ye,mt+jn,we,ke,ie,ne);_e.bindFramebuffer(B.READ_FRAMEBUFFER,null),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ft?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(ye,U,Re,Ye,mt,ie,ne,de,Bt,it,ot.data):D.isCompressedArrayTexture?B.compressedTexSubImage3D(ye,U,Re,Ye,mt,ie,ne,de,Bt,ot.data):B.texSubImage3D(ye,U,Re,Ye,mt,ie,ne,de,Bt,it,ot):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,U,Re,Ye,ie,ne,Bt,it,ot.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,U,Re,Ye,ot.width,ot.height,Bt,ot.data):B.texSubImage2D(B.TEXTURE_2D,U,Re,Ye,ie,ne,Bt,it,ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,Be),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je),B.pixelStorei(B.UNPACK_SKIP_PIXELS,It),B.pixelStorei(B.UNPACK_SKIP_ROWS,on),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ut),U===0&&D.generateMipmaps&&B.generateMipmap(ye),_e.unbindTexture()},this.copyTextureToTexture3D=function(M,D,L=null,O=null,U=0){return M.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),L=arguments[0]||null,O=arguments[1]||null,M=arguments[2],D=arguments[3],U=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,L,O,U)},this.initRenderTarget=function(M){Ue.get(M).__webglFramebuffer===void 0&&_.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?_.setTextureCube(M,0):M.isData3DTexture?_.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_.setTexture2DArray(M,0):_.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,_e.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var _r=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Nl=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tn,u=Tn,d,p){super(null,a,o,l,c,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ri=class extends _n{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new bt,kh=new bt,ca=[],zh=new Ti,Q0=new bt,mr=new at,gr=new os,Ra=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),zh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(zh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),gr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),kh.multiplyMatrices(n,Ps),mr.matrixWorld=kh,mr.raycast(e,ca);for(let a=0,o=ca.length;a<o;a++){let l=ca[a];l.instanceId=r,l.object=this,t.push(l)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(s*this.count),s,this.count,ec,ri));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qs=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],a=[],o=new F,l=new bt;for(let f=0;f<=e;f++){let v=f/e;s[f]=this.getTangentAt(v,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Vh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}var Ca=class extends Fl{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Vh(o,l.x,c.x,u.x,d.x),Vh(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}};var Rr=class i extends $t{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ot(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new F,p=new Ee,f=new F,v=new F,g=new F,m=0,h=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,h=e[b+1].y-e[b].y,f.x=h*1,f.y=-m,f.z=h*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[b+1].x-e[b].x,h=e[b+1].y-e[b].y,f.x=h*1,f.y=-m,f.z=h*0,v.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(v)}for(let b=0;b<=t;b++){let A=n+b*u*s,x=Math.sin(A),I=Math.cos(A);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*x,d.y=e[E].y,d.z=e[E].x*I,a.push(d.x,d.y,d.z),p.x=b/t,p.y=E/(e.length-1),o.push(p.x,p.y);let R=l[3*E+0]*x,C=l[3*E+1],w=l[3*E+0]*I;c.push(R,C,w)}}for(let b=0;b<t;b++)for(let A=0;A<e.length-1;A++){let x=A+b*e.length,I=x,E=x+e.length,R=x+e.length+1,C=x+1;r.push(I,E,C),r.push(R,C,E)}this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("uv",new gt(o,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Cr=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],f=[],v=0,g=[],m=n/2,h=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(p,3)),this.setAttribute("uv",new gt(f,2));function b(){let x=new F,I=new F,E=0,R=(t-e)/n;for(let C=0;C<=r;C++){let w=[],S=C/r,P=S*(t-e)+e;for(let X=0;X<=s;X++){let k=X/s,z=k*l+o,q=Math.sin(z),G=Math.cos(z);I.x=P*q,I.y=-S*n+m,I.z=P*G,d.push(I.x,I.y,I.z),x.set(q,R,G).normalize(),p.push(x.x,x.y,x.z),f.push(k,1-S),w.push(v++)}g.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){let S=g[w][C],P=g[w+1][C],X=g[w+1][C+1],k=g[w][C+1];(e>0||w!==0)&&(u.push(S,P,k),E+=3),(t>0||w!==r-1)&&(u.push(P,X,k),E+=3)}c.addGroup(h,E,0),h+=E}function A(x){let I=v,E=new Ee,R=new F,C=0,w=x===!0?e:t,S=x===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,m*S,0),p.push(0,S,0),f.push(.5,.5),v++;let P=v;for(let X=0;X<=s;X++){let z=X/s*l+o,q=Math.cos(z),G=Math.sin(z);R.x=w*G,R.y=m*S,R.z=w*q,d.push(R.x,R.y,R.z),p.push(0,S,0),E.x=q*.5+.5,E.y=G*.5*S+.5,f.push(E.x,E.y),v++}for(let X=0;X<s;X++){let k=I+X,z=P+X;x===!0?u.push(z,z+1,k):u.push(z+1,z,k),C+=3}c.addGroup(h,C,x===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ia=class i extends $t{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,p=(t-e)/s,f=new F,v=new Ee;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let h=r+m/n*a;f.x=d*Math.cos(h),f.y=d*Math.sin(h),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,u.push(v.x,v.y)}d+=p}for(let g=0;g<s;g++){let m=g*(n+1);for(let h=0;h<n;h++){let b=h+m,A=b,x=b+n+1,I=b+n+2,E=b+1;o.push(A,x,E),o.push(x,I,E)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ir=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new F,p=new F,f=[],v=[],g=[],m=[];for(let h=0;h<=n;h++){let b=[],A=h/n,x=0;h===0&&a===0?x=.5/t:h===n&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){let E=I/t;d.x=-e*Math.cos(s+E*r)*Math.sin(a+A*o),d.y=e*Math.cos(a+A*o),d.z=e*Math.sin(s+E*r)*Math.sin(a+A*o),v.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),m.push(E+x,1-A),b.push(c++)}u.push(b)}for(let h=0;h<n;h++)for(let b=0;b<t;b++){let A=u[h][b+1],x=u[h][b],I=u[h+1][b],E=u[h+1][b+1];(h!==0||a>0)&&f.push(A,x,E),(h!==n-1||l<Math.PI)&&f.push(x,I,E)}this.setIndex(f),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pa=class i extends $t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new F,d=new F,p=new F;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){let g=v/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(v/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){let g=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,h=(s+1)*(f-1)+v,b=(s+1)*f+v;a.push(g,m,b),a.push(m,h,b)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Pr=class extends ls{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ci=class extends Pr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ha(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Z0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ys=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends Ys{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gc:r=e,o=2*t-n;break;case Wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gc:a=e,l=2*n-t;break;case Wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,v=(n-t)/(s-t),g=v*v,m=g*v,h=-p*m+2*p*g-p*v,b=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*v+1,A=(-1-f)*m+(1.5+f)*g+.5*v,x=f*m-f*g;for(let I=0;I!==o;++I)r[I]=h*a[u+I]+b*a[c+I]+A*a[l+I]+x*a[d+I];return r}},Ol=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*d+a[l+p]*u;return r}},kl=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Z0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ao,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,p=d-n,f=d+n;for(let v=0;v!==n;++v){let g=t[d+v];if(g!==t[p+v]||g!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=xl;var hs=class extends Qn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ga;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Qn{};zl.prototype.ValueTypeName="color";var Vl=class extends Qn{};Vl.prototype.ValueTypeName="number";var Hl=class extends Ys{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Hi.slerpFlat(r,0,a,c-o,a,c,l);return r}},La=class extends Qn{InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};La.prototype.ValueTypeName="quaternion";La.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Qn{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=ga;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends Qn{};Gl.prototype.ValueTypeName="vector";var Wl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let f=c[d],v=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}},K0=new Wl,Xl=class{constructor(e){this.manager=e!==void 0?e:K0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ql=class extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Uo=new bt,Hh=new F,Gh=new F,Yl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ql=class extends Yl{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Da=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Wh(){return performance.now()}var ac="\\[\\]\\.:\\/",J0=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",j0="[^"+ac.replace("\\.","")+"]",$0=/((?:WC+[\/:])*)/.source.replace("WC",oc),ev=/(WCOD+)?/.source.replace("WCOD",j0),tv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),iv=new RegExp("^"+$0+ev+tv+nv+"$"),sv=["material","materials","bones","map"],Zl=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){let t=iv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Zl;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dx=new Float32Array(1);var Xh=new bt,Ua=class{constructor(e,t,n=0,s=1/0){this.ray=new ba(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xh),this}intersectObject(e,t=!0,n=[]){return Kl(e,this,n,t),n.sort(qh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kl(e[s],this,n,t);return n.sort(qh),n}};function qh(i,e){return i.distance-e.distance}function Kl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Kl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},av=new Ws(-1,1,1,-1,0,1),lc=class extends $t{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},ov=new lc,er=class{constructor(e){this._mesh=new at(ov,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var tr=class extends Zn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new er(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Dr=class extends Zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ha=class extends Zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ga=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tr(Va),this.copyPass.material.blending=oi,this.clock=new Da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dr!==void 0&&(a instanceof Dr?n=!0:a instanceof Ha&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wa=class extends Zn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var mu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var nr=class i extends Zn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,a,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new qt(r,a,{type:Rn});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new qt(r,a,{type:Rn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=mu;this.highPassUniforms=js.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ee(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Va;this.copyUniforms=js.clone(u.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new Yn,this.fsQuad=new er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ee(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};nr.BlurDirectionX=new Ee(1,0);nr.BlurDirectionY=new Ee(0,1);var lv="#7bb1b0",cv="#6b9893",hv="#b2cfd9",uv="rgba(226,238,233,0.34)",dv="#7a478a",fv="#ffffff";async function gu(i,e,t){let s=(await(await fetch(i)).text()).replace("<svg ",`<svg width="${e}" height="${t}" preserveAspectRatio="xMidYMid meet" `),r=new Blob([s],{type:"image/svg+xml"}),a=URL.createObjectURL(r),o=new Image;return o.decoding="async",o.src=a,await o.decode(),o}function vu(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}async function xu(i,e=3072,t=1500){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d"),r=e/2,a=e/3,o=e/(360*.97),l=q=>r+q*o,c=[l(6),t*.79],u=[l(-58),t*.44],d=[l(62),t*.46],p=(q,G)=>{let J=G[0]-q[0],W=G[1]-q[1],ce=Math.hypot(J,W);return[J/ce,W/ce]},f=p(c,u),v=p(c,d),g=(q,G,J)=>[q[0]+G[0]*J,q[1]+G[1]*J],m=[f[1],-f[0]],h=(q,G)=>[q[0]+m[0]*G,q[1]+m[1]*G],b=e,A=g(c,v,-(t+10-c[1])/-v[1]);s.fillStyle=lv,s.fillRect(0,0,e,t),s.fillStyle=cv,s.beginPath(),s.moveTo(...c),s.lineTo(...g(c,v,b)),s.lineTo(e+10,t+10),s.lineTo(...A),s.closePath(),s.fill();let x=150,I=13;s.save(),s.beginPath(),s.moveTo(...g(c,f,b)),s.lineTo(...c),s.lineTo(...A),s.lineTo(l(-125),t+10),s.lineTo(l(-125),-10),s.closePath(),s.clip(),s.fillStyle=hv,s.beginPath(),s.moveTo(...g(c,f,b)),s.lineTo(...g(c,f,-b)),s.lineTo(...h(g(c,f,-b),x)),s.lineTo(...h(g(c,f,b),x)),s.closePath(),s.fill(),s.fillStyle=dv,s.beginPath(),s.moveTo(...h(g(c,f,b),x-I)),s.lineTo(...h(g(c,f,-b),x-I)),s.lineTo(...h(g(c,f,-b),x)),s.lineTo(...h(g(c,f,b),x)),s.closePath(),s.fill(),s.strokeStyle=uv,s.lineWidth=5,s.lineCap="butt";for(let q=0;q<26;q++){let G=x+24+q*27;s.beginPath(),s.moveTo(...h(g(c,f,b),G)),s.lineTo(...h(g(c,f,-b),G)),s.stroke()}s.restore(),s.strokeStyle="rgba(255,255,255,0.10)",s.lineWidth=2,s.beginPath(),s.moveTo(...g(c,f,b)),s.lineTo(...c),s.stroke();let[E,R]=await Promise.all([gu(i("logo-mark-white.svg"),600,600),gu(i("logo-wordmark-white.svg"),1071,302)]);try{await Promise.all([document.fonts.load("700 60px Philosopher"),document.fonts.load("400 60px Philosopher"),document.fonts.load('500 40px "Roboto Flex"')])}catch{}let C=30*o;s.drawImage(E,r-C/2,t*.072,C,C);let w=79*o,S=w*302/1071;s.drawImage(R,r-w/2+w*.025,t*.285,w,S),s.fillStyle=fv,s.textAlign="center",s.textBaseline="alphabetic";let P=(q,G,J)=>{s.font=G(100);let W=s.measureText(q).width;return G(Math.round(100*J/W))};"letterSpacing"in s&&(s.letterSpacing="0px"),s.font=P("CBD SKIN CARE",q=>`500 ${q}px "Roboto Flex", Arial, sans-serif`,a*.42),s.fillText("CBD SKIN CARE",r,t*.525),s.font=P("CBD SKIN OIL",q=>`700 ${q}px Philosopher, Georgia, serif`,a*.5),s.fillText("CBD SKIN OIL",r,t*.605),s.font=P("1000 mg",q=>`700 ${q}px Philosopher, Georgia, serif`,a*.19),s.fillText("1000 mg",r,t*.66),s.textAlign="right";let X=l(50);s.font=`400 ${Math.round(a*.04)}px "Roboto Flex", Arial, sans-serif`,s.fillText("For all skin types",X,t*.85),s.font=`500 ${Math.round(a*.043)}px "Roboto Flex", Arial, sans-serif`,s.fillText("Contains natural &",X,t*.892),s.fillText("organic ingredients",X,t*.929),s.font=`400 ${Math.round(a*.03)}px "Roboto Flex", Arial, sans-serif`,s.fillText("30 ml/1 oz \u212E",X,t*.968),s.fillStyle="rgba(255,255,255,0.55)";let k=vu(7);for(let q of[l(-168),l(124)])for(let G=0;G<22;G++){let J=a*(.32+k()*.22);s.fillRect(q,t*.22+G*t*.026,J,t*.008)}let z=vu(11);s.globalCompositeOperation="soft-light";for(let q=0;q<9e3;q++){let G=z()*e,J=z()*t,W=z()*.08;s.fillStyle=z()>.5?`rgba(255,255,255,${W})`:`rgba(0,0,0,${W})`,s.fillRect(G,J,1+z()*3,1+z()*1.5)}return s.globalCompositeOperation="source-over",n}function yu(i){let t=Math.round(1024*i.height/i.width),n=document.createElement("canvas");n.width=1024,n.height=t;let s=n.getContext("2d");s.drawImage(i,0,0,1024,t);let r=s.getImageData(0,0,1024,t),a=r.data;for(let o=0;o<a.length;o+=4){let l=(a[o]+a[o+1]+a[o+2])/3,u=205-Math.max(0,(l-200)/55)*95;a[o]=a[o+1]=a[o+2]=u}return s.putImageData(r,0,0),n}var ut=i=>new Ze(i),ds=Math.PI*2,Cn=(i,e,t)=>Math.min(t,Math.max(e,i)),vn=(i,e,t)=>{let n=Cn((t-i)/(e-i),0,1);return n*n*(3-2*n)},pv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,gn=1.35,ir=0,Xa=.57,Ur=new F(-.5,7.3,.75),Kn=5.9;function sr(i,e=96,t=0){let n=i.map(([r,a])=>new Ee(r,a));t&&(n=new Ca(n).getSpacedPoints(t));let s=new Rr(n,e);return s.computeVertexNormals(),s}function mv(i,e,t,n,s=360){let r=new Cr(i,i,e,s,6,!0),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getZ(o),u=a.getY(o),d=Math.atan2(l,c),p=Math.pow(Math.abs(Math.cos(d*t*.5)),.6),f=vn(e/2,e/2-.08,Math.abs(u)),g=(i-n+n*p*f+n*(1-f)*.5)/Math.hypot(l,c);a.setX(o,l*g),a.setZ(o,c*g)}return r.computeVertexNormals(),r}function gv(i,e,t=44,n=128,s=3){let r=[],a=[],o=[],l=u=>i*(1+.075*Math.sin(2*u+s)+.05*Math.sin(3*u+1.7*s)+.022*Math.sin(5*u+.3)+.012*Math.sin(9*u+2.1));r.push(0,e,0),o.push(0);for(let u=1;u<=t;u++){let d=Math.pow(u/t,.8);for(let p=0;p<n;p++){let f=p/n*ds,v=l(f)*d,g=e*Math.pow(Math.max(0,1-d*d),.55);r.push(Math.sin(f)*v,g,Math.cos(f)*v),o.push(d)}}for(let u=0;u<n;u++)a.push(0,1+u,1+(u+1)%n);for(let u=1;u<t;u++){let d=1+(u-1)*n,p=1+u*n;for(let f=0;f<n;f++){let v=(f+1)%n;a.push(d+f,p+f,p+v,d+f,p+v,d+v)}}let c=new $t;return c.setAttribute("position",new gt(r,3)),c.setAttribute("aT",new gt(o,1)),c.setIndex(a),c.computeVertexNormals(),c}function qa(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new qs(t);return r.colorSpace=Xn,r}function vv(i){let e=new _r,t=new at(new cs(60,30,60),new Yn({color:ut("#28403b").multiplyScalar(.55),side:jt}));t.position.y=10,e.add(t);let n=new at(new _i(60,60),new Yn({color:ut("#28403b").multiplyScalar(.35)}));n.rotation.x=-Math.PI/2,n.position.y=-2,e.add(n);let s=(o,l,c,u,d)=>{let p=new at(new _i(o,l),new Yn({color:ut(u).multiplyScalar(d),side:Wn}));return p.position.set(...c),p.lookAt(0,4,0),e.add(p),p};s(11,8,[-15,13,12],"#fff0dc",7),s(2.6,18,[-17,7,-9],"#fff7ee",4.2),s(2.2,18,[16,7,-5],"#eef3ee",3),s(18,18,[0,24,2],"#f6efe4",.7),s(14,5,[6,3,18],"#ddbfa3",.55),s(6,4.5,[-7,4.4,-22],"#f6e2c4",1.9),s(2.5,4.5,[5,4.4,-22],"#f3ece2",1.5);let r=new Xs(i),a=r.fromScene(e,.03).texture;return r.dispose(),e.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a}var xv=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.99999, 1.0); }`,yv=`
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
    float fade = smoothstep(0.06, 0.22, tt) * smoothstep(1.0, 0.7, tt);   // emerges from nothing below the section top
    col = mix(col, uThread, line * fade * uThreadAlpha);
    gl_FragColor = vec4(col, 1.0);
  }`,Mv=`
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
  }`,bv=`
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
  }`,Sv=`
  attribute float aT;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ;
  void main(){
    vT = aT; vXZ = position.xz;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWN = normalize(mat3(modelMatrix) * normal);
    vWV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,wv=`
  precision highp float;
  uniform vec3 uSigma; uniform float uFeather;
  varying float vT; varying vec3 vWN; varying vec3 vWV; varying vec2 vXZ;
  void main(){
    float ndv = max(abs(dot(normalize(vWN), normalize(vWV))), 0.16);
    float thick = 1.0 - smoothstep(0.35, 1.0, vT);                       // film thins toward the rim
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
  }`,Av={uniforms:{tDiffuse:{value:null},uRes:{value:new Ee(1,1)},uTime:{value:0},uVig:{value:.32},uVigCenter:{value:new Ee(.62,.52)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};async function Mu({canvas:i,host:e,asset:t,reduced:n,onFrame:s,onFirstFrame:r}){let a=new _a({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});a.toneMapping=li,a.setClearColor(ut("#28403b"),1);let o=Oc();a.setPixelRatio(o);let l=new _r,c=new an(20,1,1,200),u=vv(a);l.environment=u;let d={uRes:{value:new Ee(1,1)},uDpr:{value:o},uNight:{value:ut("#28403b")},uDeep:{value:ut("#213631")},uWarm:{value:ut("#ddbfa3")},uAmber:{value:ut("#c7ae92")},uSage:{value:ut("#9ab4ac")},uThread:{value:ut("#b07a7f")},uGlow:{value:new Ee},uGlowR:{value:400},uPool:{value:new Ee},uPoolR:{value:new Ee(300,60)},uTA:{value:new Ee},uTB:{value:new Ee},uThreadAlpha:{value:.36}},p=new at(new _i(2,2),new Tt({uniforms:d,vertexShader:xv,fragmentShader:yv,depthWrite:!1,depthTest:!1}));p.frustumCulled=!1,p.renderOrder=-100,l.add(p);let f=new Qs(ut("#fff1e0"),2.5);f.position.set(-7,9,8),l.add(f);let v=new Qs(ut("#b6c9c2"),.25);v.position.set(6,2,6),l.add(v);let g=new Qs(ut("#ffe6c4"),1.6);g.position.set(3,6,-10),l.add(g);let m=new Ci({color:16777215,metalness:0,roughness:.035,transmission:1,ior:1.52,thickness:1.25,attenuationColor:ut("#a24a12"),attenuationDistance:.85,specularIntensity:1,envMapIntensity:1.35}),h={uAxis:{value:new F(0,1,0)},uK1:{value:new F(-17,7,-9).normalize()},uK2:{value:new F(-7,9,8).normalize()},uK3:{value:new F(16,7,-5).normalize()}},b=new Tt({uniforms:h,transparent:!0,depthWrite:!1,blending:zi,vertexShader:`
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
        float lenFade = smoothstep(-${Kn.toFixed(2)}, -${(Kn-.3).toFixed(2)}, vY) * (1.0 - smoothstep(-0.2, 0.05, vY));
        vec3 c = vec3(1.0, 0.97, 0.92) * (rim + band) * lenFade;
        gl_FragColor = vec4(c, 1.0);
      }`}),A=-2.5,x={uAxis:h.uAxis,uKey:h.uK2,uR:{value:.248},uTop:{value:A},uDepth:{value:.235}},I=new Tt({uniforms:x,transparent:!0,depthWrite:!1,blending:Zs,blendSrc:Fa,blendDst:Bs,vertexShader:`
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
        float thin = 1.0 - smoothstep(-${(Kn-.15).toFixed(2)}, -${(Kn-2.2).toFixed(2)}, vL.y);
        vec3 col = mix(straw * (0.72 + 0.24 * thin), deep * 0.5, pow(1.0 - ndv, 1.3));
        float a = mix(0.7 - 0.18 * thin, 0.96, edge);
        // focused back light: a soft brighter core a touch toward the shadow side
        col += straw * 0.18 * exp(-pow((lat - 0.18) / 0.32, 2.0));
        // refracted back-light line inside the shadow-side edge (~70% of the radius)
        float line = exp(-pow((lat - 0.7) / 0.07, 2.0));
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
      }`}),E=new Ci({color:ut("#fff3d6"),roughness:0,transmission:1,ior:1.47,thickness:.35,attenuationColor:ut("#e3a23a"),attenuationDistance:.3,emissive:ut("#f2b04a"),emissiveIntensity:.15,envMapIntensity:1.6,specularIntensity:1,clearcoat:1,clearcoatRoughness:0});E.onBeforeCompile=te=>{te.fragmentShader=te.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { vec3 nn = normalize(vNormal); float ndv = clamp(dot(nn, normalize(vViewPosition)), 0.0, 1.0);
        vec2 c = nn.xy - vec2(0.26, -0.38);
        float core = exp(-dot(c, c) / 0.12);
        float e = (0.12 + 0.2 * ndv + 0.6 * core) * smoothstep(0.04, 0.5, ndv);
        totalEmissiveRadiance *= e; }`)};let R=new Tt({uniforms:{uSigma:{value:new F(.45,1.6,4.2)},uFeather:{value:1.1}},vertexShader:Sv,fragmentShader:wv,transparent:!0,depthWrite:!1,blending:Zs,blendEquation:ii,blendSrc:Na,blendDst:Ba}),C=new Ci({color:0,roughness:.03,metalness:0,ior:1.47,specularIntensity:1,envMapIntensity:2,emissive:ut("#c27b22"),emissiveIntensity:1,transparent:!0,depthWrite:!1,blending:zi}),w=new Ci({color:ut("#151817"),roughness:.38,metalness:0,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1}),S=new Ci({color:ut("#1a1c1b"),roughness:.58,sheen:.6,sheenRoughness:.5,sheenColor:ut("#5a6662"),envMapIntensity:.9}),P=new ai;P.position.set(gn,0,ir),P.rotation.y=-.26,l.add(P),P.updateMatrixWorld(!0);let X=[[0,.16],[.55,.13],[1.05,.06],[1.42,0],[1.545,.035],[1.592,.13],[1.6,.3],[1.6,5.35],[1.592,5.55],[1.55,5.74],[1.46,5.92],[1.3,6.08],[1.1,6.2],[.93,6.28],[.83,6.36],[.8,6.46],[.8,6.52],[.85,6.56],[.85,6.62],[.8,6.66],[.8,6.72],[.85,6.76],[.85,6.82],[.8,6.86],[.81,6.93],[.79,6.99],[.72,7.02],[.64,7],[.61,6.94],[.6,6.7],[.6,6.1]],k=new at(sr(X,128),m);P.add(k);let z=new Ci({color:ut("#7bb1b0"),roughness:.78,metalness:0,sheen:.1,sheenRoughness:.8,sheenColor:ut("#ffffff"),envMapIntensity:.42}),q=new Cr(1.614,1.614,4.75,160,1,!0,-ds*.97/2,ds*.97),G=new at(q,z);G.position.y=.48+4.75/2,G.rotation.y=0,P.add(G);for(let te of[.48,.48+4.75]){let Ie=new at(new Pa(1.613,.006,6,160),new Pr({color:ut("#9dbab0"),roughness:.8}));Ie.rotation.x=Math.PI/2,Ie.position.y=te,P.add(Ie)}xu(t).then(te=>{let Ie=new qs(te);Ie.colorSpace=fn,Ie.anisotropy=a.capabilities.getMaxAnisotropy(),Ie.wrapS=Sr;let lt=new qs(yu(te));lt.colorSpace=Xn,z.map=Ie,z.roughnessMap=lt,z.roughness=1,z.color.set(16777215),z.needsUpdate=!0,je=!0,n&&xn&&$a()}).catch(te=>console.warn("[hero] label",te));let J=new ai,W=new ai;W.position.copy(Ur),W.rotation.z=-Xa,W.add(J),l.add(W);let ce=new at(sr([[.86,0],[1.16,0],[1.205,.035],[1.215,.12],[1.215,.74],[1.2,.79],[1.15,.815],[1.03,.83]],128),w);J.add(ce);let Se=new at(mv(1.04,1.18,44,.05),w);Se.position.y=.83+.59,J.add(Se);let Le=new at(sr([[1,2],[1.01,2.02],[.95,2.06],[.66,2.07]],96),w);J.add(Le);let Qe=new at(new Ia(.3,.86,64),w);Qe.rotation.x=Math.PI/2,Qe.position.y=.002,J.add(Qe);let ct=new at(sr([[0,2],[.66,2],[.69,2.06],[.68,2.14],[.6,2.2],[.585,2.32],[.56,2.9],[.5,3.45],[.465,3.72],[.455,3.85],[.43,3.96],[.37,4.04],[.27,4.1],[.14,4.13],[0,4.14]],96,80),S);J.add(ct);let Q=Kn,ae=.302,Te=.052,fe=1.95,Oe=te=>{let Ie=Cn((te+Q)/fe,0,1);return Te+(ae-Te)*(1-Math.pow(1-Ie,2.4))},Pe=[[0,-Q],[Te*.72,-Q],[Te*.95,-Q+.012]];for(let te=0;te<=40;te++){let Ie=-Q+.03+(fe+.25-.03)*(te/40);Pe.push([Oe(Ie),Ie])}Pe.push([ae,-2],[ae,-1],[ae,.05],[0,.05]);let We=sr(Pe,96),st=new at(We,new Tt({transparent:!0,depthWrite:!1,blending:Zs,blendEquation:ii,blendSrc:Na,blendDst:Ba,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:`precision highp float; varying vec3 vN; varying vec3 vV; void main(){ float ndv = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
      vec3 c = mix(vec3(0.92, 0.94, 0.93), vec3(0.42, 0.47, 0.45), pow(1.0 - ndv, 2.2)); gl_FragColor = vec4(c, 1.0); }`}));st.renderOrder=4,J.add(st);let et=new at(We,b);et.renderOrder=5,J.add(et);let pt=[[0,-Q+.006],[Te*.7,-Q+.008]];for(let te=0;te<=40;te++){let Ie=-Q+.03+(fe+.25-.03)*(te/40);pt.push([Oe(Ie)*.82,Ie])}pt.push([ae*.82,A+.06],[0,A+.06]);let B=new at(sr(pt,64),I);B.renderOrder=3,J.add(B),J.traverse(te=>{te.isMesh&&te!==et&&te!==st&&te!==B&&(te.renderOrder=2)});let Vt=new F(0,-Kn+.004,0),Ke=qa([[0,1],[.35,.72],[.7,.22],[1,0]]),Xe=qa([[0,1],[.5,.45],[1,0]]),_e=(te,Ie,lt,wt,Fn,en,$n,Bn=0,cn=!1)=>{let tn=new at(new _i(1,1),new Yn({color:ut(Ie),alphaMap:te,transparent:!0,opacity:lt,depthWrite:!1,blending:cn?zi:Oi,toneMapped:!1}));return cn&&(tn.material.map=te,tn.material.alphaMap=null),tn.rotation.x=-Math.PI/2,tn.rotation.z=Bn,tn.scale.set(wt,Fn,1),tn.position.set(en,.004,$n),tn.renderOrder=-50,l.add(tn),tn},dt="#0f1d1a";_e(Xe,"#ddbfa3",.06,14,7,gn-2.2,.6,0,!0),_e(Ke,dt,.72,3.9,3.9,gn+.05,ir+.02),_e(Xe,dt,.42,7.4,2.6,gn+2.6,ir-.9,-.42);let Ue=_e(qa([[0,1],[.25,.55],[.6,.12],[1,0]]),"#d9902f",.3,2.2,1,gn+1.75,ir-.6,-.42,!0),_=_e(Xe,dt,.18,4.6,1.5,-2.5,.2,-.62);W.updateMatrixWorld(!0);let y=J.localToWorld(Vt.clone()),V=.016,Z=1.1,ee={uAge:{value:99},uImpact:{value:new Ee(0,0)},uAmp:{value:.012}},K=`
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
        }`;C.onBeforeCompile=te=>{Object.assign(te.uniforms,ee),te.vertexShader=te.vertexShader.replace("#include <common>",`#include <common>
        attribute float aT;
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple;
        ${K}`).replace("#include <beginnormal_vertex>",`
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
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * (1.0 - smoothstep(0.6, 0.95, aT)); }`),te.fragmentShader=te.fragmentShader.replace("#include <common>",`#include <common>
        varying float vPoolT; varying vec2 vPoolXZ; varying float vRipple; float vRipF = 0.0;
        ${K}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          // ripple normal per fragment (crisp rings, independent of the mesh density)
          vec2 xz = vPoolXZ - uImpact; float r = max(length(xz), 1e-4);
          float e = 0.006; float dw = (wave(r + e) - wave(max(r - e, 0.0))) / (2.0 * e);
          vec3 dn = vec3(-dw * xz.x / r, 0.0, -dw * xz.y / r) * 1.6;
          normal = normalize(normal + (viewMatrix * vec4(dn, 0.0)).xyz);
          vRipF = clamp(-dw * 3.0, 0.0, 1.0);          // only the crest's lit flank \u2192 one fine line per ring
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float thick = 1.0 - smoothstep(0.3, 1.0, vPoolT);
          float rn = vPoolXZ.y / ${Z.toFixed(2)};
          // key light scattered back up through the film: quiet \u2013 the pool absorbs (amber), it does not glow
          float back = smoothstep(0.5, -0.7, rn);
          totalEmissiveRadiance *= (0.025 + 0.1 * thick * (0.55 + 0.45 * back)) + 0.12 * vRipF * thick;
          // the key softbox as one curved highlight following the far rim (\u2264 35% of the width, Gaussian ends),
          // its thickness breathing with the ripple normal
          float far = smoothstep(0.05, -0.45, rn);
          float across = exp(-pow(vPoolXZ.x / (${Z.toFixed(2)} * 0.27), 2.0));
          float w = 0.045 * (1.0 + 1.6 * vRipF);
          float gl = exp(-pow((vPoolT - 0.8) / w, 2.0)) * across * far;
          totalEmissiveRadiance += vec3(1.0, 0.93, 0.8) * 0.85 * gl;
          // ripple rings catch the light
          totalEmissiveRadiance += vec3(1.0, 0.88, 0.66) * 0.2 * vRipF * thick;
          // meniscus: one crisp 1px bright line on the far rim
          float fw = max(fwidth(vPoolT), 1e-4);
          float ml = 1.0 - smoothstep(0.0, 1.2 * fw, abs(vPoolT - (1.0 - 1.4 * fw)));
          totalEmissiveRadiance += vec3(1.0, 0.86, 0.62) * 0.55 * ml * far;
        }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
        { float fw = max(fwidth(vPoolT), 1e-4); gl_FragColor.rgb *= 1.0 - smoothstep(1.0 - 0.6 * fw, 1.0 + 0.4 * fw, vPoolT); }`)},R.onBeforeCompile=te=>{Object.assign(te.uniforms,ee)};let Ce=gv(Z,V),ge=new at(Ce,R);ge.renderOrder=1;let ue=new at(Ce,C);ue.renderOrder=2,ue.position.set(y.x+.1,.003,y.z-.05),ge.position.copy(ue.position),l.add(ge,ue),_e(Ke,dt,.1,Z*2.3,Z*1.9,ue.position.x,ue.position.z+.05);let rt=_e(qa([[0,1],[.3,.5],[.65,.12],[1,0]]),"#e9a443",.12,1.9,.9,ue.position.x+.6,ue.position.z-.55,-.42,!0);ee.uImpact.value.set(y.x-ue.position.x,y.z-ue.position.z);let re=40,pe=34,De=new Rr(Array.from({length:pe},(te,Ie)=>new Ee(.01,-Ie*.01)),re),Fe=new at(De,E);Fe.renderOrder=3,Fe.frustumCulled=!1,l.add(Fe);let ve=Array.from({length:pe},()=>[0,0]),Je=(te,Ie,lt)=>{let wt=Cn(.5+.5*(Ie-te)/lt,0,1);return te*(1-wt)+Ie*wt+lt*wt*(1-wt)};function He(te,Ie,lt,wt,Fn){let en=-(wt+Ie*.92),$n=Ie*.95,Bn=Ie*lt,cn=18;for(let St=0;St<cn;St++){let ei=St/cn,In=en*Math.pow(ei,.85),Wi=Math.abs(In-en)<$n?Ie*Math.sqrt(1-Math.pow((In-en)/$n,2)):0,ti=(te+(te*.55-te)*vn(0,1,-In/Math.max(-en,.001)))*(1-Fn*vn(.2,.9,-In/Math.max(-en,.001)));ve[St][0]=Math.max(5e-4,Je(ti,Wi,.035*(1-Fn*.8)+.004)),ve[St][1]=In}for(let St=cn;St<pe;St++){let ei=(St-cn)/(pe-1-cn)*Math.PI/2;ve[St][0]=Ie*Math.cos(ei),ve[St][1]=en-Bn*Math.sin(ei)}ve[pe-1][0]=0;let tn=De.attributes.position.array,Qt=De.attributes.normal.array;for(let St=0;St<pe;St++){let ei=ve[Math.max(0,St-1)],In=ve[Math.min(pe-1,St+1)],Wi=In[0]-ei[0],ti=In[1]-ei[1],ar=Math.hypot(Wi,ti)||1;Wi/=ar,ti/=ar;let Xi=-ti,ps=Wi;St===pe-1&&(Xi=0,ps=-1);for(let vt=0;vt<=re;vt++){let xt=vt/re*ds,oe=Math.sin(xt),Et=Math.cos(xt),At=(vt*pe+(pe-1-St))*3;tn[At]=ve[St][0]*oe,tn[At+1]=ve[St][1],tn[At+2]=ve[St][0]*Et,Qt[At]=Xi*oe,Qt[At+1]=ps,Qt[At+2]=Xi*Et}}return De.attributes.position.needsUpdate=!0,De.attributes.normal.needsUpdate=!0,en-Bn}let $e=new at(new Ir(1,48,32),E);$e.renderOrder=3,l.add($e);let N=!1,me=()=>N,Y=10,$=[ut("#9ab4ac"),ut("#f9b5c4"),ut("#ddbfa3"),ut("#b6c9c2"),ut("#e8d6c3"),ut("#c49b9f")],he=new Ir(1,40,28),xe=new Float32Array(Y*3),Ge=new Float32Array(Y),yt=new Float32Array(Y),_t=new Float32Array(Y*3);he.setAttribute("iColor",new Ri(xe,3)),he.setAttribute("iSoft",new Ri(Ge,1)),he.setAttribute("iAlpha",new Ri(yt,1)),he.setAttribute("iHi",new Ri(_t,3));let ze=new Tt({uniforms:{uKey:{value:ut("#fff6ea").multiplyScalar(1.6)},uRim:{value:ut("#f6f4ee")},uFade:{value:1}},vertexShader:Mv,fragmentShader:bv,transparent:!0,depthWrite:!1,blending:Zs,blendSrc:Fa,blendDst:Bs}),Ct=new Ra(he,ze,Y);Ct.frustumCulled=!1,Ct.renderOrder=10,l.add(Ct);let Yt=4,Ht=()=>(Yt=Yt*16807%2147483647)/2147483647,Dn=[],Un=[[3.9,8.9,-2.5,.3,0,.12],[-3.1,10.2,-1.5,.22,1,.08],[4.6,2.6,1.2,.17,2,.04],[-6,7.4,-4.5,.34,3,.42],[2.6,11.6,-5,.4,2,.5],[-1.9,3.3,1.6,.12,1,.02],[5.9,5.6,-1.5,.26,5,.12],[-4.4,11.6,.8,.18,4,.06],[6.6,10.4,-.5,.32,1,.45],[-2.6,7,-4.8,.28,0,.3]],Ii=te=>{_t[te*3]=(Ht()-.5)*.26,_t[te*3+1]=(Ht()-.5)*.2,_t[te*3+2]=Ht()};for(let te=0;te<Y;te++){let[Ie,lt,wt,Fn,en,$n]=Un[te];Dn.push({p:new F(Ie,lt,wt),v:new F,r:Fn,tint:en,soft:$n,phase:Ht()*100,born:-10,a:0}),$[en].toArray(xe,te*3),Ge[te]=$n,yt[te]=0,Ii(te)}let Dt={x0:-7,x1:7.5,y0:-1,y1:13.2,z0:-6,z1:2.5};function T(te,Ie){let lt=Dn.indexOf(te);te.p.set(Dt.x0+Ht()*(Dt.x1-Dt.x0),-.4+Ht()*3.2,Dt.z0+Ht()*(Dt.z1-Dt.z0)),te.v.set(0,0,0),te.born=Ie,te.a=0,te.r=.12+Math.pow(Ht(),1.8)*.3,te.soft=Cn((te.p.z>1.6?.5:0)+(te.p.z<-4?.35:0)+Ht()*.15,0,.85),te.tint=Math.floor(Ht()*$.length),$[te.tint].toArray(xe,lt*3),Ge[lt]=te.soft,Ii(lt),he.attributes.iColor.needsUpdate=!0,he.attributes.iSoft.needsUpdate=!0,he.attributes.iHi.needsUpdate=!0}let H={discR:0,tagW:0,tagH:0,copyTop:1e9},j=[0,0],se=[0,0,0,0],le=[0,0,0,0],Ae={ndc:new Ee(.3,0),target:new Ee(.3,0),active:!1,vel:new Ee},be=new Ua,Ve=new F,Ne=new F,M=new F,D={az:0,el:0},L={cx:-.75,cy:5.2,h:11},O=(new URLSearchParams(location.search).get("heroframe")||"").split(",").map(Number).filter(te=>te>0);O.length!==3&&(O.length=0);let U=-2,ie=.01,ne=1,de=1,we={fx:.66,fy:.5,hs:.8,D:30},ke=new F;function qe(){ne=Math.max(1,e.clientWidth),de=Math.max(1,e.clientHeight);let te=ne<761;if(N=te,a.setPixelRatio(o),a.setSize(ne,de,!1),ot.setPixelRatio(o),ot.setSize(ne,de),c.aspect=ne/de,te){let lt=Math.min(284,ne*.73);we={fx:.5,fy:(30+lt/2)/de,hs:lt,D:0}}else{let lt=ne/de,wt=Math.min(de*.8,ne*.44*(11/7.6));we={fx:lt>1.9?.62:.6,fy:.5,hs:wt,D:0}}if(O.length){let[lt,wt,Fn]=O;we={fx:lt,fy:wt,hs:Fn,D:0}}U=te?-2:Math.min(ne*.5,780)/ne*2-1,ie=2*(we.hs/L.h)/ne;let Ie=Math.tan(Lr.degToRad(c.fov/2));we.D=de*L.h/(we.hs*2*Ie),d.uRes.value.set(ne*o,de*o),d.uDpr.value=o,it.uniforms.uRes.value.set(ne*o,de*o),it.uniforms.uVigCenter.value.set(te?.5:.6,te?.62:.5),it.uniforms.uVig.value=te?.26:.34,je=!0}function Re(te){let Ie=D.az,lt=Lr.degToRad(11)+D.el,wt=we.D*(1+.045*te);ke.set(L.cx,L.cy,0),c.position.set(ke.x+Math.sin(Ie)*Math.cos(lt)*wt,ke.y+Math.sin(lt)*wt,Math.cos(Ie)*Math.cos(lt)*wt),c.lookAt(ke),c.near=wt*.5,c.far=wt*2.2,c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=-(2*we.fx-1),c.projectionMatrix.elements[9]=-(1-2*we.fy),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),c.updateMatrixWorld()}let Ye=te=>(M.copy(te).project(c),[(M.x*.5+.5)*ne,(-M.y*.5+.5)*de]),mt=new qt(2,2,{type:Rn,samples:4}),ot=new Ga(a,mt);ot.addPass(new Wa(l,c));let Bt=new nr(new Ee(256,256),.42,.62,.92);ot.addPass(Bt);let it=new tr(Av);ot.addPass(it);let ye={period:5.6,grow:2.9,hang:.35,fallG:5.2,drag:1.6},Be={t:0,phase:.6,dropY:0,dropV:0,falling:!1,landed:!1,impactT:-99,cyc:0,intro:1},je=!0,It=!1,on=0,Ut=0,xn=!1,ft=new F,Nt=new URLSearchParams(location.search),Nn=Nt.has("herophase")?+Nt.get("herophase"):null,Wt=Nt.has("heroage")?+Nt.get("heroage"):null,Jn=new F(Math.sin(.95)*1.62,2.7,Math.cos(.95)*1.62),jn=new F(Math.sin(-.12)*1.625,.64,Math.cos(-.12)*1.625),ln={bubble:new F(gn+2.35,8.05,.2),tag:new F,glow:new F(gn-.6,4.6,-1.5),pool:new F(gn-1.6,0,.4),tA:new F(gn+9.5,12.8,-4),tB:new F(gn-2.6,-1.55,-4)};function Tc(te,Ie){Be.intro=n?0:Math.max(0,Be.intro-te/2.6);let lt=Math.pow(Be.intro,3),wt=1-Math.exp(-te/.9),Fn=Ae.active?Ae.target.x:.15*Math.sin(Ie*.13),en=Ae.active?Ae.target.y:.1*Math.sin(Ie*.11+1);Ae.vel.set((Fn-Ae.ndc.x)/Math.max(te,.001),(en-Ae.ndc.y)/Math.max(te,.001)).multiplyScalar(wt),Ae.ndc.x+=(Fn-Ae.ndc.x)*wt,Ae.ndc.y+=(en-Ae.ndc.y)*wt,n||(D.az=-Ae.ndc.x*Lr.degToRad(2.4),D.el=Ae.ndc.y*Lr.degToRad(1.3)),Re(lt);let $n=n?0:Math.sin(Ie*ds/7.5)*.07+Math.sin(Ie*ds/11.3)*.03;W.position.set(Ur.x,Ur.y+$n,Ur.z),W.rotation.z=-Xa+(n?0:Math.sin(Ie*ds/9.1)*.012),W.updateMatrixWorld(!0);let Bn=J.localToWorld(Ve.copy(Vt));if(_.position.x=Bn.x+1.6+$n*.4,h.uAxis.value.set(-Math.sin(W.rotation.z),Math.cos(W.rotation.z),0),P.localToWorld(ln.tag.copy(Jn)),N){let vt=Ye(ln.bubble),xt=H.discR+16;j[0]=Cn(vt[0]+14,xt,ne-xt),j[1]=vt[1]+10;let oe=Ye(P.localToWorld(Ne.copy(jn))),At=Ye(Ne.set(gn,0,ir+1.62))[1]+16,yn=Cn(oe[0]+22-H.tagW/2,16,ne-16-H.tagW);se[0]=oe[0],se[1]=oe[1],se[2]=Math.max(8,At-oe[1]),se[3]=yn-oe[0],le[0]=yn,le[2]=yn+H.tagW,le[1]=At,le[3]=At+H.tagH}else{let vt=Ye(ln.bubble),xt=H.discR+14;j[0]=Cn(vt[0],xt,ne-xt),j[1]=vt[1];let oe=Ye(ln.tag);se[0]=oe[0],se[1]=oe[1],se[2]=0,se[3]=0,le[0]=oe[0]-8,le[2]=oe[0]+H.tagW,le[1]=oe[1]-H.tagH/2,le[3]=oe[1]+H.tagH/2}let cn=n?2.3:Nn!==null?Nn:(Ie+Be.phase)%ye.period,tn=Math.floor((Ie+Be.phase)/ye.period),Qt=.19,St=.046;if(Fe.position.copy(Bn),cn<ye.grow+ye.hang){Be.falling=!1,Be.landed=!1,Be.dropV=0;let vt=pv(Cn(cn/ye.grow,0,1)),xt=cn>ye.grow?vn(ye.grow,ye.grow+ye.hang,cn):0,oe=St+(Qt-St)*vt,Et=1.02+.3*vt+.1*xt,At=.008+.05*vt+.12*xt;He(St,oe,Et,At,vn(.35,1,xt)),Fe.visible=!0,$e.visible=!1,Be.dropY=Bn.y-(At+oe*.92)}else{let vt=cn-(ye.grow+ye.hang);if(He(St,St+.034*Math.exp(-vt*5),1.04,.004,0),Fe.visible=!0,!Be.falling&&!Be.landed&&(Be.falling=!0,Be.cyc=tn,Be.x0=Bn.x,Be.z0=Bn.z,Be.y0=Bn.y-(.008+.05+.12+Qt*.92)),Be.falling){let xt=ye.fallG/ye.drag,oe=Math.exp(-ye.drag*vt);Be.dropV=xt*(1-oe),Be.dropY=Be.y0-xt*(vt-(1-oe)/ye.drag);let Et=1+Cn(Be.dropV/3.2,0,1)*.16,At=1+.42*Math.exp(-vt*7);$e.scale.set(Qt/Math.sqrt(Et*At),Qt*Et*At,Qt/Math.sqrt(Et*At)),$e.position.set(Be.x0,Be.dropY,Be.z0),$e.visible=!0;let yn=V+.01;if(Be.dropY-Qt*Et<yn+.02){let On=Cn((yn+.02-(Be.dropY-Qt*Et))/(Qt*2.2),0,1);$e.scale.set(Qt*(1+.5*On),Qt*Et*(1-On*.92),Qt*(1+.5*On)),$e.position.y=Math.max(Be.dropY,yn+Qt*Et*(1-On)*.5),(Be.impactT<0||Be.impactCyc!==Be.cyc)&&(Be.impactT=Ie,Be.impactCyc=Be.cyc,ee.uImpact.value.set(Be.x0-ue.position.x,Be.z0-ue.position.z)),On>=1&&(Be.falling=!1,Be.landed=!0,$e.visible=!1)}}else $e.visible=!1}ee.uAge.value=n?99:Wt!==null?Wt:Ie-Be.impactT;{be.setFromCamera(Ae.ndc,c);let vt=me();for(let xt=0;xt<Y;xt++){let oe=Dn[xt],Et=1.25,At=.16+.22*oe.r,yn=Math.sin(Ie*.21+oe.phase)*.06+Math.sin(Ie*.47+oe.phase*1.7)*.03,On=Math.cos(Ie*.17+oe.phase*.7)*.03,or=yn,qi=Et*At,lr=On;if(Ae.active&&!vt&&!n){be.ray.closestPointToPoint(oe.p,Ne);let ui=oe.p.x-Ne.x,Mn=oe.p.y-Ne.y,nn=oe.p.z-Ne.z,Xt=Math.hypot(ui,Mn,nn),bn=1.9+oe.r;if(Xt<bn){let Pi=Math.pow(1-Xt/bn,2)*3.4/Math.max(Xt,.05);or+=ui*Pi,qi+=Mn*Pi,lr+=nn*Pi*.3,or+=Ae.vel.x*2.6*(1-Xt/bn),qi+=Ae.vel.y*2*(1-Xt/bn)}}n||(oe.v.x+=(or-Et*oe.v.x)*te,oe.v.y+=(qi-Et*oe.v.y)*te,oe.v.z+=(lr-Et*oe.v.z)*te,oe.p.addScaledVector(oe.v,te));let hi=(ui,Mn,nn,Xt,bn,Pi,cr)=>{let Zt=Xt-ui,Sn=bn-Mn,wn=Pi-nn,hn=Cn(((oe.p.x-ui)*Zt+(oe.p.y-Mn)*Sn+(oe.p.z-nn)*wn)/(Zt*Zt+Sn*Sn+wn*wn),0,1),hr=ui+Zt*hn,Or=Mn+Sn*hn,kr=nn+wn*hn,di=oe.p.x-hr,fi=oe.p.y-Or,zn=oe.p.z-kr,pi=Math.hypot(di,fi,zn)||1e-4,Yi=cr+oe.r;if(pi<Yi){di/=pi,fi/=pi,zn/=pi,oe.p.set(hr+di*Yi,Or+fi*Yi,kr+zn*Yi);let Qi=oe.v.x*di+oe.v.y*fi+oe.v.z*zn;Qi<0&&(oe.v.x-=Qi*di,oe.v.y-=Qi*fi,oe.v.z-=Qi*zn)}},Cc=oe.p.z>-1.5,kn=1;{M.copy(oe.p).applyMatrix4(c.matrixWorldInverse);let ui=c.projectionMatrix.elements[5]*de*.5/Math.max(-M.z,.1);M.copy(oe.p).project(c);let Mn=(M.x*.5+.5)*ne,nn=(-M.y*.5+.5)*de,Xt=oe.r*ui,bn=26,Pi=Math.min(1,te*3)/ui,cr=(Zt,Sn,wn)=>{oe.p.x+=Zt*wn*Pi,oe.p.y-=Sn*wn*Pi;let hn=oe.v.x*Zt-oe.v.y*Sn;hn<0&&(oe.v.x-=hn*Zt,oe.v.y+=hn*Sn)};if(H.discR>0){let Zt=Mn-j[0],Sn=nn-j[1],wn=Math.hypot(Zt,Sn)||.001,hn=wn-Xt-H.discR;hn<bn&&cr(Zt/wn,Sn/wn,bn-hn),kn=Math.min(kn,vn(2,bn,hn))}if(H.tagW>0){let Sn=le[0]-28,wn=le[2]+28,hn=le[1]-28,hr=le[3]+28,Or=Cn(Mn,Sn,wn),kr=Cn(nn,hn,hr),di=Mn-Or,fi=nn-kr,zn=Math.hypot(di,fi),pi=zn-Xt;if(zn<.001){let Yi=nn-hn,Qi=hr-nn;di=0,fi=Yi<Qi?-1:1,zn=1,pi=-Math.min(Yi,Qi)-Xt}pi<bn&&cr(di/zn,fi/zn,bn-pi),kn=Math.min(kn,vn(2,bn,pi))}if(vt)kn=Math.min(kn,vn(6,40,H.copyTop-(nn+Xt)));else{let Zt=Mn-Xt-(U*.5+.5)*ne;Zt<0&&cr(1,0,-Zt),kn=Math.min(kn,vn(0,48,Zt))}kn=Math.min(kn,vn(0,80,nn-Xt),vn(0,36,ne-Mn-Xt),vn(0,36,Mn-Xt)),nn+Xt<0&&(oe.p.y=Dt.y1+1)}let Ic=Cc?oe.p.z:ir;hi(gn,-.5,Ic,gn,7.3,Ic,1.85);let Pn=Ur,Br=Math.sin(Xa),eo=Math.cos(Xa),ms=Cc?oe.p.z:Pn.z;hi(Pn.x,Pn.y,ms,Pn.x+4.1*Br,Pn.y+4.1*eo,ms,1.35),hi(Pn.x,Pn.y,ms,Pn.x-Kn*Br,Pn.y-Kn*eo,ms,.5),hi(Pn.x-Kn*Br,-.5,ms,Pn.x-Kn*Br,Pn.y-Kn*eo,ms,.6);let to=vn(0,2.4,Ie-oe.born)*(1-vn(Dt.y1-2.4,Dt.y1,oe.p.y))*kn;oe.a=n||to<oe.a?to:oe.a+(to-oe.a)*Math.min(1,te*3),yt[xt]=oe.a,(oe.p.y>Dt.y1||oe.p.x<Dt.x0-2||oe.p.x>Dt.x1+2)&&T(oe,Ie)}for(let xt=0;xt<Y;xt++)for(let oe=xt+1;oe<Y;oe++){let Et=Dn[xt],At=Dn[oe],yn=At.p.x-Et.p.x,On=At.p.y-Et.p.y,or=(At.p.z-Et.p.z)*.35,qi=Math.hypot(yn,On,or)||1e-4,lr=(Et.r+At.r)*1.6+.25;if(qi<lr){let hi=(lr-qi)/qi*Math.min(1,te*2);Et.p.x-=yn*hi*.5,Et.p.y-=On*hi*.5,At.p.x+=yn*hi*.5,At.p.y+=On*hi*.5}}he.attributes.iAlpha.needsUpdate=!0}let ei=new bt;for(let vt=0;vt<Y;vt++){let xt=Dn[vt],oe=xt.r*(.85+.15*xt.a);ei.makeScale(oe,oe,oe).setPosition(xt.p),Ct.setMatrixAt(vt,ei)}Ct.instanceMatrix.needsUpdate=!0;let In=Ye(ln.glow);d.uGlow.value.set(In[0]*o,(de-In[1])*o);let Wi=Ye(Ne.set(ln.glow.x,ln.glow.y+1,ln.glow.z)),ti=Math.abs(Wi[1]-In[1]);d.uGlowR.value=ti*6.2*o;let ar=Ye(ln.pool);d.uPool.value.set(ar[0]*o,(de-ar[1])*o),d.uPoolR.value.set(ti*7.5*o,ti*1.9*o);let Xi=Ye(ln.tA),ps=Ye(ln.tB);if(me()){let vt=Ye(Ne.set(gn,0,0));Xi=[-24,de*.05],ps=[ne+24,Math.max(vt[1]-34,j[1]+H.discR+90)]}d.uTA.value.set(Xi[0]*o,(de-Xi[1])*o),d.uTB.value.set(ps[0]*o,(de-ps[1])*o),it.uniforms.uTime.value=Ie,Ue.material.opacity=.26+.04*Math.sin(Ie*.7),s&&s({bubble:j,tag:se,mobile:N,ppu:ti,W:ne,H:de})}let ja=0,Fr=0,_c=0;function Rc(te){on=It?requestAnimationFrame(Rc):0;let Ie=te/1e3,lt=Ut?Math.min(.05,Ie-Ut):1/60;if(Ut=Ie,Tc(lt,Ie),ot.render(lt),xn||(xn=!0,r&&r()),_c++,_c>120&&(ja+=lt,Fr++,Fr===90)){let wt=ja/Fr;ja=0,Fr=0,wt>.026&&o>1&&(o=Math.max(1,o-.25),qe())}}function $a(){let te=performance.now()/1e3;Tc(1/60,te),ot.render(1/60),xn||(xn=!0,r&&r())}return qe(),{start(){if(!It){if(n){$a();return}It=!0,Ut=0,on=requestAnimationFrame(Rc)}},stop(){It=!1,cancelAnimationFrame(on),on=0},resize(){qe(),It||$a()},pointer(te,Ie,lt){Ae.target.set(te,Ie),Ae.active=lt},setOverlays(te){Object.assign(H,te)},get dirty(){return je},dispose(){this.stop(),a.dispose()}}}function Ev(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function cc(i,e){let t=i.querySelector(".hero-canvas"),n=i.querySelector(".hero-stage"),s=i.querySelector(".hero-bubble"),r=i.querySelector(".hero-tag"),a=i.querySelector(".hero-tag__card"),o=i.querySelector("[data-hero-add]"),l=e.byId["skin-oil"];if(l){let m=i.querySelector("[data-hero-price]");m&&(m.textContent=e.fmt.kr(l.price));let h=i.querySelector("[data-hero-was]");h&&(h.textContent=e.fmt.kr(l.price0));let b=i.querySelector(".hero-bubble__pct");b&&(b.textContent=`\u2212${e.campaign.headlinePct}%`)}let c=0;o&&o.addEventListener("click",()=>{e.store.add("skin-oil",1),o.classList.add("is-added"),o.setAttribute("aria-label","Vidunder Olien er lagt i kurven"),clearTimeout(c),c=setTimeout(()=>{o.classList.remove("is-added"),o.setAttribute("aria-label","L\xE6g Vidunder Olien i kurv")},2200)}),requestAnimationFrame(()=>i.classList.add("is-ready"));let u=()=>{i.classList.add("is-static");let m=i.querySelector(".hero-fallback");m&&m.dataset.src&&!m.src&&(m.src=m.dataset.src)};if(!Ev()||/[?&]hero=static\b/.test(location.search)){u();return}let d=null,p=!1,f=i.querySelector(".hero-copy"),v=()=>{if(!d)return;let m=n.getBoundingClientRect(),h=f.getBoundingClientRect(),A=matchMedia("(max-width: 760px)").matches?a:r;d.setOverlays({discR:s.firstElementChild.offsetWidth/2,tagW:A.offsetWidth,tagH:A.offsetHeight,copyTop:h.top-m.top+parseFloat(getComputedStyle(f).paddingTop||0)})},g=({bubble:m,tag:h,mobile:b})=>{s.style.transform=`translate3d(${m[0].toFixed(1)}px, ${m[1].toFixed(1)}px, 0)`,b?(r.style.transform=`translate3d(${h[0].toFixed(1)}px, ${h[1].toFixed(1)}px, 0)`,r.style.setProperty("--lead-h",`${h[2].toFixed(1)}px`),r.style.setProperty("--card-x",`${h[3].toFixed(1)}px`)):r.style.transform=`translate3d(${h[0].toFixed(1)}px, ${h[1].toFixed(1)}px, 0) translateY(-50%)`,p||(p=!0,i.classList.add("is-tracked"))};Mu({canvas:t,host:n,asset:e.asset,reduced:e.prefersReducedMotion,onFrame:g,onFirstFrame:()=>requestAnimationFrame(()=>i.classList.add("is-live"))}).then(m=>{d=m,v(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(v);let h=!0,b=()=>{h&&!document.hidden?m.start():m.stop()};Bc(i,x=>{h=x,b()}),document.addEventListener("visibilitychange",b),b();let A=0;if(new ResizeObserver(()=>{cancelAnimationFrame(A),A=requestAnimationFrame(()=>{v(),m.resize()})}).observe(n),matchMedia("(pointer: fine)").matches){let x=!1;r.addEventListener("pointerenter",()=>{x=!0}),r.addEventListener("pointerleave",()=>{x=!1}),i.addEventListener("pointermove",I=>{if(x)return;let E=n.getBoundingClientRect();m.pointer((I.clientX-E.left)/E.width*2-1,-((I.clientY-E.top)/E.height*2-1),!0)},{passive:!0}),i.addEventListener("pointerleave",()=>m.pointer(0,0,!1))}t.addEventListener("webglcontextlost",x=>{x.preventDefault(),m.stop(),u()})}).catch(m=>{console.warn("[hero] WebGL scene unavailable, using still",m),u()})}function hc(i,e){let t=new URLSearchParams(location.search),n=e.prefersReducedMotion,s=[];return s.push(Tv(i,e,t,n)),_v(i,e),s.push(Rv(i,e,t,n)),s.push(Cv(i,n)),()=>s.forEach(r=>r&&r())}function Tv(i,e,t,n){let s=i.querySelector(".offers-clock");if(!s)return null;let r=0,a=t.get("offers-now");if(a){let w=Date.parse(a);Number.isNaN(w)||(r=w-e.clock.now())}let o=()=>e.clock.now()+r,l=e.clock.end,c=e.clock.start,u=s.querySelector("[data-clock-label]"),d=s.querySelector("[data-clock-done]"),p=s.querySelector("[data-clock-sr]"),f=["d","h","m"].map(w=>{let S=s.querySelector(`[data-unit="${w}"]`);return{dgs:[...S.querySelectorAll(".offers-dg")].map(X=>{let k=X.textContent.trim();X.textContent="";let z=document.createElement("span");z.className="offers-dg__ghost",z.textContent="0";let q=document.createElement("span");return q.className="offers-dg__v",q.textContent=k,X.append(z,q),{el:X,v:k,cur:q}}),lbl:S.querySelector("[data-lbl]")}}),v="cubic-bezier(.65,0,.3,1)",g=620;function m(w,S,P){if(w.v===S)return;if(w.v=S,!P||n||!w.el.animate||document.hidden){w.el.querySelectorAll(".offers-dg__v").forEach(z=>z!==w.cur&&z.remove()),w.cur.getAnimations?.().forEach(z=>z.cancel()),w.cur.textContent=S;return}let X=w.cur,k=document.createElement("span");k.className="offers-dg__v",k.textContent=S,w.el.append(k),w.cur=k,X.animate([{transform:"translateY(0)"},{transform:"translateY(100%)"}],{duration:g,easing:v,fill:"forwards"}).onfinish=()=>X.remove(),k.animate([{transform:"translateY(-100%)"},{transform:"translateY(0)"}],{duration:g,easing:v,fill:"backwards"})}let h="",b=-1;function A(w){let S=o(),P=S<c?"pre":S>=l?"ended":l-S<=864e5?"last":"live";if(P!==h&&(s.dataset.state=P,h=P,u.textContent=P==="pre"?"Black Week begynder om":P==="ended"?"Black Week er slut":P==="last"?"Sidste dag \u2013 slutter om":"Black Week slutter om",d&&(d.hidden=P!=="ended"),i.dataset.campaign=P),P==="ended"){p&&(p.textContent="Black Week er slut.");return}let k=Math.max(0,Math.floor(((P==="pre"?c:l)-S)/6e4)),z=[Math.floor(k/1440),Math.floor(k/60)%24,k%60];if(z.forEach((q,G)=>{let J=String(Math.min(q,99)).padStart(2,"0");f[G].dgs.forEach((W,ce)=>m(W,J[ce],w))}),f[0].lbl&&(f[0].lbl.textContent=z[0]===1?"dag":"dage"),f[1].lbl&&(f[1].lbl.textContent=z[1]===1?"time":"timer"),p&&k!==b){b=k;let[q,G,J]=z;p.textContent=`${P==="pre"?"Black Week begynder om":"Black Week slutter om"} ${q} ${q===1?"dag":"dage"}, ${G} ${G===1?"time":"timer"} og ${J} ${J===1?"minut":"minutter"} \u2013 mandag 30. november kl. 23.59.`}}A(!1);let x=0,I=!0,E=()=>{if(clearTimeout(x),!I||document.hidden)return;let w=6e4-(o()%6e4+6e4)%6e4+20;x=setTimeout(()=>{A(!0),E()},Math.min(w,60020))},R=new IntersectionObserver(w=>{let S=w[w.length-1].isIntersecting;S&&!I&&A(!1),I=S,E()});R.observe(s);let C=()=>{document.hidden||A(!1),E()};return document.addEventListener("visibilitychange",C),E(),()=>{clearTimeout(x),R.disconnect(),document.removeEventListener("visibilitychange",C)}}function _v(i,e){let t=i.querySelector("[data-add]");if(!t)return;let n=i.querySelector("[data-add-status]"),s=e.byId[t.dataset.add];if(!s){t.disabled=!0;return}let r=0;t.addEventListener("click",()=>{e.store.add(s.id,1),t.classList.add("is-added"),n&&(n.textContent="",requestAnimationFrame(()=>{n.textContent=`${s.name} er lagt i kurven.`})),clearTimeout(r),r=setTimeout(()=>t.classList.remove("is-added"),2600)})}function Rv(i,e,t,n){let s=i.querySelector("[data-gift]");if(!s)return null;let{giftThreshold:r,freeShipping:a}=e.campaign,o=e.fmt.kr,l=0;s.querySelectorAll("[data-ex]").forEach(C=>{let w=e.byId[C.dataset.ex];w&&(C.textContent=o(w.price),l+=w.price)});let c=s.querySelector("[data-ex-sum]");c&&l&&(c.textContent=o(l));let u=s.querySelector("[data-live-sum]"),d=s.querySelector("[data-live-next]"),p=s.querySelector("[data-meter]"),f=s.querySelector("[data-tick]"),v=s.querySelector("[data-gift-status]");f&&(f.style.left=a/r*100+"%");let g=0,m=0,h=0,b=0,A=C=>{p&&(p.style.transform=`scaleX(${C})`)};function x(C){let w=Math.min(.05,(C-(b||C))/1e3);b=C,g+=(m-g)*(1-Math.exp(-w*3)),Math.abs(m-g)<.001&&(g=m),A(g),g!==m?h=requestAnimationFrame(x):(h=0,b=0)}function I(){let C=e.store.subtotal(),w=C>=r?2:C>=a?1:0;s.classList.toggle("has-cart",C>0),s.dataset.level=w,C>0&&(u.textContent=`Din kurv \xB7 ${o(C)}`,d.textContent=w===2?"Fri fragt og gaven er med":w===1?`Fri fragt er med \xB7 ${o(r-C)} til gaven`:`${o(a-C)} til fri fragt`),m=Math.min(1,C/r),n?(g=m,A(g)):h||(h=requestAnimationFrame(x)),v&&(v.textContent=C===0?"":w===2?`Din kurv er p\xE5 ${o(C)} \u2013 fri fragt og en gratis CBD Lip Balm f\xF8lger med`:w===1?`Din kurv er p\xE5 ${o(C)} \u2013 fri fragt er med, og ${o(r-C)} mere giver gaven`:`Din kurv er p\xE5 ${o(C)} \u2013 ${o(a-C)} mere giver fri fragt`)}let E=e.store.on(C=>{(C==="cart:add"||C==="cart:change")&&I()});A(0),I();let R=t.get("offers-cart");return R&&setTimeout(()=>R.split(",").forEach(C=>e.byId[C]&&e.store.add(C,1)),+(t.get("offers-cart-delay")||600)),()=>{cancelAnimationFrame(h),typeof E=="function"&&E()}}function Cv(i,e){let t=i.querySelector("[data-rail]"),n=[...i.querySelectorAll(".offers-tile")],s=[...i.querySelectorAll("[data-dot]")];if(!t||!s.length)return null;let r=l=>s.find(c=>+c.dataset.dot===n.indexOf(l)),a=l=>s.forEach(c=>c.setAttribute("aria-current",c===l?"true":"false")),o=new IntersectionObserver(l=>{let c=null;l.forEach(u=>{u.isIntersecting&&(!c||u.intersectionRatio>c.intersectionRatio)&&(c=u)}),c&&c.intersectionRatio>.6&&a(r(c.target))},{root:t,threshold:[.6,.8,1]});return n.forEach(l=>o.observe(l)),s.forEach(l=>l.addEventListener("click",()=>{let c=n[+l.dataset.dot],u=parseFloat(getComputedStyle(t).scrollPaddingInlineStart)||0;t.scrollTo({left:c.offsetLeft-u,behavior:e?"auto":"smooth"}),a(l)})),()=>o.disconnect()}var Iv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function Ya(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",Iv)}function uc(){Ya()}var bu="data:image/webp;base64,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";var Su={"cleansing-gel":{url:"data:image/webp;base64,UklGRlJVAABXRUJQVlA4WAoAAAAQAAAA5AAAoQIAQUxQSB4NAAAB36e4bRsn8v5bp159R0QaO8V2MRIufpBwJElu2+wu4Az+/8ERcLZPEf2fAKxyqsUVTtUyNDNkzhQ1eiW3EmlC6WXotsAMvQJ9MlzDttkKfcO47QtmCaSPLMtL6GcAlzQ60KxA0DCHmv6x8A8mahQVEh4mABQ0AJ5mA7ecZoaeqVieRGwwGLdt5Ejqv+1N3nj3i4gJoFVmdGhD1mtk12ZpIRpKm6WPrPPSR9Zdc0YzYMUxYGl4SMCFombO7E/JQtsmc9tkVia0Ze+UdYCEMlwsDrFOs3WatQRKoyds+xen/f/vup8zyUwSAhGSQigQSN0LLbxaCnV7u7u7u7v7e+Url51v3d3d3V1fVnks0JbnPOft74iYAM+2ti1zm23btoeplZFm0r8X8l4eZr5vM8skY5lJkknoUlQM17U3VC7xtY9SBBExAQSgWGwsHQkJFG2f/NGXbyT0tZyxpAaKQjZxpGQIeNLzXvaMaRRuWmQs7zotJ6xxbgxgaFfCko870Tm0yxHmAmNxFAu3dWsE8eEDDkg6lUUYICDG5AhtLWGAq5ewdG4rRHv3OaCcsqQtIZaWJIJagAHCjQ6pdq6LFbeMAM6x2LTEmlowCQNIXeNgjfjwtIpDZQBjeRH0Wmeg2cfgqVZzrmEqFQGTIa7Gv/3dQkcYIHW6rnRiN33bq0QAhrhqfeUuqjACgyh1m/cV98zH0WAVjCXFVazBnWeVRYBBpRXtXEg37S8UE9bvy0ufUmE1tKWw81Sp3YslMNB6eXYZVRORFkuzJ4+Xy02HAYj127hcryp0HrUtnZpM8KGfnqCiVuee96OOSYbWnen88y2qJH33+MTvbwSEF2sXJVcQsfCI6X7hR7H1hTVEkE72ZPgy7k6JMJUkPGnp/rGI/Dt6ZgjlHBEfmY1EoMobuP7hqgWLRzecaGHkXItnjiTkXjWufIucjqdvCBOuF+98h8Ix7b99Aibd9iMSNsj5HPv/mP2S+cICRrLLMj/EtYKhQEEjE8We84Co3uY217QJ0/TYg3bPJ/0pWndQWHjRqx53phoi6S0/9IdCii+TjXse9OwFhUfxFh++7gKGPIFZadepNgoLUb/dTGxI+FKy4vEdBGdUixF+1UAaHhj/P6tjckAqUUDNG3XiNY0rS/kg+sbxhGxRO0HpiNrZYXJwsZPkIcDy0b80SqEh81JpYSFdFsgz1rtf10ABYdY+0MC/3dpj5+qEY1Q/cOJs10PwkJc/YqEUDLvveqpXwsv9+x79jNlQ6Dtxj7pMXkKV6RN1FABi7NwACE9ROrOZMCzWI/xtrpYGwv/+r4wOU7Z4RGVzQsDt0w209xnynOuPCcF4a81voAAQ1RMjvgtD11ewHISRh6VclIEKAjPvhaEU0SRZu56rwb5KZTRBVj5qTsgBbT1aRPFYUhX7rJURUtYJM++Z2eWss8bepslrYmh2ZizjKguPfOGM8Ht0+pWvvUMZZZfc/HMfua+K7xvbdp/fTZa7HXsrZOBldvSyzMxhWSCcyzJAyoJ/HVVGITujlJXRoZDOSBlNkp2RMjrCrmWDWbbFj35GavKfLvzizii7FN3/8UMFzDx3+Y8/fNueLEOTczcdHxvE68Z1b7npzohsT4abJ7Z94YLP4MJXCcFy+uJv+g2kzBPGZ37kt8JIjRAs7h71mSifmw2BwtFH7/QZaNuLxrLPzPD+9Rcz7/J3f2rmPcOEskvEm274pfC/EJgyyiDaNGxkYzLeTyYLlzojM8sL20oxUsZIuLEjA1Jm0DcwfToBKVNwwzfbuLVAhhqj773P6WFAGSGI27d6xTcKsiwBXfvLbzxzUy0GZYAMNzR10yOTRbJ4fvrNyZsO5Dujsn907lg3MZQ9BvXmLk5vcGaeiyvdh3T7SpjIZovu0XOH2jHylnDtmbmBXkTGp2NHz20TJj8ZzenzC2ORoYwzK4yPdicLeFgi6dt2bCw1ROYLol3n53spkmegMnWwkiARhCJuXfP2O1bxrEpTjx4bwghHs+iGzz52uix/CBs5cbYHIjCLxu1Tf3+C/GDUO2P7+iMRoOXqn/9wH/NCnE4dLsqMADW0Xv4mjX1QmN4+UJVEqPrN9gMJWmfRWHvniBkh66GdqbD1VTs5hghbS667NV4/AhVqBQsdhNs8kwqtD2O44wwRwi5GYn0qmd0bEcgGya6ftCNwfQnBLIpTv/p0JxiwcAKiT7G3nQAR1GbMJ9tM60JborlcahvZ4PACXpxu4KtGGBHknfkB21VeXMVUdLF92+cfVzeYf35ZV8dwuasKN3MZdBU424jK7mK1fOHKifobTIW32rqBKy2Vbv+y2iFv7hq6MjDzwVJU/IH6Xy9yhVtP/Q2ueNbgZAldAZE84Ds3iMqfTrhruRKX/tZfE9Vf/StX+ltAOrlBFgC8P7W0BdfaeEmKoKgvtLVm1eES+dAML90stSayv23oxjkBPHNiibW94bpqbLlBnbO31+jPNiBy5Mz/i2virm3EUo7ovT0krUo0z7RI0gxP9ptWgw48J0uV57ZiqxCNm3XCMJ2OY1WHDuEsUPNUG62MaM8OpUH5yHRkKxLjc07E2ZtP0Upg4sRF4rTieJuVl2ZalgdudlYrEbXjbRKtb0xNy5lGh6McIkoneywvCsd2YnlANDGMLQPV0YopEVoLdbTc9FxEPu3fV2WFrY5yCkm6nJFje4dj0xIMdIu5pbM9ZkkxdroP5ROTc0uZG90g8u/A2Q65VeMjyxQ65fziZqeWEVhuoZwuk5OVbySPyLfxhgrrtbmD8oqonJ1AQHRoJ5ZXMLUqLFZSRLnln8kCYbkHyuMFAOWc4bN1lH8KjZg8bCwuJFiuWXrXbEy+1aLxrco5S0r8q7SLcpDR3e/yj5icikx5B3OxyMX/TPpvyW6knYeiuak8RLWSi/57ssqIUEb7ra2Ijv1/7P/jt5cZKaN2M6K7l4qEFubKhABldNR5Z/TLZGd07P8JuTM62NpyUDJRIwdXzmxE+ahaJC87o4SVjxYLnI8X6wRcnr+H8uFDEwck9lELcD7H/j/kMmk5C2jkTJWAv/nxC3A6BrPPWhmFrIwOi/QEaWKsjA6LtDMaWAG1Ly8QcHd6OSBRcBiyMjpaYBTnoi0HlFB3h8tH5hwBi5wsRUROApzRUeeV0YTZGU2S114O45GZO9nE4YD6jYJ902YBmQZrAREv7EuIdj0iY4KsjP7v/yNt/1yP6NbFYUIflpzQL5M9QcIooOLpW5yOVVx+gtIBukMmwIMRDqeY/m6Esykff7WuOV1PRrbBNC4uJQMYEP0SRxOw6fc8wsmIh1PFiGjN2+ceMWijWAADmNnTbZwOrDzrE6s8HCVMsEvXmiMw0Uy1RzFXOBcXaNSdfpnLuF1yLd60PsZgqExM8+QMXmd6d16S6nC5I0aquP82FsSYw65TGQzHqZxfDqW4URuHOz/jSPz45Rii10WJaNDzWDMXujgQnkz15Y/AQq1LpG8floyp8tFjRyIzFrV7pQLpLQ420Hm6QqDz//+Ax4DemeeJrKwhVipavTis9tQPrLb5uJ0GDGY+WYVZ+s9cHq1PpJUh3z7VxVGouP4FqzHLT3uE+e7h5xtC5d2aw3j+HrFqP3pSKoru2+/ZuEgf/tMLUcz995NNAPZ8LEdYvVPP2NzRN/49BzR7sr9J8R2/j1NQ/0wNbYrovm6gFHhxgk0vPKaPQ+herKFNkjv/ghRf//MTNls0L3SUgNU/8RxtFripo6UcIOKF00O2cvBcLwfg+jYuoa3QvpMlC78NC022VAye7knBN7gt2RrQ9InUws7iSoS2SNY40zOFnGzT4bJdKSyaHFbYqTPhjG0oYcFmQ8bVasvVzBixXQVClayovWUb20VjgKuVUbl6+zevthM0zr4SuEIZ6vf+fuWzcnsVs/NPZvtSKFluXD9xeg20vcTg9v/Pv+mBWeAYhOt3/z61AGK7m+H81P8uffeCEbQWpvNs/tyFFXaoVM5fv8cr3vPriyHDoLdwbe7MqxUk7Ywl47SzcP5gO8KWUBh4hICV+tsfeeuRkmOdy6DQmzvT39qSSGAo84wAl3hmtn/52rYigNYZCCNtxpvmx+eal5MSYKCMMghwe6C5qXY5faNYXQNJeNMVBw8OsP1kqlYdsJXIYx5PrF9dLLXyv3d6N92hVwDCowID0RqPi/PTYnBnCkRahMlbY5YllM9njG+f79F5tSYDCIxnBWDAQEU2frTfrDnfNoj7HEvbSrQePJZGtbujulMvYDh9u8TNNQCx3uzeMhYXHVabqgsbOt+yRUmnshLTGtjqtAFrLC+sGPrn7nvUvdfgQcl6YfZCLTKWr3RLANY4N25LWbpriLV0EVy6TOSWKEo2/Orp8GODyzdKKN4sMb7Wmb1UY5jRqhVZtjLXXQv1DpcufO5r0fR2QH/82G+0CvvR9cHH3OiwWCszsl0jjJXGbjUC2LireOnb3+Nv1wqIBmIQYMtAUTC2wPAnVlA4IA5IAADwHwGdASrlAKICPkkijkUioiEhJZJ68FAJCWVuKF74X93YYV4fsvMCbC+q+Z/I6Rk8nFzNyb/57d2OgrgDKVEqLfEGqf4l/Mv+HaOuTiir/pfQy/M/8rspw+7U8g/If5X+I9SHkH0Zjg4oHTX97zbOj/+R9wHy//6vrk8wb9YuoH/gP/F6qv2p/br3gvTd/ZPUA/kn9u9bP1f/QV/XD00f+9/lfh0/bT9mPgT/WD/wewB6AHBU/hb+rnze6Zfk56D9kL3C5vXYnmx/O/x7+6/wXtT/x/+95A/Mr/X9Q72X/wOFb3f/l/8b1GvYz7J/4vuG9/36z/sem32o/73uBf0X+w/7T2J/2P/Q8hf2H2Bv5j/Zf99/iv3c/0f05/5f/0/2f+t/Y/3u/WH/l/0vwF/zb+wf9P/C9qD0L/1s/6hbIc11P5COIZrXzVi5dWsXGoiqNFKy3j7ksH58T8//E3Omf/tyvKohZLVGUtUpDtMIKekaj723Uh5qk/t1zKpV6+zK81rO7bfsCtybBNWtiyhPInBumGUqrSahV8NTC2YVzUNFDWDvN58tpirf928sgR4u3upbd5b1LvLr9zGp0wv/thbPe/b2NGidZyoe99DULIpNtvClmEeldHQcNonwxKs0dl5dqLNEumuNd7Vcf4h3Z9uV5VaQOueaDSggIN8nxfr8nAkjlmewT55Kq0mkeIDYoUiNIpJivDSetM7Llg9RHejDUMwNLdSHkwrX+6P1nNLRJetSTZy1ccoFTJ15GTaSQIOekfKhMrzUqCT7MhDm8qXrKxM1oMJD7XarZuWyrBsulP/A57lMwctIvuyLcoH+KrQzu9gm2fYhFSJjlDGB8OPHDcSpNyme/xVaGrhYG/y8z7xLaSSW4D+H4nUwIPhaAnW/MiFyMxIIOOUk06zKA0WRSb06cg4Zg81LphGLuftlRxKcobLRVs0EiqjY/wmfL3UDwI4N34f6Suu66Tb9uJPvl9m+ASa7XpkkwPhDCP11avGV89emrUluON6iBZyxMjYkLWTfqGkTCdLUSIjRmmF2Ok4Yqn78nrmE+4o2Ezc+SwaXDd/ut2YAyGhkZUgg90i658FWFMy2RsW93X+mRak9//57aBzFAz4ZkYVUMNxKfD/wWQPW6Dd2KQp7YAext9I4dGFlI9srNohyi9T9X8sp99nMokfNebqTw4RfnP2pANvosVfbCKkRZLK3mT4N2YctH+nAGA6Bjw5P/AbdmxbQ4nKXJaRFslgIVhKrCy9+aALeNn60NcGUY2aC0kDWg5wzrGC796823sJOvZ6aZx74fuAorfOTA52r+UbbN06Xl/y1FdA1DjE7biWi0LmzzJpGuYuMBNRMIcY/YPG03DwyKRzRnACDxTIfGMu+CITsc8fdxCktYzZvAe3t+nZwJroChMLHqzjZPyKPNEU/wOCPnMgLYj+M/h8bK5prjSO4yOiYTYRKMdckuhdy114mzy1zfD9CbKo+SjqYThMHtNc2Zv/A3SxOoYU8KuC0aqs15b3jXvzRs4j/0d2M/oOiVhZIc3IvC+2xFNW7CC7Hx61FQrsSP1ZqgIVAGO5WgNrMIJx0jpeohYAgqE6Mj+k+azbbeGmS4ewAREcIQT6yce/qsldUGq4XRUyR3q1UY3Aw0b+N1zPRjRJy37DoMoI1Yq4nnr30Wn5pfKd7b87SKgPJuelh9T3ZvLTJrPulJSavKar87r/i5G7KFg0XDTe5dFBsK4neExgOVtRX8HH1gRPvSmD29Iz2YNeGlzJ7bJaumJAc1oePhU+qcTiXfZDQt2+EqRUEmC85kfJPAXjKbL5l0ldtGqzh04aGQq2smga8zZnJPndVT+EkCjeFc++IV9QHKsOsir77NwoUpqHcxEW2e8hYR8RsmZOwVoFGAdzyla8VLdZwxIiv31ttb33FJDILQHo4ole19KgKabE0od5Zasvz/hRBwsV027Rof1bIaPfpsJcxPl6BjpQ+68vQsrH67bXKwkKQiZHGQtVZZeEuTOOVzm0epfEEBp+ONZicWz88drOga4Qrur1couUsvHc1QN+mxuxSCuvkEIKcVVr11V5zF+aZXCuNpEmCB4/Volrdu1XOaFQe1RSGmyYtlAqYgDr/K3vx8nNCUFHdSxPqoEbvQbrDpJcVZEg+4cqJMYZw3LyIHvSmDlsXK0ZZH6W+t0RorXDR6nG24Irx+rVQurORZ2P+ovElK3plInZhHL+GrqeooTheVHQRrMJLRkDLN29C7V+myP0Yv1Hns5Dj96cPYpneWspp6U/nW7OEHBm/a2BN0rs7xsPb2TIuE0c3hmfkNyl3xT5B9lOD/c/sH3TroXbAf3kfqyEhv98JAfwMgO+X+jUqVMzfygCQ6w/sHHQMBardBH1Dmy8fDWxiBt16cFlrKzXmN+DAXwGUi0jHtiOBPGmC/j/gWGYxYEqexHedyAdWrzgt2y0OoMN61Lmt/nBr2N289qZl4effbXCve8gEmc+6rR4QQBj35A6FaMFshndTIQncwu+ZLe0WIBLQpQmQX3W+tGOmSmQtrlmPtlNx/7O5IQUg+OuEJDt1JHR7BnAYbODiPoZ5Z26dR96iSajjC8sqXD+BxRJP7OSu8tsozPZO9pMIdXvA9nEpObVkTLQZr5Y67yWcerfy1Ngc/PWefGfdyfEIs0zENAM+4fOExqkYd5u6kXqJ5LKWqbxgBMwmpRPZ4Fpyq4yxf4K63VUexonROKmv5xjgIW9vAOVZ+NYIAz6uruFq3UE+GgW7Z9lzbjcPFVvpeobS50FG/v1aGGDjsAxct330RXjgsrmCmG4l8WMs9Ey6Or/wAghikuIlfGKGnDx7nl3DyZnwGdnpnQM3+pSNGv1iaTySP7UZ2y2bNm4Mm8+Ruzr474xazX+84sEM1I/dmWE7tywtrjdmCxnZ3X7n3D6TtIZ44Bt/mD+Gb1DNtzsGvKHi0yb/o1duvbX1KNGYfAm9EJzjI63DqYuj/WZowXitmFut36u2VNJvV05eikFD3C76h7g4LFV7nmRqzRaeph0v0g+oaUYQ++CdCdqLPUkmxmkjUI2owTfeyhaUIUPyW0j7yoTtAAD++UlgAni4amHpGwof+G2ehOPoq/duoDhq0XU/ON3u9I7/GuwT5px6Qz+cnmLj9ro/al41qMumnlHSwjT0sN2zY0v4mlzqOddiwxFzCWuCqqfuFBClNbOaKnGqC4MxsaQPZn4DaULvaRHHOOIyhgUerKcdFLeknBcLe3+ZmGj7GZd6X9yCQXvBOAyK6vDyYR39D+SLEzrtLej6yd/J1n26xcvJvRptpzOQzasVYQb8eNJ44j+RxOu3wC3kKFQjl7HA/MlPZOvS9FMC8OGOCJIsrLtVG6tvdeaG7iq7ShsZI/WZ/us8c3CCHrMMf92WBLyOiaCOEHEgFIIWP8chHPBdRfUlstsW2fXCfL5S5jxpIMXJmEFeU/aZ2slbnyeXWwSuc3vZ6HZfDurMM5LRB7KOsFSqJai3MimuwoxSYCC2SKb1tZta66c5O7bDD2C83x7kJAATDvOO+Ai/dxMv64vftG3sRyNehv2+IMhxBtABDomsZi+CpiDC9B3tXhDx77TrYCMi4wNmHz+xrG0F3veL5aMtJ/47L4ZEiKrewKTLm6cDzYjuW9viXB3Uy/ZuFMaqPARFUHk6M+K2k1HEgB7SAEJ0N/78nw2fjaqgE4CVEqDe4gyr26TWP/7ekfRVnEEc2UttkdcWfgmvy6hcMuIiM4uwAAAAYz/6CRGJWSZ6NaZ6/gxYLJK2pU+XY2Jj3UgUpQBDaR29RhQAaIXc4EotfcLk+SdK+3mcAAAPsTUxAdHtptxf/H8VxEfFg1X5cPPaK1IRw7ienSaO4apgpjwOc6apbzTfjBiEKqCfOlhRLI+3oAAFiiBWGtT/39kgqRSK5BNkZmUv7X2fWwB3VwM2Kz01DjBUakPMSZi/LAOjmcPUov0jNfnliYdHA6VDhfJcrGxhtrI2JdxCYEMBUD+LQZkmZp04cOeLsdd6Phi4IUeFM+VwM+gVr0dZ0k1MDUICtEbaUG3zUV3o4ROi4EI8CEptVMpX30HYQDlRWithZ7kp2Q4MkTGGfc5KxCcYdvT4TTcFBxojw8Db8vm88A7Db9e7uJU28VTUGn3vRKR5FbuT2fwgJLSG4AAEE4ccJxRqODQK7lkbnK/P1A7QSDBpEhfH+aHT+UaOe+E5qMqWu70Mk7TqWFUNDfuduEK+eG7e1YSMP1Q+Bt93/r2ULglnkYZnn07V2rcLolonCUeBR0Jo84NCAYp1YpveqTil5kAADI0Rw/oTtBzk/ScMbil77JrNG3THV18jmqtnOl7gdPv4eXoCu9hVWpSG6+aUdvzu13IfG0n5eNoly6aKow6ws7selF3/zpJRjtnL9D7qPFsf+rWTLlZHXwPQiuYUVD85PJybleeb5LV+OhFG/IxynFFQHXS1OAybXkx4QKsbokfBfFIH6epBx7Cqe8QMmavW5ANWQtUkMD09+zdcQ1Cyhs5ukAAAQn2sZixsrv/3mwrB8z5mmDmUbQcbIWV7ThtxIAl/vJ7gVGygqaMGFJiaVA3SlGqve7EWOk8S+Uora2cE2xgSE3dVvMn0JAXghrmiMAH+OyEssSZlciAAADIImCP+3tmPDF0dfKQm9XEfj4og0keELET5scvW2uFvbN18FD5/mztkxPJN5V/ZecxOHl5682JyGtr07UuYWvcFbwGwKZDhG6lPcFr839gnm1igcSc16jHQ1olJvQ+UrmFNHFcAAAGNvv8RxhN+4FLrvK7EN1F2ZUWM/B/pEccEhBpKm5m0ZMWL3lN0nK/h8BDFsU5Trz47+fhZo2cCWYypV6Uey1b95aYMtPFxUdBN3yS4lAufAh6SRSLAtTTcg5I2DL6F72Mo6cUdKg/b/KsU+83NOAAAAk5U7DY3629HqRXnN6tcK10CodX/mMoPuodGOkVbUfaw1n7Pz77n3jQksWHU2WHC1L/7O5lOJyWH8GgXxVz39+pSBgjDN4BcfUqbv6haofh7cT3qjtz8vFRbWE1eEXAiwXxY+YPl45VEWQBxJEXtO4UI0rAsQbMaYzISAZ8aIZPBHrAgcd8BS/lDp64rmmHv5bLzZL5XSjqbsDiTV+Hnb+o4+oF+yyXP48dfzw7Ed4prU5+0JefTHlHJNi2JTkIxUoiJfBaAAKsX57pwOx6a8Q76DZkC49v1GsZ+ABvCHt4O6wFuK0W+7K43PXkHJTnU/eKM53z93eccquaA0AjlFoksgrJGTxBPTlt7Wj0YmbJwc3qnUhEXgAABUg2by9rjFCDHMYnDJc4um7dg7wV+JkZY0M+xz6LFrcZ1+3Gr4PlHEx3yelS4IlKXoPiY0RmvxGVwh7H0bHtSZCiePgwN/Kcml/IIbusg9Oxfi7YvN/wSVg4SmIEG/+kM/u44JZNduMixI9UMs8FV7XWWtyinm6+4ru008NM/60qbV52WVfITSIBfuR+7Ra5t9klWIT/oU1U3AfP6ackakx0l5uP/jZweX3ZV4hxC+gGfTm3/lSYAA871LH/QTh1OwvdTl2iaf4kuuDvvhJ4KvsX4upsHsf0uF7lLvCQudTO7jGbfW01FmfCgAGQM3h77p/1gQ0EeDDC412gTorQb+lfQSyoIrVWEEvgQAro/gxz9ZrGf7uPvl3WmYn84U3YvFwQYNbEUMiyOmnw5979cjHG+upKxmCPrVEYUPNiac7ejVcJgdnA1sJZBFrRCuS80bAfTVqOJxVpHA+D4M7S3csuy/ZXUZKXDBSJDmS4fCx+2jrzYcuH2JpQhyZ4jwWC8TQDfz6ckV7jTVVEduzVnzaawBhVXo5Hl4nVys10dn52kfvuMUMnwCN9Tj9Urwy1VTBkBtUgCUgkXVc8cbNJd/zL/T4PqxLAHuP8qhXvftLBlkfiR4zscpVZXlok+3exq31J0kWAGBPrxNJQaIDLHsvkzf6UMA+UBXMVCtDGNUPVgrC/6N3n8VLaNmTijBgjHJA+GG+354L6EHhs6yth1PoUdPXsQS8EVJqeYJHoQA5/BxUlTz4aY0OZ5u28vI+PabiOHrbqsK/RB/jaQ08nX9XTV5G7OzzjyozbFL2vKzBgVhnpIlFI6rzFDAcfM7nk1UOctQc5hftwPrhcVqAYENfayKlFP6hAzhoZkhtZjf1t+iws+9lRHNyp7F8xH1Xpr08/Dtk1LaSUUoTyFvNBlOeWik7+9yUrOhVJABo+yBvogI56N3GvjXQbQhouK0wTMv5UkB/wUpN43pLGprPLMRrck587kC6oyu2LjcGvQ4c3GSP5ZJd+v5Vd/9fdkGwSSgu/mAxwK/ZWTrvFpnOAzo2Ck/c7BYnOmHuQMy9/lx3EQoEMwpuh68JyLY2NiUPRVGkKY0iUOjwKToNWCQeJVaU0jv6e0qYnhDkVxuNPd1GwHbZtFcZfRarMqsY0h8XML01ko9GUTS7BKQGLSpJpS79KX8pgTikh5C0XTQtynrsK8GML8Lw9bIYY06rp9+hS327PZ9dcjX9Y+RVRqVU8c9M0Aas2AdABOaxz9+3rd2SWeZggMSdGwTxZDFGKLQUMUKRXLNNaZ+Hjfg2Ya4f6kvgQlDxFCvaaIRbVI0maj/0JE8N1yPLW5QljO4/E5SGepOoF1F3YoVZBQMLCBwXxpWp00xNnlUP7gjpyAFXyl2Zm+Zqt/5nor+Of/Bn15lIAgLBiPTkRPPUCBbOlx1hPORsM4zwAsiCZkab6+KVWDW0391lsgWfO7cfnZK+LWhXuCaGSBrBh+Zl9N3AWDDkuH/UlNg34yZOggfdUdH969ayfMcDQ6xsuJoo1/cnmvv32nxgDfEK1pRseKfVgnkkamFfLI0IwTgoIMnNonY6QxZDgzhxxgjhXerCmgjuH8S9emEUTbd9ML3aRC9Z54/ZI+KTG8t+ITt2yRAgB8TgH2EI1A66IugLyUhUX7lTBDB4CWFv5iURTDPlbOn4NhX5S2O/4pjwIOxAve9WyZfY02/mpiuncQfaZ1dWGs9v8TGZM6MzimKWEAq0sYGStCysMqJP+U+314g4zdLUfjoWixzqS+r1Wi09BdiDNh/MUm+OemALHMvZzZ9XpBCo26NXRONtjBb5Z8fZtrIifz9iMPhhQ4jul9/sM51lA49PGCA6P+WLqbDwmCktDdwSHZKU2ood2c8eBVq1fU/m3YAdfjlzz/+3mUOfk/RMC5EQHaHw8zY/H0I0H2ps2fB2fgqSugMEmiX10OGF1Ok1VYOoDcLukBVCtReeuPddiKHZMA/j2LyznMyWEKM4PRpodzgHEo4JBr76To092YcDiCB0kjGAqgMAai7Ve6rRk/Suu/P5A2Q+vIojlyFwVEpPW5HfzEBcu7lwF5QjzD4aA3fu6vIIPtZTFh1ueEnf13PnHk11wWte3WruLmcadWxTcm9HK1FBPr9GJhMrmAMPImxUMkkQ6W1w9Mj1HDhiHFR2IHT7zFU3ckbiM/XlzglqkXRpxHO1RbwudlT9myfSfyUZBJtTXJ7i03BZGnNCqKOMG89WzN76z2wfu0nOi5bABYjBRJVqagojqGn8GY8MUw2Al2PmSB2l9zTpkWbgBPTpEZQHlF2371oILH6tWJ11+Klwdk2aVv0e0JV2zJNFFeXnH2oABgCqUbd0agSfzWg5wMJhiaqLTqZAUYx6H3hG5o/sk1DRVlchwukv86D2hMBLQV/PJo8XuzPlcRufq/FGGivzCv36Juyy2dSZG5jhzbI+6jp+SVQlKXByNhPTzDXX0eisrW3whjcYSdb8AMckHUyo4rZvKM+eHwuD3SpzSYBcCUOGseUqpqXFHv8OemJK4R89/71Lkvd3hqij3Onb5yMmey+rO0ihNhGtPOXMtmDVZKmUpYOla/HGHGnSyIg71L/nMCPcHW4cDvpnsDB1MRhCgwh7EtyGQZ8Rp0bGMZdzy6ot1tG22vE+oEZBlNcY2akND4zKGLrmgJRxPwcsHAXRj8zPCZp/7A3HjGQvjPoryEsoNAAg4eSXDCz9oafLYQmJJjCYGFTR7OgoOhD+tKVpwGTFDC6fkWYUKeqWZ/OdlpBn7hRnDBdN/h/Zb76rjPIW9GOzN5zdiFoaQi8lcgBfmVYRMvULMAMfo3Rv460lmQMs7vOeq4pj+xbb/jo/efXo/TYiF9yX/47RIIhqy0FNDtCHJ2//inx4qusbc3GOXzuBmmC3OtuRtaHHn+pL5q08bdh9ZnAXPMHZ893NxBb3uUNusgIXQhfVuFRt66uiy7Y3h+yqAMO51D7PE3mJ6VTUhtal8GYtO0S/ogMhg7+9UINbGEIajty8sbuURAoLDNbw8ed8XPjpUPDDICguwbiu3hLH3proKVws/8cgOrPXEiBnzYLzYv/hbnk7ZDy7oYFPgmL/zD9d9l609I7MNnAVv9+3U3Iz/nOrN+BJMsI4MFC5U/hg+MDCAz+27MvjOAy8vKk3KcLfBOh0dfZzlkjyZs9UQ5i3qRV71W+UMtKbX4iBlgIOtUz6xMmL3RZRRJVImXxPO+Gsmgv9PZGUxzjHzEuhqa+JehGuN6o8jPIq2MjJKHZJi0Uws3HYaYBoqwskEqfO3xznkudLOyFC5sVwhAd3+DU4lEriwk3vwTDzURJxmdpl6rKfetFUBIHFSVCVdQYlAr5k+DWPLkQXCEs02moeG/cSVamARZ2b4z2xHjeSjyR7cGKsvy0XbwrHz4lmN7cwevc7geC54sOqKkkn3mF2C/X2gsoQ+UWVqgYKzi2G3P1dGdYmFLIpW/aNXngUO3ZFUCI9XnY6Hhg7NlHF3JCxErGIjvPFC8O/KpH6EcS/sLAJq9AoCJL5kezZpPVfYe/4/1fTX8w7ZLoC2MXQMguhMAk6B3pbPB0E4fbopUyB8p+NkuIkWyJYEEMJHxM24RKm/ex9adhUU8/dfCrxPARYf1pZjmytjG3PUvTtKOnmDQFk4+N/h8y3lo2SmWip10tiVptfRfzsi868NVhXFV/Ve9AR7Zh3IZc5n6sAvTVXqP7HW2CxS8uoJfeJpxVUj2/11mFoGjLBRGxZXLZvFxJDeTiBsuYizB56hT/yegKxzpzX5Go19Sd8YDgYLJKMK64nGcb2Ofh12ywRnzHNUjGLWXFV15O4Ew61Ol+4T4ACChSHnMMMTw/QmXZBNZZMufX/Cl/kpk6xQCW7aw5//Ha8Gg9Zs2QZ++P/RawbOJFJ62EKC4TJ4c5MeVeOjKTdE3BwNtg5eLo3oOtEROhYgU7n3WnM7gr9SrbcZniuG3DRIezc04hAOljiu9HRse/KkNRrlDJ4LuZUo3/y7ITG8/ZdVSEz8K5G/tKmrzR7k7HZmSSEh8ODaxdsnSWOJsJzSGDlP65sawKlhEbM6sxzLERL/dDelDQgWo7XiAMnXEOFOFxOx9EkbwVRdSpnJJgW8vq0pmUFpzSmiW5NzRZk+FOXAoV+J+wLRDVPHS/uE75yozBw0gkJSA5IazOipo/Fc1CRxsxnpKhwbHM09Y3ajCcDQlykFCh5+/uxCE80aS1U8ZdWNsf0kuOO+r/pCyRoDKQ9v6fMWeKLHZBlghoEPHgm6/3n+RdCVbFLF2WL7PNVBRO4d9xXT4+6h3kc5uCO/BBHS7tgAV18GThnbTRxNKqOrQrMHJ3/L+xHyvkp/BBQ18cqaGVm4RjdqO4s0c12eGqa6vm9x0GdNc+m6sBJqb9VaANg25NsRIwQCQjbCvjSWEN5olfR+v/nPLopAfY2/JNGpC6ycl1cVMRsBKnIIKPyreIjKrxhgFQxannPidib6ThD+R0P/hlmaMqOrJEbDbSTdSaBdH9DAjwVKkl7PNKXTb3ktGsQJjCX3xRhN05zQJiv4VBxDNV3e5U5yc57ehnezCOdqr6wQQi6syPOLylvWux19HaHU/v/deM/te4z+1Qku/cpT/kDfEP1QuxiPxmG9TjUm4QQ7tkn0XHZKNl5fMNvGoFMZeImagSOGbeBzZdhCZ5sUD1Sm4/6LXnlwCsnqM3CLFGzZjb3ZFgl++cBiut9wMJKmK/sjK4TiwZldh9d2FALbU/rZnfmE6BWUZ96RjjZTyrbFSbRFyFw7bmQIRqm5OH2XfXOvoeO1uke3NJURvTczdqzenw1dT79x1jsWp1cYjgaQGWeI1sfPW9cObpmtDxfzC/kipj1hFP8/xFIvVHajBhnZP9adOxhfk2yGme5QXqsl5BsVr+dbYQ6yawDJ2M9CsqaXik3ivJPsPbQkmPOYo7IIFD2JJey7NJUYsoaU8iK++dqFp7UxAo6CQqWMzKJ3YYW2PiFsam5ZkscMhasv5VSpFsZAwDuJTzpyHAKVMb+5yLozpjTAVlXqF5sRyIfcUaU3nVF+3yRooP0BbrE87bG9GjM3ZdJiFPnBPEqh4rTX+WzE4ZlVwCna2n+LkD6wWFHrsPygjXJHXIykqE+VhTfGAuyIat6bSFQWRhIcC24W4zpOKxtrTxgpwesKw6D5S5pGMVADFAiL+T+WL5G/Pf+ue2dbbYnXIoi946BLKAsjyYinGkSfpTOoUgCQoESoFGlxlILVMvFa/Q1cujo63phMnr8ZD8RgpQB+1nlGHkqgDrCepzeWU3P2WujC+RjVyEXULsdh1D3aaC8oYkSHopCQRuj2oa4y9W2mKLsbte2BqyMPj6f2ATXTqXtYVMhNm6fUq/zc3z5s3T49oOM4/LC+lrELq2Ir7GVzg+p5KjouJ1OnB3GDw6CH9bwP8oReUU68p/yCfz4QHHkHm31w7sWMZWvYEVHoWiPuTYIfETZw/pEzZejVHLZSni7N8RggEs7LnycOXY42tiHOk9CXPYmGJiO/ah6xnfK8BPCEA/2ZgL0bsNVeZudimILIknnWOraTaNIIKAkszNc0+c3js5PZpDt1+QeTwOOQxNkVV0mglZv2zpyTUbEz7hGC3vexaJS86nsvorYiZNNOurChvATFlg7FVnrnYmNiOtaVc5HQ6fKGcueWNCkkRPSm8bfToilOPXTYgsAteZjbvY/jCNkLJY2p060uBgVVDsbtZalSa9z803ZBMOlojFA23ssvsolHqbpVzNHc2hw3HUr85yciuI+VxY55XE7u+E4WnBn/ZwdDPyXTdP6CpwdyxNYiQl142h8jX9XUOmQKvamVMeFicpGuV+F0kXNpikqHKFr76fY39Q1De6PlcDByvCwV/qqgqoaafuCWQCbJ95PtAdZnMja53+bcJ3DiZn/9JG4svOK1DLFjQgtCYrqkuIO0alc99A/Jmawig/3PvPbPiErJOSYT2Ajlq72YCbmXwbFvT6SacrywL40/tQsEPZvVO54yralT9O6f8Uo9auqGqNYEWYCB3dJstSVIEeghpPXF2D9/EWo5NxVdOe9Smblrc+UfGex4zGyL5OtpFH+3OeyeYyKvTr7sfpIgfXIDatjJ9LwZIiBnt2Gld73sKeyF0WJF2aw/W+hmas4O66wJwYR/hL4lCKyYtEIcG4BvDJL2Vct83got4Wu472HRoFJhqD1kqITA/JBzPPP+VVhSbMzGOIpzi14LCBhqqeCeCuaw0TXAKp3qK9Q44GMBfoAsiql7hvO5k9ja+EboTZnUcoddaCjSXtsEJdxVp7N4gZyYdr0ut4Bq0PNf2NlAhvtzA1s823mHva9c73x1xhThxn0VDeCFet5ZfwQOuqN1IhfEvuq34WRqHrwCewrED0+QROT6yDTg1rvSytKTuG+yQ7Qpf0i1G+pUvKyGc6cGYaDlUVYfQgcsjn5OhZFOr3qhhbwXozFT5iO9C+6gj7y/6veQp+snwnr8W33IN7mf7TRd8d6gzhPcsPCo/yjFLkLsa2mMrln30XCCBB7v9BN/IhlWzUZA1bkRgWuaxTRyt67B+2SNnXhgk8NCdwR40/iT7sqjFnEgXk/s4iSDSIebXQ/XDHXzfmBkNMQD2Yp42sNpPnmQNZXl/Ncd+yYGx0AtNVxfJJ3yb3DPXXVC8/AGhprrMSpcAU0qIkCdrQWJB+EUx1qcYFbkObTRYFae+z9gOtVy6fHMsVS89NqmWRrc5CyKlemPIhFs+rjoYaFVuD+E3FEIdsXQkBwOmBXn2EVey8+Ox+KTpNHpBBdhmuLc+XFE+10s06OwZ+UUg78UFzsnaLEq57Sw1kbSSADxitTLMqaF91UP1YMOc9o91RS+eJLAYlV2EofTxGxUIHYMw6cag5Pb/WmMZvgdZ4Sa3jFcxBUdRcx10DZPe2MI7zO6HVfu8JR1wOhtN4lIJcnzg2/g8w9XIQbRDG+2Vew/rrhngDvmyaQLzE/ypuB65k3HhnOHAP4wrWnmPGuIeoQzllqksroNeOnLXvDiw7sB4tqOmZIsELGLZ8k9LE3/c/9CXSqijf+TV2BNhWdPf2mHxIZLHwPaI4AH6UtINWPgdPWHD10BE92IbHITzorKTuAf0nduIWgnpDDzSUr4FfvG6Vsap9D7zjoh+T/LOGXwOQlZotO2EP47tjGQxzvnQF0GheN96OXsg/Z3xS6piUjYafYtcIQtpwMogpjojY9hKWpJxnt+KwXRdVK8otykGbTHI9jbOtlJ+qC2aV4iNciaS2l1oyN9C9GqLHafvjoTW3MkSBgIVvFLp4Ctg7uyM1gp5W+kG1DgKSHbIe+bpVK7ah4N5Zdnib16eN+i2HRR9kIukvNCWTcrx3/A6Zp8WkP87O246QFNf0D89OD2ujnbmo/RdSCge+txsyjFaw8tXhvSwHa2Vzwj6anuoB+XrX3UQB//b32h9u+uH3Ool12pV7VDHYP7mapPUqQgrA/POTq6XXdZ/ER0Sgr7BU9x5ilv7etzmMQvVPo2sd6RP/+TXVPZSh5q/K4ukqThPPfahxFyV/kK/979KxovErIO/u/VmPONEf6X16Xcv+q2vf/2GQVOMoHPDGwpVedMepnJkx5FBd3zZwOUlUyYS906Eq/yRIhgvamfKkGMJz6Q55BP8NqPVDpc8rLVmNNZf35IqknveWXNVnWnA0qBre3W3Y6T8Sy0Zo4K/Aw4OGnAmIkQjZlxQoyBZJAi0Z2KhmkwZN8X6VRbp/zNRvuaFCJMozZ3G1GPtSetjsGQzFU4JCn2yM7yqR+Zuc/f40cixa5uzWYnuDzddckjNkB/mLQwv38WPqJZyvUSGTBGDwhtRuFxgz+ErrPN2/uwGSemASLc8YPS6QkrCizYN2KbYHP4mH+PEx3ZCEkn6ciKnGjYFm6GdcNsgECrwB0zzd+8AxNGM+YvAZ9bYT8iJ21Z0c6qKF7oiQEUVE4yuf4352uVRGEouPp13xmdMzqSBcLOveQVMxzDwwoUAEU3h3R0QBQjxGQQZo7p7jikKUjUj5kngSKHeHU17DxOgesreZE7LA+05V3uJgltNztVtRQbge9JCfssL6MYL64W2L6//nsC/1438BPqSJ5LWNqeb5/VxktRSPhm2P2ah0lTRvL7BtIbnaGtiBVPWTM+NyOgbdYX8X+TNjoHrVk68pEJaAncye1qC/iffshXr4IHrmQYgH46ltl1rxTcCofrTp50a6sbmGZCrPq+rpxJKoCSFQZjvtfm3mdriVJWB2nbSNxSmbckkSQUZWdO3QwcHcaX2uS8S48cDZz/hUbHnvvktR8MFMSrpMoaePvhLV+h/+IDd4Tjn95beHFNBhP1vMMMw93ImdHTyNnzZ4bDeeltlg3/ux+uEceRA85ELJml0aAdfieiudUEFAjU4gjzVgsMEtVpRw5g2TLYBmULiYFsqBci2YtkP3OSfNDt6CnXbTmKuPIMOWcHj0D9fD8mtQwhgXKsLCxFRNzvRfBosGpHchMMfnW8dJEI2uyOH/K7bCRNfsTcQqTU0UtZMEZay+H2ijLftAz/uZD3b13KXcqFYKEHVCwtzPEowMYM91yCNYbJCDvNZP4IRnIORLw5ObTEc9vJdS8l4O2ZywvZcrfowfpyzQ6b+3ddlfNjAWQ7BBdksX+45xT2FeiIni30uGSGUPrymDmQgICpODSeoVY+zdHOra09CrXH/3iTB6VZukLSoX6N59CNAKgDoMwg9eQNw8lXWFTTY3Uh1LmrdZyOd16CL6e18Zbn7DjP3miZorzHeaY58Sevq1O/luxsh4R57N63B5pXPFh1crhR46i0qooW3dnls8KmDL5VwVf9J0xpmD8NxNDrXqEa+cZMfzHQoB3hA0eMRTigichpjnwUHS4gtWDhFeSBETu+RHKR0z07m0UVGHCQzUeP4YK+Hibrz1BCy8hOpLlEHb+okYuziqNE7DIh8pN5o8wraAW2Yk9xEmM0v04sOvuiKLuryBzyRXzMoNBgelFNY0whIcgNrVWTqTGM9d14ao15yNEdVWkeOLu6dVNTrQCRutuUz+/4YhKQUv+NL/FOMVcBSuAhfnkUWlXIAITSVuspE8u2vh+nvulhcIXjvO/yVwwEdENGeGMJ/9u3aDrkcyiaBpBQGG7VfplItJGAPfnyxEsqt4Alc8RV6gk2rHNQ8RprKRbRatD5tXkbn4qVt7kVZvTZNsdzH0fjw4iBeThnwU8ZHTdm3p2/zYz1ZXab+Zb+/B9BsJGBIp5rQh/Fsui+QnwmvPlGiWzp2X2HCoAK0ifVuwB00eAX/gwtT2p/1vBykxgnIg8SH8qge54qp5xqcfJ+pinqdI//k9LENeHvlr/CwJjed/NvNRJp7gJ/Draz3QA0U9Tv6/8+Xor0dJ8Wn54vpqZLZxFn5P66n/LsJzG5Fic32ud7CQGarbx/KSgOYeAATOiai8dvy8vLLhjXMap2AV2gUhy4AcxR3LVgsmcgg9kIBMkfGITBGvzzHxOvl+WQ+DDCqtufolc0PMS2S9FLLSmGAYlliyLaQjNru3RFUNYBnhhB02FStP0XXx8fKEUn1Dlx9sanmZ9ydqHehbKPKavW5S5E3XSv+jzbmBS1J3DxCdGeuYw6dPnjvAvfmtDeN1gNvc7pjVJsL3cROuH+UPlB4M5T8QB2CL/VSE4Vb42a3T6WC3OsgGOZmJSGUhO4tjoZilAMeAlvHNCs6Oscs+IAIau8hWsOSVT92t6ACGwim851IXBJ5LfTN0cQ5rQciVVpoaZzAcNBtKlYH1Aq6SSAk4xu+0jAUd2w+sRJyfgY1YubbT5ZjhKhfGdEinYV6plzKXVWls6wkJYZbyks1pv8TbdjRT8NVLgw7tnHBwaURR3wP3wnOceXC7u/lZoy51m5WV8HeU/+TqmcaYVlenwx5lpETTqd0P8ymOVR46dDOIosPygmvspyx3tjZKrFTneq8R5MMCofhkpAP+x45RI+iuBISqsVvf26b+jeotjR1OCS4YagpDv03DRZX66dbsU1rH/h0kei7oDeLB47Wewn57v6QddXCQUtMKgsUIsbZpfHVcsv8cr1rWFv9/lyG35qw03CD88176VHMF/oP4/7Qk0Wc8GkT3nkX3SSF0WiFd/nNpJlP1bvBifnpAmJi+i+FHLaCupudzvxSjgQrBfcme0c13NuTlSRmwwHwh79OdnT/P5NCyPamZdeUctppZPtdrROeSnMbCNseU78q7vxRWZDP3Xi28Qu2zqZjush+6VEht1TLswP8YRh2lLUUrHrSRUrqLdFyHOmxWAPeruRAWIp+xl+4HkvreLl56dHVFmGoicAEIUnNi6gKIvgBpBSLz4D7Su8WsvnUc7buCAN7yX96wz1P9vEU5BTHq3yOqE2apRCM6sfgdtsqbx0gOYpxXWUEQVd6ejkh9JbNCDxBtXvLEUZNbfRAMOR2S+fNSKtfWGHNUgR1rESNWjHNWkGDT3q3zRryv3K9+1KpfSAg1aMli5tKg+2IxWa8g3vaVcAzWQtn6KSEn091VZ+hX0MsNfARAEm08xI0A9e8hXd1uoJ8g2l9kqDCTpuy8I3i1xv+LLguTF24tfNNNIVhuTpUQvj8xUBmISwJMDx4oeUcrM60qsbxSHnxL9mzg5FkEzmtrlfr0GLGFemHHIO4pr9Svfxpo4NW/+o4/+OOUvrSgk5/1KI2d3nwP8USuZvba4gEMCVNi2IietUiSUMnJVFKYghTWSQ90rbmcxcHO0/9M+14uLPYp18m1o5cclySmnyZDFywLKebMzOx0EY4uOj/YD+RCd55e3HxyTlyF3A8gBnU7qWpMep5T8leciF1dQ4xaKP/z/sLBiqP+W3e+blPo77c9W/ujG+KilkqcE1ibqIiRb76+7+LHvspBIrX1rA8aObMtpkssoouKJKIuceOWQEprTqyq6I5NA0WWMqDLDuetKsdAqq5w02/IXsQYviiC4GGxz1CBwukLl9u5UUj8s2xzhREDG75c/dFOJeQ2lPowB2n8GiMtee+xT659Kk1pTWIN2ocDeNr7S5tuBQoBDetwSdE9aECB50OK5DzvwdFwmFYN98TqY9xkLrCom6XdBxMzRs2747GW97CMwDsPMwF9fCMCH17m82yDcwam0MBNT9yds0RItHymg5Cx3/Eeuq+p1TZRbK5Dx6A0IFZ5/ZIy4EmY3MjNTCs+pISHQP+IpmNeaOg8ZR49hopBfTTS6bAuGaqsRdEB3VlJRq1xI6O1+8BRF/rXWlckmUg3n2NWUImL1CJqpuNR6kB8V5YZoZ9z2wu2HEpIZjZaeC5kIzUrx1h5lEg7i1aSHImEpV+By1gOYua+2ova22bY202iORqykBwedo3Dnxpvyg+wzPnHZ+Gon5qP3MeouaNH8/pqpy6J7xB/h7Ij0clZS4nYHm+4rsYqPDwYwGtyGp1zUiBtnxAUYYCV/8LycKAcTAi0Uu1gM48jzjUsyPJKnUeMAvOnew0lVcPZ5I6YxdfB31Oqw1zu+CZ91VQQFjTpILuM6pqO+XnXLLP9A61AbRnz0edEvv07LrYWsr0tH19iFYxe7mMo0e8oSsTbLlSToHdPElvsKrm6MSUnO9zt3bFPNyyoi7W116cFOj4jJf0IaLtDxxLA2FStvkaN9G61fnYhXSf8peu3EV6YZJooyRqdMV4K7Q+mo5h4LYoptZPw8V1g1tyPPud5Sb7dhss1nfz2HlGCOuXHj+bG/EhgBGAgCR/WLE4MKRcG0oZAOnPkvP5/uyf4oFORMu+PiBdtCQ5B+mBeSYAO9//aFsrXVLbV8N5Xe/gPAXLh7mb5OlNbYQtSQSf4LOc+Ko7tPSN86/uji+PSUkSJay8EEezuDu9vpjGfY5NUIPxLgPvErYbP7hjPDUFWj8XYahCiBVeBPX9CbG6/tcyUE4MIPs87zmjzluI2VJmOIt9RVCDWwGj761DeSchWz8pnpPNf6dssD1loqUyONqtAOH9hVARu/sxbd37aS1kLRTwV5Pq89eYJkL985LvCwtnZWJaK9SytssOtBTXE+D6jwupMa9Qpn8M6MsrG49LYKZDyZEQ+tZjcQ/bRJTSPDMd4YocCOA6BDwuP8+eb5IaTgXR9dtw97otR0XniTMHK4J6hKRVjllR1mC4awEKEd1/4d3Ps0pqzfFdAhCHYne/ZEhl8C7hs1O8MnLlCe1TXOAAq78pfV9Qz0wRbdjOhRiuWdJsCdRM47b/ccOW7OTZ2Ru+pyWv5xeI8j+a5BnNy1UQPYl8mpo4u+QwoUkZGseGEomiZNFuiqMSI88h6M+hTwTt8vo2fXhC46mvQ4uhHaFjkuxGtUwKYImBev9pPoPJxsNsv2ImCH7NgDA9DdNIHYu3EnkU0DlFCDC8atKi/jIXnHA2tHvf7pQpGag+aEV3/S4A4c14fMm+AiVqsJGjE2q1YmZY0oG0eMIV7i95lkJ230kavZy5O9yH7WvEMTgVnnWEDdKqgmd1OQZzPjQXo2hu9lKnYNBpi+U8w7yNc1HyVP04TxgsQjgrSxDcvTdFbticjKCvXEySHuCyVYRGgfZn12UwfbVcit2fyfl3yA0sW01t5tUQsJhfuQ5fASlcdUs05meOXO29ZIpuWF/wqhVMA7ZIC/zCfZoY2okM6wz0Hcv2YN+AWZcFX55GR1bHzXsXpJrpi5jzQ7NVECRlu/3KIqOWzIPgKJBrxMCprHihpGknbhAYGOYmnGrjpAxWnD2hpL17Xs4r3Tarp/ryxk6FQToQXZTOeJFx+UGlh5U0DEk9qHw6aUylViybRlY4a08/WdI4YC4V9okO8d5rWhR2Yo9Qaajc/PHI8xOQl5m+hYY0k6XB5hc24PUZxsIgg6lFD5gn4iTP7VpOjgYtYDvpoQU6f9iuEB2tRDH0IhKE6E2TR/VmRFIXuAu6g8+tnInx/kNAVqMaCESz6ynl+ZDrzKMzW4lhF/qOHzuMlPUF0NaUDC6AVn0g1okwbk5jQkv9BvR3xD268lZ1PF/bNw6guTImTH8O4zGeULYWWOWahEOliwtNP3/mcu6/rg/4gbtkj8zhftKDhi+R8uXUJGOonnocof3s1ldrbZjSDa4KqsGlCa+PtpkemrJ8E9/b8RATmIuAHGceUyyrD9EtOlnYtq0YcRQ7W+l9M/QZ/roQzw4zAXcwbMsBDAKIpcwJ/cYLPS4UNWwIcCgY1SW+jPKlv/LgXwNl0T099CLGLdfRSy7lbgJuo4WpqWS19tOwULRY+1tu5lY+eqQC/O+hAUcdKeW4lI2MKkcw+ioImxItatjLVMW0OCBeAhQZ2EBzlr/GItsOsYnQ9hfYkTLhlCMdNCnei7tLFYJMKN0EzA9x8AhrRE+1+CZW31cZ+Ul0DT4LSGImz3KzMgLdtfs4cGUCNJnhKrcCKnCpygeeHaWFCOu+14o0WRi+AHqfDJcc5jn1z+7zeKXnaiLPqI8ltD3OqUM0Ch5oc/wmkVU2RY2da/l3glWRKPAKdu3bPaBkusXJgbB5AslGs/vMa9QPG601RrXGSZEE0FVT0Ht3BApDLKQl5aVWycNvTw0d876KEsbCdrkougnoAAQRDzhVEbfaUMinql8vwv3eY40TsdCTjO3Egd8oCPFNHz+auofUkqiXSo4hbX4sqHxfR3zFUkNZ/K/MnbaNJcuqQnHqiNL9NRQFsGybt7CPdzV4fVtdY91DWlbTq7KBjBzTnU5gnGUNFTQa0NCX4zYf0ibS7t6xkLNxb1ffwpRC0C7DwRMOgeHVjCytOO//v0rdyES2lxorXHZBmp3wfxlvvBqlSzW8OLlFQ/KmEZrGZNxEoGugCRLHi0se9uOAqron6xMXJp8m71mEVoBMMyJ0IJ4Z9+4//uGMSawwIZhOe7tuqM3IGhF12HAccdabj2slW+aVWiOPukYT3mQTYfGsjAtb1I+MUFRU3/w7i5Tl0nZAmOaHSD/EZK+Q7+7U6VKq8hdE1VKhwoxtDRb7i71bgOMvjTXL5LvZGQ67B4kDaAyfdhf29dWvqRm+Brsp3RibtLr/+DUxkXVP5+WCnJSMWHRSlVTTNOqX07uNpEXNa63FCLWEeaCEqiMY7BeamwxRP/xQW5wibcJHrO7GA8tCEmVTkOZ8Wy5Tz+0t6Bje/SFpM5AiVdT0qzrHgHYVkX1OMURlSQ8/sk4iwGcHER01il7Qh8gnOuspo7Xyn2Kcn0qRAvGT05HyIcdCVK0QmZJBMmNYxY5sZrYJKRhH4H+fTg7LP2JPHX98AMPS46FJUiYHvX26cXkisifpIxs6Yc1ytGf/2CpQ1PYsK1/y7ulkkb4v/pgmz4DgdO3wiNGqZ8iaLbSkh+HP9Kgv0hDPNyuTPmzzo4PJ0xpGkhQpeNkMJ0Zt65gdNYCETfErsJV03GWMv1tdAdbqS7S6olipvIu2LOOqixMdWc/DVvkg2a3X8xJgBH0lA2omfSmy466agG4rABrpzKjVRUtzrKQ3Np8ZZwBpcGzlUR/7af570jDmaR1kT2Hv/y0/mzYCFFXRxsAUpUW5HWfvVA1iru+KCAXjNV9w6A7Vk1ABCqj8sjtE87p7lXowieulK//kmmmB4976X5ggdivUfXMGuDeMoxl4SXmDLurnwslFi1twbtqHG0t4zpG5Fp7JuWqItEu2ZlT/GLTkCJLw6K87ct+Fizw5Epa41I2H/4IQkHHSwFNzI2wJJ+cQHV8C/LHVyi7Kwanc+ADcPA4Ff4zwTrgrLPw7e1Feoou23HCj/noohErck6Nb24YFdoH4ZRKraw/dY83CiGgydlVUVw2HSGmTu5qZxvIi3OrYNnh3a1osBeIKOfFenyB8bJCKrtRGI7N0NHwO0qQK/5ju0CFa2qTjj1JTOVSzTcBZvpvtYo4kBvGij+VG29ib4hesB14Fr7v+MLi39JCSHF+T6jg0WoV3m3On8djOFSM/MAtFHRbWXKWn0hGGypCIzVkD/tmbd3mrO0w1iHsk+RtI5z6g/hKfcPH4leEj2PFhQbL7Vhvvrj8JAntUz2NGkICF4szUBDBZyMeqtiByzxq8vklBItDhuvEH6Yd7oLFGghLf0jni0HvPqPG/yrgmW7OKiOs/L3fu+fJqP1wM9dysf/x93Bsiguxg7RvOR6r/7zGmJwzbSGyrelnfE9b2j2lS3ihfxo4GvFd5aN7xPhWa7bA4p1AKxJoIRJXUgkBuONQF2iKIXDGWex30rcQ3awpGdHwxJFo93LGVzJQOIQUwqtVWtr9UcFCsH80ZOahgmNhQ/mbX1wh3h5nzbfQWiy873ecoI1sZW5G3wXm6XWEDr6jGxxGMe0fxjSPAKViiLwC382VwgeXFWZpJepr35HuxKcEeEO5Dtvoo7siQcBO+2tKHbtoJcWc36mvAH9XMX+XUAjrZDz7fdsfGekngaecY8yhoF2N3UjgBeBgHTt6msfuAqjQVgg0EOc7dG/eDTsaRuK9N+vpC9UyZwFtz2G7TsJT9NwqTzRAZ2fFtqcT+lEY6atLA/b8EPnXISeIGIuB+soVbgyys0KWy7erGM3WcYOq6bXMCuMGMSLPfUwJ+RlLxkghGnyIQ5EQ7DJdOvdQlXG40zkysp/ta6K7NNxr/U/GM5KzedfppGU/NetzTtITHA8eDW6t5cZNdL91go+hy5sC79H5iMSS+zrI665OOWh94lK9H2whLNMNqQBQF8i5EHrRVwxWo8Fgnes/Ztw1Y1RCNERNFNiDHRsnn/O4S/8xapBpxabcqIjrwQoDSj2BordBe14mq7vD/0hciffy6eIDXsCQQZctx0jSiphKRyba5HEOTgrIjRe6t9Uq8LnAX0BIch1LYU1Ypm5AjR8DUVFAP3Zl9lBKpOYzXdhD4R6YtoN3x50SEL23ZOhF3ZKlncx//JLg48Hofihot/Hr2Z7NKz9Lf9/mzkNn45LIOw40pOwQqrEgz3PhlbLbHX/9Xd8vIEb7YSN9VBdHY7tKVdw3ZUXyHDCkDoo7yUBm929957gAqXvRZv06IVmrjFiIBdLH6IA6ankxWZImgoV7BexZlLOgFiM2p3pizJNCSxzGwtNwEQ7VBUMqpnWOdIE95A1pSlVevoxQxI/5CCbYCxn+pHQiK5dcVqwap5M0c1mmcBdOFRY6tB8p7nTyWKlmxUau0v5IVyo//yJk/eeWzmVDYO6MTVWIDCdkjej/1lIQ7KkC5Z4dG/vMe58Owip6B5Yh6s0Kii/xe/j/FJ6AoL1zwwiz0zXGjvIYdCQIF5+xUOW2nJ9mDwPMd+bOeabp7LDODbK+lNc9XnQWjvYGTu9BpxuTrxycMTV+qRvWd4qR9UpjrSh/VMwNJkd4P6flybeWfapJ0jYFiHX1ZOjR5MzVya+4Kd5L+TTe+O1qU006rxqWwFvZ3xR5oBv4kXfbnTPW3jMH67r8v0lLEEG9Hcj7ryc1q2Vy1h0Aus+41gpsr3oF7E+nvsWrHsxE0yslZc0YYK5bNxZlZGbDG8zEX8cMgi7x2y5+H8zP8C0tTHVK+EuVvIgfWnfMaWancuZAvKV1gwR7tODB0g9q9S2r0iue6mdWLT7vxKILIcwNOOA872EsBRso27iPVlrqOsu4owOMNTYVccbLHLhiSfsjyJu0GBegJgwiEHoKS2sV9gV2JADcnELHWo7N3YJevn7LrMkG0HU+68ybat1EOyrpt5o+bV3vwtK3esKH/FFxVhxoVV7N3CJGBb7hkJ7LpNUaIXEeyiCT5e87wbfIIHH/Va4b/jF2C5diE/OR/f8IKlsccDAd6uQ9o4/X7I00tSHG4sJZC8dBnpbvs/5cqh6UlxsdMNbe6iwsbxHcnMb0LC5L1IMEEgw7voYW+0Pb80GJybjM+iaXVf1myEUHyifT9oO1DIXZIHPkAL4QMncGckKb8dWbOlNxpj8yqMRACew+KaiXxTuvKZCVsrlVhRor2M5K6MeMp+bD/EL0T2UziL0zfGBO8FFN9k4kdXXE8JggWXgwyYkkK/Ap3fhC3gHexy49notKht4PCH5/KwZY/Wgvs6S2TBrES4LYrV5Ra6Ppl/wiLiM4y95iPyU2Xjd4k6bphOy4bNR1ZQZznOjKsLFmLbq1I7metuC6WevgATbl7ehLypchGY0bjQ16i/L8pXCy/lPt0/ncCLR9diasjErR/lgHf3F5pgmmkGDTFZU31WWLjFLn0jJZzyaeQ54bFJW4J0lY91eKmZyTEvae3zEfBlxlKu+7GN+cp/+NHWeIGxvSKPCg998KI1pflYq/k0GolOkCOpCAD2hTHB6H9y21s8dZ5uouhwzEWDN5i6ZAaigGBFQkYm9+JZFlpm2v4rK+xSVI/K/syAFr742lFcG1D5gsKx5RYL5EvuzdkT2p8a5BUTeBt2R43l6jaV6Z5VcJNbTi3ariN9qYIXdEK6JqSwjNh6S+I5lbnmOZHf3+xVrthqmoTIv72fWPJfB5h2rhVUx4B+qSkAMVbacatkO28hjpoTIz2IaeXbd621whp781jb50WK8dJpRKzZhBUrhvBNbD5uOwLGhdfoq0HWaXdW7NId1M/zpFMreoplWURJlq8PGciqDXHVImacnW7JtDvg0zN/5Xgrd/1S5rJ1cuKNMzjMZTgr7bzdtPZf9Q2rce+7GNW7XpPyH37lEpGbg7oPjcaLxDxZbmca2a0wI8CevgjtidUDNLNaM04cbjwQvpzkkcOiMBQUyWrbeFu3uL4py4ZtcRU8nBaLtpwkJ3N5MxK/jDIhSlhVEOjM2PqXEN0ePJHl6hxBqugeFC3b1gMbLCrpxb6tOg9qzk08/gvrUHRk1OrLBLxOoVyfqEhdqpoahieYTr0qYt4jHU/KNWMvtuhyC30byvCEtbo5MuY1pHr7K9gC92NK3Vy35Hga79GXuCPO3gy+I5vG9MjkZInivvXS5nKb0703aaMaEEDhpV66Y4IrbLdRbEImvvScpIYqFScLoIoUHOQnMpzHx89QrhJzeBRYSMP14CL1/bZyGiapMhN3f37f3yiL5yud8UDTYDUKWum/55j75g+GhLNOyoAO8l7gbFyqchVcVAn3yRRzO0Y8IqG/R6R73FI8Ei1HRp9NV1L10ONylLVhCzDpJHn/1wPJW1aD6v0HnCXjhu1nlYAQWlGe31hqPV8eBtPzl0e1rd+DRVXows3VQ6+MCx4dfsqSaPVKtiLpHy2T6o3Z2rmApuWTWNGBOUyFYgG21DTchC0y3OnLy1wMC174IfCGDU+WOMaK09cqmCSKCeiRnSKUTCjWmFwiMi5DRIa4w3IUyG4wjlMPGCr31QYvCBk7EEX/Oy2//KPRjIVit6kxfw0BIPtECArwf8VPoadbVsbRuFstSTHx5RPJ8qzN5cLv3v+Sneilav/anxk94PJMl6xleHGh2y3v+9EwUmCyJAVr2GpZsQSJlPt7/GCbAlMp1DdGaTfsAko7d8163oadx+pTwB8RZci2V2eR2/buQY2r2kgSM7u/cih9ys6aWidGFLJLPWj1+wXnCst/34YhfvChChEirxFvwE2+AecUWm4o7byWsMJLYqCV0DQW+6b3f4SnCspzMgDfxlTnr48WiC4uTI/MGFTrOYYtj4PdciZbunfQ3unktacMbvftiNfxScL10sIHKpYUh50SLr3kN7Kg8tKB3aygEfdRpnftmaDpt086l1IIDr0FDpxCSPxwdMCZbB+HPRnaH5W5SEMf+QOgI1FFhp+3csTZYfaCnTHhrVIokGaTmvwwGVbOiv4fJkioiemlUZbs7otH8g0mDoLh5eV8MJqeJUCcU3wduOWuWT6jY3b64hhiiEPC4CM8ockNsPwV5wb8XXuhEBAP6YGx4wyZ6jf0+HJAHz8gj6M3/AGS9Ye/eIIuXaE/bFuZjXzMKyrzP0FJe/Lnj1LzprW2HpCtTDwSJ1U4RTxFGjF9314+w/Q6/vt9jlE4vxI6dPwx/nmi68Is8U3GM0zbn/OgtVTxIo8XrQckz2v4X+HBGgDjEu7hyPVbBzJBV3tTZRfEK8pw+IYomJ8V3m3rYs+Iq1kwokX3jW/UN2v42TjuhUMyqtMu24QZQ5znzERNeO+2TzEPk32kEo5R71LQ3p/9PLSgE1ZOZOdUTFN6Pe3r8vP9jtpUQ0nx6C5UdAAwrh84ggO/kBiZflrJSQe092tiTG1X4YbKMfz1oHgJrmwg8GF1B0IK8q4g28tKbXf8+PDNqs5lxOVwNXb4AAAAACdlQzo+Irz3X6JMK94uKjkkOsZgygNh5s1//0S6sSuwQphi6ccKj6gZ6NwnSLionRABDemrSMosb8Z6iLNOSVjY75QqAHgX6n/7Qk6A+2TJ2HWhmhiNQ3AAAAAAA==",w:229,h:674},"day-cream":{url:"data:image/webp;base64,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",w:166,h:760},"night-cream":{url:"data:image/webp;base64,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",w:167,h:759},"skin-oil":{url:"data:image/webp;base64,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",w:157,h:498}};var dc={"skin-oil":{url:bu,box:[1e3,1e3,232,100,769,960],h:.635},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,700,1107],h:.635},"day-cream":{src:"products/day-cream.webp",box:[1200,1200,345,97,864,1152],h:.86},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,862,1153],h:.86},"cleansing-gel":{src:"products/cleansing-gel-box.webp",box:[1200,1200,223,64,933,1113],h:.825},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1138],h:.92},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,65,764,1148],h:1}},_u={"cleansing-gel":.748,"day-cream":.841,"night-cream":.841,"skin-oil":.553},Qa=Object.fromEntries(Object.entries(Su).map(([i,e])=>[i,{url:e.url,box:[e.w,e.h,0,0,e.w,e.h],h:_u[i]}])),Pv=.22,Lv=["komplet-pakken","skin-oil","serum","day-cream","night-cream","all-day-facial","cleansing-gel","body-lotion","shampoo"],Dv={"skin-oil":"face",serum:"face","day-cream":"face","night-cream":"face","cleansing-gel":"face","body-lotion":"body",shampoo:"body"},wu=i=>i.bundle?"sets":Dv[i.id]||"face",Au={"cleansing-gel":"Rens","day-cream":"Dag","night-cream":"Nat","skin-oil":"Olie"},Uv="https://naturecell.dk",Nv={"skin-oil":"/products/cbd-olie-1000mg",serum:"/products/naturecell-cbd-hyaluronic-serum","day-cream":"/products/dagcreme","night-cream":"/products/natcreme","cleansing-gel":"/products/rensegel","body-lotion":"/products/bodylotion",shampoo:"/collections/cbd-haarpleje","komplet-pakken":"/products/hudpleje-startpakke-plus-1","all-day-facial":"/collections/sampakker"},fc=i=>Uv+(Nv[i.id]||(i.handle?`/products/${i.handle}`:"/collections/cbd-hudpleje")),Ru={"body-lotion":"Krop",shampoo:"H\xE5r"},Eu=i=>i.nickname||Ru[i.id]||"Ansigt",Tu={"skin-oil":"Bl\xF8d og velplejet hud \u2013 alle hudtyper.",serum:"Fugtboost med hyaluronsyre og CBD.","day-cream":"Let dagcreme med aloe vera og shea.","night-cream":"N\xE6rende natcreme med mandelolie.","cleansing-gel":"Mild rens, der bevarer fugtbalancen.","body-lotion":"Intensiv fugtighed til t\xF8r hud.",shampoo:"Mild shampoo til hele familien."},Gi={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',tick:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12.4 3.9 3.9L18 8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>'},Lt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),rr=(i,e,t)=>Math.max(e,Math.min(t,i));function pc(i,e){let{fmt:t,store:n}=e,s=T=>t.kr(T).replace(/ (?=kr\.)/,"\xA0"),r=(T,H=i)=>H.querySelector(T),a=(T,H=i)=>[...H.querySelectorAll(T)],o=e.prefersReducedMotion,l=matchMedia("(hover: hover) and (pointer: fine)").matches,c="cubic-bezier(.16, 1, .3, 1)",u=+((location.search.match(/[?&]dealsSlow=(\d+)/)||[])[1]||1),d=matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0&&e.isMobile();i.classList.toggle("deals-touch",d);let p=r("[data-deals-grid]"),f=r("[data-deals-live]"),v=Lv.map(T=>e.byId[T]).filter(T=>T&&!T.gift&&(dc[T.id]||T.bundle));e.products.forEach(T=>{!T.gift&&T.img&&!v.includes(T)&&!/drops|lubricant/.test(T.img)&&v.push(T)});let g=(T,H)=>T&&T.url?T.url:e.asset(T?T.src:H.img);function m(T,H,j,se=""){let[le,Ae,be,Ve,Ne,M]=T.box,D=Ne-be,L=M-Ve,O=`width:${(le/D*100).toFixed(3)}%;left:${(-be/D*100).toFixed(3)}%;top:${(-Ve/L*100).toFixed(3)}%`;return`<div class="deals-prod" style="--ar:${(D/L).toFixed(4)};--ph:${T.h.toFixed(4)};--gx0:${(be/le*100).toFixed(3)}%;--gw:${(D/le).toFixed(4)};--wu:${(D/L*T.h).toFixed(4)}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack"><img src="${H}" alt="${Lt(j)}" width="${le}" height="${Ae}" draggable="false" style="${O}"><span class="deals-gloss" aria-hidden="true" style="${O};aspect-ratio:${le}/${Ae};-webkit-mask-image:url('${H}');mask-image:url('${H}')"></span></span>
      ${se}
    </div>`}let h=T=>T.reduce((H,j)=>H+(j.box[4]-j.box[2])/(j.box[5]-j.box[3])*j.h,0)+Pv*(T.length-1);function b(T){if(T.bundle){let j=(T.contains||[]).filter(Ae=>Qa[Ae]),se=j.map(Ae=>Qa[Ae]);return`<div class="deals-line deals-line--set" style="--lw:${h(se).toFixed(4)};--n:${j.length}" role="img" aria-label="${Lt(T.name)}: ${j.map(Ae=>Lt(e.byId[Ae]?.name||Ae)).join(", ")}">
        ${j.map((Ae,be)=>m(Qa[Ae],Qa[Ae].url,"",`<span class="deals-prod__lbl" aria-hidden="true"><span class="deals-no">${be+1}</span>${Au[Ae]||""}</span>`)).join("")}
      </div>`}let H=dc[T.id]||{src:T.img,box:[1e3,1e3,0,0,1e3,1e3],h:.8};return`<div class="deals-line" style="--lw:${h([H]).toFixed(4)}">${m(H,g(H,T),`${T.name}${T.size?", "+T.size:""}`)}</div>`}let A=(T,H=!1)=>`
    <div class="deals-price${H?" deals-price--big":""}">
      <span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${s(T.price)}</span>
      <span class="deals-price__save">Spar ${s(T.save)}</span>
      <span class="deals-price__was">F\xF8rpris ${s(T.price0)}</span>
    </div>`,x=(T,H="")=>`
    <button class="nc-btn deals-add${H}" type="button" data-add="${T.id}">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a">${Gi.bag}<span>L\xE6g i kurv</span><span class="nc-sr"> \u2013 ${Lt(T.name)}</span></span>
      <span class="deals-add__b" aria-hidden="true">${Gi.check}<span>Lagt i kurv</span></span>
    </button>`,I=T=>[T.size,T.strength].filter(Boolean).join(" \xB7 "),E=T=>{let H=(T.contains||[]).map(j=>e.byId[j]).filter(Boolean);return H.length?`<div class="deals-set__contents">
      <p class="deals-set__cap"><span>Indhold</span><span>F\xF8rpris enkeltvis</span></p>
      <dl class="deals-set__list">
        ${H.map((j,se)=>`<div class="deals-set__row"><dt><span class="deals-no" aria-hidden="true">${se+1}</span>${Lt(j.name)}</dt><dd>${s(j.price0)}</dd></div>`).join("")}
        <div class="deals-set__row deals-set__row--sum"><dt>V\xE6rdi ved l\xF8sk\xF8b</dt><dd>${s(T.valueLoose)}</dd></div>
      </dl>
    </div>`:""},R=e.campaign.giftThreshold,C=e.campaign.freeShipping,w=T=>{let H=[];return T.price>=R&&H.push("Udl\xF8ser gratis CBD Lip Balm"),T.price>=C&&H.push("Fri fragt"),H.push("Ingen kode \u2013 rabatten tr\xE6kkes i kurven"),`<ul class="deals-set__perks">${H.map(j=>`<li>${Gi.tick}${j}</li>`).join("")}</ul>`},S=T=>`<span class="nc-bubble nc-bubble--sale deals-bubble" aria-hidden="true">\u2212${T.pct}%</span>`,P=T=>`<button class="deals-quick" type="button" data-qv="${T.id}">${Gi.eye}<span class="nc-sr">Hurtig visning \u2013 ${Lt(T.name)}</span></button>`;function X(T,H){let j=wu(T);if(T.bundle){let se=(T.contains||[]).length;return`<li class="deals-item deals-item--set" data-id="${T.id}" data-cat="${j}" style="--ri:${H}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${T.id}">
          <div class="deals-card__stage" data-stage>
            <span class="deals-ground" aria-hidden="true"></span>
            ${b(T)}${S(T)}
            ${P(T)}
          </div>
          <div class="deals-card__body deals-set__body">
            <div class="deals-set__intro">
              ${T.badge?`<img class="deals-set__badge" src="${e.asset(T.badge)}" alt="" width="56" height="56">`:""}
              <p class="deals-card__eyebrow">Sampakke \xB7 ${se} produkter</p>
              <h3 class="deals-card__name deals-card__name--set" id="deals-n-${T.id}"><a class="deals-card__link" href="${fc(T)}">${Lt(T.name)}</a></h3>
              <p class="deals-card__claim deals-card__claim--set">${Lt(T.claim)}</p>
              ${w(T)}
            </div>
            <div class="deals-set__side">
              ${E(T)}
              <div class="deals-card__buy">${A(T,!0)}${x(T)}</div>
            </div>
          </div>
        </article>
      </li>`}return`<li class="deals-item" data-id="${T.id}" data-cat="${j}" style="--ri:${H}">
      <article class="deals-card" aria-labelledby="deals-n-${T.id}">
        <div class="deals-card__stage" data-stage>
          <span class="deals-ground" aria-hidden="true"></span>
          ${b(T)}${S(T)}${P(T)}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${Lt(Eu(T))}</p>
          <h3 class="deals-card__name" id="deals-n-${T.id}"><a class="deals-card__link" href="${fc(T)}">${Lt(T.name)}</a></h3>
          <p class="deals-card__size">${Lt(I(T))}</p>
          <p class="deals-card__claim">${Lt(T.claim)}</p>
          ${Tu[T.id]?`<p class="deals-card__claim deals-card__claim--s">${Lt(Tu[T.id])}</p>`:""}
          <div class="deals-card__buy">${A(T)}${x(T)}</div>
        </div>
      </article>
    </li>`}let k=e.byId[e.campaign.giftId],z=k?k.name:"CBD Lip Balm",q=`<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${v.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__art" aria-hidden="true">
          <span class="deals-gift__stage">
            <span class="deals-drop__floor"></span>
            <span class="deals-drop"><span class="deals-drop__core"></span><span class="deals-drop__spec"></span></span>
            <span class="deals-drop deals-drop--s1"><span class="deals-drop__spec"></span></span>
            <span class="deals-drop deals-drop--s2"><span class="deals-drop__spec"></span></span>
          </span>
          <span class="nc-bubble nc-bubble--sand deals-gift__bubble"><span>V\xE6rdi<br>${s(e.campaign.giftValue)}</span></span>
        </div>
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Black Week-gave</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${Lt(z)} med i k\xF8bet</h3>
        </div>
        <p class="deals-gift__copy">Gratis<span class="deals-gift__copy-x">, n\xE5r du handler for</span> over ${s(R)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis ${Lt(z)}" aria-valuemin="0" aria-valuemax="${R}" aria-valuenow="0" aria-valuetext="0 kr. af ${R} kr.">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(C/R*100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(C/R*100).toFixed(2)}%">Fri fragt</span>
            <span style="--at:100%">Gave</span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
        <button class="nc-btn nc-btn--outline-light deals-gift__cta" type="button" data-gift-cta><span>Se Komplet Pakken<span class="deals-gift__cta-x"> \u2013 udl\xF8ser gaven</span></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13.5M13.5 7l5 5-5 5"/></svg></button>
      </div>
    </aside>
  </li>`;p.innerHTML=v.map(X).join("")+q,p.classList.add("deals-rv");let G=a(".deals-head [data-reveal]");G.forEach(T=>{T.removeAttribute("data-reveal"),T.classList.add("deals-hd")});let J=()=>G.forEach(T=>T.classList.add("is-in")),W=()=>{J(),p.classList.add("is-in"),o||setTimeout(()=>ct(0),650)};if(o)J(),p.classList.add("is-in");else{let T=new IntersectionObserver(j=>{j.some(se=>se.isIntersecting)&&(J(),T.disconnect())},{rootMargin:"0px 0px -4% 0px"});T.observe(r(".deals-head"));let H=new IntersectionObserver(j=>{j.some(se=>se.isIntersecting)&&(W(),H.disconnect())},{rootMargin:"0px 0px -6% 0px"});H.observe(p)}let ce=r(".deals-foot");ce&&ce.removeAttribute("data-reveal");let Se={all:v.length,face:0,body:0,sets:0};v.forEach(T=>Se[wu(T)]++),a("[data-count]").forEach(T=>{T.textContent=Se[T.dataset.count]});let Le=!1,Qe=!1;new IntersectionObserver(T=>{Le=T.some(H=>H.isIntersecting)},{threshold:.15}).observe(p);function ct(T=0){if(o)return;let H=Ke().filter(le=>!le.hidden&&le!==Xe).map(le=>r(".deals-card",le)).filter(le=>le&&!(Z.get(le)||{}).th),j=H.map(le=>le.getBoundingClientRect()).map(le=>le.top),se=Math.min(...j);H.forEach((le,Ae)=>{let be=le.getBoundingClientRect(),Ve=(be.top-se)/260+be.left/360;setTimeout(()=>{le.classList.remove("is-sweep"),le.offsetWidth,le.classList.add("is-sweep")},T+Ve*140)})}o||setInterval(()=>{Le&&!Qe&&!document.hidden&&p.classList.contains("is-in")&&ct(0)},12e3),p.addEventListener("animationend",T=>{T.animationName==="deals-sweep"&&T.target.closest(".deals-card")?.classList.remove("is-sweep")});let Q=r(".deals-gift__fill"),ae=r(".deals-gift__track"),Te=r("[data-gift-status]"),fe=r(".deals-gift");function Oe(){let T=n.subtotal();Q.style.setProperty("--p",rr(T/R,0,1).toFixed(4)),ae.setAttribute("aria-valuenow",String(Math.min(T,R))),ae.setAttribute("aria-valuetext",`${Math.min(T,R)} kr. af ${R} kr.`),fe.classList.toggle("is-ship",T>=C),fe.classList.toggle("is-done",T>=R);let H;T<=0?H=`Fri fragt allerede fra ${s(C)}`:T<C?H=`Du mangler <b>${s(C-T)}</b> til fri fragt og <b>${s(R-T)}</b> til din gave.`:T<R?H=`Fri fragt er din. Du mangler <b>${s(R-T)}</b> til din gave.`:H=`<b>Din ${Lt(z)} f\xF8lger med.</b> Fri fragt er ogs\xE5 din.`,Te.innerHTML=H,Te.classList.toggle("is-idle",T<=0)}Oe(),n.on(T=>{(T==="cart:add"||T==="cart:change")&&Oe()}),r("[data-gift-cta]").addEventListener("click",()=>{let T=r('.deals-item[data-id="komplet-pakken"]',p);if(!T)return;T.hidden&&st.find(se=>se.dataset.filter==="all")?.click();let H=r(".deals-card",T),j=r(".deals-card__link",T);H.scrollIntoView({behavior:o?"auto":"smooth",block:"center"}),setTimeout(()=>{j.focus({preventScroll:!0}),H.classList.remove("is-spot"),H.offsetWidth,H.classList.add("is-spot"),o||(H.classList.remove("is-sweep"),H.offsetWidth,H.classList.add("is-sweep"))},o?0:650)});let Pe=r(".deals-filter"),We=r(".deals-filter__ink"),st=a(".deals-chip"),et="all";function pt(T,H){let j=T.offsetLeft,se=T.offsetWidth;We.style.transition=H||o?"none":"",We.style.width=`${se}px`,We.style.transform=`translateX(${j}px)`,H&&(We.offsetWidth,We.style.transition=""),We.classList.add("is-on")}let B=()=>st.find(T=>T.getAttribute("aria-pressed")==="true")||st[0];requestAnimationFrame(()=>pt(B(),!0)),document.fonts&&document.fonts.ready.then(()=>pt(B(),!0));let Vt=()=>{let T=Pe.scrollLeft+Pe.clientWidth<Pe.scrollWidth-2,H=Pe.scrollLeft>2;Pe.classList.toggle("is-more",T),Pe.classList.toggle("is-before",H)};Pe.addEventListener("scroll",Vt,{passive:!0}),new ResizeObserver(()=>{pt(B(),!0),Vt()}).observe(Pe);let Ke=()=>a(".deals-item",p),Xe=r(".deals-item--gift",p),_e=()=>getComputedStyle(p).gridTemplateColumns.split(" ").filter(Boolean).length||1,dt=T=>T.classList.contains("deals-item--set")?Math.min(2,_e()):1;function Ue(T=et){let H=_e(),se=Ke().filter(Ae=>Ae!==Xe&&(T==="all"||Ae.dataset.cat===T)).reduce((Ae,be)=>Ae+dt(be),0),le=(H-se%H)%H||H;return Xe.style.gridColumn=`span ${le}`,Xe.dataset.span=le,Xe.classList.toggle("is-wide",le>=2),le}Ue();let _=_e();new ResizeObserver(()=>{let T=_e();T!==_&&(_=T,Ue())}).observe(p);let y=[];function V(T){if(T===et)return;et=T,y.forEach(L=>L.cancel()),y=[],p.classList.add("is-in"),Ke().forEach(L=>{L.style.position=L.style.left=L.style.top=L.style.width=L.style.height="",L.classList.remove("is-leaving"),L.dataset.leaving&&(L.hidden=!0,delete L.dataset.leaving)});let H=p.getBoundingClientRect(),j=H.height,se=new Map(Ke().filter(L=>!L.hidden).map(L=>[L,L.getBoundingClientRect()])),le=Xe.dataset.span,Ae=L=>L===Xe||T==="all"||L.dataset.cat===T,be=[...se.keys()].filter(L=>!Ae(L)),Ve=Ke().filter(L=>L.hidden&&Ae(L));be.forEach(L=>{let O=se.get(L);Object.assign(L.style,{position:"absolute",left:`${O.left-H.left}px`,top:`${O.top-H.top}px`,width:`${O.width}px`,height:`${O.height}px`}),L.classList.add("is-leaving"),L.dataset.leaving="1"}),Ve.forEach(L=>{L.hidden=!1});let Ne=String(Ue(T)),M=p.getBoundingClientRect().height;if(o){be.forEach(L=>{L.hidden=!0,L.style.position="",L.classList.remove("is-leaving"),delete L.dataset.leaving});return}be.forEach(L=>{let O=L.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(6px) scale(.965)",filter:"blur(2px)"}],{duration:300,easing:"cubic-bezier(.4,0,.6,1)",fill:"forwards"});y.push(O),O.onfinish=()=>{L.hidden=!0,Object.assign(L.style,{position:"",left:"",top:"",width:"",height:""}),L.classList.remove("is-leaving"),delete L.dataset.leaving,O.cancel()}});let D=0;Ke().filter(L=>!L.hidden&&!L.dataset.leaving).forEach(L=>{let O=L.getBoundingClientRect(),U=se.get(L);if(L===Xe&&le!==Ne)y.push(L.animate([{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"none"}],{duration:640,delay:260,easing:c,fill:"backwards"}));else if(U){let ie=U.left-O.left,ne=U.top-O.top;Math.abs(ie)+Math.abs(ne)>.5&&y.push(L.animate([{transform:`translate(${ie}px, ${ne}px)`},{transform:"none"}],{duration:760,easing:c}))}else y.push(L.animate([{opacity:0,transform:"translateY(18px) scale(.985)"},{opacity:1,transform:"none"}],{duration:720,delay:160+D++*55,easing:c,fill:"backwards"}))}),Math.abs(M-j)>1&&y.push(p.animate([{height:`${j}px`},{height:`${M}px`}],{duration:640,easing:c})),setTimeout(()=>ct(0),520)}st.forEach(T=>T.addEventListener("click",()=>{st.forEach(j=>j.setAttribute("aria-pressed",String(j===T))),pt(T),Pe.scrollWidth>Pe.clientWidth&&Pe.scrollTo({left:T.offsetLeft-(Pe.clientWidth-T.offsetWidth)/2,behavior:o?"auto":"smooth"}),V(T.dataset.filter);let H=Se[T.dataset.filter];f.textContent=`Viser ${H} ${H===1?"produkt":"produkter"}`})),Pe.addEventListener("keydown",T=>{let H=st.indexOf(document.activeElement);if(H<0)return;let j=T.key==="ArrowRight"?H+1:T.key==="ArrowLeft"?H-1:T.key==="Home"?0:T.key==="End"?st.length-1:-1;j<0&&T.key!=="ArrowLeft"||(T.preventDefault(),st[(j+st.length)%st.length].focus())});let Z=new Map,ee=0,K=0,Ce=.18,ge=.12;function ue(T){let H=Math.min(.05,(T-K)/1e3);K=T;let j=1-Math.exp(-H*7),se=1-Math.exp(-H*6),le=1-Math.exp(-H*4.2),Ae=T/1e3;Z.forEach((be,Ve)=>{let Ne=(L,O,U)=>Math.abs(O-L)<.0015?O:L+(O-L)*U;be.rx=Ne(be.rx,be.trx,j),be.ry=Ne(be.ry,be.try,j),be.h=Ne(be.h,be.th,se),be.mx=Ne(be.mx,be.tmx,le),be.sx=Ne(be.sx,be.tsx,le);let M=Math.sin((Ae-be.t0)*Math.PI*2*ge)*Ce*be.h;Ve.style.transform=`perspective(1100px) rotateX(${be.rx.toFixed(3)}deg) rotateY(${be.ry.toFixed(3)}deg) translateY(${(-be.h*4).toFixed(2)}px)`,Ve.style.setProperty("--h",be.h.toFixed(4)),Ve.style.setProperty("--deals-lx",`${((be.mx+M)*100).toFixed(2)}%`),Ve.style.setProperty("--deals-sx",`${((be.sx+M*.55)*100).toFixed(2)}%`),Ve.style.setProperty("--ry",be.ry.toFixed(3)),Ve.style.setProperty("--rx",be.rx.toFixed(3)),Math.abs(be.trx-be.rx)+Math.abs(be.try-be.ry)+Math.abs(be.th-be.h)+Math.abs(be.tsx-be.sx)<.002&&be.th===0&&(Ve.style.transform="",["--h","--deals-lx","--deals-sx","--ry","--rx"].forEach(L=>Ve.style.removeProperty(L)),Z.delete(Ve))}),ee=Z.size?requestAnimationFrame(ue):0}let rt=()=>{ee||(K=performance.now(),ee=requestAnimationFrame(ue))};l&&!d&&!o&&(p.addEventListener("pointermove",T=>{let H=T.target.closest(".deals-card");if(!H||T.pointerType!=="mouse")return;Qe=!0;let j=H.getBoundingClientRect(),se=rr((T.clientX-j.left)/j.width,0,1),le=rr((T.clientY-j.top)/j.height,0,1),Ae=-.08+se*1.16,be=H.querySelector("[data-stage]").getBoundingClientRect(),Ve=rr((T.clientX-be.left)/be.width,0,1),Ne=Z.get(H);(!Ne||Ne.th===0)&&(H.classList.remove("is-sweep"),Ne||(Ne={rx:0,ry:0,h:0},Z.set(H,Ne)),Object.assign(Ne,{mx:Ae,sx:Ve,t0:performance.now()/1e3}));let M=H.classList.contains("deals-card--set")?.5:1;Ne.try=(se-.5)*6*M,Ne.trx=-(le-.5)*4*M,Ne.th=1,Ne.tmx=Ae,Ne.tsx=Ve,rt()}),p.addEventListener("pointerout",T=>{let H=T.target.closest(".deals-card");if(!H||H.contains(T.relatedTarget))return;Qe=!1;let j=Z.get(H);j&&(j.trx=0,j.try=0,j.th=0,j.tsx=.3,rt())}));let re=new WeakMap;function pe(T,H){let j=T.getBoundingClientRect(),se=H&&H.clientX?H.clientX-j.left:j.width/2,le=H&&H.clientY?H.clientY-j.top:j.height/2;T.style.setProperty("--ix",`${se}px`),T.style.setProperty("--iy",`${le}px`),T.classList.remove("is-added"),T.offsetWidth,T.classList.add("is-added"),clearTimeout(re.get(T)),re.set(T,setTimeout(()=>T.classList.remove("is-added"),2600))}function De(){let T=innerWidth,j=[...document.querySelectorAll("[data-cart]")].map(se=>se.querySelector(".hdr-cart__icon")||se).map(se=>se.getBoundingClientRect()).filter(se=>se.width>0&&se.bottom>0&&se.top<innerHeight&&se.left<T)[0];return j?{x:j.left+j.width/2,y:j.top+j.height/2,real:!0}:{x:T-36,y:30,real:!1}}let Fe=(T,H,j,se,le)=>{let Ae=1-le;return Ae*Ae*Ae*T+3*Ae*Ae*le*H+3*Ae*le*le*j+le*le*le*se},ve=T=>(T<.5?4*T*T*T:1-Math.pow(-2*T+2,3)/2)*.82+(1-Math.pow(1-T,3))*.18,Je=null,He=[],$e=0,N=getComputedStyle(i),me=(T,H)=>N.getPropertyValue(T).trim()||H,Y=(T,H)=>{let j=T.replace("#",""),se=parseInt(j.length===3?j.replace(/./g,"$&$&"):j,16);return`rgba(${se>>16&255}, ${se>>8&255}, ${se&255}, ${H})`},$=me("--sage-500","#80a097"),he=me("--sand-500","#ddbfa3");function xe(){Je||(Je=document.createElement("canvas"),Je.className="deals-trail",Je.setAttribute("aria-hidden","true"),i.appendChild(Je))}function Ge(T){let H=Je,j=Math.min(devicePixelRatio||1,2);(H.width!==Math.round(innerWidth*j)||H.height!==Math.round(innerHeight*j))&&(H.width=Math.round(innerWidth*j),H.height=Math.round(innerHeight*j));let se=H.getContext("2d");se.setTransform(j,0,0,j,0,0),se.clearRect(0,0,innerWidth,innerHeight),se.lineCap="round",He=He.filter(le=>T-le.end<520*u||!le.done);for(let le of He){let Ae=le.pts,be=le.done?Math.max(0,1-(T-le.end)/(520*u)):1;for(let Ve=1;Ve<Ae.length;Ve++){let Ne=(T-Ae[Ve].t)/(420*u);if(Ne>1)continue;let M=(1-Ne)*(1-Ne)*be;se.strokeStyle=Y($,(.38*M).toFixed(3)),se.lineWidth=1+9*M*Ae[Ve].s,se.beginPath(),se.moveTo(Ae[Ve-1].x,Ae[Ve-1].y),se.lineTo(Ae[Ve].x,Ae[Ve].y),se.stroke()}for(let Ve of le.drops){let Ne=(T-Ve.t)/(700*u);Ne>1||Ne<0||(se.fillStyle=Y(he,(.55*(1-Ne)*be).toFixed(3)),se.beginPath(),se.arc(Ve.x,Ve.y+Ne*10,Ve.r*(1-Ne*.6),0,Math.PI*2),se.fill())}}He.length?$e=requestAnimationFrame(Ge):($e=0,se.clearRect(0,0,innerWidth,innerHeight))}function yt(T,H){let j=T?[...T.querySelectorAll(".deals-prod__pack")]:[];if(o||!j.length){H();return}let se=De(),le=!1;j.forEach((Ae,be)=>{let Ve=Ae.getBoundingClientRect();if(Ve.width<2){be===j.length-1&&!le&&(le=!0,H());return}let Ne=Ae.cloneNode(!0);Ne.className="deals-fly",Object.assign(Ne.style,{left:`${Ve.left}px`,top:`${Ve.top}px`,width:`${Ve.width}px`,height:`${Ve.height}px`});let M=Ne.querySelector("img");M&&(M.loading="eager"),Ne.querySelector(".deals-gloss")?.remove(),i.appendChild(Ne);let D=be===0,L=D?Object.assign(document.createElement("span"),{className:"deals-fly__drop"}):null;L&&i.appendChild(L);let O=null;D&&(xe(),O={pts:[],drops:[],done:!1,end:0},He.push(O),$e||($e=requestAnimationFrame(Ge)));let U=Ve.left+Ve.width/2,ie=Ve.top+Ve.height/2,ne=Math.hypot(se.x-U,se.y-ie),de=rr(620+ne*.42,760,1150)*u,we=Math.min(140,40+ne*.12),ke=14,qe=U,Re=Math.max(ke,ie-we-Math.max(0,ie-se.y)*.35),Ye=U+(se.x-U)*.62,mt=Math.max(ke,Math.min(se.y,ie)-we*.55),ot=22/Math.max(Ve.width,Ve.height),Bt=performance.now()+be*85*u,it=.18;function ye(Be){if(Be<Bt){requestAnimationFrame(ye);return}let je=rr((Be-Bt)/de,0,1),It=ve(je),on=De(),Ut=se.real?on.x:se.x,xn=se.real?on.y:se.y,ft=Fe(U,qe,Ye,Ut,It),Nt=Fe(ie,Re,mt,xn,It),Nn=1+(ot-1)*Math.pow(It,.8),Wt=Math.sin(It*Math.PI)*-7;Ne.style.transform=`translate(${(ft-U).toFixed(2)}px, ${(Nt-ie).toFixed(2)}px) scale(${Nn.toFixed(4)}) rotate(${Wt.toFixed(2)}deg)`,Ne.style.opacity=String(je<.82?1:1-(je-.82)/.18),L&&(L.style.transform=`translate(${(ft-6).toFixed(2)}px, ${(Nt-6).toFixed(2)}px) scale(${(.4+.6*Math.sin(It*Math.PI)).toFixed(3)})`,L.style.opacity=String(Math.sin(je*Math.PI)*.9)),O&&(O.pts.push({x:ft,y:Nt,t:Be,s:Math.max(.25,Nn)}),O.pts.length>60&&O.pts.shift(),je>it&&je<.8&&(O.drops.push({x:ft+(Math.random()-.5)*10,y:Nt+(Math.random()-.5)*8,r:1.4+Math.random()*1.8,t:Be}),it+=.12+Math.random()*.08)),je>=.93&&be===j.length-1&&!le&&(le=!0,H()),je<1?requestAnimationFrame(ye):(Ne.remove(),L&&L.remove(),O&&(O.done=!0,O.end=Be))}requestAnimationFrame(ye)})}function _t(T,H,j,se){H&&pe(H,j);let le=!1;yt(se,()=>{le||(le=!0,n.add(T.id,1),f.textContent=`${T.name} er lagt i kurven.`)})}p.addEventListener("click",T=>{let H=T.target.closest("[data-add]");if(H){let se=e.byId[H.dataset.add];_t(se,H,T,H.closest(".deals-card").querySelector("[data-stage]"));return}let j=T.target.closest("[data-qv]");if(j){Ii(e.byId[j.dataset.qv],j);return}});let ze=document.createElement("dialog");ze.className="deals-qv",ze.setAttribute("aria-labelledby","deals-qv-title"),i.appendChild(ze);let Ct=null,Yt=null,Ht=!1,Dn=T=>{let H=T.bundle?(T.contains||[]).map(j=>_u[j]||.8):[(dc[T.id]||{h:.8}).h];return Math.min(1.05,(T.bundle?.56:.62)/Math.max(...H))};function Un(T){let H=`<ul class="deals-qv__usp">
      <li>${Gi.truck}Fri fragt over ${s(e.campaign.freeShipping)}</li>
      <li>${Gi.back}14 dages fortrydelsesret</li>
      <li>${Gi.shield}Testet til under 0,2% THC</li>
    </ul>`;return`<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${Gi.close}</button>
      <div class="deals-qv__stage${T.bundle?" deals-qv__stage--set":""}" data-stage style="--dl-ufrac:${Dn(T).toFixed(4)}">
        <span class="deals-ground" aria-hidden="true"></span>
        ${b(T)}
        <span class="nc-bubble nc-bubble--sale deals-bubble deals-bubble--qv" aria-hidden="true">\u2212${T.pct}%</span>
        ${T.badge&&T.bundle?`<img class="deals-qv__badge" src="${e.asset(T.badge)}" alt="" width="64" height="64">`:""}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${Lt(T.bundle?`Sampakke \xB7 ${(T.contains||[]).length} produkter`:T.nickname?`${T.nickname} \xB7 ${Ru[T.id]||"Ansigt"}`:Eu(T))}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${Lt(T.name)}</h2>
        <p class="deals-card__size">${Lt(T.bundle?(T.contains||[]).map(j=>Au[j]||e.byId[j]?.name).join(" \xB7 "):I(T))}</p>
        <p class="deals-qv__claim">${Lt(T.claim)}</p>
        ${T.notes?`<p class="deals-qv__notes">${Lt(T.notes)}</p>`:""}
        ${T.bundle?E(T):""}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${A(T,!0)}${x(T," nc-btn--lg")}</div>
        <a class="deals-qv__more" href="${fc(T)}">Se alt om ${Lt(T.name)}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13.5M13.5 7l5 5-5 5"/></svg></a>
        ${H}
      </div>
    </div>`}function Ii(T,H){T&&(Yt=T,Ct=H,Ht=!1,ze.innerHTML=Un(T),a("img",ze).forEach(j=>{j.loading="eager"}),ze.showModal(),document.documentElement.classList.add("deals-lock"),o||(r(".deals-qv__sheet",ze).animate([{opacity:0,transform:"translateY(22px) scale(.985)"},{opacity:1,transform:"none"}],{duration:620,easing:c}),a(".deals-prod",ze).forEach((se,le)=>se.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:900,delay:90+le*70,easing:c,fill:"backwards"})),r(".deals-qv__stage",ze).classList.add("is-sweep")),r("[data-qv-close]",ze).focus({preventScroll:!0}))}function Dt(T){if(!ze.open||Ht)return;Ht=!0;let H=()=>{ze.close(),Ht=!1,document.documentElement.classList.remove("deals-lock"),Ct&&!T&&Ct.focus({preventScroll:!0}),T&&T()};if(o)return H();ze.classList.add("is-closing");let j=r(".deals-qv__sheet",ze).animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(14px) scale(.99)"}],{duration:220,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});j.onfinish=()=>{ze.classList.remove("is-closing"),H()}}ze.addEventListener("cancel",T=>{T.preventDefault(),Dt()}),ze.addEventListener("click",T=>{if(T.target===ze||T.target.closest("[data-qv-close]"))return Dt();let H=T.target.closest("[data-add]");if(H&&Yt){let j=Yt;pe(H,T);let se=p.querySelector(`.deals-item[data-id="${j.id}"]`),le=se&&se.querySelector("[data-add]"),Ae=a(".deals-prod__pack",ze).map(be=>[be,be.getBoundingClientRect()]);setTimeout(()=>Dt(()=>{let be=document.createElement("div");be.style.cssText="position:fixed;left:0;top:0;width:0;height:0;pointer-events:none",Ae.forEach(([Ve,Ne])=>{let M=Ve.cloneNode(!0);M.style.cssText=`position:fixed;left:${Ne.left}px;top:${Ne.top}px;width:${Ne.width}px;height:${Ne.height}px;overflow:hidden`,be.appendChild(M)}),i.appendChild(be),le&&pe(le),_t(j,null,null,be),setTimeout(()=>be.remove(),40),Ct&&Ct.focus({preventScroll:!0})}),o?0:380)}})}var mc={};function Fv(i,e){if(mc[i])return e(mc[i]);let t=new Image;t.onload=()=>{let n=t.naturalWidth,s=t.naturalHeight;if(!n||!s)return e(null);let r=Math.min(1,120/Math.max(n,s)),a=Math.max(1,Math.round(n*r)),o=Math.max(1,Math.round(s*r)),l=document.createElement("canvas");l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0}),u;try{c.drawImage(t,0,0,a,o),u=c.getImageData(0,0,a,o).data}catch{return e(null)}let d=(x,I)=>{let E=(I*a+x)*4;return[u[E],u[E+1],u[E+2],u[E+3]]},p=[d(0,0),d(a-1,0),d(0,o-1),d(a-1,o-1),d(a>>1,0),d(a>>1,o-1),d(0,o>>1),d(a-1,o>>1)],f=[0,1,2,3].map(x=>p.map(I=>I[x]).sort((I,E)=>I-E)[4]),v=f[3]<20,g=a,m=-1,h=o,b=-1;for(let x=0;x<o;x++)for(let I=0;I<a;I++){let E=(x*a+I)*4,R=u[E+3];(v?R>40:R>40&&(Math.abs(u[E]-f[0])>26||Math.abs(u[E+1]-f[1])>26||Math.abs(u[E+2]-f[2])>26))&&(I<g&&(g=I),I>m&&(m=I),x<h&&(h=x),x>b&&(b=x))}if(m<0||m-g<2||b-h<2||(m-g+1)/a>.97&&(b-h+1)/o>.97)return e(null);let A={x0:g/a,x1:(m+1)/a,y0:h/o,y1:(b+1)/o,w:n,h:s};mc[i]=A,e(A)},t.onerror=()=>e(null),t.src=i}function gc(i){let e=i._ncPs;if(!e)return;let t=i.clientWidth,n=i.clientHeight;if(!t||!n)return;let s=Math.min(t/e.w,n/e.h),r=e.w*s,a=e.h*s,o=(t-r)/2,l=(n-a)/2,c=o+e.x0*r,u=o+e.x1*r,d=l+e.y0*a,p=l+e.y1*a,f=u-c,v=p-d,g=(c+u)/2,m=1;v>.78*n?m=.78*n/v:v<.52*n&&(m=Math.min(1.6,.52*n/v)),f*m>.78*t&&(m=.78*t/f);let h=t/2-m*g,b=.86*n-m*p;i.style.transform=`translate(${h.toFixed(2)}px,${b.toFixed(2)}px) scale(${m.toFixed(4)})`,i.classList.add("is-placed")}var Cu="ResizeObserver"in window?new ResizeObserver(i=>i.forEach(e=>gc(e.target))):null;function Iu(i){if(i._ncPsInit)return;i._ncPsInit=!0;let e=i.currentSrc||i.src;e&&Fv(e,t=>{t&&(i._ncPs=t,gc(i),Cu?Cu.observe(i):window.addEventListener("resize",()=>gc(i)))})}function Pu(i){i.querySelectorAll("img.nc-packshot").forEach(e=>{e.complete&&e.naturalWidth?Iu(e):e.addEventListener("load",()=>Iu(e),{once:!0})})}function Bv(i){i.querySelectorAll("[data-nc-tabs]").forEach(e=>{let t=[...e.querySelectorAll("[data-nc-tab]")],n=[...e.querySelectorAll("[data-nc-panel]")];t.forEach(s=>{s.addEventListener("click",()=>{let r=s.getAttribute("data-nc-tab");t.forEach(a=>{a.classList.toggle("is-active",a===s),a.setAttribute("aria-selected",a===s?"true":"false")}),n.forEach(a=>{a.hidden=a.getAttribute("data-nc-panel")!==r})})})})}function Ov(i){i.querySelectorAll("[data-nc-rail]").forEach(e=>{let t=null,n=0;e.getAttribute("data-nc-rail")!=="nodots"&&(t=document.createElement("div"),t.className="nc-raildots",t.setAttribute("aria-hidden","true"),t.hidden=!0,e.insertAdjacentElement("afterend",t));function s(){let a=e.clientWidth?Math.ceil((e.scrollWidth-2)/e.clientWidth):1;if(a!==n){n=a,t.innerHTML="",t.hidden=a<2;for(let o=0;o<a;o++){let l=document.createElement("button");l.type="button",l.tabIndex=-1,l.addEventListener("click",()=>e.scrollTo({left:o*e.clientWidth,behavior:"smooth"})),t.appendChild(l)}}}function r(){let a=e.scrollWidth-e.clientWidth;if(e.classList.toggle("is-more",e.scrollLeft<a-4),e.classList.toggle("is-before",e.scrollLeft>4),!t||(s(),n<2))return;let o=e.scrollLeft>=a-4?n-1:Math.min(n-1,Math.round(e.scrollLeft/e.clientWidth));[...t.children].forEach((l,c)=>l.classList.toggle("is-active",c===o))}e.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r),"ResizeObserver"in window&&new ResizeObserver(r).observe(e),r()})}function vc(i){Bv(i),Ov(i),Pu(i)}var Za=4.7,kv=615,Lu=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",zv="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z";function Vv(i){let e=Math.round(i*2)/2,t='<svg class="tp-mc__stars" viewBox="0 0 251 46" aria-hidden="true" focusable="false">';for(let n=0;n<5;n++){let s=n*51,r=e-n;t+=`<rect x="${s}" width="46" height="46" fill="#dcdce6"/>`,r>=1?t+=`<rect x="${s}" width="46" height="46" fill="#00b67a"/>`:r>=.5&&(t+=`<rect x="${s}" width="23" height="46" fill="#00b67a"/>`),t+=`<path transform="translate(${s} 0)" fill="#fff" d="${zv}"/>`}return t+"</svg>"}function xc(i){let e=i.firstElementChild;if(!e)return;e.style.transform="";let t=Math.min(1,i.clientWidth/e.scrollWidth);t<1&&(e.style.transform=`scale(${t.toFixed(3)})`)}function Hv(i){let e=i.querySelector("a");if(!e||i.dataset.tpHydrated)return;let t=i.getAttribute("data-text-color")||"#2f4b45",n=kv.toLocaleString("da-DK");e.className="tp-mc",e.style.setProperty("--tp-text",t),e.setAttribute("aria-label",`${Lu(Za)}: ${String(Za).replace(".",",")} ud af 5 p\xE5 Trustpilot, ${n} anmeldelser`),e.innerHTML=`<span class="tp-mc__in"><span class="tp-mc__word">${Lu(Za)}</span>${Vv(Za)}<span class="tp-mc__count"><b>${n}</b> anmeldelser p\xE5</span><span class="tp-mc__logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span></span>`,xc(e),window.addEventListener("resize",()=>xc(e)),document.fonts&&document.fonts.ready.then(()=>xc(e)),i.dataset.tpHydrated="1"}function yc(i){Ya(),i.querySelectorAll(".trustpilot-widget").forEach(Hv)}function Mc(i,e){let t=i.querySelector(".nc-lifestyle__main video");if(!t)return;if(t.muted=!0,e&&e.prefersReducedMotion){t.removeAttribute("autoplay"),t.pause();return}let n=t.play&&t.play();n&&n.catch&&n.catch(()=>{})}var Gv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function Du(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",Gv)}function Wv(i){let e=i.querySelector("[data-nc-railscroll]");e&&(i.querySelectorAll("[data-nc-rail-prev]").forEach(t=>t.addEventListener("click",()=>{e.scrollBy({left:-Math.max(320,e.clientWidth*.7),behavior:"smooth"})})),i.querySelectorAll("[data-nc-rail-next]").forEach(t=>t.addEventListener("click",()=>{e.scrollBy({left:Math.max(320,e.clientWidth*.7),behavior:"smooth"})})))}function Xv(i){if(i.dataset.ncRailInit)return;i.dataset.ncRailInit="1";let e=null,t=0;i.getAttribute("data-nc-rail")!=="nodots"&&(e=document.createElement("div"),e.className="nc-raildots",e.setAttribute("aria-hidden","true"),e.hidden=!0,i.insertAdjacentElement("afterend",e));function n(){let r=i.clientWidth?Math.ceil((i.scrollWidth-2)/i.clientWidth):1;if(r!==t){t=r,e.innerHTML="",e.hidden=r<2;for(let a=0;a<r;a++){let o=document.createElement("button");o.type="button",o.tabIndex=-1,o.addEventListener("click",()=>i.scrollTo({left:a*i.clientWidth,behavior:"smooth"})),e.appendChild(o)}}}function s(){let r=i.scrollWidth-i.clientWidth;if(i.classList.toggle("is-more",i.scrollLeft<r-4),i.classList.toggle("is-before",i.scrollLeft>4),!e||(n(),t<2))return;let a=i.scrollLeft>=r-4?t-1:Math.min(t-1,Math.round(i.scrollLeft/i.clientWidth));Array.from(e.children).forEach((o,l)=>o.classList.toggle("is-active",l===a))}i.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),"ResizeObserver"in window&&new ResizeObserver(s).observe(i),s()}function bc(i){Du(),i.querySelectorAll("[data-nc-railwrap]").forEach(Wv),i.querySelectorAll("[data-nc-rail]").forEach(Xv)}var Uu="https://dk.trustpilot.com/review/naturecell.dk",Nu=i=>i>=4.3?"Fremragende":i>=3.8?"Rigtig godt":i>=2.8?"Middel":i>=1.8?"D\xE5rligt":"Meget d\xE5rligt",qv="M23 31.2l7.1-1.8 3 9.2L23 31.2zm16.4-11.9H26.9L23 7.4l-3.9 11.9H6.6l10.2 7.4-3.9 11.9 10.2-7.4 6.3-4.5 10.1-7.4z",Yv=[{stars:5,title:"Bl\xF8d hud hele dagen",text:"Jeg bruger dagcremen hver morgen. Den tr\xE6kker hurtigt ind og efterlader huden bl\xF8d.",name:"Hanne",when:"for 2 dage siden"},{stars:5,title:"Hurtig levering og venlig service",text:"Pakken kom dagen efter, flot pakket, og jeg fik hurtigt svar p\xE5 mit sp\xF8rgsm\xE5l.",name:"Mette",when:"for 4 dage siden"},{stars:5,title:"Fast del af min aftenrutine",text:"Olien har en mild duft, og min hud f\xF8les velplejet om morgenen.",name:"Lars",when:"for 6 dage siden"},{stars:4,title:"Fedter ikke",text:"H\xE5ndcremen giver god fugt uden at fedte. Den st\xE5r nu ved k\xF8kkenvasken.",name:"Susanne",when:"for 1 uge siden"},{stars:5,title:"Rart at handle dansk",text:"Fin kvalitet fra en dansk familievirksomhed, og emballagen er rigtig p\xE6n.",name:"Karin",when:"for 1 uge siden"},{stars:5,title:"Mild mod min sarte hud",text:"Rensegelen er mild, og huden strammer ikke bagefter. Jeg k\xF8ber den igen.",name:"Jonas",when:"for 2 uger siden"}];function Fu(i,e="tp-stars"){let t=Math.round(i*2)/2,n=`<svg class="${e}" viewBox="0 0 251 46" aria-hidden="true" focusable="false">`;for(let s=0;s<5;s++){let r=s*51,a=t-s;n+=`<rect x="${r}" width="46" height="46" fill="#dcdce6"/>`,a>=1?n+=`<rect x="${r}" width="46" height="46" fill="#00b67a"/>`:a>=.5&&(n+=`<rect x="${r}" width="23" height="46" fill="#00b67a"/>`),n+=`<path transform="translate(${r} 0)" fill="#fff" d="${qv}"/>`}return n+"</svg>"}var Qv='<span class="tp-logo"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 1.5l2.6 7.9H23l-6.8 4.9 2.6 7.9L12 17.3l-6.8 4.9 2.6-7.9L1 9.4h8.4z"/></svg>Trustpilot</span>',Bu=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${i}"/></svg>`,Zv='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="11" fill="currentColor"/><path d="m7 12.5 3.2 3L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',Ka=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Kv(i){if(i.dataset.tpHydrated)return;let e=615 .toLocaleString("da-DK"),t=String(4.7).replace(".",","),n=Yv.map(d=>`<a class="tp-rv" href="${Uu}" target="_blank" rel="noopener" data-standin><span class="tp-rv__top">${Fu(d.stars)}<span class="tp-rv__ver">${Zv}Verificeret</span></span><span class="tp-rv__title">${Ka(d.title)}</span><span class="tp-rv__text">${Ka(d.text)}</span><span class="tp-rv__who"><b>${Ka(d.name)}</b>, ${Ka(d.when)}</span></a>`).join(""),s=document.createElement("div");s.className="tp-cr",s.innerHTML=`<a class="tp-cr__sum" href="${Uu}" target="_blank" rel="noopener" aria-label="${Nu(4.7)}: ${t} ud af 5 p\xE5 Trustpilot, baseret p\xE5 ${e} anmeldelser"><span class="tp-cr__word">${Nu(4.7)}</span>${Fu(4.7)}<span class="tp-cr__based">Baseret p\xE5 <b>${e} anmeldelser</b></span>${Qv}</a><div class="tp-cr__main"><div class="tp-cr__row"><button type="button" class="tp-cr__arrow" data-dir="-1" aria-label="Forrige anmeldelse">${Bu("m15 18-6-6 6-6")}</button><div class="tp-cr__track" role="list" aria-label="Anmeldelser p\xE5 Trustpilot">${n}</div><button type="button" class="tp-cr__arrow" data-dir="1" aria-label="N\xE6ste anmeldelse">${Bu("m9 18 6-6-6-6")}</button></div><p class="tp-cr__foot" data-standin>Mockup: eksempler p\xE5 anmeldelser \u2013 live-siden viser de rigtige fra Trustpilot</p></div>`,s.querySelectorAll(".tp-rv").forEach(d=>d.setAttribute("role","listitem"));let r=i.querySelector(".nc-testi__tp-fallback");r&&(r.style.display="none"),i.appendChild(s);let a=s.querySelector(".tp-cr__track"),[o,l]=s.querySelectorAll(".tp-cr__arrow"),c=()=>{let d=a.querySelector(".tp-rv"),p=parseFloat(getComputedStyle(a).columnGap)||0;return d?d.getBoundingClientRect().width+p:a.clientWidth},u=()=>{let d=a.scrollWidth-a.clientWidth;o.disabled=a.scrollLeft<=2,l.disabled=a.scrollLeft>=d-2};[o,l].forEach(d=>d.addEventListener("click",()=>a.scrollBy({left:c()*+d.dataset.dir}))),a.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),u(),i.dataset.tpHydrated="1"}function Sc(i){i.querySelectorAll(".trustpilot-widget").forEach(Kv)}var Jv='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><symbol id="nc-cbd" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3520 2095H3997Q4288 2095 4484 1914Q4680 1733 4680 1412V1321Q4680 1000 4484 820Q4288 639 3997 639H3520ZM3802 1880V854H3993Q4172 854 4281 972Q4391 1090 4391 1316V1417Q4391 1644 4281 1762Q4172 1880 3993 1880Z"/></symbol><symbol id="nc-cbg" viewBox="0 0 5586 2734"><rect x="87" y="87" width="5412" height="2560" rx="1280" fill="none" stroke="currentColor" stroke-width="174"/><path fill="currentColor" d="M906 1412Q906 1756 1084 1940Q1262 2124 1547 2124Q1819 2124 1971 1980Q2123 1837 2135 1619L2136 1596H1850L1849 1619Q1841 1745 1767 1824Q1694 1903 1548 1903Q1386 1903 1291 1785Q1197 1666 1197 1439V1295Q1197 1049 1293 940Q1390 831 1545 831Q1699 831 1774 906Q1850 981 1850 1113V1138H2136V1117Q2136 896 1977 753Q1819 609 1547 609Q1263 609 1084 792Q906 975 906 1321Z M2289 2095H2848Q3081 2095 3224 1985Q3367 1875 3367 1675Q3367 1534 3300 1447Q3234 1361 3132 1331V1327Q3215 1297 3271 1221Q3328 1144 3328 1024Q3328 826 3192 732Q3057 639 2819 639H2289ZM2569 1890V1437H2843Q2968 1437 3026 1497Q3085 1558 3085 1662Q3085 1767 3026 1828Q2968 1890 2843 1890ZM2569 1241V845H2814Q2938 845 2993 896Q3047 947 3047 1042Q3047 1136 2993 1189Q2938 1241 2814 1241Z M3486 1412Q3486 1759 3665 1942Q3845 2124 4156 2124Q4359 2124 4499 2060Q4639 1996 4714 1920L4714 1334L4137 1334L4137 1550L4432 1550L4432 1823Q4373 1865 4309 1883Q4246 1902 4157 1902Q3981 1902 3881 1787Q3780 1672 3780 1439L3780 1294Q3780 1066 3875 949Q3970 833 4127 833Q4274 833 4349 905Q4424 977 4424 1072L4424 1083L4714 1083L4713 1069Q4710 874 4556 741Q4402 609 4137 609Q3844 609 3665 792Q3486 974 3486 1321Z"/></symbol></svg>';function Ou(){document.getElementById("nc-cbd")||document.body.insertAdjacentHTML("afterbegin",Jv)}function wc(){Ou()}function Ac(i){let e=i.querySelector("form[data-theme-footer-news]");if(!e)return;let t=e.querySelector('input[type="email"]');e.addEventListener("submit",n=>{n.preventDefault(),e.querySelectorAll("[data-theme-footer-msg]").forEach(a=>a.remove());let s=t.value.trim()!==""&&t.checkValidity(),r=document.createElement("p");r.setAttribute("data-theme-footer-msg",""),r.setAttribute("role",s?"status":"alert"),r.style.marginTop="8px",r.textContent=s?"Tak for din tilmelding.":"Tjek din e-mailadresse og pr\xF8v igen.",e.appendChild(r),s?e.reset():t.focus()})}var Nr="https://naturecell.dk",fs=i=>i.toLocaleString("da-DK",{minimumFractionDigits:2,maximumFractionDigits:2})+" kr",Vu=i=>String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ku='<span class="nc-cbd-i"><svg class="nc-cbd" aria-hidden="true" focusable="false"><use href="#nc-cbd"></use></svg></span>',jv=i=>Vu(i).replace(/CBD-/g,"").replace(/CBD/g,ku).replace(/\u0001/g,`<span class="nc-cbd-w">${ku}-</span>`),zu={"skin-oil":["Hudpleje Olie med 1000mg CBD | 30ml","/products/cbd-olie-1000mg"],"day-cream":["Dagcreme NatureCell | Dagcreme, 50ml","/products/dagcreme"],"night-cream":["Natcreme NatureCell | Natcreme, 50ml","/products/natcreme"],serum:["Hyaluronic Serum med CBD | 30ml","/products/naturecell-cbd-hyaluronic-serum"],"cleansing-gel":["Rensegel med CBD | 100ml","/products/rensegel"],"body-lotion":["Bodylotion med CBD - 200ml","/products/bodylotion"],shampoo:["Shampoo med CBD | 300ml","/products/shampoo-300ml"],"komplet-pakken":["Komplet Pakken","/products/hudpleje-startpakke-plus-1"],"all-day-facial":["All Day Facial","/collections/sampakker"],"lip-balm":["Lip Balm | med CBD 6ml","/products/lip-balm"]},Ja={"skin-oil":[1.318,.21,-2.04],"day-cream":[.954,-3.42,-2.04],"night-cream":[.952,-3.63,-2.12],serum:[1.134,-3.04,-5.79],"cleansing-gel":[.994,0,-.67],"body-lotion":[1.024,.54,-4.58],shampoo:[.927,-.79,-.62],"komplet-pakken":[.958,-5.87,-.25],"all-day-facial":[.959,-6.67,-.29]},$v=i=>Ja[i]?` style="transform: scale(${Ja[i][0]}) translate(${Ja[i][1]}%, ${Ja[i][2]}%);"`:"",ex='<svg viewBox="22 16 56 76" width="100%" height="100%" aria-hidden="true" style="display:block"><ellipse cx="50" cy="86.4" rx="9" ry="1.8" fill="rgba(62,93,88,0.13)"/><rect x="43" y="22" width="14" height="20" rx="2.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="42" width="14" height="44.4" rx="1.6" fill="#fff" stroke="rgba(62,93,88,0.22)" stroke-width=".7"/><rect x="43" y="49" width="14" height="30" fill="#80A097"/><path d="M45 41.6h10" stroke="rgba(62,93,88,0.22)" stroke-width=".9"/></svg>',tx='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',nx='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',ix='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 18H3V6h12v4"/><path d="M14 9h4l3 3v6h-2"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>',sx='<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';function Ec(i,e){let{store:t,byId:n,campaign:s,asset:r}=e,a=i.querySelector("[data-nc-drawer]"),o=document.documentElement,l=null,c=!1;function u(){let g=t.get().cart.map(({id:x,qty:I})=>{let E=n[x],[R,C]=zu[x]||[E.name,"/collections/cbd-hudpleje"],w=E.save*I;return{key:x,p:E,qty:I,title:R,url:Nr+C,img:E.img?r(E.img):null,original:E.price0*I,final:E.price*I,unitWas:E.price0,allocations:w>0?[{title:s.name,amount:w}]:[]}}),m=g.reduce((x,I)=>x+I.final,0),h=n[s.giftId];if(h&&m>=s.giftThreshold){let[x,I]=zu[h.id];g.push({key:h.id,p:h,qty:1,title:x,url:Nr+I,img:null,gift:!0,original:s.giftValue,final:0,unitWas:null,allocations:[{title:`Gave ved k\xF8b over ${s.giftThreshold} kr.`,amount:s.giftValue}]})}let b=g.reduce((x,I)=>x+I.final,0),A=g.reduce((x,I)=>x+I.allocations.reduce((E,R)=>E+R.amount,0),0);return{items:g,total:b,totalDiscount:A,count:g.reduce((x,I)=>x+I.qty,0)}}function d(g){let m=g.img?`<img src="${g.img}" alt="" loading="lazy" width="148" height="148"${$v(g.p.id)}>`:g.p.id==="lip-balm"?ex:"",h=g.gift?'<span class="nc-drawer__qty theme-cart-gift-qty" aria-label="Antal 1">1</span>':`<span class="nc-drawer__qty">
                  <button type="button" data-nc-line="${g.key}" data-nc-line-qty="${g.qty-1}" aria-label="F\xE6rre">\u2212</button>
                  <span>${g.qty}</span>
                  <button type="button" data-nc-line="${g.key}" data-nc-line-qty="${g.qty+1}" aria-label="Flere">+</button>
                </span>`;return`<div class="nc-drawer__line">
            <a class="nc-drawer__line-media" href="${g.url}" tabindex="-1" aria-hidden="true">${m}</a>
            <div class="nc-drawer__line-info">
              <a class="nc-drawer__line-title" href="${g.url}">${jv(g.title)}</a>${g.unitWas?`<span class="nc-drawer__line-meta">F\xF8rpris ${fs(g.unitWas)}${g.qty>1?" / stk.":""}</span>`:""}${g.allocations.map(b=>`<span class="nc-drawer__line-discount">${Vu(b.title)} \u2212${fs(b.amount)}</span>`).join("")}
              <div class="nc-drawer__line-row">
                ${h}
                <span class="nc-drawer__line-price">${g.allocations.length?`<s class="nc-drawer__line-was">${fs(g.original)}</s> `:""}${fs(g.final)}</span>
              </div>
            </div>${g.gift?"":`
            <button class="nc-drawer__remove" type="button" data-nc-line="${g.key}" data-nc-line-qty="0" aria-label="Fjern">${tx}</button>`}
          </div>`}function p(){let g=u(),m=s.freeShipping,h=Math.min(100,Math.floor(g.total*100/m)),b=`<div class="nc-drawer__head">
      <h2>Din kurv</h2>
      <button class="nc-drawer__close" type="button" data-nc-cart-close aria-label="Luk kurv">${nx}</button>
    </div>`,A;g.count>0?A=`<div class="nc-drawer__ship">
        <p>${ix}<span>${g.total>=m?"Du har fri fragt":`K\xF8b for ${fs(m-g.total)} mere og f\xE5 fri fragt`}</span></p>
        <div class="nc-drawer__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${h}" aria-label="Fri fragt-status">
          <div class="nc-drawer__fill" style="width: ${h}%;"></div>
        </div>
      </div>
      <div class="nc-drawer__lines">${g.items.map(d).join("")}</div>
      <div class="nc-drawer__foot">${g.totalDiscount>0?`
        <div class="nc-drawer__savings">
          <span>Du sparer i alt</span>
          <span>\u2212${fs(g.totalDiscount)}</span>
        </div>`:""}
        <div class="nc-drawer__totals">
          <span>Subtotal</span>
          <strong>${fs(g.total)}</strong>
        </div>
        <label class="nc-terms nc-drawer__terms" data-nc-terms-scope>
          <input type="checkbox" data-nc-terms${c?" checked":""}>
          <span>Jeg accepterer <a href="${Nr}/policies/terms-of-service" target="_blank" rel="noopener">handelsbetingelserne</a></span>
        </label>
        <a class="nc-drawer__checkout" href="${Nr}/cart/checkout" data-nc-terms-btn aria-disabled="${c?"false":"true"}">G\xE5 til kassen \u2192</a>
        <p class="nc-drawer__note">Moms inkluderet \xB7 fragt beregnes ved kassen</p>
      </div>`:A=`<div class="nc-drawer__empty">
        ${sx}
        <p>Din kurv er tom</p>
        <a href="${Nr}/collections/cbd-hudpleje" data-nc-cart-close>Shop hudpleje</a>
      </div>`;let x=document.activeElement,I=x&&a.contains(x)&&x.matches("[data-nc-line]")?x.getAttribute("data-nc-line")+"|"+x.getAttribute("aria-label"):null;if(a.innerHTML=`<div class="nc-drawer__overlay" data-nc-drawer-overlay></div>
  <div class="nc-drawer__panel">
    ${b}${A}</div>`,I){let[E,R]=I.split("|"),C=a.querySelector(`[data-nc-line="${E}"][aria-label="${R}"]`)||a.querySelector(".nc-drawer__close");C&&C.focus({preventScroll:!0})}}function f(){a.classList.contains("is-open")||(l=document.activeElement),a.classList.add("is-open"),a.removeAttribute("inert"),o.classList.add("nc-lock");let g=!navigator.userActivation||navigator.userActivation.hasBeenActive,m=a.querySelector(".nc-drawer__close");g&&requestAnimationFrame(()=>m&&m.focus({preventScroll:!0}))}function v(){a.classList.contains("is-open")&&(a.classList.remove("is-open"),a.setAttribute("inert",""),o.classList.remove("nc-lock"),l&&l.focus&&l.focus({preventScroll:!0}))}a.addEventListener("click",g=>{let m=g.target;if(m.closest("[data-nc-cart-close]")){g.preventDefault(),v();return}if(m.closest("[data-nc-drawer-overlay]")){v();return}let h=m.closest("[data-nc-line-qty]");if(h){g.preventDefault(),t.setQty(h.getAttribute("data-nc-line"),parseInt(h.getAttribute("data-nc-line-qty"),10));return}let b=m.closest("[data-nc-terms-btn]");if(b&&b.getAttribute("aria-disabled")==="true"){g.preventDefault();let A=a.querySelector("[data-nc-terms]");A&&A.focus();return}b&&g.preventDefault()}),a.addEventListener("change",g=>{if(!g.target.matches("[data-nc-terms]"))return;c=g.target.checked;let m=a.querySelector("[data-nc-terms-btn]");m&&m.setAttribute("aria-disabled",c?"false":"true")}),document.addEventListener("keydown",g=>{if(g.key==="Escape"&&v(),g.key==="Tab"&&a.classList.contains("is-open")){let m=Array.from(a.querySelectorAll('a[href]:not([tabindex="-1"]), button, input')).filter(A=>A.offsetParent!==null);if(!m.length)return;let h=m[0],b=m[m.length-1];g.shiftKey&&document.activeElement===h?(g.preventDefault(),b.focus()):!g.shiftKey&&document.activeElement===b&&(g.preventDefault(),h.focus())}}),t.on(g=>{g==="cart:add"?(p(),f()):g==="cart:change"?p():g==="cart:open"&&(p(),f())}),p(),new URLSearchParams(location.search).get("open")==="1"&&t.count()===0&&(t.add("skin-oil",1),t.add("day-cream",1))}dn("theme-header",so);dn("hero",cc);dn("offers",hc);dn("theme-trust-bar",uc);dn("deals",pc);dn("theme-shop-tabs",vc);dn("theme-trust",yc);dn("theme-lifestyle",Mc);dn("theme-cases",bc);dn("theme-testimonials",Sc);dn("theme-story",wc);dn("theme-footer",Ac);dn("theme-cart",Ec);Uc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
