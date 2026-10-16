import fs from 'node:fs';
const html=fs.readFileSync('index.html','utf8');
const tests=[['HTML lang',/<html lang="id"/.test(html)],['Mobile viewport',/name="viewport"/.test(html)],['Semantic main',/<main[\\s>]/.test(html)],['Labelled navigation',/<nav[^>]*aria-label=/.test(html)],['Demo notice',/simulasi/i.test(html)],['No fake reviews',!/testimoni pelanggan|5000\\+ pelanggan|rating 5\\/5/i.test(html)],['Reduced motion',/prefers-reduced-motion/.test(html)],['Visible focus',/:focus-visible/.test(html)],['Dialog focus',/focus\\(\\)/.test(html)],['Three.js fallback',/import\\s*\\(/.test(html)],['Three packages',/name:'Satuan'/.test(html)&&/name:'Box 6'/.test(html)&&/name:'Box 12'/.test(html)]];
for(const [name,ok] of tests)console.log((ok?'PASS':'FAIL')+' '+name);
if(tests.some(([,ok])=>!ok))process.exitCode=1;
