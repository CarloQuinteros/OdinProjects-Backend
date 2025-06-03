const { PrismaClient }=require('@prisma/client')
const prisma= new PrismaClient();
const folderId = 1;


async function createFile(file, userId){
    return await prisma.file.create({
        data :{
            name: file.originalname,
            url: `/Files/${file.filename}`,
            size: file.size,
            userid: userId,
            folderid: folderId
            
        }
    })
}

 
module.exports={
                createFile
                }    