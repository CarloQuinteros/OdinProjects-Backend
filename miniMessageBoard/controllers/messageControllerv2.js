const db=require('../modules/queries');


async function getMessages(req, res) {
  const messages = await db.getAllMenssages();
  res.render("index", {messages:messages});
}

async function  newMessage(req,res){
    res.render('newMessages');
}

async function createMessagePost(req, res) {
  const { nombre,mensaje } = req.body;
  await db.insertMessage(nombre,mensaje);
  res.redirect("/");
} 

module.exports={getMessages,newMessage,createMessagePost};