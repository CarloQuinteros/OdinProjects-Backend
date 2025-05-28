const express=require('express');
const app=express();
const port=3000;


//views
app.set('view engine','ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, ()=>{
    console.log('Server running');
    
})
