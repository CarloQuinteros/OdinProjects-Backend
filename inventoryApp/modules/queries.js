const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function getAllCategories(){
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

async function getAll(){
  const { rows } = await pool.query("select a.*,b.category_name from items a join category b on a.category_id=b.category_id order by a.item_id;");
  return rows; 
}

async function insertCategory(category_name){
  await pool.query('Insert into category(category_name) values ($1)',[category_name]);
}

async function insertItem(item_name,price,quantity,category_id){
  await pool.query('Insert into items(item_name,price,quantity,category_id) values ($1,$2,$3,$4)',[item_name,price,quantity,category_id]);
}
async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteItem(id){
  await pool.query('DELETE FROM items where item_id=$1',[id]);
}


async function filterItem(filter){
  return await pool.query("select a.*,b.category_name from items a join category b on a.category_id=b.category_id where a.item_name ilike $1",[`%${filter}%`]);
}

async function updateItem(item_name,price,quantity,category_id,item_id){
  await pool.query("update items set item_name=$1,price=$2,quantity=$3,category_id=$4 where item_id=$5",[item_name,price,quantity,category_id,item_id])
}

async function filterItemId(id){
  return await pool.query('select * from items where item_id=$1',[id]);
}

module.exports = {
  getAllItems,
  getAllCategories,
  getAll,
  insertCategory,
  insertItem,
  insertUsername,
  deleteItem,
  filterItem,
  updateItem,
  filterItemId
};