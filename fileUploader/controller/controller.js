const { body, validationResult } = require("express-validator");
const prismaUser= require('../db/createuser');
const filterUser = require('../db/filterUser');
const passport = require ('passport');
const multer  = require('multer');
const path= require('path');
const prismaFile=require('../db/createFile');
const prismaFilterFile=require('../db/filterFiles');


const storage =multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"Files");
  },
  filename:(req,file,cb)=>{
    console.log(file);
    cb(null,Date.now() + path.extname(file.originalname));
  }
});

const uploadFile = multer({ storage: storage });




//const passport=require('../passport-config');

async function homepage(req,res){
    
    res.render('index',{user:req.user});
}

async function signup(req,res) {
    res.render('signup', { errors: [] });
}

async function login(req,res){
  res.render('login');
}

///validation new user

const validateUser = [
  body("email").trim()
    .notEmpty()
    .isEmail()
    .custom(async(value)=>{
       const existingEmail= await filterUser.findEmail(value);
       if (existingEmail){
        throw new Error ('This email is already been use, please choose another');
       }
    }),
  body('username').trim()
      .custom(async (value) =>{
        const existingMemberUserName= await filterUser.findUsername(value);
        if (existingMemberUserName){
          throw new Error ('This username already exists, please choose another');
          
        }
        return true;
    }),
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({min:6}).withMessage('Password must be at least 6 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[0-9]/).withMessage('Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
  body('confirmedpassword')
    .notEmpty().withMessage('Password is required')
    .isLength({min:6}).withMessage('Password must be at least 6 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[0-9]/).withMessage('Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character')
    .custom((value,{req})=>{
      if(value != req.body.password){
        throw new Error ('Passwords do not match'); 
      }
      return true;
    })
];


const  createNewUser=
  [
    validateUser,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
       //return res.status(400).json({errors:errors.array()});
        return res.status(400).render('signup',{errors:errors.array()})
      }
      const { username,email,password } = req.body;
      try {
          await prismaUser.createUser(username,email,password);
          res.redirect("/");
        } catch(err) {
         
          return (err);
        }
    
    }
  ];




const sigIn=passport.authenticate('local',{
            successRedirect:'/',
            failureRedirect:'/login',
            failureFlash:true
  });


async function logOut(req,res,next){
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
     console.log('Succesfully logged out');
  });
 
}

///validation
async function checkAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}  

async function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/'); // si ya está logueado, lo mandás al home
  }
  next();
}

async function upload(req,res){
   const userId = req.user.id;
   const files=await prismaFilterFile.filterFiles(userId);
  res.render('upload',{files});
}

async function fileToUpload(req,res){
  const userId = req.user.id;
  const file = req.file;

  console.log("userId:", userId);

  if (!file || !userId) {
    return res.status(400).send('Falta el archivo o el usuario no está logueado.');
  }
  try {
          await prismaFile.createFile(file, userId);
         
          res.redirect("/upload");
        } catch(err) {
         
        console.error(err);
        res.status(500).send('Error al guardar archivo en base de datos.');
        }
}

module.exports={homepage,
                signup,
                createNewUser,
                login,
                sigIn,
                logOut,
                checkAuthenticated,
                checkNotAuthenticated,
                upload,
                fileToUpload,
                uploadFile
              };