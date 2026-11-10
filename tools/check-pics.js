const fs=require("fs");eval(fs.readFileSync("phonics-data.js","utf8")+fs.readFileSync("word-pictures.js","utf8")+";global.R=PHONICS_RULES;global.P=WORD_PICTURES");
function picKey(w){let k=w.toLowerCase().replace(/[㄀-ㄯ]/g,"").replace(/\(.*?\)/g,"").replace(/\bmodal\b/,"").trim();
 if(P.has(k))return k; k=k.split(/[=…]/)[0].trim(); if(P.has(k))return k; k=k.split("-")[0].trim(); return k;}
const miss=new Set();for(const r of R)for(const i of r.items){if(!P.has(picKey(i.word)))miss.add(i.word)}
console.log(miss.size,[...miss].join(", "));
