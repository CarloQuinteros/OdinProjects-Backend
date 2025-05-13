const express=require('express');
const router=express.Router();
const newDataController=require('../controllers/newDataController');

router.get('/',newDataController.newData);
router.post('/',newDataController.create_message);


module.exports=router;
