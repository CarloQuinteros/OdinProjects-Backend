const express=require('express');
const app=express();
const PORT=3000;

/*
app.use((req, res) => {
    // This works and this ends the request-response cycle
    res.send("Hello");
  
    // However, it does not exit the function so this will still run
    console.log('will still run!!');
  
    // This will then throw an error that we cannot send again after sending to the client already
    res.send("Bye");
  });

  app.listen(PORT,()=>{
    console.log(`Controllers- listening on port ${PORT}`);
});


// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
  });
  */

  function middleware1(req, res, next) {
    console.log("Middleware 1");
    //next(); // Pass control to the next middleware
  };
  
  function middleware2(req, res, next) {
    console.log("Middleware 2");
    res.send("Response from Middleware 2");
    // request-response cycle ends here
  };
  
  function middleware3(req, res, next) {
    console.log("Middleware 3");
    res.send("Response from Middleware 3");
  };

  app.listen(PORT,()=>{
    console.log(`Controllers- listening on port ${PORT}`);
  }); 
  
  app.use(middleware1);
  app.use(middleware2);
  app.use(middleware3);
  // will log `Middleware 1` -> `Middleware 2` and send a response with the text "Response from Middleware 2"
  