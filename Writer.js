const fs = require('fs');
fs.writeFile('test', 'Assalamu Yalaikum', (err, data)=>{});
fs.readFile('test', 'utf8', (err, data)=>{
    console.log(data);
})