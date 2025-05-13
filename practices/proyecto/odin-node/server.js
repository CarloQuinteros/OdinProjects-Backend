const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   


 // set header content type
 res.setHeader('Content-Type', 'text/html');

  //res.write('<p>hello, ninjas</p>');
  //res.write('<p>hello again, ninjas</p>');
  //res.end();


  //send hmtl file option 1
  /*fs.readFile('./pages/index.html',(err,data)=>{
    if(err){
        console.log(err)
    }
    res.write(data);
    res.end();
  })
    */
  //routing

  let path='./pages/';
  switch(req.url){
    case '/': 
            path+='index.html';
            res.statusCode=200;
            break;
    case '/about':
            path+='about.html';        
            res.statusCode=200;
            break;
    case '/contact':
            path+='contact-me.html';        
            res.statusCode=200;
            break;        
    default:
            path+='404.html';
            res.statusCode=404;
            break;        

  }

  fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    res.write(data);
    res.end();
  })

})
 

// localhost is the default value for 2nd argument
server.listen(8000, 'localhost', () => {
    console.log('listening for requests on port 8000');
  });