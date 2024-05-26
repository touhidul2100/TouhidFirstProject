var express=require('express');
var app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');
const port=3000;
let pLanguages=[];
app.get('/',function(req,res){
    res.render('index',{plNames:pLanguages});
});
app.get('/contact',function(req,res){
    res.render('contact');
});
app.post('/',function(req,res){
    var pLanguage=req.body.pLanguage;
    pLanguages.push(pLanguage);
    res.redirect('/');
});
app.listen(port,function(){
    console.log('Server is running on port='+port);
});