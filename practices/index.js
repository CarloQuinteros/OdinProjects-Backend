const express= require("express");
const app=express();



//app.get("/",(req,res)=> res.send('./proyecto/pages/index.html'));
/*
app.get("/",(req,res)=> {
    res.sendFile('./proyecto/odin-node/pages/index.html',{root: __dirname });
});
    
app.get("/about",(req,res)=> {
    res.sendFile('./proyecto/odin-node/pages/about.html',{root: __dirname });
});

//redirect

app.get("/about-us",(req,res)=>{
    res.redirect('/about')
});

///odin proyect 

app.get("/messages", (req, res) => res.send("This is where you can see any messages."));

/**
 * GET /odin/messages will have this log
 * { username: 'odin' }
 *
 * GET /theodinproject79687378/messages would instead log
 * { username: 'theodinproject79687378' }
 */
/*
app.get("/:username/messages", (req, res) => {
    console.log("Params",req.params);
    console.log("Query:", req.query);
    res.end();
  });
  
  /**
   * GET /odin/messages/79687378 will have this log
   * { username: "odin", messageId: "79687378" }
   */
/*
  app.get("/:username/messages/:messageId", (req, res) => {
    console.log(req.params);
    res.end();
  });


//404 page
app.use((req,res)=>{
    res.sendFile('./proyecto/odin-node/pages/404.html',{root: __dirname });
})
*/
const PORT=8000;

app.listen(PORT,()=>{
    console.log(`My first express app- listening on port ${PORT}`);
});


const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

/*

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
  });
*/