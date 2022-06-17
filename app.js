const express=require('express');
const path =require("path");
const fs=require('fs')
const app= express();
const port=8080;
const mongoose=require('mongoose');


const dbURL='mongodb+srv://jyotis0401:0CkmPzzkz9hydZHv@cluster0.jdogh.mongodb.net/nodetut?retryWrites=true&w=majority';

app.use(express.static('static'));
app.use(express.urlencoded())

mongoose.connect( dbURL,{useNewUrlParser:true ,useUnifiedTopology:true})
 .then((result) => console.log('connected to db')
 .catch((err) => console.log(err));



app.set('view engine','pug') //set template engine as pug
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    // const con="This is the best content oon the internet so use it wisely";
   const params={}
    res.status(200).render('index.pug',params)
    // res.status(200).render('home.pug',params)
})
app.get('/contact',(req,res)=>{
    // const con="This is the best content oon the internet so use it wisely";
   const params={}
    // res.status(200).render('index.pug',params)
    res.status(200).render('contact.pug',params)
})






app.listen(port,()=>{
    console.log(`The application srarted successfully on port ${port}`)
}) 