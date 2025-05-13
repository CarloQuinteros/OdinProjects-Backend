const express=require('express');
const app=express();
const PORT=3000;

function myMiddleware(req, res, next) {
    // Perform some operations
    console.log("Middleware function called");
  
    // Modify the request object
    req.customProperty = "Hello from myMiddleware";
  
    // Call the next middleware/route handler
    next();
  }
  
  app.use(myMiddleware);

  app.listen(PORT,()=>{
    console.log(`Controllers- listening on port ${PORT}`);
});