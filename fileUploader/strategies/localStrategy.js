const LocalStrategy = require('passport-local').Strategy;
//const passport = require('passport');
const db=require('../db/filterUser');
const bcrypt=require('bcryptjs');

module.exports=
//passport.use

  new LocalStrategy({
        usernameField:'username',
        passwordField:'password',
    },
    async (username, password, done) => {
    try {
      console.log('Resultado de findUsername:', username);  
      const user= await db.findUsername(username);
      //const { rows } = await db.findUsername(username);
      //const user=rows[0];
     
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
       const match = await bcrypt.compare(password, user.password);

    if(!match){
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
;

