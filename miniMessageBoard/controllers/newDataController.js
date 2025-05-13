const messageData=require('../db');

const newData=(req,res)=>{
    res.render('newMessages');
}

const create_message = (req, res) => {
    const { text, user } = req.body;
    console.log(req.body);
    console.log(messageData);
    messageData.push({ text, user, added: new Date() });
        res.redirect('/');
  }

module.exports={newData,create_message};