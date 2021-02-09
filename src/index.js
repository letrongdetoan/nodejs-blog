const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = new express();
const port = 8889;

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resocurces/views'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/news',(req,res)=>{
    res.render('news');
});
app.listen(port,()=>{
    console.log(`Sever is runing http://localhost:${port}`);
});
