(()=>{var tn="products/",fc=(i,e)=>Math.round(i*(1-e/100)),Su=[{id:"skin-oil",name:"CBD Hudpleje Olie",strength:"1000 mg",size:"30 ml",eyebrow:"CBD Skin Care",price0:499,pct:25,img:tn+"skin-oil.webp",hires:tn+"skin-oil-hires.webp",hero:!0,badge:"badges/vidunder-olien.svg",nickname:"Vidunder Olien",claim:"Efterlader huden bl\xF8d, velplejet og smuk \u2013 til alle hudtyper.",notes:"CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke."},{id:"day-cream",name:"CBD Dagcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:399,pct:25,img:tn+"day-cream.webp",hires:tn+"day-cream-hires.webp",claim:"Let dagcreme med CBD, aloe vera og sheasm\xF8r til en glat og velplejet hud."},{id:"night-cream",name:"CBD Natcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:449,pct:25,img:tn+"night-cream.webp",hires:tn+"night-cream-bottle-hires.webp",claim:"N\xE6rende natcreme med mandelolie og squalane, der underst\xF8tter hudens naturlige fugt."},{id:"serum",name:"CBD Hyaluronic Serum",size:"30 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:tn+"hyaluron-serum.webp",hires:tn+"hyaluron-serum-hires.webp",claim:"Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk."},{id:"cleansing-gel",name:"CBD Rensegel",size:"100 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:tn+"cleansing-gel.webp",hires:tn+"cleansing-gel-bottle-hires.webp",claim:"Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance."},{id:"body-lotion",name:"CBD Bodylotion",size:"200 ml",eyebrow:"CBD Skin Care",price0:249,pct:25,img:tn+"body-lotion.webp",claim:"Tr\xE6kker hurtigt ind og efterlader kroppen bl\xF8d. Giver intensiv fugtighed til t\xF8r hud."},{id:"shampoo",name:"CBD Shampoo",strength:"750 mg",size:"300 ml",eyebrow:"CBD Hair Care",price0:199,pct:25,img:tn+"shampoo.webp",claim:"Mild shampoo uden un\xF8dvendige ingredienser \u2013 til hele familien."},{id:"komplet-pakken",name:"Komplet Pakken",size:"Rens \xB7 Dag \xB7 Nat \xB7 Olie",eyebrow:"Sampakke",price0:1198,valueLoose:1646,pct:25,img:tn+"startpakke-plus.webp",bundle:!0,badge:"badges/komplet-pakken.svg",contains:["cleansing-gel","day-cream","night-cream","skin-oil"],claim:"Hele rutinen, morgen og aften \u2013 fire produkter i \xE9n pakke."},{id:"all-day-facial",name:"All Day Facial",size:"Rens \xB7 Dag \xB7 Nat",eyebrow:"Sampakke",price0:860,valueLoose:1147,pct:25,img:tn+"all-day-facial.webp",bundle:!0,badge:"badges/all-day-facial.svg",contains:["cleansing-gel","day-cream","night-cream"],claim:"Den daglige ansigtsrutine samlet \u2013 rens, dag og nat."},{id:"lip-balm",name:"CBD Lip Balm",size:"",eyebrow:"Gave",price0:79,pct:0,img:null,gift:!0,claim:"Gratis ved k\xF8b over 699 kr."}],Oa=Su.map(i=>({...i,price:fc(i.price0,i.pct),save:i.price0-fc(i.price0,i.pct)})),Tr={name:"Black Week",startsAt:"2026-11-23T00:00:00+01:00",endsAt:"2026-11-30T23:59:59+01:00",headlinePct:25,giftThreshold:699,giftId:"lip-balm",giftValue:79,freeShipping:399,code:null};var Rr=[];function yn(i,e){Rr.push([i,e])}var wu=Date.parse("2026-11-27T10:00:00+01:00"),Eu=performance.now(),Au={now:()=>wu+(performance.now()-Eu),end:Date.parse(Tr.endsAt),start:Date.parse(Tr.startsAt)},za=new Set,Wn={cart:[]},Tu={get:()=>Wn,on:i=>(za.add(i),()=>za.delete(i)),emit:(i,e)=>za.forEach(t=>t(i,e,Wn)),add(i,e=1){let t=Wn.cart.find(n=>n.id===i);t?t.qty+=e:Wn.cart.push({id:i,qty:e}),this.emit("cart:add",{id:i,qty:e})},setQty(i,e){let t=Wn.cart.find(n=>n.id===i);t&&(t.qty=Math.max(0,e),t.qty||Wn.cart.splice(Wn.cart.indexOf(t),1),this.emit("cart:change",{id:i}))},count:()=>Wn.cart.reduce((i,e)=>i+e.qty,0),subtotal:()=>Wn.cart.reduce((i,e)=>i+e.qty*mc[e.id].price,0),openCart(){this.emit("cart:open")}},mc=Object.fromEntries(Oa.map(i=>[i.id,i])),Ru={kr:i=>`${Math.round(i).toLocaleString("da-DK")} kr.`,pct:i=>`${Math.round(i)}%`},pc=document.currentScript&&document.currentScript.src,Cu=window.NC_ASSET_BASE||(pc?new URL("../assets/",pc).href:"../assets/"),Iu=i=>Cu+i;function gc(){let i={store:Tu,clock:Au,fmt:Ru,products:Oa,byId:mc,campaign:Tr,asset:Iu,prefersReducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,isMobile:()=>matchMedia("(max-width: 760px)").matches},e=()=>{let n=0;for(let[r,a]of Rr){let o=document.querySelector(`[data-section="${r}"]`);if(o&&(n++,!o.dataset.ncInit)){o.dataset.ncInit="1";try{a(o,i)}catch(l){console.error(`[section ${r}]`,l)}}}let s=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-in"),s.unobserve(a.target))}),{rootMargin:"0px 0px -8% 0px"});return document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(r=>s.observe(r)),n},t=()=>{if(e()>=Rr.length)return;let n=new MutationObserver(()=>{e()>=Rr.length&&n.disconnect()});n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>n.disconnect(),2e4)};window.NCBW={ctx:i,run:e},window.NC_DEFER_BOOT||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t())}var Pu={"products/skin-oil.webp":[1200,1200,473,242,722,1007],"products/startpakke-plus.webp":[1200,1200,172,77,1169,1129],"products/all-day-facial.webp":[1200,1200,160,78,1200,1129],"products/day-cream.webp":[1200,1200,345,96,937,1153],"products/night-cream.webp":[1200,1200,345,96,942,1155],"products/hyaluron-serum.webp":[800,1200,108,225,765,1114],"products/cleansing-gel.webp":[1200,1200,429,101,771,1115],"products/body-lotion.webp":[800,1200,186,163,601,1147],"products/shampoo.webp":[1200,1200,455,64,764,1151]},vc=["komplet-pakken","skin-oil","night-cream","all-day-facial"],xc=5600;function Ha(i,e){let t=(D,$=i)=>$.querySelector(D),n=(D,$=i)=>[...$.querySelectorAll(D)],s=new URLSearchParams(location.search),r=e.prefersReducedMotion,a=matchMedia("(min-width: 1180px)"),o=D=>String(D).replace(/[&<>"]/g,$=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[$]),l=new Set,c=(D=0,$=14,F=()=>{})=>({x:D,v:0,t:D,w:$,apply:F}),u=0,h=0,d=D=>{l.add(D),u||(h=performance.now(),u=requestAnimationFrame(v))},f=(D,$,F=!1)=>{if(D.t=$,F||r){D.x=$,D.v=0,D.apply(D.x);return}d(D)};function v(D){let $=Math.min(.034,(D-h)/1e3);h=D;for(let F of l){let Ae=F.w*F.w*(F.t-F.x)-2*F.w*F.v;F.v+=Ae*$,F.x+=F.v*$,Math.abs(F.t-F.x)<5e-4&&Math.abs(F.v)<5e-4&&(F.x=F.t,F.v=0,l.delete(F)),F.apply(F.x)}u=l.size?requestAnimationFrame(v):0}let g=(D,$="")=>{let F=Pu[D.img];return`<img class="${$}" src="${e.asset(D.img)}" alt="" loading="lazy" decoding="async" ${F?`data-box="${F.join(",")}"`:""}>`};function m(D,$=.68,F=.9,Ae=.74){n("img[data-box]",D).forEach(Be=>{let qe=Be.parentElement,Ke=qe.clientWidth,et=qe.clientHeight;if(!Ke||!et)return;let[tt,Rt,wt,lt,$e,en]=Be.dataset.box.split(",").map(Number),Kt=qe.hasAttribute("data-wide")?Math.max($,.78):$,Ot=Math.min(et*Kt/(en-lt),Ke*Ae/($e-wt)),Ut=(en-lt)*Ot;Be.style.width=`${tt*Ot}px`,Be.style.left=`${Ke/2-(wt+$e)/2*Ot}px`,Be.style.top=`${et*F-Ut-lt*Ot}px`})}let p=D=>D.pct?`<span class="nc-price"><span class="nc-price__now">${e.fmt.kr(D.price)}</span><span class="nc-price__was">F\xF8rpris ${e.fmt.kr(D.price0)}</span></span>`:`<span class="nc-price"><span class="nc-price__now">${e.fmt.kr(D.price)}</span></span>`,S=(D,$,F=!1)=>`
    <a class="hdr-tile" href="${$}">
      <span class="hdr-tile__media"${F?" data-wide":""}>${g(D)}${D.pct?`<span class="nc-bubble nc-bubble--sale hdr-tile__flag">\u2212${D.pct}%</span>`:""}</span>
      <span class="hdr-tile__name">${o(D.nickname||D.name)}</span>
      <span class="hdr-tile__meta">${o(D.nickname?[D.strength,D.size].filter(Boolean).join(" \xB7 "):D.size)}</span>
      ${p(D)}
    </a>`,_=()=>`
    <a class="hdr-gift nc-grain" href="#offers">
      <span><span class="hdr-gift__eyebrow">Gave</span><span class="hdr-gift__title">Gratis CBD Lip Balm</span></span>
      <span class="hdr-gift__text">F\xF8lger med automatisk ved k\xF8b over ${e.fmt.kr(e.campaign.giftThreshold)} (v\xE6rdi ${e.fmt.kr(e.campaign.giftValue)}).</span>
      <span class="hdr-pil" aria-hidden="true"></span>
      <span class="hdr-gift__disc" aria-hidden="true"></span>
    </a>`,M=t(".hdr-ann"),B=n(".hdr-ann__msg"),w=n(".hdr-ann__ticks i"),R=t(".hdr-ann__pause"),U=0,b=0,y=performance.now(),L=!1,q=!1;function X(D){let $=B[U];$.classList.remove("is-active"),$.classList.add("is-leaving"),$.setAttribute("aria-hidden","true"),$.querySelectorAll("a").forEach(Ae=>Ae.setAttribute("tabindex","-1")),setTimeout(()=>$.classList.remove("is-leaving"),950),w[U].style.setProperty("--p",0),w[U].classList.remove("is-run"),U=(D+B.length)%B.length,b=0;let F=B[U];F.classList.add("is-active"),F.setAttribute("aria-hidden","false"),F.querySelectorAll("a").forEach(Ae=>Ae.removeAttribute("tabindex")),w[U].classList.add("is-run")}(function D($){let F=$-y;y=$,!L&&!q&&!document.hidden&&(b+=Math.min(F,100)),w[U].style.setProperty("--p",Math.min(1,b/xc).toFixed(4)),b>=xc&&X(U+1),requestAnimationFrame(D)})(y),M.addEventListener("pointerenter",()=>L=!0),M.addEventListener("pointerleave",()=>L=!1),M.addEventListener("focusin",()=>L=!0),M.addEventListener("focusout",D=>{M.contains(D.relatedTarget)||(L=!1)}),R.addEventListener("click",()=>{q=!q,M.classList.toggle("is-paused",q),R.setAttribute("aria-pressed",String(q)),R.setAttribute("aria-label",q?"Afspil beskeder":"S\xE6t beskeder p\xE5 pause")});let te=s.get("condensed")==="1",V=c(0,11,D=>i.style.setProperty("--c",Math.max(0,Math.min(1,D)).toFixed(4))),C=()=>te?1:Math.max(0,Math.min(1,(window.scrollY-6)/84));f(V,C(),!0),addEventListener("scroll",()=>{let D=C();D!==V.t&&f(V,D),i.classList.toggle("is-condensed",D>.5)},{passive:!0}),i.classList.toggle("is-condensed",V.t>.5);let G=n("[data-countdown]"),N=D=>String(D).padStart(2,"0"),le=(D,$,F)=>`${D} ${D===1?$:F}`,fe="";function we(){let D=e.clock.now(),$=e.clock.start,F=e.clock.end;if(D>=F)return{state:"over"};let Ae=D<$,Be=Math.floor(((Ae?$:F)-D)/1e3),qe=Math.floor(Be/86400),Ke=Math.floor(Be%86400/3600),et=Math.floor(Be%3600/60),tt=Be%60,Rt=qe>0?[[qe,"d",String(qe)],[Ke,"t",N(Ke)],[et,"m",N(et)]]:Ke>0?[[Ke,"t",String(Ke)],[et,"m",N(et)],[tt,"s",N(tt)]]:[[et,"m",String(et)],[tt,"s",N(tt)]],wt=qe>0?[le(qe,"dag","dage"),le(Ke,"time","timer"),le(et,"minut","minutter")]:Ke>0?[le(Ke,"time","timer"),le(et,"minut","minutter")]:[le(et,"minut","minutter")],lt=`Black Week ${Ae?"starter":"slutter"} om ${wt.slice(0,-1).join(", ")}${wt.length>1?" og ":""}${wt.at(-1)}`;return{state:Ae?"pre":"live",units:Rt,aria:lt,tick:Math.floor((D-e.clock.start)/1e3)}}function Le(){let D=we();for(let $ of G){let F=t("[data-cd-value]",$),Ae=t(".hdr-cd__label",$);if(D.state==="over"){F.textContent="Black Week er slut",Ae&&(Ae.hidden=!0),$.setAttribute("aria-label","Black Week er slut");continue}Ae&&(Ae.textContent=D.state==="pre"?"Starter om":"Slutter om"),$.style.setProperty("--sec",`${D.tick*6}deg`);let Be=D.units.map(qe=>qe[1]).join("");F.dataset.sig!==Be?(F.dataset.sig=Be,F.innerHTML=D.units.map(([,qe,Ke])=>`<span class="hdr-cd__u"><span class="hdr-cd__n"><span>${Ke}</span></span>${qe}</span>`).join("")):n(".hdr-cd__n",F).forEach((qe,Ke)=>{let et=D.units[Ke][2],tt=qe.lastElementChild;if(tt.textContent===et)return;if(r){tt.textContent=et;return}[...qe.children].forEach(wt=>wt!==tt&&wt.remove()),tt.className="is-out";let Rt=document.createElement("span");Rt.className="is-in",Rt.textContent=et,qe.append(Rt),setTimeout(()=>tt.remove(),560)}),(D.aria!==fe||$.getAttribute("aria-label")!==D.aria)&&$.setAttribute("aria-label",D.aria)}fe=D.aria}Le(),setInterval(Le,1e3);let ge=n("[data-cart]"),J=ge.map(D=>c(0,15,$=>D.style.setProperty("--dip",`${$.toFixed(2)}px`))),he=e.store.count();function Q(D){let $=e.store.count();ge.forEach((F,Ae)=>{F.classList.toggle("has-items",$>0),F.setAttribute("aria-label",`Kurv, ${$} ${$===1?"vare":"varer"}`);let Be=t("[data-cart-num]",F);Be.textContent=$>99?"99+":String($),D&&!r&&(Be.classList.remove("is-in"),F.classList.remove("is-pulse"),F.offsetWidth,Be.classList.add("is-in"),F.classList.add("is-pulse"),J[Ae].v+=120,J[Ae].t=0,d(J[Ae]))}),he=$}Q(!1),e.store.on(D=>{D==="cart:add"?Q(!0):D==="cart:change"&&Q(e.store.count()>he)}),ge.forEach(D=>D.addEventListener("click",()=>{Me(),e.store.openCart()}));let Y=t(".hdr-scrim"),ue=()=>Y.classList.toggle("is-on",!!(ne||_e));Y.addEventListener("click",()=>Me());let be=t(".hdr-nav"),Se=t(".hdr-nav__thread"),Ce=c(0,18,D=>Se.style.setProperty("--tx",`${D.toFixed(2)}px`)),De=c(0,18,D=>Se.style.setProperty("--tw",D.toFixed(2))),ee=c(0,14,D=>Se.style.setProperty("--to",Math.max(0,Math.min(1,D)).toFixed(3))),I=n(".hdr-nav__link");function Re(D){if(!D||D.classList.contains("hdr-nav__link--bw")){f(ee,0);return}let $=parseFloat(getComputedStyle(D).paddingLeft)||12,F=D.offsetLeft+$,Ae=D.offsetWidth-$*2,Be=ee.x<.05;f(Ce,F,Be),f(De,Ae,Be),f(ee,1)}let ae=t(".hdr-mega"),re=Object.fromEntries(n(".hdr-mega__panel").map(D=>[D.dataset.panel,D])),ne=null,ye=0,pe=0;Object.values(re).forEach(D=>{let $=t(".hdr-mega__tiles",D),F=$.dataset.ids.split(",").filter(et=>e.byId[et]),Ae=F.length<=2?2:1,Be=D.dataset.panel==="sets"||D.dataset.panel==="bw"?"#offers":"#deals",qe=F.map(et=>`<li${Ae>1?' style="grid-column: span 2"':""}>${S(e.byId[et],Be,Ae>1)}</li>`).join(""),Ke=5-F.length*Ae;Ke>0&&(qe+=`<li style="grid-column: span ${Ke}">${_()}</li>`),$.innerHTML=qe,[...n(".hdr-mega__intro > *",D),...$.children].forEach((et,tt)=>et.style.setProperty("--i",tt))}),n(".hdr-mega__more").forEach(D=>D.insertAdjacentHTML("beforeend",'<span class="hdr-pil" aria-hidden="true"></span>'));function A(D){if(clearTimeout(pe),clearTimeout(ye),!a.matches||!re[D])return;_e&&Ue(!1);let $=!ne;ne=D,Object.entries(re).forEach(([F,Ae])=>Ae.classList.toggle("is-active",F===D)),I.forEach(F=>F.classList.toggle("is-open",F.dataset.mega===D)),ae.classList.add("is-open"),ae.removeAttribute("inert"),ae.setAttribute("aria-hidden","false"),m(re[D]),$&&requestAnimationFrame(()=>m(re[D])),ue()}function x(){clearTimeout(ye),clearTimeout(pe),ne&&(ne=null,ae.classList.remove("is-open"),ae.setAttribute("inert",""),ae.setAttribute("aria-hidden","true"),I.forEach(D=>D.classList.remove("is-open")),be.matches(":hover")||f(ee,0),ue())}let W=(D=200)=>{clearTimeout(ye),clearTimeout(pe),pe=setTimeout(x,D)};I.forEach(D=>{D.addEventListener("pointerenter",()=>{Re(D);let $=D.dataset.mega;if(!$){ne&&W(160);return}clearTimeout(pe),clearTimeout(ye),ne?A($):ye=setTimeout(()=>A($),110)}),D.addEventListener("focus",()=>{Re(D),D.dataset.mega?A(D.dataset.mega):x()}),D.addEventListener("click",()=>x())}),be.addEventListener("pointerleave",()=>{ne?W(220):(clearTimeout(ye),f(ee,0))}),ae.addEventListener("pointerenter",()=>clearTimeout(pe)),ae.addEventListener("pointerleave",()=>{W(220),f(ee,0)}),i.addEventListener("focusout",D=>{ne&&!be.contains(D.relatedTarget)&&!ae.contains(D.relatedTarget)&&(x(),f(ee,0))});let ie=t(".hdr-search"),de=t(".hdr-search__input"),ve=t(".hdr-search__results"),He=t(".hdr-search__status"),Pe=n(".hdr-search-btn"),_e=!1,je=null,Ee=D=>String(D||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,""),Fe=e.products.filter(D=>!D.gift&&D.img);function Je(){let D=de.value.trim(),$=Ee(D),F,Ae="";if(!$)F=vc.map(Be=>e.byId[Be]).filter(Boolean);else{let Be=$.split(/\s+/);F=Fe.filter(qe=>{let Ke=Ee([qe.name,qe.nickname,qe.eyebrow,qe.size,qe.strength,qe.claim,qe.notes,qe.bundle?"sampakke pakke":""].join(" "));return Be.every(et=>Ke.includes(et))}),Ae=F.length?`${F.length} ${F.length===1?"resultat":"resultater"} for \xBB${D}\xAB`:`Ingen resultater for \xBB${D}\xAB \u2013 pr\xF8v fx Natcreme eller Komplet Pakken.`,F.length||(F=vc.map(qe=>e.byId[qe]))}He.textContent=Ae,ve.innerHTML=F.slice(0,8).map((Be,qe)=>`<li style="--i:${qe}">${S(Be,Be.bundle?"#offers":"#deals")}</li>`).join(""),m(ve)}function We(D){_e||(x(),_e=!0,je=D||document.activeElement,ie.classList.add("is-open"),ie.removeAttribute("inert"),ie.setAttribute("aria-hidden","false"),Pe.forEach($=>$.setAttribute("aria-expanded","true")),Je(),ue(),requestAnimationFrame(()=>{m(ve),de.focus({preventScroll:!0})}))}function Ue(D=!0){_e&&(_e=!1,ie.classList.remove("is-open"),ie.setAttribute("inert",""),ie.setAttribute("aria-hidden","true"),Pe.forEach($=>$.setAttribute("aria-expanded","false")),ue(),D&&je&&je.focus&&je.focus({preventScroll:!0}))}Pe.forEach(D=>D.addEventListener("click",()=>_e?Ue():We(D))),t(".hdr-search__close").addEventListener("click",()=>Ue()),de.addEventListener("input",Je);let P=matchMedia("(max-width: 760px)"),k=()=>de.placeholder=P.matches?"S\xF8g, fx Vidunder Olien":"S\xF8g efter produkter, fx Vidunder Olien";k(),P.addEventListener("change",k),t(".hdr-search__form").addEventListener("submit",D=>{D.preventDefault();let $=t(".hdr-tile",ve);$&&de.value.trim()&&$.focus()}),n("[data-q]").forEach(D=>D.addEventListener("click",()=>{de.value=D.dataset.q,Je(),de.focus()}));let se=t(".hdr-drawer"),T=t(".hdr-burger");t("[data-logo-clone]").innerHTML=t(".hdr-bar .hdr-logo").innerHTML,n("[data-peek]").forEach(D=>{D.innerHTML=D.dataset.peek.split(",").map($=>e.byId[$]).filter(Boolean).map($=>`<span>${g($)}</span>`).join("")}),n(".hdr-stagger",se).forEach((D,$)=>D.style.setProperty("--i",$));let j=!1,z="";se.tabIndex=-1;function O(D){if(j)return;let $=D&&D.detail===0;Me(),j=!0,se.hidden=!1,se.offsetWidth,se.classList.add("is-open"),T.setAttribute("aria-expanded","true"),z=document.documentElement.style.overflow,document.documentElement.style.overflow="hidden",requestAnimationFrame(()=>m(se,.8,.9,.86)),setTimeout(()=>($?t(".hdr-drawer__close"):se).focus({preventScroll:!0}),60)}function xe(D=!0){if(!j)return;j=!1,se.classList.remove("is-open"),T.setAttribute("aria-expanded","false"),document.documentElement.style.overflow=z;let $=()=>{j||(se.hidden=!0)};r?$():setTimeout($,420),D&&T.focus({preventScroll:!0})}T.addEventListener("click",O),t(".hdr-drawer__close").addEventListener("click",()=>xe()),t("[data-open-search]").addEventListener("click",()=>{xe(!1),setTimeout(()=>We(T),r?0:200)}),se.addEventListener("keydown",D=>{if(D.key!=="Tab")return;let $=n("a[href], button:not([disabled])",se).filter(Be=>Be.offsetParent!==null),F=$[0],Ae=$.at(-1);D.shiftKey&&document.activeElement===F?(D.preventDefault(),Ae.focus()):!D.shiftKey&&document.activeElement===Ae&&(D.preventDefault(),F.focus())}),a.addEventListener("change",D=>{D.matches?xe(!1):x()});function Me(){x(),Ue(!1)}if(document.addEventListener("keydown",D=>{if(D.key==="Escape"){if(j)xe();else if(_e)Ue();else if(ne){let $=I.find(F=>F.dataset.mega===ne);x(),$&&$.focus()}}}),i.addEventListener("click",D=>{let $=D.target.closest('a[href^="#"]');if(!$)return;let F=$.getAttribute("href").slice(1);D.preventDefault();let Ae=j;if(xe(!1),Me(),F==="indhold"){let Ke=i.nextElementSibling;if(!Ke)return;Ke.setAttribute("tabindex","-1"),Ke.focus({preventScroll:!0}),scrollTo({top:Ke.getBoundingClientRect().top+scrollY-i.getBoundingClientRect().height+parseFloat(getComputedStyle(i).getPropertyValue("--ann-h")),behavior:r?"auto":"smooth"});return}if(F==="top"){scrollTo({top:0,behavior:r?"auto":"smooth"});return}let Be=document.querySelector(`[data-section="${F}"]`)||document.getElementById(F);if(!Be||Be===i)return;let qe=()=>{let Ke=t(".hdr-bar").getBoundingClientRect().height;scrollTo({top:Be.getBoundingClientRect().top+scrollY-Ke+1,behavior:r?"auto":"smooth"})};Ae?setTimeout(qe,80):qe()}),addEventListener("resize",()=>{ne&&m(re[ne]),_e&&m(ve),j&&m(se,.8,.9,.86)},{passive:!0}),s.get("cart")){let D=Math.min(9,+s.get("cart")||0);setTimeout(()=>D&&e.store.add("skin-oil",D),+s.get("cartAt")||400)}s.get("menu")==="1"&&setTimeout(O,150),s.has("search")&&setTimeout(()=>{de.value=s.get("search")==="1"?"":s.get("search"),We()},150),s.get("mega")&&setTimeout(()=>{A(s.get("mega"));let D=I.find($=>$.dataset.mega===s.get("mega"));Re(D)},150),s.get("pause")==="1"&&R.click()}function hi(i,e){let t=!1;return new IntersectionObserver(([s])=>{t=s.isIntersecting,e&&e(t)},{rootMargin:"120px"}).observe(i),()=>t}var Mn=()=>Math.min(window.devicePixelRatio||1,2);var Lu=0,yc=1,Du=2;var Ph=1,Uu=2,Jn=3,xi=0,Bt=1,mn=2,Nn=0,vi=1,ds=2,Mc=3,_c=4,Bl=5,Di=100,Fu=101,Nu=102,Bu=103,ku=104,Ou=200,kl=201,zu=202,Hu=203,yo=204,cr=205,Vu=206,Gu=207,Wu=208,qu=209,Xu=210,Yu=211,Ku=212,Zu=213,Ju=214,Mo=0,_o=1,bo=2,fs=3,So=4,wo=5,Eo=6,Ao=7,Lh=0,Qu=1,ju=2,Bn=0,$u=1,ed=2,td=3,nd=4,id=5,sd=6,Ol=7;var Dh=300,ps=301,ms=302,To=303,Ro=304,wa=306,Bi=1e3,Ni=1001,Co=1002,ln=1003,rd=1004;var Cr=1005;var Un=1006,Va=1007;var jn=1008;var ti=1009,Uh=1010,Fh=1011,hr=1012,zl=1013,ki=1014,Fn=1015,hn=1016,Hl=1017,Vl=1018,gs=1020,Nh=35902,Bh=1021,kh=1022,wn=1023,Oh=1024,zh=1025,cs=1026,vs=1027,Gl=1028,Wl=1029,Hh=1030,ql=1031;var Xl=1033,ea=33776,ta=33777,na=33778,ia=33779,Io=35840,Po=35841,Lo=35842,Do=35843,Uo=36196,Fo=37492,No=37496,Bo=37808,ko=37809,Oo=37810,zo=37811,Ho=37812,Vo=37813,Go=37814,Wo=37815,qo=37816,Xo=37817,Yo=37818,Ko=37819,Zo=37820,Jo=37821,sa=36492,Qo=36494,jo=36495,Vh=36283,$o=36284,el=36285,tl=36286;var ra=2300,nl=2301,Ga=2302,bc=2400,Sc=2401,wc=2402;var ad=3200,od=3201;var Gh=0,ld=1,on="",Nt="srgb",Rs="srgb-linear",Ea="linear",xt="srgb";var Xi=7680;var Ec=519,cd=512,hd=513,ud=514,Wh=515,dd=516,fd=517,pd=518,md=519,Ac=35044,qh=35048;var Tc="300 es",$n=2e3,aa=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,ar=Math.PI/180,xs=180/Math.PI;function Cs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Yl(i,e){return(i%e+e)%e}function gd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vd(i,e,t){return i!==e?(t-i)/(e-i):0}function or(i,e,t){return(1-t)*i+t*e}function xd(i,e,t,n){return or(i,e,1-Math.exp(-t*n))}function yd(i,e=1){return e-Math.abs(Yl(i,e*2)-e)}function Md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sd(i,e){return i+Math.random()*(e-i)}function wd(i){return i*(.5-Math.random())}function Ed(i){i!==void 0&&(Rc=i);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ad(i){return i*ar}function Td(i){return i*xs}function Rd(i){return(i&i-1)===0&&i!==0}function Cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function os(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rn={DEG2RAD:ar,RAD2DEG:xs,generateUUID:Cs,clamp:Pt,euclideanModulo:Yl,mapLinear:gd,inverseLerp:vd,lerp:or,damp:xd,pingpong:yd,smoothstep:Md,smootherstep:_d,randInt:bd,randFloat:Sd,randFloatSpread:wd,seededRandom:Ed,degToRad:Ad,radToDeg:Td,isPowerOfTwo:Rd,ceilPowerOfTwo:Cd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Pd,normalize:Zt,denormalize:os},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],v=n[8],g=s[0],m=s[3],p=s[6],S=s[1],_=s[4],M=s[7],B=s[2],w=s[5],R=s[8];return r[0]=a*g+o*S+l*B,r[3]=a*m+o*_+l*w,r[6]=a*p+o*M+l*R,r[1]=c*g+u*S+h*B,r[4]=c*m+u*_+h*w,r[7]=c*p+u*M+h*R,r[2]=d*g+f*S+v*B,r[5]=d*m+f*_+v*w,r[8]=d*p+f*M+v*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,v=t*h+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return e[0]=h*g,e[1]=(s*c-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new it;function Xh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ld(){let i=ur("canvas");return i.style.display="block",i}var Cc={};function sr(i){i in Cc||(Cc[i]=!0,console.warn(i))}function Dd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ud(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fd(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===on?Ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ic=[.64,.33,.3,.6,.15,.06],Pc=[.2126,.7152,.0722],Lc=[.3127,.329],Dc=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Rs]:{primaries:Ic,whitePoint:Lc,transfer:Ea,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Ic,whitePoint:Lc,transfer:xt,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});var Yi,il=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=ur("canvas")),Yi.width=e.width,Yi.height=e.height;let n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nd=0,oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qa(s[a].image)):r.push(qa(s[a]))}else r=qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bd=0,Qt=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ni,s=Ni,r=Un,a=jn,o=wn,l=ti,c=i.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Cs(),this.name="",this.source=new oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Dh;Qt.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(f+1)/2,B=(p+1)/2,w=(u+d)/4,R=(h+g)/4,U=(v+m)/4;return _>M&&_>B?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=R/n):M>B?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=U/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=R/r,s=U/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},la=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==v){let m=1-o,p=l*d+c*f+u*v+h*g,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let B=Math.sqrt(_),w=Math.atan2(B,p*S);m=Math.sin(m*w)/B,o=Math.sin(o*w)/B}let M=o*S;if(l=l*m+d*M,c=c*m+f*M,u=u*m+v*M,h=h*m+g*M,m===1-o){let B=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=B,c*=B,u*=B,h*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*f-c*d,e[t+1]=l*v+u*d+c*h-o*f,e[t+2]=c*v+u*f+o*d-l*h,e[t+3]=u*v-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new H,Fc=new Mi,ni=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Pr.subVectors(this.max,Qs),Ki.subVectors(e.a,Qs),Zi.subVectors(e.b,Qs),Ji.subVectors(e.c,Qs),ui.subVectors(Zi,Ki),di.subVectors(Ji,Zi),Ai.subVectors(Ki,Ji);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];return!Ya(t,Ki,Zi,Ji,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Ki,Zi,Ji,Pr))?!1:(Lr.crossVectors(ui,di),t=[Lr.x,Lr.y,Lr.z],Ya(t,Ki,Zi,Ji,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new H,new H,new H,new H,new H,new H,new H,new H],_n=new H,Ir=new ni,Ki=new H,Zi=new H,Ji=new H,ui=new H,di=new H,Ai=new H,Qs=new H,Pr=new H,Lr=new H,Ti=new H;function Ya(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);let o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var kd=new ni,js=new H,Ka=new H,kn=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);let t=js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Ka)),this.expandByPoint(js.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new H,Za=new H,Dr=new H,fi=new H,Ja=new H,Ur=new H,Qa=new H,Oi=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Za);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=fi.dot(this.direction),l=-fi.dot(Dr),c=fi.lengthSq(),u=Math.abs(1-a*a),h,d,f,v;if(u>0)if(h=a*l-o,d=a*o-l,v=r*u,h>=0)if(d>=-v)if(d<=v){let g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Za).addScaledVector(Dr,d),f}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){Ja.subVectors(t,e),Ur.subVectors(n,e),Qa.crossVectors(Ja,Ur);let a=this.direction.dot(Qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);let l=o*this.direction.dot(Ur.crossVectors(fi,Ur));if(l<0)return null;let c=o*this.direction.dot(Ja.cross(fi));if(c<0||l+c>a)return null;let u=-o*fi.dot(Qa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,v,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,v,g,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,v,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,v=c*u,g=c*h;t[0]=d+g*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,v=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=v*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=v*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+v,t[10]=d-g*h}else if(e.order==="XZY"){let d=a*l,f=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,zd)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),pi.crossVectors(n,rn),pi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),pi.crossVectors(n,rn)),pi.normalize(),Fr.crossVectors(rn,pi),s[0]=pi.x,s[4]=Fr.x,s[8]=rn.x,s[1]=pi.y,s[5]=Fr.y,s[9]=rn.y,s[2]=pi.z,s[6]=Fr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],S=n[3],_=n[7],M=n[11],B=n[15],w=s[0],R=s[4],U=s[8],b=s[12],y=s[1],L=s[5],q=s[9],X=s[13],te=s[2],V=s[6],C=s[10],G=s[14],N=s[3],le=s[7],fe=s[11],we=s[15];return r[0]=a*w+o*y+l*te+c*N,r[4]=a*R+o*L+l*V+c*le,r[8]=a*U+o*q+l*C+c*fe,r[12]=a*b+o*X+l*G+c*we,r[1]=u*w+h*y+d*te+f*N,r[5]=u*R+h*L+d*V+f*le,r[9]=u*U+h*q+d*C+f*fe,r[13]=u*b+h*X+d*G+f*we,r[2]=v*w+g*y+m*te+p*N,r[6]=v*R+g*L+m*V+p*le,r[10]=v*U+g*q+m*C+p*fe,r[14]=v*b+g*X+m*G+p*we,r[3]=S*w+_*y+M*te+B*N,r[7]=S*R+_*L+M*V+B*le,r[11]=S*U+_*q+M*C+B*fe,r[15]=S*b+_*X+M*G+B*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+g*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],p=e[15],S=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,_=v*d*c-u*m*c-v*l*f+a*m*f+u*l*p-a*d*p,M=u*g*c-v*h*c+v*o*f-a*g*f-u*o*p+a*h*p,B=v*h*l-u*g*l-v*o*d+a*g*d+u*o*m-a*h*m,w=t*S+n*_+s*M+r*B;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=S*R,e[1]=(g*d*r-h*m*r-g*s*f+n*m*f+h*s*p-n*d*p)*R,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*R,e[4]=_*R,e[5]=(u*m*r-v*d*r+v*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=M*R,e[9]=(v*h*r-u*g*r-v*n*f+t*g*f+u*n*p-t*h*p)*R,e[10]=(a*g*r-v*o*r+v*n*c-t*g*c-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*R,e[12]=B*R,e[13]=(u*g*s-v*h*s+v*n*d-t*g*d-u*n*m+t*h*m)*R,e[14]=(v*o*s-a*g*s-v*n*l+t*g*l+a*n*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,v=r*h,g=a*u,m=a*h,p=o*h,S=l*c,_=l*u,M=l*h,B=n.x,w=n.y,R=n.z;return s[0]=(1-(g+p))*B,s[1]=(f+M)*B,s[2]=(v-_)*B,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(d+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(v+_)*R,s[9]=(m-S)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Qi.set(s[0],s[1],s[2]).length(),a=Qi.set(s[4],s[5],s[6]).length(),o=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);let c=1/r,u=1/a,h=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$n){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,v;if(o===$n)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===aa)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$n){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,f=(n+s)*u,v,g;if(o===$n)v=(a+r)*h,g=-2*h;else if(o===aa)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qi=new H,bn=new pt,Od=new H(0,0,0),zd=new H(1,1,1),pi=new H,Fr=new H,rn=new H,Nc=new pt,Bc=new Mi,gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hd=0,kc=new H,ji=new Mi,Yn=new pt,Nr=new H,$s=new H,Vd=new H,Gd=new Mi,Oc=new H(1,0,0),zc=new H(0,1,0),Hc=new H(0,0,1),Vc={type:"added"},Wd={type:"removed"},$i={type:"childadded",child:null},ja={type:"childremoved",child:null},kt=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new H,t=new gn,n=new Mi,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new it}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt($s,Nr,this.up):Yn.lookAt(Nr,$s,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Yn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vc),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vc),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};kt.DEFAULT_UP=new H(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new H,Kn=new H,$a=new H,Zn=new H,es=new H,ts=new H,Gc=new H,eo=new H,to=new H,no=new H,io=new yt,so=new yt,ro=new yt,Ui=class i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Kn.subVectors(n,t),$a.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Kn),l=Sn.dot($a),c=Kn.dot(Kn),u=Kn.dot($a),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,v=(a*u-o*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(e,t),so.fromBufferAttribute(e,n),ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(io,r.x),a.addScaledVector(so,r.y),a.addScaledVector(ro,r.z),a}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Kn.subVectors(e,t),Sn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Sn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;es.subVectors(s,n),ts.subVectors(r,n),eo.subVectors(e,n);let l=es.dot(eo),c=ts.dot(eo);if(l<=0&&c<=0)return t.copy(n);to.subVectors(e,s);let u=es.dot(to),h=ts.dot(to);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(es,a);no.subVectors(e,r);let f=es.dot(no),v=ts.dot(no);if(v>=0&&f<=v)return t.copy(r);let g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(ts,o);let m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return Gc.subVectors(r,s),o=(h-u)/(h-u+(f-v)),t.copy(s).addScaledVector(Gc,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ao(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Yl(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ao(a,r,e+1/3),this.g=ao(a,r,e),this.b=ao(a,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return dt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Pt(Xt.r*255,0,255))*65536+Math.round(Pt(Xt.g*255,0,255))*256+Math.round(Pt(Xt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Nt){dt.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Br);let n=or(mi.h,Br.h,t),s=or(mi.s,Br.s,t),r=or(mi.l,Br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Qe;Qe.NAMES=Yh;var qd=0,_i=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Cs(),this.name="",this.blending=vi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=cr,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==cr&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends _i{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new H,kr=new Ne,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}};var ca=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ha=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xd=0,pn=new pt,oo=new kt,ns=new H,an=new ni,er=new ni,Ft=new H,At=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xh(e)?ha:ca)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(an.min,er.min),an.expandByPoint(Ft),Ft.addVectors(an.max,er.max),an.expandByPoint(Ft)):(an.expandByPoint(er.min),an.expandByPoint(er.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),Ft.add(ns)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new H,l[U]=new H;let c=new H,u=new H,h=new H,d=new Ne,f=new Ne,v=new Ne,g=new H,m=new H;function p(U,b,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,b),v.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),v.sub(d);let L=1/(f.x*v.y-v.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),o[U].add(g),o[b].add(g),o[y].add(g),l[U].add(m),l[b].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,b=S.length;U<b;++U){let y=S[U],L=y.start,q=y.count;for(let X=L,te=L+q;X<te;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let _=new H,M=new H,B=new H,w=new H;function R(U){B.fromBufferAttribute(s,U),w.copy(B);let b=o[U];_.copy(b),_.sub(B.multiplyScalar(B.dot(b))).normalize(),M.crossVectors(w,b);let L=M.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,L)}for(let U=0,b=S.length;U<b;++U){let y=S[U],L=y.start,q=y.count;for(let X=L,te=L+q;X<te;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[f++]}return new Et(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=new pt,Ri=new Oi,Or=new kn,qc=new H,zr=new H,Hr=new H,Vr=new H,lo=new H,Gr=new H,Xc=new H,Wr=new H,Ze=class extends kt{constructor(e=new At,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(lo.fromBufferAttribute(h,e),a?Gr.addScaledVector(lo,u):Gr.addScaledVector(lo.sub(t),u))}t.add(Gr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Or.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Or,qc)===null||Ri.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Wc.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){let m=d[v],p=a[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,B=_;M<B;M+=3){let w=o.getX(M),R=o.getX(M+1),U=o.getX(M+2);s=qr(this,p,e,n,c,u,h,w,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){let S=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);s=qr(this,a,e,n,c,u,h,S,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){let m=d[v],p=a[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,B=_;M<B;M+=3){let w=M,R=M+1,U=M+2;s=qr(this,p,e,n,c,u,h,w,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){let S=m,_=m+1,M=m+2;s=qr(this,a,e,n,c,u,h,S,_,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Yd(i,e,t,n,s,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===xi,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:i}}function qr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,zr),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Vr);let u=Yd(i,e,t,n,zr,Hr,Vr,Xc);if(u){let h=new H;Ui.getBarycoord(Xc,zr,Hr,Vr,h),s&&(u.uv=Ui.getInterpolatedAttribute(s,o,l,c,h,new Ne)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,o,l,c,h,new Ne)),a&&(u.normal=Ui.getInterpolatedAttribute(a,o,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new H,materialIndex:0};Ui.getNormal(zr,Hr,Vr,d.normal),u.face=d,u.barycoord=h}return u}var ii=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function v(g,m,p,S,_,M,B,w,R,U,b){let y=M/R,L=B/U,q=M/2,X=B/2,te=w/2,V=R+1,C=U+1,G=0,N=0,le=new H;for(let fe=0;fe<C;fe++){let we=fe*L-X;for(let Le=0;Le<V;Le++){let ge=Le*y-q;le[g]=ge*S,le[m]=we*_,le[p]=te,c.push(le.x,le.y,le.z),le[g]=0,le[m]=0,le[p]=w>0?1:-1,u.push(le.x,le.y,le.z),h.push(Le/R),h.push(1-fe/U),G+=1}}for(let fe=0;fe<U;fe++)for(let we=0;we<R;we++){let Le=d+we+V*fe,ge=d+we+V*(fe+1),J=d+(we+1)+V*(fe+1),he=d+(we+1)+V*fe;l.push(Le,ge,he),l.push(ge,J,he),N+=6}o.addGroup(f,N,b),f+=N,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=ys(i[t]);for(let s in n)e[s]=n[s]}return e}function Kd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Is={clone:ys,merge:Jt},Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends _i{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ms=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new H,Yc=new Ne,Kc=new Ne,Tt=class extends Ms{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Yc,Kc),t.subVectors(Kc,Yc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},is=-90,ss=1,al=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(is,ss,e,t);s.layers=this.layers,this.add(s);let r=new Tt(is,ss,e,t);r.layers=this.layers,this.add(r);let a=new Tt(is,ss,e,t);a.layers=this.layers,this.add(a);let o=new Tt(is,ss,e,t);o.layers=this.layers,this.add(o);let l=new Tt(is,ss,e,t);l.layers=this.layers,this.add(l);let c=new Tt(is,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ua=class extends Qt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ol=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ua(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Nn});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Un),new al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},co=new H,Qd=new H,jd=new it,Qn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=co.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jd.getNormalMatrix(e),s=this.coplanarPoint(co).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new kn,Xr=new H,fr=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],v=s[9],g=s[10],m=s[11],p=s[12],S=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+u,m+v,M+S).normalize(),n[3].setComponents(l-a,d-u,m-v,M-S).normalize(),n[4].setComponents(l-o,d-h,m-g,M-_).normalize(),t===$n)n[5].setComponents(l+o,d+h,m+g,M+_).normalize();else if(t===aa)n[5].setComponents(o,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $d(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<h.length;f++){let v=h[d],g=h[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,v=h.length;f<v;f++){let g=h[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var jt=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],v=[],g=[],m=[];for(let p=0;p<u;p++){let S=p*d-a;for(let _=0;_<c;_++){let M=_*h-r;v.push(M,-S,0),g.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let _=S+c*p,M=S+c*(p+1),B=S+1+c*(p+1),w=S+1+c*p;f.push(_,M,w),f.push(M,B,w)}this.setIndex(f),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(g,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
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
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
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
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
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
#endif`,$f=`struct PhysicalMaterial {
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
}`,ep=`
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Op=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
}`,lm=`#define DISTANCE
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
}`,cm=`#define DISTANCE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,xm=`#define MATCAP
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
}`,ym=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,bm=`#define PHONG
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
}`,Sm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Pm=`uniform vec3 color;
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
}`,Lm=`uniform float rotation;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:yf,color_fragment:Mf,color_pars_fragment:_f,color_pars_vertex:bf,color_vertex:Sf,common:wf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:Af,displacementmap_pars_vertex:Tf,displacementmap_vertex:Rf,emissivemap_fragment:Cf,emissivemap_pars_fragment:If,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:Df,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Ff,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Yf,envmap_vertex:Bf,fog_vertex:kf,fog_pars_vertex:Of,fog_fragment:zf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:qf,lights_pars_begin:Xf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Zf,lights_phong_fragment:Jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:jf,lights_physical_pars_fragment:$f,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:vp,normal_fragment_begin:xp,normal_fragment_maps:yp,normal_pars_fragment:Mp,normal_pars_vertex:_p,normal_vertex:bp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Tp,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Ip,project_vertex:Pp,dithering_fragment:Lp,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Bp,shadowmap_vertex:kp,shadowmask_pars_fragment:Op,skinbase_vertex:zp,skinning_pars_vertex:Hp,skinning_vertex:Vp,skinnormal_vertex:Gp,specularmap_fragment:Wp,specularmap_pars_fragment:qp,tonemapping_fragment:Xp,tonemapping_pars_fragment:Yp,transmission_fragment:Kp,transmission_pars_fragment:Zp,uv_pars_fragment:Jp,uv_pars_vertex:Qp,uv_vertex:jp,worldpos_vertex:$p,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distanceRGBA_vert:lm,distanceRGBA_frag:cm,equirect_vert:hm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:vm,meshmatcap_vert:xm,meshmatcap_frag:ym,meshnormal_vert:Mm,meshnormal_frag:_m,meshphong_vert:bm,meshphong_frag:Sm,meshphysical_vert:wm,meshphysical_frag:Em,meshtoon_vert:Am,meshtoon_frag:Tm,points_vert:Rm,points_frag:Cm,shadow_vert:Im,shadow_frag:Pm,sprite_vert:Lm,sprite_frag:Dm},ke={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Dn={basic:{uniforms:Jt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Jt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Qe(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Jt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Jt([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Jt([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Qe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Jt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Jt([ke.points,ke.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Jt([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Jt([ke.common,ke.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Jt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Jt([ke.sprite,ke.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Jt([ke.common,ke.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Jt([ke.lights,ke.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Dn.physical={uniforms:Jt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Yr={r:0,b:0,g:0},Ii=new gn,Um=new pt;function Fm(i,e,t,n,s,r,a){let o=new Qe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function v(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function g(S){let _=!1,M=v(S);M===null?p(o,l):M&&M.isColor&&(p(M,1),_=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,_){let M=v(_);M&&(M.isCubeTexture||M.mapping===wa)?(u===void 0&&(u=new Ze(new ii(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:ys(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ii.copy(_.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Ii)),u.material.toneMapped=dt.getTransfer(M.colorSpace)!==xt,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ze(new jt(2,2),new mt({name:"BackgroundMaterial",uniforms:ys(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,_){S.getRGB(Yr,Kh(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m}}function Nm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,L,q,X,te){let V=!1,C=h(X,q,L);r!==C&&(r=C,c(r.object)),V=f(y,X,q,te),V&&v(y,X,q,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(y,L,q,X),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,L,q){let X=q.wireframe===!0,te=n[y.id];te===void 0&&(te={},n[y.id]=te);let V=te[L.id];V===void 0&&(V={},te[L.id]=V);let C=V[X];return C===void 0&&(C=d(l()),V[X]=C),C}function d(y){let L=[],q=[],X=[];for(let te=0;te<t;te++)L[te]=0,q[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:X,object:y,attributes:{},index:null}}function f(y,L,q,X){let te=r.attributes,V=L.attributes,C=0,G=q.getAttributes();for(let N in G)if(G[N].location>=0){let fe=te[N],we=V[N];if(we===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;C++}return r.attributesNum!==C||r.index!==X}function v(y,L,q,X){let te={},V=L.attributes,C=0,G=q.getAttributes();for(let N in G)if(G[N].location>=0){let fe=V[N];fe===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));let we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),te[N]=we,C++}r.attributes=te,r.attributesNum=C,r.index=X}function g(){let y=r.newAttributes;for(let L=0,q=y.length;L<q;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){let q=r.newAttributes,X=r.enabledAttributes,te=r.attributeDivisors;q[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),te[y]!==L&&(i.vertexAttribDivisor(y,L),te[y]=L)}function S(){let y=r.newAttributes,L=r.enabledAttributes;for(let q=0,X=L.length;q<X;q++)L[q]!==y[q]&&(i.disableVertexAttribArray(q),L[q]=0)}function _(y,L,q,X,te,V,C){C===!0?i.vertexAttribIPointer(y,L,q,te,V):i.vertexAttribPointer(y,L,q,X,te,V)}function M(y,L,q,X){g();let te=X.attributes,V=q.getAttributes(),C=L.defaultAttributeValues;for(let G in V){let N=V[G];if(N.location>=0){let le=te[G];if(le===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){let fe=le.normalized,we=le.itemSize,Le=e.get(le);if(Le===void 0)continue;let ge=Le.buffer,J=Le.type,he=Le.bytesPerElement,Q=J===i.INT||J===i.UNSIGNED_INT||le.gpuType===zl;if(le.isInterleavedBufferAttribute){let Y=le.data,ue=Y.stride,be=le.offset;if(Y.isInstancedInterleavedBuffer){for(let Se=0;Se<N.locationSize;Se++)p(N.location+Se,Y.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<N.locationSize;Se++)m(N.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Se=0;Se<N.locationSize;Se++)_(N.location+Se,we/N.locationSize,J,fe,ue*he,(be+we/N.locationSize*Se)*he,Q)}else{if(le.isInstancedBufferAttribute){for(let Y=0;Y<N.locationSize;Y++)p(N.location+Y,le.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Y=0;Y<N.locationSize;Y++)m(N.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Y=0;Y<N.locationSize;Y++)_(N.location+Y,we/N.locationSize,J,fe,we*he,we/N.locationSize*Y*he,Q)}}else if(C!==void 0){let fe=C[G];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(N.location,fe);break;case 3:i.vertexAttrib3fv(N.location,fe);break;case 4:i.vertexAttrib4fv(N.location,fe);break;default:i.vertexAttrib1fv(N.location,fe)}}}}S()}function B(){U();for(let y in n){let L=n[y];for(let q in L){let X=L[q];for(let te in X)u(X[te].object),delete X[te];delete L[q]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let L=n[y.id];for(let q in L){let X=L[q];for(let te in X)u(X[te].object),delete X[te];delete L[q]}delete n[y.id]}function R(y){for(let L in n){let q=n[L];if(q[y.id]===void 0)continue;let X=q[y.id];for(let te in X)u(X[te].object),delete X[te];delete q[y.id]}}function U(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:B,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Bm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function km(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let U=R===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=v>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:B,maxSamples:w}}function Om(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,_=S*4,M=p.clippingState||null;l.value=M,M=u(v,d,_,f);for(let B=0;B!==_;++B)M[B]=t[B];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,v){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let p=f+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=f;_!==g;++_,M+=4)a.copy(h[_]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function zm(i){let e=new WeakMap;function t(a,o){return o===To?a.mapping=ps:o===Ro&&(a.mapping=ms),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===To||o===Ro)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ol(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _s=class extends Ms{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ls=4,Zc=[.125,.215,.35,.446,.526,.582],Fi=20,ho=new _s,Jc=new Qe,uo=null,fo=0,po=0,mo=!1,Li=(1+Math.sqrt(5))/2,rs=1/Li,Qc=[new H(-Li,rs,0),new H(Li,rs,0),new H(-rs,0,Li),new H(rs,0,Li),new H(0,Li,-rs),new H(0,Li,rs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],bi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:hn,format:wn,colorSpace:Rs,depthBuffer:!1},s=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Vm(r,e,t)}return s}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,n,s){let o=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Jc),u.toneMapping=Bn,u.autoClear=!1;let f=new Ht({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),v=new Ze(new ii,f),g=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Jc),g=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;Kr(s,S*_,p>2?_:0,_,_),u.setRenderTarget(s),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ps||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ho)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qc[(s-r-1)%Qc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ze(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let p=[],S=0;for(let R=0;R<Fi;++R){let U=R/g,b=Math.exp(-U*U/2);p.push(b),R===0?S+=b:R<m&&(S+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-n;let M=this._sizeLods[s],B=3*M*(s>_-ls?s-_+ls:0),w=4*(this._cubeSize-M);Kr(t,B,w,3*M,2*M),l.setRenderTarget(t),l.render(h,ho)}};function Hm(i){let e=[],t=[],n=[],s=i,r=i-ls+1+Zc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ls?l=Zc[a-i+ls-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,g=3,m=2,p=1,S=new Float32Array(g*v*f),_=new Float32Array(m*v*f),M=new Float32Array(p*v*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,U=w>2?0:-1,b=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];S.set(b,g*v*w),_.set(d,m*v*w);let y=[w,w,w,w,w,w];M.set(y,p*v*w)}let B=new At;B.setAttribute("position",new Et(S,g)),B.setAttribute("uv",new Et(_,m)),B.setAttribute("faceIndex",new Et(M,p)),e.push(B),s>ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jc(i,e,t){let n=new zt(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vm(i,e,t){let n=new Float32Array(Fi),s=new H(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function $c(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function eh(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function Gm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===To||l===Ro,u=l===ps||l===ms;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new bi(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new bi(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let v in d)e.update(d[v],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let v in f){let g=f[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,v=h.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let _=0,M=S.length;_<M;_+=3){let B=S[_+0],w=S[_+1],R=S[_+2];d.push(B,w,w,R,R,B)}}else if(v!==void 0){let S=v.array;g=v.version;for(let _=0,M=S.length/3-1;_<M;_+=3){let B=_+0,w=_+1,R=_+2;d.push(B,w,w,R,R,B)}}else return;let m=new(Xh(d)?ha:ca)(d,1);m.version=g;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Xm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,d*a,v),t.update(f,n,v))}function u(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function h(d,f,v,g){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,v);let p=0;for(let S=0;S<v;S++)p+=f[S]*g[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ym(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],_=0;f===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let M=o.attributes.position.count*_,B=1;M>e.maxTextureSize&&(B=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*B*4*h),R=new la(w,M,B,h);R.type=Fn,R.needsUpdate=!0;let U=_*4;for(let y=0;y<h;y++){let L=m[y],q=p[y],X=S[y],te=M*B*4*y;for(let V=0;V<L.count;V++){let C=V*U;f===!0&&(s.fromBufferAttribute(L,V),w[te+C+0]=s.x,w[te+C+1]=s.y,w[te+C+2]=s.z,w[te+C+3]=0),v===!0&&(s.fromBufferAttribute(q,V),w[te+C+4]=s.x,w[te+C+5]=s.y,w[te+C+6]=s.z,w[te+C+7]=0),g===!0&&(s.fromBufferAttribute(X,V),w[te+C+8]=s.x,w[te+C+9]=s.y,w[te+C+10]=s.z,w[te+C+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Ne(M,B)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Zm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var da=class extends Qt{constructor(e,t,n,s,r,a,o,l,c,u=cs){if(u!==cs&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cs&&(n=ki),n===void 0&&u===vs&&(n=gs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jh=new Qt,th=new da(1,1),Qh=new la,jh=new rl,$h=new ua,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),ah=new Float32Array(4);function Ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Aa(i,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Dt(t,n)}}function tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Dt(t,n)}}function ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Dt(t,n)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=Wh,r=th):r=Jh,t.setTexture2D(e||r,s)}function dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jh,s)}function fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$h,s)}function pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qh,s)}function mg(i){switch(i){case 5126:return Jm;case 35664:return Qm;case 35665:return jm;case 35666:return $m;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,e){i.uniform1fv(this.addr,e)}function vg(i,e){let t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function xg(i,e){let t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function yg(i,e){let t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function Mg(i,e){let t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){let t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bg(i,e){let t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sg(i,e){i.uniform1iv(this.addr,e)}function wg(i,e){i.uniform2iv(this.addr,e)}function Eg(i,e){i.uniform3iv(this.addr,e)}function Ag(i,e){i.uniform4iv(this.addr,e)}function Tg(i,e){i.uniform1uiv(this.addr,e)}function Rg(i,e){i.uniform2uiv(this.addr,e)}function Cg(i,e){i.uniform3uiv(this.addr,e)}function Ig(i,e){i.uniform4uiv(this.addr,e)}function Pg(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Jh,r[a])}function Lg(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jh,r[a])}function Dg(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$h,r[a])}function Ug(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qh,r[a])}function Fg(i){switch(i){case 5126:return gg;case 35664:return vg;case 35665:return xg;case 35666:return yg;case 35674:return Mg;case 35675:return _g;case 35676:return bg;case 5124:case 35670:return Sg;case 35667:case 35671:return wg;case 35668:case 35672:return Eg;case 35669:case 35673:return Ag;case 5125:return Tg;case 36294:return Rg;case 36295:return Cg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}var ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}},cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}},hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},go=/(\w+)(\])?(\[|\.)?/g;function oh(i,e){i.seq.push(e),i.map[e.id]=e}function Ng(i,e,t){let n=i.name,s=n.length;for(go.lastIndex=0;;){let r=go.exec(n),a=go.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){oh(t,c===void 0?new ll(o,i,e):new cl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new hl(o),oh(t,h)),t=h}}}var us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ng(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function lh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Bg=37297,kg=0;function Og(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ch=new it;function zg(i){dt._getMatrix(ch,dt.workingColorSpace,i);let e=`mat3( ${ch.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Og(i.getShaderSource(e),a)}else return s}function Hg(i,e){let t=zg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vg(i,e){let t;switch(e){case $u:t="Linear";break;case ed:t="Reinhard";break;case td:t="Cineon";break;case nd:t="ACESFilmic";break;case sd:t="AgX";break;case Ol:t="Neutral";break;case id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zr=new H;function Gg(){dt.getLuminanceCoefficients(Zr);let i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function qg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function uh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Yg,Zg)}var Kg=new Map;function Zg(i,e){let t=at[e];if(t===void 0){let n=Kg.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}var Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(Jg,Qg)}function Qg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function jg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function $g(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ms&&(e="ENVMAP_MODE_REFRACTION"),e}function t0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lh:e="ENVMAP_BLENDING_MULTIPLY";break;case Qu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function n0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function i0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=jg(t),c=$g(t),u=e0(t),h=t0(t),d=n0(t),f=Wg(t),v=qg(r),g=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?at.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Hg("linearToOutputTexel",t.outputColorSpace),Gg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=ul(a),a=uh(a,t),a=dh(a,t),o=ul(o),o=uh(o,t),o=dh(o,t),a=fh(a),o=fh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=S+m+a,M=S+p+o,B=lh(s,s.VERTEX_SHADER,_),w=lh(s,s.FRAGMENT_SHADER,M);s.attachShader(g,B),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(L){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(g).trim(),X=s.getShaderInfoLog(B).trim(),te=s.getShaderInfoLog(w).trim(),V=!0,C=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,B,w);else{let G=hh(s,B,"vertex"),N=hh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+G+`
`+N)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(X===""||te==="")&&(C=!1);C&&(L.diagnostics={runnable:V,programLog:q,vertexShader:{log:X,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(B),s.deleteShader(w),U=new us(s,g),b=Xg(s,g)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Bg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=B,this.fragmentShader=w,this}var s0=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fl(e),t.set(e,n)),n}},fl=class{constructor(e){this.id=s0++,this.code=e,this.usedTimes=0}};function r0(i,e,t,n,s,r,a){let o=new dr,l=new dl,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,q,X){let te=q.fog,V=X.geometry,C=b.isMeshStandardMaterial?q.environment:null,G=(b.isMeshStandardMaterial?t:e).get(b.envMap||C),N=G&&G.mapping===wa?G.image.height:null,le=v[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,we=fe!==void 0?fe.length:0,Le=0;V.morphAttributes.position!==void 0&&(Le=1),V.morphAttributes.normal!==void 0&&(Le=2),V.morphAttributes.color!==void 0&&(Le=3);let ge,J,he,Q;if(le){let Ae=Dn[le];ge=Ae.vertexShader,J=Ae.fragmentShader}else ge=b.vertexShader,J=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),Q=l.getFragmentShaderID(b);let Y=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),be=X.isInstancedMesh===!0,Se=X.isBatchedMesh===!0,Ce=!!b.map,De=!!b.matcap,ee=!!G,I=!!b.aoMap,Re=!!b.lightMap,ae=!!b.bumpMap,re=!!b.normalMap,ne=!!b.displacementMap,ye=!!b.emissiveMap,pe=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,W=b.clearcoat>0,ie=b.dispersion>0,de=b.iridescence>0,ve=b.sheen>0,He=b.transmission>0,Pe=x&&!!b.anisotropyMap,_e=W&&!!b.clearcoatMap,je=W&&!!b.clearcoatNormalMap,Ee=W&&!!b.clearcoatRoughnessMap,Fe=de&&!!b.iridescenceMap,Je=de&&!!b.iridescenceThicknessMap,We=ve&&!!b.sheenColorMap,Ue=ve&&!!b.sheenRoughnessMap,P=!!b.specularMap,k=!!b.specularColorMap,se=!!b.specularIntensityMap,T=He&&!!b.transmissionMap,j=He&&!!b.thicknessMap,z=!!b.gradientMap,O=!!b.alphaMap,xe=b.alphaTest>0,Me=!!b.alphaHash,D=!!b.extensions,$=Bn;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&($=i.toneMapping);let F={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:J,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Se,batchingColor:Se&&X._colorsTexture!==null,instancing:be,instancingColor:be&&X.instanceColor!==null,instancingMorph:be&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Rs,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:De,envMap:ee,envMapMode:ee&&G.mapping,envMapCubeUVHeight:N,aoMap:I,lightMap:Re,bumpMap:ae,normalMap:re,displacementMap:d&&ne,emissiveMap:ye,normalMapObjectSpace:re&&b.normalMapType===ld,normalMapTangentSpace:re&&b.normalMapType===Gh,metalnessMap:pe,roughnessMap:A,anisotropy:x,anisotropyMap:Pe,clearcoat:W,clearcoatMap:_e,clearcoatNormalMap:je,clearcoatRoughnessMap:Ee,dispersion:ie,iridescence:de,iridescenceMap:Fe,iridescenceThicknessMap:Je,sheen:ve,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:P,specularColorMap:k,specularIntensityMap:se,transmission:He,transmissionMap:T,thicknessMap:j,gradientMap:z,opaque:b.transparent===!1&&b.blending===vi&&b.alphaToCoverage===!1,alphaMap:O,alphaTest:xe,alphaHash:Me,combine:b.combine,mapUv:Ce&&g(b.map.channel),aoMapUv:I&&g(b.aoMap.channel),lightMapUv:Re&&g(b.lightMap.channel),bumpMapUv:ae&&g(b.bumpMap.channel),normalMapUv:re&&g(b.normalMap.channel),displacementMapUv:ne&&g(b.displacementMap.channel),emissiveMapUv:ye&&g(b.emissiveMap.channel),metalnessMapUv:pe&&g(b.metalnessMap.channel),roughnessMapUv:A&&g(b.roughnessMap.channel),anisotropyMapUv:Pe&&g(b.anisotropyMap.channel),clearcoatMapUv:_e&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:je&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(b.sheenRoughnessMap.channel),specularMapUv:P&&g(b.specularMap.channel),specularColorMapUv:k&&g(b.specularColorMap.channel),specularIntensityMapUv:se&&g(b.specularIntensityMap.channel),transmissionMapUv:T&&g(b.transmissionMap.channel),thicknessMapUv:j&&g(b.thicknessMap.channel),alphaMapUv:O&&g(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(re||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(Ce||O),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ue,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&dt.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mn,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:D&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(D&&b.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return F.vertexUv1s=c.has(1),F.vertexUv2s=c.has(2),F.vertexUv3s=c.has(3),c.clear(),F}function p(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(y,b),_(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let y=v[b.type],L;if(y){let q=Dn[y];L=Is.clone(q.uniforms)}else L=b.uniforms;return L}function B(b,y){let L;for(let q=0,X=u.length;q<X;q++){let te=u[q];if(te.cacheKey===y){L=te,++L.usedTimes;break}}return L===void 0&&(L=new i0(i,y,b,r),u.push(L)),L}function w(b){if(--b.usedTimes===0){let y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:B,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:U}}function a0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function o0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,v,g,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,v,g,m){let p=a(h,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,v,g,m){let p=a(h,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||o0),n.length>1&&n.sort(d||mh),s.length>1&&s.sort(d||mh)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function l0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new gh,i.set(n,[a])):s>=r.length?(a=new gh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function c0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Qe};break;case"SpotLight":t={position:new H,direction:new H,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function h0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var u0=0;function d0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function f0(i){let e=new c0,t=h0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new pt,a=new pt;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,S=0,_=0,M=0,B=0,w=0,R=0;c.sort(d0);for(let b=0,y=c.length;b<y;b++){let L=c[b],q=L.color,X=L.intensity,te=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=q.r*X,h+=q.g*X,d+=q.b*X;else if(L.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(L.sh.coefficients[C],X);R++}else if(L.isDirectionalLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,N=t.get(L);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=C,f++}else if(L.isSpotLight){let C=e.get(L);C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(q).multiplyScalar(X),C.distance=te,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,n.spot[g]=C;let G=L.shadow;if(L.map&&(n.spotLightMap[B]=L.map,B++,G.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=G.matrix,L.castShadow){let N=t.get(L);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,n.spotShadow[g]=N,n.spotShadowMap[g]=V,M++}g++}else if(L.isRectAreaLight){let C=e.get(L);C.color.copy(q).multiplyScalar(X),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=C,m++}else if(L.isPointLight){let C=e.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){let G=L.shadow,N=t.get(L);N.shadowIntensity=G.intensity,N.shadowBias=G.bias,N.shadowNormalBias=G.normalBias,N.shadowRadius=G.radius,N.shadowMapSize=G.mapSize,N.shadowCameraNear=G.camera.near,N.shadowCameraFar=G.camera.far,n.pointShadow[v]=N,n.pointShadowMap[v]=V,n.pointShadowMatrix[v]=L.shadow.matrix,_++}n.point[v]=C,v++}else if(L.isHemisphereLight){let C=e.get(L);C.skyColor.copy(L.color).multiplyScalar(X),C.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=C,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==v||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==S||U.numPointShadows!==_||U.numSpotShadows!==M||U.numSpotMaps!==B||U.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+B-w,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,U.directionalLength=f,U.pointLength=v,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=S,U.numPointShadows=_,U.numSpotShadows=M,U.numSpotMaps=B,U.numLightProbes=R,n.version=u0++)}function l(c,u){let h=0,d=0,f=0,v=0,g=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let _=c[p];if(_.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(_.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function vh(i){let e=new f0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function p0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vh(i),e.set(s,[o])):r>=a.length?(o=new vh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pl=class extends _i{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends _i{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g0=`uniform sampler2D shadow_pass;
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
}`;function v0(i,e,t){let n=new fr,s=new Ne,r=new Ne,a=new yt,o=new pl({depthPacking:od}),l=new ml,c={},u=t.maxTextureSize,h={[xi]:Bt,[Bt]:xi,[mn]:mn},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:m0,fragmentShader:g0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let v=new At;v.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ze(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let p=this.type;this.render=function(w,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Nn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let X=p!==Jn&&this.type===Jn,te=p===Jn&&this.type!==Jn;for(let V=0,C=w.length;V<C;V++){let G=w[V],N=G.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let le=N.getFrameExtents();if(s.multiply(le),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,N.mapSize.y=r.y)),N.map===null||X===!0||te===!0){let we=this.type!==Jn?{minFilter:ln,magFilter:ln}:{};N.map!==null&&N.map.dispose(),N.map=new zt(s.x,s.y,we),N.map.texture.name=G.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let fe=N.getViewportCount();for(let we=0;we<fe;we++){let Le=N.getViewport(we);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),q.viewport(a),N.updateMatrices(G,we),n=N.getFrustum(),M(R,U,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===Jn&&S(N,U),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,L)};function S(w,R){let U=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zt(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,U,f,g,null)}function _(w,R,U,b){let y=null,L=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let q=y.uuid,X=R.uuid,te=c[q];te===void 0&&(te={},c[q]=te);let V=te[X];V===void 0&&(V=y.clone(),te[X]=V,R.addEventListener("dispose",B)),y=V}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Jn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let q=i.properties.get(y);q.light=U}return y}function M(w,R,U,b,y){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);let X=e.update(w),te=w.material;if(Array.isArray(te)){let V=X.groups;for(let C=0,G=V.length;C<G;C++){let N=V[C],le=te[N.materialIndex];if(le&&le.visible){let fe=_(w,le,b,y);w.onBeforeShadow(i,w,R,U,X,fe,N),i.renderBufferDirect(U,null,X,fe,w,N),w.onAfterShadow(i,w,R,U,X,fe,N)}}}else if(te.visible){let V=_(w,te,b,y);w.onBeforeShadow(i,w,R,U,X,V,null),i.renderBufferDirect(U,null,X,V,w,null),w.onAfterShadow(i,w,R,U,X,V,null)}}let q=w.children;for(let X=0,te=q.length;X<te;X++)M(q[X],R,U,b,y)}function B(w){w.target.removeEventListener("dispose",B);for(let U in c){let b=c[U],y=w.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var x0={[Mo]:_o,[bo]:Eo,[So]:Ao,[fs]:wo,[_o]:Mo,[Eo]:bo,[Ao]:So,[wo]:fs};function y0(i,e){function t(){let T=!1,j=new yt,z=null,O=new yt(0,0,0,0);return{setMask:function(xe){z!==xe&&!T&&(i.colorMask(xe,xe,xe,xe),z=xe)},setLocked:function(xe){T=xe},setClear:function(xe,Me,D,$,F){F===!0&&(xe*=$,Me*=$,D*=$),j.set(xe,Me,D,$),O.equals(j)===!1&&(i.clearColor(xe,Me,D,$),O.copy(j))},reset:function(){T=!1,z=null,O.set(-1,0,0,0)}}}function n(){let T=!1,j=!1,z=null,O=null,xe=null;return{setReversed:function(Me){if(j!==Me){let D=e.get("EXT_clip_control");j?D.clipControlEXT(D.LOWER_LEFT_EXT,D.ZERO_TO_ONE_EXT):D.clipControlEXT(D.LOWER_LEFT_EXT,D.NEGATIVE_ONE_TO_ONE_EXT);let $=xe;xe=null,this.setClear($)}j=Me},getReversed:function(){return j},setTest:function(Me){Me?Y(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(Me){z!==Me&&!T&&(i.depthMask(Me),z=Me)},setFunc:function(Me){if(j&&(Me=x0[Me]),O!==Me){switch(Me){case Mo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=Me}},setLocked:function(Me){T=Me},setClear:function(Me){xe!==Me&&(j&&(Me=1-Me),i.clearDepth(Me),xe=Me)},reset:function(){T=!1,z=null,O=null,xe=null,j=!1}}}function s(){let T=!1,j=null,z=null,O=null,xe=null,Me=null,D=null,$=null,F=null;return{setTest:function(Ae){T||(Ae?Y(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(Ae){j!==Ae&&!T&&(i.stencilMask(Ae),j=Ae)},setFunc:function(Ae,Be,qe){(z!==Ae||O!==Be||xe!==qe)&&(i.stencilFunc(Ae,Be,qe),z=Ae,O=Be,xe=qe)},setOp:function(Ae,Be,qe){(Me!==Ae||D!==Be||$!==qe)&&(i.stencilOp(Ae,Be,qe),Me=Ae,D=Be,$=qe)},setLocked:function(Ae){T=Ae},setClear:function(Ae){F!==Ae&&(i.clearStencil(Ae),F=Ae)},reset:function(){T=!1,j=null,z=null,O=null,xe=null,Me=null,D=null,$=null,F=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,S=null,_=null,M=null,B=null,w=null,R=new Qe(0,0,0),U=0,b=!1,y=null,L=null,q=null,X=null,te=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,G=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(N)[1]),C=G>=1):N.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),C=G>=2);let le=null,fe={},we=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),ge=new yt().fromArray(we),J=new yt().fromArray(Le);function he(T,j,z,O){let xe=new Uint8Array(4),Me=i.createTexture();i.bindTexture(T,Me),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let D=0;D<z;D++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(j+D,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Me}let Q={};Q[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(fs),ae(!1),re(yc),Y(i.CULL_FACE),I(Nn);function Y(T){u[T]!==!0&&(i.enable(T),u[T]=!0)}function ue(T){u[T]!==!1&&(i.disable(T),u[T]=!1)}function be(T,j){return h[T]!==j?(i.bindFramebuffer(T,j),h[T]=j,T===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),T===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Se(T,j){let z=f,O=!1;if(T){z=d.get(j),z===void 0&&(z=[],d.set(j,z));let xe=T.textures;if(z.length!==xe.length||z[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,D=xe.length;Me<D;Me++)z[Me]=i.COLOR_ATTACHMENT0+Me;z.length=xe.length,O=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,O=!0);O&&i.drawBuffers(z)}function Ce(T){return v!==T?(i.useProgram(T),v=T,!0):!1}let De={[Di]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};De[Bu]=i.MIN,De[ku]=i.MAX;let ee={[Ou]:i.ZERO,[kl]:i.ONE,[zu]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Vu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[cr]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Gu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function I(T,j,z,O,xe,Me,D,$,F,Ae){if(T===Nn){g===!0&&(ue(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),T!==Bl){if(T!==m||Ae!==b){if((p!==Di||M!==Di)&&(i.blendEquation(i.FUNC_ADD),p=Di,M=Di),Ae)switch(T){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}S=null,_=null,B=null,w=null,R.set(0,0,0),U=0,m=T,b=Ae}return}xe=xe||j,Me=Me||z,D=D||O,(j!==p||xe!==M)&&(i.blendEquationSeparate(De[j],De[xe]),p=j,M=xe),(z!==S||O!==_||Me!==B||D!==w)&&(i.blendFuncSeparate(ee[z],ee[O],ee[Me],ee[D]),S=z,_=O,B=Me,w=D),($.equals(R)===!1||F!==U)&&(i.blendColor($.r,$.g,$.b,F),R.copy($),U=F),m=T,b=!1}function Re(T,j){T.side===mn?ue(i.CULL_FACE):Y(i.CULL_FACE);let z=T.side===Bt;j&&(z=!z),ae(z),T.blending===vi&&T.transparent===!1?I(Nn):I(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let O=T.stencilWrite;o.setTest(O),O&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ye(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(T){y!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),y=T)}function re(T){T!==Lu?(Y(i.CULL_FACE),T!==L&&(T===yc?i.cullFace(i.BACK):T===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),L=T}function ne(T){T!==q&&(C&&i.lineWidth(T),q=T)}function ye(T,j,z){T?(Y(i.POLYGON_OFFSET_FILL),(X!==j||te!==z)&&(i.polygonOffset(j,z),X=j,te=z)):ue(i.POLYGON_OFFSET_FILL)}function pe(T){T?Y(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function A(T){T===void 0&&(T=i.TEXTURE0+V-1),le!==T&&(i.activeTexture(T),le=T)}function x(T,j,z){z===void 0&&(le===null?z=i.TEXTURE0+V-1:z=le);let O=fe[z];O===void 0&&(O={type:void 0,texture:void 0},fe[z]=O),(O.type!==T||O.texture!==j)&&(le!==z&&(i.activeTexture(z),le=z),i.bindTexture(T,j||Q[T]),O.type=T,O.texture=j)}function W(){let T=fe[le];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function He(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function We(T){ge.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),ge.copy(T))}function Ue(T){J.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),J.copy(T))}function P(T,j){let z=c.get(j);z===void 0&&(z=new WeakMap,c.set(j,z));let O=z.get(T);O===void 0&&(O=i.getUniformBlockIndex(j,T.name),z.set(T,O))}function k(T,j){let O=c.get(j).get(T);l.get(j)!==O&&(i.uniformBlockBinding(j,O,T.__bindingPointIndex),l.set(j,O))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,fe={},h={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,S=null,_=null,M=null,B=null,w=null,R=new Qe(0,0,0),U=0,b=!1,y=null,L=null,q=null,X=null,te=null,ge.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:ue,bindFramebuffer:be,drawBuffers:Se,useProgram:Ce,setBlending:I,setMaterial:Re,setFlipSided:ae,setCullFace:re,setLineWidth:ne,setPolygonOffset:ye,setScissorTest:pe,activeTexture:A,bindTexture:x,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:de,texImage2D:Fe,texImage3D:Je,updateUBOMapping:P,uniformBlockBinding:k,texStorage2D:je,texStorage3D:Ee,texSubImage2D:ve,texSubImage3D:He,compressedTexSubImage2D:Pe,compressedTexSubImage3D:_e,scissor:We,viewport:Ue,reset:se}}function xh(i,e,t,n){let s=M0(n);switch(t){case Bh:return i*e;case Oh:return i*e;case zh:return i*e*2;case Gl:return i*e/s.components*s.byteLength;case Wl:return i*e/s.components*s.byteLength;case Hh:return i*e*2/s.components*s.byteLength;case ql:return i*e*2/s.components*s.byteLength;case kh:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case Xl:return i*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(e,8)/4;case Io:case Lo:return Math.max(i,8)*Math.max(e,8)/2;case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sa:case Qo:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vh:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M0(i){switch(i){case ti:case Uh:return{byteLength:1,components:1};case hr:case Fh:case hn:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case ki:case zl:case Fn:return{byteLength:4,components:1};case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return f?new OffscreenCanvas(A,x):ur("canvas")}function g(A,x,W){let ie=1,de=pe(A);if((de.width>W||de.height>W)&&(ie=W/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ve=Math.floor(ie*de.width),He=Math.floor(ie*de.height);h===void 0&&(h=v(ve,He));let Pe=x?v(ve,He):h;return Pe.width=ve,Pe.height=He,Pe.getContext("2d").drawImage(A,0,0,ve,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ve+"x"+He+")."),Pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,x,W,ie,de=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ve=x;if(x===i.RED&&(W===i.FLOAT&&(ve=i.R32F),W===i.HALF_FLOAT&&(ve=i.R16F),W===i.UNSIGNED_BYTE&&(ve=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ve=i.R8UI),W===i.UNSIGNED_SHORT&&(ve=i.R16UI),W===i.UNSIGNED_INT&&(ve=i.R32UI),W===i.BYTE&&(ve=i.R8I),W===i.SHORT&&(ve=i.R16I),W===i.INT&&(ve=i.R32I)),x===i.RG&&(W===i.FLOAT&&(ve=i.RG32F),W===i.HALF_FLOAT&&(ve=i.RG16F),W===i.UNSIGNED_BYTE&&(ve=i.RG8)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ve=i.RG8UI),W===i.UNSIGNED_SHORT&&(ve=i.RG16UI),W===i.UNSIGNED_INT&&(ve=i.RG32UI),W===i.BYTE&&(ve=i.RG8I),W===i.SHORT&&(ve=i.RG16I),W===i.INT&&(ve=i.RG32I)),x===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ve=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ve=i.RGB16UI),W===i.UNSIGNED_INT&&(ve=i.RGB32UI),W===i.BYTE&&(ve=i.RGB8I),W===i.SHORT&&(ve=i.RGB16I),W===i.INT&&(ve=i.RGB32I)),x===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ve=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ve=i.RGBA16UI),W===i.UNSIGNED_INT&&(ve=i.RGBA32UI),W===i.BYTE&&(ve=i.RGBA8I),W===i.SHORT&&(ve=i.RGBA16I),W===i.INT&&(ve=i.RGBA32I)),x===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ve=i.RGB9_E5),x===i.RGBA){let He=de?Ea:dt.getTransfer(ie);W===i.FLOAT&&(ve=i.RGBA32F),W===i.HALF_FLOAT&&(ve=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ve=He===xt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function M(A,x){let W;return A?x===null||x===ki||x===gs?W=i.DEPTH24_STENCIL8:x===Fn?W=i.DEPTH32F_STENCIL8:x===hr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===gs?W=i.DEPTH_COMPONENT24:x===Fn?W=i.DEPTH_COMPONENT32F:x===hr&&(W=i.DEPTH_COMPONENT16),W}function B(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==Un?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){let x=A.target;x.removeEventListener("dispose",w),U(x),x.isVideoTexture&&u.delete(x)}function R(A){let x=A.target;x.removeEventListener("dispose",R),y(x)}function U(A){let x=n.get(A);if(x.__webglInit===void 0)return;let W=A.source,ie=d.get(W);if(ie){let de=ie[x.__cacheKey];de.usedTimes--,de.usedTimes===0&&b(A),Object.keys(ie).length===0&&d.delete(W)}n.remove(A)}function b(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let W=A.source,ie=d.get(W);delete ie[x.__cacheKey],a.memory.textures--}function y(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(x.__webglFramebuffer[ie]))for(let de=0;de<x.__webglFramebuffer[ie].length;de++)i.deleteFramebuffer(x.__webglFramebuffer[ie][de]);else i.deleteFramebuffer(x.__webglFramebuffer[ie]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ie])}else{if(Array.isArray(x.__webglFramebuffer))for(let ie=0;ie<x.__webglFramebuffer.length;ie++)i.deleteFramebuffer(x.__webglFramebuffer[ie]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ie=0;ie<x.__webglColorRenderbuffer.length;ie++)x.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ie]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let W=A.textures;for(let ie=0,de=W.length;ie<de;ie++){let ve=n.get(W[ie]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(W[ie])}n.remove(A)}let L=0;function q(){L=0}function X(){let A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function te(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function V(A,x){let W=n.get(A);if(A.isVideoTexture&&ne(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let ie=A.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,A,x);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function C(A,x){let W=n.get(A);if(A.version>0&&W.__version!==A.version){J(W,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function G(A,x){let W=n.get(A);if(A.version>0&&W.__version!==A.version){J(W,A,x);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function N(A,x){let W=n.get(A);if(A.version>0&&W.__version!==A.version){he(W,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}let le={[Bi]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},fe={[ln]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},we={[cd]:i.NEVER,[md]:i.ALWAYS,[hd]:i.LESS,[Wh]:i.LEQUAL,[ud]:i.EQUAL,[pd]:i.GEQUAL,[dd]:i.GREATER,[fd]:i.NOTEQUAL};function Le(A,x){if(x.type===Fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Un||x.magFilter===Va||x.magFilter===Cr||x.magFilter===jn||x.minFilter===Un||x.minFilter===Va||x.minFilter===Cr||x.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,le[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,le[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,le[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==Cr&&x.minFilter!==jn||x.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ge(A,x){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));let ie=x.source,de=d.get(ie);de===void 0&&(de={},d.set(ie,de));let ve=te(x);if(ve!==A.__cacheKey){de[ve]===void 0&&(de[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),de[ve].usedTimes++;let He=de[A.__cacheKey];He!==void 0&&(de[A.__cacheKey].usedTimes--,He.usedTimes===0&&b(x)),A.__cacheKey=ve,A.__webglTexture=de[ve].texture}return W}function J(A,x,W){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);let de=ge(A,x),ve=x.source;t.bindTexture(ie,A.__webglTexture,i.TEXTURE0+W);let He=n.get(ve);if(ve.version!==He.__version||de===!0){t.activeTexture(i.TEXTURE0+W);let Pe=dt.getPrimaries(dt.workingColorSpace),_e=x.colorSpace===on?null:dt.getPrimaries(x.colorSpace),je=x.colorSpace===on||Pe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Ee=g(x.image,!1,s.maxTextureSize);Ee=ye(x,Ee);let Fe=r.convert(x.format,x.colorSpace),Je=r.convert(x.type),We=_(x.internalFormat,Fe,Je,x.colorSpace,x.isVideoTexture);Le(ie,x);let Ue,P=x.mipmaps,k=x.isVideoTexture!==!0,se=He.__version===void 0||de===!0,T=ve.dataReady,j=B(x,Ee);if(x.isDepthTexture)We=M(x.format===vs,x.type),se&&(k?t.texStorage2D(i.TEXTURE_2D,1,We,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,We,Ee.width,Ee.height,0,Fe,Je,null));else if(x.isDataTexture)if(P.length>0){k&&se&&t.texStorage2D(i.TEXTURE_2D,j,We,P[0].width,P[0].height);for(let z=0,O=P.length;z<O;z++)Ue=P[z],k?T&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Ue.width,Ue.height,Fe,Je,Ue.data):t.texImage2D(i.TEXTURE_2D,z,We,Ue.width,Ue.height,0,Fe,Je,Ue.data);x.generateMipmaps=!1}else k?(se&&t.texStorage2D(i.TEXTURE_2D,j,We,Ee.width,Ee.height),T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Fe,Je,Ee.data)):t.texImage2D(i.TEXTURE_2D,0,We,Ee.width,Ee.height,0,Fe,Je,Ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){k&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,We,P[0].width,P[0].height,Ee.depth);for(let z=0,O=P.length;z<O;z++)if(Ue=P[z],x.format!==wn)if(Fe!==null)if(k){if(T)if(x.layerUpdates.size>0){let xe=xh(Ue.width,Ue.height,x.format,x.type);for(let Me of x.layerUpdates){let D=Ue.data.subarray(Me*xe/Ue.data.BYTES_PER_ELEMENT,(Me+1)*xe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,Me,Ue.width,Ue.height,1,Fe,D)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Ue.width,Ue.height,Ee.depth,Fe,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,We,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?T&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Ue.width,Ue.height,Ee.depth,Fe,Je,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,We,Ue.width,Ue.height,Ee.depth,0,Fe,Je,Ue.data)}else{k&&se&&t.texStorage2D(i.TEXTURE_2D,j,We,P[0].width,P[0].height);for(let z=0,O=P.length;z<O;z++)Ue=P[z],x.format!==wn?Fe!==null?k?T&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,z,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?T&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Ue.width,Ue.height,Fe,Je,Ue.data):t.texImage2D(i.TEXTURE_2D,z,We,Ue.width,Ue.height,0,Fe,Je,Ue.data)}else if(x.isDataArrayTexture)if(k){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,We,Ee.width,Ee.height,Ee.depth),T)if(x.layerUpdates.size>0){let z=xh(Ee.width,Ee.height,x.format,x.type);for(let O of x.layerUpdates){let xe=Ee.data.subarray(O*z/Ee.data.BYTES_PER_ELEMENT,(O+1)*z/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,O,Ee.width,Ee.height,1,Fe,Je,xe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,Je,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,Ee.width,Ee.height,Ee.depth,0,Fe,Je,Ee.data);else if(x.isData3DTexture)k?(se&&t.texStorage3D(i.TEXTURE_3D,j,We,Ee.width,Ee.height,Ee.depth),T&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Fe,Je,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,We,Ee.width,Ee.height,Ee.depth,0,Fe,Je,Ee.data);else if(x.isFramebufferTexture){if(se)if(k)t.texStorage2D(i.TEXTURE_2D,j,We,Ee.width,Ee.height);else{let z=Ee.width,O=Ee.height;for(let xe=0;xe<j;xe++)t.texImage2D(i.TEXTURE_2D,xe,We,z,O,0,Fe,Je,null),z>>=1,O>>=1}}else if(P.length>0){if(k&&se){let z=pe(P[0]);t.texStorage2D(i.TEXTURE_2D,j,We,z.width,z.height)}for(let z=0,O=P.length;z<O;z++)Ue=P[z],k?T&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,Fe,Je,Ue):t.texImage2D(i.TEXTURE_2D,z,We,Fe,Je,Ue);x.generateMipmaps=!1}else if(k){if(se){let z=pe(Ee);t.texStorage2D(i.TEXTURE_2D,j,We,z.width,z.height)}T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Je,Ee)}else t.texImage2D(i.TEXTURE_2D,0,We,Fe,Je,Ee);m(x)&&p(ie),He.__version=ve.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function he(A,x,W){if(x.image.length!==6)return;let ie=ge(A,x),de=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let ve=n.get(de);if(de.version!==ve.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);let He=dt.getPrimaries(dt.workingColorSpace),Pe=x.colorSpace===on?null:dt.getPrimaries(x.colorSpace),_e=x.colorSpace===on||He===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let je=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,Fe=[];for(let O=0;O<6;O++)!je&&!Ee?Fe[O]=g(x.image[O],!0,s.maxCubemapSize):Fe[O]=Ee?x.image[O].image:x.image[O],Fe[O]=ye(x,Fe[O]);let Je=Fe[0],We=r.convert(x.format,x.colorSpace),Ue=r.convert(x.type),P=_(x.internalFormat,We,Ue,x.colorSpace),k=x.isVideoTexture!==!0,se=ve.__version===void 0||ie===!0,T=de.dataReady,j=B(x,Je);Le(i.TEXTURE_CUBE_MAP,x);let z;if(je){k&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,j,P,Je.width,Je.height);for(let O=0;O<6;O++){z=Fe[O].mipmaps;for(let xe=0;xe<z.length;xe++){let Me=z[xe];x.format!==wn?We!==null?k?T&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe,0,0,Me.width,Me.height,We,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe,P,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe,0,0,Me.width,Me.height,We,Ue,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe,P,Me.width,Me.height,0,We,Ue,Me.data)}}}else{if(z=x.mipmaps,k&&se){z.length>0&&j++;let O=pe(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,j,P,O.width,O.height)}for(let O=0;O<6;O++)if(Ee){k?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Fe[O].width,Fe[O].height,We,Ue,Fe[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,P,Fe[O].width,Fe[O].height,0,We,Ue,Fe[O].data);for(let xe=0;xe<z.length;xe++){let D=z[xe].image[O].image;k?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe+1,0,0,D.width,D.height,We,Ue,D.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe+1,P,D.width,D.height,0,We,Ue,D.data)}}else{k?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,We,Ue,Fe[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,P,We,Ue,Fe[O]);for(let xe=0;xe<z.length;xe++){let Me=z[xe];k?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe+1,0,0,We,Ue,Me.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe+1,P,We,Ue,Me.image[O])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),ve.__version=de.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Q(A,x,W,ie,de,ve){let He=r.convert(W.format,W.colorSpace),Pe=r.convert(W.type),_e=_(W.internalFormat,He,Pe,W.colorSpace),je=n.get(x),Ee=n.get(W);if(Ee.__renderTarget=x,!je.__hasExternalTextures){let Fe=Math.max(1,x.width>>ve),Je=Math.max(1,x.height>>ve);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ve,_e,Fe,Je,x.depth,0,He,Pe,null):t.texImage2D(de,ve,_e,Fe,Je,0,He,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,de,Ee.__webglTexture,0,ae(x)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,de,Ee.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(A,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let ie=x.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,ve=M(x.stencilBuffer,de),He=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=ae(x);re(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ve,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ve,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,A)}else{let ie=x.textures;for(let de=0;de<ie.length;de++){let ve=ie[de],He=r.convert(ve.format,ve.colorSpace),Pe=r.convert(ve.type),_e=_(ve.internalFormat,He,Pe,ve.colorSpace),je=ae(x);W&&re(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,_e,x.width,x.height):re(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,_e,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_e,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(x.depthTexture);ie.__renderTarget=x,(!ie.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let de=ie.__webglTexture,ve=ae(x);if(x.depthTexture.format===cs)re(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(x.depthTexture.format===vs)re(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function be(A){let x=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let ie=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){let de=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),x.__depthDisposeCallback=de}x.__boundDepthTexture=ie}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ue(x.__webglFramebuffer,A)}else if(W){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=i.createRenderbuffer(),Y(x.__webglDepthbuffer[ie],A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=x.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ve)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Y(x.__webglDepthbuffer,A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(A,x,W){let ie=n.get(A);x!==void 0&&Q(ie.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&be(A)}function Ce(A){let x=A.texture,W=n.get(A),ie=n.get(x);A.addEventListener("dispose",R);let de=A.textures,ve=A.isWebGLCubeRenderTarget===!0,He=de.length>1;if(He||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,a.memory.textures++),ve){W.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[Pe]=[];for(let _e=0;_e<x.mipmaps.length;_e++)W.__webglFramebuffer[Pe][_e]=i.createFramebuffer()}else W.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)W.__webglFramebuffer[Pe]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(He)for(let Pe=0,_e=de.length;Pe<_e;Pe++){let je=n.get(de[Pe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&re(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Pe=0;Pe<de.length;Pe++){let _e=de[Pe];W.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Pe]);let je=r.convert(_e.format,_e.colorSpace),Ee=r.convert(_e.type),Fe=_(_e.internalFormat,je,Ee,_e.colorSpace,A.isXRRenderTarget===!0),Je=ae(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,W.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Le(i.TEXTURE_CUBE_MAP,x);for(let Pe=0;Pe<6;Pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)Q(W.__webglFramebuffer[Pe][_e],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,_e);else Q(W.__webglFramebuffer[Pe],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Pe=0,_e=de.length;Pe<_e;Pe++){let je=de[Pe],Ee=n.get(je);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),Le(i.TEXTURE_2D,je),Q(W.__webglFramebuffer,A,je,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),m(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ie.__webglTexture),Le(Pe,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)Q(W.__webglFramebuffer[_e],A,x,i.COLOR_ATTACHMENT0,Pe,_e);else Q(W.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Pe,0);m(x)&&p(Pe),t.unbindTexture()}A.depthBuffer&&be(A)}function De(A){let x=A.textures;for(let W=0,ie=x.length;W<ie;W++){let de=x[W];if(m(de)){let ve=S(A),He=n.get(de).__webglTexture;t.bindTexture(ve,He),p(ve),t.unbindTexture()}}}let ee=[],I=[];function Re(A){if(A.samples>0){if(re(A)===!1){let x=A.textures,W=A.width,ie=A.height,de=i.COLOR_BUFFER_BIT,ve=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(A),Pe=x.length>1;if(Pe)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[_e]);let je=n.get(x[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,de,i.NEAREST),l===!0&&(ee.length=0,I.length=0,ee.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ee.push(ve),I.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,He.__webglColorRenderbuffer[_e]);let je=n.get(x[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ae(A){return Math.min(s.maxSamples,A.samples)}function re(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ye(A,x){let W=A.colorSpace,ie=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Rs&&W!==on&&(dt.getTransfer(W)===xt?(ie!==wn||de!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=C,this.setTexture3D=G,this.setTextureCube=N,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=re}function b0(i,e){function t(n,s=on){let r,a=dt.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return i.BYTE;if(n===Fh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===kh)return i.RGB;if(n===wn)return i.RGBA;if(n===Oh)return i.LUMINANCE;if(n===zh)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===Hh)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Po||n===Lo||n===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===Fo||n===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===Fo)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===ko||n===Oo||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===qo||n===Xo||n===Yo||n===Ko||n===Zo||n===Jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===Qo||n===jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===$o||n===el||n===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var gl=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Yt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},S0={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mt({vertexShader:w0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xl=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null,g=new vl,m=t.getContextAttributes(),p=null,S=null,_=[],M=[],B=new Ne,w=null,R=new Tt;R.viewport=new yt;let U=new Tt;U.viewport=new yt;let b=[R,U],y=new gl,L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=_[J];return he===void 0&&(he=new lr,_[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=_[J];return he===void 0&&(he=new lr,_[J]=he),he.getGripSpace()},this.getHand=function(J){let he=_[J];return he===void 0&&(he=new lr,_[J]=he),he.getHandSpace()};function X(J){let he=M.indexOf(J.inputSource);if(he===-1)return;let Q=_[he];Q!==void 0&&(Q.update(J.inputSource,J.frame,c||a),Q.dispatchEvent({type:J.type,data:J.inputSource}))}function te(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",V);for(let J=0;J<_.length;J++){let he=M[J];he!==null&&(M[J]=null,_[J].disconnect(he))}L=null,q=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,S=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",te),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(B),s.renderState.layers===void 0){let he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new zt(f.framebufferWidth,f.framebufferHeight,{format:wn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Q=null,Y=null;m.depth&&(Y=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?vs:cs,Q=m.stencil?gs:ki);let ue={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new zt(d.textureWidth,d.textureHeight,{format:wn,type:ti,depthTexture:new da(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(J){for(let he=0;he<J.removed.length;he++){let Q=J.removed[he],Y=M.indexOf(Q);Y>=0&&(M[Y]=null,_[Y].disconnect(Q))}for(let he=0;he<J.added.length;he++){let Q=J.added[he],Y=M.indexOf(Q);if(Y===-1){for(let be=0;be<_.length;be++)if(be>=M.length){M.push(Q),Y=be;break}else if(M[be]===null){M[be]=Q,Y=be;break}if(Y===-1)break}let ue=_[Y];ue&&ue.connect(Q)}}let C=new H,G=new H;function N(J,he,Q){C.setFromMatrixPosition(he.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);let Y=C.distanceTo(G),ue=he.projectionMatrix.elements,be=Q.projectionMatrix.elements,Se=ue[14]/(ue[10]-1),Ce=ue[14]/(ue[10]+1),De=(ue[9]+1)/ue[5],ee=(ue[9]-1)/ue[5],I=(ue[8]-1)/ue[0],Re=(be[8]+1)/be[0],ae=Se*I,re=Se*Re,ne=Y/(-I+Re),ye=ne*-I;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ye),J.translateZ(ne),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ue[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let pe=Se+ne,A=Ce+ne,x=ae-ye,W=re+(Y-ye),ie=De*Ce/A*pe,de=ee*Ce/A*pe;J.projectionMatrix.makePerspective(x,W,ie,de,pe,A),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let he=J.near,Q=J.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),y.near=U.near=R.near=he,y.far=U.far=R.far=Q,(L!==y.near||q!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,q=y.far),R.layers.mask=J.layers.mask|2,U.layers.mask=J.layers.mask|4,y.layers.mask=R.layers.mask|U.layers.mask;let Y=J.parent,ue=y.cameras;le(y,Y);for(let be=0;be<ue.length;be++)le(ue[be],Y);ue.length===2?N(y,R,U):y.projectionMatrix.copy(R.projectionMatrix),fe(J,y,Y)};function fe(J,he,Q){Q===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let we=null;function Le(J,he){if(u=he.getViewerPose(c||a),v=he,u!==null){let Q=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Y=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,Y=!0);for(let be=0;be<Q.length;be++){let Se=Q[be],Ce=null;if(f!==null)Ce=f.getViewport(Se);else{let ee=h.getViewSubImage(d,Se);Ce=ee.viewport,be===0&&(e.setRenderTargetTextures(S,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(S))}let De=b[be];De===void 0&&(De=new Tt,De.layers.enable(be),De.viewport=new yt,b[be]=De),De.matrix.fromArray(Se.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Se.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),be===0&&(y.matrix.copy(De.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Y===!0&&y.cameras.push(De)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")){let be=h.getDepthInformation(Q[0]);be&&be.isValid&&be.texture&&g.init(e,be,s.renderState)}}for(let Q=0;Q<_.length;Q++){let Y=M[Q],ue=_[Q];Y!==null&&ue!==void 0&&ue.update(Y,he,c||a)}we&&we(J,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),v=null}let ge=new Zh;ge.setAnimationLoop(Le),this.setAnimationLoop=function(J){we=J},this.dispose=function(){}}},Pi=new gn,A0=new pt;function T0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),_=S.envMap,M=S.envMapRotation;_&&(m.envMap.value=_,Pi.copy(M),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Pi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let M=_.program;n.uniformBlockBinding(S,M)}function c(S,_){let M=s[S.id];M===void 0&&(v(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",m));let B=_.program;n.updateUBOMapping(S,B);let w=e.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function u(S){let _=h();S.__bindingPointIndex=_;let M=i.createBuffer(),B=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,B,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let _=s[S.id],M=S.uniforms,B=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,R=M.length;w<R;w++){let U=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,y=U.length;b<y;b++){let L=U[b];if(f(L,w,b,B)===!0){let q=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],te=0;for(let V=0;V<X.length;V++){let C=X[V],G=g(C);typeof C=="number"||typeof C=="boolean"?(L.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,q+te,L.__data)):C.isMatrix3?(L.__data[0]=C.elements[0],L.__data[1]=C.elements[1],L.__data[2]=C.elements[2],L.__data[3]=0,L.__data[4]=C.elements[3],L.__data[5]=C.elements[4],L.__data[6]=C.elements[5],L.__data[7]=0,L.__data[8]=C.elements[6],L.__data[9]=C.elements[7],L.__data[10]=C.elements[8],L.__data[11]=0):(C.toArray(L.__data,te),te+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,_,M,B){let w=S.value,R=_+"_"+M;if(B[R]===void 0)return typeof w=="number"||typeof w=="boolean"?B[R]=w:B[R]=w.clone(),!0;{let U=B[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return B[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function v(S){let _=S.uniforms,M=0,B=16;for(let R=0,U=_.length;R<U;R++){let b=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,L=b.length;y<L;y++){let q=b[y],X=Array.isArray(q.value)?q.value:[q.value];for(let te=0,V=X.length;te<V;te++){let C=X[te],G=g(C),N=M%B,le=N%G.boundary,fe=N+le;M+=le,fe!==0&&B-fe<G.storage&&(M+=B-fe),q.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=G.storage}}}let w=M%B;return w>0&&(M+=B-w),S.__size=M,S.__cache={},this}function g(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var On=class{constructor(e={}){let{canvas:t=Ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=Bn,this.toneMappingExposure=1;let M=this,B=!1,w=0,R=0,U=null,b=-1,y=null,L=new yt,q=new yt,X=null,te=new Qe(0),V=0,C=t.width,G=t.height,N=1,le=null,fe=null,we=new yt(0,0,C,G),Le=new yt(0,0,C,G),ge=!1,J=new fr,he=!1,Q=!1,Y=new pt,ue=new pt,be=new H,Se=new yt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function ee(){return U===null?N:1}let I=n;function Re(E,K){return t.getContext(E,K)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",O,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),I===null){let K="webgl2";if(I=Re(K,E),I===null)throw Re(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ae,re,ne,ye,pe,A,x,W,ie,de,ve,He,Pe,_e,je,Ee,Fe,Je,We,Ue,P,k,se,T;function j(){ae=new Wm(I),ae.init(),k=new b0(I,ae),re=new km(I,ae,e,k),ne=new y0(I,ae),re.reverseDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),ye=new Ym(I),pe=new a0,A=new _0(I,ae,ne,pe,re,k,ye),x=new zm(M),W=new Gm(M),ie=new $d(I),se=new Nm(I,ie),de=new qm(I,ie,ye,se),ve=new Zm(I,de,ie,ye),We=new Km(I,re,A),Ee=new Om(pe),He=new r0(M,x,W,ae,re,se,Ee),Pe=new T0(M,pe),_e=new l0,je=new p0(ae),Je=new Fm(M,x,W,ne,ve,f,l),Fe=new v0(M,ve,re),T=new R0(I,ye,re,ne),Ue=new Bm(I,ae,ye),P=new Xm(I,ae,ye),ye.programs=He.programs,M.capabilities=re,M.extensions=ae,M.properties=pe,M.renderLists=_e,M.shadowMap=Fe,M.state=ne,M.info=ye}j();let z=new xl(M,I);this.xr=z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(C,G,!1))},this.getSize=function(E){return E.set(C,G)},this.setSize=function(E,K,oe=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,G=K,t.width=Math.floor(E*N),t.height=Math.floor(K*N),oe===!0&&(t.style.width=E+"px",t.style.height=K+"px"),this.setViewport(0,0,E,K)},this.getDrawingBufferSize=function(E){return E.set(C*N,G*N).floor()},this.setDrawingBufferSize=function(E,K,oe){C=E,G=K,N=oe,t.width=Math.floor(E*oe),t.height=Math.floor(K*oe),this.setViewport(0,0,E,K)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,K,oe,ce){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,K,oe,ce),ne.viewport(L.copy(we).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,K,oe,ce){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,K,oe,ce),ne.scissor(q.copy(Le).multiplyScalar(N).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){ne.setScissorTest(ge=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(E=!0,K=!0,oe=!0){let ce=0;if(E){let Z=!1;if(U!==null){let Ie=U.texture.format;Z=Ie===Xl||Ie===ql||Ie===Wl}if(Z){let Ie=U.texture.type,Oe=Ie===ti||Ie===ki||Ie===hr||Ie===gs||Ie===Hl||Ie===Vl,me=Je.getClearColor(),Te=Je.getClearAlpha(),Ve=me.r,Ye=me.g,Xe=me.b;Oe?(v[0]=Ve,v[1]=Ye,v[2]=Xe,v[3]=Te,I.clearBufferuiv(I.COLOR,0,v)):(g[0]=Ve,g[1]=Ye,g[2]=Xe,g[3]=Te,I.clearBufferiv(I.COLOR,0,g))}else ce|=I.COLOR_BUFFER_BIT}K&&(ce|=I.DEPTH_BUFFER_BIT),oe&&(ce|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",O,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),_e.dispose(),je.dispose(),pe.dispose(),x.dispose(),W.dispose(),ve.dispose(),se.dispose(),T.dispose(),He.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ke),z.removeEventListener("sessionend",et),tt.stop()};function O(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let E=ye.autoReset,K=Fe.enabled,oe=Fe.autoUpdate,ce=Fe.needsUpdate,Z=Fe.type;j(),ye.autoReset=E,Fe.enabled=K,Fe.autoUpdate=oe,Fe.needsUpdate=ce,Fe.type=Z}function Me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function D(E){let K=E.target;K.removeEventListener("dispose",D),$(K)}function $(E){F(E),pe.remove(E)}function F(E){let K=pe.get(E).programs;K!==void 0&&(K.forEach(function(oe){He.releaseProgram(oe)}),E.isShaderMaterial&&He.releaseShaderCache(E))}this.renderBufferDirect=function(E,K,oe,ce,Z,Ie){K===null&&(K=Ce);let Oe=Z.isMesh&&Z.matrixWorld.determinant()<0,me=nn(E,K,oe,ce,Z);ne.setMaterial(ce,Oe);let Te=oe.index,Ve=1;if(ce.wireframe===!0){if(Te=de.getWireframeAttribute(oe),Te===void 0)return;Ve=2}let Ye=oe.drawRange,Xe=oe.attributes.position,st=Ye.start*Ve,ct=(Ye.start+Ye.count)*Ve;Ie!==null&&(st=Math.max(st,Ie.start*Ve),ct=Math.min(ct,(Ie.start+Ie.count)*Ve)),Te!==null?(st=Math.max(st,0),ct=Math.min(ct,Te.count)):Xe!=null&&(st=Math.max(st,0),ct=Math.min(ct,Xe.count));let rt=ct-st;if(rt<0||rt===1/0)return;se.setup(Z,ce,me,oe,Te);let Mt,nt=Ue;if(Te!==null&&(Mt=ie.get(Te),nt=P,nt.setIndex(Mt)),Z.isMesh)ce.wireframe===!0?(ne.setLineWidth(ce.wireframeLinewidth*ee()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(Z.isLine){let Ge=ce.linewidth;Ge===void 0&&(Ge=1),ne.setLineWidth(Ge*ee()),Z.isLineSegments?nt.setMode(I.LINES):Z.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else Z.isPoints?nt.setMode(I.POINTS):Z.isSprite&&nt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)nt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))nt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ge=Z._multiDrawStarts,dn=Z._multiDrawCounts,ht=Z._multiDrawCount,sn=Te?ie.get(Te).bytesPerElement:1,vn=pe.get(ce).currentProgram.getUniforms();for(let Wt=0;Wt<ht;Wt++)vn.setValue(I,"_gl_DrawID",Wt),nt.render(Ge[Wt]/sn,dn[Wt])}else if(Z.isInstancedMesh)nt.renderInstances(st,rt,Z.count);else if(oe.isInstancedBufferGeometry){let Ge=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,dn=Math.min(oe.instanceCount,Ge);nt.renderInstances(st,rt,dn)}else nt.render(st,rt)};function Ae(E,K,oe){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,Kt(E,K,oe),E.side=xi,E.needsUpdate=!0,Kt(E,K,oe),E.side=mn):Kt(E,K,oe)}this.compile=function(E,K,oe=null){oe===null&&(oe=E),p=je.get(oe),p.init(K),_.push(p),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),E!==oe&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();let ce=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ie=Z.material;if(Ie)if(Array.isArray(Ie))for(let Oe=0;Oe<Ie.length;Oe++){let me=Ie[Oe];Ae(me,oe,Z),ce.add(me)}else Ae(Ie,oe,Z),ce.add(Ie)}),_.pop(),p=null,ce},this.compileAsync=function(E,K,oe=null){let ce=this.compile(E,K,oe);return new Promise(Z=>{function Ie(){if(ce.forEach(function(Oe){pe.get(Oe).currentProgram.isReady()&&ce.delete(Oe)}),ce.size===0){Z(E);return}setTimeout(Ie,10)}ae.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Be=null;function qe(E){Be&&Be(E)}function Ke(){tt.stop()}function et(){tt.start()}let tt=new Zh;tt.setAnimationLoop(qe),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(E){Be=E,z.setAnimationLoop(E),E===null?tt.stop():tt.start()},z.addEventListener("sessionstart",Ke),z.addEventListener("sessionend",et),this.render=function(E,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(K),K=z.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,K,U),p=je.get(E,_.length),p.init(K),_.push(p),ue.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),J.setFromProjectionMatrix(ue),Q=this.localClippingEnabled,he=Ee.init(this.clippingPlanes,Q),m=_e.get(E,S.length),m.init(),S.push(m),z.enabled===!0&&z.isPresenting===!0){let Ie=M.xr.getDepthSensingMesh();Ie!==null&&Rt(Ie,K,-1/0,M.sortObjects)}Rt(E,K,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(le,fe),De=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,De&&Je.addToRenderList(m,E),this.info.render.frame++,he===!0&&Ee.beginShadows();let oe=p.state.shadowsArray;Fe.render(oe,E,K),he===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,Z=m.transmissive;if(p.setupLights(),K.isArrayCamera){let Ie=K.cameras;if(Z.length>0)for(let Oe=0,me=Ie.length;Oe<me;Oe++){let Te=Ie[Oe];lt(ce,Z,E,Te)}De&&Je.render(E);for(let Oe=0,me=Ie.length;Oe<me;Oe++){let Te=Ie[Oe];wt(m,E,Te,Te.viewport)}}else Z.length>0&&lt(ce,Z,E,K),De&&Je.render(E),wt(m,E,K);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(M,E,K),se.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],he===!0&&Ee.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Rt(E,K,oe,ce){if(E.visible===!1)return;if(E.layers.test(K.layers)){if(E.isGroup)oe=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(K);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){ce&&Se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);let Oe=ve.update(E),me=E.material;me.visible&&m.push(E,Oe,me,oe,Se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let Oe=ve.update(E),me=E.material;if(ce&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Se.copy(E.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Se.copy(Oe.boundingSphere.center)),Se.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(me)){let Te=Oe.groups;for(let Ve=0,Ye=Te.length;Ve<Ye;Ve++){let Xe=Te[Ve],st=me[Xe.materialIndex];st&&st.visible&&m.push(E,Oe,st,oe,Se.z,Xe)}}else me.visible&&m.push(E,Oe,me,oe,Se.z,null)}}let Ie=E.children;for(let Oe=0,me=Ie.length;Oe<me;Oe++)Rt(Ie[Oe],K,oe,ce)}function wt(E,K,oe,ce){let Z=E.opaque,Ie=E.transmissive,Oe=E.transparent;p.setupLightsView(oe),he===!0&&Ee.setGlobalState(M.clippingPlanes,oe),ce&&ne.viewport(L.copy(ce)),Z.length>0&&$e(Z,K,oe),Ie.length>0&&$e(Ie,K,oe),Oe.length>0&&$e(Oe,K,oe),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function lt(E,K,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new zt(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?hn:ti,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let Ie=p.state.transmissionRenderTarget[ce.id],Oe=ce.viewport||L;Ie.setSize(Oe.z,Oe.w);let me=M.getRenderTarget();M.setRenderTarget(Ie),M.getClearColor(te),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),De&&Je.render(oe);let Te=M.toneMapping;M.toneMapping=Bn;let Ve=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),he===!0&&Ee.setGlobalState(M.clippingPlanes,ce),$e(E,oe,ce),A.updateMultisampleRenderTarget(Ie),A.updateRenderTargetMipmap(Ie),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Xe=0,st=K.length;Xe<st;Xe++){let ct=K[Xe],rt=ct.object,Mt=ct.geometry,nt=ct.material,Ge=ct.group;if(nt.side===mn&&rt.layers.test(ce.layers)){let dn=nt.side;nt.side=Bt,nt.needsUpdate=!0,en(rt,oe,ce,Mt,nt,Ge),nt.side=dn,nt.needsUpdate=!0,Ye=!0}}Ye===!0&&(A.updateMultisampleRenderTarget(Ie),A.updateRenderTargetMipmap(Ie))}M.setRenderTarget(me),M.setClearColor(te,V),Ve!==void 0&&(ce.viewport=Ve),M.toneMapping=Te}function $e(E,K,oe){let ce=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Ie=E.length;Z<Ie;Z++){let Oe=E[Z],me=Oe.object,Te=Oe.geometry,Ve=ce===null?Oe.material:ce,Ye=Oe.group;me.layers.test(oe.layers)&&en(me,K,oe,Te,Ve,Ye)}}function en(E,K,oe,ce,Z,Ie){E.onBeforeRender(M,K,oe,ce,Z,Ie),E.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(M,K,oe,ce,E,Ie),Z.transparent===!0&&Z.side===mn&&Z.forceSinglePass===!1?(Z.side=Bt,Z.needsUpdate=!0,M.renderBufferDirect(oe,K,ce,Z,E,Ie),Z.side=xi,Z.needsUpdate=!0,M.renderBufferDirect(oe,K,ce,Z,E,Ie),Z.side=mn):M.renderBufferDirect(oe,K,ce,Z,E,Ie),E.onAfterRender(M,K,oe,ce,Z,Ie)}function Kt(E,K,oe){K.isScene!==!0&&(K=Ce);let ce=pe.get(E),Z=p.state.lights,Ie=p.state.shadowsArray,Oe=Z.state.version,me=He.getParameters(E,Z.state,Ie,K,oe),Te=He.getProgramCacheKey(me),Ve=ce.programs;ce.environment=E.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(E.isMeshStandardMaterial?W:x).get(E.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&E.envMap===null?K.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",D),Ve=new Map,ce.programs=Ve);let Ye=Ve.get(Te);if(Ye!==void 0){if(ce.currentProgram===Ye&&ce.lightsStateVersion===Oe)return Ut(E,me),Ye}else me.uniforms=He.getUniforms(E),E.onBeforeCompile(me,M),Ye=He.acquireProgram(me,Te),Ve.set(Te,Ye),ce.uniforms=me.uniforms;let Xe=ce.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),Ut(E,me),ce.needsLights=Gs(E),ce.lightsStateVersion=Oe,ce.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ce.currentProgram=Ye,ce.uniformsList=null,Ye}function Ot(E){if(E.uniformsList===null){let K=E.currentProgram.getUniforms();E.uniformsList=us.seqWithValue(K.seq,E.uniforms)}return E.uniformsList}function Ut(E,K){let oe=pe.get(E);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function nn(E,K,oe,ce,Z){K.isScene!==!0&&(K=Ce),A.resetTextureUnits();let Ie=K.fog,Oe=ce.isMeshStandardMaterial?K.environment:null,me=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Rs,Te=(ce.isMeshStandardMaterial?W:x).get(ce.envMap||Oe),Ve=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ye=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Xe=!!oe.morphAttributes.position,st=!!oe.morphAttributes.normal,ct=!!oe.morphAttributes.color,rt=Bn;ce.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(rt=M.toneMapping);let Mt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,nt=Mt!==void 0?Mt.length:0,Ge=pe.get(ce),dn=p.state.lights;if(he===!0&&(Q===!0||E!==y)){let ze=E===y&&ce.id===b;Ee.setState(ce,E,ze)}let ht=!1;ce.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==dn.state.version||Ge.outputColorSpace!==me||Z.isBatchedMesh&&Ge.batching===!1||!Z.isBatchedMesh&&Ge.batching===!0||Z.isBatchedMesh&&Ge.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ge.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ge.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ge.instancingMorph===!1&&Z.morphTexture!==null||Ge.envMap!==Te||ce.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ee.numPlanes||Ge.numIntersection!==Ee.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==Ye||Ge.morphTargets!==Xe||Ge.morphNormals!==st||Ge.morphColors!==ct||Ge.toneMapping!==rt||Ge.morphTargetsCount!==nt)&&(ht=!0):(ht=!0,Ge.__version=ce.version);let sn=Ge.currentProgram;ht===!0&&(sn=Kt(ce,K,Z));let vn=!1,Wt=!1,li=!1,gt=sn.getUniforms(),ut=Ge.uniforms;if(ne.useProgram(sn.program)&&(vn=!0,Wt=!0,li=!0),ce.id!==b&&(b=ce.id,Wt=!0),vn||y!==E){ne.buffers.depth.getReversed()?(Y.copy(E.projectionMatrix),Ud(Y),Fd(Y),gt.setValue(I,"projectionMatrix",Y)):gt.setValue(I,"projectionMatrix",E.projectionMatrix),gt.setValue(I,"viewMatrix",E.matrixWorldInverse);let vt=gt.map.cameraPosition;vt!==void 0&&vt.setValue(I,be.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&gt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Wt=!0,li=!0)}if(Z.isSkinnedMesh){gt.setOptional(I,Z,"bindMatrix"),gt.setOptional(I,Z,"bindMatrixInverse");let ze=Z.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),gt.setValue(I,"boneTexture",ze.boneTexture,A))}Z.isBatchedMesh&&(gt.setOptional(I,Z,"batchingTexture"),gt.setValue(I,"batchingTexture",Z._matricesTexture,A),gt.setOptional(I,Z,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",Z._indirectTexture,A),gt.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",Z._colorsTexture,A));let _t=oe.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&We.update(Z,oe,sn),(Wt||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,gt.setValue(I,"receiveShadow",Z.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(ut.envMap.value=Te,ut.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&K.environment!==null&&(ut.envMapIntensity.value=K.environmentIntensity),Wt&&(gt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ge.needsLights&&oi(ut,li),Ie&&ce.fog===!0&&Pe.refreshFogUniforms(ut,Ie),Pe.refreshMaterialUniforms(ut,ce,N,G,p.state.transmissionRenderTarget[E.id]),us.upload(I,Ot(Ge),ut,A)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(us.upload(I,Ot(Ge),ut,A),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&gt.setValue(I,"center",Z.center),gt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),gt.setValue(I,"normalMatrix",Z.normalMatrix),gt.setValue(I,"modelMatrix",Z.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let ze=ce.uniformsGroups;for(let vt=0,bt=ze.length;vt<bt;vt++){let ci=ze[vt];T.update(ci,sn),T.bind(ci,sn)}}return sn}function oi(E,K){E.ambientLightColor.needsUpdate=K,E.lightProbe.needsUpdate=K,E.directionalLights.needsUpdate=K,E.directionalLightShadows.needsUpdate=K,E.pointLights.needsUpdate=K,E.pointLightShadows.needsUpdate=K,E.spotLights.needsUpdate=K,E.spotLightShadows.needsUpdate=K,E.rectAreaLights.needsUpdate=K,E.hemisphereLights.needsUpdate=K}function Gs(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,K,oe){pe.get(E.texture).__webglTexture=K,pe.get(E.depthTexture).__webglTexture=oe;let ce=pe.get(E);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,K){let oe=pe.get(E);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(E,K=0,oe=0){U=E,w=K,R=oe;let ce=!0,Z=null,Ie=!1,Oe=!1;if(E){let Te=pe.get(E);if(Te.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(I.FRAMEBUFFER,null),ce=!1;else if(Te.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Te.__hasExternalTextures)A.rebindTextures(E,pe.get(E.texture).__webglTexture,pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Xe=E.depthTexture;if(Te.__boundDepthTexture!==Xe){if(Xe!==null&&pe.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Oe=!0);let Ye=pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[K])?Z=Ye[K][oe]:Z=Ye[K],Ie=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?Z=pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?Z=Ye[oe]:Z=Ye,L.copy(E.viewport),q.copy(E.scissor),X=E.scissorTest}else L.copy(we).multiplyScalar(N).floor(),q.copy(Le).multiplyScalar(N).floor(),X=ge;if(ne.bindFramebuffer(I.FRAMEBUFFER,Z)&&ce&&ne.drawBuffers(E,Z),ne.viewport(L),ne.scissor(q),ne.setScissorTest(X),Ie){let Te=pe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+K,Te.__webglTexture,oe)}else if(Oe){let Te=pe.get(E.texture),Ve=K||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,oe||0,Ve)}b=-1},this.readRenderTargetPixels=function(E,K,oe,ce,Z,Ie,Oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(me=me[Oe]),me){ne.bindFramebuffer(I.FRAMEBUFFER,me);try{let Te=E.texture,Ve=Te.format,Ye=Te.type;if(!re.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=E.width-ce&&oe>=0&&oe<=E.height-Z&&I.readPixels(K,oe,ce,Z,k.convert(Ve),k.convert(Ye),Ie)}finally{let Te=U!==null?pe.get(U).__webglFramebuffer:null;ne.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,K,oe,ce,Z,Ie,Oe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(me=me[Oe]),me){let Te=E.texture,Ve=Te.format,Ye=Te.type;if(!re.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=E.width-ce&&oe>=0&&oe<=E.height-Z){ne.bindFramebuffer(I.FRAMEBUFFER,me);let Xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.bufferData(I.PIXEL_PACK_BUFFER,Ie.byteLength,I.STREAM_READ),I.readPixels(K,oe,ce,Z,k.convert(Ve),k.convert(Ye),0);let st=U!==null?pe.get(U).__webglFramebuffer:null;ne.bindFramebuffer(I.FRAMEBUFFER,st);let ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Dd(I,ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ie),I.deleteBuffer(Xe),I.deleteSync(ct),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,K=null,oe=0){E.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1]);let ce=Math.pow(2,-oe),Z=Math.floor(E.image.width*ce),Ie=Math.floor(E.image.height*ce),Oe=K!==null?K.x:0,me=K!==null?K.y:0;A.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,oe,0,0,Oe,me,Z,Ie),ne.unbindTexture()},this.copyTextureToTexture=function(E,K,oe=null,ce=null,Z=0){E.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,E=arguments[1],K=arguments[2],Z=arguments[3]||0,oe=null);let Ie,Oe,me,Te,Ve,Ye,Xe,st,ct,rt=E.isCompressedTexture?E.mipmaps[Z]:E.image;oe!==null?(Ie=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,me=oe.isBox3?oe.max.z-oe.min.z:1,Te=oe.min.x,Ve=oe.min.y,Ye=oe.isBox3?oe.min.z:0):(Ie=rt.width,Oe=rt.height,me=rt.depth||1,Te=0,Ve=0,Ye=0),ce!==null?(Xe=ce.x,st=ce.y,ct=ce.z):(Xe=0,st=0,ct=0);let Mt=k.convert(K.format),nt=k.convert(K.type),Ge;K.isData3DTexture?(A.setTexture3D(K,0),Ge=I.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(A.setTexture2DArray(K,0),Ge=I.TEXTURE_2D_ARRAY):(A.setTexture2D(K,0),Ge=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);let dn=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=I.getParameter(I.UNPACK_SKIP_PIXELS),vn=I.getParameter(I.UNPACK_SKIP_ROWS),Wt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ye);let li=E.isDataArrayTexture||E.isData3DTexture,gt=K.isDataArrayTexture||K.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let ut=pe.get(E),_t=pe.get(K),ze=pe.get(ut.__renderTarget),vt=pe.get(_t.__renderTarget);ne.bindFramebuffer(I.READ_FRAMEBUFFER,ze.__webglFramebuffer),ne.bindFramebuffer(I.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let bt=0;bt<me;bt++)li&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.get(E).__webglTexture,Z,Ye+bt),E.isDepthTexture?(gt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.get(K).__webglTexture,Z,ct+bt),I.blitFramebuffer(Te,Ve,Ie,Oe,Xe,st,Ie,Oe,I.DEPTH_BUFFER_BIT,I.NEAREST)):gt?I.copyTexSubImage3D(Ge,Z,Xe,st,ct+bt,Te,Ve,Ie,Oe):I.copyTexSubImage2D(Ge,Z,Xe,st,ct+bt,Te,Ve,Ie,Oe);ne.bindFramebuffer(I.READ_FRAMEBUFFER,null),ne.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ge,Z,Xe,st,ct,Ie,Oe,me,Mt,nt,rt.data):K.isCompressedArrayTexture?I.compressedTexSubImage3D(Ge,Z,Xe,st,ct,Ie,Oe,me,Mt,rt.data):I.texSubImage3D(Ge,Z,Xe,st,ct,Ie,Oe,me,Mt,nt,rt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Z,Xe,st,Ie,Oe,Mt,nt,rt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Z,Xe,st,rt.width,rt.height,Mt,rt.data):I.texSubImage2D(I.TEXTURE_2D,Z,Xe,st,Ie,Oe,Mt,nt,rt);I.pixelStorei(I.UNPACK_ROW_LENGTH,dn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,vn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt),Z===0&&K.generateMipmaps&&I.generateMipmap(Ge),ne.unbindTexture()},this.copyTextureToTexture3D=function(E,K,oe=null,ce=null,Z=0){return E.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ce=arguments[1]||null,E=arguments[2],K=arguments[3],Z=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,K,oe,ce,Z)},this.initRenderTarget=function(E){pe.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ne.unbindTexture()},this.resetState=function(){w=0,R=0,U=null,ne.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var cn=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var yl=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ln,u=ln,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},as=new pt,yh=new pt,Jr=[],Mh=new ni,C0=new pt,tr=new Ze,nr=new kn,fa=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,C0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Mh.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),nr.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),yh.multiplyMatrices(n,as),tr.matrixWorld=yh,tr.raycast(e,Jr);for(let a=0,o=Jr.length;a<o;a++){let l=Jr[a];l.instanceId=r,l.object=this,t.push(l)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yl(new Float32Array(s*this.count),s,this.count,Gl,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ml=class extends _i{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_h=new pt,_l=new Oi,Qr=new kn,jr=new H,bs=class extends kt{constructor(e=new At,t=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;_h.copy(s).invert(),_l.copy(e.ray).applyMatrix4(_h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=d,g=f;v<g;v++){let m=c.getX(v);jr.fromBufferAttribute(h,m),bh(jr,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let v=d,g=f;v<g;v++)jr.fromBufferAttribute(h,v),bh(jr,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bh(i,e,t,n,s,r,a){let o=_l.distanceSqToPoint(i);if(o<t){let l=new H;_l.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var si=class extends Qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ne:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new H,s=[],r=[],a=[],o=new H,l=new pt;for(let f=0;f<=e;f++){let v=f/e;s[f]=this.getTangentAt(v,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Sh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}var pa=class extends bl{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Sh(o,l.x,c.x,u.x,h.x),Sh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}};var Ss=class i extends At{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new H,d=new Ne,f=new H,v=new H,g=new H,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(v)}for(let S=0;S<=t;S++){let _=n+S*u*s,M=Math.sin(_),B=Math.cos(_);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*M,h.y=e[w].y,h.z=e[w].x*B,a.push(h.x,h.y,h.z),d.x=S/t,d.y=w/(e.length-1),o.push(d.x,d.y);let R=l[3*w+0]*M,U=l[3*w+1],b=l[3*w+0]*B;c.push(R,U,b)}}for(let S=0;S<t;S++)for(let _=0;_<e.length-1;_++){let M=_+S*e.length,B=M,w=M+e.length,R=M+e.length+1,U=M+1;r.push(B,w,U),r.push(R,U,w)}this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("uv",new ft(o,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ma=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new H,u=new Ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ws=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],v=0,g=[],m=n/2,p=0;S(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function S(){let M=new H,B=new H,w=0,R=(t-e)/n;for(let U=0;U<=r;U++){let b=[],y=U/r,L=y*(t-e)+e;for(let q=0;q<=s;q++){let X=q/s,te=X*l+o,V=Math.sin(te),C=Math.cos(te);B.x=L*V,B.y=-y*n+m,B.z=L*C,h.push(B.x,B.y,B.z),M.set(V,R,C).normalize(),d.push(M.x,M.y,M.z),f.push(X,1-y),b.push(v++)}g.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let y=g[b][U],L=g[b+1][U],q=g[b+1][U+1],X=g[b][U+1];(e>0||b!==0)&&(u.push(y,L,X),w+=3),(t>0||b!==r-1)&&(u.push(L,q,X),w+=3)}c.addGroup(p,w,0),p+=w}function _(M){let B=v,w=new Ne,R=new H,U=0,b=M===!0?e:t,y=M===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),v++;let L=v;for(let q=0;q<=s;q++){let te=q/s*l+o,V=Math.cos(te),C=Math.sin(te);R.x=b*C,R.y=m*y,R.z=b*V,h.push(R.x,R.y,R.z),d.push(0,y,0),w.x=V*.5+.5,w.y=C*.5*y+.5,f.push(w.x,w.y),v++}for(let q=0;q<s;q++){let X=B+q,te=L+q;M===!0?u.push(te,te+1,X):u.push(te+1,te,X),U+=3}c.addGroup(p,U,M===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ga=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new H,v=new Ne;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,u.push(v.x,v.y)}h+=d}for(let g=0;g<s;g++){let m=g*(n+1);for(let p=0;p<n;p++){let S=p+m,_=S,M=S+n+1,B=S+n+2,w=S+1;o.push(_,M,w),o.push(M,B,w)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zi=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new H,d=new H,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){let S=[],_=p/n,M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let B=0;B<=t;B++){let w=B/t;h.x=-e*Math.cos(s+w*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+w*r)*Math.sin(a+_*o),v.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(w+M,1-_),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let _=u[p][S+1],M=u[p][S],B=u[p+1][S],w=u[p+1][S+1];(p!==0||a>0)&&f.push(_,M,w),(p!==n-1||l<Math.PI)&&f.push(M,B,w)}this.setIndex(f),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(g,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var va=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new H,h=new H,d=new H;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){let g=v/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){let g=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,p=(s+1)*(f-1)+v,S=(s+1)*f+v;a.push(g,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var En=class extends _i{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},An=class extends En{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function $r(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function I0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends Es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,o=2*t-n;break;case wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:a=e,l=2*n-t;break;case wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(s-t),g=v*v,m=g*v,p=-d*m+2*d*g-d*v,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,_=(-1-f)*m+(1.5+f)*g+.5*v,M=f*m-f*g;for(let B=0;B!==o;++B)r[B]=p*a[u+B]+S*a[c+B]+_*a[l+B]+M*a[h+B];return r}},wl=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},El=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$r(t,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$r(e.times,Array),values:$r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case nl:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&I0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let v=0;v!==n;++v){let g=t[h+v];if(g!==t[d+v]||g!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=nl;var Hi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=ra;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Tn{};Al.prototype.ValueTypeName="color";var Tl=class extends Tn{};Tl.prototype.ValueTypeName="number";var Rl=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Mi.slerpFlat(r,0,a,c-o,a,c,l);return r}},xa=class extends Tn{InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ra;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Tn{};Cl.prototype.ValueTypeName="vector";var wh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Il=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],v=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}},P0=new Il,pr=class{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pl=class extends pr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=wh.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ur("img");function l(){u(),wh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ya=class extends pr{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,a=new Pl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},As=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ma=class extends As{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vo=new pt,Eh=new H,Ah=new H,mr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ll=class extends mr{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_a=class extends As{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ll}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Th=new pt,ir=new H,xo=new H,Dl=class extends mr{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),xo.copy(n.position),xo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xo),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}},ba=class extends As{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ul=class extends mr{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Sa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Rh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Rh(){return performance.now()}var Zl="\\[\\]\\.:\\/",L0=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",D0="[^"+Zl.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",Jl),F0=/(WCOD+)?/.source.replace("WCOD",D0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),k0=new RegExp("^"+U0+F0+N0+B0+"$"),O0=["material","materials","bones","map"],Fl=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){let t=k0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);O0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Fl;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nv=new Float32Array(1);var Ch=new pt,Ts=class{constructor(e,t,n=0,s=1/0){this.ray=new Oi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ch.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(e,t=!0,n=[]){return Nl(e,this,n,t),n.sort(Ih),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,n,t);return n.sort(Ih),n}};function Ih(i,e){return i.distance-e.distance}function Nl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Nl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},z0=new _s(-1,1,1,-1,0,1),Ql=class extends At{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},H0=new Ql,Ls=class{constructor(e){this._mesh=new Ze(H0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,z0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ds=class extends Cn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Is.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ls(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gr=class extends Cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ca=class extends Cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ia=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ds(Ra),this.copyPass.material.blending=Nn,this.clock=new Sa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gr!==void 0&&(a instanceof gr?n=!0:a instanceof Ca&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pa=class extends Cn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var eu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Us=class i extends Cn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,a,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new zt(r,a,{type:hn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new zt(r,a,{type:hn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=eu;this.highPassUniforms=Is.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ra;this.copyUniforms=Is.clone(u.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ds,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Qe,this.oldClearAlpha=1,this.basic=new Ht,this.fsQuad=new Ls(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Us.BlurDirectionX=new Ne(1,0);Us.BlurDirectionY=new Ne(0,1);var V0="#80a097",G0="#89a99f",W0="#dde8e3",q0="#7b5ea7",X0="#ffffff";async function tu(i,e,t){let s=(await(await fetch(i)).text()).replace("<svg ",`<svg width="${e}" height="${t}" preserveAspectRatio="xMidYMid meet" `),r=new Blob([s],{type:"image/svg+xml"}),a=URL.createObjectURL(r),o=new Image;return o.decoding="async",o.src=a,await o.decode(),o}function nu(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}async function iu(i,e=3072,t=1500){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d"),r=e/2,a=e/3;s.fillStyle=V0,s.fillRect(0,0,e,t);let o=[r,t*.905],l=a*.744,c=[r-l,t*.4],u=[r+l,t*.44],h=o[0]-c[0],d=o[1]-c[1],f=Math.hypot(h,d),v=h/f,g=d/f,m=g,p=-v,S=(C,G)=>[C[0]-v*G,C[1]-g*G];s.fillStyle=G0,s.beginPath(),s.moveTo(...S(c,a)),s.lineTo(...o),s.lineTo(u[0]+(u[0]-o[0])*1.5,u[1]+(u[1]-o[1])*1.5),s.lineTo(e,t),s.lineTo(0,t),s.closePath(),s.fill(),s.strokeStyle="rgba(255,255,255,0.10)",s.lineWidth=3,s.beginPath(),s.moveTo(...o),s.lineTo(u[0]+(u[0]-o[0])*1.5,u[1]+(u[1]-o[1])*1.5),s.stroke();let _=a*.105,M=S(c,a*1.2),B=[o[0]+v*a*.02,o[1]+g*a*.02],w=(C,G)=>[C[0]-m*G,C[1]-p*G];s.fillStyle=W0,s.beginPath(),s.moveTo(...M),s.lineTo(...B),s.lineTo(...w(B,_)),s.lineTo(...w(M,_)),s.closePath(),s.fill(),s.save(),s.beginPath(),s.moveTo(...w(M,_)),s.lineTo(...w(B,_)),s.lineTo(B[0],t+10),s.lineTo(0,t+10),s.lineTo(0,M[1]),s.closePath(),s.clip(),s.strokeStyle="rgba(255,255,255,0.3)",s.lineWidth=2.4;for(let C=1;C<30;C++){let G=_+22+C*15;s.globalAlpha=Math.max(0,1-C/30),s.beginPath(),s.moveTo(...w(S(M,a*.4),G)),s.lineTo(...w([B[0]+v*a*.6,B[1]+g*a*.6],G)),s.stroke()}s.restore(),s.globalAlpha=1,s.strokeStyle=q0,s.lineWidth=8,s.lineCap="butt",s.beginPath(),s.moveTo(...w(M,_+9)),s.lineTo(...w([o[0]-v*a*.05,o[1]-g*a*.05],_+9)),s.stroke();let[R,U]=await Promise.all([tu(i("logo-mark-white.svg"),600,600),tu(i("logo-wordmark-white.svg"),1071,302)]);try{await Promise.all([document.fonts.load("700 60px Philosopher"),document.fonts.load("400 60px Philosopher"),document.fonts.load('500 40px "Roboto Flex"')])}catch{}let b=a*.33;s.drawImage(R,r-b/2,t*.085,b,b);let y=a*.7,L=y*302/1071;s.drawImage(U,r-y/2+y*.025,t*.29,y,L),s.fillStyle=X0,s.textAlign="center",s.textBaseline="alphabetic";let q=(C,G,N)=>{s.font=G(100);let le=s.measureText(C).width;return G(Math.round(100*N/le))};"letterSpacing"in s&&(s.letterSpacing="0px"),s.font=q("CBD SKIN CARE",C=>`500 ${C}px "Roboto Flex", Arial, sans-serif`,a*.42),s.fillText("CBD SKIN CARE",r,t*.525),s.font=q("CBD SKIN OIL",C=>`700 ${C}px Philosopher, Georgia, serif`,a*.5),s.fillText("CBD SKIN OIL",r,t*.605),s.font=q("1000 mg",C=>`700 ${C}px Philosopher, Georgia, serif`,a*.19),s.fillText("1000 mg",r,t*.66),s.textAlign="right";let X=r+a*.4;s.font=`400 ${Math.round(a*.04)}px "Roboto Flex", Arial, sans-serif`,s.fillText("For all skin types",X,t*.83),s.font=`500 ${Math.round(a*.042)}px "Roboto Flex", Arial, sans-serif`,s.fillText("Contains natural &",X,t*.868),s.fillText("organic ingredients",X,t*.903),s.font=`400 ${Math.round(a*.03)}px "Roboto Flex", Arial, sans-serif`,s.fillText("30 ml/1 oz \u212E",X,t*.94),s.fillStyle="rgba(255,255,255,0.55)";let te=nu(7);for(let C of[e*.06,e*.8])for(let G=0;G<22;G++){let N=a*(.32+te()*.22);s.fillRect(C,t*.22+G*t*.026,N,t*.008)}let V=nu(11);s.globalCompositeOperation="soft-light";for(let C=0;C<9e3;C++){let G=V()*e,N=V()*t,le=V()*.08;s.fillStyle=V()>.5?`rgba(255,255,255,${le})`:`rgba(0,0,0,${le})`,s.fillRect(G,N,1+V()*3,1+V()*1.5)}return s.globalCompositeOperation="source-over",n}function su(i){let t=Math.round(1024*i.height/i.width),n=document.createElement("canvas");n.width=1024,n.height=t;let s=n.getContext("2d");s.drawImage(i,0,0,1024,t);let r=s.getImageData(0,0,1024,t),a=r.data;for(let o=0;o<a.length;o+=4){let l=(a[o]+a[o+1]+a[o+2])/3,u=205-Math.max(0,(l-200)/55)*95;a[o]=a[o+1]=a[o+2]=u}return s.putImageData(r,0,0),n}var ot=i=>new Qe(i),Bs=Math.PI*2,ks=(i,e,t)=>Math.min(t,Math.max(e,i)),Os=(i,e,t)=>{let n=ks((t-i)/(e-i),0,1);return n*n*(3-2*n)},Y0=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,un=1.35,Fs=0,La=.57,vr=new H(-.5,7.3,.75),It=5.9;function Ns(i,e=96,t=0){let n=i.map(([r,a])=>new Ne(r,a));t&&(n=new pa(n).getSpacedPoints(t));let s=new Ss(n,e);return s.computeVertexNormals(),s}function K0(i,e,t,n,s=360){let r=new ws(i,i,e,s,6,!0),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getZ(o),u=a.getY(o),h=Math.atan2(l,c),d=Math.pow(Math.abs(Math.cos(h*t*.5)),.6),f=Os(e/2,e/2-.08,Math.abs(u)),g=(i-n+n*d*f+n*(1-f)*.5)/Math.hypot(l,c);a.setX(o,l*g),a.setZ(o,c*g)}return r.computeVertexNormals(),r}function Z0(i,e,t=40,n=120,s=3){let r=[],a=[],o=c=>i*(1+.07*Math.sin(2*c+s)+.045*Math.sin(3*c+1.7*s)+.025*Math.sin(5*c+.3));r.push(0,e,0);for(let c=1;c<=t;c++){let u=c/t;for(let h=0;h<n;h++){let d=h/n*Bs,f=o(d)*u,v=e*Math.sqrt(Math.max(0,1-Math.pow(u,14)));r.push(Math.sin(d)*f,v,Math.cos(d)*f)}}for(let c=0;c<n;c++)a.push(0,1+c,1+(c+1)%n);for(let c=1;c<t;c++){let u=1+(c-1)*n,h=1+c*n;for(let d=0;d<n;d++){let f=(d+1)%n;a.push(u+d,h+d,h+f,u+d,h+f,u+f)}}let l=new At;return l.setAttribute("position",new ft(r,3)),l.setIndex(a),l.computeVertexNormals(),l}function xr(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new si(t);return r.colorSpace=on,r}function J0(i){let e=new cn,t=new Ze(new ii(60,30,60),new Ht({color:ot("#28403b").multiplyScalar(.55),side:Bt}));t.position.y=10,e.add(t);let n=new Ze(new jt(60,60),new Ht({color:ot("#28403b").multiplyScalar(.35)}));n.rotation.x=-Math.PI/2,n.position.y=-2,e.add(n);let s=(o,l,c,u,h)=>{let d=new Ze(new jt(o,l),new Ht({color:ot(u).multiplyScalar(h),side:mn}));return d.position.set(...c),d.lookAt(0,4,0),e.add(d),d};s(11,8,[-15,13,12],"#fff0dc",7),s(2.6,18,[-17,7,-9],"#fff7ee",4.2),s(2.2,18,[16,7,-5],"#eef3ee",3),s(18,18,[0,24,2],"#f6efe4",.7),s(14,5,[6,3,18],"#ddbfa3",.55),s(6,4.5,[-7,4.4,-22],"#f6e2c4",1.9),s(2.5,4.5,[5,4.4,-22],"#f3ece2",1.5);let r=new bi(i),a=r.fromScene(e,.03).texture;return r.dispose(),e.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a}var Q0=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.99999, 1.0); }`,j0=`
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
  }`,$0=`
  attribute vec3 iColor; attribute float iSoft; attribute float iAlpha;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN;
  void main(){
    mat4 m = modelMatrix * instanceMatrix;
    vec4 wp = m * vec4(position, 1.0);
    vN = normalize(mat3(m) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    vVN = normalize(normalMatrix * mat3(instanceMatrix) * normal);
    vColor = iColor; vSoft = iSoft; vAlpha = iAlpha;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,ev=`
  precision highp float;
  uniform vec3 uKey; uniform vec3 uRim; uniform float uFade;
  varying vec3 vN; varying vec3 vV; varying vec3 vColor; varying float vSoft; varying float vAlpha; varying vec3 vVN;
  void main(){
    vec3 n = normalize(vN), v = normalize(vV), nv = normalize(vVN);
    float ndv = clamp(dot(n, v), 0.0, 1.0);
    float fres = pow(1.0 - ndv, 2.6);
    float edge = smoothstep(0.0, 0.05 + vSoft * 0.6, ndv);            // depth-of-field softness at the silhouette
    // glass/oil sphere: key highlight top-left, focused light (caustic crescent) inside, lower-right
    vec3 L = normalize(vec3(-0.62, 0.66, 0.42));
    float sp = pow(max(dot(n, normalize(L + v)), 0.0), mix(220.0, 40.0, vSoft));
    vec2 Ld = normalize(vec2(-0.62, 0.72));
    float caust = smoothstep(0.15, 0.95, dot(nv.xy, -Ld)) * smoothstep(0.02, 0.5, ndv);
    vec3 body = vColor * (0.32 + 0.55 * fres) + vColor * caust * 0.85 + uRim * fres * 0.08;
    float a = (0.16 + 0.42 * fres + caust * 0.28) * edge;
    vec3 col = body + uKey * sp * 1.5 * (1.0 - vSoft * 0.7);
    a += sp * 0.8 * (1.0 - vSoft * 0.6);
    a *= vAlpha * uFade;
    gl_FragColor = vec4(col * a, a);                                   // premultiplied
  }`,tv={uniforms:{tDiffuse:{value:null},uRes:{value:new Ne(1,1)},uTime:{value:0},uVig:{value:.32},uVigCenter:{value:new Ne(.62,.52)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};async function ru({canvas:i,host:e,asset:t,reduced:n,onFrame:s,onFirstFrame:r}){let a=new On({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});a.toneMapping=Bn,a.setClearColor(ot("#28403b"),1);let o=Mn();a.setPixelRatio(o);let l=new cn,c=new Tt(20,1,1,200),u=J0(a);l.environment=u;let h={uRes:{value:new Ne(1,1)},uDpr:{value:o},uNight:{value:ot("#28403b")},uDeep:{value:ot("#213631")},uWarm:{value:ot("#ddbfa3")},uAmber:{value:ot("#c7ae92")},uSage:{value:ot("#9ab4ac")},uThread:{value:ot("#b07a7f")},uGlow:{value:new Ne},uGlowR:{value:400},uPool:{value:new Ne},uPoolR:{value:new Ne(300,60)},uTA:{value:new Ne},uTB:{value:new Ne},uThreadAlpha:{value:.5}},d=new Ze(new jt(2,2),new mt({uniforms:h,vertexShader:Q0,fragmentShader:j0,depthWrite:!1,depthTest:!1}));d.frustumCulled=!1,d.renderOrder=-100,l.add(d);let f=new wi(ot("#fff1e0"),2.5);f.position.set(-7,9,8),l.add(f);let v=new wi(ot("#b6c9c2"),.25);v.position.set(6,2,6),l.add(v);let g=new wi(ot("#ffe6c4"),1.6);g.position.set(3,6,-10),l.add(g);let m=new An({color:16777215,metalness:0,roughness:.035,transmission:1,ior:1.52,thickness:1.25,attenuationColor:ot("#a24a12"),attenuationDistance:.85,specularIntensity:1,envMapIntensity:1.35}),p=new An({color:16777215,roughness:.02,transmission:1,ior:1.52,thickness:.3,attenuationColor:ot("#eef2e6"),attenuationDistance:2,envMapIntensity:2.2,specularIntensity:1}),S=new An({color:ot("#3a1d05"),emissive:ot("#eaa53c"),emissiveIntensity:.95,roughness:.1,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2});S.onBeforeCompile=me=>{me.fragmentShader=me.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float ndv = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance *= 0.05 + 0.95 * pow(ndv, 1.7); }`)};let _=new An({color:ot("#ffd27a"),roughness:.01,transmission:.55,ior:1.47,thickness:.4,attenuationColor:ot("#e09a2a"),attenuationDistance:.5,emissive:ot("#eda43a"),emissiveIntensity:.9,envMapIntensity:3.2,specularIntensity:1,clearcoat:1,clearcoatRoughness:0});_.onBeforeCompile=me=>{me.fragmentShader=me.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float ndv = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance *= 0.04 + 0.96 * pow(ndv, 2.2); }`)};let M=new An({color:ot("#241203"),roughness:.03,metalness:0,emissive:ot("#c98328"),emissiveIntensity:.34,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2.2,specularIntensity:1}),B=new An({color:ot("#151817"),roughness:.38,metalness:0,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1}),w=new An({color:ot("#1a1c1b"),roughness:.58,sheen:.6,sheenRoughness:.5,sheenColor:ot("#5a6662"),envMapIntensity:.9}),R=new Yt;R.position.set(un,0,Fs),R.rotation.y=-.32,l.add(R);let U=[[0,.16],[.55,.13],[1.05,.06],[1.42,0],[1.545,.035],[1.592,.13],[1.6,.3],[1.6,5.35],[1.592,5.55],[1.55,5.74],[1.46,5.92],[1.3,6.08],[1.1,6.2],[.93,6.28],[.83,6.36],[.8,6.46],[.8,6.52],[.85,6.56],[.85,6.62],[.8,6.66],[.8,6.72],[.85,6.76],[.85,6.82],[.8,6.86],[.81,6.93],[.79,6.99],[.72,7.02],[.64,7],[.61,6.94],[.6,6.7],[.6,6.1]],b=new Ze(Ns(U,128),m);R.add(b);let y=new An({color:ot("#80a097"),roughness:.78,metalness:0,sheen:.25,sheenRoughness:.8,sheenColor:ot("#ffffff"),envMapIntensity:.5}),L=new ws(1.614,1.614,4.75,160,1,!0,-Bs*.97/2,Bs*.97),q=new Ze(L,y);q.position.y=.48+4.75/2,q.rotation.y=0,R.add(q);for(let me of[.48,.48+4.75]){let Te=new Ze(new va(1.613,.006,6,160),new En({color:ot("#a9c2ba"),roughness:.8}));Te.rotation.x=Math.PI/2,Te.position.y=me,R.add(Te)}iu(t).then(me=>{let Te=new si(me);Te.colorSpace=Nt,Te.anisotropy=a.capabilities.getMaxAnisotropy(),Te.wrapS=Bi;let Ve=new si(su(me));Ve.colorSpace=on,y.map=Te,y.roughnessMap=Ve,te.map=Te,te.color.set(16777215).multiplyScalar(.42),te.needsUpdate=!0,y.roughness=1,y.color.set(16777215),y.needsUpdate=!0,en=!0,n&&nn&&Oe()}).catch(me=>console.warn("[hero] label",me));let X=(me,Te)=>{let Ve=new Ht({transparent:!0,depthWrite:!1,side:mn,toneMapped:!1,...me});return Ve.onBeforeCompile=Ye=>{Ye.vertexShader=Ye.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`),Ye.fragmentShader=Ye.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <map_fragment>",`#ifdef USE_MAP
 diffuseColor *= texture2D(map, vMapUv, 3.5);
#endif`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.a *= ${Te.toFixed(3)} * pow(smoothstep(-2.2, 0.0, vWY), 1.8);`)},Ve},te=X({color:ot("#80a097").multiplyScalar(.55)},.15),V=new Yt;V.position.set(un,0,Fs),V.rotation.y=R.rotation.y,V.scale.y=-1,V.add(new Ze(b.geometry,X({color:ot("#5a2408")},.3)));let C=new Ze(L,te);C.position.y=q.position.y,V.add(C),V.traverse(me=>{me.renderOrder=-60}),l.add(V);let G=new Yt,N=new Yt;N.position.copy(vr),N.rotation.z=-La,N.add(G),l.add(N);let le=new Ze(Ns([[.86,0],[1.16,0],[1.205,.035],[1.215,.12],[1.215,.74],[1.2,.79],[1.15,.815],[1.03,.83]],128),B);G.add(le);let fe=new Ze(K0(1.04,1.18,44,.05),B);fe.position.y=.83+.59,G.add(fe);let we=new Ze(Ns([[1,2],[1.01,2.02],[.95,2.06],[.66,2.07]],96),B);G.add(we);let Le=new Ze(new ga(.3,.86,64),B);Le.rotation.x=Math.PI/2,Le.position.y=.002,G.add(Le);let ge=new Ze(Ns([[0,2],[.66,2],[.69,2.06],[.68,2.14],[.6,2.2],[.585,2.32],[.56,2.9],[.5,3.45],[.465,3.72],[.455,3.85],[.43,3.96],[.37,4.04],[.27,4.1],[.14,4.13],[0,4.14]],96,80),w);G.add(ge);let J=[[0,-It+.02],[.075,-It],[.1,-It+.1],[.15,-It+.4],[.24,-It+.85],[.29,-It+1.15],[.3,-It+1.4],[.3,.05],[0,.05]],he=new Ze(Ns(J,64),p);G.add(he);let Q=new Ze(Ns([[0,-It+.06],[.06,-It+.05],[.08,-It+.12],[.13,-It+.4],[.21,-It+.85],[.245,-It+1.15],[.25,-It+1.4],[.25,-2.6],[.23,-2.52],[.12,-2.49],[0,-2.48]],48),S);G.add(Q),G.traverse(me=>{me.isMesh&&(me.renderOrder=2)});let Y=new H(0,-It-.005,0),ue=xr([[0,1],[.35,.72],[.7,.22],[1,0]]),be=xr([[0,1],[.5,.45],[1,0]]),Se=(me,Te,Ve,Ye,Xe,st,ct,rt=0,Mt=!1)=>{let nt=new Ze(new jt(1,1),new Ht({color:ot(Te),alphaMap:me,transparent:!0,opacity:Ve,depthWrite:!1,blending:Mt?ds:vi,toneMapped:!1}));return Mt&&(nt.material.map=me,nt.material.alphaMap=null),nt.rotation.x=-Math.PI/2,nt.rotation.z=rt,nt.scale.set(Ye,Xe,1),nt.position.set(st,.004,ct),nt.renderOrder=-50,l.add(nt),nt},Ce="#0f1d1a";Se(be,"#ddbfa3",.06,14,7,un-2.2,.6,0,!0),Se(ue,Ce,.72,3.9,3.9,un+.05,Fs+.02),Se(be,Ce,.42,7.4,2.6,un+2.6,Fs-.9,-.42);let De=Se(xr([[0,1],[.25,.55],[.6,.12],[1,0]]),"#d9902f",.3,2.2,1,un+1.75,Fs-.6,-.42,!0),ee=Se(be,Ce,.18,4.6,1.5,-2.5,.2,-.62);N.updateMatrixWorld(!0);let I=G.localToWorld(Y.clone()),Re=.032,ae={uAge:{value:99},uImpact:{value:new Ne(0,0)},uAmp:{value:.02}};M.onBeforeCompile=me=>{Object.assign(me.uniforms,ae),me.vertexShader=me.vertexShader.replace("#include <common>",`#include <common>
        uniform float uAge; uniform vec2 uImpact; uniform float uAmp;
        varying float vPoolT; varying float vPoolR; varying vec2 vPoolXZ;
        float wave(float r){
          float h = 0.0;
          for (int i = 0; i < 3; i++){
            float age = uAge - float(i) * 0.38;
            if (age <= 0.0) continue;
            float front = 0.55 * age + 0.02;
            float d = r - front;
            h += uAmp * exp(-1.5 * age) * exp(-d * d / 0.022) * cos(d * 26.0) * (1.0 - float(i) * 0.3);
          }
          return h;
        }`).replace("#include <beginnormal_vertex>",`
        vec3 objectNormal = vec3(normal);
        {
          vec2 xz = position.xz - uImpact; float r = max(length(xz), 1e-4);
          float e = 0.01; float dw = (wave(r + e) - wave(max(r - e, 0.0))) / (2.0 * e);
          objectNormal = normalize(objectNormal + vec3(-dw * xz.x / r, 0.0, -dw * xz.y / r) * 1.0);
        }
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3( tangent.xyz );
        #endif`).replace("#include <begin_vertex>",`
        vec3 transformed = vec3(position);
        vPoolT = clamp(1.0 - position.y / ${Re.toFixed(3)}, 0.0, 1.0);
        vPoolR = clamp(length(position.xz) / 0.82, 0.0, 1.2);
        vPoolXZ = position.xz;
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * smoothstep(0.0, ${(Re*.6).toFixed(3)}, position.y); }`),me.fragmentShader=me.fragmentShader.replace("#include <common>",`#include <common>
        varying float vPoolT; varying float vPoolR; varying vec2 vPoolXZ;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // vPoolT: 0 on the flat top, \u2192 1 down the meniscus. Deep oil absorbs, the thin rim glows gold.
          float rim = max(0.55 * smoothstep(0.35, 1.05, vPoolR), smoothstep(0.02, 0.6, vPoolT));
          diffuseColor.rgb *= mix(0.75, 1.6, rim);
          totalEmissiveRadiance *= mix(0.62, 2.1, rim);
          totalEmissiveRadiance += vec3(1.0, 0.78, 0.42) * 0.22 * smoothstep(0.35, 0.95, vPoolT);
          float ndv = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
          totalEmissiveRadiance *= 0.55 + 0.45 * ndv;
          // glossy sheen of the warm key light across the far half of the film (follows the ripple via the normal)
          vec2 hq = (vPoolXZ - vec2(-0.12, -0.3)) / vec2(0.42, 0.13);
          float sheen = exp(-dot(hq, hq)) * (1.0 - smoothstep(0.0, 0.5, vPoolT));
          sheen *= 0.6 + 0.4 * smoothstep(0.6, 1.0, normalize(normal).y + 0.4);
          totalEmissiveRadiance += vec3(1.0, 0.88, 0.68) * 0.32 * sheen;
        }`)};let re=new Ze(Z0(.82,Re),M);re.position.set(I.x+.12,0,I.z-.05),re.renderOrder=1,l.add(re),Se(ue,Ce,.16,2.05,1.85,re.position.x,re.position.z+.05),Se(xr([[0,.9],[.55,.55],[.8,.18],[1,0]]),"#b8741f",.12,2,1.85,re.position.x,re.position.z,0,!0),Se(xr([[0,1],[.4,.4],[1,0]]),"#e0a040",.22,3.2,1.6,re.position.x+.9,re.position.z-.5,-.42,!0),ae.uImpact.value.set(I.x-re.position.x,I.z-re.position.z);let ne=new Ze(new zi(1,48,32),_);ne.renderOrder=3,l.add(ne);let ye=new Ze(new ws(1,1,1,24,1,!0),_);ye.renderOrder=3,l.add(ye);let pe=!1,A=()=>pe,x=10,W=[ot("#9ab4ac"),ot("#f9b5c4"),ot("#ddbfa3"),ot("#b6c9c2"),ot("#e8d6c3"),ot("#c49b9f")],ie=new zi(1,40,28),de=new Float32Array(x*3),ve=new Float32Array(x),He=new Float32Array(x);ie.setAttribute("iColor",new Si(de,3)),ie.setAttribute("iSoft",new Si(ve,1)),ie.setAttribute("iAlpha",new Si(He,1));let Pe=new mt({uniforms:{uKey:{value:ot("#fff6ea").multiplyScalar(1.6)},uRim:{value:ot("#f6f4ee")},uFade:{value:1}},vertexShader:$0,fragmentShader:ev,transparent:!0,depthWrite:!1,blending:Bl,blendSrc:kl,blendDst:cr}),_e=new fa(ie,Pe,x);_e.frustumCulled=!1,_e.renderOrder=10,l.add(_e);let je=4,Ee=()=>(je=je*16807%2147483647)/2147483647,Fe=[],Je=[[3.9,8.6,-2.5,.36,0,.12],[-3.1,10.2,-1.5,.24,1,.08],[4.5,3.2,1.2,.2,2,.04],[-6.2,7.4,-4.5,.5,3,.4],[2.4,11.4,-5,.62,2,.5],[-1.9,3.3,1.6,.13,1,.02],[5.6,6.4,-1.5,.3,5,.12],[-4.4,11.6,.8,.2,4,.06],[6.6,10.4,-.5,.42,1,.45],[-2.6,7,-4.8,.32,0,.3],[3.2,5.2,-5.5,.24,4,.2],[.2,12.2,.6,.17,5,.05]];for(let me=0;me<x;me++){let[Te,Ve,Ye,Xe,st,ct]=Je[me];Fe.push({p:new H(Te,Ve,Ye),v:new H,r:Xe,tint:st,soft:ct,phase:Ee()*100,born:-10,life:1}),W[st].toArray(de,me*3),ve[me]=ct,He[me]=1}let We={x0:-7,x1:7.5,y0:-1,y1:13.2,z0:-6,z1:2.5};function Ue(me,Te){me.p.set(We.x0+Ee()*(We.x1-We.x0),-.6+Ee()*5.5,We.z0+Ee()*(We.z1-We.z0)),me.v.set(0,0,0),me.born=Te,me.r=.13+Math.pow(Ee(),1.8)*.5,me.soft=ks((me.p.z>2?.5:0)+(me.p.z<-4?.35:0)+Ee()*.15,0,.85),me.tint=Math.floor(Ee()*W.length),W[me.tint].toArray(de,Fe.indexOf(me)*3),ve[Fe.indexOf(me)]=me.soft,ie.attributes.iColor.needsUpdate=!0,ie.attributes.iSoft.needsUpdate=!0}let P={ndc:new Ne(.3,0),target:new Ne(.3,0),active:!1,vel:new Ne},k=new Ts,se=new H,T=new H,j=new H,z={az:0,el:0},O={cx:-.75,cy:5.2,h:11},xe=-2,Me=.01,D=1,$=1,F={fx:.66,fy:.5,hs:.8,D:30},Ae=new H;function Be(){D=Math.max(1,e.clientWidth),$=Math.max(1,e.clientHeight);let me=D<761;if(pe=me,a.setPixelRatio(o),a.setSize(D,$,!1),tt.setPixelRatio(o),tt.setSize(D,$),c.aspect=D/$,me){let Ve=Math.min(345,D*.9,$*.46);F={fx:.5,fy:(14+Ve/2)/$,hs:Ve,D:0}}else{let Ve=D/$,Ye=Math.min($*.8,D*.44*(11/7.6));F={fx:Ve>1.9?.62:.6,fy:.5,hs:Ye,D:0}}xe=me?-2:Math.min(D*.5,780)/D*2-1,Me=2*(F.hs/O.h)/D;let Te=Math.tan(Rn.degToRad(c.fov/2));F.D=$*O.h/(F.hs*2*Te),h.uRes.value.set(D*o,$*o),h.uDpr.value=o,wt.uniforms.uRes.value.set(D*o,$*o),wt.uniforms.uVigCenter.value.set(me?.5:.6,me?.62:.5),wt.uniforms.uVig.value=me?.26:.34,en=!0}function qe(me){let Te=z.az,Ve=Rn.degToRad(11)+z.el,Ye=F.D*(1+.045*me);Ae.set(O.cx,O.cy,0),c.position.set(Ae.x+Math.sin(Te)*Math.cos(Ve)*Ye,Ae.y+Math.sin(Ve)*Ye,Math.cos(Te)*Math.cos(Ve)*Ye),c.lookAt(Ae),c.near=Ye*.5,c.far=Ye*2.2,c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=-(2*F.fx-1),c.projectionMatrix.elements[9]=-(1-2*F.fy),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),c.updateMatrixWorld()}let Ke=me=>(j.copy(me).project(c),[(j.x*.5+.5)*D,(-j.y*.5+.5)*$]),et=new zt(2,2,{type:hn,samples:4}),tt=new Ia(a,et);tt.addPass(new Pa(l,c));let Rt=new Us(new Ne(256,256),.42,.62,.86);tt.addPass(Rt);let wt=new Ds(tv);tt.addPass(wt);let lt={period:5.6,grow:2.9,hang:.35,fallG:5.2,drag:1.6},$e={t:0,phase:.6,dropY:0,dropV:0,falling:!1,landed:!1,impactT:-99,cyc:0,intro:1},en=!0,Kt=!1,Ot=0,Ut=0,nn=!1,oi=new H,Gs=new H(Math.sin(.95)*1.62,2.7,Math.cos(.95)*1.62),E={bubble:new H(un+2.35,8.05,.2),tag:new H,glow:new H(un-.6,4.6,-1.5),pool:new H(un-1.6,0,.4),tA:new H(un+12,8.6,-6),tB:new H(un-1.5,14.6,-6)};function K(me,Te){$e.intro=n?0:Math.max(0,$e.intro-me/2.6);let Ve=Math.pow($e.intro,3),Ye=1-Math.exp(-me/.9),Xe=P.active?P.target.x:.15*Math.sin(Te*.13),st=P.active?P.target.y:.1*Math.sin(Te*.11+1);P.vel.set((Xe-P.ndc.x)/Math.max(me,.001),(st-P.ndc.y)/Math.max(me,.001)).multiplyScalar(Ye),P.ndc.x+=(Xe-P.ndc.x)*Ye,P.ndc.y+=(st-P.ndc.y)*Ye,n||(z.az=-P.ndc.x*Rn.degToRad(2.4),z.el=P.ndc.y*Rn.degToRad(1.3)),qe(Ve);let ct=n?0:Math.sin(Te*Bs/7.5)*.07+Math.sin(Te*Bs/11.3)*.03;N.position.set(vr.x,vr.y+ct,vr.z),N.rotation.z=-La+(n?0:Math.sin(Te*Bs/9.1)*.012),N.updateMatrixWorld(!0);let rt=G.localToWorld(se.copy(Y));ee.position.x=rt.x+1.6+ct*.4;let Mt=n?2.3:(Te+$e.phase)%lt.period,nt=Math.floor((Te+$e.phase)/lt.period),Ge=.19;if(Mt<lt.grow+lt.hang){$e.falling=!1,$e.landed=!1,$e.dropV=0;let ut=Y0(ks(Mt/lt.grow,0,1)),_t=.035+(Ge-.035)*ut,ze=1+.32*ut+(Mt>lt.grow?.06*Os(lt.grow,lt.grow+lt.hang,Mt):0),vt=.02+.09*ut+(Mt>lt.grow?.07*Os(lt.grow,lt.grow+lt.hang,Mt):0);oi.set(rt.x,rt.y-vt-_t*ze*.92,rt.z),ne.position.copy(oi),ne.scale.set(_t*(1-.04*ut),_t*ze,_t*(1-.04*ut)),ne.visible=!0;let bt=.075*(1-.55*ut)*(Mt>lt.grow?1-Os(lt.grow,lt.grow+lt.hang,Mt)*.8:1);ye.visible=!0,ye.position.set(rt.x,rt.y-vt*.5-.01,rt.z),ye.scale.set(bt,vt+.04,bt),$e.dropY=oi.y}else if(ye.visible=!1,!$e.falling&&!$e.landed&&($e.falling=!0,$e.dropY=rt.y-.2-Ge*1.38*.92,$e.dropV=0,$e.cyc=nt),$e.falling){$e.dropV+=(lt.fallG-lt.drag*$e.dropV)*me,$e.dropY-=$e.dropV*me;let ut=1+ks($e.dropV/3.2,0,1)*.16,_t=Mt-(lt.grow+lt.hang),ze=1+.38*Math.exp(-_t*7);ne.scale.set(Ge/Math.sqrt(ut*ze),Ge*ut*ze,Ge/Math.sqrt(ut*ze)),ne.position.set(rt.x,$e.dropY,rt.z),ne.visible=!0;let vt=Re+.01;if($e.dropY-Ge*ut<vt+.02){let bt=ks((vt+.02-($e.dropY-Ge*ut))/(Ge*2.2),0,1);ne.scale.set(Ge*(1+.5*bt),Ge*ut*(1-bt*.92),Ge*(1+.5*bt)),ne.position.y=Math.max($e.dropY,vt+Ge*ut*(1-bt)*.5),($e.impactT<0||$e.impactCyc!==$e.cyc)&&($e.impactT=Te,$e.impactCyc=$e.cyc,ae.uImpact.value.set(rt.x-re.position.x,rt.z-re.position.z)),bt>=1&&($e.falling=!1,$e.landed=!0,ne.visible=!1)}}else ne.visible=!1;if(ae.uAge.value=n?99:Te-$e.impactT,!n){k.setFromCamera(P.ndc,c);let ut=A();for(let _t=0;_t<x;_t++){let ze=Fe[_t],vt=1.25,bt=.16+.22*ze.r,ci=Math.sin(Te*.21+ze.phase)*.06+Math.sin(Te*.47+ze.phase*1.7)*.03,Ws=Math.cos(Te*.17+ze.phase*.7)*.03,qs=ci,Ei=vt*bt,Xs=Ws;if(P.active&&!ut){k.ray.closestPointToPoint(ze.p,T);let Hn=ze.p.x-T.x,Vn=ze.p.y-T.y,Ln=ze.p.z-T.z,xn=Math.hypot(Hn,Vn,Ln),Gn=1.9+ze.r;if(xn<Gn){let Ys=Math.pow(1-xn/Gn,2)*3.4/Math.max(xn,.05);qs+=Hn*Ys,Ei+=Vn*Ys,Xs+=Ln*Ys*.3,qs+=P.vel.x*2.6*(1-xn/Gn),Ei+=P.vel.y*2*(1-xn/Gn)}}ze.v.x+=(qs-vt*ze.v.x)*me,ze.v.y+=(Ei-vt*ze.v.y)*me,ze.v.z+=(Xs-vt*ze.v.z)*me,ze.p.addScaledVector(ze.v,me);let zn=(Hn,Vn,Ln,xn,Gn,Ys,bu)=>{let _r=xn-Hn,br=Gn-Vn,Sr=Ys-Ln,ka=ks(((ze.p.x-Hn)*_r+(ze.p.y-Vn)*br+(ze.p.z-Ln)*Sr)/(_r*_r+br*br+Sr*Sr),0,1),hc=Hn+_r*ka,uc=Vn+br*ka,dc=Ln+Sr*ka,Ks=ze.p.x-hc,Zs=ze.p.y-uc,Js=ze.p.z-dc,wr=Math.hypot(Ks,Zs,Js)||1e-4,Er=bu+ze.r;if(wr<Er){Ks/=wr,Zs/=wr,Js/=wr,ze.p.set(hc+Ks*Er,uc+Zs*Er,dc+Js*Er);let Ar=ze.v.x*Ks+ze.v.y*Zs+ze.v.z*Js;Ar<0&&(ze.v.x-=Ar*Ks,ze.v.y-=Ar*Zs,ze.v.z-=Ar*Js)}},Na=ze.p.z>-1.5;{let Hn=ze.p.x-E.bubble.x,Vn=ze.p.y-E.bubble.y,Ln=Math.hypot(Hn,Vn),xn=1.5+ze.r;if(Na&&Ln<xn&&(ze.p.x=E.bubble.x+Hn/Ln*xn,ze.p.y=E.bubble.y+Vn/Ln*xn),!ut){j.copy(ze.p).project(c);let Gn=xe+ze.r*Me;j.x<Gn&&(ze.p.x+=(Gn-j.x)/Me*Math.min(1,me*2.5),ze.v.x=Math.max(ze.v.x,0))}}let cc=Na?ze.p.z:Fs;zn(un,-.5,cc,un,7.3,cc,1.85);let fn=vr,Mr=Math.sin(La),Ba=Math.cos(La),qi=Na?ze.p.z:fn.z;zn(fn.x,fn.y,qi,fn.x+4.1*Mr,fn.y+4.1*Ba,qi,1.35),zn(fn.x,fn.y,qi,fn.x-It*Mr,fn.y-It*Ba,qi,.5),zn(fn.x-It*Mr,-.5,qi,fn.x-It*Mr,fn.y-It*Ba,qi,.6);let Mu=Os(0,1.6,Te-ze.born),_u=1-Os(We.y1-2.4,We.y1,ze.p.y);He[_t]=Mu*_u,(ze.p.y>We.y1||ze.p.x<We.x0-2||ze.p.x>We.x1+2)&&Ue(ze,Te)}for(let _t=0;_t<x;_t++)for(let ze=_t+1;ze<x;ze++){let vt=Fe[_t],bt=Fe[ze],ci=bt.p.x-vt.p.x,Ws=bt.p.y-vt.p.y,qs=(bt.p.z-vt.p.z)*.35,Ei=Math.hypot(ci,Ws,qs)||1e-4,Xs=(vt.r+bt.r)*1.6+.25;if(Ei<Xs){let zn=(Xs-Ei)/Ei*Math.min(1,me*2);vt.p.x-=ci*zn*.5,vt.p.y-=Ws*zn*.5,bt.p.x+=ci*zn*.5,bt.p.y+=Ws*zn*.5}}ie.attributes.iAlpha.needsUpdate=!0}let dn=new pt;for(let ut=0;ut<x;ut++){let _t=Fe[ut];dn.makeScale(_t.r,_t.r,_t.r).setPosition(_t.p),_e.setMatrixAt(ut,dn)}_e.instanceMatrix.needsUpdate=!0,A()?_e.count=9:_e.count=x;let ht=Ke(E.glow);h.uGlow.value.set(ht[0]*o,($-ht[1])*o);let sn=Ke(T.set(E.glow.x,E.glow.y+1,E.glow.z)),vn=Math.abs(sn[1]-ht[1]);h.uGlowR.value=vn*6.2*o;let Wt=Ke(E.pool);h.uPool.value.set(Wt[0]*o,($-Wt[1])*o),h.uPoolR.value.set(vn*7.5*o,vn*1.9*o);let li=Ke(E.tA),gt=Ke(E.tB);h.uTA.value.set(li[0]*o,($-li[1])*o),h.uTB.value.set(gt[0]*o,($-gt[1])*o),wt.uniforms.uTime.value=Te,De.material.opacity=.26+.04*Math.sin(Te*.7),R.localToWorld(E.tag.copy(Gs)),s&&s({bubble:Ke(E.bubble),tag:Ke(E.tag),ppu:vn,W:D,H:$})}let oe=0,ce=0,Z=0;function Ie(me){Ot=Kt?requestAnimationFrame(Ie):0;let Te=me/1e3,Ve=Ut?Math.min(.05,Te-Ut):1/60;if(Ut=Te,K(Ve,Te),tt.render(Ve),nn||(nn=!0,r&&r()),Z++,Z>120&&(oe+=Ve,ce++,ce===90)){let Ye=oe/ce;oe=0,ce=0,Ye>.026&&o>1&&(o=Math.max(1,o-.25),Be())}}function Oe(){let me=performance.now()/1e3;K(1/60,me),tt.render(1/60),nn||(nn=!0,r&&r())}return Be(),{start(){if(!Kt){if(n){Oe();return}Kt=!0,Ut=0,Ot=requestAnimationFrame(Ie)}},stop(){Kt=!1,cancelAnimationFrame(Ot),Ot=0},resize(){Be(),Kt||Oe()},pointer(me,Te,Ve){P.target.set(me,Te),P.active=Ve},get dirty(){return en},dispose(){this.stop(),a.dispose()}}}function nv(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function jl(i,e){let t=i.querySelector(".hero-canvas"),n=i.querySelector(".hero-stage"),s=i.querySelector(".hero-bubble"),r=i.querySelector(".hero-tag"),a=i.querySelector("[data-hero-add]"),o=e.byId["skin-oil"];if(o){let g=i.querySelector("[data-hero-price]");g&&(g.textContent=e.fmt.kr(o.price));let m=i.querySelector("[data-hero-was]");m&&(m.textContent=e.fmt.kr(o.price0));let p=i.querySelector(".hero-bubble__pct");p&&(p.textContent=`\u2212${e.campaign.headlinePct}%`)}let l=0;a&&a.addEventListener("click",()=>{e.store.add("skin-oil",1),a.classList.add("is-added"),a.setAttribute("aria-label","Vidunder Olien er lagt i kurven"),clearTimeout(l),l=setTimeout(()=>{a.classList.remove("is-added"),a.setAttribute("aria-label","L\xE6g Vidunder Olien i kurv")},2200)}),requestAnimationFrame(()=>i.classList.add("is-ready"));let c=()=>{i.classList.add("is-static");let g=i.querySelector(".hero-fallback");g&&g.dataset.src&&!g.src&&(g.src=g.dataset.src)};if(!nv()||/[?&]hero=static\b/.test(location.search)){c();return}let u=null,h=!1,d=70,f=()=>{d=s.firstElementChild.offsetWidth/2+14};f();let v=({bubble:g,tag:m,W:p})=>{let S=d,_=Math.min(Math.max(g[0],S),p-S);s.style.transform=`translate3d(${_.toFixed(1)}px, ${g[1].toFixed(1)}px, 0)`,r.style.transform=`translate3d(${m[0].toFixed(1)}px, ${m[1].toFixed(1)}px, 0) translateY(-50%)`,h||(h=!0,i.classList.add("is-tracked"))};ru({canvas:t,host:n,asset:e.asset,reduced:e.prefersReducedMotion,onFrame:v,onFirstFrame:()=>requestAnimationFrame(()=>i.classList.add("is-live"))}).then(g=>{u=g;let m=!0,p=()=>{m&&!document.hidden?g.start():g.stop()};hi(i,_=>{m=_,p()}),document.addEventListener("visibilitychange",p),p();let S=0;if(new ResizeObserver(()=>{cancelAnimationFrame(S),S=requestAnimationFrame(()=>{f(),g.resize()})}).observe(n),matchMedia("(pointer: fine)").matches){let _=!1;r.addEventListener("pointerenter",()=>{_=!0}),r.addEventListener("pointerleave",()=>{_=!1}),i.addEventListener("pointermove",M=>{if(_)return;let B=n.getBoundingClientRect();g.pointer((M.clientX-B.left)/B.width*2-1,-((M.clientY-B.top)/B.height*2-1),!0)},{passive:!0}),i.addEventListener("pointerleave",()=>g.pointer(0,0,!1))}t.addEventListener("webglcontextlost",_=>{_.preventDefault(),g.stop(),c()})}).catch(g=>{console.warn("[hero] WebGL scene unavailable, using still",g),c()})}function $l(i,e){let t=new URLSearchParams(location.search),n=e.prefersReducedMotion;iv(i,e,t,n),sv(i,e,t,n),rv(i,e);try{lv(i,e,n)}catch{}}function iv(i,e,t,n){let s=i.querySelector(".offers-clock");if(!s)return;let r=0,a=t.get("offers-now");if(a){let w=Date.parse(a);Number.isNaN(w)||(r=w-e.clock.now())}let o=()=>e.clock.now()+r,l=e.clock.end,c=e.clock.start,u=s.querySelector("[data-clock-label]"),h=s.querySelector("[data-clock-end]"),d=h&&[...h.childNodes].find(w=>w.nodeType===3&&w.textContent.trim()),f=s.querySelector("[data-clock-done]"),v=s.querySelector("[data-clock-sr]"),g=["d","h","m","s"].map(w=>{let R=s.querySelector(`[data-unit="${w}"]`);return{dgs:[...R.querySelectorAll(".offers-dg")].map(b=>{let y=b.textContent.trim();b.textContent="";let L=document.createElement("span");return L.className="offers-dg__v",L.textContent=y,b.append(L),{el:b,v:y,cur:L}}),lbl:R.querySelector("[data-lbl]")}}),m="cubic-bezier(.2,.72,.22,1)";function p(w,R,U){if(w.v===R)return;if(w.v=R,!U||n||!w.el.animate){w.cur.textContent=R;return}let b=w.cur,y=document.createElement("span");y.className="offers-dg__v",y.textContent=R,w.el.append(y),w.cur=y;let L=b.animate([{transform:"translateY(0)",opacity:1,filter:"blur(0px)"},{transform:"translateY(52%)",opacity:0,filter:"blur(1.2px)"}],{duration:620,easing:m,fill:"forwards"});L.onfinish=()=>b.remove(),y.animate([{transform:"translateY(-52%)",opacity:0,filter:"blur(1.2px)"},{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}],{duration:780,easing:m})}let S="",_=-1;function M(w){let R=o(),U=R<c?"pre":R>=l?"ended":l-R<=864e5?"last":"live";if(U!==S&&(s.dataset.state=U,S=U,u.textContent=U==="pre"?"Black Week begynder om":U==="ended"?"Black Week er slut":U==="last"?"Sidste dag \u2013 Black Week slutter om":"Black Week slutter om",d&&(d.textContent=U==="pre"?" Starter mandag 23. november":U==="last"?" Slutter i aften kl. 23.59":" Slutter mandag 30. november kl. 23.59"),f&&(f.hidden=U!=="ended")),U==="ended"){v&&(v.textContent="Black Week er slut.");return}let y=Math.max(0,Math.floor(((U==="pre"?c:l)-R)/1e3)),L=[Math.floor(y/86400),Math.floor(y/3600)%24,Math.floor(y/60)%60,y%60];L.forEach((X,te)=>{let V=String(Math.min(X,99)).padStart(2,"0");g[te].dgs.forEach((C,G)=>p(C,V[G],w))}),g[0].lbl&&(g[0].lbl.textContent=L[0]===1?"dag":"dage"),g[1].lbl&&(g[1].lbl.textContent=L[1]===1?"time":"timer");let q=Math.floor(y/60);if(v&&q!==_){_=q;let X=L[0],te=L[1],V=L[2];v.textContent=`${U==="pre"?"Black Week begynder om":"Black Week slutter om"} ${X} ${X===1?"dag":"dage"}, ${te} ${te===1?"time":"timer"} og ${V} ${V===1?"minut":"minutter"}.`}}M(!1);let B=()=>{M(!0),setTimeout(B,1e3-o()%1e3+12)};setTimeout(B,1e3-o()%1e3+12)}function sv(i,e,t,n){let s=i.querySelector("[data-meter]");if(!s)return;let{giftThreshold:r,freeShipping:a,giftValue:o}=e.campaign,l=e.fmt.kr,c=s.querySelector("[data-meter-text]"),u=s.querySelector("[data-meter-sum]"),h=s.querySelector("[data-meter-track]"),d={ship:s.querySelector('[data-ms="399"]'),gift:s.querySelector('[data-ms="699"]')};s.style.setProperty("--at-ship",(a/r).toFixed(4));let f=0,v=0,g=-1;function m(_){if(cancelAnimationFrame(v),n){f=_,u.textContent=l(_);return}let M=f,B=performance.now(),w=900,R=U=>{let b=Math.min(1,(U-B)/w),y=1-Math.pow(1-b,4);f=M+(_-M)*y,u.textContent=l(f),b<1&&(v=requestAnimationFrame(R))};v=requestAnimationFrame(R)}function p(){let _=e.store.subtotal(),M=_>=r?2:_>=a?1:0;if(s.style.setProperty("--p",Math.min(1,_/r).toFixed(4)),s.dataset.level=M,s.toggleAttribute("data-empty",_===0),_===0?c.innerHTML=`Fri fragt over ${l(a)} <span class="offers-soft">\u2013</span> og en gratis CBD Lip Balm over ${l(r)}`:M===0?c.innerHTML=`Du mangler <b>${l(a-_)}</b> til fri fragt`:M===1?c.innerHTML=`Fri fragt er klaret. Du mangler <b>${l(r-_)}</b> til en gratis CBD Lip Balm`:c.innerHTML=`Fri fragt og en gratis CBD Lip Balm <span class="offers-soft">(v\xE6rdi ${l(o)})</span> f\xF8lger med din ordre`,m(_),d.ship.classList.toggle("is-reached",M>=1),d.gift.classList.toggle("is-reached",M>=2),g!==-1&&M>g&&!n){let B=M>=2&&g<2?d.gift:d.ship;setTimeout(()=>{B.classList.remove("is-landing"),B.offsetWidth,B.classList.add("is-landing")},650)}g=M,h.setAttribute("aria-valuenow",String(Math.min(_,r))),h.setAttribute("aria-valuetext",`${l(_)} i kurven`)}e.store.on(_=>{(_==="cart:add"||_==="cart:change")&&p()}),p();let S=t.get("offers-cart");S&&setTimeout(()=>S.split(",").forEach(_=>e.byId[_]&&e.store.add(_,1)),+(t.get("offers-cart-delay")||900))}function rv(i,e){let t=i.querySelector("[data-gift-tip]"),n=e.byId&&e.byId["komplet-pakken"];!t||!n||(n.price>=e.campaign.giftThreshold?t.textContent=`${n.name} til ${e.fmt.kr(n.price)} klarer det alene.`:t.remove())}var av=`
  attribute float aSize; attribute float aSeed; attribute float aDepth;
  uniform vec2 uRes; uniform float uDpr;
  varying float vSeed; varying float vDepth; varying float vY; varying float vR;
  void main() {
    vec2 ndc = vec2(position.x / uRes.x * 2.0 - 1.0, 1.0 - position.y / uRes.y * 2.0);
    gl_Position = vec4(ndc, 0.0, 1.0);
    gl_PointSize = aSize * uDpr;
    vSeed = aSeed; vDepth = aDepth; vY = position.y / uRes.y; vR = aSize * 0.5 / uRes.y;
  }`,ov=`
  precision highp float;
  uniform float uTime; uniform float uFade;
  varying float vSeed; varying float vDepth; varying float vY; varying float vR;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0; p.y = -p.y;
    float r = length(p);
    float aa = fwidth(r) * 1.25;
    float soft = vDepth * 0.2;                         // far bubbles sit out of focus
    float mask = 1.0 - smoothstep(1.0 - soft - aa, 1.0, r);
    if (mask <= 0.001) discard;
    float z = sqrt(max(0.0, 1.0 - r * r));
    vec3 n = vec3(p, z);
    vec3 L = normalize(vec3(-0.55, 0.62, 0.56));       // low, warm evening key from upper-left
    vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
    float ndh = max(dot(n, H), 0.0);
    float fres = pow(1.0 - z, 2.6);
    float rim = smoothstep(0.86, 0.975, r) * (1.0 - smoothstep(0.975, 1.0, r));
    float spec = pow(ndh, 90.0);
    float sheen = pow(ndh, 9.0);
    // light gathered through the drop, landing low on the far side (soft caustic)
    float caustic = exp(-pow(length(p - vec2(0.36, -0.44)) / 0.36, 2.0));
    // a secondary, smaller window reflection \u2013 what makes it read as glass/oil, not a ring
    float win = exp(-pow(length((p - vec2(-0.42, 0.46)) * vec2(1.0, 1.7)) / 0.15, 2.0));
    vec3 paper = vec3(0.965, 0.957, 0.933);
    vec3 sage  = vec3(0.714, 0.788, 0.761);
    vec3 sand  = vec3(0.867, 0.749, 0.639);
    vec3 amber = vec3(0.80, 0.56, 0.30);
    float warm = step(0.66, vSeed);                   // a third are amber "oil" drops
    float film = 0.5 + 0.5 * sin(6.2831 * (r * 1.35 + vSeed * 3.0) + uTime * 0.22);
    vec3 rimCol = mix(mix(sage, sand, warm), paper, 0.3 + 0.35 * film);
    vec3 col = rimCol * (fres * 0.5 + rim * 0.42)
             + mix(sand, amber, warm) * caustic * (0.16 + 0.22 * warm)
             + paper * (spec * 1.1 + win * 0.55 + sheen * 0.035);
    float a = fres * 0.30 + rim * 0.30 + caustic * (0.06 + 0.12 * warm) + spec * 0.9 + win * 0.45 + 0.02 + warm * 0.04;
    float focus = 1.0 - vDepth * 0.5;
    float edgeFade = smoothstep(0.02, 0.2, vY - p.y * vR);
    float k = mask * focus * edgeFade * uFade;
    gl_FragColor = vec4(col * k, min(a, 1.0) * k);
  }`;function lv(i,e,t){let n=i.querySelector(".offers-night"),s=i.querySelector(".offers-gl");if(!n||!s)return;let r;try{r=new On({alpha:!0,antialias:!0,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{return}r.setPixelRatio(Mn()),r.setClearColor(0,0),s.prepend(r.domElement),s.classList.add("is-gl");let a=e.isMobile(),o=a?7:12,l=new Float32Array(o*3),c=new Float32Array(o),u=new Float32Array(o),h=new Float32Array(o),d=new At,f=new Et(l,3).setUsage(qh);d.setAttribute("position",f),d.setAttribute("aSize",new Et(c,1)),d.setAttribute("aSeed",new Et(u,1)),d.setAttribute("aDepth",new Et(h,1));let v={uRes:{value:new Ne(1,1)},uDpr:{value:Mn()},uTime:{value:0},uFade:{value:t?1:0}},g=new mt({uniforms:v,vertexShader:av,fragmentShader:ov,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0}),m=new bs(d,g);m.frustumCulled=!1;let p=new cn;p.add(m);let S=new Ms,_=1,M=1,B=7,w=()=>(B=B*16807%2147483647)/2147483647,R=[];for(let ge=0;ge<o;ge++){let J=1-ge/(o-1)*.92-w()*.06;R.push({i:ge,z:J,x:0,y:0,vx:0,vy:0,r:0,ph:w()*6.283,seed:w()})}function U(ge,J){let he=1-ge.z;ge.r=(a?.62:1)*(9+Math.pow(w(),1.7)*44+he*22);let Q=w();!a&&Q>.6&&Q<.95&&w()<.5&&(Q=w()*.55),ge.x=Q*_,ge.y=J?(.15+w()*.85)*M:M+ge.r+w()*M*.25,ge.vx=0,ge.vy=J?-(6+ge.r*.3):0,ge.seed=w(),ge.ph=w()*6.283,c[ge.i]=ge.r*2,u[ge.i]=ge.seed,h[ge.i]=ge.z,d.attributes.aSize.needsUpdate=!0,d.attributes.aSeed.needsUpdate=!0,d.attributes.aDepth.needsUpdate=!0}function b(){let ge=n.getBoundingClientRect(),J=Math.max(1,Math.round(ge.width)),he=Math.max(1,Math.round(ge.height)),Q=_===1;Q||R.forEach(Y=>{Y.x*=J/_,Y.y*=he/M}),_=J,M=he,r.setSize(_,M,!1),v.uRes.value.set(_,M),Q&&R.forEach(Y=>U(Y,!0))}b(),new ResizeObserver(b).observe(n);let y={x:-9999,y:-9999,vx:0,vy:0,on:!1,t:0};t||(n.addEventListener("pointermove",ge=>{let J=n.getBoundingClientRect(),he=ge.clientX-J.left,Q=ge.clientY-J.top,Y=performance.now(),ue=Math.max(8,Y-y.t)/1e3;y.on&&(y.vx=y.vx*.6+(he-y.x)/ue*.4,y.vy=y.vy*.6+(Q-y.y)/ue*.4),y.x=he,y.y=Q,y.on=!0,y.t=Y},{passive:!0}),n.addEventListener("pointerleave",()=>{y.on=!1,y.vx=y.vy=0},{passive:!0}));let L=scrollY,q=0;addEventListener("scroll",()=>{q+=scrollY-L,L=scrollY},{passive:!0});let X=[],te=[i.querySelector(".offers-title"),i.querySelector(".offers-clock__digits")].filter(Boolean);function V(){let ge=n.getBoundingClientRect();X=te.map(J=>{let he=J.getBoundingClientRect();return{x0:he.left-ge.left,y0:he.top-ge.top,x1:he.right-ge.left,y1:he.bottom-ge.top}})}V(),new ResizeObserver(V).observe(n),addEventListener("load",V);function C(ge,J){let he=Math.max(-60,Math.min(60,q));q=0,y.vx*=Math.exp(-ge*6),y.vy*=Math.exp(-ge*6);for(let Q of R){let Y=1-Q.z,ue=-(5+Q.r*.36)*(.55+Y*.45),Se=(Math.sin(J*(.22+Q.seed*.12)+Q.ph)*(3+Q.r*.07)-Q.vx)*.8,Ce=(ue-Q.vy)*.8;if(y.on){let I=Q.x-y.x,Re=Q.y-y.y,ae=Math.hypot(I,Re)||1,re=150+Q.r;if(ae<re){let ne=Math.pow(1-ae/re,2)*(.35+Y*.65);Se+=I/ae*ne*90+y.vx*ne*.9,Ce+=Re/ae*ne*90+y.vy*ne*.9}}for(let I of X){let Re=Q.r*.9+12;if(Q.x>I.x0-Re&&Q.x<I.x1+Re&&Q.y>I.y0-Re&&Q.y<I.y1+Re){let ae=(I.x0+I.x1)/2,re=Q.x<ae?-1:1,ne=re<0?Q.x-(I.x0-Re):I.x1+Re-Q.x;Se+=re*Math.min(1,ne/120)*70*(.25+Y*.75)}}Q.vy+=he*.9*(.3+Y*.7),Q.vx+=Se*ge,Q.vy+=Ce*ge;let De=Math.hypot(Q.vx,Q.vy),ee=140;De>ee&&(Q.vx*=ee/De,Q.vy*=ee/De)}for(let Q=0;Q<o;Q++)for(let Y=Q+1;Y<o;Y++){let ue=R[Q],be=R[Y];if(Math.abs(ue.z-be.z)>.3)continue;let Se=be.x-ue.x,Ce=be.y-ue.y,De=Math.hypot(Se,Ce)||1,ee=(ue.r+be.r)*1.08;if(De<ee){let I=(ee-De)*.5*ge*2.2,Re=Se/De,ae=Ce/De;ue.vx-=Re*I*8,ue.vy-=ae*I*8,be.vx+=Re*I*8,be.vy+=ae*I*8}}for(let Q of R)Q.x+=Q.vx*ge,Q.y+=Q.vy*ge,Q.y<-Q.r*1.3&&U(Q,!1),Q.x<-Q.r?Q.x=_+Q.r:Q.x>_+Q.r&&(Q.x=-Q.r),l[Q.i*3]=Q.x,l[Q.i*3+1]=Q.y,l[Q.i*3+2]=0;f.needsUpdate=!0}let G=ge=>{v.uTime.value=ge,r.render(p,S)};if(t){for(let ge=0;ge<120;ge++)C(1/30,ge/30);G(4);return}for(let ge=0;ge<90;ge++)C(1/30,ge/30);let N=!1,le=0,fe=3,we=hi(n,ge=>{ge&&!N&&(N=!0,le=performance.now(),requestAnimationFrame(Le))});function Le(ge){if(!we()||document.hidden){N=!1;return}let J=Math.min(1/30,(ge-le)/1e3);le=ge,fe+=J,v.uFade.value=Math.min(1,v.uFade.value+J*.8),C(J,fe),G(fe),requestAnimationFrame(Le)}document.addEventListener("visibilitychange",()=>{!document.hidden&&we()&&!N&&(N=!0,le=performance.now(),requestAnimationFrame(Le))})}var au="data:image/webp;base64,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";var ou={"skin-oil":{url:au,box:[1e3,1e3,232,100,769,960],h:.76},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,718,1109],h:.74},"day-cream":{src:"products/day-cream.webp",box:[1200,1200,345,97,875,1152],h:.86},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,881,1154],h:.86},"cleansing-gel":{src:"products/cleansing-gel-box.webp",box:[1200,1200,223,64,1034,1120],h:.82},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1142],h:.92},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,65,763,1149],h:1},"komplet-pakken":{src:"products/startpakke-plus.webp",box:[1200,1200,173,77,1110,1116],h:1},"all-day-facial":{src:"products/all-day-facial.webp",box:[1200,1200,161,78,1127,1116],h:1}},cv=["komplet-pakken","skin-oil","serum","day-cream","night-cream","all-day-facial","cleansing-gel","body-lotion","shampoo"],hv={"skin-oil":"face",serum:"face","day-cream":"face","night-cream":"face","cleansing-gel":"face","body-lotion":"body",shampoo:"body"},lu=i=>i.bundle?"sets":hv[i.id]||"face",uv={"cleansing-gel":"Rens","day-cream":"Dag","night-cream":"Nat","skin-oil":"Olie"},Gi={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',leaf:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>'},Vt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),yr=(i,e,t)=>Math.max(e,Math.min(t,i));function ec(i,e){let{fmt:t,store:n}=e,s=P=>t.kr(P).replace(/ (?=kr\.)/,"\xA0"),r=(P,k=i)=>k.querySelector(P),a=(P,k=i)=>[...k.querySelectorAll(P)],o=e.prefersReducedMotion,l=matchMedia("(hover: hover) and (pointer: fine)").matches,c="cubic-bezier(.16, 1, .3, 1)",u=+((location.search.match(/[?&]dealsSlow=(\d+)/)||[])[1]||1),h=matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0&&e.isMobile();i.classList.toggle("deals-touch",h);let d=r("[data-deals-grid]"),f=r("[data-deals-live]"),v=cv.map(P=>e.byId[P]).filter(P=>P&&!P.gift&&ou[P.id]);e.products.forEach(P=>{!P.gift&&P.img&&!v.includes(P)&&!/drops|lubricant/.test(P.img)&&v.push(P)});function g(P,k=""){let se=ou[P.id],T=se&&se.url?se.url:e.asset(se?se.src:P.img);if(!se)return`<div class="deals-prod ${k}" style="--ar:.8;--ph:.8"><span class="deals-prod__shadow"></span><span class="deals-prod__pack"><img src="${T}" alt="" loading="lazy" decoding="async" style="width:100%;left:0;top:0"></span></div>`;let[j,z,O,xe,Me,D]=se.box,$=Me-O,F=D-xe,Ae=`width:${(j/$*100).toFixed(3)}%;left:${(-O/$*100).toFixed(3)}%;top:${(-xe/F*100).toFixed(3)}%`;return`<div class="deals-prod${P.bundle?" deals-prod--set":""} ${k}" style="--ar:${($/F).toFixed(4)};--ph:${se.h}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack"><img src="${T}" alt="${Vt(P.name)}${P.size&&!P.bundle?", "+Vt(P.size):""}" width="${j}" height="${z}" draggable="false" style="${Ae}"></span>
    </div>`}let m=(P,k=!1)=>`
    <div class="deals-price${k?" deals-price--big":""}">
      <span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${s(P.price)}</span>
      <span class="deals-price__save">Spar ${s(P.save)}</span>
      <span class="deals-price__was">F\xF8rpris ${s(P.price0)}</span>
    </div>`,p=(P,k="")=>`
    <button class="nc-btn deals-add${k}" type="button" data-add="${P.id}" aria-label="L\xE6g ${Vt(P.name)} i kurv">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a" aria-hidden="true">${Gi.bag}<span>L\xE6g i kurv</span></span>
      <span class="deals-add__b" aria-hidden="true">${Gi.check}<span>Lagt i kurv</span></span>
    </button>`,S=P=>[P.size,P.strength].filter(Boolean).join(" \xB7 "),_=P=>{let k=(P.contains||[]).map(se=>e.byId[se]).filter(Boolean);return k.length?`<dl class="deals-set__list">
      ${k.map(se=>`<div class="deals-set__row"><dt>${Vt(se.name)}</dt><dd>${s(se.price0)}</dd></div>`).join("")}
      <div class="deals-set__row deals-set__row--sum"><dt>V\xE6rdi ved l\xF8sk\xF8b</dt><dd>${s(P.valueLoose)}</dd></div>
    </dl>`:""};function M(P,k){let se=lu(P),T=`<span class="nc-bubble nc-bubble--sale deals-bubble" aria-hidden="true">\u2212${P.pct}%</span>`,j=`<button class="deals-quick" type="button" data-qv="${P.id}" aria-label="Hurtig visning: ${Vt(P.name)}">${Gi.eye}<span class="deals-quick__t">Hurtig visning</span></button>`;if(P.bundle){let z=(P.contains||[]).length;return`<li class="deals-item deals-item--set" data-id="${P.id}" data-cat="${se}" style="--ri:${k}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${P.id}">
          <div class="deals-card__stage" data-stage>
            ${g(P)}${T}
            <span class="deals-sheen" aria-hidden="true"></span>${j}
          </div>
          <div class="deals-card__body">
            ${P.badge?`<img class="deals-set__badge" src="${e.asset(P.badge)}" alt="" width="64" height="64" loading="lazy">`:""}
            <p class="deals-card__eyebrow">Sampakke \xB7 ${z} produkter</p>
            <h3 class="deals-card__name deals-card__name--set" id="deals-n-${P.id}">${Vt(P.name)}</h3>
            <p class="deals-card__claim deals-card__claim--set">${Vt(P.claim)}</p>
            ${_(P)}
            <div class="deals-card__buy">${m(P,!0)}${p(P)}</div>
          </div>
        </article>
      </li>`}return`<li class="deals-item" data-id="${P.id}" data-cat="${se}" style="--ri:${k}">
      <article class="deals-card" aria-labelledby="deals-n-${P.id}">
        <div class="deals-card__stage" data-stage>
          ${g(P)}${T}
          <span class="deals-sheen" aria-hidden="true"></span>${j}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${Vt(P.nickname||P.eyebrow)}</p>
          <h3 class="deals-card__name" id="deals-n-${P.id}">${Vt(P.name)}</h3>
          <p class="deals-card__size">${Vt(S(P))}</p>
          <p class="deals-card__claim">${Vt(P.claim)}</p>
          <div class="deals-card__buy">${m(P)}${p(P)}</div>
        </div>
      </article>
    </li>`}let B=e.byId[e.campaign.giftId],w=e.campaign.giftThreshold,R=e.campaign.freeShipping,U=`<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${v.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <img class="deals-gift__mark" src="${e.asset("logo-mark-white.svg")}" alt="" aria-hidden="true">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Gave ved k\xF8b over ${s(w)}</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${Vt(B?B.name:"CBD Lip Balm")} med i k\xF8bet</h3>
        </div>
        <div class="deals-gift__bubbles" aria-hidden="true">
          <span class="nc-bubble nc-bubble--pink deals-gift__bubble">Gratis</span>
          <span class="nc-bubble nc-bubble--sand deals-gift__bubble deals-gift__bubble--val"><span>V\xE6rdi<br>${s(e.campaign.giftValue)}</span></span>
        </div>
        <p class="deals-gift__copy">L\xE6gges automatisk i kurven, n\xE5r du handler for over ${s(w)} \u2013 v\xE6rdi ${s(e.campaign.giftValue)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis CBD Lip Balm" aria-valuemin="0" aria-valuemax="${w}" aria-valuenow="0">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(R/w*100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(R/w*100).toFixed(2)}%">Fri fragt</span>
            <span style="--at:100%">Gave</span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
      </div>
    </aside>
  </li>`;d.innerHTML=v.map(M).join("")+U,d.classList.add("deals-rv");let b=()=>{d.classList.add("is-in")};if(o)b();else{let P=new IntersectionObserver(k=>{k.some(se=>se.isIntersecting)&&(b(),P.disconnect())},{rootMargin:"0px 0px -6% 0px"});P.observe(d)}let y=r(".deals-foot");y&&y.removeAttribute("data-reveal");let L={all:v.length,face:0,body:0,sets:0};v.forEach(P=>L[lu(P)]++),a("[data-count]").forEach(P=>{P.textContent=L[P.dataset.count]});let q=r(".deals-gift__fill"),X=r(".deals-gift__track"),te=r("[data-gift-status]"),V=r(".deals-gift");function C(){let P=n.subtotal();q.style.setProperty("--p",yr(P/w,0,1).toFixed(4)),X.setAttribute("aria-valuenow",String(Math.min(P,w))),V.classList.toggle("is-ship",P>=R),V.classList.toggle("is-done",P>=w);let k;P<=0?k=`Du er ${s(w)} fra din gave \u2013 og ${s(R)} fra fri fragt.`:P<R?k=`Du mangler <b>${s(R-P)}</b> til fri fragt og <b>${s(w-P)}</b> til din gave.`:P<w?k=`Fri fragt er din. Du mangler <b>${s(w-P)}</b> til din gave.`:k="<b>Din CBD Lip Balm f\xF8lger med.</b> Fri fragt er ogs\xE5 din.",te.innerHTML=k}C(),n.on(P=>{(P==="cart:add"||P==="cart:change")&&C()});let G=r(".deals-filter"),N=r(".deals-filter__ink"),le=a(".deals-chip"),fe="all";function we(P,k){let se=P.offsetLeft,T=P.offsetWidth;N.style.transition=k||o?"none":"",N.style.width=`${T}px`,N.style.transform=`translateX(${se}px)`,k&&(N.offsetWidth,N.style.transition=""),N.classList.add("is-on")}let Le=()=>le.find(P=>P.getAttribute("aria-pressed")==="true")||le[0];requestAnimationFrame(()=>we(Le(),!0)),document.fonts&&document.fonts.ready.then(()=>we(Le(),!0)),new ResizeObserver(()=>we(Le(),!0)).observe(G);let ge=()=>a(".deals-item",d),J=r(".deals-item--gift",d),he=()=>getComputedStyle(d).gridTemplateColumns.split(" ").filter(Boolean).length||1,Q=P=>P.classList.contains("deals-item--set")?Math.min(2,he()):1;function Y(P=fe){let k=he(),T=ge().filter(z=>z!==J&&(P==="all"||z.dataset.cat===P)).reduce((z,O)=>z+Q(O),0),j=(k-T%k)%k||k;return J.style.gridColumn=`span ${j}`,J.dataset.span=j,J.classList.toggle("is-wide",j>=2),j}Y();let ue=he();new ResizeObserver(()=>{let P=he();P!==ue&&(ue=P,Y())}).observe(d);let be=[];function Se(P){if(P===fe)return;fe=P,be.forEach(F=>F.cancel()),be=[],d.classList.add("is-in"),ge().forEach(F=>{F.style.position=F.style.left=F.style.top=F.style.width=F.style.height="",F.classList.remove("is-leaving"),F.dataset.leaving&&(F.hidden=!0,delete F.dataset.leaving)});let k=d.getBoundingClientRect(),se=k.height,T=new Map(ge().filter(F=>!F.hidden).map(F=>[F,F.getBoundingClientRect()])),j=J.dataset.span,z=F=>F===J||P==="all"||F.dataset.cat===P,O=[...T.keys()].filter(F=>!z(F)),xe=ge().filter(F=>F.hidden&&z(F));O.forEach(F=>{let Ae=T.get(F);Object.assign(F.style,{position:"absolute",left:`${Ae.left-k.left}px`,top:`${Ae.top-k.top}px`,width:`${Ae.width}px`,height:`${Ae.height}px`}),F.classList.add("is-leaving"),F.dataset.leaving="1"}),xe.forEach(F=>{F.hidden=!1});let Me=String(Y(P)),D=d.getBoundingClientRect().height;if(o){O.forEach(F=>{F.hidden=!0,F.style.position="",F.classList.remove("is-leaving"),delete F.dataset.leaving});return}O.forEach(F=>{let Ae=F.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(6px) scale(.965)",filter:"blur(2px)"}],{duration:300,easing:"cubic-bezier(.4,0,.6,1)",fill:"forwards"});be.push(Ae),Ae.onfinish=()=>{F.hidden=!0,Object.assign(F.style,{position:"",left:"",top:"",width:"",height:""}),F.classList.remove("is-leaving"),delete F.dataset.leaving,Ae.cancel()}});let $=0;ge().filter(F=>!F.hidden&&!F.dataset.leaving).forEach(F=>{let Ae=F.getBoundingClientRect(),Be=T.get(F);if(F===J&&j!==Me)be.push(F.animate([{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"none"}],{duration:640,delay:260,easing:c,fill:"backwards"}));else if(Be){let qe=Be.left-Ae.left,Ke=Be.top-Ae.top;Math.abs(qe)+Math.abs(Ke)>.5&&be.push(F.animate([{transform:`translate(${qe}px, ${Ke}px)`},{transform:"none"}],{duration:760,easing:c}))}else be.push(F.animate([{opacity:0,transform:"translateY(18px) scale(.985)"},{opacity:1,transform:"none"}],{duration:720,delay:160+$++*55,easing:c,fill:"backwards"}))}),Math.abs(D-se)>1&&be.push(d.animate([{height:`${se}px`},{height:`${D}px`}],{duration:640,easing:c}))}le.forEach(P=>P.addEventListener("click",()=>{le.forEach(se=>se.setAttribute("aria-pressed",String(se===P))),we(P),G.scrollWidth>G.clientWidth&&G.scrollTo({left:P.offsetLeft-(G.clientWidth-P.offsetWidth)/2,behavior:o?"auto":"smooth"}),Se(P.dataset.filter);let k=L[P.dataset.filter];f.textContent=`Viser ${k} ${k===1?"produkt":"produkter"}`})),G.addEventListener("keydown",P=>{let k=le.indexOf(document.activeElement);if(k<0)return;let se=P.key==="ArrowRight"?k+1:P.key==="ArrowLeft"?k-1:P.key==="Home"?0:P.key==="End"?le.length-1:-1;se<0&&P.key!=="ArrowLeft"||(P.preventDefault(),le[(se+le.length)%le.length].focus())});let Ce=new Map,De=0,ee=0;function I(P){let k=Math.min(.05,(P-ee)/1e3);ee=P;let se=1-Math.exp(-k*9),T=1-Math.exp(-k*7),j=!1;Ce.forEach((z,O)=>{z.rx+=(z.trx-z.rx)*se,z.ry+=(z.try-z.ry)*se,z.h+=(z.th-z.h)*T,z.mx+=(z.tmx-z.mx)*se,z.my+=(z.tmy-z.my)*se,O.style.transform=`perspective(1100px) rotateX(${z.rx.toFixed(3)}deg) rotateY(${z.ry.toFixed(3)}deg) translateY(${(-z.h*3).toFixed(2)}px)`,O.style.setProperty("--h",z.h.toFixed(4)),O.style.setProperty("--mx",`${(z.mx*100).toFixed(2)}%`),O.style.setProperty("--my",`${(z.my*100).toFixed(2)}%`),O.style.setProperty("--px",(z.ry/6).toFixed(4)),Math.abs(z.trx-z.rx)+Math.abs(z.try-z.ry)+Math.abs(z.th-z.h)>.002?j=!0:z.th===0&&(O.style.transform="",Ce.delete(O))}),De=j||Ce.size?requestAnimationFrame(I):0,j||(cancelAnimationFrame(De),De=0)}let Re=()=>{De||(ee=performance.now(),De=requestAnimationFrame(I))};function ae(P){let k=Ce.get(P);return k||(k={rx:0,ry:0,trx:0,try:0,h:0,th:0,mx:.5,my:.3,tmx:.5,tmy:.3},Ce.set(P,k)),k}l&&!h&&!o&&(d.addEventListener("pointermove",P=>{let k=P.target.closest(".deals-card");if(!k||P.pointerType!=="mouse")return;let se=k.getBoundingClientRect(),T=yr((P.clientX-se.left)/se.width,0,1),j=yr((P.clientY-se.top)/se.height,0,1),z=ae(k),O=k.classList.contains("deals-card--set")?.55:1;z.try=(T-.5)*7*O,z.trx=-(j-.5)*5*O,z.th=1,z.tmx=T,z.tmy=j,Re()}),d.addEventListener("pointerout",P=>{let k=P.target.closest(".deals-card");if(!k||k.contains(P.relatedTarget))return;let se=Ce.get(k);se&&(se.trx=0,se.try=0,se.th=0,se.tmx=.5,se.tmy=.3,Re())}));let re=new WeakMap;function ne(P,k){let se=P.getBoundingClientRect(),T=k&&k.clientX?k.clientX-se.left:se.width/2,j=k&&k.clientY?k.clientY-se.top:se.height/2;P.style.setProperty("--ix",`${T}px`),P.style.setProperty("--iy",`${j}px`),P.classList.remove("is-added"),P.offsetWidth,P.classList.add("is-added"),P.setAttribute("aria-label",P.getAttribute("aria-label").replace(/^Læg (.*) i kurv$/,"L\xE6g $1 i kurv \u2013 lagt i kurv")),clearTimeout(re.get(P)),re.set(P,setTimeout(()=>{P.classList.remove("is-added"),P.setAttribute("aria-label",P.getAttribute("aria-label").replace(" \u2013 lagt i kurv",""))},2600))}function ye(){let P=innerWidth,se=[...document.querySelectorAll("[data-cart]")].map(T=>T.querySelector(".hdr-cart__icon")||T).map(T=>T.getBoundingClientRect()).filter(T=>T.width>0&&T.bottom>0&&T.top<innerHeight&&T.left<P)[0];return se?{x:se.left+se.width/2,y:se.top+se.height/2,real:!0}:{x:P-36,y:30,real:!1}}let pe=(P,k,se,T,j)=>{let z=1-j;return z*z*z*P+3*z*z*j*k+3*z*j*j*se+j*j*j*T},A=P=>(P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2)*.82+(1-Math.pow(1-P,3))*.18,x=null,W=[],ie=0;function de(){x||(x=document.createElement("canvas"),x.className="deals-trail",x.setAttribute("aria-hidden","true"),i.appendChild(x))}function ve(P){let k=x,se=Math.min(devicePixelRatio||1,2);(k.width!==Math.round(innerWidth*se)||k.height!==Math.round(innerHeight*se))&&(k.width=Math.round(innerWidth*se),k.height=Math.round(innerHeight*se));let T=k.getContext("2d");T.setTransform(se,0,0,se,0,0),T.clearRect(0,0,innerWidth,innerHeight),T.lineCap="round",W=W.filter(j=>P-j.end<520*u||!j.done);for(let j of W){let z=j.pts,O=j.done?Math.max(0,1-(P-j.end)/(520*u)):1;for(let xe=1;xe<z.length;xe++){let Me=(P-z[xe].t)/(420*u);if(Me>1)continue;let D=(1-Me)*(1-Me)*O;T.strokeStyle=`rgba(128, 160, 151, ${(.38*D).toFixed(3)})`,T.lineWidth=1+9*D*z[xe].s,T.beginPath(),T.moveTo(z[xe-1].x,z[xe-1].y),T.lineTo(z[xe].x,z[xe].y),T.stroke()}for(let xe of j.drops){let Me=(P-xe.t)/(700*u);Me>1||Me<0||(T.fillStyle=`rgba(221, 191, 163, ${(.55*(1-Me)*O).toFixed(3)})`,T.beginPath(),T.arc(xe.x,xe.y+Me*10,xe.r*(1-Me*.6),0,Math.PI*2),T.fill())}}W.length?ie=requestAnimationFrame(ve):(ie=0,T.clearRect(0,0,innerWidth,innerHeight))}function He(P,k,se){let T=P&&P.querySelector(".deals-prod__pack");if(o||!T){se();return}let j=T.getBoundingClientRect();if(j.width<2){se();return}let z=T.cloneNode(!0);z.className="deals-fly"+(T.closest(".deals-prod--set")?" deals-prod--set":""),Object.assign(z.style,{left:`${j.left}px`,top:`${j.top}px`,width:`${j.width}px`,height:`${j.height}px`}),z.querySelector("img").loading="eager",i.appendChild(z);let O=document.createElement("span");O.className="deals-fly__drop",i.appendChild(O),de();let xe={pts:[],drops:[],done:!1,end:0};W.push(xe),ie||(ie=requestAnimationFrame(ve));let Me=j.left+j.width/2,D=j.top+j.height/2,$=ye(),F=Math.hypot($.x-Me,$.y-D),Ae=yr(620+F*.42,760,1150)*u,Be=Math.min(140,40+F*.12),qe=14,Ke=Me,et=Math.max(qe,D-Be-Math.max(0,D-$.y)*.35),tt=Me+($.x-Me)*.62,Rt=Math.max(qe,Math.min($.y,D)-Be*.55),wt=22/Math.max(j.width,j.height),lt=performance.now(),$e=.18,en=!1;function Kt(Ot){let Ut=yr((Ot-lt)/Ae,0,1),nn=A(Ut),oi=ye(),Gs=$.real?oi.x:$.x,E=$.real?oi.y:$.y,K=pe(Me,Ke,tt,Gs,nn),oe=pe(D,et,Rt,E,nn),ce=1+(wt-1)*Math.pow(nn,.8),Z=Math.sin(nn*Math.PI)*-7;z.style.transform=`translate(${(K-Me).toFixed(2)}px, ${(oe-D).toFixed(2)}px) scale(${ce.toFixed(4)}) rotate(${Z.toFixed(2)}deg)`,z.style.opacity=String(Ut<.82?1:1-(Ut-.82)/.18),O.style.transform=`translate(${(K-6).toFixed(2)}px, ${(oe-6).toFixed(2)}px) scale(${(.4+.6*Math.sin(nn*Math.PI)).toFixed(3)})`,O.style.opacity=String(Math.sin(Ut*Math.PI)*.9),xe.pts.push({x:K,y:oe,t:Ot,s:Math.max(.25,ce)}),xe.pts.length>60&&xe.pts.shift(),Ut>$e&&Ut<.8&&(xe.drops.push({x:K+(Math.random()-.5)*10,y:oe+(Math.random()-.5)*8,r:1.4+Math.random()*1.8,t:Ot}),$e+=.12+Math.random()*.08),Ut>=.93&&!en&&(en=!0,se()),Ut<1?requestAnimationFrame(Kt):(z.remove(),O.remove(),xe.done=!0,xe.end=Ot)}requestAnimationFrame(Kt)}function Pe(P,k,se,T){k&&ne(k,se);let j=!1;He(T,P,()=>{j||(j=!0,n.add(P.id,1),f.textContent=`${P.name} er lagt i kurven.`)})}d.addEventListener("click",P=>{let k=P.target.closest("[data-add]");if(k){let j=e.byId[k.dataset.add];Pe(j,k,P,k.closest(".deals-card").querySelector("[data-stage]"));return}let se=P.target.closest("[data-qv]");if(se){We(e.byId[se.dataset.qv],se);return}let T=P.target.closest("[data-stage]");if(T){let j=T.querySelector("[data-qv]");j&&We(e.byId[j.dataset.qv],j)}});let _e=document.createElement("dialog");_e.className="deals-qv",_e.setAttribute("aria-labelledby","deals-qv-title"),i.appendChild(_e);let je=null,Ee=null,Fe=!1;function Je(P){let k=`<ul class="deals-qv__usp">
      <li>${Gi.truck}Fri fragt over ${s(e.campaign.freeShipping)}</li>
      <li>${Gi.back}14 dages fortrydelsesret</li>
      <li>${Gi.leaf}Testet til under 0,2% THC</li>
    </ul>`;return`<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${Gi.close}</button>
      <div class="deals-qv__stage" data-stage>
        <span class="deals-qv__light" aria-hidden="true"></span>
        ${g(P,"deals-prod--qv"+(P.bundle?" deals-prod--qvset":""))}
        <span class="nc-bubble nc-bubble--sale deals-bubble deals-bubble--qv" aria-hidden="true">\u2212${P.pct}%</span>
        ${P.badge&&P.bundle?`<img class="deals-qv__badge" src="${e.asset(P.badge)}" alt="" width="64" height="64">`:""}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${Vt(P.bundle?`Sampakke \xB7 ${(P.contains||[]).length} produkter`:P.nickname?`${P.nickname} \xB7 ${P.eyebrow}`:P.eyebrow)}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${Vt(P.name)}</h2>
        <p class="deals-card__size">${Vt(P.bundle?(P.contains||[]).map(se=>uv[se]||e.byId[se]?.name).join(" \xB7 "):S(P))}</p>
        <p class="deals-qv__claim">${Vt(P.claim)}</p>
        ${P.notes?`<p class="deals-qv__notes">${Vt(P.notes)}</p>`:""}
        ${P.bundle?_(P):""}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${m(P,!0)}${p(P," nc-btn--lg")}</div>
        ${k}
      </div>
    </div>`}function We(P,k){P&&(Ee=P,je=k,Fe=!1,_e.innerHTML=Je(P),r("img",_e)&&(r("img",_e).loading="eager"),_e.showModal(),document.documentElement.classList.add("deals-lock"),o||(r(".deals-qv__sheet",_e).animate([{opacity:0,transform:"translateY(22px) scale(.985)"},{opacity:1,transform:"none"}],{duration:620,easing:c}),r(".deals-prod",_e).animate([{opacity:0,transform:"translate(-50%, 16px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:900,delay:90,easing:c,fill:"backwards"})),r("[data-qv-close]",_e).focus({preventScroll:!0}))}function Ue(P){if(!_e.open||Fe)return;Fe=!0;let k=()=>{_e.close(),Fe=!1,document.documentElement.classList.remove("deals-lock"),je&&!P&&je.focus({preventScroll:!0}),P&&P()};if(o)return k();_e.classList.add("is-closing");let se=r(".deals-qv__sheet",_e).animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(14px) scale(.99)"}],{duration:220,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});se.onfinish=()=>{_e.classList.remove("is-closing"),k()}}_e.addEventListener("cancel",P=>{P.preventDefault(),Ue()}),_e.addEventListener("click",P=>{if(P.target===_e||P.target.closest("[data-qv-close]"))return Ue();let k=P.target.closest("[data-add]");if(k&&Ee){let se=Ee;ne(k,P);let T=d.querySelector(`.deals-item[data-id="${se.id}"]`),j=T&&T.querySelector("[data-add]"),z=r(".deals-prod__pack",_e),O=z.getBoundingClientRect();setTimeout(()=>Ue(()=>{let xe=document.createElement("div");xe.style.cssText=`position:fixed;left:${O.left}px;top:${O.top}px;width:${O.width}px;height:${O.height}px;pointer-events:none`,xe.appendChild(z.cloneNode(!0)),i.appendChild(xe),j&&ne(j),Pe(se,null,null,xe),setTimeout(()=>xe.remove(),40),je&&je.focus({preventScroll:!0})}),o?0:380)}})}var Da=class extends cn{constructor(){super();let e=new ii;e.deleteAttribute("uv");let t=new En({side:Bt}),n=new En,s=new ba(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ze(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Ze(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Ze(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Ze(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Ze(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Ze(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new Ze(e,zs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Ze(e,zs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let v=new Ze(e,zs(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);let g=new Ze(e,zs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let m=new Ze(e,zs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Ze(e,zs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function zs(i){let e=new Ht;return e.color.setScalar(i),e}var In=15.5,$t=6.2,Hs=In-.75,Wi=(i,e,t)=>Math.min(t,Math.max(e,i)),Pn=(i,e,t)=>i+(e-i)*t,Gt=i=>new Qe(i);function dv(i=512){let e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=(()=>{let h=7;return()=>(h=h*16807%2147483647)/2147483647})(),r=h=>{let d=new Float32Array(h*h);for(let f=0;f<d.length;f++)d[f]=s();return d},a=[r(4),r(8),r(16),r(48)],o=(h,d,f,v)=>{let g=f*d,m=v*d,p=Math.floor(g),S=Math.floor(m),_=g-p,M=m-S,B=_*_*(3-2*_),w=M*M*(3-2*M),R=(U,b)=>h[(b%d+d)%d*d+(U%d+d)%d];return Pn(Pn(R(p,S),R(p+1,S),B),Pn(R(p,S+1),R(p+1,S+1),B),w)},l=[4,8,16,48],c=[.45,.28,.17,.1];for(let h=0;h<i;h++)for(let d=0;d<i;d++){let f=d/i,v=h/i,g=0;for(let _=0;_<4;_++)g+=c[_]*o(a[_],l[_],f,v);let m=s()*.06,p=.86+(g-.5)*.16+m-.03,S=(h*i+d)*4;n.data[S]=n.data[S+1]=n.data[S+2]=Wi(p,0,1)*255,n.data[S+3]=255}t.putImageData(n,0,0);for(let h=0;h<900;h++){let d=s()*i,f=s()*i,v=.4+s()*s()*1.6;t.fillStyle=`rgba(60,80,74,${.12+s()*.22})`,t.beginPath(),t.ellipse(d,f,v*(1+s()),v,s()*3,0,6.283),t.fill()}let u=new si(e);return u.colorSpace=Nt,u.wrapS=u.wrapT=Bi,u.anisotropy=4,u}function cu(i,e=128){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new si(t);return r.colorSpace=on,r}var fv=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,pv=`
  uniform sampler2D map; uniform vec2 uTexel;
  uniform float uOpacity, uDim, uExpo, uHover;
  uniform vec3 uTint, uRim;
  varying vec2 vUv;
  void main(){
    vec4 c = texture2D(map, vUv);
    float a = c.a * uOpacity;
    if (a < 0.003) discard;
    vec3 col = c.rgb;
    // soft key from the left: a gentle falloff across the pack (photo already carries its own form light)
    col *= mix(1.05, 0.93, smoothstep(0.0, 1.0, vUv.x));
    // rim: where the silhouette meets air on the light side, add a thin warm edge
    float edgeL = c.a * (1.0 - texture2D(map, vUv - vec2(uTexel.x * 3.0, 0.0)).a);
    float edgeT = c.a * (1.0 - texture2D(map, vUv + vec2(0.0, uTexel.y * 3.0)).a);
    col += uRim * (edgeL * 0.55 + edgeT * 0.35);
    // contact: a breath of occlusion right at the foot
    col *= mix(0.80, 1.0, smoothstep(0.0, 0.045, vUv.y));
    col *= uTint * uExpo * (1.0 + uHover * 0.05);
    // resting (other time of day): quieter, desaturated towards sage
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(col, vec3(l) * vec3(0.84, 0.97, 0.94), uDim * 0.55) * (1.0 - uDim * 0.42);
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }`,mv=`
  uniform vec3 uBase; uniform vec2 uSide, uDir; uniform float uW, uLen;
  varying vec2 vUv; varying vec2 vW;
  void main(){
    vUv = uv;
    float spread = 1.0 + uv.y * 0.18;                     // penumbra widens with distance
    vec3 p = vec3(uBase.x + uSide.x * (uv.x - 0.5) * uW * spread + uDir.x * uv.y * uLen, uBase.y,
             uBase.z + uSide.y * (uv.x - 0.5) * uW * spread + uDir.y * uv.y * uLen);
    vW = p.xz;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,gv=`
  uniform sampler2D map; uniform float uOpacity, uStrength, uCaustic, uRT;
  uniform vec3 uShadow, uAmber;
  varying vec2 vUv; varying vec2 vW;
  void main(){
    float v = vUv.y;
    vec2 uv = vec2(vUv.x, v);
    float sharp = texture2D(map, uv, 0.5).a;
    float soft = texture2D(map, uv, 3.0 + v * 4.0).a;
    float a = mix(sharp, soft, smoothstep(0.0, 0.32, v));
    a *= (1.0 - smoothstep(0.0, 1.0, v) * 0.72);
    a *= mix(1.25, 1.0, smoothstep(0.0, 0.06, v));        // contact
    float r = length(vW);
    a *= 1.0 - smoothstep(uRT - 0.9, uRT - 0.05, r);       // stays on the plinth top
    a *= uStrength * uOpacity;
    // amber glass: light passes through and leaves a warm, lighter patch inside the shadow
    float ca = uCaustic * soft * smoothstep(0.06, 0.22, v) * (1.0 - smoothstep(0.3, 0.75, v));
    vec3 col = mix(uShadow, uAmber, clamp(ca * 1.6, 0.0, 1.0));
    a *= 1.0 - ca * 0.55;
    if (a < 0.002) discard;
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }`;function hu({canvas:i,items:e,reduced:t=!1,onFrame:n,onHover:s}){let r=new On({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setPixelRatio(Mn()),r.outputColorSpace=Nt,r.toneMapping=Ol,r.toneMappingExposure=1,r.setClearColor(0,0);let a=new cn,o=new bi(r),l=new Da;a.environment=o.fromScene(l,.04).texture,a.environmentIntensity=.32,o.dispose(),l.traverse(k=>{k.isMesh&&(k.geometry.dispose(),k.material.dispose&&k.material.dispose())});let c=new Tt(22,1,1,600),u=new Ma(Gt("#f4efe4"),Gt("#28403b"),.9);a.add(u);let h=new wi(Gt("#fff3e6"),2.2);a.add(h),a.add(h.target);let d=new _a(Gt("#fff1de"),0,0,.42,1,2);d.position.set(-10,62,26),d.target.position.set(0,$t,-2),a.add(d),a.add(d.target);let f=dv(),v=f.clone();v.needsUpdate=!0,v.repeat.set(7,.55);let g=f.clone();g.needsUpdate=!0,g.repeat.set(1.6,1.6);let m=Gt("#a3bab3"),p=new En({color:m.clone().multiplyScalar(.84),map:v,bumpMap:v,bumpScale:.6,roughness:.9,metalness:0}),S=new En({color:m,map:g,bumpMap:g,bumpScale:.35,roughness:.84,metalness:0}),_=[[In-.45,0],[In-.12,.08],[In,.4],[In,$t-.75]];for(let k=1;k<=8;k++){let se=k/8*Math.PI/2;_.push([Hs+.75*Math.cos(se),$t-.75+.75*Math.sin(se)])}let M=new Ze(new Ss(_.map(([k,se])=>new Ne(k,se)),160),p);M.rotation.y=.4;let B=new Ze(new ma(Hs+.02,160),S);B.rotation.x=-Math.PI/2,B.position.y=$t;let w=new Yt;w.add(M,B),a.add(w);let R=cu([[0,1],[.45,.62],[.75,.22],[1,0]]),U=k=>new Ht({color:Gt("#0f1b18"),alphaMap:R,transparent:!0,opacity:k,depthWrite:!1,toneMapped:!1}),b=new Ze(new jt(1,1),U(.5));b.rotation.x=-Math.PI/2,b.scale.set(In*2.7,In*1.7,1),b.position.set(0,.02,0),b.renderOrder=1;let y=new Ze(new jt(1,1),U(.22));y.rotation.x=-Math.PI/2,y.scale.set(In*3.6,In*2.2,1),y.renderOrder=1,a.add(b,y);let L=new ya,q=cu([[0,1],[.25,.75],[.55,.28],[.8,.07],[1,0]],64),X=[],te=e.map((k,se)=>{let T={...k,idx:se,loaded:0,w:k.h*k.aspect,x:0,z:0,y:6,vx:0,vz:0,vy:0,op:0,dim:0,lean:0,hover:0,tx:0,tz:0,ty:0,top:0,tdim:0,on:!1,mask:null},j={map:{value:null},uTexel:{value:new Ne(1/256,1/1024)},uOpacity:{value:0},uDim:{value:0},uExpo:{value:1},uHover:{value:0},uTint:{value:new Qe(1,1,1)},uRim:{value:new Qe(0,0,0)}},z=new mt({uniforms:j,vertexShader:fv,fragmentShader:pv,transparent:!0,depthWrite:!1,toneMapped:!1}),O=new jt(T.w,k.h);O.translate(0,k.h/2,0);let xe=new Ze(O,z);xe.renderOrder=3,xe.userData.p=T;let Me=new Yt;Me.add(xe);let D=new Yt;D.add(Me);let $=new Yt;$.add(D),$.visible=!1,a.add($);let F={map:{value:null},uBase:{value:new H},uSide:{value:new Ne(1,0)},uDir:{value:new Ne(.5,-.8)},uW:{value:T.w},uLen:{value:k.h},uOpacity:{value:0},uStrength:{value:.55},uCaustic:{value:k.amber?.2:0},uRT:{value:Hs},uShadow:{value:Gt("#1a2c28")},uAmber:{value:Gt("#c98a3c")}},Ae=new mt({uniforms:F,vertexShader:mv,fragmentShader:gv,transparent:!0,depthWrite:!1,toneMapped:!1}),Be=new Ze(new jt(1,1,1,1),Ae);Be.frustumCulled=!1,Be.renderOrder=2,Be.visible=!1,a.add(Be);let qe=new Ze(new jt(1,1),new Ht({color:Gt("#13221f"),alphaMap:q,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return qe.rotation.x=-Math.PI/2,qe.renderOrder=2,qe.visible=!1,a.add(qe),Object.assign(T,{mesh:xe,leanNode:Me,yaw:D,root:$,mat:z,sMesh:Be,sU:F,ao:qe}),X.push(xe),L.load(k.src,Ke=>{Ke.colorSpace=Nt,Ke.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),Ke.minFilter=jn,j.map.value=Ke,F.map.value=Ke,j.uTexel.value.set(1/Ke.image.width,1/Ke.image.height);try{let tt=Math.round(24/k.aspect),Rt=document.createElement("canvas");Rt.width=24,Rt.height=tt;let wt=Rt.getContext("2d");wt.drawImage(Ke.image,0,0,24,tt);let lt=wt.getImageData(0,0,24,tt).data;T.mask={mw:24,mh:tt,a:($e,en)=>lt[(Math.min(tt-1,Math.floor((1-en)*tt))*24+Math.min(23,Math.floor($e*24)))*4+3]}}catch{}T.loaded=1,_e()}),T}),V=Object.fromEntries(te.map(k=>[k.key,k])),C=1,G=1,N=!1,le=0,fe=0,we=0,Le=0,ge={yaw:0,pitch:0,ty:0,tp:0},J=null,he=null,Q=new H,Y=100,ue=.2;function be(k,se){let T=te.filter(F=>k.has(F.key)),j=T.filter(F=>F.when.includes(se)),z=T.filter(F=>!F.when.includes(se)),O=2,xe=j.reduce((F,Ae)=>F+Ae.w,0)+O*Math.max(0,j.length-1),Me=-xe/2;j.forEach((F,Ae)=>{F.tx=Me+F.w/2,Me+=F.w+O,F.tz=4.2-.014*F.tx*F.tx+(Ae%2?-.9:.3),F.tdim=0,F.on=!0});let D=1,$={1:xe/2-.6,"-1":xe/2-.6};z.forEach((F,Ae)=>{if(!j.length)F.tx=(Ae-(z.length-1)/2)*5.4,F.tz=-2;else{let Be=$[D]+F.w/2;F.tx=Wi(D*Be,-11.5,11.5),$[D]=Be+F.w/2+1.4,F.tz=-6.4-(Ae>1?1.5:0),D=-D}F.tdim=1,F.on=!0}),te.forEach(F=>{k.has(F.key)?(!F.root.visible||F.op<.02)&&(F.x=F.tx+(F.tx>=0?1.2:-1.2),F.z=F.tz-3.2,F.y=6.5,F.vx=F.vz=F.vy=0,F.op=0,F.dim=F.tdim):F.on&&(F.on=!1)}),_e()}function Se(){let k=C/G;c.aspect=k;let se=Rn.degToRad(c.fov),T=2*Math.atan(Math.tan(se/2)*k);ue=N?.25:.23;let j=N?.36:.33,z=N?.8:.78,O=new H,xe=new H,Me=120,D=$t+6;c.updateProjectionMatrix();for(let F=0;F<40;F++){Q.set(0,D,0),c.position.set(0,D+Math.sin(ue)*Me,Math.cos(ue)*Me),c.lookAt(Q),c.updateMatrixWorld();let Ae=(1-O.set(0,$t+14.5,0).project(c).y)/2,Be=(1-xe.set(0,$t,Hs).project(c).y)/2;Me*=Wi((Be-Ae)/(z-j),.7,1.4),D-=((Ae+Be)/2-(j+z)/2)*30}let $=(N?13.5:17)/Math.tan(T/2)+Hs*.3;Me=Math.max(Me,$),Y=Me,Q.set(0,D,0)}function Ce(){let k=i.parentElement.getBoundingClientRect();C=Math.max(1,Math.round(k.width)),G=Math.max(1,Math.round(k.height)),N=C<560,r.setPixelRatio(Mn()),r.setSize(C,G,!1),Se(),_e()}let De=30,ee=.86,I=2*Math.sqrt(De)*ee,Re=new H,ae=new Ne,re=new Ne,ne=new H;function ye(k){let se=!1,T=t?6:1,j=1-Math.exp(-k*2.6*T);le+=(fe-le)*j,Math.abs(fe-le)>.001?se=!0:le=fe,we+=(Le-we)*(1-Math.exp(-k*2.2*T)),Math.abs(Le-we)>.002?se=!0:we=Le;let z=1-Math.exp(-k*3.2);ge.yaw+=(ge.ty-ge.yaw)*z,ge.pitch+=(ge.tp-ge.pitch)*z,Math.abs(ge.ty-ge.yaw)+Math.abs(ge.tp-ge.pitch)>4e-4&&(se=!0);for(let O of te){if(!O.loaded)continue;let xe=O.on?0:4.2,Me=O.on?O.tz:O.tz-4.5,D=O.on?1:0;if(t)O.x=O.tx,O.z=Me,O.y=O.on?0:xe,O.vx=O.vz=O.vy=0;else{let qe=De*(O.tx-O.x)-I*O.vx,Ke=De*(Me-O.z)-I*O.vz,et=22,tt=2*Math.sqrt(et)*1,Rt=et*((O.on?0:xe)-O.y)-tt*O.vy;O.vx+=qe*k,O.vz+=Ke*k,O.vy+=Rt*k,O.x+=O.vx*k,O.z+=O.vz*k,O.y+=O.vy*k,O.y<0&&(O.y=0,O.vy=0)}let $=1-Math.exp(-k*(O.on?5.5:7)*T);O.op+=(D-O.op)*$,O.dim+=(O.tdim-O.dim)*(1-Math.exp(-k*3.5*T));let F=(J===O||he===O.key)&&O.on?1:0;O.hover+=(F-O.hover)*(1-Math.exp(-k*8));let Ae=t?0:Wi(O.vx*.012,-.07,.07);O.lean+=(Ae-O.lean)*(1-Math.exp(-k*9)),Math.abs(O.tx-O.x)+Math.abs(Me-O.z)+Math.abs(O.vx)+Math.abs(O.vz)+Math.abs(O.vy)+Math.abs(O.y-(O.on?0:xe))*.2+Math.abs(D-O.op)+Math.abs(O.tdim-O.dim)+Math.abs(F-O.hover)+Math.abs(O.lean)>.004?se=!0:(O.x=O.tx,O.z=Me,O.op=D,O.dim=O.tdim,O.hover=F,O.lean=0,O.vx=O.vz=O.vy=0)}return se}function pe(){let k=le,se=Pn(.98,.62,k),T=Pn(-.62,-.95,k);ne.set(Math.sin(T),Math.sin(se),Math.cos(T)*Math.cos(se)).normalize(),h.position.copy(ne).multiplyScalar(60),h.target.position.set(0,$t,0),h.color.copy(Gt("#fff5ea")).lerp(Gt("#ffdcb8"),k),h.intensity=Pn(2.25,1.85,k)+we*.25,u.intensity=Pn(.95,.74,k),u.color.copy(Gt("#f2f1ea")).lerp(Gt("#efe2d0"),k),d.color.copy(Gt("#fff4e6")).lerp(Gt("#ffe0bd"),k),d.intensity=2600*(.55+.45*k)+we*2200,a.environmentIntensity=Pn(.36,.24,k);let j=Math.hypot(ne.x,ne.z);re.set(-ne.x/j,-ne.z/j);let z=Wi(j/ne.y,.35,1.6),O=new Qe(1,1,1).lerp(new Qe(1.035,.955,.86),k),xe=Gt("#fff1dc").multiplyScalar(Pn(.12,.2,k)).lerp(Gt("#ffb766").multiplyScalar(.22),k),Me=Pn(.78,.66,k);y.position.set(re.x*In*.55*z,.01,re.y*In*.55*z),y.rotation.z=-Math.atan2(re.y,re.x);let D=ge.yaw,$=ue+ge.pitch;c.position.set(Math.sin(D)*Math.cos($)*Y,Q.y+Math.sin($)*Y,Math.cos(D)*Math.cos($)*Y),c.lookAt(Q),c.updateMatrixWorld();for(let F of te){let Ae=F.loaded&&F.op>.004;if(F.root.visible=Ae,F.sMesh.visible=Ae,F.ao.visible=Ae,!Ae)continue;let Be=F.y+F.hover*.5;F.root.position.set(F.x,$t+Be,F.z);let qe=Math.atan2(c.position.x-F.x,c.position.z-F.z);F.yaw.rotation.y=qe,F.leanNode.rotation.z=F.lean;let Ke=F.mat.uniforms;Ke.uOpacity.value=F.op,Ke.uDim.value=F.dim,Ke.uHover.value=F.hover,Ke.uTint.value.copy(O),Ke.uExpo.value=Pn(1.02,.95,k)*(1+we*.04),Ke.uRim.value.copy(xe),ae.set(Math.cos(qe),-Math.sin(qe));let et=F.sU,tt=1/(1+Be*.35);et.uBase.value.set(F.x+re.x*Be*z,$t+.03,F.z+re.y*Be*z),et.uSide.value.copy(ae),et.uDir.value.copy(re),et.uLen.value=F.h*z,et.uW.value=F.w,et.uOpacity.value=F.op*tt*(1-F.dim*.35),et.uStrength.value=Me,F.ao.position.set(F.x,$t+.025,F.z+.05),F.ao.scale.set(F.w*1.5*(1+Be*.1),F.w*.75*(1+Be*.1),1),F.ao.material.opacity=.42*F.op*tt*tt}}let A=[];function x(){A.length=0;for(let T of te){if(!T.loaded)continue;let j=T.y+T.hover*.5;Re.set(T.x,$t+j+T.h*.985,T.z).project(c);let z=(Re.x*.5+.5)*C,O=(-Re.y*.5+.5)*G;Re.set(T.x,$t+j,T.z).project(c),A.push({key:T.key,x:z,y:O,by:(-Re.y*.5+.5)*G,op:T.op,active:T.on&&T.tdim<.5,dim:T.dim,hover:T.hover})}Re.set(0,$t,Hs).project(c);let k=(-Re.y*.5+.5)*G;Re.set(0,$t+15,0).project(c);let se=(-Re.y*.5+.5)*G;return{items:A,lip:k,ceil:se,W:C,H:G}}function W(){pe(),r.render(a,c),n&&n(x())}let ie=0,de=0,ve=!0,He=!0;function Pe(k){if(ie=0,!ve)return;let se=Math.min(.05,de?(k-de)/1e3:.016);de=k;let T=ye(se);(T||He)&&(W(),He=!1),T?ie=requestAnimationFrame(Pe):de=0}function _e(){He=!0,!ie&&ve&&(ie=requestAnimationFrame(Pe))}let je=new Ts,Ee=new Ne;function Fe(k,se){let T=i.getBoundingClientRect();Ee.set((k-T.left)/T.width*2-1,-((se-T.top)/T.height)*2+1),je.setFromCamera(Ee,c);let j=je.intersectObjects(X,!1);for(let z of j){let O=z.object.userData.p;if(!(O.op<.5||!O.on)&&!(O.mask&&z.uv&&O.mask.a(z.uv.x,z.uv.y)<60))return O}return null}function Je(k){let se=i.getBoundingClientRect();if(!t&&k.pointerType!=="touch"){let j=(k.clientX-se.left)/se.width*2-1,z=(k.clientY-se.top)/se.height*2-1;ge.ty=Wi(j,-1,1)*.07,ge.tp=Wi(z,-1,1)*.025}let T=k.pointerType==="touch"?null:Fe(k.clientX,k.clientY);T!==J&&(J=T,i.style.cursor=T?"pointer":"",s&&s(T?T.key:null)),_e()}function We(){ge.ty=0,ge.tp=0,J&&(J=null,s&&s(null)),i.style.cursor="",_e()}let Ue=i.parentElement;Ue.addEventListener("pointermove",Je),Ue.addEventListener("pointerleave",We);let P=new ResizeObserver(Ce);return P.observe(Ue),Ce(),{setSelection(k,se){fe=se==="aften"?1:0,be(k,se)},setSpot(k){Le=k?1:0,_e()},setHover(k){he=k,_e()},pickAt:Fe,setVisible(k){ve=k,k&&_e()},snap(){for(let k of te)k.x=k.tx,k.z=k.tz,k.y=0,k.op=k.on?1:0,k.dim=k.tdim;le=fe,we=Le,_e()},dispose(){cancelAnimationFrame(ie),P.disconnect(),Ue.removeEventListener("pointermove",Je),Ue.removeEventListener("pointerleave",We),r.dispose()}}}var uu="../src/sections/routine/img/",Vs=[{key:"rens",id:"cleansing-gel",label:"Rens",short:"CBD Rensegel",h:12.9,aspect:.3445,amber:!0,when:["morgen","aften"]},{key:"serum",id:"serum",label:"Serum",short:"Hyaluronic Serum",h:9.5,aspect:.32,amber:!0,when:["morgen","aften"]},{key:"dag",id:"day-cream",label:"Dag",short:"CBD Dagcreme",h:14.5,aspect:.2182,amber:!1,when:["morgen"]},{key:"nat",id:"night-cream",label:"Nat",short:"CBD Natcreme",h:14.5,aspect:.2209,amber:!1,when:["aften"]},{key:"olie",id:"skin-oil",label:"Olie",short:"Vidunder Olien",h:9.5,aspect:.3235,amber:!0,when:["aften"]}],ri=Object.fromEntries(Vs.map(i=>[i.key,i])),Ua=[{id:"komplet-pakken",covers:["rens","dag","nat","olie"]},{id:"all-day-facial",covers:["rens","dag","nat"]}],vv={morgen:"Let og beskyttende \u2013 klar til dagen.",aften:"N\xE6rende og roligt \u2013 huden plejes, mens du sover."},tc=i=>i.length<2?i.join(""):`${i.slice(0,-1).join(", ")} og ${i[i.length-1]}`;function xv(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function nc(i,e){let{byId:t,fmt:n,campaign:s}=e,r=C=>i.querySelector(C),a=C=>[...i.querySelectorAll(C)],o=r(".routine-stage"),l=r(".routine-canvas"),c=r(".routine-lines"),u=r(".routine-tags"),h={sel:new Set(["rens","serum","dag","nat"]),mode:"morgen",hover:null},d=new URLSearchParams(location.search);d.get("routine")&&(h.sel=new Set(d.get("routine").split(",").filter(C=>ri[C]))),d.get("mode")==="aften"&&(h.mode="aften"),a(".routine-step").forEach(C=>{let G=t[ri[C.dataset.key].id];C.querySelector("[data-now]").textContent=n.kr(G.price),C.querySelector("[data-was]").textContent=n.kr(G.price0),C.setAttribute("aria-label",`${ri[C.dataset.key].label}: ${G.name}, ${n.kr(G.price)}, f\xF8rpris ${n.kr(G.price0)}`)});let f=t["komplet-pakken"];r("[data-kp-price]").textContent=n.kr(f.price),r("[data-kp-was]").textContent=n.kr(f.price0),r("[data-spot-price]").textContent=n.kr(f.price),r("[data-spot-was]").textContent=`F\xF8rpris ${n.kr(f.price0)}`;function v(C){let G=Vs.map(fe=>fe.key).filter(fe=>C.has(fe)),N=fe=>{let we=fe?G.filter(he=>!fe.covers.includes(he)):G,Le=[...fe?[{id:fe.id,covers:fe.covers}]:[],...we.map(he=>({id:ri[he].id,covers:[he]}))],ge=Le.reduce((he,Q)=>he+t[Q.id].price,0),J=Le.reduce((he,Q)=>he+t[Q.id].price0,0);return{lines:Le,total:ge,was:J,bundle:fe?fe.id:null}},le=N(null);for(let fe of Ua)if(fe.covers.every(we=>C.has(we))){let we=N(fe);we.total<le.total&&(le=we)}return le}let g=null,m={},p={};Vs.forEach(C=>{let G=document.createElement("div");G.className="routine-tag",G.dataset.key=C.key,G.innerHTML=`<span class="routine-tag__n"></span><span class="routine-tag__t"><b>${C.label}</b><small>${C.short}</small></span>`,u.appendChild(G),m[C.key]=G;let N=document.createElementNS("http://www.w3.org/2000/svg","path");N.setAttribute("class","routine-line"),c.appendChild(N),p[C.key]=N;let le=document.createElementNS("http://www.w3.org/2000/svg","circle");le.setAttribute("class","routine-line__dot"),le.setAttribute("r","2.5"),c.appendChild(le),p[C.key+":dot"]=le});function S(){return Vs.filter(C=>h.sel.has(C.key)&&C.when.includes(h.mode)).map(C=>C.key)}function _(C){c.setAttribute("viewBox",`0 0 ${C.W} ${C.H}`);let G=C.W<560,N=C.items.filter(Q=>Q.active&&Q.op>.02).sort((Q,Y)=>Q.x-Y.x),le=S(),fe=G?40:54,we=G?30:46,Le=Math.min(...N.map(Q=>Q.y),C.ceil+40),ge=N.length>2||G,J=Math.max((G?74:104)+(ge?fe:0),Le-we),he=G?30:64;C.items.forEach(Q=>{let Y=m[Q.key],ue=p[Q.key],be=p[Q.key+":dot"];if(!(Q.active&&Q.op>.02)){Y.style.opacity="0",ue.style.opacity="0",be.style.opacity="0",Y.classList.remove("is-on");return}let Ce=N.indexOf(Q),De=ge?Ce%2:0,ee=J-De*fe,I=Y.offsetWidth||120,Re=Math.min(Math.max(Q.x,I/2+he*.25),C.W-I/2-he*.25);Y.style.transform=`translate3d(${(Re-I/2).toFixed(1)}px, ${(ee-Y.offsetHeight).toFixed(1)}px, 0)`;let ae=Math.max(0,Math.min(1,(Q.op-.35)/.65));Y.style.opacity=ae.toFixed(3),ue.style.opacity=(ae*.9).toFixed(3),be.style.opacity=ae.toFixed(3),Y.classList.toggle("is-on",!0),Y.classList.toggle("is-hover",Q.hover>.5),Y.querySelector(".routine-tag__n").textContent=String(le.indexOf(Q.key)+1);let re=ee+8,ne=Q.y-8;ue.setAttribute("d",`M${Re.toFixed(1)} ${re.toFixed(1)} L${Re.toFixed(1)} ${(re+6).toFixed(1)} L${Q.x.toFixed(1)} ${Math.max(re+6,ne-10).toFixed(1)} L${Q.x.toFixed(1)} ${ne.toFixed(1)}`),be.setAttribute("cx",Q.x.toFixed(1)),be.setAttribute("cy",(ne+3).toFixed(1))})}function M(C){h.hover=C,a(".routine-step").forEach(G=>G.classList.toggle("is-linked",G.dataset.key===C))}if(xv()&&!/[?&]routine3d=off\b/.test(location.search))try{g=hu({canvas:l,reduced:e.prefersReducedMotion,onFrame:_,onHover:M,items:Vs.map(G=>({...G,src:uu+G.key+".webp"}))});let C=hi(o,G=>g&&g.setVisible(G));g.setVisible(C()||!0),g.setSelection(h.sel,h.mode),g.setSpot(v(h.sel).bundle==="komplet-pakken"),i.classList.add("is-gl")}catch(C){console.warn("[routine] WebGL unavailable, using static stage",C),w()}else w();function w(){i.classList.add("is-static"),g=null,R()}function R(){if(!i.classList.contains("is-static"))return;let C=r(".routine-fallback__row"),G=S();C.innerHTML=G.map((N,le)=>`<figure style="--h:${ri[N].h}"><span class="routine-fallback__n">${le+1}</span><img src="${uu+N}.webp" alt=""></figure>`).join("")}let U=a(".routine-step");U.forEach(C=>{C.addEventListener("click",()=>{let G=C.dataset.key;h.sel.has(G)?h.sel.delete(G):h.sel.add(G),V()}),C.addEventListener("pointerenter",()=>g&&g.setHover(C.dataset.key)),C.addEventListener("pointerleave",()=>g&&g.setHover(null)),C.addEventListener("focus",()=>g&&g.setHover(C.dataset.key)),C.addEventListener("blur",()=>g&&g.setHover(null))});let b=a(".routine-mode__btn");b.forEach(C=>C.addEventListener("click",()=>{h.mode=C.dataset.mode,V()})),r(".routine-mode").addEventListener("keydown",C=>{["ArrowLeft","ArrowRight"].includes(C.key)&&(C.preventDefault(),h.mode=h.mode==="morgen"?"aften":"morgen",V(),i.querySelector(`.routine-mode__btn[data-mode="${h.mode}"]`).focus())}),r("[data-bundle-btn]").addEventListener("click",()=>{Ua[0].covers.forEach(C=>h.sel.add(C)),V()});let y=r("[data-cta]"),L=0;y.addEventListener("click",()=>{let C=v(h.sel);C.lines.length&&(C.lines.forEach(G=>e.store.add(G.id,1)),y.classList.add("is-added"),clearTimeout(L),L=setTimeout(()=>y.classList.remove("is-added"),2400),setTimeout(()=>e.store.openCart(),650))});let q=null,X=0;function te(C){let G=r("[data-total]");if(q===null||e.prefersReducedMotion){q=C,G.textContent=n.kr(C);return}let N=q,le=performance.now(),fe=520;cancelAnimationFrame(X);let we=Le=>{let ge=Math.min(1,(Le-le)/fe),J=1-Math.pow(1-ge,3);q=N+(C-N)*J,G.textContent=n.kr(q),ge<1?X=requestAnimationFrame(we):q=C};X=requestAnimationFrame(we)}function V(){let C=h.sel;i.dataset.mode=h.mode,b.forEach(Ce=>Ce.setAttribute("aria-pressed",String(Ce.dataset.mode===h.mode)));let G=S();U.forEach(Ce=>{let De=Ce.dataset.key,ee=C.has(De);Ce.setAttribute("aria-pressed",String(ee));let I=G.indexOf(De);Ce.querySelector("[data-n]").textContent=ee&&I>=0?`${I+1} \xB7 `:"",Ce.classList.toggle("is-resting",ee&&I<0)}),r("[data-count]").textContent=C.size?`${C.size} af ${Vs.length} valgt`:"Ingen trin valgt";let N=v(C);te(N.total),r("[data-cta-sum]").textContent=N.total?n.kr(N.total):"",r("[data-was-total]").textContent=N.total?`F\xF8rpris ${n.kr(N.was)}`:"V\xE6lg mindst \xE9t trin";let le=N.was-N.total;r("[data-save]").textContent=le>0?`Du sparer ${n.kr(le)}`:"";let fe=r("[data-bundle-note]");if(N.bundle){let Ce=t[N.bundle];fe.hidden=!1,fe.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 8.4l2.6 2.5L12 5.4"/></svg><span><b>${Ce.name}</b>-prisen er brugt for ${tc(Ua.find(De=>De.id===N.bundle).covers.map(De=>ri[De].label))}.</span>`}else fe.hidden=!0;i.classList.toggle("is-empty",!N.total),y.disabled=!N.total,r(".routine-cta__label").textContent=N.total?"L\xE6g rutinen i kurv":"V\xE6lg mindst \xE9t trin",y.setAttribute("aria-label",N.total?`L\xE6g rutinen i kurv \u2013 ${n.kr(N.total)}`:"V\xE6lg mindst \xE9t trin");let we=s.freeShipping,Le=s.giftThreshold,ge=800,J=r("[data-meter]");J.style.setProperty("--fill",Math.min(1,N.total/ge).toFixed(4)),J.style.setProperty("--ship",(we/ge).toFixed(4)),J.style.setProperty("--gift",(Le/ge).toFixed(4)),J.classList.toggle("has-ship",N.total>=we),J.classList.toggle("has-gift",N.total>=Le);let he=r("[data-meter-status]");N.total>=Le?he.innerHTML="<b>Fri fragt</b> og <b>gratis CBD Lip Balm</b> (v\xE6rdi 79 kr.) f\xF8lger med.":N.total>=we?he.innerHTML=`<b>Fri fragt</b> er med. Mangler ${n.kr(Le-N.total)} til gratis CBD Lip Balm (v\xE6rdi 79 kr.).`:N.total>0?he.innerHTML=`Mangler ${n.kr(we-N.total)} til fri fragt og ${n.kr(Le-N.total)} til gratis CBD Lip Balm.`:he.textContent=`Fri fragt over ${n.kr(we)} \u2013 og gratis CBD Lip Balm (v\xE6rdi 79 kr.) ved k\xF8b over ${n.kr(Le)}`;let Q=r("[data-bundle]"),Y=r("[data-bundle-text]"),ue=r("[data-bundle-btn]"),be=N.bundle==="komplet-pakken";if(Q.classList.toggle("is-active",be),be)Y.textContent="Rens, Dag, Nat og Olie er samlet i Komplet Pakken \u2013 og prisen er trukket fra.",ue.hidden=!0;else{let Ce=Ua[0].covers.filter(ae=>!C.has(ae)),De=new Set([...C,...Ce]),ee=v(De).total-N.total,Re=Ce.reduce((ae,re)=>ae+t[ri[re].id].price,0)-ee;!C.size||Ce.length===4?(Y.textContent=`Rens, Dag, Nat og Olie samlet for ${n.kr(f.price)} \u2013 ${n.kr(t["cleansing-gel"].price+t["day-cream"].price+t["night-cream"].price+t["skin-oil"].price-f.price)} mindre end enkeltvis.`,ue.textContent="V\xE6lg Komplet Pakken"):(Y.textContent=`Tilf\xF8j ${tc(Ce.map(ae=>ri[ae].label))} for kun ${n.kr(ee)} mere \u2013 s\xE5 f\xE5r du hele Komplet Pakken${Re>0?` og sparer ${n.kr(Re)} ekstra`:""}.`,ue.textContent=`Tilf\xF8j ${tc(Ce.map(ae=>ri[ae].label))}`),ue.hidden=!1}r("[data-caption]").textContent=vv[h.mode];let Se=r("[data-empty]");Se.hidden=!!C.size&&G.length>0,Se.textContent=C.size?`Ingen af dine valgte trin bruges om ${h.mode==="morgen"?"morgenen":"aftenen"}.`:"V\xE6lg et trin \u2013 s\xE5 stiller vi det frem.",r(".routine-spot").hidden=!be,g&&(g.setSelection(C,h.mode),g.setSpot(be)),R()}V()}var du=i=>{let e=parseInt(i.replace("#",""),16);return new H((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)},ic=[[0,.02,.28],[-1.04,.6,-.18],[.96,.84,-.4],[1.06,-.44,.12],[-.9,-.72,.34],[.14,-1.18,-.46],[-.22,1.2,.02]],yv=1.9,fu=28,pu=10,Mv=`
uniform float uTime; uniform float uSeed; uniform float uWob; uniform vec3 uVel;
varying vec3 vN; varying vec3 vW;
void main() {
  vec3 p = position; vec3 n = normal;
  // slow viscous surface wobble
  float w = sin(p.x * 2.6 + uTime * .62 + uSeed) * sin(p.y * 2.3 + uTime * .5 + uSeed * 1.7) * sin(p.z * 2.1 + uTime * .74 + uSeed * .6);
  p += n * w * .045 * uWob;
  // squash/stretch along the velocity (mesh is never rotated, so object space == world orientation)
  float sp = length(uVel);
  if (sp > 1e-4) { vec3 d = uVel / sp; float k = clamp(sp * .09, 0., .16); float a = dot(p, d); p += d * a * k - (p - d * a) * k * .5; }
  vec4 wp = modelMatrix * vec4(p, 1.);
  vW = wp.xyz; vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,_v=`
uniform vec3 uTint; uniform vec3 uDeep; uniform float uDim; uniform float uFocus; uniform float uAlpha; uniform float uTime;
varying vec3 vN; varying vec3 vW;
const vec3 KEY = vec3(-.52, .63, .58);     // soft evening window, upper left
const vec3 WARM = vec3(.82, .1, -.56);      // warm low sun behind right
vec3 env(vec3 r) {
  vec3 top = vec3(1., .995, .975), hor = vec3(.955, .955, .93), bot = vec3(.56, .65, .61);
  vec3 c = r.y > 0. ? mix(hor, top, smoothstep(0., .7, r.y)) : mix(hor, bot, smoothstep(0., -.55, r.y));
  float d = dot(r, normalize(KEY));
  c += vec3(1., .98, .94) * smoothstep(.9, .968, d) * .85;          // window
  c += vec3(.99, .86, .7) * smoothstep(.72, .95, dot(r, normalize(WARM))) * .4;
  return c;
}
void main() {
  vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0., 1.);
  float rim = 1. - ndv;
  float fres = pow(rim, 2.4);
  vec3 R = reflect(-V, N);
  vec3 E = env(R);
  // body: thin & clear in the middle, denser oil colour towards the silhouette
  float edge = smoothstep(.1, 1., rim);
  vec3 body = mix(uTint, uDeep, edge * .8);
  // focused caustic: light gathered on the lower right inside the drop
  float caus = pow(max(dot(N, normalize(vec3(.42, -.52, .74))), 0.), 4.5);
  body = mix(body, vec3(1., .985, .94), caus * .62);
  vec3 col = mix(body, E, fres * .8);
  // fine dark meniscus just inside the rim \u2013 defines the drop on a pale ground
  float men = smoothstep(.78, .95, rim) * (1. - smoothstep(.95, 1., rim));
  col = mix(col, uDeep * .72, men * .32 * (1. - uDim * .6));
  // highlights: a crisp window glint + a soft sheen; defocused drops lose the crisp one
  vec3 H = normalize(normalize(KEY) + V);
  float nh = max(dot(N, H), 0.);
  float spec = pow(nh, mix(340., 46., uDim)) * mix(1.25, .22, uDim);
  float sheen = pow(nh, 14.) * .1;
  float back = pow(max(dot(N, normalize(vec3(-.4, -.7, .55))), 0.), 22.) * .22 * (1. - uDim); // secondary glint
  col += vec3(1.) * (spec + sheen + back);
  float a = mix(.46, .92, edge) + caus * .08;
  a = max(a, min(1., spec + back));
  // defocus: lift towards paper and thin out
  vec3 paper = vec3(.953, .965, .957);
  col = mix(col, mix(col, paper, .38), uDim);
  a *= uAlpha * (1. - uDim * .3);
  gl_FragColor = vec4(col, a);
}`,bv=`
attribute float aSize; attribute float aSeed;
uniform float uTime; uniform vec3 uBox; uniform float uPx; uniform float uMotion;
varying float vA;
void main() {
  vec3 u = position;
  u.y = fract(u.y + uTime * (.006 + aSeed * .01) * uMotion);
  u.x += sin(uTime * .21 * uMotion + aSeed * 6.28) * .012;
  vec3 p = (u - .5) * uBox;
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPx / -mv.z;
  vA = smoothstep(0., .14, u.y) * (1. - smoothstep(.82, 1., u.y));
}`,Sv=`
uniform float uAlpha; varying float vA;
void main() {
  vec2 c = gl_PointCoord * 2. - 1.; float d = length(c);
  if (d > 1.) discard;
  float ring = smoothstep(.62, .9, d) * (1. - smoothstep(.9, 1., d));
  float hl = 1. - smoothstep(0., .34, length(c - vec2(-.32, -.34)));
  vec3 col = mix(vec3(.44, .56, .52), vec3(1.), hl);
  float a = (ring * .55 + hl * .7 + .06) * vA * uAlpha;
  gl_FragColor = vec4(col, a);
}`;function mu({canvas:i,items:e,reduced:t=!1,mobile:n=!1}){let s=new On({canvas:i,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.setPixelRatio(Mn());let r=new cn,a=new Tt(fu,1,.1,60);a.position.set(0,0,pu);let o=Math.tan(Rn.degToRad(fu/2)),l=new zi(1,n?56:72,n?40:54),c=e.map((ae,re)=>{let ne=new mt({vertexShader:Mv,fragmentShader:_v,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uSeed:{value:re*1.71+.4},uWob:{value:t?0:1},uVel:{value:new H},uTint:{value:du(ae.color)},uDeep:{value:du(ae.deep)},uDim:{value:0},uFocus:{value:0},uAlpha:{value:0},uTimeF:{value:0}}}),ye=new Ze(l,ne);ye.renderOrder=1,r.add(ye);let pe=ic[re%ic.length],A=new H(pe[0],pe[1],pe[2]);return{mesh:ye,mat:ne,r:ae.r,home:A,p:A.clone().add(new H(0,-3.4-re*.18,0)),v:new H,vs:new H,sc:1,dim:0,foc:0,alpha:0,seed:re*1.37+.5,m:Math.min(2.2,Math.max(.6,Math.pow(ae.r/.5,3)))}}),u=n?22:34,h=new At,d=new Float32Array(u*3),f=new Float32Array(u),v=new Float32Array(u);for(let ae=0;ae<u;ae++){let re=Math.sin(ae*12.9898)*43758.5453,ne=Math.sin(ae*78.233)*12345.678,ye=Math.sin(ae*39.425)*9876.54;d[ae*3]=re-Math.floor(re),d[ae*3+1]=ne-Math.floor(ne),d[ae*3+2]=ye-Math.floor(ye),f[ae]=.05+Math.pow(re*7-Math.floor(re*7),2.2)*.16,v[ae]=ye*3-Math.floor(ye*3)}h.setAttribute("position",new Et(d,3)),h.setAttribute("aSize",new Et(f,1)),h.setAttribute("aSeed",new Et(v,1));let g=new mt({vertexShader:bv,fragmentShader:Sv,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uBox:{value:new H(8,6,4)},uPx:{value:600},uAlpha:{value:0},uMotion:{value:t?0:1}}}),m=new bs(h,g);m.position.z=-1.2,m.renderOrder=0,r.add(m);let p=1,S=1,_=new H,M=1,B=.3,w=.05,R=-1,U=.35,b=0,y=-1,L={on:!1,x:0,y:0,lx:0,ly:0,vx:0,vy:0,has:!1},q=new H,X=new H,te=new gn(-.16,0,0),V=c.map(()=>new H);function C(ae,re,ne){p=Math.max(1,ae),S=Math.max(1,re),s.setSize(p,S,!1),a.aspect=p/S,a.updateProjectionMatrix();let ye=2*pu*o,pe=ye*a.aspect,A=S/ye;_.set((ne.cx/p-.5)*pe,-(ne.cy/S-.5)*ye,0),M=ne.fit/(yv*A),B=ne.focusX??.3,w=ne.focusY??.05,g.uniforms.uBox.value.set(pe*1.15,ye*1.15,3),g.uniforms.uPx.value=S/(2*o)*Mn()*.5}function G(ae){R=ae}function N(){y<0&&(y=b),t&&c.forEach(ae=>{ae.p.copy(ae.home),ae.alpha=1})}let le=1/120,fe=0;function we(ae){let re=R>=0?1:0;U+=ae*(t?0:re?.045:.07),te.y=U;for(let ne=0;ne<c.length;ne++){let ye=c[ne],pe=V[ne];ne===R?pe.set(B,w,1.55):(pe.copy(ye.home).applyEuler(te),re&&(pe.multiplyScalar(1.12),pe.z-=.75))}for(let ne=0;ne<c.length;ne++){let ye=c[ne],pe=q.copy(V[ne]).sub(ye.p).multiplyScalar(ne===R?2.6:2);t||(pe.y+=.1*Math.sin(b*.45+ye.seed*2.1),pe.x+=.07*Math.sin(b*.31+ye.seed*3.3),pe.z+=.06*Math.cos(b*.27+ye.seed));for(let A=0;A<c.length;A++){if(A===ne)continue;let x=c[A];X.copy(ye.p).sub(x.p);let W=X.length()||1e-4,ie=ye.r*ye.sc+x.r*x.sc+.1;W<ie&&pe.addScaledVector(X.divideScalar(W),(ie-W)*7.5)}if(L.on&&!t){let A=ye.p.x-L.lx,x=ye.p.y-L.ly,W=A*A+x*x,ie=Math.exp(-W/.9)*(ne===R?.35:1),de=Math.min(1,Math.hypot(L.vx,L.vy));pe.x+=(L.vx*1.1+A*.5*de)*ie,pe.y+=(L.vy*1.1+x*.5*de)*ie}ye.v.addScaledVector(pe,ae/ye.m),ye.v.multiplyScalar(Math.exp(-3.1*ae)),ye.v.length()>3&&ye.v.setLength(3),ye.p.addScaledVector(ye.v,ae)}}let Le=!1,ge=0,J=0,he=null;function Q(ae){ge=Le?requestAnimationFrame(Q):0;let re=Math.min(1/24,J?(ae-J)/1e3:1/60);if(J=ae,b+=re,L.vx*=Math.exp(-6*re),L.vy*=Math.exp(-6*re),y>=0){fe+=re;let ye=0;for(;fe>=le&&ye<8;)we(le),fe-=le,ye++;ye===8&&(fe=0)}let ne=1-Math.exp(-re*3.2);for(let ye=0;ye<c.length;ye++){let pe=c[ye],A=ye===R,x=R>=0&&!A?1:0;pe.foc+=((A?1:0)-pe.foc)*ne,pe.dim+=(x-pe.dim)*ne,pe.sc+=((A?1.12:1)-pe.sc)*ne,y>=0&&(pe.alpha=Math.min(1,Math.max(0,(b-y-ye*.09)/1.6)));let W=pe.alpha*pe.alpha*(3-2*pe.alpha);pe.vs.lerp(pe.v,ne),pe.mesh.position.copy(_).addScaledVector(pe.p,M),pe.mesh.scale.setScalar(pe.r*pe.sc*M);let ie=pe.mat.uniforms;ie.uTime.value=b,ie.uDim.value=pe.dim*.62,ie.uFocus.value=pe.foc,ie.uAlpha.value=W,ie.uVel.value.copy(pe.vs).multiplyScalar(1/Math.max(.2,pe.r))}g.uniforms.uTime.value=b,g.uniforms.uAlpha.value=y>=0?Math.min(1,(b-y)/2.4):0,s.render(r,a),he&&he(re)}function Y(ae){let re=c[ae];if(!re)return null;q.copy(re.mesh.position).project(a);let ne=a.position.distanceTo(re.mesh.position),ye=re.r*re.sc*M/(ne*o)*S/2;return{x:(q.x+1)/2*p,y:(1-q.y)/2*S,r:ye,a:re.alpha}}let ue=new Oi;function be(ae,re){return q.set(ae/p*2-1,-(re/S)*2+1,.5).unproject(a),ue.origin.copy(a.position),ue.direction.copy(q).sub(a.position).normalize(),ue}function Se(ae,re){be(ae,re);let ne=-1,ye=1/0,pe=new kn;for(let A=0;A<c.length;A++){let x=c[A];if(x.alpha<.5)continue;pe.set(x.mesh.position,x.r*x.sc*M*1.02);let W=ue.intersectSphere(pe,X);if(W){let ie=W.distanceTo(ue.origin);ie<ye&&(ye=ie,ne=A)}}return ne}function Ce(ae,re){if(ae==null){L.on=!1,L.has=!1;return}be(ae,re);let ne=(_.z-ue.origin.z)/ue.direction.z,ye=ue.origin.x+ue.direction.x*ne,pe=ue.origin.y+ue.direction.y*ne,A=(ye-_.x)/M,x=(pe-_.y)/M;L.has&&(L.vx+=(A-L.lx)*4,L.vy+=(x-L.ly)*4,L.vx=Rn.clamp(L.vx,-4,4),L.vy=Rn.clamp(L.vy,-4,4)),L.lx=A,L.ly=x,L.on=!0,L.has=!0}function De(){Le||(Le=!0,J=0,ge=requestAnimationFrame(Q))}function ee(){Le=!1,ge&&cancelAnimationFrame(ge),ge=0}function I(){Q(performance.now())}function Re(){ee(),l.dispose(),c.forEach(ae=>ae.mat.dispose()),h.dispose(),g.dispose(),s.dispose()}return{setSize:C,setFocus:G,enter:N,start:De,stop:ee,project:Y,hitTest:Se,setPointer:Ce,renderOnce:I,dispose:Re,set onFrame(ae){he=ae},get count(){return c.length},homes:ic}}var gu=i=>String(i).padStart(2,"0");function sc(i,e){let t=[...i.querySelectorAll(".ing-item")];if(!t.length)return;let n=i.querySelector(".ing-viz"),s=i.querySelector(".ing-stage"),r=i.querySelector(".ing-canvas"),a=i.querySelector(".ing-fallback"),o=i.querySelector(".ing-card"),l=i.querySelector(".ing-line"),c=i.querySelector(".ing-line__ring"),u=i.querySelector(".ing-line__end"),h=Y=>o.querySelector(`[data-card="${Y}"]`),d=!!e.prefersReducedMotion,f=matchMedia("(hover: hover) and (pointer: fine)").matches,v=t.map((Y,ue)=>{let be=Y.nextElementSibling,Se=Ce=>(be.querySelector(`[data-k="${Ce}"]`)?.textContent||"").trim();return{i:ue,name:Y.querySelector(".ing-item__name").textContent.trim(),color:be.dataset.color,deep:be.dataset.deep,r:+be.dataset.r||.5,inci:Se("inci"),desc:Se("desc"),in:Se("in"),swatch:Y.querySelector(".ing-item__dot").style.getPropertyValue("--c")}}),g=v.length,m=()=>e.isMobile(),p=null,S=null,_=null,M=-1e9,B=performance.now(),w=!1,R=!1,U={w:0,h:0},b={x:0,y:0},y=0,L=0,q=m(),X=0,te=0;function V(Y){let ue=v[Y];h("count").textContent=`Ingrediens ${gu(Y+1)} / ${gu(g)}`,h("name").textContent=ue.name,h("inci").textContent=ue.inci,h("desc").textContent=ue.desc,h("in").textContent=ue.in,h("in-wrap").hidden=!ue.in,o.style.setProperty("--sw",ue.swatch)}function C(Y,{user:ue=!1}={}){if(ue&&(M=performance.now()),Y!==X){if(X=Y,B=performance.now(),t.forEach((be,Se)=>be.setAttribute("aria-pressed",String(Se===Y))),S&&S.setFocus(Y),clearTimeout(te),d){V(Y);return}o.classList.add("is-swapping"),te=setTimeout(()=>{V(Y),requestAnimationFrame(()=>o.classList.remove("is-swapping"))},170)}}V(0);let G=0;t.forEach((Y,ue)=>{Y.addEventListener("click",()=>{i.classList.add("has-touched"),C(ue,{user:!0})}),Y.addEventListener("focus",()=>C(ue,{user:!0})),f&&(Y.addEventListener("pointerenter",()=>{clearTimeout(G),G=setTimeout(()=>C(ue,{user:!0}),60)}),Y.addEventListener("pointerleave",()=>clearTimeout(G))),Y.addEventListener("keydown",be=>{let Se=be.key,Ce=-1;Se==="ArrowDown"||Se==="ArrowRight"?Ce=(ue+1)%g:Se==="ArrowUp"||Se==="ArrowLeft"?Ce=(ue-1+g)%g:Se==="Home"?Ce=0:Se==="End"&&(Ce=g-1),Ce>=0&&(be.preventDefault(),t[Ce].focus())})});try{if(!window.WebGLRenderingContext)throw new Error("no webgl");S=mu({canvas:r,items:v,reduced:d,mobile:m()}),i.classList.add("is-live"),r.addEventListener("webglcontextlost",Y=>{Y.preventDefault(),N()},{once:!0})}catch{S=null}S||N();function N(){try{S&&S!==p&&S.dispose&&S.dispose()}catch{}i.classList.remove("is-live"),i.classList.add("is-static"),S=p=le(),S.onFrame=Le,fe(),S.setFocus(X),S.enter(),S.start()}function le(){a.innerHTML="";let Y=[[0,.02],[-1.04,.6],[.96,.84],[1.06,-.44],[-.9,-.72],[.14,-1.18],[-.22,1.2]],ue=v.map((re,ne)=>{let ye=document.createElement("span");return ye.className="ing-drop",ye.style.setProperty("--c",re.color),ye.style.setProperty("--d",re.deep),ye.addEventListener("pointerenter",()=>f&&C(ne,{user:!0})),ye.addEventListener("click",()=>C(ne,{user:!0})),a.appendChild(ye),ye}),be={cx:0,cy:0,fit:100},Se=0,Ce=null,De=0,ee=!1,I=re=>{let ne=be.fit/1.9,ye=v[re],pe=re===Se?[be.focusX??.3,be.focusY??.05]:Y[re].map(x=>x*(Se>=0?1.08:1)),A=ye.r*ne*(re===Se?1.12:1);return{x:be.cx+pe[0]*ne,y:be.cy-pe[1]*ne,r:A,a:1}},Re=()=>ue.forEach((re,ne)=>{let ye=I(ne);Object.assign(re.style,{left:`${ye.x-ye.r}px`,top:`${ye.y-ye.r}px`,width:`${ye.r*2}px`,height:`${ye.r*2}px`,zIndex:ne===Se?2:1}),re.classList.toggle("is-dim",Se>=0&&ne!==Se)}),ae=()=>{ee&&(Ce&&Ce(1/60),De=requestAnimationFrame(ae))};return{setSize(re,ne,ye){be=ye,Re()},setFocus(re){Se=re,Re()},enter(){},start(){ee||(ee=!0,ae())},stop(){ee=!1,cancelAnimationFrame(De)},project:re=>I(re),hitTest:()=>-1,setPointer(){},dispose(){},set onFrame(re){Ce=re}}}function fe(){q=m();let Y=n.getBoundingClientRect(),ue=s.getBoundingClientRect();U={w:Y.width,h:Y.height},b={x:ue.left-Y.left,y:ue.top-Y.top},y=ue.width,L=ue.height;let be;if(q)be={cx:y/2,cy:L*.5,fit:Math.min(y*.5,L*.5)*.86,focusX:0,focusY:.05};else{let Se=o.offsetWidth||300,Ce=y-Se-16,De=Math.min(Ce*.5,L*.4);be={cx:Ce*.5,cy:L*.5,fit:De,focusX:.12,focusY:.02}}S&&S.setSize(y,L,be),_=null}new ResizeObserver(()=>fe()).observe(n);function Le(Y){let ue=S&&S.project(X);if(!ue)return;let be=ue.x+b.x,Se=ue.y+b.y,Ce,De;if(q){let x=o.offsetTop,W=o.offsetLeft,ie=o.offsetWidth;Ce=Math.max(W+36,Math.min(W+ie-36,be)),De=x}else{let x=o.offsetHeight,W=o.offsetWidth,ie=Math.max(4,Math.min(U.h-x-4,Se-x*.46));_=_==null?ie:_+(ie-_)*(1-Math.exp(-Y*3.4)),o.style.transform=`translate3d(0, ${_.toFixed(2)}px, 0)`,Ce=U.w-W,De=Math.max(_+34,Math.min(_+x-34,Se))}let ee=Ce-be,I=De-Se,Re=Math.hypot(ee,I)||1;ee/=Re,I/=Re;let ae=be+ee*(ue.r+2),re=Se+I*(ue.r+2),ne=Re>ue.r+26,ye=Ce-ee*5,pe=De-I*5;l.setAttribute("d",ne?`M${ae.toFixed(1)} ${re.toFixed(1)}L${ye.toFixed(1)} ${pe.toFixed(1)}`:"M0 0"),c.setAttribute("cx",ae.toFixed(1)),c.setAttribute("cy",re.toFixed(1)),u.setAttribute("cx",ye.toFixed(1)),u.setAttribute("cy",pe.toFixed(1)),c.style.opacity=u.style.opacity=ne?"":"0";let A=performance.now();!d&&R&&w&&A-M>12e3&&A-B>5600&&C((X+1)%g)}S.onFrame=Le;let ge=Y=>{let ue=s.getBoundingClientRect();return[Y.clientX-ue.left,Y.clientY-ue.top]},J=-1,he=0;s.addEventListener("pointermove",Y=>{let[ue,be]=ge(Y);if(S.setPointer(ue,be),Y.pointerType!=="mouse")return;M=performance.now();let Se=S.hitTest(ue,be);s.classList.toggle("is-over",Se>=0),Se!==J&&(J=Se,clearTimeout(he),Se>=0&&Se!==X&&(he=setTimeout(()=>C(Se,{user:!0}),90)))}),s.addEventListener("pointerleave",()=>{S.setPointer(null),s.classList.remove("is-over"),J=-1,clearTimeout(he)}),s.addEventListener("pointerdown",Y=>{let[ue,be]=ge(Y);S.setPointer(ue,be);let Se=S.hitTest(ue,be);Se>=0&&(i.classList.add("has-touched"),C(Se,{user:!0}))}),s.addEventListener("pointerup",Y=>{Y.pointerType!=="mouse"&&S.setPointer(null)}),fe(),S.setFocus(X);let Q=!1;hi(i,Y=>{w=Y,Y?(Q||(Q=!0,fe(),S.enter(),setTimeout(()=>{R=!0,i.classList.add("is-ready")},d?0:1100)),S.start()):S.stop()})}var ai=(i,e,t)=>Math.max(e,Math.min(t,i)),Fa=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),wv={"skin-oil":{src:"products/skin-oil.webp",box:[1200,1200,473,242,722,1007],h:.9},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,913,1154],h:.86},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1143],h:.94},"komplet-pakken":{src:"products/startpakke-plus.webp",box:[1200,1200,172,77,1149,1121],h:.92},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,64,764,1149],h:1},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,742,1111],h:.9}},vu=[{x:172,hr:56,sw:132,sun:[254,104],sr:120},{x:150,hr:52,sw:124,sun:[72,118],sr:112},{x:178,hr:58,sw:150,sun:[232,300],sr:130},{x:160,hr:54,sw:128,sun:[86,86],sr:118},{x:182,hr:57,sw:144,sun:[262,160],sr:110},{x:150,hr:50,sw:120,sun:[210,78],sr:124}];function Ev(i){let e=vu[i%vu.length],t=`stp${i}`,n=200,s=n+e.hr*1.02+22;return`<svg viewBox="0 0 320 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="${t}s" cx="50%" cy="50%" r="50%"><stop offset="0" style="stop-color:var(--c4);stop-opacity:.95"/><stop offset=".55" style="stop-color:var(--c4);stop-opacity:.35"/><stop offset="1" style="stop-color:var(--c4);stop-opacity:0"/></radialGradient>
    <linearGradient id="${t}f" x1="0" y1="0" x2=".35" y2="1"><stop offset="0" style="stop-color:var(--c3);stop-opacity:.42"/><stop offset="1" style="stop-color:var(--c3);stop-opacity:.82"/></linearGradient>
    <radialGradient id="${t}h" cx="38%" cy="32%" r="70%"><stop offset="0" style="stop-color:var(--c4);stop-opacity:.55"/><stop offset=".6" style="stop-color:var(--c3);stop-opacity:.28"/><stop offset="1" style="stop-color:var(--c3);stop-opacity:.6"/></radialGradient>
    <filter id="${t}b" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3.2"/></filter>
    <filter id="${t}bb" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <circle cx="${e.sun[0]}" cy="${e.sun[1]}" r="${e.sr}" fill="url(#${t}s)" filter="url(#${t}bb)"/>
  <g filter="url(#${t}b)">
    <path d="M${e.x-e.sw} 430 C${e.x-e.sw} ${s+40} ${e.x-e.sw*.62} ${s} ${e.x} ${s} C${e.x+e.sw*.62} ${s} ${e.x+e.sw} ${s+40} ${e.x+e.sw} 430 Z" fill="url(#${t}f)"/>
    <ellipse cx="${e.x}" cy="${n}" rx="${e.hr}" ry="${e.hr*1.18}" fill="url(#${t}h)"/>
  </g>
  <circle cx="${e.sun[0]}" cy="${e.sun[1]}" r="${e.sr*.62}" fill="none" style="stroke:var(--c4)" stroke-width="1" opacity=".55"/>
</svg>`}var Av={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>'};function rc(i,e){let{fmt:t,store:n,byId:s}=e,r=ee=>t.kr(ee).replace(/ (?=kr\.)/,"\xA0"),a=(ee,I=i)=>I.querySelector(ee),o=(ee,I=i)=>[...I.querySelectorAll(ee)],l=e.prefersReducedMotion,c=matchMedia("(hover: hover) and (pointer: fine)").matches,u=a("[data-stories-carousel]"),h=a("[data-stories-viewport]"),d=a("[data-stories-track]"),f=o(".stories-card",d),v=a("[data-stories-thumb]"),g=a("[data-stories-now]"),m=a("[data-stories-prev]"),p=a("[data-stories-next]"),S=a("[data-stories-live]"),_=a("[data-stories-cursor]"),M=f.length;if(!M)return;f.forEach((ee,I)=>{ee.style.setProperty("--i",I);let Re=a(".stories-portrait",ee);Re&&Re.insertAdjacentHTML("afterbegin",Ev(I));let ae=a(".stories-product",ee),re=ae&&s[ae.dataset.product];if(!re){ae&&ae.remove();return}let ne=(a(".stories-name",ee)||{}).textContent||"",ye=re.name+(re.strength?` ${re.strength}`:""),pe=wv[re.id],A="";if(pe){let[ie,,de,ve,He,Pe]=pe.box,_e=.7*pe.h/(Pe-ve);_e=Math.min(_e,.76/(He-de));let je=.5-(de+He)/2*_e,Ee=.88-Pe*_e;A=`<img src="${e.asset(pe.src)}" alt="" loading="lazy" decoding="async" draggable="false" style="width:${(ie*_e*100).toFixed(2)}%;left:${(je*100).toFixed(2)}%;top:${(Ee*100).toFixed(2)}%">`}let x=re.pct?`<span class="nc-price"><span class="nc-price__now">${r(re.price)}</span><span class="nc-price__was">F\xF8rpris <s>${r(re.price0)}</s></span></span>`:`<span class="nc-price"><span class="nc-price__now">${r(re.price)}</span></span>`;ae.innerHTML=`
      <span class="stories-prod__shot" aria-hidden="true">${A}</span>
      <span class="stories-prod__meta">
        <span class="stories-prod__eyebrow">${Fa(ne)} bruger</span>
        <a class="stories-prod__name" href="#deals">${Fa(ye)}</a>
        ${x}
      </span>
      <button class="nc-btn nc-btn--light stories-add" type="button" data-add="${Fa(re.id)}" aria-label="L\xE6g ${Fa(ye)} i kurv">
        <span class="stories-add__idle">L\xE6g i kurv</span><span class="stories-add__done" aria-hidden="true">${Av.check}Lagt i kurv</span>
      </button>`;let W=a("img",ae);W&&W.addEventListener("error",()=>W.remove(),{once:!0})}),i.addEventListener("click",ee=>{let I=ee.target.closest("[data-add]");!I||!i.contains(I)||(n.add(I.dataset.add,1),I.classList.remove("is-added"),I.offsetWidth,I.classList.add("is-added"),clearTimeout(I._t),I._t=setTimeout(()=>I.classList.remove("is-added"),2e3),S.textContent=`${s[I.dataset.add]?.name||"Produktet"} er lagt i kurven.`)});let B=[],w=0,R=1,U=0,b=0,y=0,L="idle",q=0,X=0,te=0,V=l?40:8.5,C=.32;function G(){let ee=f[0].offsetLeft;if(B=f.map(I=>I.offsetLeft-ee),M>1){let I=parseFloat(getComputedStyle(h).paddingLeft)||0,Re=h.clientWidth-2*I-f[M-1].offsetWidth;B[M-1]=Math.max(B[M-2]+1,B[M-1]-Math.max(0,Re))}w=B[M-1],R=M>1?B[1]-B[0]:1}let N=ee=>{let I=0;for(let Re=1;Re<M;Re++)Math.abs(B[Re]-ee)<Math.abs(B[I]-ee)&&(I=Re);return I},le=ee=>ee<0?ee*C:ee>w?w+(ee-w)*C:ee;function fe(){d.style.transform=`translate3d(${(-U).toFixed(2)}px,0,0)`;for(let Re=0;Re<M;Re++){let ae=ai((U-B[Re])/R,-1.6,1.6);f[Re].style.setProperty("--p",ae.toFixed(4)),f[Re].style.setProperty("--d",Math.abs(ae).toFixed(4))}let ee=w?ai(U/w,-.06,1.06):0;v.style.transform=`translate3d(${(ee*(M-1)*100).toFixed(3)}%,0,0)`;let I=N(U);I!==te&&we(I)}function we(ee,I){te=ee,g.textContent=String(ee+1).padStart(2,"0"),l||(g.classList.remove("is-tick"),g.offsetWidth,g.classList.add("is-tick")),m.disabled=ee===0,p.disabled=ee===M-1,f.forEach((Re,ae)=>Re.classList.toggle("is-active",ae===ee)),I&&(S.textContent=`Kundecase ${ee+1} af ${M}: ${(a(".stories-name",f[ee])||{}).textContent||""}`)}function Le(ee){q=0;let I=Math.min(.05,X?(ee-X)/1e3:1/60);if(X=ee,L==="spring"){let ae=I/4;for(let re=0;re<4;re++){let ne=-V*V*(U-y)-2*V*b;b+=ne*ae,U+=b*ae}Math.abs(U-y)<.25&&Math.abs(b)<4&&(U=y,b=0,L="idle")}fe(),L==="spring"?q=requestAnimationFrame(Le):X=0}let ge=()=>{q||(X=0,q=requestAnimationFrame(Le))};function J(ee,I=b){y=B[ai(ee,0,M-1)];let Re=y-U;Math.sign(I)===Math.sign(Re)?I=Math.sign(I)*Math.min(Math.abs(I),V*Math.abs(Re)*.92):I*=.35,b=I,L="spring",ge()}let he=(ee,I)=>{J(ee),I&&we(ai(ee,0,M-1),!0)};m.addEventListener("click",()=>he(Math.max(0,Q()-1),!0)),p.addEventListener("click",()=>he(Math.min(M-1,Q()+1),!0));let Q=()=>N(L==="spring"?y:U);u.addEventListener("keydown",ee=>{ee.target.closest("input, textarea")||(ee.key==="ArrowRight"?(ee.preventDefault(),he(Math.min(M-1,Q()+1),!0)):ee.key==="ArrowLeft"?(ee.preventDefault(),he(Math.max(0,Q()-1),!0)):ee.key==="Home"?(ee.preventDefault(),he(0,!0)):ee.key==="End"&&(ee.preventDefault(),he(M-1,!0)))}),d.addEventListener("focusin",ee=>{let I=f.indexOf(ee.target.closest(".stories-card"));I>=0&&I!==Q()&&he(I,!0)}),h.addEventListener("scroll",()=>{h.scrollLeft=0});let Y=null,ue=!1;h.addEventListener("pointerdown",ee=>{ee.button!==0||ee.target.closest("button")||(Y={id:ee.pointerId,sx:ee.clientX,sy:ee.clientY,x0:U,raw:U,lock:0,samples:[[ee.timeStamp,U]]},ue=!1,L==="spring"&&(Y.x0=U,L="held",b=0),ee.pointerType==="mouse"&&ee.preventDefault(),De(!0))}),window.addEventListener("pointermove",ee=>{if(!Y||ee.pointerId!==Y.id)return;let I=ee.clientX-Y.sx,Re=ee.clientY-Y.sy;if(!Y.lock)if(Math.abs(I)>6&&Math.abs(I)>Math.abs(Re)*1.1){Y.lock=1,ue=!0,h.classList.add("is-dragging");try{h.setPointerCapture(ee.pointerId)}catch{}}else if(Math.abs(Re)>8){be(ee,!0);return}else return;Y.raw=Y.x0-I,U=le(Y.raw);let ae=Y.samples;for(ae.push([ee.timeStamp,U]);ae.length>2&&ee.timeStamp-ae[0][0]>90;)ae.shift();q||(q=requestAnimationFrame(re=>{q=0,fe()}))});function be(ee,I){if(!Y)return;let Re=Y;if(Y=null,h.classList.remove("is-dragging"),De(!1),!Re.lock){L==="held"&&J(N(U),0);return}let ae=Re.samples,re=ae[0],ne=ae[ae.length-1],ye=(ne[0]-re[0])/1e3,pe=ye>.008?(ne[1]-re[1])/ye:0;ee.timeStamp-ne[0]>80&&(pe=0),pe=ai(pe,-5200,5200);let A=U+pe*.24,x=N(ai(A,0,w)),W=N(Re.x0),ie=U-Re.x0;!I&&x===W&&(Math.abs(pe)>320&&Math.abs(ie)>12?x=ai(W+Math.sign(pe),0,M-1):Math.abs(ie)>R*.18&&Math.sign(pe)!==-Math.sign(ie)&&(x=ai(W+Math.sign(ie),0,M-1))),J(x,pe),x!==W&&we(x,!0)}window.addEventListener("pointerup",ee=>be(ee)),window.addEventListener("pointercancel",ee=>be(ee,!0)),h.addEventListener("click",ee=>{ue&&(ee.preventDefault(),ee.stopPropagation(),ue=!1)},!0),h.addEventListener("dragstart",ee=>ee.preventDefault());let Se=0;h.addEventListener("wheel",ee=>{if(Math.abs(ee.deltaX)<=Math.abs(ee.deltaY))return;ee.preventDefault(),L==="spring"&&(L="held");let I=ee.deltaMode===1?ee.deltaX*16:ee.deltaX,Re=U+I*(U<0||U>w?C:1);U=ai(Re,-90,w+90),q||(q=requestAnimationFrame(ae=>{q=0,fe()})),clearTimeout(Se),Se=setTimeout(()=>{L="idle",J(N(U),0)},110)},{passive:!1}),new ResizeObserver(()=>{G(),U=y=B[te]||0,b=0,L="idle",fe()}).observe(h),G(),fe(),we(0);let De=()=>{};if(c&&_){i.classList.add("has-cursor");let ee=-200,I=-200,Re=-200,ae=-200,re=!1,ne=!1,ye=.4,pe=0,A=a("span",_),x=()=>{pe=0;let de=l?1:.2;ee+=(Re-ee)*de,I+=(ae-I)*de;let ve=re?ne?.78:1:.4;ye+=(ve-ye)*(l?1:.16),_.style.transform=`translate3d(${ee.toFixed(1)}px,${I.toFixed(1)}px,0) scale(${ye.toFixed(3)})`,(Math.abs(Re-ee)>.2||Math.abs(ae-I)>.2||Math.abs(ve-ye)>.002)&&(pe=requestAnimationFrame(x))},W=()=>{pe||(pe=requestAnimationFrame(x))},ie=de=>{re!==de&&(re=de,_.classList.toggle("is-on",de),W())};h.addEventListener("pointermove",de=>{de.pointerType==="mouse"&&(!re&&!Y&&(ee=de.clientX,I=de.clientY),Re=de.clientX,ae=de.clientY,ie(!!Y||!de.target.closest("a, button")),W())}),h.addEventListener("pointerleave",()=>{Y||ie(!1)}),window.addEventListener("scroll",()=>{re&&!Y&&ie(!1)},{passive:!0}),De=de=>{ne=de,A&&(A.style.opacity=de?".75":""),W()}}if(!l&&"IntersectionObserver"in window){u.classList.add("is-pre");let ee=new IntersectionObserver(I=>{I.some(Re=>Re.isIntersecting)&&(ee.disconnect(),requestAnimationFrame(()=>{u.classList.add("is-enter"),requestAnimationFrame(()=>u.classList.remove("is-pre")),setTimeout(()=>u.classList.remove("is-enter"),2200)}))},{threshold:.18});ee.observe(u)}}function ac(i,e){let t=i.querySelector(".trust-mark__strokes"),n=i.querySelector(".trust-stage");if(!t||!n)return;let s=new URLSearchParams(location.search);if(e.prefersReducedMotion||s.get("trust-static")==="1"||!("IntersectionObserver"in window))return;let a=t.cloneNode(!0);a.setAttribute("class","trust-mark__comet"),t.after(a),i.classList.add("is-armed"),i.offsetWidth;let o=new IntersectionObserver(([l])=>{l.isIntersecting&&(o.disconnect(),requestAnimationFrame(()=>requestAnimationFrame(()=>i.classList.add("is-drawn"))),setTimeout(()=>a.remove(),6200))},{threshold:.3});o.observe(n),Tv(i,n,e)}function Tv(i,e,t){if(!matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=50,s=46,r=50,a=46,o=0,l=!1,c=()=>{r+=(n-r)*.045,a+=(s-a)*.045,e.style.setProperty("--mx",r.toFixed(2)+"%"),e.style.setProperty("--my",a.toFixed(2)+"%"),o=l&&(Math.abs(n-r)>.05||Math.abs(s-a)>.05)?requestAnimationFrame(c):0},u=()=>{!o&&l&&(o=requestAnimationFrame(c))};new IntersectionObserver(([h])=>{l=h.isIntersecting,u()},{rootMargin:"80px"}).observe(e),i.addEventListener("pointermove",h=>{let d=e.getBoundingClientRect();n=50+Math.max(-1,Math.min(1,(h.clientX-(d.left+d.width/2))/(d.width*.9)))*16,s=46+Math.max(-1,Math.min(1,(h.clientY-(d.top+d.height/2))/(d.height*.9)))*16,u()},{passive:!0}),i.addEventListener("pointerleave",()=>{n=50,s=46,u()})}var xu="cubic-bezier(.16, .84, .24, 1)",yu="cubic-bezier(.4, 0, .2, 1)",Rv=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,Cv='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.4v.1"/></svg>',Iv='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';function oc(i,e){let t=e.prefersReducedMotion,n=new URLSearchParams(location.search),s=[...i.querySelectorAll("[data-faq-item]")].map(V=>({el:V,btn:V.querySelector(".faq-btn"),panel:V.querySelector(".faq-a"),anim:null})),r=(V,C)=>{C?V.setAttribute("hidden","until-found"):V.removeAttribute("hidden")};function a(V,C,G,N,le,fe){if(V.anim&&V.anim.cancel(),t||C===G){fe&&fe();return}let we=V.panel.animate([{height:`${C}px`},{height:`${G}px`}],{duration:N,easing:le});V.anim=we,we.onfinish=()=>{V.anim=null,fe&&fe()}}function o(V,C=!0){if(V.el.classList.contains("is-open"))return;let G=V.anim?V.panel.getBoundingClientRect().height:0;if(r(V.panel,!1),V.btn.setAttribute("aria-expanded","true"),V.el.classList.add("is-open"),!C)return;let N=V.panel.scrollHeight,le=Math.round(Math.min(760,420+N*1.1));a(V,G,N,le,xu)}function l(V,C=!0){if(!V.el.classList.contains("is-open"))return;let G=V.panel.getBoundingClientRect().height;if(V.btn.setAttribute("aria-expanded","false"),V.el.classList.remove("is-open"),!C){r(V.panel,!0);return}let N=Math.round(Math.min(560,320+G*.7));a(V,G,0,N,yu,()=>r(V.panel,!0))}let c=V=>{if(V.el.classList.contains("is-open")){l(V);return}s.forEach(C=>C!==V&&l(C)),o(V)};s.forEach((V,C)=>{V.btn.addEventListener("click",()=>c(V)),V.panel.addEventListener("beforematch",()=>{s.forEach(G=>G!==V&&l(G,!1)),o(V,!1)}),V.btn.addEventListener("keydown",G=>{let N=G.key,le=null;N==="ArrowDown"?le=(C+1)%s.length:N==="ArrowUp"?le=(C-1+s.length)%s.length:N==="Home"?le=0:N==="End"&&(le=s.length-1),le!==null&&(G.preventDefault(),s[le].btn.focus())})});let u=/^#faq-q(\d+)$/.exec(location.hash),h=n.has("faq")?+n.get("faq"):u?+u[1]:1;h>=1&&h<=s.length&&o(s[h-1],!1);let d=i.querySelector("[data-faq-countdown]"),f=i.querySelector("[data-faq-left]"),v=V=>String(V).padStart(2,"0");function g(){let V=e.clock.end-e.clock.now();if(V<=0){d.hidden=!0;return}d.hidden=!1;let C=Math.floor(V/1e3),G=Math.floor(C/86400),N=Math.floor(C%86400/3600),le=Math.floor(C%3600/60),fe=C%60;f.textContent=G>0?`${G} ${G===1?"dag":"dage"}, ${N} t. ${v(le)} min.`:`${N} t. ${v(le)} min. ${v(fe)} sek.`}d&&f&&(g(),setInterval(g,1e3));let m=i.querySelector("[data-faq-gift]");if(m){let V=m.querySelector("[data-faq-gift-label]"),C=m.querySelector("[data-faq-gift-sum]"),G=m.querySelector("[data-faq-gift-fill]"),N=e.campaign.giftThreshold,le=()=>{let fe=e.store.subtotal(),we=fe>N;m.classList.toggle("is-done",we),G.style.setProperty("--p",Math.min(1,fe/N).toFixed(4)),C.textContent=`${e.fmt.kr(fe)} af ${e.fmt.kr(N)}`,we?V.innerHTML=`${Iv}Din Lip Balm f\xF8lger med`:fe===0?V.textContent="Din kurv er tom endnu":V.textContent=`L\xE6g for ${e.fmt.kr(N+1-fe)} mere i kurven`};le(),e.store.on(fe=>{(fe==="cart:add"||fe==="cart:change")&&le()})}let p=i.querySelector(".faq-club"),S=i.querySelector("[data-faq-club]"),_=i.querySelector("[data-faq-form]"),M=i.querySelector("[data-faq-field]"),B=i.querySelector("#faq-email"),w=i.querySelector("[data-faq-err]"),R=i.querySelector("[data-faq-done]"),U=i.querySelector("[data-faq-done-email]"),b=i.querySelector("[data-faq-status]");if(!_)return;let y=!1,L=V=>(V=V.trim(),V?Rv.test(V)?"":"Den e-mail ser ikke helt rigtig ud. Pr\xF8v fx navn@eksempel.dk.":"Skriv din e-mail, s\xE5 kan vi byde dig velkommen."),q=V=>{M.classList.toggle("is-invalid",!!V),B.setAttribute("aria-invalid",V?"true":"false"),V?(M.classList.remove("is-invalid"),M.offsetWidth,M.classList.add("is-invalid"),w.innerHTML=`${Cv}<span>${V}</span>`):w.textContent=""};B.addEventListener("input",()=>{y&&!L(B.value)&&q("")}),B.addEventListener("blur",()=>{y&&q(L(B.value))});function X(V){U.textContent=V;let C=S.getBoundingClientRect().height,G=()=>{_.hidden=!0,R.hidden=!1,p.classList.add("is-done"),b.textContent=`Tak. Du er nu tilmeldt kundeklubben med ${V}.`;let N=S.getBoundingClientRect().height;t||S.animate([{height:`${C}px`},{height:`${N}px`}],{duration:700,easing:xu}),R.focus({preventScroll:!0})};if(t)return G();_.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(-6px)",filter:"blur(2px)"}],{duration:260,easing:yu,fill:"forwards"}).onfinish=G}_.addEventListener("submit",V=>{V.preventDefault(),y=!0;let C=L(B.value);if(q(C),C){B.focus();return}_.classList.add("is-busy"),_.setAttribute("aria-busy","true"),setTimeout(()=>{_.classList.remove("is-busy"),_.removeAttribute("aria-busy"),X(B.value.trim())},t?0:900)});let te=n.get("club");te==="error"&&(B.value="navn@eksempel",y=!0,q(L(B.value))),te==="busy"&&(B.value="maja@eksempel.dk",_.classList.add("is-busy")),te==="done"&&(B.value="maja@eksempel.dk",X("maja@eksempel.dk"))}function lc(i,e){i.classList.add("ftr--js");let t=matchMedia("(max-width: 760px)"),n=e.prefersReducedMotion,s=[...i.querySelectorAll(".ftr-col")];s.forEach(w=>{w.querySelectorAll(".ftr-col__list > li").forEach((R,U)=>R.style.setProperty("--i",U))});let r=(w,R)=>{let U=w.querySelector(".ftr-col__btn"),b=w.querySelector(".ftr-col__panel");w.classList.toggle("is-open",R),U.setAttribute("aria-expanded",String(R)),t.matches&&!R?b.setAttribute("inert",""):b.removeAttribute("inert")};s.forEach(w=>{w.querySelector(".ftr-col__btn").addEventListener("click",()=>r(w,!w.classList.contains("is-open")))});let a=()=>s.forEach(w=>r(w,w.classList.contains("is-open")));a(),t.addEventListener("change",a);let o=new URLSearchParams(location.search).get("open");o&&s[+o-1]&&r(s[+o-1],!0);let l=i.querySelector("[data-promo]"),c=w=>l.querySelector(w),u=w=>new Intl.DateTimeFormat("sv-SE",{timeZone:"Europe/Copenhagen"}).format(new Date(w)),h="live",d=()=>{let w=e.clock.now(),R=w>e.clock.end?"ended":w<e.clock.start?"soon":u(w)===u(e.clock.end)?"last":"live";R!==h&&(h=R,l.dataset.state=R,R==="last"?c("[data-promo-eyebrow]").textContent="Sidste dag \xB7 slutter kl. 23.59":R==="soon"?c("[data-promo-eyebrow]").textContent="Black Week \xB7 mandag 23. \u2013 mandag 30. november":R==="ended"&&(c("[data-promo-eyebrow]").textContent="Black Week er slut",c("[data-promo-title]").textContent="Tak, fordi du handlede i ro og mag.",c("[data-promo-sub]").textContent="Fri fragt over 399 kr. og 14 dages fortrydelsesret \u2013 hele \xE5ret.",c("[data-promo-cta-label]").textContent="Se hele hudplejeserien",c("[data-promo-cta]").setAttribute("href","#deals")))};d(),setInterval(d,3e4),i.querySelector("[data-to-top]").addEventListener("click",w=>{let R=document.getElementById("top");w.preventDefault(),window.scrollTo({top:0,behavior:n?"auto":"smooth"});let U=R||document.body;R&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","-1"),U.focus?.({preventScroll:!0}),history.replaceState(null,"",location.pathname+location.search)});let f=i.querySelector(".ftr-mark");if(!f||n)return;let v=matchMedia("(hover: hover) and (pointer: fine)").matches,g={x:50,y:50,lit:0,drift:0},m={x:50,y:50,lit:0,drift:0},p=!1,S=0,_=()=>{let w=i.getBoundingClientRect(),R=innerHeight||1,U=Math.min(1,Math.max(0,(R-w.top)/(R+w.height)));m.drift=(.5-U)*90},M=()=>{S=0;let w=.075;g.x+=(m.x-g.x)*w,g.y+=(m.y-g.y)*w,g.lit+=(m.lit-g.lit)*.05,g.drift+=(m.drift-g.drift)*.06,f.style.setProperty("--mx",g.x.toFixed(2)+"%"),f.style.setProperty("--my",g.y.toFixed(2)+"%"),f.style.setProperty("--lit",g.lit.toFixed(3)),f.style.setProperty("--drift",g.drift.toFixed(2)+"px");let R=Math.abs(m.x-g.x)<.05&&Math.abs(m.y-g.y)<.05&&Math.abs(m.lit-g.lit)<.002&&Math.abs(m.drift-g.drift)<.05;p&&!R&&(S=requestAnimationFrame(M))},B=()=>{p&&!S&&(S=requestAnimationFrame(M))};new IntersectionObserver(([w])=>{p=w.isIntersecting,p&&(_(),B())},{rootMargin:"120px 0px"}).observe(i),addEventListener("scroll",()=>{p&&(_(),B())},{passive:!0}),addEventListener("resize",()=>{p&&(_(),B())},{passive:!0}),v&&(i.addEventListener("pointermove",w=>{let R=f.getBoundingClientRect();m.x=(w.clientX-R.left)/R.width*100,m.y=(w.clientY-R.top)/R.height*100;let U=Math.max(0,Math.abs(w.clientX-(R.left+R.width/2))-R.width/2),b=Math.max(0,Math.abs(w.clientY-(R.top+R.height/2))-R.height/2);m.lit=Math.max(0,1-Math.hypot(U,b)/260),B()}),i.addEventListener("pointerleave",()=>{m.lit=0,B()})),_(),g.drift=m.drift,f.style.setProperty("--drift",g.drift.toFixed(2)+"px")}yn("header",Ha);yn("hero",jl);yn("offers",$l);yn("deals",ec);yn("routine",nc);yn("ingredients",sc);yn("stories",rc);yn("trust",ac);yn("faq",oc);yn("footer",lc);gc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
