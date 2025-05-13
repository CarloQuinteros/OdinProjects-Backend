const express=require('express');
const app=express();
const port=3000;
const messageRoutes=require('./routes/index');
const newData=require('./routes/newMessage');

app.listen(port,()=>{
    console.log(`Listening on PORT ${port}`);
});


// register view engine
app.set('view engine', 'ejs'); 

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/new',newData);
app.use('/',messageRoutes);