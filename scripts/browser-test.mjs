import {chromium} from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost');const file=path.resolve(root,'.'+(url.pathname==='/'?'/index.html':url.pathname));if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}try{const bytes=fs.readFileSync(file);res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.svg')?'image/svg+xml':'text/html');res.end(bytes)}catch{res.writeHead(404).end()}});
await new Promise(ok=>server.listen(0,'127.0.0.1',ok));
const port=server.address().port;
let browser,failed=false;
try{
 browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 for(const [name,viewport] of [['desktop',{width:1440,height:900}],['tablet',{width:768,height:1024}],['mobile',{width:390,height:844}],['small-mobile',{width:320,height:700}]]){
  const context=await browser.newContext({viewport,deviceScaleFactor:1, reducedMotion:'reduce'});
  const page=await context.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('https://cdn.jsdelivr.net/**',route=>route.abort());
  await page.goto('http://127.0.0.1:'+port+'/',{waitUntil:'domcontentloaded'});
  await page.locator('#catalog .card').first().waitFor();
  const metrics=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,innerWidth:window.innerWidth,css:!![...document.styleSheets].find(s=>s.href?.includes('styles.css')),cards:document.querySelectorAll('#catalog .card').length}));
  if(metrics.scrollWidth>metrics.innerWidth+2)throw Error(name+' horizontal overflow '+JSON.stringify(metrics));
  if(!metrics.css||metrics.cards!==3)throw Error(name+' assets/catalog failed '+JSON.stringify(metrics));
  await page.locator('#catalog [data-detail="box6"]').first().click();
  await page.locator('#orderQty').fill('2');await page.locator('#orderQty').dispatchEvent('change');
  await page.locator('#modalAdd').click();
  if(!(await page.locator('#cart').getAttribute('class')).includes('show'))throw Error(name+' cart not opened');
  await page.locator('#checkout').click();
  const summary=await page.locator('#orderSummary').innerText();
  if(!summary.includes('Box 6')||!summary.includes('36.000'))throw Error(name+' checkout wrong '+summary);
  await page.locator('#cartItems [data-delta="1"]').first().click();
  await page.locator('#checkout').click();
  const updated=await page.locator('#orderSummary').innerText();
  if(!updated.includes('54.000'))throw Error(name+' quantity total wrong '+updated);
  if(errors.length)throw Error(name+' JS errors '+errors.join(' | '));
  console.log('PASS browser '+name+' '+JSON.stringify(metrics));
  await context.close();
 }
}catch(e){failed=true;console.error('FAIL browser',e.stack||e)}finally{if(browser)await browser.close();await new Promise(ok=>server.close(ok))}
if(failed)process.exitCode=1;
