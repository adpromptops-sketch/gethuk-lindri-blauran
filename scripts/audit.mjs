import fs from 'node:fs';
const html=fs.readFileSync('index.html','utf8');
const checks=[['HTML lang',html.includes('<html lang="id"')],['Mobile viewport',html.includes('name="viewport"')],['Semantic main',html.includes('<main>')],['Labelled navigation',html.includes('aria-label="Navigasi utama"')],['Demo notice',html.includes('simulasi')],['No fake reviews',!html.includes('5000+ pelanggan')],['Reduced motion',html.includes('prefers-reduced-motion')],['Visible focus',html.includes(':focus-visible')],['Dialog focus',html.includes('focus()')],['Three.js fallback',html.includes('import(')],['Three packages',html.includes("name:'Satuan'")&&html.includes("name:'Box 6'")&&html.includes("name:'Box 12'")]];
for(const [name,pass] of checks) console.log((pass?'PASS':'FAIL')+' '+name);
if(checks.some(([,pass])=>!pass))process.exitCode=1;
