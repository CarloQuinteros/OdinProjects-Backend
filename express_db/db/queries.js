const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsername(id){
  await pool.query('DELETE FROM usernames where id=$1',[id]);
}

async function searchUser(search){
  return await pool.query("SELECT * from usernames where username like $1",[`%${search}%`]);
}

async function deleteAll(){
  await pool.query('DELETE FROM usernames');
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteUsername,
  searchUser,
  deleteAll
};
