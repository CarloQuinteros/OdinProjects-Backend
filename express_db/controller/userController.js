const db=require('../db/queries');


async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  //res.send("Usernames: " + usernames.map(user => user.username).join(", "));
  res.render("index", {usernames:usernames});
}


async function  newUsername(req,res){
    res.render('newUser');
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}  

async function deleteUsername(req, res) {
  const userId = req.params.id;
  await db.deleteUsername(userId);
  res.redirect('/');
  
} 

async function searchUser(req,res){
    const search=req.query.search;
    let result;
    result = await db.searchUser(search);
  
    console.log(result.rows);
    res.render('index',{usernames:result.rows});
}

async function deleteAll(req,res) {
    await db.deleteAll();
    res.redirect('/');
    
}


module.exports={getUsernames,newUsername,createUsernamePost,deleteUsername,searchUser,deleteAll};