const express=require('express');
const app=express();
const port=3000;
const itemRoutes=require('./routes/inventoryRoutes');

//views
app.set('view engine','ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use('/',itemRoutes);



app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    
});
