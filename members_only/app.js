const express= require('express');
const app= express();
const membersRoutes=require('./routes/membersRoutes');


//views
app.set('view engine','ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use('/',membersRoutes);


app.listen(3000,()=>{
    console.log('Server running');
})