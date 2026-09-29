// shared animation helpers (deterministic: everything is a function of t)
const $=id=>document.getElementById(id);
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const P=(t,a,b)=>cl((t-a)/(b-a));
const oc=x=>1-Math.pow(1-x,3);
const ic=x=>x*x*x;
const io=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
const ob=(x,k=1.8)=>{const c3=k+1;return 1+c3*Math.pow(x-1,3)+k*Math.pow(x-1,2)};
const lerp=(a,b,x)=>a+(b-a)*x;
function st(el,{o=1,x=0,y=0,s=1,r=0,blur=0,sx=null,extra=''}={}){
  if(typeof el==='string')el=$(el);
  el.style.opacity=o;
  el.style.transform=`translate(${x}px,${y}px) scale(${s})${sx!==null?` scaleX(${sx})`:''} rotate(${r}deg) ${extra}`;
  el.style.filter=blur>0.05?`blur(${blur}px)`:'none';
}
function pop(el,t,t0,d=.32,dy=40){const p=P(t,t0,t0+d);st(el,{o:cl(p*3),s:lerp(.6,1,ob(p)),y:lerp(dy,0,oc(p))});}
function show(el,on){(typeof el==='string'?$(el):el).style.display=on?'block':'none';}
// seeded hash noise
function hash(n){n=Math.sin(n*127.1+311.7)*43758.5453;return n-Math.floor(n);}
function vnoise(t,seed){const i=Math.floor(t),f=t-i,u=f*f*(3-2*f);return lerp(hash(i+seed*101),hash(i+1+seed*101),u)*2-1;}
// handheld camera: returns {x,y,r}
function handheld(t,amp=1,seed=1){
  const x=(vnoise(t*1.1,seed)*14+vnoise(t*2.7,seed+3)*5+vnoise(t*7,seed+5)*1.5)*amp;
  const y=(vnoise(t*0.9,seed+7)*12+vnoise(t*2.3,seed+9)*5+vnoise(t*6.5,seed+11)*1.5)*amp;
  const r=(vnoise(t*0.8,seed+13)*0.7+vnoise(t*2.1,seed+15)*0.25)*amp;
  return {x,y,r};
}
// film/phone grain on a canvas
function grain(canvas,t,alpha){
  const c=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
  if(!canvas._img){canvas._img=c.createImageData(w,h);}
  const d=canvas._img.data;let s=Math.floor(t*30)*9973+1;
  for(let i=0;i<d.length;i+=4){s=(s*16807)%2147483647;const v=(s&255);d[i]=d[i+1]=d[i+2]=v;d[i+3]=255;}
  c.putImageData(canvas._img,0,0);canvas.style.opacity=alpha;
}
