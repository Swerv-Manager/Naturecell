// usage: node render.js <page.html> preview <outdir> <t1,t2,...>
//        node render.js <page.html> full <outdir> <duration_s> [fps]
const { chromium } = require('playwright');
const fs=require('fs'), path=require('path');
(async()=>{
  const [html,mode,out,arg,fpsArg]=process.argv.slice(2);
  const browser=await chromium.launch(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{});
  const page=await browser.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
  await page.goto('file://'+path.resolve(html));
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
  await page.waitForTimeout(400);
  await page.evaluate(()=>{window.__ready=true;});
  fs.mkdirSync(out,{recursive:true});
  const fps=Number(fpsArg||30);
  const times=mode==='preview'?arg.split(',').map(Number):[...Array(Math.round(fps*Number(arg))).keys()].map(i=>i/fps);
  let i=0;
  for(const t of times){
    await page.evaluate(t=>window.render(t),t);
    const name=mode==='preview'?`t_${t.toFixed(2)}.jpg`:`f_${String(i).padStart(4,'0')}.jpg`;
    await page.screenshot({path:path.join(out,name),type:'jpeg',quality:93});
    i++;
  }
  await browser.close();
})();
