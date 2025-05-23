const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const db=require('./db/queries');
const bcrypt=require('bcryptjs');


passport.use(
  new LocalStrategy({
        usernameField:'member_username',
        passwordField:'member_password',
    },
    async (member_username, member_password, done) => {
    try {
      const { rows } = await db.validateMember(member_username);
      const user=rows[0];
     
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
       const match = await bcrypt.compare(member_password, user.member_password);

    if(!match){
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);

passport.serializeUser((user,done)=>{
    done(null,user.member_id);
})
passport.deserializeUser(async(member_id,done)=>{
    try{
        const { rows } = await db.validateId(member_id); // Asegúrate de tener esta función
        const user = rows[0];    
         done(null, user);
    }
    catch(e){
        done(e)
    }
})


module.exports=passport;