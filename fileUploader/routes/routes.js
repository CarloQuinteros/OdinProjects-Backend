const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');



router.get('/',controller.homepage);
router.get('/signup',controller.checkNotAuthenticated,controller.signup);
router.post('/signup',controller.createNewUser);
router.get('/login',controller.checkNotAuthenticated,controller.login);
router.post('/login',controller.sigIn);
router.get('/logout',controller.logOut);
router.get('/upload',controller.upload);
router.post('/upload',controller.uploadFile.single('uploaded_file'),controller.fileToUpload);

module.exports=router;