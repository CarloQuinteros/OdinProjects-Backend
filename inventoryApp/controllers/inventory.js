const db=require('../modules/queries');


async function getAll(req, res) {
  const items = await db.getAll();
  res.render("index", {items:items});
}

async function  newCategory(req,res){
    res.render('newCategory');
}

async function newItem(req,res){
  const category= await db.getAllCategories();
  res.render('newItem',{category:category});
}

async function createCategory(req,res){
  const { category_name } = req.body;
  await db.insertCategory(category_name);
  res.redirect("/");
}

async function createItem(req,res){
  const{item_name,price,quantity,category_id}=req.body;
  await db.insertItem(item_name,price,quantity,category_id);
  res.redirect("/");
}


async function deleteItem(req, res) {
  const itemId = req.params.id;
  console.log(itemId);
  await db.deleteItem(itemId);
  res.redirect('/');
  
} 

async function ItemFiltered(req,res){
    const filter=req.query.filter;
    let result;
    result = await db.filterItem(filter);
    res.render('index',{items:result.rows});
}

async function ItemUpdated(req,res){
  const filterId=req.params.id;
  const filteredItem=await db.filterItemId(filterId);
  const items=filteredItem.rows[0];
   const category = await db.getAllCategories();
  res.render('updateItem',{items:items,category:category});
}

async function UpdateItem(req,res){
  const item_id = req.params.id;
  const{item_name,price,quantity,category_id}=req.body;

  console.log(req.body);
  await db.updateItem(item_name,price,quantity,category_id,item_id);
  res.redirect("/");
}

module.exports={
  getAll,
  newCategory,
  newItem,
  createCategory,
  createItem,
  deleteItem,
  ItemFiltered,
  ItemUpdated,
  UpdateItem
};