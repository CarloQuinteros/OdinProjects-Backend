const express=require('express');
const router=express.Router();
const users=require('../controller/userController');


router.get('/',users.getUsernames);
router.get('/search',users.searchUser);
router.get('/new',users.newUsername);
router.post('/new',users.createUsernamePost);
router.post('/delete/:id',users.deleteUsername);
router.post('/delete/',users.deleteAll);


module.exports=router;