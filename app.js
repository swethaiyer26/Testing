const express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('Hello World')
})
app.listen(8080,function(){
    console.log('App listening on port 8080')
})
module.exports={app};