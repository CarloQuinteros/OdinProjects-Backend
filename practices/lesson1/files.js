const fs=require('fs');


//read file
fs.readFile('./docs/test.txt',(err,data)=>{//asyncrono
    if(err){
        console.log(err)
    }console.log(data.toString());// just buffer returns data to see string add .toString
});


//writing file

fs.writeFile('./docs/test.txt','Hello nordic',()=>{
    console.log('file was written');
});

fs.writeFile('./docs/test2.txt','Hello Odin',()=>{
    console.log('file was written');
});

//directories
if(!fs.existsSync('./docs/assets')){
    fs.mkdir('./docs/assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
}else{
    fs.rmdir('./docs/assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}


///delete file

fs.rm('./test.js',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('file deleted');
})