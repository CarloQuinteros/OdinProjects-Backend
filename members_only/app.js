const express= require('express');
const app= express();
const membersRoutes=require('./routes/membersRoutes');
const passport=require('passport');
const session=require('express-session');
const flash=require('express-flash');


//views
app.set('view engine','ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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


app.use('/',membersRoutes);


app.listen(3000,()=>{
    console.log('Server running');
})