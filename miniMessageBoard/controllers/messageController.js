const messageData=require('../db');


const messageIndex=(req,res)=>{
    res.render("index", { title: "Mini Messageboard", messages: messageData });
}

module.exports={messageIndex};