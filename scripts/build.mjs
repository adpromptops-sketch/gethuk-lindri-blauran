import fs from 'node:fs';
fs.mkdirSync('dist',{recursive:true});
fs.copyFileSync('index.html','dist/index.html');
console.log('Built dist/index.html');
