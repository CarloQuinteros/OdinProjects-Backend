const { PrismaClient }=require('@prisma/client')
const prisma= new PrismaClient();
const bcrypt = require('bcryptjs');

async function createUser(username,email,password){
     const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
        data :{
            username,
            email,
            password:hashedPassword,
            
        }
    })
}

/*createUser()
    .catch(e =>{
        console.error(e.message)
    })
    .finally(async () =>{
        await prisma.$disconnect()
    })
  */  
module.exports={
                createUser
                }    