import fs from 'node:fs';
fs.mkdirSync('dist/assets',{recursive:true});
fs.copyFileSync('index.html','dist/index.html');
for(const file of fs.readdirSync('assets')) if(fs.statSync('assets/'+file).isFile()) fs.copyFileSync('assets/'+file,'dist/assets/'+file);
console.log('Built dist/index.html and assets');
