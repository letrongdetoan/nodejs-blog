const express = require('express');
const app = new express();
const port = 8888;

app.get('/',(req,res)=>{
    res.render('home');
});
