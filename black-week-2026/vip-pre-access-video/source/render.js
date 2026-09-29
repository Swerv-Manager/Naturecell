const { chromium } = require('playwright');
const fs=require('fs');
(async()=>{
  const mode=process.argv[2]||'preview';
  const out=process.argv[3];
  const browser=await chromium.launch(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{});
  const page=await browser.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
  await page.goto('file://'+__dirname+'/video.html');
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
  await page.waitForTimeout(300);
  fs.mkdirSync(out,{recursive:true});
  let times;
  if(mode==='preview') times=process.argv[4].split(',').map(Number);
  else {const fps=30,dur=Number(process.argv[4]||20.5);times=[...Array(Math.round(fps*dur)).keys()].map(i=>i/fps);}
  let i=0;
  for(const t of times){
    await page.evaluate(t=>window.render(t),t);
    const name=mode==='preview'?`t_${t.toFixed(2)}.jpg`:`f_${String(i).padStart(4,'0')}.jpg`;
    await page.screenshot({path:out+'/'+name,type:'jpeg',quality:93});
    i++;
  }
  await browser.close();
})();
