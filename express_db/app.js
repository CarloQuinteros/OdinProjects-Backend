const express=require('express');
const app=express();
const PORT=3000;
const userRoute=require('./routes/users')



// register view engine
app.set('view engine', 'ejs'); 

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/',userRoute);

app.listen(PORT,() =>{
    console.log('Server is running');
})
