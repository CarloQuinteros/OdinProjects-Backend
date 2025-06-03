const {PrismaClient}=require('@prisma/client');
const prisma= new PrismaClient();

async function filterFiles(userid){
    return await prisma.File.findMany({
        where:{
            userid:userid
        },
        include:{
            user:{
                select :{
                    username:true,
                    email:true,
                }
            }
        }
    })
}

module.exports={filterFiles};