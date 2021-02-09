const express = require('express');
const app = new express();
const port = 3000;

app.get('/',(req,res)=>{
    var a=1;
    var b = 2;
    var c= b+a;
    res.send('Hello word');
});

app.listen(port,()=>{
    console.log(`Sever is runing http://localhost:${port}`);
});
