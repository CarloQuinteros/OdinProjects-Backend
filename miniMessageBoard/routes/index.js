const express=require('express');
const router=express.Router();
//const messageController=require('../controllers/messageController');
const messageController=require('../controllers/messageControllerv2');

router.get('/',messageController.getMessages);


module.exports=router;