const express=require('express');
const router=express.Router();
const controllerMembers=require('../controller/members');

router.get('/',controllerMembers.getAll);
router.get('/signup',controllerMembers.checkNotAuthenticated,controllerMembers.newMember);
router.post('/signup',controllerMembers.createNewMember);
router.get('/login',controllerMembers.checkNotAuthenticated,controllerMembers.Login);
router.post('/login',controllerMembers.sigIn)
router.get('/newmessage',controllerMembers.checkAuthenticated,controllerMembers.newMessage);
router.post('/newmessage',controllerMembers.insertMessage);
router.get('/logout',controllerMembers.logOut);


module.exports=router;