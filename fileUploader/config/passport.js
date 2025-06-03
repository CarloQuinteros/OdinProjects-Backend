const passport = require('passport');
const LocalStrategy=require('./../strategies/localStrategy');
const db=require('../db/filterUser');

passport.use(LocalStrategy);


// Serialización/deserialización si usas sesiones
passport.serializeUser((user,done)=>{
    done(null,user.id);
})


passport.deserializeUser(async(id,done)=>{
    try{
        const user= await db.findUserId(id);
         done(null, user);
    }
    catch(e){
        done(e)
    }
})
