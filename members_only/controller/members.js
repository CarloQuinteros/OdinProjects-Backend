const db=require('../db/queries');
const { body, validationResult } = require("express-validator");
const bcrypt=require('bcryptjs');

///validation new member

const validateMember = [
  body("member_name").trim()
    .notEmpty()
    .isAlpha().withMessage("Name must only contain letters")
    .isLength({ min: 3 }).withMessage("Name must have at least 3 characters")
    .escape(),
  body("member_last_name").trim()
    .notEmpty()
    .isAlpha().withMessage("Last Name must only contain letters")
    .isLength({ min: 3 }).withMessage("Last Name must have at least 3 characters")
    .escape(),
  body('member_username').trim()
      .custom(async (value) =>{
      
        const existingMemberUserName= await db.getAllUsername(value);
        if (existingMemberUserName){
          throw new Error ('This username already exists, please choose another');
          
        }
        return true;
    }),
  body('member_password')
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
      if(value != req.body.member_password){
        throw new Error ('Passwords dont match'); 
      }
      return true;
    })
];



async function getAll(req, res) {
  const members = await db.getAllMembers();
  res.render("index");
}


async function newMember(req,res){
  res.render('signUp');
}

const  createNewMember=
  [
    validateMember,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
       return res.status(400).render('signUp', { errors: errors.array() });
      }
      
     
      
       try {
          
          const { member_name,member_last_name,member_username,member_password } = req.body;
          const hashedPassword = await bcrypt.hash(member_password, 10);
          await db.insertNewMember( member_name,member_last_name,member_username,hashedPassword);
          res.redirect("/");
        } catch(err) {
          return (err);
         // return res.render('signUp');//, { errors: errors.array() });
        }
    
    }
  ];

    //await db.insertNewMember();
    //res.redirect("/");






module.exports={getAll,newMember,createNewMember};