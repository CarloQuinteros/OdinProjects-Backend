const { PrismaClient }=require('@prisma/client')
const prisma= new PrismaClient();

async function findUsername(username){
    return await prisma.user.findUnique({
        where :{
            username:username
        }
    })
}

async function findEmail(email){
    return await prisma.user.findUnique({
        where :{
            email:email
        }
    })
}

async function findUserId(id){
    return await prisma.user.findUnique({
        where :{
            id
        }
    })
}


module.exports={findUsername,findEmail,findUserId}