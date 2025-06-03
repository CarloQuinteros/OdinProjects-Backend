const express=require('express');
const app=express();
const port=3000;
const passport=require('passport');
const session=require('express-session');
const flash=require('express-flash');
const routes=require('./routes/routes')
require ('./config/passport')
const path = require('path');

//views
app.set('view engine','ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ✅ Esto hace pública la carpeta 'Files'
app.use('/Files', express.static(path.join(__dirname, 'Files')));


//Session & passport
app.use(session({ secret: process.env.SESSION_SECRET,
                  resave: false,
                  saveUninitialized: false 
                }
            )
        );
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.use('/',routes);

app.listen(port, ()=>{
    console.log('Server running');
    
})
