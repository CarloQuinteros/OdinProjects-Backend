const express=require('express');
const router=express.Router();
const controllerMembers=require('../controller/members');

router.get('/',controllerMembers.getAll);
router.get('/signup',controllerMembers.newMember);
router.post('/signup',controllerMembers.createNewMember);


module.exports=router;