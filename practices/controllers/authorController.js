// controllers/authorController.js

const db = require("../db");
const asyncHandler=require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");



const getAuthorById=asyncHandler(async(req,res)=>{
    const { authorId } = req.params;
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      //res.status(404).send("Author not found");
      //return;
      throw new CustomNotFoundError("Author not found");
    }
  
    res.send(`Author Name: ${author.name}`);
});


module.exports = { getAuthorById };
