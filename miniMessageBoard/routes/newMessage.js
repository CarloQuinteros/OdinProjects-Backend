const express=require('express');
const router=express.Router();
//const newDataController=require('../controllers/newDataController');
const newDataController=require('../controllers/messageControllerv2');

router.get('/',newDataController.newMessage);
router.post('/',newDataController.createMessagePost);


module.exports=router;
