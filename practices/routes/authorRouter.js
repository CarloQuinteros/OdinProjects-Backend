// routes/authorRouter.js
const { Router } = require("express");
const { getAuthorById } = require('../controllers/authorController');


const authorRouter = Router();

// ... other route handlers
authorRouter.get("/:authorId", getAuthorById);



authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = authorRouter;
