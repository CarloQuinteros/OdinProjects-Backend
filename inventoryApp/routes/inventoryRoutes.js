const express=require('express');
const router=express.Router();
const inventory=require('../controllers/inventory');

router.get('/',inventory.getAll);
router.get('/newCategory',inventory.newCategory);
router.get('/newItem',inventory.newItem);
router.post('/newCategory',inventory.createCategory);
router.post('/newItem',inventory.createItem);
router.post('/delete/:id',inventory.deleteItem);
router.get('/filter',inventory.ItemFiltered);
router.get('/updateItem/:id',inventory.ItemUpdated);
router.post('/updateItem/:id',inventory.UpdateItem);


module.exports=router;