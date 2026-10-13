(()=>{var nn="products/",gc=(i,e)=>Math.round(i*(1-e/100)),Tu=[{id:"skin-oil",name:"CBD Hudpleje Olie",strength:"1000 mg",size:"30 ml",eyebrow:"CBD Skin Care",price0:499,pct:25,img:nn+"skin-oil.webp",hires:nn+"skin-oil-hires.webp",hero:!0,badge:"badges/vidunder-olien.svg",nickname:"Vidunder Olien",claim:"Efterlader huden bl\xF8d, velplejet og smuk \u2013 til alle hudtyper.",notes:"CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke."},{id:"day-cream",name:"CBD Dagcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:399,pct:25,img:nn+"day-cream.webp",hires:nn+"day-cream-hires.webp",claim:"Let dagcreme med CBD, aloe vera og sheasm\xF8r til en glat og velplejet hud."},{id:"night-cream",name:"CBD Natcreme",size:"50 ml",eyebrow:"CBD Skin Care",price0:449,pct:25,img:nn+"night-cream.webp",hires:nn+"night-cream-bottle-hires.webp",claim:"N\xE6rende natcreme med mandelolie og squalane, der underst\xF8tter hudens naturlige fugt."},{id:"serum",name:"CBD Hyaluronic Serum",size:"30 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:nn+"hyaluron-serum.webp",hires:nn+"hyaluron-serum-hires.webp",claim:"Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk."},{id:"cleansing-gel",name:"CBD Rensegel",size:"100 ml",eyebrow:"CBD Skin Care",price0:299,pct:25,img:nn+"cleansing-gel.webp",hires:nn+"cleansing-gel-bottle-hires.webp",claim:"Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance."},{id:"body-lotion",name:"CBD Bodylotion",size:"200 ml",eyebrow:"CBD Skin Care",price0:249,pct:25,img:nn+"body-lotion.webp",claim:"Tr\xE6kker hurtigt ind og efterlader kroppen bl\xF8d. Giver intensiv fugtighed til t\xF8r hud."},{id:"shampoo",name:"CBD Shampoo",strength:"750 mg",size:"300 ml",eyebrow:"CBD Hair Care",price0:199,pct:25,img:nn+"shampoo.webp",claim:"Mild shampoo uden un\xF8dvendige ingredienser \u2013 til hele familien."},{id:"komplet-pakken",name:"Komplet Pakken",size:"Rens \xB7 Dag \xB7 Nat \xB7 Olie",eyebrow:"Sampakke",price0:1198,valueLoose:1646,pct:25,img:nn+"startpakke-plus.webp",bundle:!0,badge:"badges/komplet-pakken.svg",contains:["cleansing-gel","day-cream","night-cream","skin-oil"],claim:"Hele rutinen, morgen og aften \u2013 fire produkter i \xE9n pakke."},{id:"all-day-facial",name:"All Day Facial",size:"Rens \xB7 Dag \xB7 Nat",eyebrow:"Sampakke",price0:860,valueLoose:1147,pct:25,img:nn+"all-day-facial.webp",bundle:!0,badge:"badges/all-day-facial.svg",contains:["cleansing-gel","day-cream","night-cream"],claim:"Den daglige ansigtsrutine samlet \u2013 rens, dag og nat."},{id:"lip-balm",name:"CBD Lip Balm",size:"",eyebrow:"Gave",price0:79,pct:0,img:null,gift:!0,claim:"Gratis ved k\xF8b over 699 kr."}],Oa=Tu.map(i=>({...i,price:gc(i.price0,i.pct),save:i.price0-gc(i.price0,i.pct)})),Tr={name:"Black Week",startsAt:"2026-11-23T00:00:00+01:00",endsAt:"2026-11-30T23:59:59+01:00",headlinePct:25,giftThreshold:699,giftId:"lip-balm",giftValue:79,freeShipping:399,code:null};var Rr=[];function pn(i,e){Rr.push([i,e])}var Ru=Date.parse("2026-11-27T10:00:00+01:00"),Cu=performance.now(),Iu={now:()=>Ru+(performance.now()-Cu),end:Date.parse(Tr.endsAt),start:Date.parse(Tr.startsAt)},za=new Set,Xn={cart:[]},Lu={get:()=>Xn,on:i=>(za.add(i),()=>za.delete(i)),emit:(i,e)=>za.forEach(t=>t(i,e,Xn)),add(i,e=1){let t=Xn.cart.find(n=>n.id===i);t?t.qty+=e:Xn.cart.push({id:i,qty:e}),this.emit("cart:add",{id:i,qty:e})},setQty(i,e){let t=Xn.cart.find(n=>n.id===i);t&&(t.qty=Math.max(0,e),t.qty||Xn.cart.splice(Xn.cart.indexOf(t),1),this.emit("cart:change",{id:i}))},count:()=>Xn.cart.reduce((i,e)=>i+e.qty,0),subtotal:()=>Xn.cart.reduce((i,e)=>i+e.qty*xc[e.id].price,0),openCart(){this.emit("cart:open")}},xc=Object.fromEntries(Oa.map(i=>[i.id,i])),Pu={kr:i=>`${Math.round(i).toLocaleString("da-DK")} kr.`,pct:i=>`${Math.round(i)}%`},vc=document.currentScript&&document.currentScript.src,Du=window.NC_ASSET_BASE||(vc?new URL("../assets/",vc).href:"../assets/"),Uu=i=>Du+i;function yc(){let i={store:Lu,clock:Iu,fmt:Pu,products:Oa,byId:xc,campaign:Tr,asset:Uu,prefersReducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,isMobile:()=>matchMedia("(max-width: 760px)").matches},e=()=>{let n=0;for(let[r,a]of Rr){let o=document.querySelector(`[data-section="${r}"]`);if(o&&(n++,!o.dataset.ncInit)){o.dataset.ncInit="1";try{a(o,i)}catch(l){console.error(`[section ${r}]`,l)}}}let s=new IntersectionObserver(r=>r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-in"),s.unobserve(a.target))}),{rootMargin:"0px 0px -8% 0px"});return document.querySelectorAll("[data-reveal]:not(.is-in)").forEach(r=>s.observe(r)),n},t=()=>{if(e()>=Rr.length)return;let n=new MutationObserver(()=>{e()>=Rr.length&&n.disconnect()});n.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>n.disconnect(),2e4)};window.NCBW={ctx:i,run:e},window.NC_DEFER_BOOT||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t())}var Fu={"products/skin-oil.webp":[1200,1200,473,242,722,1007],"products/startpakke-plus.webp":[1200,1200,172,77,1169,1129],"products/all-day-facial.webp":[1200,1200,160,78,1200,1129],"products/day-cream.webp":[1200,1200,345,96,937,1153],"products/night-cream.webp":[1200,1200,345,96,942,1155],"products/hyaluron-serum.webp":[800,1200,108,225,765,1114],"products/cleansing-gel.webp":[1200,1200,429,101,771,1115],"products/body-lotion.webp":[800,1200,186,163,601,1147],"products/shampoo.webp":[1200,1200,455,64,764,1151]},Mc=["komplet-pakken","skin-oil","night-cream","all-day-facial"],_c=5600;function Ha(i,e){let t=(F,ie=i)=>ie.querySelector(F),n=(F,ie=i)=>[...ie.querySelectorAll(F)],s=new URLSearchParams(location.search),r=e.prefersReducedMotion,a=matchMedia("(min-width: 1180px)"),o=F=>String(F).replace(/[&<>"]/g,ie=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[ie]),l=new Set,c=(F=0,ie=14,B=()=>{})=>({x:F,v:0,t:F,w:ie,apply:B}),u=0,h=0,d=F=>{l.add(F),u||(h=performance.now(),u=requestAnimationFrame(v))},f=(F,ie,B=!1)=>{if(F.t=ie,B||r){F.x=ie,F.v=0,F.apply(F.x);return}d(F)};function v(F){let ie=Math.min(.034,(F-h)/1e3);h=F;for(let B of l){let Ce=B.w*B.w*(B.t-B.x)-2*B.w*B.v;B.v+=Ce*ie,B.x+=B.v*ie,Math.abs(B.t-B.x)<5e-4&&Math.abs(B.v)<5e-4&&(B.x=B.t,B.v=0,l.delete(B)),B.apply(B.x)}u=l.size?requestAnimationFrame(v):0}let g=(F,ie="")=>{let B=Fu[F.img];return`<img class="${ie}" src="${e.asset(F.img)}" alt="" loading="lazy" decoding="async" ${B?`data-box="${B.join(",")}"`:""}>`};function m(F,ie=.68,B=.9,Ce=.74){n("img[data-box]",F).forEach(ze=>{let Ke=ze.parentElement,Ze=Ke.clientWidth,it=Ke.clientHeight;if(!Ze||!it)return;let[st,St,wt,ht,nt,It]=ze.dataset.box.split(",").map(Number),Bt=Ke.hasAttribute("data-wide")?Math.max(ie,.78):ie,Lt=Math.min(it*Bt/(It-ht),Ze*Ce/(nt-wt)),Et=(It-ht)*Lt;ze.style.width=`${st*Lt}px`,ze.style.left=`${Ze/2-(wt+nt)/2*Lt}px`,ze.style.top=`${it*B-Et-ht*Lt}px`})}let p=F=>F.pct?`<span class="nc-price"><span class="nc-price__now">${e.fmt.kr(F.price)}</span><span class="nc-price__was">F\xF8rpris ${e.fmt.kr(F.price0)}</span></span>`:`<span class="nc-price"><span class="nc-price__now">${e.fmt.kr(F.price)}</span></span>`,w=(F,ie,B=!1)=>`
    <a class="hdr-tile" href="${ie}">
      <span class="hdr-tile__media"${B?" data-wide":""}>${g(F)}${F.pct?`<span class="nc-bubble nc-bubble--sale hdr-tile__flag">\u2212${F.pct}%</span>`:""}</span>
      <span class="hdr-tile__name">${o(F.nickname||F.name)}</span>
      <span class="hdr-tile__meta">${o(F.nickname?[F.strength,F.size].filter(Boolean).join(" \xB7 "):F.size)}</span>
      ${p(F)}
    </a>`,b=()=>`
    <a class="hdr-gift nc-grain" href="#offers">
      <span><span class="hdr-gift__eyebrow">Gave</span><span class="hdr-gift__title">Gratis CBD Lip Balm</span></span>
      <span class="hdr-gift__text">F\xF8lger med automatisk ved k\xF8b over ${e.fmt.kr(e.campaign.giftThreshold)} (v\xE6rdi ${e.fmt.kr(e.campaign.giftValue)}).</span>
      <span class="hdr-pil" aria-hidden="true"></span>
      <span class="hdr-gift__disc" aria-hidden="true"></span>
    </a>`,M=t(".hdr-ann"),O=n(".hdr-ann__msg"),E=n(".hdr-ann__ticks i"),C=t(".hdr-ann__pause"),N=0,_=0,x=performance.now(),U=!1,K=!1;function Z(F){let ie=O[N];ie.classList.remove("is-active"),ie.classList.add("is-leaving"),ie.setAttribute("aria-hidden","true"),ie.querySelectorAll("a").forEach(Ce=>Ce.setAttribute("tabindex","-1")),setTimeout(()=>ie.classList.remove("is-leaving"),950),E[N].style.setProperty("--p",0),E[N].classList.remove("is-run"),N=(F+O.length)%O.length,_=0;let B=O[N];B.classList.add("is-active"),B.setAttribute("aria-hidden","false"),B.querySelectorAll("a").forEach(Ce=>Ce.removeAttribute("tabindex")),E[N].classList.add("is-run")}(function F(ie){let B=ie-x;x=ie,!U&&!K&&!document.hidden&&(_+=Math.min(B,100)),E[N].style.setProperty("--p",Math.min(1,_/_c).toFixed(4)),_>=_c&&Z(N+1),requestAnimationFrame(F)})(x),M.addEventListener("pointerenter",()=>U=!0),M.addEventListener("pointerleave",()=>U=!1),M.addEventListener("focusin",()=>U=!0),M.addEventListener("focusout",F=>{M.contains(F.relatedTarget)||(U=!1)}),C.addEventListener("click",()=>{K=!K,M.classList.toggle("is-paused",K),C.setAttribute("aria-pressed",String(K)),C.setAttribute("aria-label",K?"Afspil beskeder":"S\xE6t beskeder p\xE5 pause")});let se=s.get("condensed")==="1",G=c(0,11,F=>i.style.setProperty("--c",Math.max(0,Math.min(1,F)).toFixed(4))),L=()=>se?1:Math.max(0,Math.min(1,(window.scrollY-6)/84));f(G,L(),!0),addEventListener("scroll",()=>{let F=L();F!==G.t&&f(G,F),i.classList.toggle("is-condensed",F>.5)},{passive:!0}),i.classList.toggle("is-condensed",G.t>.5);let q=n("[data-countdown]"),k=F=>String(F).padStart(2,"0"),he=(F,ie,B)=>`${F} ${F===1?ie:B}`,xe="";function Te(){let F=e.clock.now(),ie=e.clock.start,B=e.clock.end;if(F>=B)return{state:"over"};let Ce=F<ie,ze=Math.floor(((Ce?ie:B)-F)/1e3),Ke=Math.floor(ze/86400),Ze=Math.floor(ze%86400/3600),it=Math.floor(ze%3600/60),st=ze%60,St=Ke>0?[[Ke,"d",String(Ke)],[Ze,"t",k(Ze)],[it,"m",k(it)]]:Ze>0?[[Ze,"t",String(Ze)],[it,"m",k(it)],[st,"s",k(st)]]:[[it,"m",String(it)],[st,"s",k(st)]],wt=Ke>0?[he(Ke,"dag","dage"),he(Ze,"time","timer"),he(it,"minut","minutter")]:Ze>0?[he(Ze,"time","timer"),he(it,"minut","minutter")]:[he(it,"minut","minutter")],ht=`Black Week ${Ce?"starter":"slutter"} om ${wt.slice(0,-1).join(", ")}${wt.length>1?" og ":""}${wt.at(-1)}`;return{state:Ce?"pre":"live",units:St,aria:ht,tick:Math.floor((F-e.clock.start)/1e3)}}function De(){let F=Te();for(let ie of q){let B=t("[data-cd-value]",ie),Ce=t(".hdr-cd__label",ie);if(F.state==="over"){B.textContent="Black Week er slut",Ce&&(Ce.hidden=!0),ie.setAttribute("aria-label","Black Week er slut");continue}Ce&&(Ce.textContent=F.state==="pre"?"Starter om":"Slutter om"),ie.style.setProperty("--sec",`${F.tick*6}deg`);let ze=F.units.map(Ke=>Ke[1]).join("");B.dataset.sig!==ze?(B.dataset.sig=ze,B.innerHTML=F.units.map(([,Ke,Ze])=>`<span class="hdr-cd__u"><span class="hdr-cd__n"><span>${Ze}</span></span>${Ke}</span>`).join("")):n(".hdr-cd__n",B).forEach((Ke,Ze)=>{let it=F.units[Ze][2],st=Ke.lastElementChild;if(st.textContent===it)return;if(r){st.textContent=it;return}[...Ke.children].forEach(wt=>wt!==st&&wt.remove()),st.className="is-out";let St=document.createElement("span");St.className="is-in",St.textContent=it,Ke.append(St),setTimeout(()=>st.remove(),560)}),(F.aria!==xe||ie.getAttribute("aria-label")!==F.aria)&&ie.setAttribute("aria-label",F.aria)}xe=F.aria}De(),setInterval(De,1e3);let Me=n("[data-cart]"),te=Me.map(F=>c(0,15,ie=>F.style.setProperty("--dip",`${ie.toFixed(2)}px`))),ge=e.store.count();function ne(F){let ie=e.store.count();Me.forEach((B,Ce)=>{B.classList.toggle("has-items",ie>0),B.setAttribute("aria-label",`Kurv, ${ie} ${ie===1?"vare":"varer"}`);let ze=t("[data-cart-num]",B);ze.textContent=ie>99?"99+":String(ie),F&&!r&&(ze.classList.remove("is-in"),B.classList.remove("is-pulse"),B.offsetWidth,ze.classList.add("is-in"),B.classList.add("is-pulse"),te[Ce].v+=120,te[Ce].t=0,d(te[Ce]))}),ge=ie}ne(!1),e.store.on(F=>{F==="cart:add"?ne(!0):F==="cart:change"&&ne(e.store.count()>ge)}),Me.forEach(F=>F.addEventListener("click",()=>{ye(),e.store.openCart()}));let X=t(".hdr-scrim"),pe=()=>X.classList.toggle("is-on",!!(Q||we));X.addEventListener("click",()=>ye());let Ee=t(".hdr-nav"),Ae=t(".hdr-nav__thread"),Ue=c(0,18,F=>Ae.style.setProperty("--tx",`${F.toFixed(2)}px`)),Fe=c(0,18,F=>Ae.style.setProperty("--tw",F.toFixed(2))),re=c(0,14,F=>Ae.style.setProperty("--to",Math.max(0,Math.min(1,F)).toFixed(3))),I=n(".hdr-nav__link");function Le(F){if(!F||F.classList.contains("hdr-nav__link--bw")){f(re,0);return}let ie=parseFloat(getComputedStyle(F).paddingLeft)||12,B=F.offsetLeft+ie,Ce=F.offsetWidth-ie*2,ze=re.x<.05;f(Ue,B,ze),f(Fe,Ce,ze),f(re,1)}let le=t(".hdr-mega"),oe=Object.fromEntries(n(".hdr-mega__panel").map(F=>[F.dataset.panel,F])),Q=null,Se=0,de=0;Object.values(oe).forEach(F=>{let ie=t(".hdr-mega__tiles",F),B=ie.dataset.ids.split(",").filter(it=>e.byId[it]),Ce=B.length<=2?2:1,ze=F.dataset.panel==="sets"||F.dataset.panel==="bw"?"#offers":"#deals",Ke=B.map(it=>`<li${Ce>1?' style="grid-column: span 2"':""}>${w(e.byId[it],ze,Ce>1)}</li>`).join(""),Ze=5-B.length*Ce;Ze>0&&(Ke+=`<li style="grid-column: span ${Ze}">${b()}</li>`),ie.innerHTML=Ke,[...n(".hdr-mega__intro > *",F),...ie.children].forEach((it,st)=>it.style.setProperty("--i",st))}),n(".hdr-mega__more").forEach(F=>F.insertAdjacentHTML("beforeend",'<span class="hdr-pil" aria-hidden="true"></span>'));function T(F){if(clearTimeout(de),clearTimeout(Se),!a.matches||!oe[F])return;we&&ke(!1);let ie=!Q;Q=F,Object.entries(oe).forEach(([B,Ce])=>Ce.classList.toggle("is-active",B===F)),I.forEach(B=>B.classList.toggle("is-open",B.dataset.mega===F)),le.classList.add("is-open"),le.removeAttribute("inert"),le.setAttribute("aria-hidden","false"),m(oe[F]),ie&&requestAnimationFrame(()=>m(oe[F])),pe()}function y(){clearTimeout(Se),clearTimeout(de),Q&&(Q=null,le.classList.remove("is-open"),le.setAttribute("inert",""),le.setAttribute("aria-hidden","true"),I.forEach(F=>F.classList.remove("is-open")),Ee.matches(":hover")||f(re,0),pe())}let Y=(F=200)=>{clearTimeout(Se),clearTimeout(de),de=setTimeout(y,F)};I.forEach(F=>{F.addEventListener("pointerenter",()=>{Le(F);let ie=F.dataset.mega;if(!ie){Q&&Y(160);return}clearTimeout(de),clearTimeout(Se),Q?T(ie):Se=setTimeout(()=>T(ie),110)}),F.addEventListener("focus",()=>{Le(F),F.dataset.mega?T(F.dataset.mega):y()}),F.addEventListener("click",()=>y())}),Ee.addEventListener("pointerleave",()=>{Q?Y(220):(clearTimeout(Se),f(re,0))}),le.addEventListener("pointerenter",()=>clearTimeout(de)),le.addEventListener("pointerleave",()=>{Y(220),f(re,0)}),i.addEventListener("focusout",F=>{Q&&!Ee.contains(F.relatedTarget)&&!le.contains(F.relatedTarget)&&(y(),f(re,0))});let ae=t(".hdr-search"),ve=t(".hdr-search__input"),_e=t(".hdr-search__results"),We=t(".hdr-search__status"),Ne=n(".hdr-search-btn"),we=!1,$e=null,Re=F=>String(F||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,""),Oe=e.products.filter(F=>!F.gift&&F.img);function Je(){let F=ve.value.trim(),ie=Re(F),B,Ce="";if(!ie)B=Mc.map(ze=>e.byId[ze]).filter(Boolean);else{let ze=ie.split(/\s+/);B=Oe.filter(Ke=>{let Ze=Re([Ke.name,Ke.nickname,Ke.eyebrow,Ke.size,Ke.strength,Ke.claim,Ke.notes,Ke.bundle?"sampakke pakke":""].join(" "));return ze.every(it=>Ze.includes(it))}),Ce=B.length?`${B.length} ${B.length===1?"resultat":"resultater"} for \xBB${F}\xAB`:`Ingen resultater for \xBB${F}\xAB \u2013 pr\xF8v fx Natcreme eller Komplet Pakken.`,B.length||(B=Mc.map(Ke=>e.byId[Ke]))}We.textContent=Ce,_e.innerHTML=B.slice(0,8).map((ze,Ke)=>`<li style="--i:${Ke}">${w(ze,ze.bundle?"#offers":"#deals")}</li>`).join(""),m(_e)}function Xe(F){we||(y(),we=!0,$e=F||document.activeElement,ae.classList.add("is-open"),ae.removeAttribute("inert"),ae.setAttribute("aria-hidden","false"),Ne.forEach(ie=>ie.setAttribute("aria-expanded","true")),Je(),pe(),requestAnimationFrame(()=>{m(_e),ve.focus({preventScroll:!0})}))}function ke(F=!0){we&&(we=!1,ae.classList.remove("is-open"),ae.setAttribute("inert",""),ae.setAttribute("aria-hidden","true"),Ne.forEach(ie=>ie.setAttribute("aria-expanded","false")),pe(),F&&$e&&$e.focus&&$e.focus({preventScroll:!0}))}Ne.forEach(F=>F.addEventListener("click",()=>we?ke():Xe(F))),t(".hdr-search__close").addEventListener("click",()=>ke()),ve.addEventListener("input",Je);let P=matchMedia("(max-width: 760px)"),z=()=>ve.placeholder=P.matches?"S\xF8g, fx Vidunder Olien":"S\xF8g efter produkter, fx Vidunder Olien";z(),P.addEventListener("change",z),t(".hdr-search__form").addEventListener("submit",F=>{F.preventDefault();let ie=t(".hdr-tile",_e);ie&&ve.value.trim()&&ie.focus()}),n("[data-q]").forEach(F=>F.addEventListener("click",()=>{ve.value=F.dataset.q,Je(),ve.focus()}));let $=t(".hdr-drawer"),R=t(".hdr-burger");t("[data-logo-clone]").innerHTML=t(".hdr-bar .hdr-logo").innerHTML,n("[data-peek]").forEach(F=>{F.innerHTML=F.dataset.peek.split(",").map(ie=>e.byId[ie]).filter(Boolean).map(ie=>`<span>${g(ie)}</span>`).join("")}),n(".hdr-stagger",$).forEach((F,ie)=>F.style.setProperty("--i",ie));let ee=!1,V="";$.tabIndex=-1;function H(F){if(ee)return;let ie=F&&F.detail===0;ye(),ee=!0,$.hidden=!1,$.offsetWidth,$.classList.add("is-open"),R.setAttribute("aria-expanded","true"),V=document.documentElement.style.overflow,document.documentElement.style.overflow="hidden",requestAnimationFrame(()=>m($,.8,.9,.86)),setTimeout(()=>(ie?t(".hdr-drawer__close"):$).focus({preventScroll:!0}),60)}function be(F=!0){if(!ee)return;ee=!1,$.classList.remove("is-open"),R.setAttribute("aria-expanded","false"),document.documentElement.style.overflow=V;let ie=()=>{ee||($.hidden=!0)};r?ie():setTimeout(ie,420),F&&R.focus({preventScroll:!0})}R.addEventListener("click",H),t(".hdr-drawer__close").addEventListener("click",()=>be()),t("[data-open-search]").addEventListener("click",()=>{be(!1),setTimeout(()=>Xe(R),r?0:200)}),$.addEventListener("keydown",F=>{if(F.key!=="Tab")return;let ie=n("a[href], button:not([disabled])",$).filter(ze=>ze.offsetParent!==null),B=ie[0],Ce=ie.at(-1);F.shiftKey&&document.activeElement===B?(F.preventDefault(),Ce.focus()):!F.shiftKey&&document.activeElement===Ce&&(F.preventDefault(),B.focus())}),a.addEventListener("change",F=>{F.matches?be(!1):y()});function ye(){y(),ke(!1)}if(document.addEventListener("keydown",F=>{if(F.key==="Escape"){if(ee)be();else if(we)ke();else if(Q){let ie=I.find(B=>B.dataset.mega===Q);y(),ie&&ie.focus()}}}),i.addEventListener("click",F=>{let ie=F.target.closest('a[href^="#"]');if(!ie)return;let B=ie.getAttribute("href").slice(1);F.preventDefault();let Ce=ee;if(be(!1),ye(),B==="indhold"){let Ze=i.nextElementSibling;if(!Ze)return;Ze.setAttribute("tabindex","-1"),Ze.focus({preventScroll:!0}),scrollTo({top:Ze.getBoundingClientRect().top+scrollY-i.getBoundingClientRect().height+parseFloat(getComputedStyle(i).getPropertyValue("--ann-h")),behavior:r?"auto":"smooth"});return}if(B==="top"){scrollTo({top:0,behavior:r?"auto":"smooth"});return}let ze=document.querySelector(`[data-section="${B}"]`)||document.getElementById(B);if(!ze||ze===i)return;let Ke=()=>{let Ze=t(".hdr-bar").getBoundingClientRect().height;scrollTo({top:ze.getBoundingClientRect().top+scrollY-Ze+1,behavior:r?"auto":"smooth"})};Ce?setTimeout(Ke,80):Ke()}),addEventListener("resize",()=>{Q&&m(oe[Q]),we&&m(_e),ee&&m($,.8,.9,.86)},{passive:!0}),s.get("cart")){let F=Math.min(9,+s.get("cart")||0);setTimeout(()=>F&&e.store.add("skin-oil",F),+s.get("cartAt")||400)}s.get("menu")==="1"&&setTimeout(H,150),s.has("search")&&setTimeout(()=>{ve.value=s.get("search")==="1"?"":s.get("search"),Xe()},150),s.get("mega")&&setTimeout(()=>{T(s.get("mega"));let F=I.find(ie=>ie.dataset.mega===s.get("mega"));Le(F)},150),s.get("pause")==="1"&&C.click()}function ui(i,e){let t=!1;return new IntersectionObserver(([s])=>{t=s.isIntersecting,e&&e(t)},{rootMargin:"120px"}).observe(i),()=>t}var bn=()=>Math.min(window.devicePixelRatio||1,2);var Nu=0,bc=1,Bu=2;var Uh=1,ku=2,jn=3,yi=0,zt=1,gn=2,kn=0,xi=1,fs=2,Sc=3,wc=4,Bl=5,Ui=100,Ou=101,zu=102,Hu=103,Vu=104,Gu=200,kl=201,Wu=202,qu=203,yo=204,cr=205,Xu=206,Yu=207,Ku=208,Zu=209,Ju=210,Qu=211,ju=212,$u=213,ed=214,Mo=0,_o=1,bo=2,ps=3,So=4,wo=5,Eo=6,Ao=7,Fh=0,td=1,nd=2,On=0,id=1,sd=2,rd=3,ad=4,od=5,ld=6,Ol=7;var Nh=300,ms=301,gs=302,To=303,Ro=304,wa=306,ki=1e3,Bi=1001,Co=1002,ln=1003,cd=1004;var Cr=1005;var Nn=1006,Va=1007;var ei=1008;var ii=1009,Bh=1010,kh=1011,hr=1012,zl=1013,Oi=1014,Bn=1015,hn=1016,Hl=1017,Vl=1018,vs=1020,Oh=35902,zh=1021,Hh=1022,An=1023,Vh=1024,Gh=1025,hs=1026,xs=1027,Gl=1028,Wl=1029,Wh=1030,ql=1031;var Xl=1033,ea=33776,ta=33777,na=33778,ia=33779,Io=35840,Lo=35841,Po=35842,Do=35843,Uo=36196,Fo=37492,No=37496,Bo=37808,ko=37809,Oo=37810,zo=37811,Ho=37812,Vo=37813,Go=37814,Wo=37815,qo=37816,Xo=37817,Yo=37818,Ko=37819,Zo=37820,Jo=37821,sa=36492,Qo=36494,jo=36495,qh=36283,$o=36284,el=36285,tl=36286;var ra=2300,nl=2301,Ga=2302,Ec=2400,Ac=2401,Tc=2402;var hd=3200,ud=3201;var Xh=0,dd=1,on="",Ot="srgb",Cs="srgb-linear",Ea="linear",yt="srgb";var Yi=7680;var Rc=519,fd=512,pd=513,md=514,Yh=515,gd=516,vd=517,xd=518,yd=519,Cc=35044,Kh=35048;var Ic="300 es",ti=2e3,aa=2001,Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=1234567,ar=Math.PI/180,ys=180/Math.PI;function Is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function Yl(i,e){return(i%e+e)%e}function Md(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _d(i,e,t){return i!==e?(t-i)/(e-i):0}function or(i,e,t){return(1-t)*i+t*e}function bd(i,e,t,n){return or(i,e,1-Math.exp(-t*n))}function Sd(i,e=1){return e-Math.abs(Yl(i,e*2)-e)}function wd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ed(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ad(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Td(i,e){return i+Math.random()*(e-i)}function Rd(i){return i*(.5-Math.random())}function Cd(i){i!==void 0&&(Lc=i);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Id(i){return i*ar}function Ld(i){return i*ys}function Pd(i){return(i&i-1)===0&&i!==0}function Dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var In={DEG2RAD:ar,RAD2DEG:ys,generateUUID:Is,clamp:Ut,euclideanModulo:Yl,mapLinear:Md,inverseLerp:_d,lerp:or,damp:bd,pingpong:Sd,smoothstep:wd,smootherstep:Ed,randInt:Ad,randFloat:Td,randFloatSpread:Rd,seededRandom:Cd,degToRad:Id,radToDeg:Ld,isPowerOfTwo:Pd,ceilPowerOfTwo:Dd,floorPowerOfTwo:Ud,setQuaternionFromProperEuler:Fd,normalize:Qt,denormalize:ls},He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],v=n[8],g=s[0],m=s[3],p=s[6],w=s[1],b=s[4],M=s[7],O=s[2],E=s[5],C=s[8];return r[0]=a*g+o*w+l*O,r[3]=a*m+o*b+l*E,r[6]=a*p+o*M+l*C,r[1]=c*g+u*w+h*O,r[4]=c*m+u*b+h*E,r[7]=c*p+u*M+h*C,r[2]=d*g+f*w+v*O,r[5]=d*m+f*b+v*E,r[8]=d*p+f*M+v*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,v=t*h+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return e[0]=h*g,e[1]=(s*c-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new ot;function Zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){let i=ur("canvas");return i.style.display="block",i}var Pc={};function sr(i){i in Pc||(Pc[i]=!0,console.warn(i))}function Bd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function kd(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Od(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ft={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===on?Ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Dc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Fc=[.3127,.329],Nc=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[Cs]:{primaries:Dc,whitePoint:Fc,transfer:Ea,toXYZ:Nc,fromXYZ:Bc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:Dc,whitePoint:Fc,transfer:yt,toXYZ:Nc,fromXYZ:Bc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});var Ki,il=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=ur("canvas")),Ki.width=e.width,Ki.height=e.height;let n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zd=0,oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qa(s[a].image)):r.push(qa(s[a]))}else r=qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hd=0,$t=class i extends Mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=Nn,a=ei,o=An,l=ii,c=i.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Is(),this.name="",this.source=new oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Nh;$t.DEFAULT_ANISOTROPY=1;var Mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(f+1)/2,O=(p+1)/2,E=(u+d)/4,C=(h+g)/4,N=(v+m)/4;return b>M&&b>O?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=C/n):M>O?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=N/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=C/r,s=N/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(h-g)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sl=class extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},la=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==v){let m=1-o,p=l*d+c*f+u*v+h*g,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let O=Math.sqrt(b),E=Math.atan2(O,p*w);m=Math.sin(m*E)/O,o=Math.sin(o*E)/O}let M=o*w;if(l=l*m+d*M,c=c*m+f*M,u=u*m+v*M,h=h*m+g*M,m===1-o){let O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*f-c*d,e[t+1]=l*v+u*d+c*h-o*f,e[t+2]=c*v+u*f+o*d-l*h,e[t+3]=u*v-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new W,kc=new _i,si=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Lr.subVectors(this.max,Qs),Zi.subVectors(e.a,Qs),Ji.subVectors(e.b,Qs),Qi.subVectors(e.c,Qs),di.subVectors(Ji,Zi),fi.subVectors(Qi,Ji),Ti.subVectors(Zi,Qi);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ti.z,Ti.y,di.z,0,-di.x,fi.z,0,-fi.x,Ti.z,0,-Ti.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ti.y,Ti.x,0];return!Ya(t,Zi,Ji,Qi,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Zi,Ji,Qi,Lr))?!1:(Pr.crossVectors(di,fi),t=[Pr.x,Pr.y,Pr.z],Ya(t,Zi,Ji,Qi,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new W,new W,new W,new W,new W,new W,new W,new W],Sn=new W,Ir=new si,Zi=new W,Ji=new W,Qi=new W,di=new W,fi=new W,Ti=new W,Qs=new W,Lr=new W,Pr=new W,Ri=new W;function Ya(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vd=new si,js=new W,Ka=new W,zn=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);let t=js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Ka)),this.expandByPoint(js.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new W,Za=new W,Dr=new W,pi=new W,Ja=new W,Ur=new W,Qa=new W,zi=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Za);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=pi.dot(this.direction),l=-pi.dot(Dr),c=pi.lengthSq(),u=Math.abs(1-a*a),h,d,f,v;if(u>0)if(h=a*l-o,d=a*o-l,v=r*u,h>=0)if(d>=-v)if(d<=v){let g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Za).addScaledVector(Dr,d),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){Ja.subVectors(t,e),Ur.subVectors(n,e),Qa.crossVectors(Ja,Ur);let a=this.direction.dot(Qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);let l=o*this.direction.dot(Ur.crossVectors(pi,Ur));if(l<0)return null;let c=o*this.direction.dot(Ja.cross(pi));if(c<0||l+c>a)return null;let u=-o*pi.dot(Qa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,v,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,v,g,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,v,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,v=c*u,g=c*h;t[0]=d+g*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,v=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=v*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=v*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+v,t[10]=d-g*h}else if(e.order==="XZY"){let d=a*l,f=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gd,e,Wd)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),mi.crossVectors(n,rn),mi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),mi.crossVectors(n,rn)),mi.normalize(),Fr.crossVectors(rn,mi),s[0]=mi.x,s[4]=Fr.x,s[8]=rn.x,s[1]=mi.y,s[5]=Fr.y,s[9]=rn.y,s[2]=mi.z,s[6]=Fr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],w=n[3],b=n[7],M=n[11],O=n[15],E=s[0],C=s[4],N=s[8],_=s[12],x=s[1],U=s[5],K=s[9],Z=s[13],se=s[2],G=s[6],L=s[10],q=s[14],k=s[3],he=s[7],xe=s[11],Te=s[15];return r[0]=a*E+o*x+l*se+c*k,r[4]=a*C+o*U+l*G+c*he,r[8]=a*N+o*K+l*L+c*xe,r[12]=a*_+o*Z+l*q+c*Te,r[1]=u*E+h*x+d*se+f*k,r[5]=u*C+h*U+d*G+f*he,r[9]=u*N+h*K+d*L+f*xe,r[13]=u*_+h*Z+d*q+f*Te,r[2]=v*E+g*x+m*se+p*k,r[6]=v*C+g*U+m*G+p*he,r[10]=v*N+g*K+m*L+p*xe,r[14]=v*_+g*Z+m*q+p*Te,r[3]=w*E+b*x+M*se+O*k,r[7]=w*C+b*U+M*G+O*he,r[11]=w*N+b*K+M*L+O*xe,r[15]=w*_+b*Z+M*q+O*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+g*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],p=e[15],w=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,b=v*d*c-u*m*c-v*l*f+a*m*f+u*l*p-a*d*p,M=u*g*c-v*h*c+v*o*f-a*g*f-u*o*p+a*h*p,O=v*h*l-u*g*l-v*o*d+a*g*d+u*o*m-a*h*m,E=t*w+n*b+s*M+r*O;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return e[0]=w*C,e[1]=(g*d*r-h*m*r-g*s*f+n*m*f+h*s*p-n*d*p)*C,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*p+n*l*p)*C,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*C,e[4]=b*C,e[5]=(u*m*r-v*d*r+v*s*f-t*m*f-u*s*p+t*d*p)*C,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*C,e[8]=M*C,e[9]=(v*h*r-u*g*r-v*n*f+t*g*f+u*n*p-t*h*p)*C,e[10]=(a*g*r-v*o*r+v*n*c-t*g*c-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*C,e[12]=O*C,e[13]=(u*g*s-v*h*s+v*n*d-t*g*d-u*n*m+t*h*m)*C,e[14]=(v*o*s-a*g*s-v*n*l+t*g*l+a*n*m-t*o*m)*C,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,v=r*h,g=a*u,m=a*h,p=o*h,w=l*c,b=l*u,M=l*h,O=n.x,E=n.y,C=n.z;return s[0]=(1-(g+p))*O,s[1]=(f+M)*O,s[2]=(v-b)*O,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+p))*E,s[6]=(m+w)*E,s[7]=0,s[8]=(v+b)*C,s[9]=(m-w)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);let c=1/r,u=1/a,h=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ti){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,v;if(o===ti)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===aa)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ti){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,f=(n+s)*u,v,g;if(o===ti)v=(a+r)*h,g=-2*h;else if(o===aa)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ji=new W,wn=new mt,Gd=new W(0,0,0),Wd=new W(1,1,1),mi=new W,Fr=new W,rn=new W,Oc=new mt,zc=new _i,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qd=0,Hc=new W,$i=new _i,Zn=new mt,Nr=new W,$s=new W,Xd=new W,Yd=new _i,Vc=new W(1,0,0),Gc=new W(0,1,0),Wc=new W(0,0,1),qc={type:"added"},Kd={type:"removed"},es={type:"childadded",child:null},ja={type:"childremoved",child:null},Ht=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new vn,n=new _i,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new ot}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($s,Nr,this.up):Zn.lookAt(Nr,$s,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Zn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new W(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new W,Jn=new W,$a=new W,Qn=new W,ts=new W,ns=new W,Xc=new W,eo=new W,to=new W,no=new W,io=new Mt,so=new Mt,ro=new Mt,Fi=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Jn.subVectors(n,t),$a.subVectors(e,t);let a=En.dot(En),o=En.dot(Jn),l=En.dot($a),c=Jn.dot(Jn),u=Jn.dot($a),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,v=(a*u-o*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(e,t),so.fromBufferAttribute(e,n),ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(io,r.x),a.addScaledVector(so,r.y),a.addScaledVector(ro,r.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Jn.subVectors(e,t),En.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),ns.subVectors(r,n),eo.subVectors(e,n);let l=ts.dot(eo),c=ns.dot(eo);if(l<=0&&c<=0)return t.copy(n);to.subVectors(e,s);let u=ts.dot(to),h=ns.dot(to);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ts,a);no.subVectors(e,r);let f=ts.dot(no),v=ns.dot(no);if(v>=0&&f<=v)return t.copy(r);let g=f*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(ns,o);let m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return Xc.subVectors(r,s),o=(h-u)/(h-u+(f-v)),t.copy(s).addScaledVector(Xc,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ao(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Yl(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ao(a,r,e+1/3),this.g=ao(a,r,e),this.b=ao(a,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ft.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Ut(Kt.r*255,0,255))*65536+Math.round(Ut(Kt.g*255,0,255))*256+Math.round(Ut(Kt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Ot){ft.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,s=Kt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Br);let n=or(gi.h,Br.h,t),s=or(gi.s,Br.s,t),r=or(gi.l,Br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new et;et.NAMES=Jh;var Zd=0,bi=class extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Is(),this.name="",this.blending=xi,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=cr,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==cr&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gt=class extends bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new W,kr=new He,Tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}};var ca=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ha=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jd=0,mn=new mt,oo=new Ht,is=new W,an=new si,er=new si,kt=new W,Rt=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?ha:ca)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(an.min,er.min),an.expandByPoint(kt),kt.addVectors(an.max,er.max),an.expandByPoint(kt)):(an.expandByPoint(er.min),an.expandByPoint(er.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),kt.add(is)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new W,l[N]=new W;let c=new W,u=new W,h=new W,d=new He,f=new He,v=new He,g=new W,m=new W;function p(N,_,x){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,_),v.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),v.sub(d);let U=1/(f.x*v.y-v.x*f.y);isFinite(U)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(U),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(U),o[N].add(g),o[_].add(g),o[x].add(g),l[N].add(m),l[_].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,_=w.length;N<_;++N){let x=w[N],U=x.start,K=x.count;for(let Z=U,se=U+K;Z<se;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let b=new W,M=new W,O=new W,E=new W;function C(N){O.fromBufferAttribute(s,N),E.copy(O);let _=o[N];b.copy(_),b.sub(O.multiplyScalar(O.dot(_))).normalize(),M.crossVectors(E,_);let U=M.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,U)}for(let N=0,_=w.length;N<_;++N){let x=w[N],U=x.start,K=x.count;for(let Z=U,se=U+K;Z<se;Z+=3)C(e.getX(Z+0)),C(e.getX(Z+1)),C(e.getX(Z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[f++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yc=new mt,Ci=new zi,Or=new zn,Kc=new W,zr=new W,Hr=new W,Vr=new W,lo=new W,Gr=new W,Zc=new W,Wr=new W,je=class extends Ht{constructor(e=new Rt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(lo.fromBufferAttribute(h,e),a?Gr.addScaledVector(lo,u):Gr.addScaledVector(lo.sub(t),u))}t.add(Gr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Or.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Or,Kc)===null||Ci.origin.distanceToSquared(Kc)>(e.far-e.near)**2))&&(Yc.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){let m=d[v],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,O=b;M<O;M+=3){let E=o.getX(M),C=o.getX(M+1),N=o.getX(M+2);s=qr(this,p,e,n,c,u,h,E,C,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){let w=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=qr(this,a,e,n,c,u,h,w,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){let m=d[v],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,O=b;M<O;M+=3){let E=M,C=M+1,N=M+2;s=qr(this,p,e,n,c,u,h,E,C,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){let w=m,b=m+1,M=m+2;s=qr(this,a,e,n,c,u,h,w,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qd(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===yi,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:i}}function qr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,zr),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Vr);let u=Qd(i,e,t,n,zr,Hr,Vr,Zc);if(u){let h=new W;Fi.getBarycoord(Zc,zr,Hr,Vr,h),s&&(u.uv=Fi.getInterpolatedAttribute(s,o,l,c,h,new He)),r&&(u.uv1=Fi.getInterpolatedAttribute(r,o,l,c,h,new He)),a&&(u.normal=Fi.getInterpolatedAttribute(a,o,l,c,h,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new W,materialIndex:0};Fi.getNormal(zr,Hr,Vr,d.normal),u.face=d,u.barycoord=h}return u}var ri=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(h,2));function v(g,m,p,w,b,M,O,E,C,N,_){let x=M/C,U=O/N,K=M/2,Z=O/2,se=E/2,G=C+1,L=N+1,q=0,k=0,he=new W;for(let xe=0;xe<L;xe++){let Te=xe*U-Z;for(let De=0;De<G;De++){let Me=De*x-K;he[g]=Me*w,he[m]=Te*b,he[p]=se,c.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[p]=E>0?1:-1,u.push(he.x,he.y,he.z),h.push(De/C),h.push(1-xe/N),q+=1}}for(let xe=0;xe<N;xe++)for(let Te=0;Te<C;Te++){let De=d+Te+G*xe,Me=d+Te+G*(xe+1),te=d+(Te+1)+G*(xe+1),ge=d+(Te+1)+G*xe;l.push(De,Me,ge),l.push(Me,te,ge),k+=6}o.addGroup(f,k,_),f+=k,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=Ms(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Ls={clone:Ms,merge:jt},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gt=class extends bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_s=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new W,Jc=new He,Qc=new He,Ct=class extends _s{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Jc,Qc),t.subVectors(Qc,Jc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=-90,rs=1,al=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Ct(ss,rs,e,t);r.layers=this.layers,this.add(r);let a=new Ct(ss,rs,e,t);a.layers=this.layers,this.add(a);let o=new Ct(ss,rs,e,t);o.layers=this.layers,this.add(o);let l=new Ct(ss,rs,e,t);l.layers=this.layers,this.add(l);let c=new Ct(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ua=class extends $t{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ol=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ua(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:kn});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=Nn),new al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},co=new W,tf=new W,nf=new ot,$n=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=co.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nf.getNormalMatrix(e),s=this.coplanarPoint(co).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new zn,Xr=new W,fr=class{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],v=s[9],g=s[10],m=s[11],p=s[12],w=s[13],b=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+u,m+v,M+w).normalize(),n[3].setComponents(l-a,d-u,m-v,M-w).normalize(),n[4].setComponents(l-o,d-h,m-g,M-b).normalize(),t===ti)n[5].setComponents(l+o,d+h,m+g,M+b).normalize();else if(t===aa)n[5].setComponents(o,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sf(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<h.length;f++){let v=h[d],g=h[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,v=h.length;f<v;f++){let g=h[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var en=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],v=[],g=[],m=[];for(let p=0;p<u;p++){let w=p*d-a;for(let b=0;b<c;b++){let M=b*h-r;v.push(M,-w,0),g.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let b=w+c*p,M=w+c*(p+1),O=w+1+c*(p+1),E=w+1+c*p;f.push(b,M,E),f.push(M,O,E)}this.setIndex(f),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(g,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
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
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
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
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rf=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
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
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
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
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,sp=`
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
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
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,fm=`#define DISTANCE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,ym=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,_m=`#define LAMBERT
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
}`,wm=`#define NORMAL
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
}`,Em=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:vf,iridescence_fragment:xf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Sf,color_fragment:wf,color_pars_fragment:Ef,color_pars_vertex:Af,color_vertex:Tf,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:If,displacementmap_pars_vertex:Lf,displacementmap_vertex:Pf,emissivemap_fragment:Df,emissivemap_pars_fragment:Uf,colorspace_fragment:Ff,colorspace_pars_fragment:Nf,envmap_fragment:Bf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Of,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Qf,envmap_vertex:Hf,fog_vertex:Vf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:qf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Jf,lights_toon_fragment:jf,lights_toon_pars_fragment:$f,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:vp,morphcolor_vertex:xp,morphnormal_vertex:yp,morphtarget_pars_vertex:Mp,morphtarget_vertex:_p,normal_fragment_begin:bp,normal_fragment_maps:Sp,normal_pars_fragment:wp,normal_pars_vertex:Ep,normal_vertex:Ap,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Lp,opaque_fragment:Pp,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Fp,dithering_fragment:Np,dithering_pars_fragment:Bp,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:qp,skinning_vertex:Xp,skinnormal_vertex:Yp,specularmap_fragment:Kp,specularmap_pars_fragment:Zp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Qp,transmission_fragment:jp,transmission_pars_fragment:$p,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:vm,meshbasic_vert:xm,meshbasic_frag:ym,meshlambert_vert:Mm,meshlambert_frag:_m,meshmatcap_vert:bm,meshmatcap_frag:Sm,meshnormal_vert:wm,meshnormal_frag:Em,meshphong_vert:Am,meshphong_frag:Tm,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Im,meshtoon_frag:Lm,points_vert:Pm,points_frag:Dm,shadow_vert:Um,shadow_frag:Fm,sprite_vert:Nm,sprite_frag:Bm},Ge={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Fn={basic:{uniforms:jt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:jt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new et(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:jt([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:jt([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:jt([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new et(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:jt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:jt([Ge.points,Ge.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:jt([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:jt([Ge.common,Ge.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:jt([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:jt([Ge.sprite,Ge.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:jt([Ge.common,Ge.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:jt([Ge.lights,Ge.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Fn.physical={uniforms:jt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Yr={r:0,b:0,g:0},Li=new vn,km=new mt;function Om(i,e,t,n,s,r,a){let o=new et(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function v(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function g(w){let b=!1,M=v(w);M===null?p(o,l):M&&M.isColor&&(p(M,1),b=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,b){let M=v(b);M&&(M.isCubeTexture||M.mapping===wa)?(u===void 0&&(u=new je(new ri(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Ms(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Li.copy(b.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(Li)),u.material.toneMapped=ft.getTransfer(M.colorSpace)!==yt,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new je(new en(2,2),new gt({name:"BackgroundMaterial",uniforms:Ms(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ft.getTransfer(M.colorSpace)!==yt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(Yr,Qh(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:g,addToRenderList:m}}function zm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(x,U,K,Z,se){let G=!1,L=h(Z,K,U);r!==L&&(r=L,c(r.object)),G=f(x,Z,K,se),G&&v(x,Z,K,se),se!==null&&e.update(se,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(x,U,K,Z),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,U,K){let Z=K.wireframe===!0,se=n[x.id];se===void 0&&(se={},n[x.id]=se);let G=se[U.id];G===void 0&&(G={},se[U.id]=G);let L=G[Z];return L===void 0&&(L=d(l()),G[Z]=L),L}function d(x){let U=[],K=[],Z=[];for(let se=0;se<t;se++)U[se]=0,K[se]=0,Z[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:Z,object:x,attributes:{},index:null}}function f(x,U,K,Z){let se=r.attributes,G=U.attributes,L=0,q=K.getAttributes();for(let k in q)if(q[k].location>=0){let xe=se[k],Te=G[k];if(Te===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;L++}return r.attributesNum!==L||r.index!==Z}function v(x,U,K,Z){let se={},G=U.attributes,L=0,q=K.getAttributes();for(let k in q)if(q[k].location>=0){let xe=G[k];xe===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor));let Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),se[k]=Te,L++}r.attributes=se,r.attributesNum=L,r.index=Z}function g(){let x=r.newAttributes;for(let U=0,K=x.length;U<K;U++)x[U]=0}function m(x){p(x,0)}function p(x,U){let K=r.newAttributes,Z=r.enabledAttributes,se=r.attributeDivisors;K[x]=1,Z[x]===0&&(i.enableVertexAttribArray(x),Z[x]=1),se[x]!==U&&(i.vertexAttribDivisor(x,U),se[x]=U)}function w(){let x=r.newAttributes,U=r.enabledAttributes;for(let K=0,Z=U.length;K<Z;K++)U[K]!==x[K]&&(i.disableVertexAttribArray(K),U[K]=0)}function b(x,U,K,Z,se,G,L){L===!0?i.vertexAttribIPointer(x,U,K,se,G):i.vertexAttribPointer(x,U,K,Z,se,G)}function M(x,U,K,Z){g();let se=Z.attributes,G=K.getAttributes(),L=U.defaultAttributeValues;for(let q in G){let k=G[q];if(k.location>=0){let he=se[q];if(he===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),he!==void 0){let xe=he.normalized,Te=he.itemSize,De=e.get(he);if(De===void 0)continue;let Me=De.buffer,te=De.type,ge=De.bytesPerElement,ne=te===i.INT||te===i.UNSIGNED_INT||he.gpuType===zl;if(he.isInterleavedBufferAttribute){let X=he.data,pe=X.stride,Ee=he.offset;if(X.isInstancedInterleavedBuffer){for(let Ae=0;Ae<k.locationSize;Ae++)p(k.location+Ae,X.meshPerAttribute);x.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)m(k.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ae=0;Ae<k.locationSize;Ae++)b(k.location+Ae,Te/k.locationSize,te,xe,pe*ge,(Ee+Te/k.locationSize*Ae)*ge,ne)}else{if(he.isInstancedBufferAttribute){for(let X=0;X<k.locationSize;X++)p(k.location+X,he.meshPerAttribute);x.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let X=0;X<k.locationSize;X++)m(k.location+X);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let X=0;X<k.locationSize;X++)b(k.location+X,Te/k.locationSize,te,xe,Te*ge,Te/k.locationSize*X*ge,ne)}}else if(L!==void 0){let xe=L[q];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(k.location,xe);break;case 3:i.vertexAttrib3fv(k.location,xe);break;case 4:i.vertexAttrib4fv(k.location,xe);break;default:i.vertexAttrib1fv(k.location,xe)}}}}w()}function O(){N();for(let x in n){let U=n[x];for(let K in U){let Z=U[K];for(let se in Z)u(Z[se].object),delete Z[se];delete U[K]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let U=n[x.id];for(let K in U){let Z=U[K];for(let se in Z)u(Z[se].object),delete Z[se];delete U[K]}delete n[x.id]}function C(x){for(let U in n){let K=n[U];if(K[x.id]===void 0)continue;let Z=K[x.id];for(let se in Z)u(Z[se].object),delete Z[se];delete K[x.id]}}function N(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:_,dispose:O,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function Hm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g]*d[g];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==An&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let N=C===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ii&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Bn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:O,maxSamples:E}}function Gm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new $n,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,b=w*4,M=p.clippingState||null;l.value=M,M=u(v,d,b,f);for(let O=0;O!==b;++O)M[O]=t[O];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,v){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,v!==!0||m===null){let p=f+g*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==g;++b,M+=4)a.copy(h[b]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Wm(i){let e=new WeakMap;function t(a,o){return o===To?a.mapping=ms:o===Ro&&(a.mapping=gs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===To||o===Ro)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ol(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bs=class extends _s{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cs=4,jc=[.125,.215,.35,.446,.526,.582],Ni=20,ho=new bs,$c=new et,uo=null,fo=0,po=0,mo=!1,Di=(1+Math.sqrt(5))/2,as=1/Di,eh=[new W(-Di,as,0),new W(Di,as,0),new W(-as,0,Di),new W(as,0,Di),new W(0,Di,-as),new W(0,Di,as),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Si=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:hn,format:An,colorSpace:Cs,depthBuffer:!1},s=th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(r)),this._blurMaterial=Xm(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,n,s){let o=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($c),u.toneMapping=On,u.autoClear=!1;let f=new Gt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),v=new je(new ri,f),g=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy($c),g=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let b=this._cubeSize;Kr(s,w*b,p>2?b:0,b,b),u.setRenderTarget(s),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ms||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ho)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eh[(s-r-1)%eh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new je(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);let p=[],w=0;for(let C=0;C<Ni;++C){let N=C/g,_=Math.exp(-N*N/2);p.push(_),C===0?w+=_:C<m&&(w+=2*_)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;let M=this._sizeLods[s],O=3*M*(s>b-cs?s-b+cs:0),E=4*(this._cubeSize-M);Kr(t,O,E,3*M,2*M),l.setRenderTarget(t),l.render(h,ho)}};function qm(i){let e=[],t=[],n=[],s=i,r=i-cs+1+jc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-cs?l=jc[a-i+cs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,g=3,m=2,p=1,w=new Float32Array(g*v*f),b=new Float32Array(m*v*f),M=new Float32Array(p*v*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,N=E>2?0:-1,_=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(_,g*v*E),b.set(d,m*v*E);let x=[E,E,E,E,E,E];M.set(x,p*v*E)}let O=new Rt;O.setAttribute("position",new Tt(w,g)),O.setAttribute("uv",new Tt(b,m)),O.setAttribute("faceIndex",new Tt(M,p)),e.push(O),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function th(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xm(i,e,t){let n=new Float32Array(Ni),s=new W(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function nh(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ih(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function Ym(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===To||l===Ro,u=l===ms||l===gs;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Si(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Si(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Km(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let v in d)e.update(d[v],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let v in f){let g=f[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,v=h.attributes.position,g=0;if(f!==null){let w=f.array;g=f.version;for(let b=0,M=w.length;b<M;b+=3){let O=w[b+0],E=w[b+1],C=w[b+2];d.push(O,E,E,C,C,O)}}else if(v!==void 0){let w=v.array;g=v.version;for(let b=0,M=w.length/3-1;b<M;b+=3){let O=b+0,E=b+1,C=b+2;d.push(O,E,E,C,C,O)}}else return;let m=new(Zh(d)?ha:ca)(d,1);m.version=g;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Jm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,d*a,v),t.update(f,n,v))}function u(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,n,1)}function h(d,f,v,g){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,v);let p=0;for(let w=0;w<v;w++)p+=f[w]*g[w];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Qm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jm(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let _=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],b=0;f===!0&&(b=1),v===!0&&(b=2),g===!0&&(b=3);let M=o.attributes.position.count*b,O=1;M>e.maxTextureSize&&(O=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*O*4*h),C=new la(E,M,O,h);C.type=Bn,C.needsUpdate=!0;let N=b*4;for(let x=0;x<h;x++){let U=m[x],K=p[x],Z=w[x],se=M*O*4*x;for(let G=0;G<U.count;G++){let L=G*N;f===!0&&(s.fromBufferAttribute(U,G),E[se+L+0]=s.x,E[se+L+1]=s.y,E[se+L+2]=s.z,E[se+L+3]=0),v===!0&&(s.fromBufferAttribute(K,G),E[se+L+4]=s.x,E[se+L+5]=s.y,E[se+L+6]=s.z,E[se+L+7]=0),g===!0&&(s.fromBufferAttribute(Z,G),E[se+L+8]=s.x,E[se+L+9]=s.y,E[se+L+10]=s.z,E[se+L+11]=Z.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new He(M,O)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $m(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var da=class extends $t{constructor(e,t,n,s,r,a,o,l,c,u=hs){if(u!==hs&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hs&&(n=Oi),n===void 0&&u===xs&&(n=vs),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$h=new $t,sh=new da(1,1),eu=new la,tu=new rl,nu=new ua,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Aa(i,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),Nt(t,n)}}function rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),Nt(t,n)}}function ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),Nt(t,n)}}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sh.compareFunction=Yh,r=sh):r=$h,t.setTexture2D(e||r,s)}function gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tu,s)}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nu,s)}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||eu,s)}function yg(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}function Mg(i,e){i.uniform1fv(this.addr,e)}function _g(i,e){let t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function bg(i,e){let t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function Sg(i,e){let t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function wg(i,e){let t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Eg(i,e){let t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ag(i,e){let t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tg(i,e){i.uniform1iv(this.addr,e)}function Rg(i,e){i.uniform2iv(this.addr,e)}function Cg(i,e){i.uniform3iv(this.addr,e)}function Ig(i,e){i.uniform4iv(this.addr,e)}function Lg(i,e){i.uniform1uiv(this.addr,e)}function Pg(i,e){i.uniform2uiv(this.addr,e)}function Dg(i,e){i.uniform3uiv(this.addr,e)}function Ug(i,e){i.uniform4uiv(this.addr,e)}function Fg(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||$h,r[a])}function Ng(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tu,r[a])}function Bg(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nu,r[a])}function kg(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||eu,r[a])}function Og(i){switch(i){case 5126:return Mg;case 35664:return _g;case 35665:return bg;case 35666:return Sg;case 35674:return wg;case 35675:return Eg;case 35676:return Ag;case 5124:case 35670:return Tg;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Pg;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}var ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yg(t.type)}},cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Og(t.type)}},hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},go=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function zg(i,e,t){let n=i.name,s=n.length;for(go.lastIndex=0;;){let r=go.exec(n),a=go.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hh(t,c===void 0?new ll(o,i,e):new cl(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new hl(o),hh(t,h)),t=h}}}var ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function uh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hg=37297,Vg=0;function Gg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dh=new ot;function Wg(i){ft._getMatrix(dh,ft.workingColorSpace,i);let e=`mat3( ${dh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gg(i.getShaderSource(e),a)}else return s}function qg(i,e){let t=Wg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,e){let t;switch(e){case id:t="Linear";break;case sd:t="Reinhard";break;case rd:t="Cineon";break;case ad:t="ACESFilmic";break;case ld:t="AgX";break;case Ol:t="Neutral";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zr=new W;function Yg(){ft.getLuminanceCoefficients(Zr);let i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Zg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function ph(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Qg,$g)}var jg=new Map;function $g(i,e){let t=lt[e];if(t===void 0){let n=jg.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}var e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(e0,t0)}function t0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function n0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function i0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===gs&&(e="ENVMAP_MODE_REFRACTION"),e}function r0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function a0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=n0(t),c=i0(t),u=s0(t),h=r0(t),d=a0(t),f=Kg(t),v=Zg(r),g=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?lt.tonemapping_pars_fragment:"",t.toneMapping!==On?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),Yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=ul(a),a=ph(a,t),a=mh(a,t),o=ul(o),o=ph(o,t),o=mh(o,t),a=gh(a),o=gh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+m+a,M=w+p+o,O=uh(s,s.VERTEX_SHADER,b),E=uh(s,s.FRAGMENT_SHADER,M);s.attachShader(g,O),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(U){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(g).trim(),Z=s.getShaderInfoLog(O).trim(),se=s.getShaderInfoLog(E).trim(),G=!0,L=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,O,E);else{let q=fh(s,O,"vertex"),k=fh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+q+`
`+k)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Z===""||se==="")&&(L=!1);L&&(U.diagnostics={runnable:G,programLog:K,vertexShader:{log:Z,prefix:m},fragmentShader:{log:se,prefix:p}})}s.deleteShader(O),s.deleteShader(E),N=new ds(s,g),_=Jg(s,g)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,Hg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=O,this.fragmentShader=E,this}var l0=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fl(e),t.set(e,n)),n}},fl=class{constructor(e){this.id=l0++,this.code=e,this.usedTimes=0}};function c0(i,e,t,n,s,r,a){let o=new dr,l=new dl,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,x,U,K,Z){let se=K.fog,G=Z.geometry,L=_.isMeshStandardMaterial?K.environment:null,q=(_.isMeshStandardMaterial?t:e).get(_.envMap||L),k=q&&q.mapping===wa?q.image.height:null,he=v[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let xe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Te=xe!==void 0?xe.length:0,De=0;G.morphAttributes.position!==void 0&&(De=1),G.morphAttributes.normal!==void 0&&(De=2),G.morphAttributes.color!==void 0&&(De=3);let Me,te,ge,ne;if(he){let Ce=Fn[he];Me=Ce.vertexShader,te=Ce.fragmentShader}else Me=_.vertexShader,te=_.fragmentShader,l.update(_),ge=l.getVertexShaderID(_),ne=l.getFragmentShaderID(_);let X=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ee=Z.isInstancedMesh===!0,Ae=Z.isBatchedMesh===!0,Ue=!!_.map,Fe=!!_.matcap,re=!!q,I=!!_.aoMap,Le=!!_.lightMap,le=!!_.bumpMap,oe=!!_.normalMap,Q=!!_.displacementMap,Se=!!_.emissiveMap,de=!!_.metalnessMap,T=!!_.roughnessMap,y=_.anisotropy>0,Y=_.clearcoat>0,ae=_.dispersion>0,ve=_.iridescence>0,_e=_.sheen>0,We=_.transmission>0,Ne=y&&!!_.anisotropyMap,we=Y&&!!_.clearcoatMap,$e=Y&&!!_.clearcoatNormalMap,Re=Y&&!!_.clearcoatRoughnessMap,Oe=ve&&!!_.iridescenceMap,Je=ve&&!!_.iridescenceThicknessMap,Xe=_e&&!!_.sheenColorMap,ke=_e&&!!_.sheenRoughnessMap,P=!!_.specularMap,z=!!_.specularColorMap,$=!!_.specularIntensityMap,R=We&&!!_.transmissionMap,ee=We&&!!_.thicknessMap,V=!!_.gradientMap,H=!!_.alphaMap,be=_.alphaTest>0,ye=!!_.alphaHash,F=!!_.extensions,ie=On;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ie=i.toneMapping);let B={shaderID:he,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:te,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&Z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Z.instanceColor!==null,instancingMorph:Ee&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Cs,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:Fe,envMap:re,envMapMode:re&&q.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:Le,bumpMap:le,normalMap:oe,displacementMap:d&&Q,emissiveMap:Se,normalMapObjectSpace:oe&&_.normalMapType===dd,normalMapTangentSpace:oe&&_.normalMapType===Xh,metalnessMap:de,roughnessMap:T,anisotropy:y,anisotropyMap:Ne,clearcoat:Y,clearcoatMap:we,clearcoatNormalMap:$e,clearcoatRoughnessMap:Re,dispersion:ae,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:_e,sheenColorMap:Xe,sheenRoughnessMap:ke,specularMap:P,specularColorMap:z,specularIntensityMap:$,transmission:We,transmissionMap:R,thicknessMap:ee,gradientMap:V,opaque:_.transparent===!1&&_.blending===xi&&_.alphaToCoverage===!1,alphaMap:H,alphaTest:be,alphaHash:ye,combine:_.combine,mapUv:Ue&&g(_.map.channel),aoMapUv:I&&g(_.aoMap.channel),lightMapUv:Le&&g(_.lightMap.channel),bumpMapUv:le&&g(_.bumpMap.channel),normalMapUv:oe&&g(_.normalMap.channel),displacementMapUv:Q&&g(_.displacementMap.channel),emissiveMapUv:Se&&g(_.emissiveMap.channel),metalnessMapUv:de&&g(_.metalnessMap.channel),roughnessMapUv:T&&g(_.roughnessMap.channel),anisotropyMapUv:Ne&&g(_.anisotropyMap.channel),clearcoatMapUv:we&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:$e&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(_.sheenRoughnessMap.channel),specularMapUv:P&&g(_.specularMap.channel),specularColorMapUv:z&&g(_.specularColorMap.channel),specularIntensityMapUv:$&&g(_.specularIntensityMap.channel),transmissionMapUv:R&&g(_.transmissionMap.channel),thicknessMapUv:ee&&g(_.thicknessMap.channel),alphaMapUv:H&&g(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(oe||y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!G.attributes.uv&&(Ue||H),fog:!!se,useFog:_.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:pe,skinning:Z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:De,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&ft.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&ft.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:F&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(F&&_.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return B.vertexUv1s=c.has(1),B.vertexUv2s=c.has(2),B.vertexUv3s=c.has(3),c.clear(),B}function p(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)x.push(U),x.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(w(x,_),b(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function w(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function b(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)}function M(_){let x=v[_.type],U;if(x){let K=Fn[x];U=Ls.clone(K.uniforms)}else U=_.uniforms;return U}function O(_,x){let U;for(let K=0,Z=u.length;K<Z;K++){let se=u[K];if(se.cacheKey===x){U=se,++U.usedTimes;break}}return U===void 0&&(U=new o0(i,x,_,r),u.push(U)),U}function E(_){if(--_.usedTimes===0){let x=u.indexOf(_);u[x]=u[u.length-1],u.pop(),_.destroy()}}function C(_){l.remove(_)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:O,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:N}}function h0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function u0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,v,g,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,v,g,m){let p=a(h,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,v,g,m){let p=a(h,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||u0),n.length>1&&n.sort(d||xh),s.length>1&&s.sort(d||xh)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function d0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yh,i.set(n,[a])):s>=r.length?(a=new yh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function f0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new et};break;case"SpotLight":t={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function p0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var m0=0;function g0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v0(i){let e=new f0,t=p0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new mt,a=new mt;function o(c){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,v=0,g=0,m=0,p=0,w=0,b=0,M=0,O=0,E=0,C=0;c.sort(g0);for(let _=0,x=c.length;_<x;_++){let U=c[_],K=U.color,Z=U.intensity,se=U.distance,G=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=K.r*Z,h+=K.g*Z,d+=K.b*Z;else if(U.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(U.sh.coefficients[L],Z);C++}else if(U.isDirectionalLight){let L=e.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let q=U.shadow,k=t.get(U);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=U.shadow.matrix,w++}n.directional[f]=L,f++}else if(U.isSpotLight){let L=e.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(K).multiplyScalar(Z),L.distance=se,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,n.spot[g]=L;let q=U.shadow;if(U.map&&(n.spotLightMap[O]=U.map,O++,q.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[g]=q.matrix,U.castShadow){let k=t.get(U);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=G,M++}g++}else if(U.isRectAreaLight){let L=e.get(U);L.color.copy(K).multiplyScalar(Z),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=L,m++}else if(U.isPointLight){let L=e.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),L.distance=U.distance,L.decay=U.decay,U.castShadow){let q=U.shadow,k=t.get(U);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=G,n.pointShadowMatrix[v]=U.shadow.matrix,b++}n.point[v]=L,v++}else if(U.isHemisphereLight){let L=e.get(U);L.skyColor.copy(U.color).multiplyScalar(Z),L.groundColor.copy(U.groundColor).multiplyScalar(Z),n.hemi[p]=L,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==v||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==M||N.numSpotMaps!==O||N.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+O-E,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,N.directionalLength=f,N.pointLength=v,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=M,N.numSpotMaps=O,N.numLightProbes=C,n.version=m0++)}function l(c,u){let h=0,d=0,f=0,v=0,g=0,m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let b=c[p];if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Mh(i){let e=new v0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function x0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Mh(i),e.set(s,[o])):r>=a.length?(o=new Mh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pl=class extends bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ml=class extends bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function _0(i,e,t){let n=new fr,s=new He,r=new He,a=new Mt,o=new pl({depthPacking:ud}),l=new ml,c={},u=t.maxTextureSize,h={[yi]:zt,[zt]:yi,[gn]:gn},d=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:y0,fragmentShader:M0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let v=new Rt;v.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new je(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(E,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let _=i.getRenderTarget(),x=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),K=i.state;K.setBlending(kn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let Z=p!==jn&&this.type===jn,se=p===jn&&this.type!==jn;for(let G=0,L=E.length;G<L;G++){let q=E[G],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let he=k.getFrameExtents();if(s.multiply(he),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,k.mapSize.y=r.y)),k.map===null||Z===!0||se===!0){let Te=this.type!==jn?{minFilter:ln,magFilter:ln}:{};k.map!==null&&k.map.dispose(),k.map=new Vt(s.x,s.y,Te),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let xe=k.getViewportCount();for(let Te=0;Te<xe;Te++){let De=k.getViewport(Te);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),K.viewport(a),k.updateMatrices(q,Te),n=k.getFrustum(),M(C,N,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===jn&&w(k,N),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,x,U)};function w(E,C){let N=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vt(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,N,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,N,f,g,null)}function b(E,C,N,_){let x=null,U=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)x=U;else if(x=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let K=x.uuid,Z=C.uuid,se=c[K];se===void 0&&(se={},c[K]=se);let G=se[Z];G===void 0&&(G=x.clone(),se[Z]=G,C.addEventListener("dispose",O)),x=G}if(x.visible=C.visible,x.wireframe=C.wireframe,_===jn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let K=i.properties.get(x);K.light=N}return x}function M(E,C,N,_,x){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===jn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);let Z=e.update(E),se=E.material;if(Array.isArray(se)){let G=Z.groups;for(let L=0,q=G.length;L<q;L++){let k=G[L],he=se[k.materialIndex];if(he&&he.visible){let xe=b(E,he,_,x);E.onBeforeShadow(i,E,C,N,Z,xe,k),i.renderBufferDirect(N,null,Z,xe,E,k),E.onAfterShadow(i,E,C,N,Z,xe,k)}}}else if(se.visible){let G=b(E,se,_,x);E.onBeforeShadow(i,E,C,N,Z,G,null),i.renderBufferDirect(N,null,Z,G,E,null),E.onAfterShadow(i,E,C,N,Z,G,null)}}let K=E.children;for(let Z=0,se=K.length;Z<se;Z++)M(K[Z],C,N,_,x)}function O(E){E.target.removeEventListener("dispose",O);for(let N in c){let _=c[N],x=E.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}var b0={[Mo]:_o,[bo]:Eo,[So]:Ao,[ps]:wo,[_o]:Mo,[Eo]:bo,[Ao]:So,[wo]:ps};function S0(i,e){function t(){let R=!1,ee=new Mt,V=null,H=new Mt(0,0,0,0);return{setMask:function(be){V!==be&&!R&&(i.colorMask(be,be,be,be),V=be)},setLocked:function(be){R=be},setClear:function(be,ye,F,ie,B){B===!0&&(be*=ie,ye*=ie,F*=ie),ee.set(be,ye,F,ie),H.equals(ee)===!1&&(i.clearColor(be,ye,F,ie),H.copy(ee))},reset:function(){R=!1,V=null,H.set(-1,0,0,0)}}}function n(){let R=!1,ee=!1,V=null,H=null,be=null;return{setReversed:function(ye){if(ee!==ye){let F=e.get("EXT_clip_control");ee?F.clipControlEXT(F.LOWER_LEFT_EXT,F.ZERO_TO_ONE_EXT):F.clipControlEXT(F.LOWER_LEFT_EXT,F.NEGATIVE_ONE_TO_ONE_EXT);let ie=be;be=null,this.setClear(ie)}ee=ye},getReversed:function(){return ee},setTest:function(ye){ye?X(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(ye){V!==ye&&!R&&(i.depthMask(ye),V=ye)},setFunc:function(ye){if(ee&&(ye=b0[ye]),H!==ye){switch(ye){case Mo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=ye}},setLocked:function(ye){R=ye},setClear:function(ye){be!==ye&&(ee&&(ye=1-ye),i.clearDepth(ye),be=ye)},reset:function(){R=!1,V=null,H=null,be=null,ee=!1}}}function s(){let R=!1,ee=null,V=null,H=null,be=null,ye=null,F=null,ie=null,B=null;return{setTest:function(Ce){R||(Ce?X(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ce){ee!==Ce&&!R&&(i.stencilMask(Ce),ee=Ce)},setFunc:function(Ce,ze,Ke){(V!==Ce||H!==ze||be!==Ke)&&(i.stencilFunc(Ce,ze,Ke),V=Ce,H=ze,be=Ke)},setOp:function(Ce,ze,Ke){(ye!==Ce||F!==ze||ie!==Ke)&&(i.stencilOp(Ce,ze,Ke),ye=Ce,F=ze,ie=Ke)},setLocked:function(Ce){R=Ce},setClear:function(Ce){B!==Ce&&(i.clearStencil(Ce),B=Ce)},reset:function(){R=!1,ee=null,V=null,H=null,be=null,ye=null,F=null,ie=null,B=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,w=null,b=null,M=null,O=null,E=null,C=new et(0,0,0),N=0,_=!1,x=null,U=null,K=null,Z=null,se=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),L=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),L=q>=2);let he=null,xe={},Te=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Me=new Mt().fromArray(Te),te=new Mt().fromArray(De);function ge(R,ee,V,H){let be=new Uint8Array(4),ye=i.createTexture();i.bindTexture(R,ye),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let F=0;F<V;F++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ee+F,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return ye}let ne={};ne[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(ps),le(!1),oe(bc),X(i.CULL_FACE),I(kn);function X(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function pe(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function Ee(R,ee){return h[R]!==ee?(i.bindFramebuffer(R,ee),h[R]=ee,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ee),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ae(R,ee){let V=f,H=!1;if(R){V=d.get(ee),V===void 0&&(V=[],d.set(ee,V));let be=R.textures;if(V.length!==be.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,F=be.length;ye<F;ye++)V[ye]=i.COLOR_ATTACHMENT0+ye;V.length=be.length,H=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,H=!0);H&&i.drawBuffers(V)}function Ue(R){return v!==R?(i.useProgram(R),v=R,!0):!1}let Fe={[Ui]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};Fe[Hu]=i.MIN,Fe[Vu]=i.MAX;let re={[Gu]:i.ZERO,[kl]:i.ONE,[Wu]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[cr]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function I(R,ee,V,H,be,ye,F,ie,B,Ce){if(R===kn){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),R!==Bl){if(R!==m||Ce!==_){if((p!==Ui||M!==Ui)&&(i.blendEquation(i.FUNC_ADD),p=Ui,M=Ui),Ce)switch(R){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,b=null,O=null,E=null,C.set(0,0,0),N=0,m=R,_=Ce}return}be=be||ee,ye=ye||V,F=F||H,(ee!==p||be!==M)&&(i.blendEquationSeparate(Fe[ee],Fe[be]),p=ee,M=be),(V!==w||H!==b||ye!==O||F!==E)&&(i.blendFuncSeparate(re[V],re[H],re[ye],re[F]),w=V,b=H,O=ye,E=F),(ie.equals(C)===!1||B!==N)&&(i.blendColor(ie.r,ie.g,ie.b,B),C.copy(ie),N=B),m=R,_=!1}function Le(R,ee){R.side===gn?pe(i.CULL_FACE):X(i.CULL_FACE);let V=R.side===zt;ee&&(V=!V),le(V),R.blending===xi&&R.transparent===!1?I(kn):I(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let H=R.stencilWrite;o.setTest(H),H&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Se(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(R){x!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),x=R)}function oe(R){R!==Nu?(X(i.CULL_FACE),R!==U&&(R===bc?i.cullFace(i.BACK):R===Bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),U=R}function Q(R){R!==K&&(L&&i.lineWidth(R),K=R)}function Se(R,ee,V){R?(X(i.POLYGON_OFFSET_FILL),(Z!==ee||se!==V)&&(i.polygonOffset(ee,V),Z=ee,se=V)):pe(i.POLYGON_OFFSET_FILL)}function de(R){R?X(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function T(R){R===void 0&&(R=i.TEXTURE0+G-1),he!==R&&(i.activeTexture(R),he=R)}function y(R,ee,V){V===void 0&&(he===null?V=i.TEXTURE0+G-1:V=he);let H=xe[V];H===void 0&&(H={type:void 0,texture:void 0},xe[V]=H),(H.type!==R||H.texture!==ee)&&(he!==V&&(i.activeTexture(V),he=V),i.bindTexture(R,ee||ne[R]),H.type=R,H.texture=ee)}function Y(){let R=xe[he];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function We(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(R){Me.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Me.copy(R))}function ke(R){te.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),te.copy(R))}function P(R,ee){let V=c.get(ee);V===void 0&&(V=new WeakMap,c.set(ee,V));let H=V.get(R);H===void 0&&(H=i.getUniformBlockIndex(ee,R.name),V.set(R,H))}function z(R,ee){let H=c.get(ee).get(R);l.get(ee)!==H&&(i.uniformBlockBinding(ee,H,R.__bindingPointIndex),l.set(ee,H))}function $(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,xe={},h={},d=new WeakMap,f=[],v=null,g=!1,m=null,p=null,w=null,b=null,M=null,O=null,E=null,C=new et(0,0,0),N=0,_=!1,x=null,U=null,K=null,Z=null,se=null,Me.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:pe,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:Ue,setBlending:I,setMaterial:Le,setFlipSided:le,setCullFace:oe,setLineWidth:Q,setPolygonOffset:Se,setScissorTest:de,activeTexture:T,bindTexture:y,unbindTexture:Y,compressedTexImage2D:ae,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Je,updateUBOMapping:P,uniformBlockBinding:z,texStorage2D:$e,texStorage3D:Re,texSubImage2D:_e,texSubImage3D:We,compressedTexSubImage2D:Ne,compressedTexSubImage3D:we,scissor:Xe,viewport:ke,reset:$}}function _h(i,e,t,n){let s=w0(n);switch(t){case zh:return i*e;case Vh:return i*e;case Gh:return i*e*2;case Gl:return i*e/s.components*s.byteLength;case Wl:return i*e/s.components*s.byteLength;case Wh:return i*e*2/s.components*s.byteLength;case ql:return i*e*2/s.components*s.byteLength;case Hh:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case Xl:return i*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Do:return Math.max(i,16)*Math.max(e,8)/4;case Io:case Po:return Math.max(i,8)*Math.max(e,8)/2;case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sa:case Qo:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qh:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w0(i){switch(i){case ii:case Bh:return{byteLength:1,components:1};case hr:case kh:case hn:return{byteLength:2,components:1};case Hl:case Vl:return{byteLength:2,components:4};case Oi:case zl:case Bn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function E0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,y){return f?new OffscreenCanvas(T,y):ur("canvas")}function g(T,y,Y){let ae=1,ve=de(T);if((ve.width>Y||ve.height>Y)&&(ae=Y/Math.max(ve.width,ve.height)),ae<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let _e=Math.floor(ae*ve.width),We=Math.floor(ae*ve.height);h===void 0&&(h=v(_e,We));let Ne=y?v(_e,We):h;return Ne.width=_e,Ne.height=We,Ne.getContext("2d").drawImage(T,0,0,_e,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+_e+"x"+We+")."),Ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,y,Y,ae,ve=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _e=y;if(y===i.RED&&(Y===i.FLOAT&&(_e=i.R32F),Y===i.HALF_FLOAT&&(_e=i.R16F),Y===i.UNSIGNED_BYTE&&(_e=i.R8)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.R8UI),Y===i.UNSIGNED_SHORT&&(_e=i.R16UI),Y===i.UNSIGNED_INT&&(_e=i.R32UI),Y===i.BYTE&&(_e=i.R8I),Y===i.SHORT&&(_e=i.R16I),Y===i.INT&&(_e=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(_e=i.RG32F),Y===i.HALF_FLOAT&&(_e=i.RG16F),Y===i.UNSIGNED_BYTE&&(_e=i.RG8)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.RG8UI),Y===i.UNSIGNED_SHORT&&(_e=i.RG16UI),Y===i.UNSIGNED_INT&&(_e=i.RG32UI),Y===i.BYTE&&(_e=i.RG8I),Y===i.SHORT&&(_e=i.RG16I),Y===i.INT&&(_e=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(_e=i.RGB16UI),Y===i.UNSIGNED_INT&&(_e=i.RGB32UI),Y===i.BYTE&&(_e=i.RGB8I),Y===i.SHORT&&(_e=i.RGB16I),Y===i.INT&&(_e=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(_e=i.RGBA16UI),Y===i.UNSIGNED_INT&&(_e=i.RGBA32UI),Y===i.BYTE&&(_e=i.RGBA8I),Y===i.SHORT&&(_e=i.RGBA16I),Y===i.INT&&(_e=i.RGBA32I)),y===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(_e=i.RGB9_E5),y===i.RGBA){let We=ve?Ea:ft.getTransfer(ae);Y===i.FLOAT&&(_e=i.RGBA32F),Y===i.HALF_FLOAT&&(_e=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(_e=We===yt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function M(T,y){let Y;return T?y===null||y===Oi||y===vs?Y=i.DEPTH24_STENCIL8:y===Bn?Y=i.DEPTH32F_STENCIL8:y===hr&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Oi||y===vs?Y=i.DEPTH_COMPONENT24:y===Bn?Y=i.DEPTH_COMPONENT32F:y===hr&&(Y=i.DEPTH_COMPONENT16),Y}function O(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==Nn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){let y=T.target;y.removeEventListener("dispose",E),N(y),y.isVideoTexture&&u.delete(y)}function C(T){let y=T.target;y.removeEventListener("dispose",C),x(y)}function N(T){let y=n.get(T);if(y.__webglInit===void 0)return;let Y=T.source,ae=d.get(Y);if(ae){let ve=ae[y.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&_(T),Object.keys(ae).length===0&&d.delete(Y)}n.remove(T)}function _(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let Y=T.source,ae=d.get(Y);delete ae[y.__cacheKey],a.memory.textures--}function x(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let ve=0;ve<y.__webglFramebuffer[ae].length;ve++)i.deleteFramebuffer(y.__webglFramebuffer[ae][ve]);else i.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[ae]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=T.textures;for(let ae=0,ve=Y.length;ae<ve;ae++){let _e=n.get(Y[ae]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(Y[ae])}n.remove(T)}let U=0;function K(){U=0}function Z(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function se(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function G(T,y){let Y=n.get(T);if(T.isVideoTexture&&Q(T),T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){let ae=T.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,T,y);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function L(T,y){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){te(Y,T,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function q(T,y){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){te(Y,T,y);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function k(T,y){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){ge(Y,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}let he={[ki]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},xe={[ln]:i.NEAREST,[cd]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Te={[fd]:i.NEVER,[yd]:i.ALWAYS,[pd]:i.LESS,[Yh]:i.LEQUAL,[md]:i.EQUAL,[xd]:i.GEQUAL,[gd]:i.GREATER,[vd]:i.NOTEQUAL};function De(T,y){if(y.type===Bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Nn||y.magFilter===Va||y.magFilter===Cr||y.magFilter===ei||y.minFilter===Nn||y.minFilter===Va||y.minFilter===Cr||y.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,he[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,xe[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ln||y.minFilter!==Cr&&y.minFilter!==ei||y.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Me(T,y){let Y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",E));let ae=y.source,ve=d.get(ae);ve===void 0&&(ve={},d.set(ae,ve));let _e=se(y);if(_e!==T.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ve[_e].usedTimes++;let We=ve[T.__cacheKey];We!==void 0&&(ve[T.__cacheKey].usedTimes--,We.usedTimes===0&&_(y)),T.__cacheKey=_e,T.__webglTexture=ve[_e].texture}return Y}function te(T,y,Y){let ae=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=i.TEXTURE_3D);let ve=Me(T,y),_e=y.source;t.bindTexture(ae,T.__webglTexture,i.TEXTURE0+Y);let We=n.get(_e);if(_e.version!==We.__version||ve===!0){t.activeTexture(i.TEXTURE0+Y);let Ne=ft.getPrimaries(ft.workingColorSpace),we=y.colorSpace===on?null:ft.getPrimaries(y.colorSpace),$e=y.colorSpace===on||Ne===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Re=g(y.image,!1,s.maxTextureSize);Re=Se(y,Re);let Oe=r.convert(y.format,y.colorSpace),Je=r.convert(y.type),Xe=b(y.internalFormat,Oe,Je,y.colorSpace,y.isVideoTexture);De(ae,y);let ke,P=y.mipmaps,z=y.isVideoTexture!==!0,$=We.__version===void 0||ve===!0,R=_e.dataReady,ee=O(y,Re);if(y.isDepthTexture)Xe=M(y.format===xs,y.type),$&&(z?t.texStorage2D(i.TEXTURE_2D,1,Xe,Re.width,Re.height):t.texImage2D(i.TEXTURE_2D,0,Xe,Re.width,Re.height,0,Oe,Je,null));else if(y.isDataTexture)if(P.length>0){z&&$&&t.texStorage2D(i.TEXTURE_2D,ee,Xe,P[0].width,P[0].height);for(let V=0,H=P.length;V<H;V++)ke=P[V],z?R&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ke.width,ke.height,Oe,Je,ke.data):t.texImage2D(i.TEXTURE_2D,V,Xe,ke.width,ke.height,0,Oe,Je,ke.data);y.generateMipmaps=!1}else z?($&&t.texStorage2D(i.TEXTURE_2D,ee,Xe,Re.width,Re.height),R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re.width,Re.height,Oe,Je,Re.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,Re.width,Re.height,0,Oe,Je,Re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){z&&$&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Xe,P[0].width,P[0].height,Re.depth);for(let V=0,H=P.length;V<H;V++)if(ke=P[V],y.format!==An)if(Oe!==null)if(z){if(R)if(y.layerUpdates.size>0){let be=_h(ke.width,ke.height,y.format,y.type);for(let ye of y.layerUpdates){let F=ke.data.subarray(ye*be/ke.data.BYTES_PER_ELEMENT,(ye+1)*be/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ye,ke.width,ke.height,1,Oe,F)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ke.width,ke.height,Re.depth,Oe,ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Xe,ke.width,ke.height,Re.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ke.width,ke.height,Re.depth,Oe,Je,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Xe,ke.width,ke.height,Re.depth,0,Oe,Je,ke.data)}else{z&&$&&t.texStorage2D(i.TEXTURE_2D,ee,Xe,P[0].width,P[0].height);for(let V=0,H=P.length;V<H;V++)ke=P[V],y.format!==An?Oe!==null?z?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Xe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?R&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ke.width,ke.height,Oe,Je,ke.data):t.texImage2D(i.TEXTURE_2D,V,Xe,ke.width,ke.height,0,Oe,Je,ke.data)}else if(y.isDataArrayTexture)if(z){if($&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Xe,Re.width,Re.height,Re.depth),R)if(y.layerUpdates.size>0){let V=_h(Re.width,Re.height,y.format,y.type);for(let H of y.layerUpdates){let be=Re.data.subarray(H*V/Re.data.BYTES_PER_ELEMENT,(H+1)*V/Re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,Re.width,Re.height,1,Oe,Je,be)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Oe,Je,Re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,Re.width,Re.height,Re.depth,0,Oe,Je,Re.data);else if(y.isData3DTexture)z?($&&t.texStorage3D(i.TEXTURE_3D,ee,Xe,Re.width,Re.height,Re.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Oe,Je,Re.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,Re.width,Re.height,Re.depth,0,Oe,Je,Re.data);else if(y.isFramebufferTexture){if($)if(z)t.texStorage2D(i.TEXTURE_2D,ee,Xe,Re.width,Re.height);else{let V=Re.width,H=Re.height;for(let be=0;be<ee;be++)t.texImage2D(i.TEXTURE_2D,be,Xe,V,H,0,Oe,Je,null),V>>=1,H>>=1}}else if(P.length>0){if(z&&$){let V=de(P[0]);t.texStorage2D(i.TEXTURE_2D,ee,Xe,V.width,V.height)}for(let V=0,H=P.length;V<H;V++)ke=P[V],z?R&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Oe,Je,ke):t.texImage2D(i.TEXTURE_2D,V,Xe,Oe,Je,ke);y.generateMipmaps=!1}else if(z){if($){let V=de(Re);t.texStorage2D(i.TEXTURE_2D,ee,Xe,V.width,V.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,Je,Re)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Oe,Je,Re);m(y)&&p(ae),We.__version=_e.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ge(T,y,Y){if(y.image.length!==6)return;let ae=Me(T,y),ve=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Y);let _e=n.get(ve);if(ve.version!==_e.__version||ae===!0){t.activeTexture(i.TEXTURE0+Y);let We=ft.getPrimaries(ft.workingColorSpace),Ne=y.colorSpace===on?null:ft.getPrimaries(y.colorSpace),we=y.colorSpace===on||We===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let $e=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,Oe=[];for(let H=0;H<6;H++)!$e&&!Re?Oe[H]=g(y.image[H],!0,s.maxCubemapSize):Oe[H]=Re?y.image[H].image:y.image[H],Oe[H]=Se(y,Oe[H]);let Je=Oe[0],Xe=r.convert(y.format,y.colorSpace),ke=r.convert(y.type),P=b(y.internalFormat,Xe,ke,y.colorSpace),z=y.isVideoTexture!==!0,$=_e.__version===void 0||ae===!0,R=ve.dataReady,ee=O(y,Je);De(i.TEXTURE_CUBE_MAP,y);let V;if($e){z&&$&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,P,Je.width,Je.height);for(let H=0;H<6;H++){V=Oe[H].mipmaps;for(let be=0;be<V.length;be++){let ye=V[be];y.format!==An?Xe!==null?z?R&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be,0,0,ye.width,ye.height,Xe,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be,P,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be,0,0,ye.width,ye.height,Xe,ke,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be,P,ye.width,ye.height,0,Xe,ke,ye.data)}}}else{if(V=y.mipmaps,z&&$){V.length>0&&ee++;let H=de(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,P,H.width,H.height)}for(let H=0;H<6;H++)if(Re){z?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Oe[H].width,Oe[H].height,Xe,ke,Oe[H].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,P,Oe[H].width,Oe[H].height,0,Xe,ke,Oe[H].data);for(let be=0;be<V.length;be++){let F=V[be].image[H].image;z?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be+1,0,0,F.width,F.height,Xe,ke,F.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be+1,P,F.width,F.height,0,Xe,ke,F.data)}}else{z?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Xe,ke,Oe[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,P,Xe,ke,Oe[H]);for(let be=0;be<V.length;be++){let ye=V[be];z?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be+1,0,0,Xe,ke,ye.image[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,be+1,P,Xe,ke,ye.image[H])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),_e.__version=ve.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ne(T,y,Y,ae,ve,_e){let We=r.convert(Y.format,Y.colorSpace),Ne=r.convert(Y.type),we=b(Y.internalFormat,We,Ne,Y.colorSpace),$e=n.get(y),Re=n.get(Y);if(Re.__renderTarget=y,!$e.__hasExternalTextures){let Oe=Math.max(1,y.width>>_e),Je=Math.max(1,y.height>>_e);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,_e,we,Oe,Je,y.depth,0,We,Ne,null):t.texImage2D(ve,_e,we,Oe,Je,0,We,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),oe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ve,Re.__webglTexture,0,le(y)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ve,Re.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(T,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let ae=y.depthTexture,ve=ae&&ae.isDepthTexture?ae.type:null,_e=M(y.stencilBuffer,ve),We=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=le(y);oe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,_e,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,We,i.RENDERBUFFER,T)}else{let ae=y.textures;for(let ve=0;ve<ae.length;ve++){let _e=ae[ve],We=r.convert(_e.format,_e.colorSpace),Ne=r.convert(_e.type),we=b(_e.internalFormat,We,Ne,_e.colorSpace),$e=le(y);Y&&oe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,we,y.width,y.height):oe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,we,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,we,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ae=n.get(y.depthTexture);ae.__renderTarget=y,(!ae.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);let ve=ae.__webglTexture,_e=le(y);if(y.depthTexture.format===hs)oe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(y.depthTexture.format===xs)oe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ee(T){let y=n.get(T),Y=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let ae=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ae){let ve=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ae.removeEventListener("dispose",ve)};ae.addEventListener("dispose",ve),y.__depthDisposeCallback=ve}y.__boundDepthTexture=ae}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");pe(y.__webglFramebuffer,T)}else if(Y){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]===void 0)y.__webglDepthbuffer[ae]=i.createRenderbuffer(),X(y.__webglDepthbuffer[ae],T,!1);else{let ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=y.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),X(y.__webglDepthbuffer,T,!1);else{let ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(T,y,Y){let ae=n.get(T);y!==void 0&&ne(ae.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ee(T)}function Ue(T){let y=T.texture,Y=n.get(T),ae=n.get(y);T.addEventListener("dispose",C);let ve=T.textures,_e=T.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=y.version,a.memory.textures++),_e){Y.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[Ne]=[];for(let we=0;we<y.mipmaps.length;we++)Y.__webglFramebuffer[Ne][we]=i.createFramebuffer()}else Y.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ne=0;Ne<y.mipmaps.length;Ne++)Y.__webglFramebuffer[Ne]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(We)for(let Ne=0,we=ve.length;Ne<we;Ne++){let $e=n.get(ve[Ne]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&oe(T)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ve.length;Ne++){let we=ve[Ne];Y.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne]);let $e=r.convert(we.format,we.colorSpace),Re=r.convert(we.type),Oe=b(we.internalFormat,$e,Re,we.colorSpace,T.isXRRenderTarget===!0),Je=le(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Oe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),X(Y.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),De(i.TEXTURE_CUBE_MAP,y);for(let Ne=0;Ne<6;Ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)ne(Y.__webglFramebuffer[Ne][we],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,we);else ne(Y.__webglFramebuffer[Ne],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ne=0,we=ve.length;Ne<we;Ne++){let $e=ve[Ne],Re=n.get($e);t.bindTexture(i.TEXTURE_2D,Re.__webglTexture),De(i.TEXTURE_2D,$e),ne(Y.__webglFramebuffer,T,$e,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),m($e)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,ae.__webglTexture),De(Ne,y),y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)ne(Y.__webglFramebuffer[we],T,y,i.COLOR_ATTACHMENT0,Ne,we);else ne(Y.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,Ne,0);m(y)&&p(Ne),t.unbindTexture()}T.depthBuffer&&Ee(T)}function Fe(T){let y=T.textures;for(let Y=0,ae=y.length;Y<ae;Y++){let ve=y[Y];if(m(ve)){let _e=w(T),We=n.get(ve).__webglTexture;t.bindTexture(_e,We),p(_e),t.unbindTexture()}}}let re=[],I=[];function Le(T){if(T.samples>0){if(oe(T)===!1){let y=T.textures,Y=T.width,ae=T.height,ve=i.COLOR_BUFFER_BIT,_e=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=n.get(T),Ne=y.length>1;if(Ne)for(let we=0;we<y.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let we=0;we<y.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[we]);let $e=n.get(y[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,ve,i.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(re.push(_e),I.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let we=0;we<y.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,We.__webglColorRenderbuffer[we]);let $e=n.get(y[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function le(T){return Math.min(s.maxSamples,T.samples)}function oe(T){let y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Q(T){let y=a.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function Se(T,y){let Y=T.colorSpace,ae=T.format,ve=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||Y!==Cs&&Y!==on&&(ft.getTransfer(Y)===yt?(ae!==An||ve!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function de(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.setTexture2D=G,this.setTexture2DArray=L,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=Ae,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=oe}function A0(i,e){function t(n,s=on){let r,a=ft.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bh)return i.BYTE;if(n===kh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===zh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===An)return i.RGBA;if(n===Vh)return i.LUMINANCE;if(n===Gh)return i.LUMINANCE_ALPHA;if(n===hs)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===Wh)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Lo||n===Po||n===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===Fo||n===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===Fo)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===ko||n===Oo||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===qo||n===Xo||n===Yo||n===Ko||n===Zo||n===Jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===Qo||n===jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===$o||n===el||n===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var gl=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Zt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},T0={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C0=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gt({vertexShader:R0,fragmentShader:C0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new en(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xl=class extends Mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null,g=new vl,m=t.getContextAttributes(),p=null,w=null,b=[],M=[],O=new He,E=null,C=new Ct;C.viewport=new Mt;let N=new Ct;N.viewport=new Mt;let _=[C,N],x=new gl,U=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=b[te];return ge===void 0&&(ge=new lr,b[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=b[te];return ge===void 0&&(ge=new lr,b[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=b[te];return ge===void 0&&(ge=new lr,b[te]=ge),ge.getHandSpace()};function Z(te){let ge=M.indexOf(te.inputSource);if(ge===-1)return;let ne=b[ge];ne!==void 0&&(ne.update(te.inputSource,te.frame,c||a),ne.dispatchEvent({type:te.type,data:te.inputSource}))}function se(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",G);for(let te=0;te<b.length;te++){let ge=M[te];ge!==null&&(M[te]=null,b[te].disconnect(ge))}U=null,K=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,w=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",se),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){let ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Vt(f.framebufferWidth,f.framebufferHeight,{format:An,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ge=null,ne=null,X=null;m.depth&&(X=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?xs:hs,ne=m.stencil?vs:Oi);let pe={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Vt(d.textureWidth,d.textureHeight,{format:An,type:ii,depthTexture:new da(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(te){for(let ge=0;ge<te.removed.length;ge++){let ne=te.removed[ge],X=M.indexOf(ne);X>=0&&(M[X]=null,b[X].disconnect(ne))}for(let ge=0;ge<te.added.length;ge++){let ne=te.added[ge],X=M.indexOf(ne);if(X===-1){for(let Ee=0;Ee<b.length;Ee++)if(Ee>=M.length){M.push(ne),X=Ee;break}else if(M[Ee]===null){M[Ee]=ne,X=Ee;break}if(X===-1)break}let pe=b[X];pe&&pe.connect(ne)}}let L=new W,q=new W;function k(te,ge,ne){L.setFromMatrixPosition(ge.matrixWorld),q.setFromMatrixPosition(ne.matrixWorld);let X=L.distanceTo(q),pe=ge.projectionMatrix.elements,Ee=ne.projectionMatrix.elements,Ae=pe[14]/(pe[10]-1),Ue=pe[14]/(pe[10]+1),Fe=(pe[9]+1)/pe[5],re=(pe[9]-1)/pe[5],I=(pe[8]-1)/pe[0],Le=(Ee[8]+1)/Ee[0],le=Ae*I,oe=Ae*Le,Q=X/(-I+Le),Se=Q*-I;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Se),te.translateZ(Q),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),pe[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let de=Ae+Q,T=Ue+Q,y=le-Se,Y=oe+(X-Se),ae=Fe*Ue/T*de,ve=re*Ue/T*de;te.projectionMatrix.makePerspective(y,Y,ae,ve,de,T),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ge=te.near,ne=te.far;g.texture!==null&&(g.depthNear>0&&(ge=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),x.near=N.near=C.near=ge,x.far=N.far=C.far=ne,(U!==x.near||K!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),U=x.near,K=x.far),C.layers.mask=te.layers.mask|2,N.layers.mask=te.layers.mask|4,x.layers.mask=C.layers.mask|N.layers.mask;let X=te.parent,pe=x.cameras;he(x,X);for(let Ee=0;Ee<pe.length;Ee++)he(pe[Ee],X);pe.length===2?k(x,C,N):x.projectionMatrix.copy(C.projectionMatrix),xe(te,x,X)};function xe(te,ge,ne){ne===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ys*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let Te=null;function De(te,ge){if(u=ge.getViewerPose(c||a),v=ge,u!==null){let ne=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let X=!1;ne.length!==x.cameras.length&&(x.cameras.length=0,X=!0);for(let Ee=0;Ee<ne.length;Ee++){let Ae=ne[Ee],Ue=null;if(f!==null)Ue=f.getViewport(Ae);else{let re=h.getViewSubImage(d,Ae);Ue=re.viewport,Ee===0&&(e.setRenderTargetTextures(w,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(w))}let Fe=_[Ee];Fe===void 0&&(Fe=new Ct,Fe.layers.enable(Ee),Fe.viewport=new Mt,_[Ee]=Fe),Fe.matrix.fromArray(Ae.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ae.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ee===0&&(x.matrix.copy(Fe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),X===!0&&x.cameras.push(Fe)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")){let Ee=h.getDepthInformation(ne[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(e,Ee,s.renderState)}}for(let ne=0;ne<b.length;ne++){let X=M[ne],pe=b[ne];X!==null&&pe!==void 0&&pe.update(X,ge,c||a)}Te&&Te(te,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),v=null}let Me=new jh;Me.setAnimationLoop(De),this.setAnimationLoop=function(te){Te=te},this.dispose=function(){}}},Pi=new vn,I0=new mt;function L0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),b=w.envMap,M=w.envMapRotation;b&&(m.envMap.value=b,Pi.copy(M),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(Pi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let M=b.program;n.uniformBlockBinding(w,M)}function c(w,b){let M=s[w.id];M===void 0&&(v(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));let O=b.program;n.updateUBOMapping(w,O);let E=e.render.frame;r[w.id]!==E&&(d(w),r[w.id]=E)}function u(w){let b=h();w.__bindingPointIndex=b;let M=i.createBuffer(),O=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,O,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let b=s[w.id],M=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,C=M.length;E<C;E++){let N=Array.isArray(M[E])?M[E]:[M[E]];for(let _=0,x=N.length;_<x;_++){let U=N[_];if(f(U,E,_,O)===!0){let K=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value],se=0;for(let G=0;G<Z.length;G++){let L=Z[G],q=g(L);typeof L=="number"||typeof L=="boolean"?(U.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,K+se,U.__data)):L.isMatrix3?(U.__data[0]=L.elements[0],U.__data[1]=L.elements[1],U.__data[2]=L.elements[2],U.__data[3]=0,U.__data[4]=L.elements[3],U.__data[5]=L.elements[4],U.__data[6]=L.elements[5],U.__data[7]=0,U.__data[8]=L.elements[6],U.__data[9]=L.elements[7],U.__data[10]=L.elements[8],U.__data[11]=0):(L.toArray(U.__data,se),se+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,b,M,O){let E=w.value,C=b+"_"+M;if(O[C]===void 0)return typeof E=="number"||typeof E=="boolean"?O[C]=E:O[C]=E.clone(),!0;{let N=O[C];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return O[C]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function v(w){let b=w.uniforms,M=0,O=16;for(let C=0,N=b.length;C<N;C++){let _=Array.isArray(b[C])?b[C]:[b[C]];for(let x=0,U=_.length;x<U;x++){let K=_[x],Z=Array.isArray(K.value)?K.value:[K.value];for(let se=0,G=Z.length;se<G;se++){let L=Z[se],q=g(L),k=M%O,he=k%q.boundary,xe=k+he;M+=he,xe!==0&&O-xe<q.storage&&(M+=O-xe),K.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=q.storage}}}let E=M%O;return E>0&&(M+=O-E),w.__size=M,w.__cache={},this}function g(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Hn=class{constructor(e={}){let{canvas:t=Nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=On,this.toneMappingExposure=1;let M=this,O=!1,E=0,C=0,N=null,_=-1,x=null,U=new Mt,K=new Mt,Z=null,se=new et(0),G=0,L=t.width,q=t.height,k=1,he=null,xe=null,Te=new Mt(0,0,L,q),De=new Mt(0,0,L,q),Me=!1,te=new fr,ge=!1,ne=!1,X=new mt,pe=new mt,Ee=new W,Ae=new Mt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function re(){return N===null?k:1}let I=n;function Le(A,J){return t.getContext(A,J)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ye,!1),I===null){let J="webgl2";if(I=Le(J,A),I===null)throw Le(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let le,oe,Q,Se,de,T,y,Y,ae,ve,_e,We,Ne,we,$e,Re,Oe,Je,Xe,ke,P,z,$,R;function ee(){le=new Km(I),le.init(),z=new A0(I,le),oe=new Vm(I,le,e,z),Q=new S0(I,le),oe.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Se=new Qm(I),de=new h0,T=new E0(I,le,Q,de,oe,z,Se),y=new Wm(M),Y=new Ym(M),ae=new sf(I),$=new zm(I,ae),ve=new Zm(I,ae,Se,$),_e=new $m(I,ve,ae,Se),Xe=new jm(I,oe,T),Re=new Gm(de),We=new c0(M,y,Y,le,oe,$,Re),Ne=new L0(M,de),we=new d0,$e=new x0(le),Je=new Om(M,y,Y,Q,_e,f,l),Oe=new _0(M,_e,oe),R=new P0(I,Se,oe,Q),ke=new Hm(I,le,Se),P=new Jm(I,le,Se),Se.programs=We.programs,M.capabilities=oe,M.extensions=le,M.properties=de,M.renderLists=we,M.shadowMap=Oe,M.state=Q,M.info=Se}ee();let V=new xl(M,I);this.xr=V,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(L,q,!1))},this.getSize=function(A){return A.set(L,q)},this.setSize=function(A,J,ue=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,q=J,t.width=Math.floor(A*k),t.height=Math.floor(J*k),ue===!0&&(t.style.width=A+"px",t.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(L*k,q*k).floor()},this.setDrawingBufferSize=function(A,J,ue){L=A,q=J,k=ue,t.width=Math.floor(A*ue),t.height=Math.floor(J*ue),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,J,ue,fe){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,J,ue,fe),Q.viewport(U.copy(Te).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,J,ue,fe){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,J,ue,fe),Q.scissor(K.copy(De).multiplyScalar(k).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){Q.setScissorTest(Me=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,J=!0,ue=!0){let fe=0;if(A){let j=!1;if(N!==null){let Pe=N.texture.format;j=Pe===Xl||Pe===ql||Pe===Wl}if(j){let Pe=N.texture.type,Ve=Pe===ii||Pe===Oi||Pe===hr||Pe===vs||Pe===Hl||Pe===Vl,S=Je.getClearColor(),D=Je.getClearAlpha(),ce=S.r,me=S.g,Ie=S.b;Ve?(v[0]=ce,v[1]=me,v[2]=Ie,v[3]=D,I.clearBufferuiv(I.COLOR,0,v)):(g[0]=ce,g[1]=me,g[2]=Ie,g[3]=D,I.clearBufferiv(I.COLOR,0,g))}else fe|=I.COLOR_BUFFER_BIT}J&&(fe|=I.DEPTH_BUFFER_BIT),ue&&(fe|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),we.dispose(),$e.dispose(),de.dispose(),y.dispose(),Y.dispose(),_e.dispose(),$.dispose(),R.dispose(),We.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ze),V.removeEventListener("sessionend",it),st.stop()};function H(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let A=Se.autoReset,J=Oe.enabled,ue=Oe.autoUpdate,fe=Oe.needsUpdate,j=Oe.type;ee(),Se.autoReset=A,Oe.enabled=J,Oe.autoUpdate=ue,Oe.needsUpdate=fe,Oe.type=j}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function F(A){let J=A.target;J.removeEventListener("dispose",F),ie(J)}function ie(A){B(A),de.remove(A)}function B(A){let J=de.get(A).programs;J!==void 0&&(J.forEach(function(ue){We.releaseProgram(ue)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,ue,fe,j,Pe){J===null&&(J=Ue);let Ve=j.isMesh&&j.matrixWorld.determinant()<0,S=Jt(A,J,ue,fe,j);Q.setMaterial(fe,Ve);let D=ue.index,ce=1;if(fe.wireframe===!0){if(D=ve.getWireframeAttribute(ue),D===void 0)return;ce=2}let me=ue.drawRange,Ie=ue.attributes.position,Be=me.start*ce,Qe=(me.start+me.count)*ce;Pe!==null&&(Be=Math.max(Be,Pe.start*ce),Qe=Math.min(Qe,(Pe.start+Pe.count)*ce)),D!==null?(Be=Math.max(Be,0),Qe=Math.min(Qe,D.count)):Ie!=null&&(Be=Math.max(Be,0),Qe=Math.min(Qe,Ie.count));let tt=Qe-Be;if(tt<0||tt===1/0)return;$.setup(j,fe,S,ue,D);let at,rt=ke;if(D!==null&&(at=ae.get(D),rt=P,rt.setIndex(at)),j.isMesh)fe.wireframe===!0?(Q.setLineWidth(fe.wireframeLinewidth*re()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(j.isLine){let Ye=fe.linewidth;Ye===void 0&&(Ye=1),Q.setLineWidth(Ye*re()),j.isLineSegments?rt.setMode(I.LINES):j.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else j.isPoints?rt.setMode(I.POINTS):j.isSprite&&rt.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)rt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ye=j._multiDrawStarts,dn=j._multiDrawCounts,ut=j._multiDrawCount,sn=D?ae.get(D).bytesPerElement:1,Mn=de.get(fe).currentProgram.getUniforms();for(let Xt=0;Xt<ut;Xt++)Mn.setValue(I,"_gl_DrawID",Xt),rt.render(Ye[Xt]/sn,dn[Xt])}else if(j.isInstancedMesh)rt.renderInstances(Be,tt,j.count);else if(ue.isInstancedBufferGeometry){let Ye=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,dn=Math.min(ue.instanceCount,Ye);rt.renderInstances(Be,tt,dn)}else rt.render(Be,tt)};function Ce(A,J,ue){A.transparent===!0&&A.side===gn&&A.forceSinglePass===!1?(A.side=zt,A.needsUpdate=!0,Bt(A,J,ue),A.side=yi,A.needsUpdate=!0,Bt(A,J,ue),A.side=gn):Bt(A,J,ue)}this.compile=function(A,J,ue=null){ue===null&&(ue=A),p=$e.get(ue),p.init(J),b.push(p),ue.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),A!==ue&&A.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();let fe=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let Ve=0;Ve<Pe.length;Ve++){let S=Pe[Ve];Ce(S,ue,j),fe.add(S)}else Ce(Pe,ue,j),fe.add(Pe)}),b.pop(),p=null,fe},this.compileAsync=function(A,J,ue=null){let fe=this.compile(A,J,ue);return new Promise(j=>{function Pe(){if(fe.forEach(function(Ve){de.get(Ve).currentProgram.isReady()&&fe.delete(Ve)}),fe.size===0){j(A);return}setTimeout(Pe,10)}le.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ze=null;function Ke(A){ze&&ze(A)}function Ze(){st.stop()}function it(){st.start()}let st=new jh;st.setAnimationLoop(Ke),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(A){ze=A,V.setAnimationLoop(A),A===null?st.stop():st.start()},V.addEventListener("sessionstart",Ze),V.addEventListener("sessionend",it),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(J),J=V.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,J,N),p=$e.get(A,b.length),p.init(J),b.push(p),pe.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),te.setFromProjectionMatrix(pe),ne=this.localClippingEnabled,ge=Re.init(this.clippingPlanes,ne),m=we.get(A,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let Pe=M.xr.getDepthSensingMesh();Pe!==null&&St(Pe,J,-1/0,M.sortObjects)}St(A,J,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(he,xe),Fe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Fe&&Je.addToRenderList(m,A),this.info.render.frame++,ge===!0&&Re.beginShadows();let ue=p.state.shadowsArray;Oe.render(ue,A,J),ge===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();let fe=m.opaque,j=m.transmissive;if(p.setupLights(),J.isArrayCamera){let Pe=J.cameras;if(j.length>0)for(let Ve=0,S=Pe.length;Ve<S;Ve++){let D=Pe[Ve];ht(fe,j,A,D)}Fe&&Je.render(A);for(let Ve=0,S=Pe.length;Ve<S;Ve++){let D=Pe[Ve];wt(m,A,D,D.viewport)}}else j.length>0&&ht(fe,j,A,J),Fe&&Je.render(A),wt(m,A,J);N!==null&&(T.updateMultisampleRenderTarget(N),T.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(M,A,J),$.resetDefaultState(),_=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],ge===!0&&Re.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function St(A,J,ue,fe){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){fe&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);let Ve=_e.update(A),S=A.material;S.visible&&m.push(A,Ve,S,ue,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){let Ve=_e.update(A),S=A.material;if(fe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ae.copy(Ve.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(S)){let D=Ve.groups;for(let ce=0,me=D.length;ce<me;ce++){let Ie=D[ce],Be=S[Ie.materialIndex];Be&&Be.visible&&m.push(A,Ve,Be,ue,Ae.z,Ie)}}else S.visible&&m.push(A,Ve,S,ue,Ae.z,null)}}let Pe=A.children;for(let Ve=0,S=Pe.length;Ve<S;Ve++)St(Pe[Ve],J,ue,fe)}function wt(A,J,ue,fe){let j=A.opaque,Pe=A.transmissive,Ve=A.transparent;p.setupLightsView(ue),ge===!0&&Re.setGlobalState(M.clippingPlanes,ue),fe&&Q.viewport(U.copy(fe)),j.length>0&&nt(j,J,ue),Pe.length>0&&nt(Pe,J,ue),Ve.length>0&&nt(Ve,J,ue),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ht(A,J,ue,fe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[fe.id]===void 0&&(p.state.transmissionRenderTarget[fe.id]=new Vt(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?hn:ii,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let Pe=p.state.transmissionRenderTarget[fe.id],Ve=fe.viewport||U;Pe.setSize(Ve.z,Ve.w);let S=M.getRenderTarget();M.setRenderTarget(Pe),M.getClearColor(se),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),Fe&&Je.render(ue);let D=M.toneMapping;M.toneMapping=On;let ce=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),p.setupLightsView(fe),ge===!0&&Re.setGlobalState(M.clippingPlanes,fe),nt(A,ue,fe),T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe),le.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Ie=0,Be=J.length;Ie<Be;Ie++){let Qe=J[Ie],tt=Qe.object,at=Qe.geometry,rt=Qe.material,Ye=Qe.group;if(rt.side===gn&&tt.layers.test(fe.layers)){let dn=rt.side;rt.side=zt,rt.needsUpdate=!0,It(tt,ue,fe,at,rt,Ye),rt.side=dn,rt.needsUpdate=!0,me=!0}}me===!0&&(T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe))}M.setRenderTarget(S),M.setClearColor(se,G),ce!==void 0&&(fe.viewport=ce),M.toneMapping=D}function nt(A,J,ue){let fe=J.isScene===!0?J.overrideMaterial:null;for(let j=0,Pe=A.length;j<Pe;j++){let Ve=A[j],S=Ve.object,D=Ve.geometry,ce=fe===null?Ve.material:fe,me=Ve.group;S.layers.test(ue.layers)&&It(S,J,ue,D,ce,me)}}function It(A,J,ue,fe,j,Pe){A.onBeforeRender(M,J,ue,fe,j,Pe),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(M,J,ue,fe,A,Pe),j.transparent===!0&&j.side===gn&&j.forceSinglePass===!1?(j.side=zt,j.needsUpdate=!0,M.renderBufferDirect(ue,J,fe,j,A,Pe),j.side=yi,j.needsUpdate=!0,M.renderBufferDirect(ue,J,fe,j,A,Pe),j.side=gn):M.renderBufferDirect(ue,J,fe,j,A,Pe),A.onAfterRender(M,J,ue,fe,j,Pe)}function Bt(A,J,ue){J.isScene!==!0&&(J=Ue);let fe=de.get(A),j=p.state.lights,Pe=p.state.shadowsArray,Ve=j.state.version,S=We.getParameters(A,j.state,Pe,J,ue),D=We.getProgramCacheKey(S),ce=fe.programs;fe.environment=A.isMeshStandardMaterial?J.environment:null,fe.fog=J.fog,fe.envMap=(A.isMeshStandardMaterial?Y:y).get(A.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,ce===void 0&&(A.addEventListener("dispose",F),ce=new Map,fe.programs=ce);let me=ce.get(D);if(me!==void 0){if(fe.currentProgram===me&&fe.lightsStateVersion===Ve)return Et(A,S),me}else S.uniforms=We.getUniforms(A),A.onBeforeCompile(S,M),me=We.acquireProgram(S,D),ce.set(D,me),fe.uniforms=S.uniforms;let Ie=fe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=Re.uniform),Et(A,S),fe.needsLights=yn(A),fe.lightsStateVersion=Ve,fe.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix),fe.currentProgram=me,fe.uniformsList=null,me}function Lt(A){if(A.uniformsList===null){let J=A.currentProgram.getUniforms();A.uniformsList=ds.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Et(A,J){let ue=de.get(A);ue.outputColorSpace=J.outputColorSpace,ue.batching=J.batching,ue.batchingColor=J.batchingColor,ue.instancing=J.instancing,ue.instancingColor=J.instancingColor,ue.instancingMorph=J.instancingMorph,ue.skinning=J.skinning,ue.morphTargets=J.morphTargets,ue.morphNormals=J.morphNormals,ue.morphColors=J.morphColors,ue.morphTargetsCount=J.morphTargetsCount,ue.numClippingPlanes=J.numClippingPlanes,ue.numIntersection=J.numClipIntersection,ue.vertexAlphas=J.vertexAlphas,ue.vertexTangents=J.vertexTangents,ue.toneMapping=J.toneMapping}function Jt(A,J,ue,fe,j){J.isScene!==!0&&(J=Ue),T.resetTextureUnits();let Pe=J.fog,Ve=fe.isMeshStandardMaterial?J.environment:null,S=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Cs,D=(fe.isMeshStandardMaterial?Y:y).get(fe.envMap||Ve),ce=fe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,me=!!ue.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),Ie=!!ue.morphAttributes.position,Be=!!ue.morphAttributes.normal,Qe=!!ue.morphAttributes.color,tt=On;fe.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(tt=M.toneMapping);let at=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,rt=at!==void 0?at.length:0,Ye=de.get(fe),dn=p.state.lights;if(ge===!0&&(ne===!0||A!==x)){let qe=A===x&&fe.id===_;Re.setState(fe,A,qe)}let ut=!1;fe.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==dn.state.version||Ye.outputColorSpace!==S||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==D||fe.fog===!0&&Ye.fog!==Pe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Re.numPlanes||Ye.numIntersection!==Re.numIntersection)||Ye.vertexAlphas!==ce||Ye.vertexTangents!==me||Ye.morphTargets!==Ie||Ye.morphNormals!==Be||Ye.morphColors!==Qe||Ye.toneMapping!==tt||Ye.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,Ye.__version=fe.version);let sn=Ye.currentProgram;ut===!0&&(sn=Bt(fe,J,j));let Mn=!1,Xt=!1,ci=!1,vt=sn.getUniforms(),dt=Ye.uniforms;if(Q.useProgram(sn.program)&&(Mn=!0,Xt=!0,ci=!0),fe.id!==_&&(_=fe.id,Xt=!0),Mn||x!==A){Q.buffers.depth.getReversed()?(X.copy(A.projectionMatrix),kd(X),Od(X),vt.setValue(I,"projectionMatrix",X)):vt.setValue(I,"projectionMatrix",A.projectionMatrix),vt.setValue(I,"viewMatrix",A.matrixWorldInverse);let xt=vt.map.cameraPosition;xt!==void 0&&xt.setValue(I,Ee.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&vt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Xt=!0,ci=!0)}if(j.isSkinnedMesh){vt.setOptional(I,j,"bindMatrix"),vt.setOptional(I,j,"bindMatrixInverse");let qe=j.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),vt.setValue(I,"boneTexture",qe.boneTexture,T))}j.isBatchedMesh&&(vt.setOptional(I,j,"batchingTexture"),vt.setValue(I,"batchingTexture",j._matricesTexture,T),vt.setOptional(I,j,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",j._indirectTexture,T),vt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",j._colorsTexture,T));let _t=ue.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&Xe.update(j,ue,sn),(Xt||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,vt.setValue(I,"receiveShadow",j.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(dt.envMap.value=D,dt.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&J.environment!==null&&(dt.envMapIntensity.value=J.environmentIntensity),Xt&&(vt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&xn(dt,ci),Pe&&fe.fog===!0&&Ne.refreshFogUniforms(dt,Pe),Ne.refreshMaterialUniforms(dt,fe,k,q,p.state.transmissionRenderTarget[A.id]),ds.upload(I,Lt(Ye),dt,T)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(ds.upload(I,Lt(Ye),dt,T),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&vt.setValue(I,"center",j.center),vt.setValue(I,"modelViewMatrix",j.modelViewMatrix),vt.setValue(I,"normalMatrix",j.normalMatrix),vt.setValue(I,"modelMatrix",j.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){let qe=fe.uniformsGroups;for(let xt=0,bt=qe.length;xt<bt;xt++){let hi=qe[xt];R.update(hi,sn),R.bind(hi,sn)}}return sn}function xn(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function yn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,J,ue){de.get(A.texture).__webglTexture=J,de.get(A.depthTexture).__webglTexture=ue;let fe=de.get(A);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ue===void 0,fe.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,J){let ue=de.get(A);ue.__webglFramebuffer=J,ue.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,ue=0){N=A,E=J,C=ue;let fe=!0,j=null,Pe=!1,Ve=!1;if(A){let D=de.get(A);if(D.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(I.FRAMEBUFFER,null),fe=!1;else if(D.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(D.__hasExternalTextures)T.rebindTextures(A,de.get(A.texture).__webglTexture,de.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ie=A.depthTexture;if(D.__boundDepthTexture!==Ie){if(Ie!==null&&de.has(Ie)&&(A.width!==Ie.image.width||A.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}let ce=A.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Ve=!0);let me=de.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(me[J])?j=me[J][ue]:j=me[J],Pe=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?j=de.get(A).__webglMultisampledFramebuffer:Array.isArray(me)?j=me[ue]:j=me,U.copy(A.viewport),K.copy(A.scissor),Z=A.scissorTest}else U.copy(Te).multiplyScalar(k).floor(),K.copy(De).multiplyScalar(k).floor(),Z=Me;if(Q.bindFramebuffer(I.FRAMEBUFFER,j)&&fe&&Q.drawBuffers(A,j),Q.viewport(U),Q.scissor(K),Q.setScissorTest(Z),Pe){let D=de.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+J,D.__webglTexture,ue)}else if(Ve){let D=de.get(A.texture),ce=J||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,D.__webglTexture,ue||0,ce)}_=-1},this.readRenderTargetPixels=function(A,J,ue,fe,j,Pe,Ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let S=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(S=S[Ve]),S){Q.bindFramebuffer(I.FRAMEBUFFER,S);try{let D=A.texture,ce=D.format,me=D.type;if(!oe.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-fe&&ue>=0&&ue<=A.height-j&&I.readPixels(J,ue,fe,j,z.convert(ce),z.convert(me),Pe)}finally{let D=N!==null?de.get(N).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,D)}}},this.readRenderTargetPixelsAsync=async function(A,J,ue,fe,j,Pe,Ve){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let S=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(S=S[Ve]),S){let D=A.texture,ce=D.format,me=D.type;if(!oe.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=A.width-fe&&ue>=0&&ue<=A.height-j){Q.bindFramebuffer(I.FRAMEBUFFER,S);let Ie=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.bufferData(I.PIXEL_PACK_BUFFER,Pe.byteLength,I.STREAM_READ),I.readPixels(J,ue,fe,j,z.convert(ce),z.convert(me),0);let Be=N!==null?de.get(N).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,Be);let Qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Bd(I,Qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Pe),I.deleteBuffer(Ie),I.deleteSync(Qe),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,J=null,ue=0){A.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1]);let fe=Math.pow(2,-ue),j=Math.floor(A.image.width*fe),Pe=Math.floor(A.image.height*fe),Ve=J!==null?J.x:0,S=J!==null?J.y:0;T.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ue,0,0,Ve,S,j,Pe),Q.unbindTexture()},this.copyTextureToTexture=function(A,J,ue=null,fe=null,j=0){A.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,A=arguments[1],J=arguments[2],j=arguments[3]||0,ue=null);let Pe,Ve,S,D,ce,me,Ie,Be,Qe,tt=A.isCompressedTexture?A.mipmaps[j]:A.image;ue!==null?(Pe=ue.max.x-ue.min.x,Ve=ue.max.y-ue.min.y,S=ue.isBox3?ue.max.z-ue.min.z:1,D=ue.min.x,ce=ue.min.y,me=ue.isBox3?ue.min.z:0):(Pe=tt.width,Ve=tt.height,S=tt.depth||1,D=0,ce=0,me=0),fe!==null?(Ie=fe.x,Be=fe.y,Qe=fe.z):(Ie=0,Be=0,Qe=0);let at=z.convert(J.format),rt=z.convert(J.type),Ye;J.isData3DTexture?(T.setTexture3D(J,0),Ye=I.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(T.setTexture2DArray(J,0),Ye=I.TEXTURE_2D_ARRAY):(T.setTexture2D(J,0),Ye=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment);let dn=I.getParameter(I.UNPACK_ROW_LENGTH),ut=I.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=I.getParameter(I.UNPACK_SKIP_PIXELS),Mn=I.getParameter(I.UNPACK_SKIP_ROWS),Xt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,D),I.pixelStorei(I.UNPACK_SKIP_ROWS,ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,me);let ci=A.isDataArrayTexture||A.isData3DTexture,vt=J.isDataArrayTexture||J.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let dt=de.get(A),_t=de.get(J),qe=de.get(dt.__renderTarget),xt=de.get(_t.__renderTarget);Q.bindFramebuffer(I.READ_FRAMEBUFFER,qe.__webglFramebuffer),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<S;bt++)ci&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(A).__webglTexture,j,me+bt),A.isDepthTexture?(vt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(J).__webglTexture,j,Qe+bt),I.blitFramebuffer(D,ce,Pe,Ve,Ie,Be,Pe,Ve,I.DEPTH_BUFFER_BIT,I.NEAREST)):vt?I.copyTexSubImage3D(Ye,j,Ie,Be,Qe+bt,D,ce,Pe,Ve):I.copyTexSubImage2D(Ye,j,Ie,Be,Qe+bt,D,ce,Pe,Ve);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ye,j,Ie,Be,Qe,Pe,Ve,S,at,rt,tt.data):J.isCompressedArrayTexture?I.compressedTexSubImage3D(Ye,j,Ie,Be,Qe,Pe,Ve,S,at,tt.data):I.texSubImage3D(Ye,j,Ie,Be,Qe,Pe,Ve,S,at,rt,tt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,j,Ie,Be,Pe,Ve,at,rt,tt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,j,Ie,Be,tt.width,tt.height,at,tt.data):I.texSubImage2D(I.TEXTURE_2D,j,Ie,Be,Pe,Ve,at,rt,tt);I.pixelStorei(I.UNPACK_ROW_LENGTH,dn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),I.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt),j===0&&J.generateMipmaps&&I.generateMipmap(Ye),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,J,ue=null,fe=null,j=0){return A.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,fe=arguments[1]||null,A=arguments[2],J=arguments[3],j=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,J,ue,fe,j)},this.initRenderTarget=function(A){de.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){E=0,C=0,N=null,Q.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var cn=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var yl=class extends $t{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ln,u=ln,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wi=class extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},os=new mt,bh=new mt,Jr=[],Sh=new si,D0=new mt,tr=new je,nr=new zn,fa=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Sh.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Sh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),nr.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),bh.multiplyMatrices(n,os),tr.matrixWorld=bh,tr.raycast(e,Jr);for(let a=0,o=Jr.length;a<o;a++){let l=Jr[a];l.instanceId=r,l.object=this,t.push(l)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yl(new Float32Array(s*this.count),s,this.count,Gl,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ml=class extends bi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wh=new mt,_l=new zi,Qr=new zn,jr=new W,Ss=class extends Ht{constructor(e=new Rt,t=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;wh.copy(s).invert(),_l.copy(e.ray).applyMatrix4(wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=d,g=f;v<g;v++){let m=c.getX(v);jr.fromBufferAttribute(h,m),Eh(jr,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let v=d,g=f;v<g;v++)jr.fromBufferAttribute(h,v),Eh(jr,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eh(i,e,t,n,s,r,a){let o=_l.distanceSqToPoint(i);if(o<t){let l=new W;_l.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ai=class extends $t{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new He:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new W,s=[],r=[],a=[],o=new W,l=new mt;for(let f=0;f<=e;f++){let v=f/e;s[f]=this.getTangentAt(v,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Ah(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}var pa=class extends bl{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Ah(o,l.x,c.x,u.x,h.x),Ah(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}};var ws=class i extends Rt{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ut(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new W,d=new He,f=new W,v=new W,g=new W,m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(v)}for(let w=0;w<=t;w++){let b=n+w*u*s,M=Math.sin(b),O=Math.cos(b);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*M,h.y=e[E].y,h.z=e[E].x*O,a.push(h.x,h.y,h.z),d.x=w/t,d.y=E/(e.length-1),o.push(d.x,d.y);let C=l[3*E+0]*M,N=l[3*E+1],_=l[3*E+0]*O;c.push(C,N,_)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){let M=b+w*e.length,O=M,E=M+e.length,C=M+e.length+1,N=M+1;r.push(O,E,N),r.push(C,N,E)}this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("uv",new pt(o,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ma=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new W,u=new He;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Es=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],v=0,g=[],m=n/2,p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function w(){let M=new W,O=new W,E=0,C=(t-e)/n;for(let N=0;N<=r;N++){let _=[],x=N/r,U=x*(t-e)+e;for(let K=0;K<=s;K++){let Z=K/s,se=Z*l+o,G=Math.sin(se),L=Math.cos(se);O.x=U*G,O.y=-x*n+m,O.z=U*L,h.push(O.x,O.y,O.z),M.set(G,C,L).normalize(),d.push(M.x,M.y,M.z),f.push(Z,1-x),_.push(v++)}g.push(_)}for(let N=0;N<s;N++)for(let _=0;_<r;_++){let x=g[_][N],U=g[_+1][N],K=g[_+1][N+1],Z=g[_][N+1];(e>0||_!==0)&&(u.push(x,U,Z),E+=3),(t>0||_!==r-1)&&(u.push(U,K,Z),E+=3)}c.addGroup(p,E,0),p+=E}function b(M){let O=v,E=new He,C=new W,N=0,_=M===!0?e:t,x=M===!0?1:-1;for(let K=1;K<=s;K++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),v++;let U=v;for(let K=0;K<=s;K++){let se=K/s*l+o,G=Math.cos(se),L=Math.sin(se);C.x=_*L,C.y=m*x,C.z=_*G,h.push(C.x,C.y,C.z),d.push(0,x,0),E.x=G*.5+.5,E.y=L*.5*x+.5,f.push(E.x,E.y),v++}for(let K=0;K<s;K++){let Z=O+K,se=U+K;M===!0?u.push(se,se+1,Z):u.push(se+1,se,Z),N+=3}c.addGroup(p,N,M===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ga=class i extends Rt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new W,v=new He;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,u.push(v.x,v.y)}h+=d}for(let g=0;g<s;g++){let m=g*(n+1);for(let p=0;p<n;p++){let w=p+m,b=w,M=w+n+1,O=w+n+2,E=w+1;o.push(b,M,E),o.push(M,O,E)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Hi=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new W,d=new W,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){let w=[],b=p/n,M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let O=0;O<=t;O++){let E=O/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+b*o),v.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(E+M,1-b),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let b=u[p][w+1],M=u[p][w],O=u[p+1][w],E=u[p+1][w+1];(p!==0||a>0)&&f.push(b,M,E),(p!==n-1||l<Math.PI)&&f.push(M,O,E)}this.setIndex(f),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(g,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var va=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new W,h=new W,d=new W;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){let g=v/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){let g=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,p=(s+1)*(f-1)+v,w=(s+1)*f+v;a.push(g,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Tn=class extends bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Tn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function $r(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function U0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends As{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ac:r=e,o=2*t-n;break;case Tc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ac:a=e,l=2*n-t;break;case Tc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(s-t),g=v*v,m=g*v,p=-d*m+2*d*g-d*v,w=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,b=(-1-f)*m+(1.5+f)*g+.5*v,M=f*m-f*g;for(let O=0;O!==o;++O)r[O]=p*a[u+O]+w*a[c+O]+b*a[l+O]+M*a[h+O];return r}},wl=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},El=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$r(t,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$r(e.times,Array),values:$r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case nl:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return nl;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&U0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let v=0;v!==n;++v){let g=t[h+v];if(g!==t[d+v]||g!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=nl;var Vi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ra;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Cn{};Al.prototype.ValueTypeName="color";var Tl=class extends Cn{};Tl.prototype.ValueTypeName="number";var Rl=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)_i.slerpFlat(r,0,a,c-o,a,c,l);return r}},xa=class extends Cn{InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ra;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Cn{};Cl.prototype.ValueTypeName="vector";var Th={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Il=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],v=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}},F0=new Il,pr=class{constructor(e){this.manager=e!==void 0?e:F0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ll=class extends pr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Th.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ur("img");function l(){u(),Th.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ya=class extends pr{constructor(e){super(e)}load(e,t,n,s){let r=new $t,a=new Ll(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ts=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ma=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vo=new mt,Rh=new W,Ch=new W,mr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),Ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ch),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pl=class extends mr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_a=class extends Ts{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ih=new mt,ir=new W,xo=new W,Dl=class extends mr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),xo.copy(n.position),xo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xo),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih)}},ba=class extends Ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ul=class extends mr{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Sa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Lh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Lh(){return performance.now()}var Zl="\\[\\]\\.:\\/",N0=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",B0="[^"+Zl.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",Jl),O0=/(WCOD+)?/.source.replace("WCOD",B0),z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),H0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),V0=new RegExp("^"+k0+O0+z0+H0+"$"),G0=["material","materials","bones","map"],Fl=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N0,"")}static parseTrackName(e){let t=V0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);G0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Fl;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gv=new Float32Array(1);var Ph=new mt,Rs=class{constructor(e,t,n=0,s=1/0){this.ray=new zi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(e,t=!0,n=[]){return Nl(e,this,n,t),n.sort(Dh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nl(e[s],this,n,t);return n.sort(Dh),n}};function Dh(i,e){return i.distance-e.distance}function Nl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Nl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},W0=new bs(-1,1,1,-1,0,1),Ql=class extends Rt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},q0=new Ql,Ds=class{constructor(e){this._mesh=new je(q0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,W0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Us=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gr=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ca=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ia=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Us(Ra),this.copyPass.material.blending=kn,this.clock=new Sa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gr!==void 0&&(a instanceof gr?n=!0:a instanceof Ca&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var La=class extends Ln{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var iu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Fs=class i extends Ln{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Vt(r,a,{type:hn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Vt(r,a,{type:hn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=iu;this.highPassUniforms=Ls.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new He(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ra;this.copyUniforms=Ls.clone(u.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:fs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new et,this.oldClearAlpha=1,this.basic=new Gt,this.fsQuad=new Ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new He(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Fs.BlurDirectionX=new He(1,0);Fs.BlurDirectionY=new He(0,1);var X0="#80a097",Y0="#89a99f",K0="#dde8e3",Z0="#7b5ea7",J0="#ffffff";async function su(i,e,t){let s=(await(await fetch(i)).text()).replace("<svg ",`<svg width="${e}" height="${t}" preserveAspectRatio="xMidYMid meet" `),r=new Blob([s],{type:"image/svg+xml"}),a=URL.createObjectURL(r),o=new Image;return o.decoding="async",o.src=a,await o.decode(),o}function ru(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}async function au(i,e=3072,t=1500){let n=document.createElement("canvas");n.width=e,n.height=t;let s=n.getContext("2d"),r=e/2,a=e/3;s.fillStyle=X0,s.fillRect(0,0,e,t);let o=[r,t*.905],l=a*.744,c=[r-l,t*.4],u=[r+l,t*.44],h=o[0]-c[0],d=o[1]-c[1],f=Math.hypot(h,d),v=h/f,g=d/f,m=g,p=-v,w=(L,q)=>[L[0]-v*q,L[1]-g*q];s.fillStyle=Y0,s.beginPath(),s.moveTo(...w(c,a)),s.lineTo(...o),s.lineTo(u[0]+(u[0]-o[0])*1.5,u[1]+(u[1]-o[1])*1.5),s.lineTo(e,t),s.lineTo(0,t),s.closePath(),s.fill(),s.strokeStyle="rgba(255,255,255,0.10)",s.lineWidth=3,s.beginPath(),s.moveTo(...o),s.lineTo(u[0]+(u[0]-o[0])*1.5,u[1]+(u[1]-o[1])*1.5),s.stroke();let b=a*.105,M=w(c,a*1.2),O=[o[0]+v*a*.02,o[1]+g*a*.02],E=(L,q)=>[L[0]-m*q,L[1]-p*q];s.fillStyle=K0,s.beginPath(),s.moveTo(...M),s.lineTo(...O),s.lineTo(...E(O,b)),s.lineTo(...E(M,b)),s.closePath(),s.fill(),s.save(),s.beginPath(),s.moveTo(...E(M,b)),s.lineTo(...E(O,b)),s.lineTo(O[0],t+10),s.lineTo(0,t+10),s.lineTo(0,M[1]),s.closePath(),s.clip(),s.strokeStyle="rgba(255,255,255,0.3)",s.lineWidth=2.4;for(let L=1;L<30;L++){let q=b+22+L*15;s.globalAlpha=Math.max(0,1-L/30),s.beginPath(),s.moveTo(...E(w(M,a*.4),q)),s.lineTo(...E([O[0]+v*a*.6,O[1]+g*a*.6],q)),s.stroke()}s.restore(),s.globalAlpha=1,s.strokeStyle=Z0,s.lineWidth=8,s.lineCap="butt",s.beginPath(),s.moveTo(...E(M,b+9)),s.lineTo(...E([o[0]-v*a*.05,o[1]-g*a*.05],b+9)),s.stroke();let[C,N]=await Promise.all([su(i("logo-mark-white.svg"),600,600),su(i("logo-wordmark-white.svg"),1071,302)]);try{await Promise.all([document.fonts.load("700 60px Philosopher"),document.fonts.load("400 60px Philosopher"),document.fonts.load('500 40px "Roboto Flex"')])}catch{}let _=a*.33;s.drawImage(C,r-_/2,t*.085,_,_);let x=a*.7,U=x*302/1071;s.drawImage(N,r-x/2+x*.025,t*.29,x,U),s.fillStyle=J0,s.textAlign="center",s.textBaseline="alphabetic";let K=(L,q,k)=>{s.font=q(100);let he=s.measureText(L).width;return q(Math.round(100*k/he))};"letterSpacing"in s&&(s.letterSpacing="0px"),s.font=K("CBD SKIN CARE",L=>`500 ${L}px "Roboto Flex", Arial, sans-serif`,a*.42),s.fillText("CBD SKIN CARE",r,t*.525),s.font=K("CBD SKIN OIL",L=>`700 ${L}px Philosopher, Georgia, serif`,a*.5),s.fillText("CBD SKIN OIL",r,t*.605),s.font=K("1000 mg",L=>`700 ${L}px Philosopher, Georgia, serif`,a*.19),s.fillText("1000 mg",r,t*.66),s.textAlign="right";let Z=r+a*.4;s.font=`400 ${Math.round(a*.04)}px "Roboto Flex", Arial, sans-serif`,s.fillText("For all skin types",Z,t*.83),s.font=`500 ${Math.round(a*.042)}px "Roboto Flex", Arial, sans-serif`,s.fillText("Contains natural &",Z,t*.868),s.fillText("organic ingredients",Z,t*.903),s.font=`400 ${Math.round(a*.03)}px "Roboto Flex", Arial, sans-serif`,s.fillText("30 ml/1 oz \u212E",Z,t*.94),s.fillStyle="rgba(255,255,255,0.55)";let se=ru(7);for(let L of[e*.06,e*.8])for(let q=0;q<22;q++){let k=a*(.32+se()*.22);s.fillRect(L,t*.22+q*t*.026,k,t*.008)}let G=ru(11);s.globalCompositeOperation="soft-light";for(let L=0;L<9e3;L++){let q=G()*e,k=G()*t,he=G()*.08;s.fillStyle=G()>.5?`rgba(255,255,255,${he})`:`rgba(0,0,0,${he})`,s.fillRect(q,k,1+G()*3,1+G()*1.5)}return s.globalCompositeOperation="source-over",n}function ou(i){let t=Math.round(1024*i.height/i.width),n=document.createElement("canvas");n.width=1024,n.height=t;let s=n.getContext("2d");s.drawImage(i,0,0,1024,t);let r=s.getImageData(0,0,1024,t),a=r.data;for(let o=0;o<a.length;o+=4){let l=(a[o]+a[o+1]+a[o+2])/3,u=205-Math.max(0,(l-200)/55)*95;a[o]=a[o+1]=a[o+2]=u}return s.putImageData(r,0,0),n}var ct=i=>new et(i),ks=Math.PI*2,Os=(i,e,t)=>Math.min(t,Math.max(e,i)),zs=(i,e,t)=>{let n=Os((t-i)/(e-i),0,1);return n*n*(3-2*n)},Q0=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,un=1.35,Ns=0,Pa=.57,vr=new W(-.5,7.3,.75),Dt=5.9;function Bs(i,e=96,t=0){let n=i.map(([r,a])=>new He(r,a));t&&(n=new pa(n).getSpacedPoints(t));let s=new ws(n,e);return s.computeVertexNormals(),s}function j0(i,e,t,n,s=360){let r=new Es(i,i,e,s,6,!0),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getZ(o),u=a.getY(o),h=Math.atan2(l,c),d=Math.pow(Math.abs(Math.cos(h*t*.5)),.6),f=zs(e/2,e/2-.08,Math.abs(u)),g=(i-n+n*d*f+n*(1-f)*.5)/Math.hypot(l,c);a.setX(o,l*g),a.setZ(o,c*g)}return r.computeVertexNormals(),r}function $0(i,e,t=40,n=120,s=3){let r=[],a=[],o=c=>i*(1+.07*Math.sin(2*c+s)+.045*Math.sin(3*c+1.7*s)+.025*Math.sin(5*c+.3));r.push(0,e,0);for(let c=1;c<=t;c++){let u=c/t;for(let h=0;h<n;h++){let d=h/n*ks,f=o(d)*u,v=e*Math.sqrt(Math.max(0,1-Math.pow(u,14)));r.push(Math.sin(d)*f,v,Math.cos(d)*f)}}for(let c=0;c<n;c++)a.push(0,1+c,1+(c+1)%n);for(let c=1;c<t;c++){let u=1+(c-1)*n,h=1+c*n;for(let d=0;d<n;d++){let f=(d+1)%n;a.push(u+d,h+d,h+f,u+d,h+f,u+f)}}let l=new Rt;return l.setAttribute("position",new pt(r,3)),l.setIndex(a),l.computeVertexNormals(),l}function xr(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new ai(t);return r.colorSpace=on,r}function ev(i){let e=new cn,t=new je(new ri(60,30,60),new Gt({color:ct("#28403b").multiplyScalar(.55),side:zt}));t.position.y=10,e.add(t);let n=new je(new en(60,60),new Gt({color:ct("#28403b").multiplyScalar(.35)}));n.rotation.x=-Math.PI/2,n.position.y=-2,e.add(n);let s=(o,l,c,u,h)=>{let d=new je(new en(o,l),new Gt({color:ct(u).multiplyScalar(h),side:gn}));return d.position.set(...c),d.lookAt(0,4,0),e.add(d),d};s(11,8,[-15,13,12],"#fff0dc",7),s(2.6,18,[-17,7,-9],"#fff7ee",4.2),s(2.2,18,[16,7,-5],"#eef3ee",3),s(18,18,[0,24,2],"#f6efe4",.7),s(14,5,[6,3,18],"#ddbfa3",.55),s(6,4.5,[-7,4.4,-22],"#f6e2c4",1.9),s(2.5,4.5,[5,4.4,-22],"#f3ece2",1.5);let r=new Si(i),a=r.fromScene(e,.03).texture;return r.dispose(),e.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose())}),a}var tv=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.99999, 1.0); }`,nv=`
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
  }`,iv=`
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
  }`,sv=`
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
  }`,rv={uniforms:{tDiffuse:{value:null},uRes:{value:new He(1,1)},uTime:{value:0},uVig:{value:.32},uVigCenter:{value:new He(.62,.52)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};async function lu({canvas:i,host:e,asset:t,reduced:n,onFrame:s,onFirstFrame:r}){let a=new Hn({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});a.toneMapping=On,a.setClearColor(ct("#28403b"),1);let o=bn();a.setPixelRatio(o);let l=new cn,c=new Ct(20,1,1,200),u=ev(a);l.environment=u;let h={uRes:{value:new He(1,1)},uDpr:{value:o},uNight:{value:ct("#28403b")},uDeep:{value:ct("#213631")},uWarm:{value:ct("#ddbfa3")},uAmber:{value:ct("#c7ae92")},uSage:{value:ct("#9ab4ac")},uThread:{value:ct("#b07a7f")},uGlow:{value:new He},uGlowR:{value:400},uPool:{value:new He},uPoolR:{value:new He(300,60)},uTA:{value:new He},uTB:{value:new He},uThreadAlpha:{value:.5}},d=new je(new en(2,2),new gt({uniforms:h,vertexShader:tv,fragmentShader:nv,depthWrite:!1,depthTest:!1}));d.frustumCulled=!1,d.renderOrder=-100,l.add(d);let f=new Ei(ct("#fff1e0"),2.5);f.position.set(-7,9,8),l.add(f);let v=new Ei(ct("#b6c9c2"),.25);v.position.set(6,2,6),l.add(v);let g=new Ei(ct("#ffe6c4"),1.6);g.position.set(3,6,-10),l.add(g);let m=new Rn({color:16777215,metalness:0,roughness:.035,transmission:1,ior:1.52,thickness:1.25,attenuationColor:ct("#a24a12"),attenuationDistance:.85,specularIntensity:1,envMapIntensity:1.35}),p=new Rn({color:16777215,roughness:.02,transmission:1,ior:1.52,thickness:.3,attenuationColor:ct("#eef2e6"),attenuationDistance:2,envMapIntensity:2.2,specularIntensity:1}),w=new Rn({color:ct("#3a1d05"),emissive:ct("#eaa53c"),emissiveIntensity:.95,roughness:.1,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2});w.onBeforeCompile=S=>{S.fragmentShader=S.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float ndv = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance *= 0.05 + 0.95 * pow(ndv, 1.7); }`)};let b=new Rn({color:ct("#ffd27a"),roughness:.01,transmission:.55,ior:1.47,thickness:.4,attenuationColor:ct("#e09a2a"),attenuationDistance:.5,emissive:ct("#eda43a"),emissiveIntensity:.9,envMapIntensity:3.2,specularIntensity:1,clearcoat:1,clearcoatRoughness:0});b.onBeforeCompile=S=>{S.fragmentShader=S.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float ndv = clamp(dot(normalize(vNormal), normalize(vViewPosition)), 0.0, 1.0);
        totalEmissiveRadiance *= 0.04 + 0.96 * pow(ndv, 2.2); }`)};let M=new Rn({color:ct("#241203"),roughness:.03,metalness:0,emissive:ct("#c98328"),emissiveIntensity:.34,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2.2,specularIntensity:1}),O=new Rn({color:ct("#151817"),roughness:.38,metalness:0,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1}),E=new Rn({color:ct("#1a1c1b"),roughness:.58,sheen:.6,sheenRoughness:.5,sheenColor:ct("#5a6662"),envMapIntensity:.9}),C=new Zt;C.position.set(un,0,Ns),C.rotation.y=-.32,l.add(C);let N=[[0,.16],[.55,.13],[1.05,.06],[1.42,0],[1.545,.035],[1.592,.13],[1.6,.3],[1.6,5.35],[1.592,5.55],[1.55,5.74],[1.46,5.92],[1.3,6.08],[1.1,6.2],[.93,6.28],[.83,6.36],[.8,6.46],[.8,6.52],[.85,6.56],[.85,6.62],[.8,6.66],[.8,6.72],[.85,6.76],[.85,6.82],[.8,6.86],[.81,6.93],[.79,6.99],[.72,7.02],[.64,7],[.61,6.94],[.6,6.7],[.6,6.1]],_=new je(Bs(N,128),m);C.add(_);let x=new Rn({color:ct("#80a097"),roughness:.78,metalness:0,sheen:.25,sheenRoughness:.8,sheenColor:ct("#ffffff"),envMapIntensity:.5}),U=new Es(1.614,1.614,4.75,160,1,!0,-ks*.97/2,ks*.97),K=new je(U,x);K.position.y=.48+4.75/2,K.rotation.y=0,C.add(K);for(let S of[.48,.48+4.75]){let D=new je(new va(1.613,.006,6,160),new Tn({color:ct("#a9c2ba"),roughness:.8}));D.rotation.x=Math.PI/2,D.position.y=S,C.add(D)}au(t).then(S=>{let D=new ai(S);D.colorSpace=Ot,D.anisotropy=a.capabilities.getMaxAnisotropy(),D.wrapS=ki;let ce=new ai(ou(S));ce.colorSpace=on,x.map=D,x.roughnessMap=ce,se.map=D,se.color.set(16777215).multiplyScalar(.42),se.needsUpdate=!0,x.roughness=1,x.color.set(16777215),x.needsUpdate=!0,It=!0,n&&Jt&&Ve()}).catch(S=>console.warn("[hero] label",S));let Z=(S,D)=>{let ce=new Gt({transparent:!0,depthWrite:!1,side:gn,toneMapped:!1,...S});return ce.onBeforeCompile=me=>{me.vertexShader=me.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`),me.fragmentShader=me.fragmentShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <map_fragment>",`#ifdef USE_MAP
 diffuseColor *= texture2D(map, vMapUv, 3.5);
#endif`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.a *= ${D.toFixed(3)} * pow(smoothstep(-2.2, 0.0, vWY), 1.8);`)},ce},se=Z({color:ct("#80a097").multiplyScalar(.55)},.15),G=new Zt;G.position.set(un,0,Ns),G.rotation.y=C.rotation.y,G.scale.y=-1,G.add(new je(_.geometry,Z({color:ct("#5a2408")},.3)));let L=new je(U,se);L.position.y=K.position.y,G.add(L),G.traverse(S=>{S.renderOrder=-60}),l.add(G);let q=new Zt,k=new Zt;k.position.copy(vr),k.rotation.z=-Pa,k.add(q),l.add(k);let he=new je(Bs([[.86,0],[1.16,0],[1.205,.035],[1.215,.12],[1.215,.74],[1.2,.79],[1.15,.815],[1.03,.83]],128),O);q.add(he);let xe=new je(j0(1.04,1.18,44,.05),O);xe.position.y=.83+.59,q.add(xe);let Te=new je(Bs([[1,2],[1.01,2.02],[.95,2.06],[.66,2.07]],96),O);q.add(Te);let De=new je(new ga(.3,.86,64),O);De.rotation.x=Math.PI/2,De.position.y=.002,q.add(De);let Me=new je(Bs([[0,2],[.66,2],[.69,2.06],[.68,2.14],[.6,2.2],[.585,2.32],[.56,2.9],[.5,3.45],[.465,3.72],[.455,3.85],[.43,3.96],[.37,4.04],[.27,4.1],[.14,4.13],[0,4.14]],96,80),E);q.add(Me);let te=[[0,-Dt+.02],[.075,-Dt],[.1,-Dt+.1],[.15,-Dt+.4],[.24,-Dt+.85],[.29,-Dt+1.15],[.3,-Dt+1.4],[.3,.05],[0,.05]],ge=new je(Bs(te,64),p);q.add(ge);let ne=new je(Bs([[0,-Dt+.06],[.06,-Dt+.05],[.08,-Dt+.12],[.13,-Dt+.4],[.21,-Dt+.85],[.245,-Dt+1.15],[.25,-Dt+1.4],[.25,-2.6],[.23,-2.52],[.12,-2.49],[0,-2.48]],48),w);q.add(ne),q.traverse(S=>{S.isMesh&&(S.renderOrder=2)});let X=new W(0,-Dt-.005,0),pe=xr([[0,1],[.35,.72],[.7,.22],[1,0]]),Ee=xr([[0,1],[.5,.45],[1,0]]),Ae=(S,D,ce,me,Ie,Be,Qe,tt=0,at=!1)=>{let rt=new je(new en(1,1),new Gt({color:ct(D),alphaMap:S,transparent:!0,opacity:ce,depthWrite:!1,blending:at?fs:xi,toneMapped:!1}));return at&&(rt.material.map=S,rt.material.alphaMap=null),rt.rotation.x=-Math.PI/2,rt.rotation.z=tt,rt.scale.set(me,Ie,1),rt.position.set(Be,.004,Qe),rt.renderOrder=-50,l.add(rt),rt},Ue="#0f1d1a";Ae(Ee,"#ddbfa3",.06,14,7,un-2.2,.6,0,!0),Ae(pe,Ue,.72,3.9,3.9,un+.05,Ns+.02),Ae(Ee,Ue,.42,7.4,2.6,un+2.6,Ns-.9,-.42);let Fe=Ae(xr([[0,1],[.25,.55],[.6,.12],[1,0]]),"#d9902f",.3,2.2,1,un+1.75,Ns-.6,-.42,!0),re=Ae(Ee,Ue,.18,4.6,1.5,-2.5,.2,-.62);k.updateMatrixWorld(!0);let I=q.localToWorld(X.clone()),Le=.032,le={uAge:{value:99},uImpact:{value:new He(0,0)},uAmp:{value:.02}};M.onBeforeCompile=S=>{Object.assign(S.uniforms,le),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
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
        vPoolT = clamp(1.0 - position.y / ${Le.toFixed(3)}, 0.0, 1.0);
        vPoolR = clamp(length(position.xz) / 0.82, 0.0, 1.2);
        vPoolXZ = position.xz;
        { vec2 xz = position.xz - uImpact; float r = length(xz); transformed.y += wave(r) * smoothstep(0.0, ${(Le*.6).toFixed(3)}, position.y); }`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
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
        }`)};let oe=new je($0(.82,Le),M);oe.position.set(I.x+.12,0,I.z-.05),oe.renderOrder=1,l.add(oe),Ae(pe,Ue,.16,2.05,1.85,oe.position.x,oe.position.z+.05),Ae(xr([[0,.9],[.55,.55],[.8,.18],[1,0]]),"#b8741f",.12,2,1.85,oe.position.x,oe.position.z,0,!0),Ae(xr([[0,1],[.4,.4],[1,0]]),"#e0a040",.22,3.2,1.6,oe.position.x+.9,oe.position.z-.5,-.42,!0),le.uImpact.value.set(I.x-oe.position.x,I.z-oe.position.z);let Q=new je(new Hi(1,48,32),b);Q.renderOrder=3,l.add(Q);let Se=new je(new Es(1,1,1,24,1,!0),b);Se.renderOrder=3,l.add(Se);let de=!1,T=()=>de,y=10,Y=[ct("#9ab4ac"),ct("#f9b5c4"),ct("#ddbfa3"),ct("#b6c9c2"),ct("#e8d6c3"),ct("#c49b9f")],ae=new Hi(1,40,28),ve=new Float32Array(y*3),_e=new Float32Array(y),We=new Float32Array(y);ae.setAttribute("iColor",new wi(ve,3)),ae.setAttribute("iSoft",new wi(_e,1)),ae.setAttribute("iAlpha",new wi(We,1));let Ne=new gt({uniforms:{uKey:{value:ct("#fff6ea").multiplyScalar(1.6)},uRim:{value:ct("#f6f4ee")},uFade:{value:1}},vertexShader:iv,fragmentShader:sv,transparent:!0,depthWrite:!1,blending:Bl,blendSrc:kl,blendDst:cr}),we=new fa(ae,Ne,y);we.frustumCulled=!1,we.renderOrder=10,l.add(we);let $e=4,Re=()=>($e=$e*16807%2147483647)/2147483647,Oe=[],Je=[[3.9,8.6,-2.5,.36,0,.12],[-3.1,10.2,-1.5,.24,1,.08],[4.5,3.2,1.2,.2,2,.04],[-6.2,7.4,-4.5,.5,3,.4],[2.4,11.4,-5,.62,2,.5],[-1.9,3.3,1.6,.13,1,.02],[5.6,6.4,-1.5,.3,5,.12],[-4.4,11.6,.8,.2,4,.06],[6.6,10.4,-.5,.42,1,.45],[-2.6,7,-4.8,.32,0,.3],[3.2,5.2,-5.5,.24,4,.2],[.2,12.2,.6,.17,5,.05]];for(let S=0;S<y;S++){let[D,ce,me,Ie,Be,Qe]=Je[S];Oe.push({p:new W(D,ce,me),v:new W,r:Ie,tint:Be,soft:Qe,phase:Re()*100,born:-10,life:1}),Y[Be].toArray(ve,S*3),_e[S]=Qe,We[S]=1}let Xe={x0:-7,x1:7.5,y0:-1,y1:13.2,z0:-6,z1:2.5};function ke(S,D){S.p.set(Xe.x0+Re()*(Xe.x1-Xe.x0),-.6+Re()*5.5,Xe.z0+Re()*(Xe.z1-Xe.z0)),S.v.set(0,0,0),S.born=D,S.r=.13+Math.pow(Re(),1.8)*.5,S.soft=Os((S.p.z>2?.5:0)+(S.p.z<-4?.35:0)+Re()*.15,0,.85),S.tint=Math.floor(Re()*Y.length),Y[S.tint].toArray(ve,Oe.indexOf(S)*3),_e[Oe.indexOf(S)]=S.soft,ae.attributes.iColor.needsUpdate=!0,ae.attributes.iSoft.needsUpdate=!0}let P={ndc:new He(.3,0),target:new He(.3,0),active:!1,vel:new He},z=new Rs,$=new W,R=new W,ee=new W,V={az:0,el:0},H={cx:-.75,cy:5.2,h:11},be=-2,ye=.01,F=1,ie=1,B={fx:.66,fy:.5,hs:.8,D:30},Ce=new W;function ze(){F=Math.max(1,e.clientWidth),ie=Math.max(1,e.clientHeight);let S=F<761;if(de=S,a.setPixelRatio(o),a.setSize(F,ie,!1),st.setPixelRatio(o),st.setSize(F,ie),c.aspect=F/ie,S){let ce=Math.min(345,F*.9,ie*.46);B={fx:.5,fy:(14+ce/2)/ie,hs:ce,D:0}}else{let ce=F/ie,me=Math.min(ie*.8,F*.44*(11/7.6));B={fx:ce>1.9?.62:.6,fy:.5,hs:me,D:0}}be=S?-2:Math.min(F*.5,780)/F*2-1,ye=2*(B.hs/H.h)/F;let D=Math.tan(In.degToRad(c.fov/2));B.D=ie*H.h/(B.hs*2*D),h.uRes.value.set(F*o,ie*o),h.uDpr.value=o,wt.uniforms.uRes.value.set(F*o,ie*o),wt.uniforms.uVigCenter.value.set(S?.5:.6,S?.62:.5),wt.uniforms.uVig.value=S?.26:.34,It=!0}function Ke(S){let D=V.az,ce=In.degToRad(11)+V.el,me=B.D*(1+.045*S);Ce.set(H.cx,H.cy,0),c.position.set(Ce.x+Math.sin(D)*Math.cos(ce)*me,Ce.y+Math.sin(ce)*me,Math.cos(D)*Math.cos(ce)*me),c.lookAt(Ce),c.near=me*.5,c.far=me*2.2,c.updateProjectionMatrix(),c.projectionMatrix.elements[8]=-(2*B.fx-1),c.projectionMatrix.elements[9]=-(1-2*B.fy),c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),c.updateMatrixWorld()}let Ze=S=>(ee.copy(S).project(c),[(ee.x*.5+.5)*F,(-ee.y*.5+.5)*ie]),it=new Vt(2,2,{type:hn,samples:4}),st=new Ia(a,it);st.addPass(new La(l,c));let St=new Fs(new He(256,256),.42,.62,.86);st.addPass(St);let wt=new Us(rv);st.addPass(wt);let ht={period:5.6,grow:2.9,hang:.35,fallG:5.2,drag:1.6},nt={t:0,phase:.6,dropY:0,dropV:0,falling:!1,landed:!1,impactT:-99,cyc:0,intro:1},It=!0,Bt=!1,Lt=0,Et=0,Jt=!1,xn=new W,yn=new W(Math.sin(.95)*1.62,2.7,Math.cos(.95)*1.62),A={bubble:new W(un+2.35,8.05,.2),tag:new W,glow:new W(un-.6,4.6,-1.5),pool:new W(un-1.6,0,.4),tA:new W(un+12,8.6,-6),tB:new W(un-1.5,14.6,-6)};function J(S,D){nt.intro=n?0:Math.max(0,nt.intro-S/2.6);let ce=Math.pow(nt.intro,3),me=1-Math.exp(-S/.9),Ie=P.active?P.target.x:.15*Math.sin(D*.13),Be=P.active?P.target.y:.1*Math.sin(D*.11+1);P.vel.set((Ie-P.ndc.x)/Math.max(S,.001),(Be-P.ndc.y)/Math.max(S,.001)).multiplyScalar(me),P.ndc.x+=(Ie-P.ndc.x)*me,P.ndc.y+=(Be-P.ndc.y)*me,n||(V.az=-P.ndc.x*In.degToRad(2.4),V.el=P.ndc.y*In.degToRad(1.3)),Ke(ce);let Qe=n?0:Math.sin(D*ks/7.5)*.07+Math.sin(D*ks/11.3)*.03;k.position.set(vr.x,vr.y+Qe,vr.z),k.rotation.z=-Pa+(n?0:Math.sin(D*ks/9.1)*.012),k.updateMatrixWorld(!0);let tt=q.localToWorld($.copy(X));re.position.x=tt.x+1.6+Qe*.4;let at=n?2.3:(D+nt.phase)%ht.period,rt=Math.floor((D+nt.phase)/ht.period),Ye=.19;if(at<ht.grow+ht.hang){nt.falling=!1,nt.landed=!1,nt.dropV=0;let dt=Q0(Os(at/ht.grow,0,1)),_t=.035+(Ye-.035)*dt,qe=1+.32*dt+(at>ht.grow?.06*zs(ht.grow,ht.grow+ht.hang,at):0),xt=.02+.09*dt+(at>ht.grow?.07*zs(ht.grow,ht.grow+ht.hang,at):0);xn.set(tt.x,tt.y-xt-_t*qe*.92,tt.z),Q.position.copy(xn),Q.scale.set(_t*(1-.04*dt),_t*qe,_t*(1-.04*dt)),Q.visible=!0;let bt=.075*(1-.55*dt)*(at>ht.grow?1-zs(ht.grow,ht.grow+ht.hang,at)*.8:1);Se.visible=!0,Se.position.set(tt.x,tt.y-xt*.5-.01,tt.z),Se.scale.set(bt,xt+.04,bt),nt.dropY=xn.y}else if(Se.visible=!1,!nt.falling&&!nt.landed&&(nt.falling=!0,nt.dropY=tt.y-.2-Ye*1.38*.92,nt.dropV=0,nt.cyc=rt),nt.falling){nt.dropV+=(ht.fallG-ht.drag*nt.dropV)*S,nt.dropY-=nt.dropV*S;let dt=1+Os(nt.dropV/3.2,0,1)*.16,_t=at-(ht.grow+ht.hang),qe=1+.38*Math.exp(-_t*7);Q.scale.set(Ye/Math.sqrt(dt*qe),Ye*dt*qe,Ye/Math.sqrt(dt*qe)),Q.position.set(tt.x,nt.dropY,tt.z),Q.visible=!0;let xt=Le+.01;if(nt.dropY-Ye*dt<xt+.02){let bt=Os((xt+.02-(nt.dropY-Ye*dt))/(Ye*2.2),0,1);Q.scale.set(Ye*(1+.5*bt),Ye*dt*(1-bt*.92),Ye*(1+.5*bt)),Q.position.y=Math.max(nt.dropY,xt+Ye*dt*(1-bt)*.5),(nt.impactT<0||nt.impactCyc!==nt.cyc)&&(nt.impactT=D,nt.impactCyc=nt.cyc,le.uImpact.value.set(tt.x-oe.position.x,tt.z-oe.position.z)),bt>=1&&(nt.falling=!1,nt.landed=!0,Q.visible=!1)}}else Q.visible=!1;if(le.uAge.value=n?99:D-nt.impactT,!n){z.setFromCamera(P.ndc,c);let dt=T();for(let _t=0;_t<y;_t++){let qe=Oe[_t],xt=1.25,bt=.16+.22*qe.r,hi=Math.sin(D*.21+qe.phase)*.06+Math.sin(D*.47+qe.phase*1.7)*.03,Ws=Math.cos(D*.17+qe.phase*.7)*.03,qs=hi,Ai=xt*bt,Xs=Ws;if(P.active&&!dt){z.ray.closestPointToPoint(qe.p,R);let Gn=qe.p.x-R.x,Wn=qe.p.y-R.y,Un=qe.p.z-R.z,_n=Math.hypot(Gn,Wn,Un),qn=1.9+qe.r;if(_n<qn){let Ys=Math.pow(1-_n/qn,2)*3.4/Math.max(_n,.05);qs+=Gn*Ys,Ai+=Wn*Ys,Xs+=Un*Ys*.3,qs+=P.vel.x*2.6*(1-_n/qn),Ai+=P.vel.y*2*(1-_n/qn)}}qe.v.x+=(qs-xt*qe.v.x)*S,qe.v.y+=(Ai-xt*qe.v.y)*S,qe.v.z+=(Xs-xt*qe.v.z)*S,qe.p.addScaledVector(qe.v,S);let Vn=(Gn,Wn,Un,_n,qn,Ys,Au)=>{let _r=_n-Gn,br=qn-Wn,Sr=Ys-Un,ka=Os(((qe.p.x-Gn)*_r+(qe.p.y-Wn)*br+(qe.p.z-Un)*Sr)/(_r*_r+br*br+Sr*Sr),0,1),fc=Gn+_r*ka,pc=Wn+br*ka,mc=Un+Sr*ka,Ks=qe.p.x-fc,Zs=qe.p.y-pc,Js=qe.p.z-mc,wr=Math.hypot(Ks,Zs,Js)||1e-4,Er=Au+qe.r;if(wr<Er){Ks/=wr,Zs/=wr,Js/=wr,qe.p.set(fc+Ks*Er,pc+Zs*Er,mc+Js*Er);let Ar=qe.v.x*Ks+qe.v.y*Zs+qe.v.z*Js;Ar<0&&(qe.v.x-=Ar*Ks,qe.v.y-=Ar*Zs,qe.v.z-=Ar*Js)}},Na=qe.p.z>-1.5;{let Gn=qe.p.x-A.bubble.x,Wn=qe.p.y-A.bubble.y,Un=Math.hypot(Gn,Wn),_n=1.5+qe.r;if(Na&&Un<_n&&(qe.p.x=A.bubble.x+Gn/Un*_n,qe.p.y=A.bubble.y+Wn/Un*_n),!dt){ee.copy(qe.p).project(c);let qn=be+qe.r*ye;ee.x<qn&&(qe.p.x+=(qn-ee.x)/ye*Math.min(1,S*2.5),qe.v.x=Math.max(qe.v.x,0))}}let dc=Na?qe.p.z:Ns;Vn(un,-.5,dc,un,7.3,dc,1.85);let fn=vr,Mr=Math.sin(Pa),Ba=Math.cos(Pa),Xi=Na?qe.p.z:fn.z;Vn(fn.x,fn.y,Xi,fn.x+4.1*Mr,fn.y+4.1*Ba,Xi,1.35),Vn(fn.x,fn.y,Xi,fn.x-Dt*Mr,fn.y-Dt*Ba,Xi,.5),Vn(fn.x-Dt*Mr,-.5,Xi,fn.x-Dt*Mr,fn.y-Dt*Ba,Xi,.6);let wu=zs(0,1.6,D-qe.born),Eu=1-zs(Xe.y1-2.4,Xe.y1,qe.p.y);We[_t]=wu*Eu,(qe.p.y>Xe.y1||qe.p.x<Xe.x0-2||qe.p.x>Xe.x1+2)&&ke(qe,D)}for(let _t=0;_t<y;_t++)for(let qe=_t+1;qe<y;qe++){let xt=Oe[_t],bt=Oe[qe],hi=bt.p.x-xt.p.x,Ws=bt.p.y-xt.p.y,qs=(bt.p.z-xt.p.z)*.35,Ai=Math.hypot(hi,Ws,qs)||1e-4,Xs=(xt.r+bt.r)*1.6+.25;if(Ai<Xs){let Vn=(Xs-Ai)/Ai*Math.min(1,S*2);xt.p.x-=hi*Vn*.5,xt.p.y-=Ws*Vn*.5,bt.p.x+=hi*Vn*.5,bt.p.y+=Ws*Vn*.5}}ae.attributes.iAlpha.needsUpdate=!0}let dn=new mt;for(let dt=0;dt<y;dt++){let _t=Oe[dt];dn.makeScale(_t.r,_t.r,_t.r).setPosition(_t.p),we.setMatrixAt(dt,dn)}we.instanceMatrix.needsUpdate=!0,T()?we.count=9:we.count=y;let ut=Ze(A.glow);h.uGlow.value.set(ut[0]*o,(ie-ut[1])*o);let sn=Ze(R.set(A.glow.x,A.glow.y+1,A.glow.z)),Mn=Math.abs(sn[1]-ut[1]);h.uGlowR.value=Mn*6.2*o;let Xt=Ze(A.pool);h.uPool.value.set(Xt[0]*o,(ie-Xt[1])*o),h.uPoolR.value.set(Mn*7.5*o,Mn*1.9*o);let ci=Ze(A.tA),vt=Ze(A.tB);h.uTA.value.set(ci[0]*o,(ie-ci[1])*o),h.uTB.value.set(vt[0]*o,(ie-vt[1])*o),wt.uniforms.uTime.value=D,Fe.material.opacity=.26+.04*Math.sin(D*.7),C.localToWorld(A.tag.copy(yn)),s&&s({bubble:Ze(A.bubble),tag:Ze(A.tag),ppu:Mn,W:F,H:ie})}let ue=0,fe=0,j=0;function Pe(S){Lt=Bt?requestAnimationFrame(Pe):0;let D=S/1e3,ce=Et?Math.min(.05,D-Et):1/60;if(Et=D,J(ce,D),st.render(ce),Jt||(Jt=!0,r&&r()),j++,j>120&&(ue+=ce,fe++,fe===90)){let me=ue/fe;ue=0,fe=0,me>.026&&o>1&&(o=Math.max(1,o-.25),ze())}}function Ve(){let S=performance.now()/1e3;J(1/60,S),st.render(1/60),Jt||(Jt=!0,r&&r())}return ze(),{start(){if(!Bt){if(n){Ve();return}Bt=!0,Et=0,Lt=requestAnimationFrame(Pe)}},stop(){Bt=!1,cancelAnimationFrame(Lt),Lt=0},resize(){ze(),Bt||Ve()},pointer(S,D,ce){P.target.set(S,D),P.active=ce},get dirty(){return It},dispose(){this.stop(),a.dispose()}}}function av(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function jl(i,e){let t=i.querySelector(".hero-canvas"),n=i.querySelector(".hero-stage"),s=i.querySelector(".hero-bubble"),r=i.querySelector(".hero-tag"),a=i.querySelector("[data-hero-add]"),o=e.byId["skin-oil"];if(o){let g=i.querySelector("[data-hero-price]");g&&(g.textContent=e.fmt.kr(o.price));let m=i.querySelector("[data-hero-was]");m&&(m.textContent=e.fmt.kr(o.price0));let p=i.querySelector(".hero-bubble__pct");p&&(p.textContent=`\u2212${e.campaign.headlinePct}%`)}let l=0;a&&a.addEventListener("click",()=>{e.store.add("skin-oil",1),a.classList.add("is-added"),a.setAttribute("aria-label","Vidunder Olien er lagt i kurven"),clearTimeout(l),l=setTimeout(()=>{a.classList.remove("is-added"),a.setAttribute("aria-label","L\xE6g Vidunder Olien i kurv")},2200)}),requestAnimationFrame(()=>i.classList.add("is-ready"));let c=()=>{i.classList.add("is-static");let g=i.querySelector(".hero-fallback");g&&g.dataset.src&&!g.src&&(g.src=g.dataset.src)};if(!av()||/[?&]hero=static\b/.test(location.search)){c();return}let u=null,h=!1,d=70,f=()=>{d=s.firstElementChild.offsetWidth/2+14};f();let v=({bubble:g,tag:m,W:p})=>{let w=d,b=Math.min(Math.max(g[0],w),p-w);s.style.transform=`translate3d(${b.toFixed(1)}px, ${g[1].toFixed(1)}px, 0)`,r.style.transform=`translate3d(${m[0].toFixed(1)}px, ${m[1].toFixed(1)}px, 0) translateY(-50%)`,h||(h=!0,i.classList.add("is-tracked"))};lu({canvas:t,host:n,asset:e.asset,reduced:e.prefersReducedMotion,onFrame:v,onFirstFrame:()=>requestAnimationFrame(()=>i.classList.add("is-live"))}).then(g=>{u=g;let m=!0,p=()=>{m&&!document.hidden?g.start():g.stop()};ui(i,b=>{m=b,p()}),document.addEventListener("visibilitychange",p),p();let w=0;if(new ResizeObserver(()=>{cancelAnimationFrame(w),w=requestAnimationFrame(()=>{f(),g.resize()})}).observe(n),matchMedia("(pointer: fine)").matches){let b=!1;r.addEventListener("pointerenter",()=>{b=!0}),r.addEventListener("pointerleave",()=>{b=!1}),i.addEventListener("pointermove",M=>{if(b)return;let O=n.getBoundingClientRect();g.pointer((M.clientX-O.left)/O.width*2-1,-((M.clientY-O.top)/O.height*2-1),!0)},{passive:!0}),i.addEventListener("pointerleave",()=>g.pointer(0,0,!1))}t.addEventListener("webglcontextlost",b=>{b.preventDefault(),g.stop(),c()})}).catch(g=>{console.warn("[hero] WebGL scene unavailable, using still",g),c()})}function $l(i,e){let t=new URLSearchParams(location.search),n=e.prefersReducedMotion;ov(i,e,t,n),lv(i,e,t,n),cv(i,e);try{dv(i,e,n)}catch{}}function ov(i,e,t,n){let s=i.querySelector(".offers-clock");if(!s)return;let r=0,a=t.get("offers-now");if(a){let E=Date.parse(a);Number.isNaN(E)||(r=E-e.clock.now())}let o=()=>e.clock.now()+r,l=e.clock.end,c=e.clock.start,u=s.querySelector("[data-clock-label]"),h=s.querySelector("[data-clock-end]"),d=h&&[...h.childNodes].find(E=>E.nodeType===3&&E.textContent.trim()),f=s.querySelector("[data-clock-done]"),v=s.querySelector("[data-clock-sr]"),g=["d","h","m","s"].map(E=>{let C=s.querySelector(`[data-unit="${E}"]`);return{dgs:[...C.querySelectorAll(".offers-dg")].map(_=>{let x=_.textContent.trim();_.textContent="";let U=document.createElement("span");return U.className="offers-dg__v",U.textContent=x,_.append(U),{el:_,v:x,cur:U}}),lbl:C.querySelector("[data-lbl]")}}),m="cubic-bezier(.2,.72,.22,1)";function p(E,C,N){if(E.v===C)return;if(E.v=C,!N||n||!E.el.animate){E.cur.textContent=C;return}let _=E.cur,x=document.createElement("span");x.className="offers-dg__v",x.textContent=C,E.el.append(x),E.cur=x;let U=_.animate([{transform:"translateY(0)",opacity:1,filter:"blur(0px)"},{transform:"translateY(52%)",opacity:0,filter:"blur(1.2px)"}],{duration:620,easing:m,fill:"forwards"});U.onfinish=()=>_.remove(),x.animate([{transform:"translateY(-52%)",opacity:0,filter:"blur(1.2px)"},{transform:"translateY(0)",opacity:1,filter:"blur(0px)"}],{duration:780,easing:m})}let w="",b=-1;function M(E){let C=o(),N=C<c?"pre":C>=l?"ended":l-C<=864e5?"last":"live";if(N!==w&&(s.dataset.state=N,w=N,u.textContent=N==="pre"?"Black Week begynder om":N==="ended"?"Black Week er slut":N==="last"?"Sidste dag \u2013 Black Week slutter om":"Black Week slutter om",d&&(d.textContent=N==="pre"?" Starter mandag 23. november":N==="last"?" Slutter i aften kl. 23.59":" Slutter mandag 30. november kl. 23.59"),f&&(f.hidden=N!=="ended")),N==="ended"){v&&(v.textContent="Black Week er slut.");return}let x=Math.max(0,Math.floor(((N==="pre"?c:l)-C)/1e3)),U=[Math.floor(x/86400),Math.floor(x/3600)%24,Math.floor(x/60)%60,x%60];U.forEach((Z,se)=>{let G=String(Math.min(Z,99)).padStart(2,"0");g[se].dgs.forEach((L,q)=>p(L,G[q],E))}),g[0].lbl&&(g[0].lbl.textContent=U[0]===1?"dag":"dage"),g[1].lbl&&(g[1].lbl.textContent=U[1]===1?"time":"timer");let K=Math.floor(x/60);if(v&&K!==b){b=K;let Z=U[0],se=U[1],G=U[2];v.textContent=`${N==="pre"?"Black Week begynder om":"Black Week slutter om"} ${Z} ${Z===1?"dag":"dage"}, ${se} ${se===1?"time":"timer"} og ${G} ${G===1?"minut":"minutter"}.`}}M(!1);let O=()=>{M(!0),setTimeout(O,1e3-o()%1e3+12)};setTimeout(O,1e3-o()%1e3+12)}function lv(i,e,t,n){let s=i.querySelector("[data-meter]");if(!s)return;let{giftThreshold:r,freeShipping:a,giftValue:o}=e.campaign,l=e.fmt.kr,c=s.querySelector("[data-meter-text]"),u=s.querySelector("[data-meter-sum]"),h=s.querySelector("[data-meter-track]"),d={ship:s.querySelector('[data-ms="399"]'),gift:s.querySelector('[data-ms="699"]')};s.style.setProperty("--at-ship",(a/r).toFixed(4));let f=0,v=0,g=-1;function m(b){if(cancelAnimationFrame(v),n){f=b,u.textContent=l(b);return}let M=f,O=performance.now(),E=900,C=N=>{let _=Math.min(1,(N-O)/E),x=1-Math.pow(1-_,4);f=M+(b-M)*x,u.textContent=l(f),_<1&&(v=requestAnimationFrame(C))};v=requestAnimationFrame(C)}function p(){let b=e.store.subtotal(),M=b>=r?2:b>=a?1:0;if(s.style.setProperty("--p",Math.min(1,b/r).toFixed(4)),s.dataset.level=M,s.toggleAttribute("data-empty",b===0),b===0?c.innerHTML=`Fri fragt over ${l(a)} <span class="offers-soft">\u2013</span> og en gratis CBD Lip Balm over ${l(r)}`:M===0?c.innerHTML=`Du mangler <b>${l(a-b)}</b> til fri fragt`:M===1?c.innerHTML=`Fri fragt er klaret. Du mangler <b>${l(r-b)}</b> til en gratis CBD Lip Balm`:c.innerHTML=`Fri fragt og en gratis CBD Lip Balm <span class="offers-soft">(v\xE6rdi ${l(o)})</span> f\xF8lger med din ordre`,m(b),d.ship.classList.toggle("is-reached",M>=1),d.gift.classList.toggle("is-reached",M>=2),g!==-1&&M>g&&!n){let O=M>=2&&g<2?d.gift:d.ship;setTimeout(()=>{O.classList.remove("is-landing"),O.offsetWidth,O.classList.add("is-landing")},650)}g=M,h.setAttribute("aria-valuenow",String(Math.min(b,r))),h.setAttribute("aria-valuetext",`${l(b)} i kurven`)}e.store.on(b=>{(b==="cart:add"||b==="cart:change")&&p()}),p();let w=t.get("offers-cart");w&&setTimeout(()=>w.split(",").forEach(b=>e.byId[b]&&e.store.add(b,1)),+(t.get("offers-cart-delay")||900))}function cv(i,e){let t=i.querySelector("[data-gift-tip]"),n=e.byId&&e.byId["komplet-pakken"];!t||!n||(n.price>=e.campaign.giftThreshold?t.textContent=`${n.name} til ${e.fmt.kr(n.price)} klarer det alene.`:t.remove())}var hv=`
  attribute float aSize; attribute float aSeed; attribute float aDepth;
  uniform vec2 uRes; uniform float uDpr;
  varying float vSeed; varying float vDepth; varying float vY; varying float vR;
  void main() {
    vec2 ndc = vec2(position.x / uRes.x * 2.0 - 1.0, 1.0 - position.y / uRes.y * 2.0);
    gl_Position = vec4(ndc, 0.0, 1.0);
    gl_PointSize = aSize * uDpr;
    vSeed = aSeed; vDepth = aDepth; vY = position.y / uRes.y; vR = aSize * 0.5 / uRes.y;
  }`,uv=`
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
  }`;function dv(i,e,t){let n=i.querySelector(".offers-night"),s=i.querySelector(".offers-gl");if(!n||!s)return;let r;try{r=new Hn({alpha:!0,antialias:!0,premultipliedAlpha:!0,powerPreference:"low-power"})}catch{return}r.setPixelRatio(bn()),r.setClearColor(0,0),s.prepend(r.domElement),s.classList.add("is-gl");let a=e.isMobile(),o=a?7:12,l=new Float32Array(o*3),c=new Float32Array(o),u=new Float32Array(o),h=new Float32Array(o),d=new Rt,f=new Tt(l,3).setUsage(Kh);d.setAttribute("position",f),d.setAttribute("aSize",new Tt(c,1)),d.setAttribute("aSeed",new Tt(u,1)),d.setAttribute("aDepth",new Tt(h,1));let v={uRes:{value:new He(1,1)},uDpr:{value:bn()},uTime:{value:0},uFade:{value:t?1:0}},g=new gt({uniforms:v,vertexShader:hv,fragmentShader:uv,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0}),m=new Ss(d,g);m.frustumCulled=!1;let p=new cn;p.add(m);let w=new _s,b=1,M=1,O=7,E=()=>(O=O*16807%2147483647)/2147483647,C=[];for(let Me=0;Me<o;Me++){let te=1-Me/(o-1)*.92-E()*.06;C.push({i:Me,z:te,x:0,y:0,vx:0,vy:0,r:0,ph:E()*6.283,seed:E()})}function N(Me,te){let ge=1-Me.z;Me.r=(a?.62:1)*(9+Math.pow(E(),1.7)*44+ge*22);let ne=E();!a&&ne>.6&&ne<.95&&E()<.5&&(ne=E()*.55),Me.x=ne*b,Me.y=te?(.15+E()*.85)*M:M+Me.r+E()*M*.25,Me.vx=0,Me.vy=te?-(6+Me.r*.3):0,Me.seed=E(),Me.ph=E()*6.283,c[Me.i]=Me.r*2,u[Me.i]=Me.seed,h[Me.i]=Me.z,d.attributes.aSize.needsUpdate=!0,d.attributes.aSeed.needsUpdate=!0,d.attributes.aDepth.needsUpdate=!0}function _(){let Me=n.getBoundingClientRect(),te=Math.max(1,Math.round(Me.width)),ge=Math.max(1,Math.round(Me.height)),ne=b===1;ne||C.forEach(X=>{X.x*=te/b,X.y*=ge/M}),b=te,M=ge,r.setSize(b,M,!1),v.uRes.value.set(b,M),ne&&C.forEach(X=>N(X,!0))}_(),new ResizeObserver(_).observe(n);let x={x:-9999,y:-9999,vx:0,vy:0,on:!1,t:0};t||(n.addEventListener("pointermove",Me=>{let te=n.getBoundingClientRect(),ge=Me.clientX-te.left,ne=Me.clientY-te.top,X=performance.now(),pe=Math.max(8,X-x.t)/1e3;x.on&&(x.vx=x.vx*.6+(ge-x.x)/pe*.4,x.vy=x.vy*.6+(ne-x.y)/pe*.4),x.x=ge,x.y=ne,x.on=!0,x.t=X},{passive:!0}),n.addEventListener("pointerleave",()=>{x.on=!1,x.vx=x.vy=0},{passive:!0}));let U=scrollY,K=0;addEventListener("scroll",()=>{K+=scrollY-U,U=scrollY},{passive:!0});let Z=[],se=[i.querySelector(".offers-title"),i.querySelector(".offers-clock__digits")].filter(Boolean);function G(){let Me=n.getBoundingClientRect();Z=se.map(te=>{let ge=te.getBoundingClientRect();return{x0:ge.left-Me.left,y0:ge.top-Me.top,x1:ge.right-Me.left,y1:ge.bottom-Me.top}})}G(),new ResizeObserver(G).observe(n),addEventListener("load",G);function L(Me,te){let ge=Math.max(-60,Math.min(60,K));K=0,x.vx*=Math.exp(-Me*6),x.vy*=Math.exp(-Me*6);for(let ne of C){let X=1-ne.z,pe=-(5+ne.r*.36)*(.55+X*.45),Ae=(Math.sin(te*(.22+ne.seed*.12)+ne.ph)*(3+ne.r*.07)-ne.vx)*.8,Ue=(pe-ne.vy)*.8;if(x.on){let I=ne.x-x.x,Le=ne.y-x.y,le=Math.hypot(I,Le)||1,oe=150+ne.r;if(le<oe){let Q=Math.pow(1-le/oe,2)*(.35+X*.65);Ae+=I/le*Q*90+x.vx*Q*.9,Ue+=Le/le*Q*90+x.vy*Q*.9}}for(let I of Z){let Le=ne.r*.9+12;if(ne.x>I.x0-Le&&ne.x<I.x1+Le&&ne.y>I.y0-Le&&ne.y<I.y1+Le){let le=(I.x0+I.x1)/2,oe=ne.x<le?-1:1,Q=oe<0?ne.x-(I.x0-Le):I.x1+Le-ne.x;Ae+=oe*Math.min(1,Q/120)*70*(.25+X*.75)}}ne.vy+=ge*.9*(.3+X*.7),ne.vx+=Ae*Me,ne.vy+=Ue*Me;let Fe=Math.hypot(ne.vx,ne.vy),re=140;Fe>re&&(ne.vx*=re/Fe,ne.vy*=re/Fe)}for(let ne=0;ne<o;ne++)for(let X=ne+1;X<o;X++){let pe=C[ne],Ee=C[X];if(Math.abs(pe.z-Ee.z)>.3)continue;let Ae=Ee.x-pe.x,Ue=Ee.y-pe.y,Fe=Math.hypot(Ae,Ue)||1,re=(pe.r+Ee.r)*1.08;if(Fe<re){let I=(re-Fe)*.5*Me*2.2,Le=Ae/Fe,le=Ue/Fe;pe.vx-=Le*I*8,pe.vy-=le*I*8,Ee.vx+=Le*I*8,Ee.vy+=le*I*8}}for(let ne of C)ne.x+=ne.vx*Me,ne.y+=ne.vy*Me,ne.y<-ne.r*1.3&&N(ne,!1),ne.x<-ne.r?ne.x=b+ne.r:ne.x>b+ne.r&&(ne.x=-ne.r),l[ne.i*3]=ne.x,l[ne.i*3+1]=ne.y,l[ne.i*3+2]=0;f.needsUpdate=!0}let q=Me=>{v.uTime.value=Me,r.render(p,w)};if(t){for(let Me=0;Me<120;Me++)L(1/30,Me/30);q(4);return}for(let Me=0;Me<90;Me++)L(1/30,Me/30);let k=!1,he=0,xe=3,Te=ui(n,Me=>{Me&&!k&&(k=!0,he=performance.now(),requestAnimationFrame(De))});function De(Me){if(!Te()||document.hidden){k=!1;return}let te=Math.min(1/30,(Me-he)/1e3);he=Me,xe+=te,v.uFade.value=Math.min(1,v.uFade.value+te*.8),L(te,xe),q(xe),requestAnimationFrame(De)}document.addEventListener("visibilitychange",()=>{!document.hidden&&Te()&&!k&&(k=!0,he=performance.now(),requestAnimationFrame(De))})}var cu="data:image/webp;base64,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";var hu={"skin-oil":{url:cu,box:[1e3,1e3,232,100,769,960],h:.76},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,718,1109],h:.74},"day-cream":{src:"products/day-cream.webp",box:[1200,1200,345,97,875,1152],h:.86},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,881,1154],h:.86},"cleansing-gel":{src:"products/cleansing-gel-box.webp",box:[1200,1200,223,64,1034,1120],h:.82},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1142],h:.92},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,65,763,1149],h:1},"komplet-pakken":{src:"products/startpakke-plus.webp",box:[1200,1200,173,77,1110,1116],h:1},"all-day-facial":{src:"products/all-day-facial.webp",box:[1200,1200,161,78,1127,1116],h:1}},fv=["komplet-pakken","skin-oil","serum","day-cream","night-cream","all-day-facial","cleansing-gel","body-lotion","shampoo"],pv={"skin-oil":"face",serum:"face","day-cream":"face","night-cream":"face","cleansing-gel":"face","body-lotion":"body",shampoo:"body"},uu=i=>i.bundle?"sets":pv[i.id]||"face",mv={"cleansing-gel":"Rens","day-cream":"Dag","night-cream":"Nat","skin-oil":"Olie"},Wi={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="deals-check" d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.75 12S6.1 5.75 12 5.75 21.25 12 21.25 12 17.9 18.25 12 18.25 2.75 12 2.75 12z"/><circle cx="12" cy="12" r="2.75"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',truck:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h10.5v8.5H3.5z"/><path d="M14 10.5h3.6l2.9 3v2.5H14"/><circle cx="7.25" cy="17.25" r="1.75"/><circle cx="16.75" cy="17.25" r="1.75"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.25 4.5v3.25H7.5"/></svg>',leaf:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.75 5.25 6.5v5c0 4.2 2.9 7.4 6.75 8.75 3.85-1.35 6.75-4.55 6.75-8.75v-5z"/><path d="m9.25 12 1.95 1.95 3.75-3.9"/></svg>'},Wt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),yr=(i,e,t)=>Math.max(e,Math.min(t,i));function ec(i,e){let{fmt:t,store:n}=e,s=P=>t.kr(P).replace(/ (?=kr\.)/,"\xA0"),r=(P,z=i)=>z.querySelector(P),a=(P,z=i)=>[...z.querySelectorAll(P)],o=e.prefersReducedMotion,l=matchMedia("(hover: hover) and (pointer: fine)").matches,c="cubic-bezier(.16, 1, .3, 1)",u=+((location.search.match(/[?&]dealsSlow=(\d+)/)||[])[1]||1),h=matchMedia("(hover: none), (pointer: coarse)").matches||navigator.maxTouchPoints>0&&e.isMobile();i.classList.toggle("deals-touch",h);let d=r("[data-deals-grid]"),f=r("[data-deals-live]"),v=fv.map(P=>e.byId[P]).filter(P=>P&&!P.gift&&hu[P.id]);e.products.forEach(P=>{!P.gift&&P.img&&!v.includes(P)&&!/drops|lubricant/.test(P.img)&&v.push(P)});function g(P,z=""){let $=hu[P.id],R=$&&$.url?$.url:e.asset($?$.src:P.img);if(!$)return`<div class="deals-prod ${z}" style="--ar:.8;--ph:.8"><span class="deals-prod__shadow"></span><span class="deals-prod__pack"><img src="${R}" alt="" loading="lazy" decoding="async" style="width:100%;left:0;top:0"></span></div>`;let[ee,V,H,be,ye,F]=$.box,ie=ye-H,B=F-be,Ce=`width:${(ee/ie*100).toFixed(3)}%;left:${(-H/ie*100).toFixed(3)}%;top:${(-be/B*100).toFixed(3)}%`;return`<div class="deals-prod${P.bundle?" deals-prod--set":""} ${z}" style="--ar:${(ie/B).toFixed(4)};--ph:${$.h}">
      <span class="deals-prod__shadow" aria-hidden="true"></span>
      <span class="deals-prod__pack"><img src="${R}" alt="${Wt(P.name)}${P.size&&!P.bundle?", "+Wt(P.size):""}" width="${ee}" height="${V}" draggable="false" style="${Ce}"></span>
    </div>`}let m=(P,z=!1)=>`
    <div class="deals-price${z?" deals-price--big":""}">
      <span class="deals-price__now"><span class="nc-sr">Black Week-pris </span>${s(P.price)}</span>
      <span class="deals-price__save">Spar ${s(P.save)}</span>
      <span class="deals-price__was">F\xF8rpris ${s(P.price0)}</span>
    </div>`,p=(P,z="")=>`
    <button class="nc-btn deals-add${z}" type="button" data-add="${P.id}" aria-label="L\xE6g ${Wt(P.name)} i kurv">
      <span class="deals-add__ink" aria-hidden="true"></span>
      <span class="deals-add__a" aria-hidden="true">${Wi.bag}<span>L\xE6g i kurv</span></span>
      <span class="deals-add__b" aria-hidden="true">${Wi.check}<span>Lagt i kurv</span></span>
    </button>`,w=P=>[P.size,P.strength].filter(Boolean).join(" \xB7 "),b=P=>{let z=(P.contains||[]).map($=>e.byId[$]).filter(Boolean);return z.length?`<dl class="deals-set__list">
      ${z.map($=>`<div class="deals-set__row"><dt>${Wt($.name)}</dt><dd>${s($.price0)}</dd></div>`).join("")}
      <div class="deals-set__row deals-set__row--sum"><dt>V\xE6rdi ved l\xF8sk\xF8b</dt><dd>${s(P.valueLoose)}</dd></div>
    </dl>`:""};function M(P,z){let $=uu(P),R=`<span class="nc-bubble nc-bubble--sale deals-bubble" aria-hidden="true">\u2212${P.pct}%</span>`,ee=`<button class="deals-quick" type="button" data-qv="${P.id}" aria-label="Hurtig visning: ${Wt(P.name)}">${Wi.eye}<span class="deals-quick__t">Hurtig visning</span></button>`;if(P.bundle){let V=(P.contains||[]).length;return`<li class="deals-item deals-item--set" data-id="${P.id}" data-cat="${$}" style="--ri:${z}">
        <article class="deals-card deals-card--set" aria-labelledby="deals-n-${P.id}">
          <div class="deals-card__stage" data-stage>
            ${g(P)}${R}
            <span class="deals-sheen" aria-hidden="true"></span>${ee}
          </div>
          <div class="deals-card__body">
            ${P.badge?`<img class="deals-set__badge" src="${e.asset(P.badge)}" alt="" width="64" height="64" loading="lazy">`:""}
            <p class="deals-card__eyebrow">Sampakke \xB7 ${V} produkter</p>
            <h3 class="deals-card__name deals-card__name--set" id="deals-n-${P.id}">${Wt(P.name)}</h3>
            <p class="deals-card__claim deals-card__claim--set">${Wt(P.claim)}</p>
            ${b(P)}
            <div class="deals-card__buy">${m(P,!0)}${p(P)}</div>
          </div>
        </article>
      </li>`}return`<li class="deals-item" data-id="${P.id}" data-cat="${$}" style="--ri:${z}">
      <article class="deals-card" aria-labelledby="deals-n-${P.id}">
        <div class="deals-card__stage" data-stage>
          ${g(P)}${R}
          <span class="deals-sheen" aria-hidden="true"></span>${ee}
        </div>
        <div class="deals-card__body">
          <p class="deals-card__eyebrow">${Wt(P.nickname||P.eyebrow)}</p>
          <h3 class="deals-card__name" id="deals-n-${P.id}">${Wt(P.name)}</h3>
          <p class="deals-card__size">${Wt(w(P))}</p>
          <p class="deals-card__claim">${Wt(P.claim)}</p>
          <div class="deals-card__buy">${m(P)}${p(P)}</div>
        </div>
      </article>
    </li>`}let O=e.byId[e.campaign.giftId],E=e.campaign.giftThreshold,C=e.campaign.freeShipping,N=`<li class="deals-item deals-item--gift" data-cat="gift" style="--ri:${v.length}">
    <aside class="deals-gift nc-grain" aria-labelledby="deals-gift-t">
      <img class="deals-gift__mark" src="${e.asset("logo-mark-white.svg")}" alt="" aria-hidden="true">
      <span class="deals-gift__glow" aria-hidden="true"></span>
      <div class="deals-gift__in">
        <div class="deals-gift__head">
          <p class="deals-gift__eyebrow">Gave ved k\xF8b over ${s(E)}</p>
          <h3 class="deals-gift__title" id="deals-gift-t">${Wt(O?O.name:"CBD Lip Balm")} med i k\xF8bet</h3>
        </div>
        <div class="deals-gift__bubbles" aria-hidden="true">
          <span class="nc-bubble nc-bubble--pink deals-gift__bubble">Gratis</span>
          <span class="nc-bubble nc-bubble--sand deals-gift__bubble deals-gift__bubble--val"><span>V\xE6rdi<br>${s(e.campaign.giftValue)}</span></span>
        </div>
        <p class="deals-gift__copy">L\xE6gges automatisk i kurven, n\xE5r du handler for over ${s(E)} \u2013 v\xE6rdi ${s(e.campaign.giftValue)}</p>
        <div class="deals-gift__meter">
          <div class="deals-gift__track" role="progressbar" aria-label="Fremskridt mod gratis CBD Lip Balm" aria-valuemin="0" aria-valuemax="${E}" aria-valuenow="0">
            <span class="deals-gift__fill"></span>
            <span class="deals-gift__tick" style="--at:${(C/E*100).toFixed(2)}%"></span>
            <span class="deals-gift__tick deals-gift__tick--end" style="--at:100%"></span>
          </div>
          <div class="deals-gift__labels" aria-hidden="true">
            <span style="--at:${(C/E*100).toFixed(2)}%">Fri fragt</span>
            <span style="--at:100%">Gave</span>
          </div>
        </div>
        <p class="deals-gift__status" data-gift-status></p>
      </div>
    </aside>
  </li>`;d.innerHTML=v.map(M).join("")+N,d.classList.add("deals-rv");let _=()=>{d.classList.add("is-in")};if(o)_();else{let P=new IntersectionObserver(z=>{z.some($=>$.isIntersecting)&&(_(),P.disconnect())},{rootMargin:"0px 0px -6% 0px"});P.observe(d)}let x=r(".deals-foot");x&&x.removeAttribute("data-reveal");let U={all:v.length,face:0,body:0,sets:0};v.forEach(P=>U[uu(P)]++),a("[data-count]").forEach(P=>{P.textContent=U[P.dataset.count]});let K=r(".deals-gift__fill"),Z=r(".deals-gift__track"),se=r("[data-gift-status]"),G=r(".deals-gift");function L(){let P=n.subtotal();K.style.setProperty("--p",yr(P/E,0,1).toFixed(4)),Z.setAttribute("aria-valuenow",String(Math.min(P,E))),G.classList.toggle("is-ship",P>=C),G.classList.toggle("is-done",P>=E);let z;P<=0?z=`Du er ${s(E)} fra din gave \u2013 og ${s(C)} fra fri fragt.`:P<C?z=`Du mangler <b>${s(C-P)}</b> til fri fragt og <b>${s(E-P)}</b> til din gave.`:P<E?z=`Fri fragt er din. Du mangler <b>${s(E-P)}</b> til din gave.`:z="<b>Din CBD Lip Balm f\xF8lger med.</b> Fri fragt er ogs\xE5 din.",se.innerHTML=z}L(),n.on(P=>{(P==="cart:add"||P==="cart:change")&&L()});let q=r(".deals-filter"),k=r(".deals-filter__ink"),he=a(".deals-chip"),xe="all";function Te(P,z){let $=P.offsetLeft,R=P.offsetWidth;k.style.transition=z||o?"none":"",k.style.width=`${R}px`,k.style.transform=`translateX(${$}px)`,z&&(k.offsetWidth,k.style.transition=""),k.classList.add("is-on")}let De=()=>he.find(P=>P.getAttribute("aria-pressed")==="true")||he[0];requestAnimationFrame(()=>Te(De(),!0)),document.fonts&&document.fonts.ready.then(()=>Te(De(),!0)),new ResizeObserver(()=>Te(De(),!0)).observe(q);let Me=()=>a(".deals-item",d),te=r(".deals-item--gift",d),ge=()=>getComputedStyle(d).gridTemplateColumns.split(" ").filter(Boolean).length||1,ne=P=>P.classList.contains("deals-item--set")?Math.min(2,ge()):1;function X(P=xe){let z=ge(),R=Me().filter(V=>V!==te&&(P==="all"||V.dataset.cat===P)).reduce((V,H)=>V+ne(H),0),ee=(z-R%z)%z||z;return te.style.gridColumn=`span ${ee}`,te.dataset.span=ee,te.classList.toggle("is-wide",ee>=2),ee}X();let pe=ge();new ResizeObserver(()=>{let P=ge();P!==pe&&(pe=P,X())}).observe(d);let Ee=[];function Ae(P){if(P===xe)return;xe=P,Ee.forEach(B=>B.cancel()),Ee=[],d.classList.add("is-in"),Me().forEach(B=>{B.style.position=B.style.left=B.style.top=B.style.width=B.style.height="",B.classList.remove("is-leaving"),B.dataset.leaving&&(B.hidden=!0,delete B.dataset.leaving)});let z=d.getBoundingClientRect(),$=z.height,R=new Map(Me().filter(B=>!B.hidden).map(B=>[B,B.getBoundingClientRect()])),ee=te.dataset.span,V=B=>B===te||P==="all"||B.dataset.cat===P,H=[...R.keys()].filter(B=>!V(B)),be=Me().filter(B=>B.hidden&&V(B));H.forEach(B=>{let Ce=R.get(B);Object.assign(B.style,{position:"absolute",left:`${Ce.left-z.left}px`,top:`${Ce.top-z.top}px`,width:`${Ce.width}px`,height:`${Ce.height}px`}),B.classList.add("is-leaving"),B.dataset.leaving="1"}),be.forEach(B=>{B.hidden=!1});let ye=String(X(P)),F=d.getBoundingClientRect().height;if(o){H.forEach(B=>{B.hidden=!0,B.style.position="",B.classList.remove("is-leaving"),delete B.dataset.leaving});return}H.forEach(B=>{let Ce=B.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(6px) scale(.965)",filter:"blur(2px)"}],{duration:300,easing:"cubic-bezier(.4,0,.6,1)",fill:"forwards"});Ee.push(Ce),Ce.onfinish=()=>{B.hidden=!0,Object.assign(B.style,{position:"",left:"",top:"",width:"",height:""}),B.classList.remove("is-leaving"),delete B.dataset.leaving,Ce.cancel()}});let ie=0;Me().filter(B=>!B.hidden&&!B.dataset.leaving).forEach(B=>{let Ce=B.getBoundingClientRect(),ze=R.get(B);if(B===te&&ee!==ye)Ee.push(B.animate([{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"none"}],{duration:640,delay:260,easing:c,fill:"backwards"}));else if(ze){let Ke=ze.left-Ce.left,Ze=ze.top-Ce.top;Math.abs(Ke)+Math.abs(Ze)>.5&&Ee.push(B.animate([{transform:`translate(${Ke}px, ${Ze}px)`},{transform:"none"}],{duration:760,easing:c}))}else Ee.push(B.animate([{opacity:0,transform:"translateY(18px) scale(.985)"},{opacity:1,transform:"none"}],{duration:720,delay:160+ie++*55,easing:c,fill:"backwards"}))}),Math.abs(F-$)>1&&Ee.push(d.animate([{height:`${$}px`},{height:`${F}px`}],{duration:640,easing:c}))}he.forEach(P=>P.addEventListener("click",()=>{he.forEach($=>$.setAttribute("aria-pressed",String($===P))),Te(P),q.scrollWidth>q.clientWidth&&q.scrollTo({left:P.offsetLeft-(q.clientWidth-P.offsetWidth)/2,behavior:o?"auto":"smooth"}),Ae(P.dataset.filter);let z=U[P.dataset.filter];f.textContent=`Viser ${z} ${z===1?"produkt":"produkter"}`})),q.addEventListener("keydown",P=>{let z=he.indexOf(document.activeElement);if(z<0)return;let $=P.key==="ArrowRight"?z+1:P.key==="ArrowLeft"?z-1:P.key==="Home"?0:P.key==="End"?he.length-1:-1;$<0&&P.key!=="ArrowLeft"||(P.preventDefault(),he[($+he.length)%he.length].focus())});let Ue=new Map,Fe=0,re=0;function I(P){let z=Math.min(.05,(P-re)/1e3);re=P;let $=1-Math.exp(-z*9),R=1-Math.exp(-z*7),ee=!1;Ue.forEach((V,H)=>{V.rx+=(V.trx-V.rx)*$,V.ry+=(V.try-V.ry)*$,V.h+=(V.th-V.h)*R,V.mx+=(V.tmx-V.mx)*$,V.my+=(V.tmy-V.my)*$,H.style.transform=`perspective(1100px) rotateX(${V.rx.toFixed(3)}deg) rotateY(${V.ry.toFixed(3)}deg) translateY(${(-V.h*3).toFixed(2)}px)`,H.style.setProperty("--h",V.h.toFixed(4)),H.style.setProperty("--mx",`${(V.mx*100).toFixed(2)}%`),H.style.setProperty("--my",`${(V.my*100).toFixed(2)}%`),H.style.setProperty("--px",(V.ry/6).toFixed(4)),Math.abs(V.trx-V.rx)+Math.abs(V.try-V.ry)+Math.abs(V.th-V.h)>.002?ee=!0:V.th===0&&(H.style.transform="",Ue.delete(H))}),Fe=ee||Ue.size?requestAnimationFrame(I):0,ee||(cancelAnimationFrame(Fe),Fe=0)}let Le=()=>{Fe||(re=performance.now(),Fe=requestAnimationFrame(I))};function le(P){let z=Ue.get(P);return z||(z={rx:0,ry:0,trx:0,try:0,h:0,th:0,mx:.5,my:.3,tmx:.5,tmy:.3},Ue.set(P,z)),z}l&&!h&&!o&&(d.addEventListener("pointermove",P=>{let z=P.target.closest(".deals-card");if(!z||P.pointerType!=="mouse")return;let $=z.getBoundingClientRect(),R=yr((P.clientX-$.left)/$.width,0,1),ee=yr((P.clientY-$.top)/$.height,0,1),V=le(z),H=z.classList.contains("deals-card--set")?.55:1;V.try=(R-.5)*7*H,V.trx=-(ee-.5)*5*H,V.th=1,V.tmx=R,V.tmy=ee,Le()}),d.addEventListener("pointerout",P=>{let z=P.target.closest(".deals-card");if(!z||z.contains(P.relatedTarget))return;let $=Ue.get(z);$&&($.trx=0,$.try=0,$.th=0,$.tmx=.5,$.tmy=.3,Le())}));let oe=new WeakMap;function Q(P,z){let $=P.getBoundingClientRect(),R=z&&z.clientX?z.clientX-$.left:$.width/2,ee=z&&z.clientY?z.clientY-$.top:$.height/2;P.style.setProperty("--ix",`${R}px`),P.style.setProperty("--iy",`${ee}px`),P.classList.remove("is-added"),P.offsetWidth,P.classList.add("is-added"),P.setAttribute("aria-label",P.getAttribute("aria-label").replace(/^Læg (.*) i kurv$/,"L\xE6g $1 i kurv \u2013 lagt i kurv")),clearTimeout(oe.get(P)),oe.set(P,setTimeout(()=>{P.classList.remove("is-added"),P.setAttribute("aria-label",P.getAttribute("aria-label").replace(" \u2013 lagt i kurv",""))},2600))}function Se(){let P=innerWidth,$=[...document.querySelectorAll("[data-cart]")].map(R=>R.querySelector(".hdr-cart__icon")||R).map(R=>R.getBoundingClientRect()).filter(R=>R.width>0&&R.bottom>0&&R.top<innerHeight&&R.left<P)[0];return $?{x:$.left+$.width/2,y:$.top+$.height/2,real:!0}:{x:P-36,y:30,real:!1}}let de=(P,z,$,R,ee)=>{let V=1-ee;return V*V*V*P+3*V*V*ee*z+3*V*ee*ee*$+ee*ee*ee*R},T=P=>(P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2)*.82+(1-Math.pow(1-P,3))*.18,y=null,Y=[],ae=0;function ve(){y||(y=document.createElement("canvas"),y.className="deals-trail",y.setAttribute("aria-hidden","true"),i.appendChild(y))}function _e(P){let z=y,$=Math.min(devicePixelRatio||1,2);(z.width!==Math.round(innerWidth*$)||z.height!==Math.round(innerHeight*$))&&(z.width=Math.round(innerWidth*$),z.height=Math.round(innerHeight*$));let R=z.getContext("2d");R.setTransform($,0,0,$,0,0),R.clearRect(0,0,innerWidth,innerHeight),R.lineCap="round",Y=Y.filter(ee=>P-ee.end<520*u||!ee.done);for(let ee of Y){let V=ee.pts,H=ee.done?Math.max(0,1-(P-ee.end)/(520*u)):1;for(let be=1;be<V.length;be++){let ye=(P-V[be].t)/(420*u);if(ye>1)continue;let F=(1-ye)*(1-ye)*H;R.strokeStyle=`rgba(128, 160, 151, ${(.38*F).toFixed(3)})`,R.lineWidth=1+9*F*V[be].s,R.beginPath(),R.moveTo(V[be-1].x,V[be-1].y),R.lineTo(V[be].x,V[be].y),R.stroke()}for(let be of ee.drops){let ye=(P-be.t)/(700*u);ye>1||ye<0||(R.fillStyle=`rgba(221, 191, 163, ${(.55*(1-ye)*H).toFixed(3)})`,R.beginPath(),R.arc(be.x,be.y+ye*10,be.r*(1-ye*.6),0,Math.PI*2),R.fill())}}Y.length?ae=requestAnimationFrame(_e):(ae=0,R.clearRect(0,0,innerWidth,innerHeight))}function We(P,z,$){let R=P&&P.querySelector(".deals-prod__pack");if(o||!R){$();return}let ee=R.getBoundingClientRect();if(ee.width<2){$();return}let V=R.cloneNode(!0);V.className="deals-fly"+(R.closest(".deals-prod--set")?" deals-prod--set":""),Object.assign(V.style,{left:`${ee.left}px`,top:`${ee.top}px`,width:`${ee.width}px`,height:`${ee.height}px`}),V.querySelector("img").loading="eager",i.appendChild(V);let H=document.createElement("span");H.className="deals-fly__drop",i.appendChild(H),ve();let be={pts:[],drops:[],done:!1,end:0};Y.push(be),ae||(ae=requestAnimationFrame(_e));let ye=ee.left+ee.width/2,F=ee.top+ee.height/2,ie=Se(),B=Math.hypot(ie.x-ye,ie.y-F),Ce=yr(620+B*.42,760,1150)*u,ze=Math.min(140,40+B*.12),Ke=14,Ze=ye,it=Math.max(Ke,F-ze-Math.max(0,F-ie.y)*.35),st=ye+(ie.x-ye)*.62,St=Math.max(Ke,Math.min(ie.y,F)-ze*.55),wt=22/Math.max(ee.width,ee.height),ht=performance.now(),nt=.18,It=!1;function Bt(Lt){let Et=yr((Lt-ht)/Ce,0,1),Jt=T(Et),xn=Se(),yn=ie.real?xn.x:ie.x,A=ie.real?xn.y:ie.y,J=de(ye,Ze,st,yn,Jt),ue=de(F,it,St,A,Jt),fe=1+(wt-1)*Math.pow(Jt,.8),j=Math.sin(Jt*Math.PI)*-7;V.style.transform=`translate(${(J-ye).toFixed(2)}px, ${(ue-F).toFixed(2)}px) scale(${fe.toFixed(4)}) rotate(${j.toFixed(2)}deg)`,V.style.opacity=String(Et<.82?1:1-(Et-.82)/.18),H.style.transform=`translate(${(J-6).toFixed(2)}px, ${(ue-6).toFixed(2)}px) scale(${(.4+.6*Math.sin(Jt*Math.PI)).toFixed(3)})`,H.style.opacity=String(Math.sin(Et*Math.PI)*.9),be.pts.push({x:J,y:ue,t:Lt,s:Math.max(.25,fe)}),be.pts.length>60&&be.pts.shift(),Et>nt&&Et<.8&&(be.drops.push({x:J+(Math.random()-.5)*10,y:ue+(Math.random()-.5)*8,r:1.4+Math.random()*1.8,t:Lt}),nt+=.12+Math.random()*.08),Et>=.93&&!It&&(It=!0,$()),Et<1?requestAnimationFrame(Bt):(V.remove(),H.remove(),be.done=!0,be.end=Lt)}requestAnimationFrame(Bt)}function Ne(P,z,$,R){z&&Q(z,$);let ee=!1;We(R,P,()=>{ee||(ee=!0,n.add(P.id,1),f.textContent=`${P.name} er lagt i kurven.`)})}d.addEventListener("click",P=>{let z=P.target.closest("[data-add]");if(z){let ee=e.byId[z.dataset.add];Ne(ee,z,P,z.closest(".deals-card").querySelector("[data-stage]"));return}let $=P.target.closest("[data-qv]");if($){Xe(e.byId[$.dataset.qv],$);return}let R=P.target.closest("[data-stage]");if(R){let ee=R.querySelector("[data-qv]");ee&&Xe(e.byId[ee.dataset.qv],ee)}});let we=document.createElement("dialog");we.className="deals-qv",we.setAttribute("aria-labelledby","deals-qv-title"),i.appendChild(we);let $e=null,Re=null,Oe=!1;function Je(P){let z=`<ul class="deals-qv__usp">
      <li>${Wi.truck}Fri fragt over ${s(e.campaign.freeShipping)}</li>
      <li>${Wi.back}14 dages fortrydelsesret</li>
      <li>${Wi.leaf}Testet til under 0,2% THC</li>
    </ul>`;return`<div class="deals-qv__sheet">
      <button class="deals-qv__close" type="button" aria-label="Luk hurtig visning" data-qv-close>${Wi.close}</button>
      <div class="deals-qv__stage" data-stage>
        <span class="deals-qv__light" aria-hidden="true"></span>
        ${g(P,"deals-prod--qv"+(P.bundle?" deals-prod--qvset":""))}
        <span class="nc-bubble nc-bubble--sale deals-bubble deals-bubble--qv" aria-hidden="true">\u2212${P.pct}%</span>
        ${P.badge&&P.bundle?`<img class="deals-qv__badge" src="${e.asset(P.badge)}" alt="" width="64" height="64">`:""}
      </div>
      <div class="deals-qv__body">
        <p class="deals-card__eyebrow">${Wt(P.bundle?`Sampakke \xB7 ${(P.contains||[]).length} produkter`:P.nickname?`${P.nickname} \xB7 ${P.eyebrow}`:P.eyebrow)}</p>
        <h2 class="deals-qv__title" id="deals-qv-title">${Wt(P.name)}</h2>
        <p class="deals-card__size">${Wt(P.bundle?(P.contains||[]).map($=>mv[$]||e.byId[$]?.name).join(" \xB7 "):w(P))}</p>
        <p class="deals-qv__claim">${Wt(P.claim)}</p>
        ${P.notes?`<p class="deals-qv__notes">${Wt(P.notes)}</p>`:""}
        ${P.bundle?b(P):""}
        <hr class="nc-dotline deals-qv__rule">
        <div class="deals-qv__buy">${m(P,!0)}${p(P," nc-btn--lg")}</div>
        ${z}
      </div>
    </div>`}function Xe(P,z){P&&(Re=P,$e=z,Oe=!1,we.innerHTML=Je(P),r("img",we)&&(r("img",we).loading="eager"),we.showModal(),document.documentElement.classList.add("deals-lock"),o||(r(".deals-qv__sheet",we).animate([{opacity:0,transform:"translateY(22px) scale(.985)"},{opacity:1,transform:"none"}],{duration:620,easing:c}),r(".deals-prod",we).animate([{opacity:0,transform:"translate(-50%, 16px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:900,delay:90,easing:c,fill:"backwards"})),r("[data-qv-close]",we).focus({preventScroll:!0}))}function ke(P){if(!we.open||Oe)return;Oe=!0;let z=()=>{we.close(),Oe=!1,document.documentElement.classList.remove("deals-lock"),$e&&!P&&$e.focus({preventScroll:!0}),P&&P()};if(o)return z();we.classList.add("is-closing");let $=r(".deals-qv__sheet",we).animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(14px) scale(.99)"}],{duration:220,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});$.onfinish=()=>{we.classList.remove("is-closing"),z()}}we.addEventListener("cancel",P=>{P.preventDefault(),ke()}),we.addEventListener("click",P=>{if(P.target===we||P.target.closest("[data-qv-close]"))return ke();let z=P.target.closest("[data-add]");if(z&&Re){let $=Re;Q(z,P);let R=d.querySelector(`.deals-item[data-id="${$.id}"]`),ee=R&&R.querySelector("[data-add]"),V=r(".deals-prod__pack",we),H=V.getBoundingClientRect();setTimeout(()=>ke(()=>{let be=document.createElement("div");be.style.cssText=`position:fixed;left:${H.left}px;top:${H.top}px;width:${H.width}px;height:${H.height}px;pointer-events:none`,be.appendChild(V.cloneNode(!0)),i.appendChild(be),ee&&Q(ee),Ne($,null,null,be),setTimeout(()=>be.remove(),40),$e&&$e.focus({preventScroll:!0})}),o?0:380)}})}var Da=class extends cn{constructor(){super();let e=new ri;e.deleteAttribute("uv");let t=new Tn({side:zt}),n=new Tn,s=new ba(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new je(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new je(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new je(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new je(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new je(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new je(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new je(e,Hs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new je(e,Hs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let v=new je(e,Hs(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);let g=new je(e,Hs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let m=new je(e,Hs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new je(e,Hs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hs(i){let e=new Gt;return e.color.setScalar(i),e}var Pn=15.5,tn=6.2,Vs=Pn-.75,qi=(i,e,t)=>Math.min(t,Math.max(e,i)),Dn=(i,e,t)=>i+(e-i)*t,qt=i=>new et(i);function gv(i=512){let e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d"),n=t.createImageData(i,i),s=(()=>{let h=7;return()=>(h=h*16807%2147483647)/2147483647})(),r=h=>{let d=new Float32Array(h*h);for(let f=0;f<d.length;f++)d[f]=s();return d},a=[r(4),r(8),r(16),r(48)],o=(h,d,f,v)=>{let g=f*d,m=v*d,p=Math.floor(g),w=Math.floor(m),b=g-p,M=m-w,O=b*b*(3-2*b),E=M*M*(3-2*M),C=(N,_)=>h[(_%d+d)%d*d+(N%d+d)%d];return Dn(Dn(C(p,w),C(p+1,w),O),Dn(C(p,w+1),C(p+1,w+1),O),E)},l=[4,8,16,48],c=[.45,.28,.17,.1];for(let h=0;h<i;h++)for(let d=0;d<i;d++){let f=d/i,v=h/i,g=0;for(let b=0;b<4;b++)g+=c[b]*o(a[b],l[b],f,v);let m=s()*.06,p=.86+(g-.5)*.16+m-.03,w=(h*i+d)*4;n.data[w]=n.data[w+1]=n.data[w+2]=qi(p,0,1)*255,n.data[w+3]=255}t.putImageData(n,0,0);for(let h=0;h<900;h++){let d=s()*i,f=s()*i,v=.4+s()*s()*1.6;t.fillStyle=`rgba(60,80,74,${.12+s()*.22})`,t.beginPath(),t.ellipse(d,f,v*(1+s()),v,s()*3,0,6.283),t.fill()}let u=new ai(e);return u.colorSpace=Ot,u.wrapS=u.wrapT=ki,u.anisotropy=4,u}function du(i,e=128){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,`rgba(255,255,255,${o})`)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new ai(t);return r.colorSpace=on,r}var vv=`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,xv=`
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
  }`,yv=`
  uniform vec3 uBase; uniform vec2 uSide, uDir; uniform float uW, uLen;
  varying vec2 vUv; varying vec2 vW;
  void main(){
    vUv = uv;
    float spread = 1.0 + uv.y * 0.18;                     // penumbra widens with distance
    vec3 p = vec3(uBase.x + uSide.x * (uv.x - 0.5) * uW * spread + uDir.x * uv.y * uLen, uBase.y,
             uBase.z + uSide.y * (uv.x - 0.5) * uW * spread + uDir.y * uv.y * uLen);
    vW = p.xz;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,Mv=`
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
  }`;function fu({canvas:i,items:e,reduced:t=!1,onFrame:n,onHover:s}){let r=new Hn({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setPixelRatio(bn()),r.outputColorSpace=Ot,r.toneMapping=Ol,r.toneMappingExposure=1,r.setClearColor(0,0);let a=new cn,o=new Si(r),l=new Da;a.environment=o.fromScene(l,.04).texture,a.environmentIntensity=.32,o.dispose(),l.traverse(z=>{z.isMesh&&(z.geometry.dispose(),z.material.dispose&&z.material.dispose())});let c=new Ct(22,1,1,600),u=new Ma(qt("#f4efe4"),qt("#28403b"),.9);a.add(u);let h=new Ei(qt("#fff3e6"),2.2);a.add(h),a.add(h.target);let d=new _a(qt("#fff1de"),0,0,.42,1,2);d.position.set(-10,62,26),d.target.position.set(0,tn,-2),a.add(d),a.add(d.target);let f=gv(),v=f.clone();v.needsUpdate=!0,v.repeat.set(7,.55);let g=f.clone();g.needsUpdate=!0,g.repeat.set(1.6,1.6);let m=qt("#a3bab3"),p=new Tn({color:m.clone().multiplyScalar(.84),map:v,bumpMap:v,bumpScale:.6,roughness:.9,metalness:0}),w=new Tn({color:m,map:g,bumpMap:g,bumpScale:.35,roughness:.84,metalness:0}),b=[[Pn-.45,0],[Pn-.12,.08],[Pn,.4],[Pn,tn-.75]];for(let z=1;z<=8;z++){let $=z/8*Math.PI/2;b.push([Vs+.75*Math.cos($),tn-.75+.75*Math.sin($)])}let M=new je(new ws(b.map(([z,$])=>new He(z,$)),160),p);M.rotation.y=.4;let O=new je(new ma(Vs+.02,160),w);O.rotation.x=-Math.PI/2,O.position.y=tn;let E=new Zt;E.add(M,O),a.add(E);let C=du([[0,1],[.45,.62],[.75,.22],[1,0]]),N=z=>new Gt({color:qt("#0f1b18"),alphaMap:C,transparent:!0,opacity:z,depthWrite:!1,toneMapped:!1}),_=new je(new en(1,1),N(.5));_.rotation.x=-Math.PI/2,_.scale.set(Pn*2.7,Pn*1.7,1),_.position.set(0,.02,0),_.renderOrder=1;let x=new je(new en(1,1),N(.22));x.rotation.x=-Math.PI/2,x.scale.set(Pn*3.6,Pn*2.2,1),x.renderOrder=1,a.add(_,x);let U=new ya,K=du([[0,1],[.25,.75],[.55,.28],[.8,.07],[1,0]],64),Z=[],se=e.map((z,$)=>{let R={...z,idx:$,loaded:0,w:z.h*z.aspect,x:0,z:0,y:6,vx:0,vz:0,vy:0,op:0,dim:0,lean:0,hover:0,tx:0,tz:0,ty:0,top:0,tdim:0,on:!1,mask:null},ee={map:{value:null},uTexel:{value:new He(1/256,1/1024)},uOpacity:{value:0},uDim:{value:0},uExpo:{value:1},uHover:{value:0},uTint:{value:new et(1,1,1)},uRim:{value:new et(0,0,0)}},V=new gt({uniforms:ee,vertexShader:vv,fragmentShader:xv,transparent:!0,depthWrite:!1,toneMapped:!1}),H=new en(R.w,z.h);H.translate(0,z.h/2,0);let be=new je(H,V);be.renderOrder=3,be.userData.p=R;let ye=new Zt;ye.add(be);let F=new Zt;F.add(ye);let ie=new Zt;ie.add(F),ie.visible=!1,a.add(ie);let B={map:{value:null},uBase:{value:new W},uSide:{value:new He(1,0)},uDir:{value:new He(.5,-.8)},uW:{value:R.w},uLen:{value:z.h},uOpacity:{value:0},uStrength:{value:.55},uCaustic:{value:z.amber?.2:0},uRT:{value:Vs},uShadow:{value:qt("#1a2c28")},uAmber:{value:qt("#c98a3c")}},Ce=new gt({uniforms:B,vertexShader:yv,fragmentShader:Mv,transparent:!0,depthWrite:!1,toneMapped:!1}),ze=new je(new en(1,1,1,1),Ce);ze.frustumCulled=!1,ze.renderOrder=2,ze.visible=!1,a.add(ze);let Ke=new je(new en(1,1),new Gt({color:qt("#13221f"),alphaMap:K,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return Ke.rotation.x=-Math.PI/2,Ke.renderOrder=2,Ke.visible=!1,a.add(Ke),Object.assign(R,{mesh:be,leanNode:ye,yaw:F,root:ie,mat:V,sMesh:ze,sU:B,ao:Ke}),Z.push(be),U.load(z.src,Ze=>{Ze.colorSpace=Ot,Ze.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),Ze.minFilter=ei,ee.map.value=Ze,B.map.value=Ze,ee.uTexel.value.set(1/Ze.image.width,1/Ze.image.height);try{let st=Math.round(24/z.aspect),St=document.createElement("canvas");St.width=24,St.height=st;let wt=St.getContext("2d");wt.drawImage(Ze.image,0,0,24,st);let ht=wt.getImageData(0,0,24,st).data;R.mask={mw:24,mh:st,a:(nt,It)=>ht[(Math.min(st-1,Math.floor((1-It)*st))*24+Math.min(23,Math.floor(nt*24)))*4+3]}}catch{}R.loaded=1,we()}),R}),G=Object.fromEntries(se.map(z=>[z.key,z])),L=1,q=1,k=!1,he=0,xe=0,Te=0,De=0,Me={yaw:0,pitch:0,ty:0,tp:0},te=null,ge=null,ne=new W,X=100,pe=.2;function Ee(z,$){let R=se.filter(B=>z.has(B.key)),ee=R.filter(B=>B.when.includes($)),V=R.filter(B=>!B.when.includes($)),H=2,be=ee.reduce((B,Ce)=>B+Ce.w,0)+H*Math.max(0,ee.length-1),ye=-be/2;ee.forEach((B,Ce)=>{B.tx=ye+B.w/2,ye+=B.w+H,B.tz=4.2-.014*B.tx*B.tx+(Ce%2?-.9:.3),B.tdim=0,B.on=!0});let F=1,ie={1:be/2-.6,"-1":be/2-.6};V.forEach((B,Ce)=>{if(!ee.length)B.tx=(Ce-(V.length-1)/2)*5.4,B.tz=-2;else{let ze=ie[F]+B.w/2;B.tx=qi(F*ze,-11.5,11.5),ie[F]=ze+B.w/2+1.4,B.tz=-6.4-(Ce>1?1.5:0),F=-F}B.tdim=1,B.on=!0}),se.forEach(B=>{z.has(B.key)?(!B.root.visible||B.op<.02)&&(B.x=B.tx+(B.tx>=0?1.2:-1.2),B.z=B.tz-3.2,B.y=6.5,B.vx=B.vz=B.vy=0,B.op=0,B.dim=B.tdim):B.on&&(B.on=!1)}),we()}function Ae(){let z=L/q;c.aspect=z;let $=In.degToRad(c.fov),R=2*Math.atan(Math.tan($/2)*z);pe=k?.25:.23;let ee=k?.36:.33,V=k?.8:.78,H=new W,be=new W,ye=120,F=tn+6;c.updateProjectionMatrix();for(let B=0;B<40;B++){ne.set(0,F,0),c.position.set(0,F+Math.sin(pe)*ye,Math.cos(pe)*ye),c.lookAt(ne),c.updateMatrixWorld();let Ce=(1-H.set(0,tn+14.5,0).project(c).y)/2,ze=(1-be.set(0,tn,Vs).project(c).y)/2;ye*=qi((ze-Ce)/(V-ee),.7,1.4),F-=((Ce+ze)/2-(ee+V)/2)*30}let ie=(k?13.5:17)/Math.tan(R/2)+Vs*.3;ye=Math.max(ye,ie),X=ye,ne.set(0,F,0)}function Ue(){let z=i.parentElement.getBoundingClientRect();L=Math.max(1,Math.round(z.width)),q=Math.max(1,Math.round(z.height)),k=L<560,r.setPixelRatio(bn()),r.setSize(L,q,!1),Ae(),we()}let Fe=30,re=.86,I=2*Math.sqrt(Fe)*re,Le=new W,le=new He,oe=new He,Q=new W;function Se(z){let $=!1,R=t?6:1,ee=1-Math.exp(-z*2.6*R);he+=(xe-he)*ee,Math.abs(xe-he)>.001?$=!0:he=xe,Te+=(De-Te)*(1-Math.exp(-z*2.2*R)),Math.abs(De-Te)>.002?$=!0:Te=De;let V=1-Math.exp(-z*3.2);Me.yaw+=(Me.ty-Me.yaw)*V,Me.pitch+=(Me.tp-Me.pitch)*V,Math.abs(Me.ty-Me.yaw)+Math.abs(Me.tp-Me.pitch)>4e-4&&($=!0);for(let H of se){if(!H.loaded)continue;let be=H.on?0:4.2,ye=H.on?H.tz:H.tz-4.5,F=H.on?1:0;if(t)H.x=H.tx,H.z=ye,H.y=H.on?0:be,H.vx=H.vz=H.vy=0;else{let Ke=Fe*(H.tx-H.x)-I*H.vx,Ze=Fe*(ye-H.z)-I*H.vz,it=22,st=2*Math.sqrt(it)*1,St=it*((H.on?0:be)-H.y)-st*H.vy;H.vx+=Ke*z,H.vz+=Ze*z,H.vy+=St*z,H.x+=H.vx*z,H.z+=H.vz*z,H.y+=H.vy*z,H.y<0&&(H.y=0,H.vy=0)}let ie=1-Math.exp(-z*(H.on?5.5:7)*R);H.op+=(F-H.op)*ie,H.dim+=(H.tdim-H.dim)*(1-Math.exp(-z*3.5*R));let B=(te===H||ge===H.key)&&H.on?1:0;H.hover+=(B-H.hover)*(1-Math.exp(-z*8));let Ce=t?0:qi(H.vx*.012,-.07,.07);H.lean+=(Ce-H.lean)*(1-Math.exp(-z*9)),Math.abs(H.tx-H.x)+Math.abs(ye-H.z)+Math.abs(H.vx)+Math.abs(H.vz)+Math.abs(H.vy)+Math.abs(H.y-(H.on?0:be))*.2+Math.abs(F-H.op)+Math.abs(H.tdim-H.dim)+Math.abs(B-H.hover)+Math.abs(H.lean)>.004?$=!0:(H.x=H.tx,H.z=ye,H.op=F,H.dim=H.tdim,H.hover=B,H.lean=0,H.vx=H.vz=H.vy=0)}return $}function de(){let z=he,$=Dn(.98,.62,z),R=Dn(-.62,-.95,z);Q.set(Math.sin(R),Math.sin($),Math.cos(R)*Math.cos($)).normalize(),h.position.copy(Q).multiplyScalar(60),h.target.position.set(0,tn,0),h.color.copy(qt("#fff5ea")).lerp(qt("#ffdcb8"),z),h.intensity=Dn(2.25,1.85,z)+Te*.25,u.intensity=Dn(.95,.74,z),u.color.copy(qt("#f2f1ea")).lerp(qt("#efe2d0"),z),d.color.copy(qt("#fff4e6")).lerp(qt("#ffe0bd"),z),d.intensity=2600*(.55+.45*z)+Te*2200,a.environmentIntensity=Dn(.36,.24,z);let ee=Math.hypot(Q.x,Q.z);oe.set(-Q.x/ee,-Q.z/ee);let V=qi(ee/Q.y,.35,1.6),H=new et(1,1,1).lerp(new et(1.035,.955,.86),z),be=qt("#fff1dc").multiplyScalar(Dn(.12,.2,z)).lerp(qt("#ffb766").multiplyScalar(.22),z),ye=Dn(.78,.66,z);x.position.set(oe.x*Pn*.55*V,.01,oe.y*Pn*.55*V),x.rotation.z=-Math.atan2(oe.y,oe.x);let F=Me.yaw,ie=pe+Me.pitch;c.position.set(Math.sin(F)*Math.cos(ie)*X,ne.y+Math.sin(ie)*X,Math.cos(F)*Math.cos(ie)*X),c.lookAt(ne),c.updateMatrixWorld();for(let B of se){let Ce=B.loaded&&B.op>.004;if(B.root.visible=Ce,B.sMesh.visible=Ce,B.ao.visible=Ce,!Ce)continue;let ze=B.y+B.hover*.5;B.root.position.set(B.x,tn+ze,B.z);let Ke=Math.atan2(c.position.x-B.x,c.position.z-B.z);B.yaw.rotation.y=Ke,B.leanNode.rotation.z=B.lean;let Ze=B.mat.uniforms;Ze.uOpacity.value=B.op,Ze.uDim.value=B.dim,Ze.uHover.value=B.hover,Ze.uTint.value.copy(H),Ze.uExpo.value=Dn(1.02,.95,z)*(1+Te*.04),Ze.uRim.value.copy(be),le.set(Math.cos(Ke),-Math.sin(Ke));let it=B.sU,st=1/(1+ze*.35);it.uBase.value.set(B.x+oe.x*ze*V,tn+.03,B.z+oe.y*ze*V),it.uSide.value.copy(le),it.uDir.value.copy(oe),it.uLen.value=B.h*V,it.uW.value=B.w,it.uOpacity.value=B.op*st*(1-B.dim*.35),it.uStrength.value=ye,B.ao.position.set(B.x,tn+.025,B.z+.05),B.ao.scale.set(B.w*1.5*(1+ze*.1),B.w*.75*(1+ze*.1),1),B.ao.material.opacity=.42*B.op*st*st}}let T=[];function y(){T.length=0;for(let R of se){if(!R.loaded)continue;let ee=R.y+R.hover*.5;Le.set(R.x,tn+ee+R.h*.985,R.z).project(c);let V=(Le.x*.5+.5)*L,H=(-Le.y*.5+.5)*q;Le.set(R.x,tn+ee,R.z).project(c),T.push({key:R.key,x:V,y:H,by:(-Le.y*.5+.5)*q,op:R.op,active:R.on&&R.tdim<.5,dim:R.dim,hover:R.hover})}Le.set(0,tn,Vs).project(c);let z=(-Le.y*.5+.5)*q;Le.set(0,tn+15,0).project(c);let $=(-Le.y*.5+.5)*q;return{items:T,lip:z,ceil:$,W:L,H:q}}function Y(){de(),r.render(a,c),n&&n(y())}let ae=0,ve=0,_e=!0,We=!0;function Ne(z){if(ae=0,!_e)return;let $=Math.min(.05,ve?(z-ve)/1e3:.016);ve=z;let R=Se($);(R||We)&&(Y(),We=!1),R?ae=requestAnimationFrame(Ne):ve=0}function we(){We=!0,!ae&&_e&&(ae=requestAnimationFrame(Ne))}let $e=new Rs,Re=new He;function Oe(z,$){let R=i.getBoundingClientRect();Re.set((z-R.left)/R.width*2-1,-(($-R.top)/R.height)*2+1),$e.setFromCamera(Re,c);let ee=$e.intersectObjects(Z,!1);for(let V of ee){let H=V.object.userData.p;if(!(H.op<.5||!H.on)&&!(H.mask&&V.uv&&H.mask.a(V.uv.x,V.uv.y)<60))return H}return null}function Je(z){let $=i.getBoundingClientRect();if(!t&&z.pointerType!=="touch"){let ee=(z.clientX-$.left)/$.width*2-1,V=(z.clientY-$.top)/$.height*2-1;Me.ty=qi(ee,-1,1)*.07,Me.tp=qi(V,-1,1)*.025}let R=z.pointerType==="touch"?null:Oe(z.clientX,z.clientY);R!==te&&(te=R,i.style.cursor=R?"pointer":"",s&&s(R?R.key:null)),we()}function Xe(){Me.ty=0,Me.tp=0,te&&(te=null,s&&s(null)),i.style.cursor="",we()}let ke=i.parentElement;ke.addEventListener("pointermove",Je),ke.addEventListener("pointerleave",Xe);let P=new ResizeObserver(Ue);return P.observe(ke),Ue(),{setSelection(z,$){xe=$==="aften"?1:0,Ee(z,$)},setSpot(z){De=z?1:0,we()},setHover(z){ge=z,we()},pickAt:Oe,setVisible(z){_e=z,z&&we()},snap(){for(let z of se)z.x=z.tx,z.z=z.tz,z.y=0,z.op=z.on?1:0,z.dim=z.tdim;he=xe,Te=De,we()},dispose(){cancelAnimationFrame(ae),P.disconnect(),ke.removeEventListener("pointermove",Je),ke.removeEventListener("pointerleave",Xe),r.dispose()}}}var pu="../src/sections/routine/img/",Gs=[{key:"rens",id:"cleansing-gel",label:"Rens",short:"CBD Rensegel",h:12.9,aspect:.3445,amber:!0,when:["morgen","aften"]},{key:"serum",id:"serum",label:"Serum",short:"Hyaluronic Serum",h:9.5,aspect:.32,amber:!0,when:["morgen","aften"]},{key:"dag",id:"day-cream",label:"Dag",short:"CBD Dagcreme",h:14.5,aspect:.2182,amber:!1,when:["morgen"]},{key:"nat",id:"night-cream",label:"Nat",short:"CBD Natcreme",h:14.5,aspect:.2209,amber:!1,when:["aften"]},{key:"olie",id:"skin-oil",label:"Olie",short:"Vidunder Olien",h:9.5,aspect:.3235,amber:!0,when:["aften"]}],oi=Object.fromEntries(Gs.map(i=>[i.key,i])),Ua=[{id:"komplet-pakken",covers:["rens","dag","nat","olie"]},{id:"all-day-facial",covers:["rens","dag","nat"]}],_v={morgen:"Let og beskyttende \u2013 klar til dagen.",aften:"N\xE6rende og roligt \u2013 huden plejes, mens du sover."},tc=i=>i.length<2?i.join(""):`${i.slice(0,-1).join(", ")} og ${i[i.length-1]}`;function bv(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}function nc(i,e){let{byId:t,fmt:n,campaign:s}=e,r=L=>i.querySelector(L),a=L=>[...i.querySelectorAll(L)],o=r(".routine-stage"),l=r(".routine-canvas"),c=r(".routine-lines"),u=r(".routine-tags"),h={sel:new Set(["rens","serum","dag","nat"]),mode:"morgen",hover:null},d=new URLSearchParams(location.search);d.get("routine")&&(h.sel=new Set(d.get("routine").split(",").filter(L=>oi[L]))),d.get("mode")==="aften"&&(h.mode="aften"),a(".routine-step").forEach(L=>{let q=t[oi[L.dataset.key].id];L.querySelector("[data-now]").textContent=n.kr(q.price),L.querySelector("[data-was]").textContent=n.kr(q.price0),L.setAttribute("aria-label",`${oi[L.dataset.key].label}: ${q.name}, ${n.kr(q.price)}, f\xF8rpris ${n.kr(q.price0)}`)});let f=t["komplet-pakken"];r("[data-kp-price]").textContent=n.kr(f.price),r("[data-kp-was]").textContent=n.kr(f.price0),r("[data-spot-price]").textContent=n.kr(f.price),r("[data-spot-was]").textContent=`F\xF8rpris ${n.kr(f.price0)}`;function v(L){let q=Gs.map(xe=>xe.key).filter(xe=>L.has(xe)),k=xe=>{let Te=xe?q.filter(ge=>!xe.covers.includes(ge)):q,De=[...xe?[{id:xe.id,covers:xe.covers}]:[],...Te.map(ge=>({id:oi[ge].id,covers:[ge]}))],Me=De.reduce((ge,ne)=>ge+t[ne.id].price,0),te=De.reduce((ge,ne)=>ge+t[ne.id].price0,0);return{lines:De,total:Me,was:te,bundle:xe?xe.id:null}},he=k(null);for(let xe of Ua)if(xe.covers.every(Te=>L.has(Te))){let Te=k(xe);Te.total<he.total&&(he=Te)}return he}let g=null,m={},p={};Gs.forEach(L=>{let q=document.createElement("div");q.className="routine-tag",q.dataset.key=L.key,q.innerHTML=`<span class="routine-tag__n"></span><span class="routine-tag__t"><b>${L.label}</b><small>${L.short}</small></span>`,u.appendChild(q),m[L.key]=q;let k=document.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("class","routine-line"),c.appendChild(k),p[L.key]=k;let he=document.createElementNS("http://www.w3.org/2000/svg","circle");he.setAttribute("class","routine-line__dot"),he.setAttribute("r","2.5"),c.appendChild(he),p[L.key+":dot"]=he});function w(){return Gs.filter(L=>h.sel.has(L.key)&&L.when.includes(h.mode)).map(L=>L.key)}function b(L){c.setAttribute("viewBox",`0 0 ${L.W} ${L.H}`);let q=L.W<560,k=L.items.filter(ne=>ne.active&&ne.op>.02).sort((ne,X)=>ne.x-X.x),he=w(),xe=q?40:54,Te=q?30:46,De=Math.min(...k.map(ne=>ne.y),L.ceil+40),Me=k.length>2||q,te=Math.max((q?74:104)+(Me?xe:0),De-Te),ge=q?30:64;L.items.forEach(ne=>{let X=m[ne.key],pe=p[ne.key],Ee=p[ne.key+":dot"];if(!(ne.active&&ne.op>.02)){X.style.opacity="0",pe.style.opacity="0",Ee.style.opacity="0",X.classList.remove("is-on");return}let Ue=k.indexOf(ne),Fe=Me?Ue%2:0,re=te-Fe*xe,I=X.offsetWidth||120,Le=Math.min(Math.max(ne.x,I/2+ge*.25),L.W-I/2-ge*.25);X.style.transform=`translate3d(${(Le-I/2).toFixed(1)}px, ${(re-X.offsetHeight).toFixed(1)}px, 0)`;let le=Math.max(0,Math.min(1,(ne.op-.35)/.65));X.style.opacity=le.toFixed(3),pe.style.opacity=(le*.9).toFixed(3),Ee.style.opacity=le.toFixed(3),X.classList.toggle("is-on",!0),X.classList.toggle("is-hover",ne.hover>.5),X.querySelector(".routine-tag__n").textContent=String(he.indexOf(ne.key)+1);let oe=re+8,Q=ne.y-8;pe.setAttribute("d",`M${Le.toFixed(1)} ${oe.toFixed(1)} L${Le.toFixed(1)} ${(oe+6).toFixed(1)} L${ne.x.toFixed(1)} ${Math.max(oe+6,Q-10).toFixed(1)} L${ne.x.toFixed(1)} ${Q.toFixed(1)}`),Ee.setAttribute("cx",ne.x.toFixed(1)),Ee.setAttribute("cy",(Q+3).toFixed(1))})}function M(L){h.hover=L,a(".routine-step").forEach(q=>q.classList.toggle("is-linked",q.dataset.key===L))}if(bv()&&!/[?&]routine3d=off\b/.test(location.search))try{g=fu({canvas:l,reduced:e.prefersReducedMotion,onFrame:b,onHover:M,items:Gs.map(q=>({...q,src:pu+q.key+".webp"}))});let L=ui(o,q=>g&&g.setVisible(q));g.setVisible(L()||!0),g.setSelection(h.sel,h.mode),g.setSpot(v(h.sel).bundle==="komplet-pakken"),i.classList.add("is-gl")}catch(L){console.warn("[routine] WebGL unavailable, using static stage",L),E()}else E();function E(){i.classList.add("is-static"),g=null,C()}function C(){if(!i.classList.contains("is-static"))return;let L=r(".routine-fallback__row"),q=w();L.innerHTML=q.map((k,he)=>`<figure style="--h:${oi[k].h}"><span class="routine-fallback__n">${he+1}</span><img src="${pu+k}.webp" alt=""></figure>`).join("")}let N=a(".routine-step");N.forEach(L=>{L.addEventListener("click",()=>{let q=L.dataset.key;h.sel.has(q)?h.sel.delete(q):h.sel.add(q),G()}),L.addEventListener("pointerenter",()=>g&&g.setHover(L.dataset.key)),L.addEventListener("pointerleave",()=>g&&g.setHover(null)),L.addEventListener("focus",()=>g&&g.setHover(L.dataset.key)),L.addEventListener("blur",()=>g&&g.setHover(null))});let _=a(".routine-mode__btn");_.forEach(L=>L.addEventListener("click",()=>{h.mode=L.dataset.mode,G()})),r(".routine-mode").addEventListener("keydown",L=>{["ArrowLeft","ArrowRight"].includes(L.key)&&(L.preventDefault(),h.mode=h.mode==="morgen"?"aften":"morgen",G(),i.querySelector(`.routine-mode__btn[data-mode="${h.mode}"]`).focus())}),r("[data-bundle-btn]").addEventListener("click",()=>{Ua[0].covers.forEach(L=>h.sel.add(L)),G()});let x=r("[data-cta]"),U=0;x.addEventListener("click",()=>{let L=v(h.sel);L.lines.length&&(L.lines.forEach(q=>e.store.add(q.id,1)),x.classList.add("is-added"),clearTimeout(U),U=setTimeout(()=>x.classList.remove("is-added"),2400),setTimeout(()=>e.store.openCart(),650))});let K=null,Z=0;function se(L){let q=r("[data-total]");if(K===null||e.prefersReducedMotion){K=L,q.textContent=n.kr(L);return}let k=K,he=performance.now(),xe=520;cancelAnimationFrame(Z);let Te=De=>{let Me=Math.min(1,(De-he)/xe),te=1-Math.pow(1-Me,3);K=k+(L-k)*te,q.textContent=n.kr(K),Me<1?Z=requestAnimationFrame(Te):K=L};Z=requestAnimationFrame(Te)}function G(){let L=h.sel;i.dataset.mode=h.mode,_.forEach(Ue=>Ue.setAttribute("aria-pressed",String(Ue.dataset.mode===h.mode)));let q=w();N.forEach(Ue=>{let Fe=Ue.dataset.key,re=L.has(Fe);Ue.setAttribute("aria-pressed",String(re));let I=q.indexOf(Fe);Ue.querySelector("[data-n]").textContent=re&&I>=0?`${I+1} \xB7 `:"",Ue.classList.toggle("is-resting",re&&I<0)}),r("[data-count]").textContent=L.size?`${L.size} af ${Gs.length} valgt`:"Ingen trin valgt";let k=v(L);se(k.total),r("[data-cta-sum]").textContent=k.total?n.kr(k.total):"",r("[data-was-total]").textContent=k.total?`F\xF8rpris ${n.kr(k.was)}`:"V\xE6lg mindst \xE9t trin";let he=k.was-k.total;r("[data-save]").textContent=he>0?`Du sparer ${n.kr(he)}`:"";let xe=r("[data-bundle-note]");if(k.bundle){let Ue=t[k.bundle];xe.hidden=!1,xe.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 8.4l2.6 2.5L12 5.4"/></svg><span><b>${Ue.name}</b>-prisen er brugt for ${tc(Ua.find(Fe=>Fe.id===k.bundle).covers.map(Fe=>oi[Fe].label))}.</span>`}else xe.hidden=!0;i.classList.toggle("is-empty",!k.total),x.disabled=!k.total,r(".routine-cta__label").textContent=k.total?"L\xE6g rutinen i kurv":"V\xE6lg mindst \xE9t trin",x.setAttribute("aria-label",k.total?`L\xE6g rutinen i kurv \u2013 ${n.kr(k.total)}`:"V\xE6lg mindst \xE9t trin");let Te=s.freeShipping,De=s.giftThreshold,Me=800,te=r("[data-meter]");te.style.setProperty("--fill",Math.min(1,k.total/Me).toFixed(4)),te.style.setProperty("--ship",(Te/Me).toFixed(4)),te.style.setProperty("--gift",(De/Me).toFixed(4)),te.classList.toggle("has-ship",k.total>=Te),te.classList.toggle("has-gift",k.total>=De);let ge=r("[data-meter-status]");k.total>=De?ge.innerHTML="<b>Fri fragt</b> og <b>gratis CBD Lip Balm</b> (v\xE6rdi 79 kr.) f\xF8lger med.":k.total>=Te?ge.innerHTML=`<b>Fri fragt</b> er med. Mangler ${n.kr(De-k.total)} til gratis CBD Lip Balm (v\xE6rdi 79 kr.).`:k.total>0?ge.innerHTML=`Mangler ${n.kr(Te-k.total)} til fri fragt og ${n.kr(De-k.total)} til gratis CBD Lip Balm.`:ge.textContent=`Fri fragt over ${n.kr(Te)} \u2013 og gratis CBD Lip Balm (v\xE6rdi 79 kr.) ved k\xF8b over ${n.kr(De)}`;let ne=r("[data-bundle]"),X=r("[data-bundle-text]"),pe=r("[data-bundle-btn]"),Ee=k.bundle==="komplet-pakken";if(ne.classList.toggle("is-active",Ee),Ee)X.textContent="Rens, Dag, Nat og Olie er samlet i Komplet Pakken \u2013 og prisen er trukket fra.",pe.hidden=!0;else{let Ue=Ua[0].covers.filter(le=>!L.has(le)),Fe=new Set([...L,...Ue]),re=v(Fe).total-k.total,Le=Ue.reduce((le,oe)=>le+t[oi[oe].id].price,0)-re;!L.size||Ue.length===4?(X.textContent=`Rens, Dag, Nat og Olie samlet for ${n.kr(f.price)} \u2013 ${n.kr(t["cleansing-gel"].price+t["day-cream"].price+t["night-cream"].price+t["skin-oil"].price-f.price)} mindre end enkeltvis.`,pe.textContent="V\xE6lg Komplet Pakken"):(X.textContent=`Tilf\xF8j ${tc(Ue.map(le=>oi[le].label))} for kun ${n.kr(re)} mere \u2013 s\xE5 f\xE5r du hele Komplet Pakken${Le>0?` og sparer ${n.kr(Le)} ekstra`:""}.`,pe.textContent=`Tilf\xF8j ${tc(Ue.map(le=>oi[le].label))}`),pe.hidden=!1}r("[data-caption]").textContent=_v[h.mode];let Ae=r("[data-empty]");Ae.hidden=!!L.size&&q.length>0,Ae.textContent=L.size?`Ingen af dine valgte trin bruges om ${h.mode==="morgen"?"morgenen":"aftenen"}.`:"V\xE6lg et trin \u2013 s\xE5 stiller vi det frem.",r(".routine-spot").hidden=!Ee,g&&(g.setSelection(L,h.mode),g.setSpot(Ee)),C()}G()}var mu=i=>{let e=parseInt(i.replace("#",""),16);return new W((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)},ic=[[0,.02,.28],[-1.04,.6,-.18],[.96,.84,-.4],[1.06,-.44,.12],[-.9,-.72,.34],[.14,-1.18,-.46],[-.22,1.2,.02]],Sv=1.9,gu=28,vu=10,wv=`
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
}`,Ev=`
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
}`,Av=`
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
}`,Tv=`
uniform float uAlpha; varying float vA;
void main() {
  vec2 c = gl_PointCoord * 2. - 1.; float d = length(c);
  if (d > 1.) discard;
  float ring = smoothstep(.62, .9, d) * (1. - smoothstep(.9, 1., d));
  float hl = 1. - smoothstep(0., .34, length(c - vec2(-.32, -.34)));
  vec3 col = mix(vec3(.44, .56, .52), vec3(1.), hl);
  float a = (ring * .55 + hl * .7 + .06) * vA * uAlpha;
  gl_FragColor = vec4(col, a);
}`;function xu({canvas:i,items:e,reduced:t=!1,mobile:n=!1}){let s=new Hn({canvas:i,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"});s.setClearColor(0,0),s.setPixelRatio(bn());let r=new cn,a=new Ct(gu,1,.1,60);a.position.set(0,0,vu);let o=Math.tan(In.degToRad(gu/2)),l=new Hi(1,n?56:72,n?40:54),c=e.map((le,oe)=>{let Q=new gt({vertexShader:wv,fragmentShader:Ev,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uSeed:{value:oe*1.71+.4},uWob:{value:t?0:1},uVel:{value:new W},uTint:{value:mu(le.color)},uDeep:{value:mu(le.deep)},uDim:{value:0},uFocus:{value:0},uAlpha:{value:0},uTimeF:{value:0}}}),Se=new je(l,Q);Se.renderOrder=1,r.add(Se);let de=ic[oe%ic.length],T=new W(de[0],de[1],de[2]);return{mesh:Se,mat:Q,r:le.r,home:T,p:T.clone().add(new W(0,-3.4-oe*.18,0)),v:new W,vs:new W,sc:1,dim:0,foc:0,alpha:0,seed:oe*1.37+.5,m:Math.min(2.2,Math.max(.6,Math.pow(le.r/.5,3)))}}),u=n?22:34,h=new Rt,d=new Float32Array(u*3),f=new Float32Array(u),v=new Float32Array(u);for(let le=0;le<u;le++){let oe=Math.sin(le*12.9898)*43758.5453,Q=Math.sin(le*78.233)*12345.678,Se=Math.sin(le*39.425)*9876.54;d[le*3]=oe-Math.floor(oe),d[le*3+1]=Q-Math.floor(Q),d[le*3+2]=Se-Math.floor(Se),f[le]=.05+Math.pow(oe*7-Math.floor(oe*7),2.2)*.16,v[le]=Se*3-Math.floor(Se*3)}h.setAttribute("position",new Tt(d,3)),h.setAttribute("aSize",new Tt(f,1)),h.setAttribute("aSeed",new Tt(v,1));let g=new gt({vertexShader:Av,fragmentShader:Tv,transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uBox:{value:new W(8,6,4)},uPx:{value:600},uAlpha:{value:0},uMotion:{value:t?0:1}}}),m=new Ss(h,g);m.position.z=-1.2,m.renderOrder=0,r.add(m);let p=1,w=1,b=new W,M=1,O=.3,E=.05,C=-1,N=.35,_=0,x=-1,U={on:!1,x:0,y:0,lx:0,ly:0,vx:0,vy:0,has:!1},K=new W,Z=new W,se=new vn(-.16,0,0),G=c.map(()=>new W);function L(le,oe,Q){p=Math.max(1,le),w=Math.max(1,oe),s.setSize(p,w,!1),a.aspect=p/w,a.updateProjectionMatrix();let Se=2*vu*o,de=Se*a.aspect,T=w/Se;b.set((Q.cx/p-.5)*de,-(Q.cy/w-.5)*Se,0),M=Q.fit/(Sv*T),O=Q.focusX??.3,E=Q.focusY??.05,g.uniforms.uBox.value.set(de*1.15,Se*1.15,3),g.uniforms.uPx.value=w/(2*o)*bn()*.5}function q(le){C=le}function k(){x<0&&(x=_),t&&c.forEach(le=>{le.p.copy(le.home),le.alpha=1})}let he=1/120,xe=0;function Te(le){let oe=C>=0?1:0;N+=le*(t?0:oe?.045:.07),se.y=N;for(let Q=0;Q<c.length;Q++){let Se=c[Q],de=G[Q];Q===C?de.set(O,E,1.55):(de.copy(Se.home).applyEuler(se),oe&&(de.multiplyScalar(1.12),de.z-=.75))}for(let Q=0;Q<c.length;Q++){let Se=c[Q],de=K.copy(G[Q]).sub(Se.p).multiplyScalar(Q===C?2.6:2);t||(de.y+=.1*Math.sin(_*.45+Se.seed*2.1),de.x+=.07*Math.sin(_*.31+Se.seed*3.3),de.z+=.06*Math.cos(_*.27+Se.seed));for(let T=0;T<c.length;T++){if(T===Q)continue;let y=c[T];Z.copy(Se.p).sub(y.p);let Y=Z.length()||1e-4,ae=Se.r*Se.sc+y.r*y.sc+.1;Y<ae&&de.addScaledVector(Z.divideScalar(Y),(ae-Y)*7.5)}if(U.on&&!t){let T=Se.p.x-U.lx,y=Se.p.y-U.ly,Y=T*T+y*y,ae=Math.exp(-Y/.9)*(Q===C?.35:1),ve=Math.min(1,Math.hypot(U.vx,U.vy));de.x+=(U.vx*1.1+T*.5*ve)*ae,de.y+=(U.vy*1.1+y*.5*ve)*ae}Se.v.addScaledVector(de,le/Se.m),Se.v.multiplyScalar(Math.exp(-3.1*le)),Se.v.length()>3&&Se.v.setLength(3),Se.p.addScaledVector(Se.v,le)}}let De=!1,Me=0,te=0,ge=null;function ne(le){Me=De?requestAnimationFrame(ne):0;let oe=Math.min(1/24,te?(le-te)/1e3:1/60);if(te=le,_+=oe,U.vx*=Math.exp(-6*oe),U.vy*=Math.exp(-6*oe),x>=0){xe+=oe;let Se=0;for(;xe>=he&&Se<8;)Te(he),xe-=he,Se++;Se===8&&(xe=0)}let Q=1-Math.exp(-oe*3.2);for(let Se=0;Se<c.length;Se++){let de=c[Se],T=Se===C,y=C>=0&&!T?1:0;de.foc+=((T?1:0)-de.foc)*Q,de.dim+=(y-de.dim)*Q,de.sc+=((T?1.12:1)-de.sc)*Q,x>=0&&(de.alpha=Math.min(1,Math.max(0,(_-x-Se*.09)/1.6)));let Y=de.alpha*de.alpha*(3-2*de.alpha);de.vs.lerp(de.v,Q),de.mesh.position.copy(b).addScaledVector(de.p,M),de.mesh.scale.setScalar(de.r*de.sc*M);let ae=de.mat.uniforms;ae.uTime.value=_,ae.uDim.value=de.dim*.62,ae.uFocus.value=de.foc,ae.uAlpha.value=Y,ae.uVel.value.copy(de.vs).multiplyScalar(1/Math.max(.2,de.r))}g.uniforms.uTime.value=_,g.uniforms.uAlpha.value=x>=0?Math.min(1,(_-x)/2.4):0,s.render(r,a),ge&&ge(oe)}function X(le){let oe=c[le];if(!oe)return null;K.copy(oe.mesh.position).project(a);let Q=a.position.distanceTo(oe.mesh.position),Se=oe.r*oe.sc*M/(Q*o)*w/2;return{x:(K.x+1)/2*p,y:(1-K.y)/2*w,r:Se,a:oe.alpha}}let pe=new zi;function Ee(le,oe){return K.set(le/p*2-1,-(oe/w)*2+1,.5).unproject(a),pe.origin.copy(a.position),pe.direction.copy(K).sub(a.position).normalize(),pe}function Ae(le,oe){Ee(le,oe);let Q=-1,Se=1/0,de=new zn;for(let T=0;T<c.length;T++){let y=c[T];if(y.alpha<.5)continue;de.set(y.mesh.position,y.r*y.sc*M*1.02);let Y=pe.intersectSphere(de,Z);if(Y){let ae=Y.distanceTo(pe.origin);ae<Se&&(Se=ae,Q=T)}}return Q}function Ue(le,oe){if(le==null){U.on=!1,U.has=!1;return}Ee(le,oe);let Q=(b.z-pe.origin.z)/pe.direction.z,Se=pe.origin.x+pe.direction.x*Q,de=pe.origin.y+pe.direction.y*Q,T=(Se-b.x)/M,y=(de-b.y)/M;U.has&&(U.vx+=(T-U.lx)*4,U.vy+=(y-U.ly)*4,U.vx=In.clamp(U.vx,-4,4),U.vy=In.clamp(U.vy,-4,4)),U.lx=T,U.ly=y,U.on=!0,U.has=!0}function Fe(){De||(De=!0,te=0,Me=requestAnimationFrame(ne))}function re(){De=!1,Me&&cancelAnimationFrame(Me),Me=0}function I(){ne(performance.now())}function Le(){re(),l.dispose(),c.forEach(le=>le.mat.dispose()),h.dispose(),g.dispose(),s.dispose()}return{setSize:L,setFocus:q,enter:k,start:Fe,stop:re,project:X,hitTest:Ae,setPointer:Ue,renderOnce:I,dispose:Le,set onFrame(le){ge=le},get count(){return c.length},homes:ic}}var yu=i=>String(i).padStart(2,"0");function sc(i,e){let t=[...i.querySelectorAll(".ing-item")];if(!t.length)return;let n=i.querySelector(".ing-viz"),s=i.querySelector(".ing-stage"),r=i.querySelector(".ing-canvas"),a=i.querySelector(".ing-fallback"),o=i.querySelector(".ing-card"),l=i.querySelector(".ing-line"),c=i.querySelector(".ing-line__ring"),u=i.querySelector(".ing-line__end"),h=X=>o.querySelector(`[data-card="${X}"]`),d=!!e.prefersReducedMotion,f=matchMedia("(hover: hover) and (pointer: fine)").matches,v=t.map((X,pe)=>{let Ee=X.nextElementSibling,Ae=Ue=>(Ee.querySelector(`[data-k="${Ue}"]`)?.textContent||"").trim();return{i:pe,name:X.querySelector(".ing-item__name").textContent.trim(),color:Ee.dataset.color,deep:Ee.dataset.deep,r:+Ee.dataset.r||.5,inci:Ae("inci"),desc:Ae("desc"),in:Ae("in"),swatch:X.querySelector(".ing-item__dot").style.getPropertyValue("--c")}}),g=v.length,m=()=>e.isMobile(),p=null,w=null,b=null,M=-1e9,O=performance.now(),E=!1,C=!1,N={w:0,h:0},_={x:0,y:0},x=0,U=0,K=m(),Z=0,se=0;function G(X){let pe=v[X];h("count").textContent=`Ingrediens ${yu(X+1)} / ${yu(g)}`,h("name").textContent=pe.name,h("inci").textContent=pe.inci,h("desc").textContent=pe.desc,h("in").textContent=pe.in,h("in-wrap").hidden=!pe.in,o.style.setProperty("--sw",pe.swatch)}function L(X,{user:pe=!1}={}){if(pe&&(M=performance.now()),X!==Z){if(Z=X,O=performance.now(),t.forEach((Ee,Ae)=>Ee.setAttribute("aria-pressed",String(Ae===X))),w&&w.setFocus(X),clearTimeout(se),d){G(X);return}o.classList.add("is-swapping"),se=setTimeout(()=>{G(X),requestAnimationFrame(()=>o.classList.remove("is-swapping"))},170)}}G(0);let q=0;t.forEach((X,pe)=>{X.addEventListener("click",()=>{i.classList.add("has-touched"),L(pe,{user:!0})}),X.addEventListener("focus",()=>L(pe,{user:!0})),f&&(X.addEventListener("pointerenter",()=>{clearTimeout(q),q=setTimeout(()=>L(pe,{user:!0}),60)}),X.addEventListener("pointerleave",()=>clearTimeout(q))),X.addEventListener("keydown",Ee=>{let Ae=Ee.key,Ue=-1;Ae==="ArrowDown"||Ae==="ArrowRight"?Ue=(pe+1)%g:Ae==="ArrowUp"||Ae==="ArrowLeft"?Ue=(pe-1+g)%g:Ae==="Home"?Ue=0:Ae==="End"&&(Ue=g-1),Ue>=0&&(Ee.preventDefault(),t[Ue].focus())})});try{if(!window.WebGLRenderingContext)throw new Error("no webgl");w=xu({canvas:r,items:v,reduced:d,mobile:m()}),i.classList.add("is-live"),r.addEventListener("webglcontextlost",X=>{X.preventDefault(),k()},{once:!0})}catch{w=null}w||k();function k(){try{w&&w!==p&&w.dispose&&w.dispose()}catch{}i.classList.remove("is-live"),i.classList.add("is-static"),w=p=he(),w.onFrame=De,xe(),w.setFocus(Z),w.enter(),w.start()}function he(){a.innerHTML="";let X=[[0,.02],[-1.04,.6],[.96,.84],[1.06,-.44],[-.9,-.72],[.14,-1.18],[-.22,1.2]],pe=v.map((oe,Q)=>{let Se=document.createElement("span");return Se.className="ing-drop",Se.style.setProperty("--c",oe.color),Se.style.setProperty("--d",oe.deep),Se.addEventListener("pointerenter",()=>f&&L(Q,{user:!0})),Se.addEventListener("click",()=>L(Q,{user:!0})),a.appendChild(Se),Se}),Ee={cx:0,cy:0,fit:100},Ae=0,Ue=null,Fe=0,re=!1,I=oe=>{let Q=Ee.fit/1.9,Se=v[oe],de=oe===Ae?[Ee.focusX??.3,Ee.focusY??.05]:X[oe].map(y=>y*(Ae>=0?1.08:1)),T=Se.r*Q*(oe===Ae?1.12:1);return{x:Ee.cx+de[0]*Q,y:Ee.cy-de[1]*Q,r:T,a:1}},Le=()=>pe.forEach((oe,Q)=>{let Se=I(Q);Object.assign(oe.style,{left:`${Se.x-Se.r}px`,top:`${Se.y-Se.r}px`,width:`${Se.r*2}px`,height:`${Se.r*2}px`,zIndex:Q===Ae?2:1}),oe.classList.toggle("is-dim",Ae>=0&&Q!==Ae)}),le=()=>{re&&(Ue&&Ue(1/60),Fe=requestAnimationFrame(le))};return{setSize(oe,Q,Se){Ee=Se,Le()},setFocus(oe){Ae=oe,Le()},enter(){},start(){re||(re=!0,le())},stop(){re=!1,cancelAnimationFrame(Fe)},project:oe=>I(oe),hitTest:()=>-1,setPointer(){},dispose(){},set onFrame(oe){Ue=oe}}}function xe(){K=m();let X=n.getBoundingClientRect(),pe=s.getBoundingClientRect();N={w:X.width,h:X.height},_={x:pe.left-X.left,y:pe.top-X.top},x=pe.width,U=pe.height;let Ee;if(K)Ee={cx:x/2,cy:U*.5,fit:Math.min(x*.5,U*.5)*.86,focusX:0,focusY:.05};else{let Ae=o.offsetWidth||300,Ue=x-Ae-16,Fe=Math.min(Ue*.5,U*.4);Ee={cx:Ue*.5,cy:U*.5,fit:Fe,focusX:.12,focusY:.02}}w&&w.setSize(x,U,Ee),b=null}new ResizeObserver(()=>xe()).observe(n);function De(X){let pe=w&&w.project(Z);if(!pe)return;let Ee=pe.x+_.x,Ae=pe.y+_.y,Ue,Fe;if(K){let y=o.offsetTop,Y=o.offsetLeft,ae=o.offsetWidth;Ue=Math.max(Y+36,Math.min(Y+ae-36,Ee)),Fe=y}else{let y=o.offsetHeight,Y=o.offsetWidth,ae=Math.max(4,Math.min(N.h-y-4,Ae-y*.46));b=b==null?ae:b+(ae-b)*(1-Math.exp(-X*3.4)),o.style.transform=`translate3d(0, ${b.toFixed(2)}px, 0)`,Ue=N.w-Y,Fe=Math.max(b+34,Math.min(b+y-34,Ae))}let re=Ue-Ee,I=Fe-Ae,Le=Math.hypot(re,I)||1;re/=Le,I/=Le;let le=Ee+re*(pe.r+2),oe=Ae+I*(pe.r+2),Q=Le>pe.r+26,Se=Ue-re*5,de=Fe-I*5;l.setAttribute("d",Q?`M${le.toFixed(1)} ${oe.toFixed(1)}L${Se.toFixed(1)} ${de.toFixed(1)}`:"M0 0"),c.setAttribute("cx",le.toFixed(1)),c.setAttribute("cy",oe.toFixed(1)),u.setAttribute("cx",Se.toFixed(1)),u.setAttribute("cy",de.toFixed(1)),c.style.opacity=u.style.opacity=Q?"":"0";let T=performance.now();!d&&C&&E&&T-M>12e3&&T-O>5600&&L((Z+1)%g)}w.onFrame=De;let Me=X=>{let pe=s.getBoundingClientRect();return[X.clientX-pe.left,X.clientY-pe.top]},te=-1,ge=0;s.addEventListener("pointermove",X=>{let[pe,Ee]=Me(X);if(w.setPointer(pe,Ee),X.pointerType!=="mouse")return;M=performance.now();let Ae=w.hitTest(pe,Ee);s.classList.toggle("is-over",Ae>=0),Ae!==te&&(te=Ae,clearTimeout(ge),Ae>=0&&Ae!==Z&&(ge=setTimeout(()=>L(Ae,{user:!0}),90)))}),s.addEventListener("pointerleave",()=>{w.setPointer(null),s.classList.remove("is-over"),te=-1,clearTimeout(ge)}),s.addEventListener("pointerdown",X=>{let[pe,Ee]=Me(X);w.setPointer(pe,Ee);let Ae=w.hitTest(pe,Ee);Ae>=0&&(i.classList.add("has-touched"),L(Ae,{user:!0}))}),s.addEventListener("pointerup",X=>{X.pointerType!=="mouse"&&w.setPointer(null)}),xe(),w.setFocus(Z);let ne=!1;ui(i,X=>{E=X,X?(ne||(ne=!0,xe(),w.enter(),setTimeout(()=>{C=!0,i.classList.add("is-ready")},d?0:1100)),w.start()):w.stop()})}var li=(i,e,t)=>Math.max(e,Math.min(t,i)),Fa=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Rv={"skin-oil":{src:"products/skin-oil.webp",box:[1200,1200,473,242,722,1007],h:.9},"night-cream":{src:"products/night-cream.webp",box:[1200,1200,345,96,913,1154],h:.86},"body-lotion":{src:"products/body-lotion.webp",box:[800,1200,186,163,601,1143],h:.94},"komplet-pakken":{src:"products/startpakke-plus.webp",box:[1200,1200,172,77,1149,1121],h:.92},shampoo:{src:"products/shampoo.webp",box:[1200,1200,455,64,764,1149],h:1},serum:{src:"products/hyaluron-serum.webp",box:[800,1200,108,225,742,1111],h:.9}},Mu=[{x:172,hr:56,sw:132,sun:[254,104],sr:120},{x:150,hr:52,sw:124,sun:[72,118],sr:112},{x:178,hr:58,sw:150,sun:[232,300],sr:130},{x:160,hr:54,sw:128,sun:[86,86],sr:118},{x:182,hr:57,sw:144,sun:[262,160],sr:110},{x:150,hr:50,sw:120,sun:[210,78],sr:124}];function Cv(i){let e=Mu[i%Mu.length],t=`stp${i}`,n=200,s=n+e.hr*1.02+22;return`<svg viewBox="0 0 320 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
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
</svg>`}var Iv={bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.6 8.25h12.8l-1.05 10.6a2 2 0 0 1-1.99 1.8H8.64a2 2 0 0 1-1.99-1.8z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/></svg>',check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5.5 12.6 4.1 4.1 8.9-9.4"/></svg>'};function rc(i,e){let{fmt:t,store:n,byId:s}=e,r=re=>t.kr(re).replace(/ (?=kr\.)/,"\xA0"),a=(re,I=i)=>I.querySelector(re),o=(re,I=i)=>[...I.querySelectorAll(re)],l=e.prefersReducedMotion,c=matchMedia("(hover: hover) and (pointer: fine)").matches,u=a("[data-stories-carousel]"),h=a("[data-stories-viewport]"),d=a("[data-stories-track]"),f=o(".stories-card",d),v=a("[data-stories-thumb]"),g=a("[data-stories-now]"),m=a("[data-stories-prev]"),p=a("[data-stories-next]"),w=a("[data-stories-live]"),b=a("[data-stories-cursor]"),M=f.length;if(!M)return;f.forEach((re,I)=>{re.style.setProperty("--i",I);let Le=a(".stories-portrait",re);Le&&Le.insertAdjacentHTML("afterbegin",Cv(I));let le=a(".stories-product",re),oe=le&&s[le.dataset.product];if(!oe){le&&le.remove();return}let Q=(a(".stories-name",re)||{}).textContent||"",Se=oe.name+(oe.strength?` ${oe.strength}`:""),de=Rv[oe.id],T="";if(de){let[ae,,ve,_e,We,Ne]=de.box,we=.7*de.h/(Ne-_e);we=Math.min(we,.76/(We-ve));let $e=.5-(ve+We)/2*we,Re=.88-Ne*we;T=`<img src="${e.asset(de.src)}" alt="" loading="lazy" decoding="async" draggable="false" style="width:${(ae*we*100).toFixed(2)}%;left:${($e*100).toFixed(2)}%;top:${(Re*100).toFixed(2)}%">`}let y=oe.pct?`<span class="nc-price"><span class="nc-price__now">${r(oe.price)}</span><span class="nc-price__was">F\xF8rpris <s>${r(oe.price0)}</s></span></span>`:`<span class="nc-price"><span class="nc-price__now">${r(oe.price)}</span></span>`;le.innerHTML=`
      <span class="stories-prod__shot" aria-hidden="true">${T}</span>
      <span class="stories-prod__meta">
        <span class="stories-prod__eyebrow">${Fa(Q)} bruger</span>
        <a class="stories-prod__name" href="#deals">${Fa(Se)}</a>
        ${y}
      </span>
      <button class="nc-btn nc-btn--light stories-add" type="button" data-add="${Fa(oe.id)}" aria-label="L\xE6g ${Fa(Se)} i kurv">
        <span class="stories-add__idle">L\xE6g i kurv</span><span class="stories-add__done" aria-hidden="true">${Iv.check}Lagt i kurv</span>
      </button>`;let Y=a("img",le);Y&&Y.addEventListener("error",()=>Y.remove(),{once:!0})}),i.addEventListener("click",re=>{let I=re.target.closest("[data-add]");!I||!i.contains(I)||(n.add(I.dataset.add,1),I.classList.remove("is-added"),I.offsetWidth,I.classList.add("is-added"),clearTimeout(I._t),I._t=setTimeout(()=>I.classList.remove("is-added"),2e3),w.textContent=`${s[I.dataset.add]?.name||"Produktet"} er lagt i kurven.`)});let O=[],E=0,C=1,N=0,_=0,x=0,U="idle",K=0,Z=0,se=0,G=l?40:8.5,L=.32;function q(){let re=f[0].offsetLeft;if(O=f.map(I=>I.offsetLeft-re),M>1){let I=parseFloat(getComputedStyle(h).paddingLeft)||0,Le=h.clientWidth-2*I-f[M-1].offsetWidth;O[M-1]=Math.max(O[M-2]+1,O[M-1]-Math.max(0,Le))}E=O[M-1],C=M>1?O[1]-O[0]:1}let k=re=>{let I=0;for(let Le=1;Le<M;Le++)Math.abs(O[Le]-re)<Math.abs(O[I]-re)&&(I=Le);return I},he=re=>re<0?re*L:re>E?E+(re-E)*L:re;function xe(){d.style.transform=`translate3d(${(-N).toFixed(2)}px,0,0)`;for(let Le=0;Le<M;Le++){let le=li((N-O[Le])/C,-1.6,1.6);f[Le].style.setProperty("--p",le.toFixed(4)),f[Le].style.setProperty("--d",Math.abs(le).toFixed(4))}let re=E?li(N/E,-.06,1.06):0;v.style.transform=`translate3d(${(re*(M-1)*100).toFixed(3)}%,0,0)`;let I=k(N);I!==se&&Te(I)}function Te(re,I){se=re,g.textContent=String(re+1).padStart(2,"0"),l||(g.classList.remove("is-tick"),g.offsetWidth,g.classList.add("is-tick")),m.disabled=re===0,p.disabled=re===M-1,f.forEach((Le,le)=>Le.classList.toggle("is-active",le===re)),I&&(w.textContent=`Kundecase ${re+1} af ${M}: ${(a(".stories-name",f[re])||{}).textContent||""}`)}function De(re){K=0;let I=Math.min(.05,Z?(re-Z)/1e3:1/60);if(Z=re,U==="spring"){let le=I/4;for(let oe=0;oe<4;oe++){let Q=-G*G*(N-x)-2*G*_;_+=Q*le,N+=_*le}Math.abs(N-x)<.25&&Math.abs(_)<4&&(N=x,_=0,U="idle")}xe(),U==="spring"?K=requestAnimationFrame(De):Z=0}let Me=()=>{K||(Z=0,K=requestAnimationFrame(De))};function te(re,I=_){x=O[li(re,0,M-1)];let Le=x-N;Math.sign(I)===Math.sign(Le)?I=Math.sign(I)*Math.min(Math.abs(I),G*Math.abs(Le)*.92):I*=.35,_=I,U="spring",Me()}let ge=(re,I)=>{te(re),I&&Te(li(re,0,M-1),!0)};m.addEventListener("click",()=>ge(Math.max(0,ne()-1),!0)),p.addEventListener("click",()=>ge(Math.min(M-1,ne()+1),!0));let ne=()=>k(U==="spring"?x:N);u.addEventListener("keydown",re=>{re.target.closest("input, textarea")||(re.key==="ArrowRight"?(re.preventDefault(),ge(Math.min(M-1,ne()+1),!0)):re.key==="ArrowLeft"?(re.preventDefault(),ge(Math.max(0,ne()-1),!0)):re.key==="Home"?(re.preventDefault(),ge(0,!0)):re.key==="End"&&(re.preventDefault(),ge(M-1,!0)))}),d.addEventListener("focusin",re=>{let I=f.indexOf(re.target.closest(".stories-card"));I>=0&&I!==ne()&&ge(I,!0)}),h.addEventListener("scroll",()=>{h.scrollLeft=0});let X=null,pe=!1;h.addEventListener("pointerdown",re=>{re.button!==0||re.target.closest("button")||(X={id:re.pointerId,sx:re.clientX,sy:re.clientY,x0:N,raw:N,lock:0,samples:[[re.timeStamp,N]]},pe=!1,U==="spring"&&(X.x0=N,U="held",_=0),re.pointerType==="mouse"&&re.preventDefault(),Fe(!0))}),window.addEventListener("pointermove",re=>{if(!X||re.pointerId!==X.id)return;let I=re.clientX-X.sx,Le=re.clientY-X.sy;if(!X.lock)if(Math.abs(I)>6&&Math.abs(I)>Math.abs(Le)*1.1){X.lock=1,pe=!0,h.classList.add("is-dragging");try{h.setPointerCapture(re.pointerId)}catch{}}else if(Math.abs(Le)>8){Ee(re,!0);return}else return;X.raw=X.x0-I,N=he(X.raw);let le=X.samples;for(le.push([re.timeStamp,N]);le.length>2&&re.timeStamp-le[0][0]>90;)le.shift();K||(K=requestAnimationFrame(oe=>{K=0,xe()}))});function Ee(re,I){if(!X)return;let Le=X;if(X=null,h.classList.remove("is-dragging"),Fe(!1),!Le.lock){U==="held"&&te(k(N),0);return}let le=Le.samples,oe=le[0],Q=le[le.length-1],Se=(Q[0]-oe[0])/1e3,de=Se>.008?(Q[1]-oe[1])/Se:0;re.timeStamp-Q[0]>80&&(de=0),de=li(de,-5200,5200);let T=N+de*.24,y=k(li(T,0,E)),Y=k(Le.x0),ae=N-Le.x0;!I&&y===Y&&(Math.abs(de)>320&&Math.abs(ae)>12?y=li(Y+Math.sign(de),0,M-1):Math.abs(ae)>C*.18&&Math.sign(de)!==-Math.sign(ae)&&(y=li(Y+Math.sign(ae),0,M-1))),te(y,de),y!==Y&&Te(y,!0)}window.addEventListener("pointerup",re=>Ee(re)),window.addEventListener("pointercancel",re=>Ee(re,!0)),h.addEventListener("click",re=>{pe&&(re.preventDefault(),re.stopPropagation(),pe=!1)},!0),h.addEventListener("dragstart",re=>re.preventDefault());let Ae=0;h.addEventListener("wheel",re=>{if(Math.abs(re.deltaX)<=Math.abs(re.deltaY))return;re.preventDefault(),U==="spring"&&(U="held");let I=re.deltaMode===1?re.deltaX*16:re.deltaX,Le=N+I*(N<0||N>E?L:1);N=li(Le,-90,E+90),K||(K=requestAnimationFrame(le=>{K=0,xe()})),clearTimeout(Ae),Ae=setTimeout(()=>{U="idle",te(k(N),0)},110)},{passive:!1}),new ResizeObserver(()=>{q(),N=x=O[se]||0,_=0,U="idle",xe()}).observe(h),q(),xe(),Te(0);let Fe=()=>{};if(c&&b){i.classList.add("has-cursor");let re=-200,I=-200,Le=-200,le=-200,oe=!1,Q=!1,Se=.4,de=0,T=a("span",b),y=()=>{de=0;let ve=l?1:.2;re+=(Le-re)*ve,I+=(le-I)*ve;let _e=oe?Q?.78:1:.4;Se+=(_e-Se)*(l?1:.16),b.style.transform=`translate3d(${re.toFixed(1)}px,${I.toFixed(1)}px,0) scale(${Se.toFixed(3)})`,(Math.abs(Le-re)>.2||Math.abs(le-I)>.2||Math.abs(_e-Se)>.002)&&(de=requestAnimationFrame(y))},Y=()=>{de||(de=requestAnimationFrame(y))},ae=ve=>{oe!==ve&&(oe=ve,b.classList.toggle("is-on",ve),Y())};h.addEventListener("pointermove",ve=>{ve.pointerType==="mouse"&&(!oe&&!X&&(re=ve.clientX,I=ve.clientY),Le=ve.clientX,le=ve.clientY,ae(!!X||!ve.target.closest("a, button")),Y())}),h.addEventListener("pointerleave",()=>{X||ae(!1)}),window.addEventListener("scroll",()=>{oe&&!X&&ae(!1)},{passive:!0}),Fe=ve=>{Q=ve,T&&(T.style.opacity=ve?".75":""),Y()}}if(!l&&"IntersectionObserver"in window){u.classList.add("is-pre");let re=new IntersectionObserver(I=>{I.some(Le=>Le.isIntersecting)&&(re.disconnect(),requestAnimationFrame(()=>{u.classList.add("is-enter"),requestAnimationFrame(()=>u.classList.remove("is-pre")),setTimeout(()=>u.classList.remove("is-enter"),2200)}))},{threshold:.18});re.observe(u)}}function ac(i,e){let t=i.querySelector(".trust-mark__strokes"),n=i.querySelector(".trust-stage");if(!t||!n)return;let s=new URLSearchParams(location.search);if(e.prefersReducedMotion||s.get("trust-static")==="1"||!("IntersectionObserver"in window))return;let a=t.cloneNode(!0);a.setAttribute("class","trust-mark__comet"),t.after(a),i.classList.add("is-armed"),i.offsetWidth;let o=new IntersectionObserver(([l])=>{l.isIntersecting&&(o.disconnect(),requestAnimationFrame(()=>requestAnimationFrame(()=>i.classList.add("is-drawn"))),setTimeout(()=>a.remove(),6200))},{threshold:.3});o.observe(n),Lv(i,n,e)}function Lv(i,e,t){if(!matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=50,s=46,r=50,a=46,o=0,l=!1,c=()=>{r+=(n-r)*.045,a+=(s-a)*.045,e.style.setProperty("--mx",r.toFixed(2)+"%"),e.style.setProperty("--my",a.toFixed(2)+"%"),o=l&&(Math.abs(n-r)>.05||Math.abs(s-a)>.05)?requestAnimationFrame(c):0},u=()=>{!o&&l&&(o=requestAnimationFrame(c))};new IntersectionObserver(([h])=>{l=h.isIntersecting,u()},{rootMargin:"80px"}).observe(e),i.addEventListener("pointermove",h=>{let d=e.getBoundingClientRect();n=50+Math.max(-1,Math.min(1,(h.clientX-(d.left+d.width/2))/(d.width*.9)))*16,s=46+Math.max(-1,Math.min(1,(h.clientY-(d.top+d.height/2))/(d.height*.9)))*16,u()},{passive:!0}),i.addEventListener("pointerleave",()=>{n=50,s=46,u()})}var _u="cubic-bezier(.16, .84, .24, 1)",bu="cubic-bezier(.4, 0, .2, 1)",Pv=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,Dv='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.4v.1"/></svg>',Uv='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';function oc(i,e){let t=e.prefersReducedMotion,n=new URLSearchParams(location.search),s=[...i.querySelectorAll("[data-faq-item]")].map(G=>({el:G,btn:G.querySelector(".faq-btn"),panel:G.querySelector(".faq-a"),anim:null})),r=(G,L)=>{L?G.setAttribute("hidden","until-found"):G.removeAttribute("hidden")};function a(G,L,q,k,he,xe){if(G.anim&&G.anim.cancel(),t||L===q){xe&&xe();return}let Te=G.panel.animate([{height:`${L}px`},{height:`${q}px`}],{duration:k,easing:he});G.anim=Te,Te.onfinish=()=>{G.anim=null,xe&&xe()}}function o(G,L=!0){if(G.el.classList.contains("is-open"))return;let q=G.anim?G.panel.getBoundingClientRect().height:0;if(r(G.panel,!1),G.btn.setAttribute("aria-expanded","true"),G.el.classList.add("is-open"),!L)return;let k=G.panel.scrollHeight,he=Math.round(Math.min(760,420+k*1.1));a(G,q,k,he,_u)}function l(G,L=!0){if(!G.el.classList.contains("is-open"))return;let q=G.panel.getBoundingClientRect().height;if(G.btn.setAttribute("aria-expanded","false"),G.el.classList.remove("is-open"),!L){r(G.panel,!0);return}let k=Math.round(Math.min(560,320+q*.7));a(G,q,0,k,bu,()=>r(G.panel,!0))}let c=G=>{if(G.el.classList.contains("is-open")){l(G);return}s.forEach(L=>L!==G&&l(L)),o(G)};s.forEach((G,L)=>{G.btn.addEventListener("click",()=>c(G)),G.panel.addEventListener("beforematch",()=>{s.forEach(q=>q!==G&&l(q,!1)),o(G,!1)}),G.btn.addEventListener("keydown",q=>{let k=q.key,he=null;k==="ArrowDown"?he=(L+1)%s.length:k==="ArrowUp"?he=(L-1+s.length)%s.length:k==="Home"?he=0:k==="End"&&(he=s.length-1),he!==null&&(q.preventDefault(),s[he].btn.focus())})});let u=/^#faq-q(\d+)$/.exec(location.hash),h=n.has("faq")?+n.get("faq"):u?+u[1]:1;h>=1&&h<=s.length&&o(s[h-1],!1);let d=i.querySelector("[data-faq-countdown]"),f=i.querySelector("[data-faq-left]"),v=G=>String(G).padStart(2,"0");function g(){let G=e.clock.end-e.clock.now();if(G<=0){d.hidden=!0;return}d.hidden=!1;let L=Math.floor(G/1e3),q=Math.floor(L/86400),k=Math.floor(L%86400/3600),he=Math.floor(L%3600/60),xe=L%60;f.textContent=q>0?`${q} ${q===1?"dag":"dage"}, ${k} t. ${v(he)} min.`:`${k} t. ${v(he)} min. ${v(xe)} sek.`}d&&f&&(g(),setInterval(g,1e3));let m=i.querySelector("[data-faq-gift]");if(m){let G=m.querySelector("[data-faq-gift-label]"),L=m.querySelector("[data-faq-gift-sum]"),q=m.querySelector("[data-faq-gift-fill]"),k=e.campaign.giftThreshold,he=()=>{let xe=e.store.subtotal(),Te=xe>k;m.classList.toggle("is-done",Te),q.style.setProperty("--p",Math.min(1,xe/k).toFixed(4)),L.textContent=`${e.fmt.kr(xe)} af ${e.fmt.kr(k)}`,Te?G.innerHTML=`${Uv}Din Lip Balm f\xF8lger med`:xe===0?G.textContent="Din kurv er tom endnu":G.textContent=`L\xE6g for ${e.fmt.kr(k+1-xe)} mere i kurven`};he(),e.store.on(xe=>{(xe==="cart:add"||xe==="cart:change")&&he()})}let p=i.querySelector(".faq-club"),w=i.querySelector("[data-faq-club]"),b=i.querySelector("[data-faq-form]"),M=i.querySelector("[data-faq-field]"),O=i.querySelector("#faq-email"),E=i.querySelector("[data-faq-err]"),C=i.querySelector("[data-faq-done]"),N=i.querySelector("[data-faq-done-email]"),_=i.querySelector("[data-faq-status]");if(!b)return;let x=!1,U=G=>(G=G.trim(),G?Pv.test(G)?"":"Den e-mail ser ikke helt rigtig ud. Pr\xF8v fx navn@eksempel.dk.":"Skriv din e-mail, s\xE5 kan vi byde dig velkommen."),K=G=>{M.classList.toggle("is-invalid",!!G),O.setAttribute("aria-invalid",G?"true":"false"),G?(M.classList.remove("is-invalid"),M.offsetWidth,M.classList.add("is-invalid"),E.innerHTML=`${Dv}<span>${G}</span>`):E.textContent=""};O.addEventListener("input",()=>{x&&!U(O.value)&&K("")}),O.addEventListener("blur",()=>{x&&K(U(O.value))});function Z(G){N.textContent=G;let L=w.getBoundingClientRect().height,q=()=>{b.hidden=!0,C.hidden=!1,p.classList.add("is-done"),_.textContent=`Tak. Du er nu tilmeldt kundeklubben med ${G}.`;let k=w.getBoundingClientRect().height;t||w.animate([{height:`${L}px`},{height:`${k}px`}],{duration:700,easing:_u}),C.focus({preventScroll:!0})};if(t)return q();b.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateY(-6px)",filter:"blur(2px)"}],{duration:260,easing:bu,fill:"forwards"}).onfinish=q}b.addEventListener("submit",G=>{G.preventDefault(),x=!0;let L=U(O.value);if(K(L),L){O.focus();return}b.classList.add("is-busy"),b.setAttribute("aria-busy","true"),setTimeout(()=>{b.classList.remove("is-busy"),b.removeAttribute("aria-busy"),Z(O.value.trim())},t?0:900)});let se=n.get("club");se==="error"&&(O.value="navn@eksempel",x=!0,K(U(O.value))),se==="busy"&&(O.value="maja@eksempel.dk",b.classList.add("is-busy")),se==="done"&&(O.value="maja@eksempel.dk",Z("maja@eksempel.dk"))}function lc(i,e){i.classList.add("ftr--js");let t=matchMedia("(max-width: 760px)"),n=e.prefersReducedMotion,s=[...i.querySelectorAll(".ftr-col")];s.forEach(E=>{E.querySelectorAll(".ftr-col__list > li").forEach((C,N)=>C.style.setProperty("--i",N))});let r=(E,C)=>{let N=E.querySelector(".ftr-col__btn"),_=E.querySelector(".ftr-col__panel");E.classList.toggle("is-open",C),N.setAttribute("aria-expanded",String(C)),t.matches&&!C?_.setAttribute("inert",""):_.removeAttribute("inert")};s.forEach(E=>{E.querySelector(".ftr-col__btn").addEventListener("click",()=>r(E,!E.classList.contains("is-open")))});let a=()=>s.forEach(E=>r(E,E.classList.contains("is-open")));a(),t.addEventListener("change",a);let o=new URLSearchParams(location.search).get("open");o&&s[+o-1]&&r(s[+o-1],!0);let l=i.querySelector("[data-promo]"),c=E=>l.querySelector(E),u=E=>new Intl.DateTimeFormat("sv-SE",{timeZone:"Europe/Copenhagen"}).format(new Date(E)),h="live",d=()=>{let E=e.clock.now(),C=E>e.clock.end?"ended":E<e.clock.start?"soon":u(E)===u(e.clock.end)?"last":"live";C!==h&&(h=C,l.dataset.state=C,C==="last"?c("[data-promo-eyebrow]").textContent="Sidste dag \xB7 slutter kl. 23.59":C==="soon"?c("[data-promo-eyebrow]").textContent="Black Week \xB7 mandag 23. \u2013 mandag 30. november":C==="ended"&&(c("[data-promo-eyebrow]").textContent="Black Week er slut",c("[data-promo-title]").textContent="Tak, fordi du handlede i ro og mag.",c("[data-promo-sub]").textContent="Fri fragt over 399 kr. og 14 dages fortrydelsesret \u2013 hele \xE5ret.",c("[data-promo-cta-label]").textContent="Se hele hudplejeserien",c("[data-promo-cta]").setAttribute("href","#deals")))};d(),setInterval(d,3e4),i.querySelector("[data-to-top]").addEventListener("click",E=>{let C=document.getElementById("top");E.preventDefault(),window.scrollTo({top:0,behavior:n?"auto":"smooth"});let N=C||document.body;C&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","-1"),N.focus?.({preventScroll:!0}),history.replaceState(null,"",location.pathname+location.search)});let f=i.querySelector(".ftr-mark");if(!f||n)return;let v=matchMedia("(hover: hover) and (pointer: fine)").matches,g={x:50,y:50,lit:0,drift:0},m={x:50,y:50,lit:0,drift:0},p=!1,w=0,b=()=>{let E=i.getBoundingClientRect(),C=innerHeight||1,N=Math.min(1,Math.max(0,(C-E.top)/(C+E.height)));m.drift=(.5-N)*90},M=()=>{w=0;let E=.075;g.x+=(m.x-g.x)*E,g.y+=(m.y-g.y)*E,g.lit+=(m.lit-g.lit)*.05,g.drift+=(m.drift-g.drift)*.06,f.style.setProperty("--mx",g.x.toFixed(2)+"%"),f.style.setProperty("--my",g.y.toFixed(2)+"%"),f.style.setProperty("--lit",g.lit.toFixed(3)),f.style.setProperty("--drift",g.drift.toFixed(2)+"px");let C=Math.abs(m.x-g.x)<.05&&Math.abs(m.y-g.y)<.05&&Math.abs(m.lit-g.lit)<.002&&Math.abs(m.drift-g.drift)<.05;p&&!C&&(w=requestAnimationFrame(M))},O=()=>{p&&!w&&(w=requestAnimationFrame(M))};new IntersectionObserver(([E])=>{p=E.isIntersecting,p&&(b(),O())},{rootMargin:"120px 0px"}).observe(i),addEventListener("scroll",()=>{p&&(b(),O())},{passive:!0}),addEventListener("resize",()=>{p&&(b(),O())},{passive:!0}),v&&(i.addEventListener("pointermove",E=>{let C=f.getBoundingClientRect();m.x=(E.clientX-C.left)/C.width*100,m.y=(E.clientY-C.top)/C.height*100;let N=Math.max(0,Math.abs(E.clientX-(C.left+C.width/2))-C.width/2),_=Math.max(0,Math.abs(E.clientY-(C.top+C.height/2))-C.height/2);m.lit=Math.max(0,1-Math.hypot(N,_)/260),O()}),i.addEventListener("pointerleave",()=>{m.lit=0,O()})),b(),g.drift=m.drift,f.style.setProperty("--drift",g.drift.toFixed(2)+"px")}var Fv={"cleansing-gel":"Rens","day-cream":"Dag","night-cream":"Nat","skin-oil":"Olie"},Nv={"cleansing-gel":"rensegel","day-cream":"dagcreme","night-cream":"natcreme","skin-oil":"olien"},Su=9,cc=5200,Bv={"products/all-day-facial.webp":[136,78,1200,1173,1200,1200],"products/body-lotion.webp":[186,163,699,1161,800,1200],"products/cleansing-gel.webp":[380,100,1169,1173,1200,1200],"products/day-cream.webp":[345,96,1007,1171,1200,1200],"products/hyaluron-serum.webp":[86,224,800,1131,800,1200],"products/night-cream.webp":[326,96,1012,1182,1200,1200],"products/shampoo.webp":[422,64,1112,1187,1200,1200],"products/skin-oil.webp":[443,241,1e3,1049,1200,1200],"products/startpakke-plus.webp":[148,77,1200,1173,1200,1200],lip:[30,20,90,152,120,160]};function hc(i,e,t=.12,n=t){let s=Bv[i];if(!s)return"";let[r,a,o,l,c,u]=s,h=1/e,d=Math.min((1-2*t)/(o-r),(h-2*n)/(l-a)),f=(1-d*(o-r))/2-d*r,v=(h-d*(l-a))/2-d*a+n*.15,g=m=>(m*100).toFixed(2)+"%";return`left:${g(f)};top:${g(v/h)};width:${g(d*c)};height:${g(d*u/h)}`}function uc(i,e){let{store:t,fmt:n,byId:s,campaign:r}=e,a=(S,D=i)=>D.querySelector(S),o=(S,D=i)=>[...D.querySelectorAll(S)],l=new URLSearchParams(location.search),c=e.prefersReducedMotion,u=S=>n.kr(S).replace(/ /g," "),h=S=>u(S).replace(/ /g,"\xA0"),d="../src/sections/cart/lip-balm.svg",f=S=>S.gift?d:e.asset(S.img),v=S=>S.gift?"lip":S.img,g=(S,D,ce,me)=>`<img class="cart-fit" src="${f(S)}" alt="" style="${hc(v(S),D,ce,me)}" decoding="async">`,m=a("#cart-i-stars");o('use[href="#cart-i-stars"]').forEach(S=>{let D=S.parentNode;[...m.children].forEach(ce=>D.appendChild(ce.cloneNode(!0))),S.remove()});let p=S=>`<svg class="${S}" viewBox="0 0 60 60" aria-hidden="true">${m.innerHTML}</svg>`,w=(S,D="cart-ico")=>`<svg class="${D}" aria-hidden="true"><use href="#cart-i-${S}"/></svg>`,b=a("[data-cart-drawer]"),M=a("[data-cart-body]"),O=a("[data-cart-list]"),E=a("[data-cart-empty]"),C=a("[data-cart-foot]"),N=a("[data-cart-upsell]"),_=a("[data-cart-toast]"),x=a("[data-cart-bar]"),U=a("[data-cart-announce]");_.removeAttribute("hidden");let K=new Set,Z=0,se=0;function G(S,D=6,ce=8e-4){return{v:0,to:0,k:D,eps:ce,apply:S,set(Ie,Be){this.to=Ie,Be||c?(this.v=Ie,S(Ie,!0),K.delete(this)):(K.add(this),L())}}}function L(){Z||(se=performance.now(),Z=requestAnimationFrame(q))}function q(S){let D=Math.min(.25,(S-se)/1e3);se=S;for(let ce of K){ce.v+=(ce.to-ce.v)*(1-Math.exp(-D*ce.k));let me=Math.abs(ce.to-ce.v)<ce.eps*Math.max(1,Math.abs(ce.to));me&&(ce.v=ce.to,K.delete(ce)),ce.apply(ce.v,me)}Z=K.size?requestAnimationFrame(q):0}let k=()=>t.get().cart,he=()=>t.subtotal(),xe=()=>k().reduce((S,D)=>S+(s[D.id].price0-s[D.id].price)*D.qty,0),Te=()=>he()>=r.giftThreshold,De={ship:{el:a('[data-meter="ship"]'),goal:r.freeShipping},gift:{el:a('[data-meter="gift"]'),goal:r.giftThreshold}};for(let S of Object.values(De))S.track=a("[data-meter-track]",S.el),S.fill=a("[data-meter-fill]",S.el),S.label=a("[data-meter-label]",S.el),S.on=null,a("[data-meter-goal]",S.el).textContent=u(S.goal),S.tw=G(D=>{S.track.style.setProperty("--p",D.toFixed(4)),S.track.toggleAttribute("data-zero",D<.004)},3.6);function Me(S,D){let ce=De[S],me=ce.goal-D;return S==="ship"?me<=0?"Fri fragt er l\xE5st op":D===0?`Fri fragt ved k\xF8b over <b>${h(ce.goal)}</b>`:`Du mangler <b>${h(me)}</b> til <em>fri fragt</em>`:me<=0?"Gratis CBD Lip Balm er lagt i kurven":D===0?`Gratis CBD Lip Balm ved k\xF8b over <b>${h(ce.goal)}</b>`:`Du mangler <b>${h(me)}</b> til en <em>gratis CBD Lip Balm</em>`}function te(S){let D=he();for(let[ce,me]of Object.entries(De)){let Ie=Math.min(1,D/me.goal),Be=D>=me.goal,Qe=Me(ce,D);me.label.innerHTML!==Qe&&(me.label.innerHTML=Qe),me.track.setAttribute("aria-valuenow",String(Math.min(D,me.goal))),me.track.setAttribute("aria-valuetext",me.label.textContent),me.tw.set(Ie,S),me.on!==null&&Be!==me.on&&Be&&!S?ge(me,ce):me.el.classList.toggle("is-on",Be),me.on=Be}}function ge(S,D){setTimeout(()=>{S.el.classList.add("is-on"),S.el.classList.remove("is-unlocking"),S.el.offsetWidth,S.el.classList.add("is-unlocking"),setTimeout(()=>S.el.classList.remove("is-unlocking"),1900),!c&&$&&ne(S.track),Pe(D==="ship"?"Fri fragt er l\xE5st op.":"Gratis CBD Lip Balm er lagt i kurven.")},c?0:520)}function ne(S){for(let D=0;D<6;D++){let ce=document.createElement("span");ce.className="cart-bub";let me=4+Math.random()*6;ce.style.cssText=`left:${(62+Math.random()*38).toFixed(1)}%;top:3px;--s:${me.toFixed(1)}px;--dx:${(Math.random()*18-9).toFixed(1)}px;--dy:${(-22-Math.random()*30).toFixed(1)}px;--d:${1300+Math.random()*900|0}ms;animation-delay:${D*90+Math.random()*120|0}ms`,S.appendChild(ce),setTimeout(()=>ce.remove(),3200)}}let X=new Map,pe=new Map,Ee=S=>{let D=[];return S.bundle?D.push(S.size):(S.nickname&&D.push(S.nickname),S.strength&&D.push(S.strength),S.size&&D.push(S.size)),D.join(" \xB7 ")};function Ae(S){let D=s[S],ce=document.createElement("li");return ce.className="cart-line",ce.dataset.id=S,ce.innerHTML=`
      <div class="cart-line__thumb">${g(D,88/104,.13,.12)}</div>
      <div class="cart-line__main">
        <div class="cart-line__top">
          <h3 class="cart-line__name">${D.name}</h3>
          <button class="cart-iconbtn cart-line__remove" type="button" data-remove aria-label="Fjern ${D.name} fra kurven">${w("close")}</button>
        </div>
        <p class="cart-line__meta">${Ee(D)}${D.save?`<br><span class="cart-line__off">Spar ${h(D.save)}</span>`:""}</p>
        <div class="cart-line__bottom">
          <div class="cart-qty" role="group" aria-label="Antal ${D.name}">
            <button type="button" data-dec aria-label="\xC9n f\xE6rre">${w("minus")}</button>
            <span class="cart-qty__n" aria-live="polite"><span>1</span></span>
            <button type="button" data-inc aria-label="\xC9n mere">${w("plus")}</button>
          </div>
          <div class="cart-line__price"><span class="cart-line__now" data-now></span><span class="cart-line__was">F\xF8rpris <s data-was></s></span></div>
        </div>
      </div>`,ce._qty=0,ce}function Ue(S,D){let ce=s[S.dataset.id],me=S._qty;if(me===D)return;S._qty=D;let Ie=a(".cart-qty__n",S);if(me&&!c){let tt=D>me,at=Ie.firstElementChild;at.className=tt?"is-out-up":"is-out-down";let rt=document.createElement("span");rt.textContent=D,rt.className=tt?"is-in-up":"is-in-down",Ie.appendChild(rt),setTimeout(()=>at.remove(),400),S.classList.remove("is-bump"),S.offsetWidth,S.classList.add("is-bump")}else Ie.innerHTML=`<span>${D}</span>`;a("[data-now]",S).textContent=u(ce.price*D),a("[data-was]",S).textContent=u(ce.price0*D);let Be=a("[data-dec]",S),Qe=D<=1;Be.classList.toggle("is-trash",Qe),Be.innerHTML=w(Qe?"trash":"minus"),Be.setAttribute("aria-label",Qe?`Fjern ${ce.name}`:`\xC9n f\xE6rre ${ce.name}`),a("[data-inc]",S).disabled=D>=Su,a("[data-inc]",S).setAttribute("aria-label",`\xC9n mere ${ce.name}`)}function Fe(S,D){if(c){D();return}let ce=S.offsetHeight;S.style.height=ce+"px",S.classList.add("cart-collapse"),S.offsetHeight,S.style.height="0px",S.style.opacity="0",S.style.paddingTop="0px",S.style.paddingBottom="0px",S.style.borderBottomWidth="0px",setTimeout(D,470)}function re(S,D,ce){let me=s[S],Ie=document.createElement("li");Ie.className="cart-undo",Ie.innerHTML=`<span>${me.name} er fjernet.</span><button type="button">Fortryd</button>`;let Be={el:Ie,qty:D,idx:ce,timer:0};return a("button",Ie).addEventListener("click",()=>{clearTimeout(Be.timer),pe.delete(S);let Qe=t.get().cart;Qe.find(tt=>tt.id===S)||Qe.splice(Math.min(Be.idx,Qe.length),0,{id:S,qty:Be.qty}),I=S,t.emit("cart:change",{id:S})}),Be.timer=setTimeout(()=>{pe.delete(S),Ie.isConnected&&Fe(Ie,()=>{Ie.remove(),z()})},6500),pe.set(S,Be),Ie}let I=null,Le=[];function le(S){let D=k(),ce=D.map(me=>me.id);for(let[me,Ie]of X){if(ce.includes(me)||Ie._leaving)continue;Ie._leaving=!0;let Be=Le.indexOf(me),Qe=Ie._qty;if(X.delete(me),S||!$){Ie.remove();continue}let tt=Ie.contains(document.activeElement);Fe(Ie,()=>{let at=re(me,Qe,Be);Ie.replaceWith(at),tt&&a("button",at).focus(),z()}),Pe(`${s[me].name} er fjernet fra kurven.`)}D.forEach((me,Ie)=>{let Be=X.get(me.id);if(!Be){Be=Ae(me.id),X.set(me.id,Be);let Qe=pe.get(me.id);if(Qe)clearTimeout(Qe.timer),pe.delete(me.id),Qe.el.isConnected?Qe.el.replaceWith(Be):O.insertBefore(Be,Q.isConnected?Q:null);else{let tt=D.slice(Ie+1).map(at=>X.get(at.id)).find(at=>at&&at.isConnected);O.insertBefore(Be,tt||(Q.isConnected?Q:null))}!S&&$&&!c&&Be.classList.add("is-enter")}Ue(Be,me.qty)}),Le=ce,I&&X.get(I)&&(a("[data-inc]",X.get(I)).focus(),I=null),Se(S)}let oe=s[r.giftId],Q=document.createElement("li");Q.className="cart-line cart-line--gift",Q.innerHTML=`
    <div class="cart-line__thumb">${g(oe,88/104,.2,.16)}</div>
    <div class="cart-line__main">
      <div class="cart-line__top"><h3 class="cart-line__name">${oe.name}</h3></div>
      <p class="cart-line__meta">Black Week-gave ved k\xF8b over ${h(r.giftThreshold)}</p>
      <div class="cart-line__bottom">
        <span class="cart-gifttag">${w("gift")}Gave</span>
        <div class="cart-line__price"><span class="cart-line__now">${u(0)}</span><span class="cart-line__was">V\xE6rdi <s>${u(r.giftValue)}</s></span></div>
      </div>
    </div>`;function Se(S){let D=Te()&&k().length>0;if(D&&!Q.isConnected&&!Q._leaving)Q.style.cssText="",Q.classList.remove("cart-collapse","is-enter"),O.appendChild(Q),!S&&$&&!c&&(Q.style.animationDelay="520ms",Q.offsetWidth,Q.classList.add("is-enter"));else if(D&&Q.isConnected)O.appendChild(Q);else if(!D&&Q.isConnected&&!Q._leaving){if(S||!$){Q.remove();return}Q._leaving=!0,Fe(Q,()=>{Q.remove(),Q._leaving=!1,z()})}}let de=s["komplet-pakken"],T=a("[data-upsell-text]"),y=a("[data-upsell-set]"),Y=a("[data-upsell-btn]"),ae=a("[data-upsell-btn-label]");a("[data-upsell-price]").textContent=u(de.price);{let S=a(".cart-upsell__media img");S.className="cart-fit",S.setAttribute("style",hc(de.img,92/108,.06))}a("[data-upsell-was]").textContent=u(de.price0);function ve(){let S=k(),D=Be=>S.some(Qe=>Qe.id===Be),ce=S.length>0&&!D(de.id);if(N.hidden=!ce,!ce)return;let me=de.contains.filter(D),Ie=de.contains.filter(Be=>!D(Be));if(y.innerHTML=de.contains.map(Be=>`<li class="${D(Be)?"is-owned":""}">${D(Be)?w("check"):""}${Fv[Be]}</li>`).join(""),me.length){let Be=de.price-me.reduce((at,rt)=>at+s[rt].price,0),Qe=Ie.map(at=>Nv[at]),tt=Qe.length>1?Qe.slice(0,-1).join(", ")+" og "+Qe[Qe.length-1]:Qe[0];T.innerHTML=Ie.length===0?`Du har hele rutinen. Saml den i \xE9n pakke og spar <b>${h(-Be)}</b> ekstra.`:Be>0?`Du har allerede ${me.length} af 4. F\xE5 ${tt} med for kun <b>${h(Be)}</b> mere.`:`Du har allerede ${me.length} af 4. F\xE5 ${tt} med \u2013 og spar <b>${h(-Be)}</b>.`,ae.textContent="Skift til pakken",Y.setAttribute("aria-label",`Skift til Komplet Pakken for ${u(de.price)}`)}else T.innerHTML="Rens, dag, nat og olie \u2013 hele rutinen, morgen og aften, i \xE9n pakke.",ae.textContent="L\xE6g i kurv",Y.setAttribute("aria-label",`L\xE6g Komplet Pakken i kurven for ${u(de.price)}`)}Y.addEventListener("click",()=>{let S=k();de.contains.forEach(D=>{let ce=S.find(me=>me.id===D);if(ce){let me=X.get(D);me&&(me._leaving=!0,X.delete(D),_e(me)),t.setQty(D,ce.qty-1)}}),t.add(de.id,1),Pe("Komplet Pakken er lagt i kurven."),requestAnimationFrame(()=>{let D=X.get(de.id);D&&(D.scrollIntoView({block:"nearest",behavior:c?"auto":"smooth"}),a("[data-inc]",D).focus({preventScroll:!0}))})});function _e(S){Fe(S,()=>{S.remove(),z()})}let We=a("[data-cart-quick]");We.innerHTML=["skin-oil","komplet-pakken"].map(S=>{let D=s[S];return`<li><span class="cart-quick__thumb">${g(D,1,.1)}</span>
      <span><p class="cart-quick__name">${D.nickname||D.name}</p><span class="nc-price"><span class="nc-price__now">${u(D.price)}</span><span class="nc-price__was">F\xF8rpris <s>${u(D.price0)}</s></span></span></span>
      <button class="cart-iconbtn cart-quick__add" type="button" data-quick="${S}" aria-label="L\xE6g ${D.nickname||D.name} i kurven">${w("plus")}</button></li>`}).join(""),We.addEventListener("click",S=>{let D=S.target.closest("[data-quick]");D&&(I=D.dataset.quick,t.add(D.dataset.quick,1))});let Ne=a("[data-cart-saved]"),we=a("[data-cart-total]"),$e=a("[data-cart-save]"),Re=a("[data-cart-count]"),Oe=a("[data-cart-ship-note]"),Je=G(S=>{we.textContent=u(Math.round(S))},7,.002),Xe=G(S=>{Ne.textContent=u(Math.round(S))},7,.002);function ke(S){let D=t.count(),ce=he();Re.textContent=D?`(${D} ${D===1?"vare":"varer"})`:"",Je.set(ce,S),Xe.set(xe(),S),$e.classList.toggle("has-gift",Te()),Oe.textContent=ce>=r.freeShipping?"inkl. moms \xB7 fri fragt":"inkl. moms";let me=D===0;E.hidden=!me,C.hidden=me,O.hidden=me&&!O.children.length}function P(S=!1){le(S),ve(),te(S),ke(S),J(),z()}O.addEventListener("click",S=>{let D=S.target.closest(".cart-line");if(!D||D.classList.contains("cart-line--gift"))return;let ce=D.dataset.id,me=k().find(Ie=>Ie.id===ce);me&&(S.target.closest("[data-inc]")?t.setQty(ce,Math.min(Su,me.qty+1)):S.target.closest("[data-dec]")?t.setQty(ce,me.qty-1):S.target.closest("[data-remove]")&&t.setQty(ce,0))});function z(){requestAnimationFrame(()=>{b.classList.toggle("is-scrolled",M.scrollTop>4),b.classList.toggle("has-more",M.scrollHeight-M.clientHeight-M.scrollTop>4)})}M.addEventListener("scroll",z,{passive:!0}),window.addEventListener("resize",z);let $=!1,R=null,ee=[],V=()=>[a(".cart-perks"),...o(".cart-list > li"),N,E,C].filter(Boolean);function H(){if($){a("#cart-title").focus({preventScroll:!0});return}$=!0,It(!0),R=document.activeElement,V().forEach((D,ce)=>{D.setAttribute("data-stagger",""),D.style.setProperty("--i",ce)}),b.removeAttribute("inert"),b.setAttribute("aria-hidden","false");let S=window.innerWidth-document.documentElement.clientWidth;document.documentElement.classList.add("cart-lock"),S>0&&(document.body.style.paddingRight=S+"px"),ee=[...document.body.children].filter(D=>D!==i&&!D.hasAttribute("inert")&&D.tagName!=="SCRIPT"),ee.forEach(D=>D.setAttribute("inert","")),o(".cart-bar, .cart-toast").forEach(D=>D.setAttribute("inert","")),b.offsetWidth,i.classList.add("is-open");for(let D of Object.values(De))D.tw.set(0,!0);P(!0);for(let D of Object.values(De))D.tw.set(0,!0);setTimeout(()=>te(!1),c?0:380),M.scrollTop=0,requestAnimationFrame(()=>a("#cart-title").focus({preventScroll:!0})),setTimeout(()=>V().forEach(D=>D.removeAttribute("data-stagger")),1600)}function be(){if($){$=!1,i.classList.remove("is-open","is-dragging"),b.style.removeProperty("--drag"),b.setAttribute("aria-hidden","true"),b.setAttribute("inert",""),ee.forEach(S=>S.removeAttribute("inert")),ee=[],o(".cart-bar, .cart-toast").forEach(S=>S.removeAttribute("inert")),setTimeout(()=>{$||(document.documentElement.classList.remove("cart-lock"),document.body.style.paddingRight="")},420);for(let[S,D]of pe)clearTimeout(D.timer),D.el.remove(),pe.delete(S);R&&R.isConnected&&typeof R.focus=="function"&&R.focus({preventScroll:!0}),J()}}a("[data-cart-close]").addEventListener("click",be),a("[data-cart-overlay]").addEventListener("click",be),o("[data-cart-shop]").forEach(S=>S.addEventListener("click",D=>{let ce=document.querySelector("#deals")||document.querySelector("#offers");$&&be(),ce&&(D.preventDefault(),ce.scrollIntoView({behavior:c?"auto":"smooth",block:"start"}))})),a("[data-cart-cta]").addEventListener("click",S=>S.preventDefault()),a("[data-cart-cta]").addEventListener("pointermove",S=>{let D=S.currentTarget.getBoundingClientRect();S.currentTarget.style.setProperty("--mx",`${((S.clientX-D.left)/D.width*100).toFixed(1)}%`)}),document.addEventListener("keydown",S=>{if(!$){S.key==="Escape"&&_.classList.contains("is-shown")&&It();return}if(S.key==="Escape"){S.preventDefault(),be();return}if(S.key!=="Tab")return;let D=o('button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])',b).filter(Ie=>Ie.offsetParent!==null||Ie===document.activeElement);if(!D.length)return;let ce=D[0],me=D[D.length-1];b.contains(document.activeElement)?S.shiftKey&&document.activeElement===ce?(S.preventDefault(),me.focus()):!S.shiftKey&&document.activeElement===me&&(S.preventDefault(),ce.focus()):(S.preventDefault(),ce.focus())});let ye=null;b.addEventListener("pointerdown",S=>{S.pointerType==="mouse"||!$||(ye={x:S.clientX,y:S.clientY,t:performance.now(),dx:0,active:!1,id:S.pointerId})}),b.addEventListener("pointermove",S=>{if(!ye||S.pointerId!==ye.id)return;let D=S.clientX-ye.x,ce=S.clientY-ye.y;if(!ye.active){if(Math.abs(D)>10&&Math.abs(D)>Math.abs(ce)*1.4&&D>0){ye.active=!0,i.classList.add("is-dragging");try{b.setPointerCapture(S.pointerId)}catch{}}else if(Math.abs(ce)>10){ye=null;return}}if(ye.active){let me=D>0?D:D*.2;ye.v=(me-ye.dx)/Math.max(1,performance.now()-ye.t),ye.t=performance.now(),ye.dx=me,b.style.setProperty("--drag",`${me.toFixed(1)}px`)}});let F=()=>{if(!ye)return;let S=ye;ye=null,S.active&&(i.classList.remove("is-dragging"),S.dx>b.offsetWidth*.28||(S.v||0)>.55?be():b.style.setProperty("--drag","0px"))};b.addEventListener("pointerup",F),b.addEventListener("pointercancel",F);let ie=a("[data-toast-img]"),B=a("[data-toast-name]"),Ce=a("[data-toast-price]"),ze=a("[data-toast-was]"),Ke=a("[data-toast-hint]"),Ze=0,it=cc,st=0,St=!1;_.style.setProperty("--toast-ms",cc+"ms");function wt(){let S=document.querySelector('[data-section="header"] .hdr-bar')||document.querySelector('[data-section="header"]'),D=16;if(S){let ce=S.getBoundingClientRect();ce.bottom>0&&(D=Math.max(16,ce.bottom+12))}_.style.setProperty("--toast-top",`${Math.round(D)}px`)}function ht(S){let D=s[S];if(!D)return;let ce=_.classList.contains("is-shown");wt(),ie.src=f(D),ie.setAttribute("style",hc(v(D),72/80,.12)),B.textContent=D.name,Ce.textContent=u(D.price),ze.textContent=u(D.price0);let me=he(),Ie=r.freeShipping-me,Be=r.giftThreshold-me;Ke.innerHTML=Ie>0?`<span class="cart-mini" style="--p:${(me/r.freeShipping).toFixed(3)}"><i></i></span><span><b>${h(Ie)}</b> til fri fragt</span>`:Be>0?`<span class="cart-mini" style="--p:${(me/r.giftThreshold).toFixed(3)}"><i></i></span><span>Fri fragt \xB7 <b>${h(Be)}</b> til gratis Lip Balm</span>`:`${p("cart-stars-i")}<span>Fri fragt og gratis Lip Balm</span>`,ce&&!c&&(_.classList.remove("is-swap"),_.offsetWidth,_.classList.add("is-swap")),_.classList.add("is-shown"),_.setAttribute("aria-hidden","false"),Pe(`${D.name} er lagt i kurven.`),it=cc,nt(!0)}function nt(S){clearTimeout(Ze),S&&(_.classList.remove("is-timing","is-paused"),_.offsetWidth,_.classList.add("is-timing")),st=performance.now(),Ze=setTimeout(()=>It(),it)}function It(S){if(clearTimeout(Ze),_.contains(document.activeElement))try{(document.querySelector("[data-cart]")||document.body).focus()}catch{}if(_.classList.remove("is-shown","is-timing","is-paused","is-swap"),_.setAttribute("aria-hidden","true"),S){let D=a(".cart-toast__card",_);D.style.transition="none",D.offsetWidth,D.style.transition=""}}let Bt=()=>{!_.classList.contains("is-shown")||St||(St=!0,clearTimeout(Ze),it-=performance.now()-st,_.classList.add("is-paused"))},Lt=()=>{St&&(St=!1,_.classList.remove("is-paused"),_.classList.contains("is-shown")&&nt(!1))};_.addEventListener("pointerenter",Bt),_.addEventListener("pointerleave",Lt),_.addEventListener("focusin",Bt),_.addEventListener("focusout",S=>{_.contains(S.relatedTarget)||Lt()}),a("[data-toast-close]").addEventListener("click",()=>It()),a("[data-toast-open]").addEventListener("click",()=>{It(!0),t.openCart()}),_.setAttribute("aria-hidden","true");let Et=a("[data-cart-bar-count]"),Jt=a("[data-cart-bar-clock]"),xn=a("[data-cart-bar-open]"),yn=l.get("bar")==="1",A=t.count();function J(){let S=t.count();Et.hidden=S===0,Et.textContent=String(S),S>A&&!c&&(Et.classList.remove("is-bump"),Et.offsetWidth,Et.classList.add("is-bump")),A=S,xn.setAttribute("aria-label",S?`\xC5bn kurven, ${S} ${S===1?"vare":"varer"}`:"\xC5bn kurven");let D=yn&&!$;x.classList.toggle("is-shown",D),x.setAttribute("aria-hidden",D?"false":"true"),D?x.removeAttribute("inert"):x.setAttribute("inert","")}xn.addEventListener("click",()=>t.openCart());function ue(){let S=Math.max(0,e.clock.end-e.clock.now()),D=Math.floor(S/864e5),ce=Math.floor(S%864e5/36e5),me=Math.floor(S%36e5/6e4);Jt.textContent=S<=0?"Black Week er slut":`Slutter om ${D?D+" d ":""}${ce} t ${me} m \xB7 30. nov.`}ue(),setInterval(ue,15e3);let fe=document.querySelector('[data-section="hero"]');if(fe)new IntersectionObserver(([S])=>{let D=!S.isIntersecting&&S.boundingClientRect.top<0;l.get("bar")!=="1"&&D!==yn&&(yn=D,J())},{threshold:0}).observe(fe);else{let S=()=>{let D=window.scrollY>window.innerHeight*.8;l.get("bar")!=="1"&&D!==yn&&(yn=D,J())};window.addEventListener("scroll",S,{passive:!0})}let j=0;function Pe(S){clearTimeout(j),U.textContent="",j=setTimeout(()=>{U.textContent=S},60)}let Ve=!1;t.on((S,D)=>{if(S==="cart:open"){H();return}if(S==="cart:add"){P(!$),!$&&!Ve&&ht(D.id);return}S==="cart:change"&&P(!$)}),l.get("open")==="1"&&(Ve=!0,t.get().cart.length||(t.add("skin-oil",1),t.add("day-cream",1)),Ve=!1),P(!0),(l.get("open")==="1"||l.get("open")==="empty")&&requestAnimationFrame(()=>t.openCart()),l.get("toast")&&setTimeout(()=>t.add(l.get("toast"),1),300)}pn("header",Ha);pn("hero",jl);pn("offers",$l);pn("deals",ec);pn("routine",nc);pn("ingredients",sc);pn("stories",rc);pn("trust",ac);pn("faq",oc);pn("footer",lc);pn("cart",uc);yc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
