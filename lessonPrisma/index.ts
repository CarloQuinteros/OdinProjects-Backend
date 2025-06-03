import { PrismaClient } from "./generated/prisma";

const prisma= new PrismaClient();

async function main(){
    /*const user = await prisma.user.create({
        data : {
            name : 'Carlo',
            email: 'ca@gmail.com',
        },
    });
    
    const users= await prisma.user.findMany();
    console.log(users);
    */

    /*const article = await prisma.article.create({
        data:{
            title:'Jaque al psicoanalista',
            body : 'This is the continue from the psicoanalista',
            author: {
                connect:{
                    id:1,
                }
            }
        }
    });
    */
/*
    const user = await prisma.user.create({
        data :{
            email:'saraKatunga@gmail.com',
            name:'Sara Katunga',
            articles:{
                create :{
                    title:'Sara first article',
                    body : 'This is the fist article', 
                }
            }
        }
    })
    */
   
   /* const articles = await prisma.article.findMany();
    const users = await prisma.user.findMany();
*/
  /* 
const users = await prisma.user.findMany({
        include:{
            articles:true,
        },
    });
    console.log(users);


    users.forEach((user) => {
    console.log(`User: ${user.name}, Email: ${user.email}`);
    console.log('Articles:');
    user.articles.forEach((article) => {
        console.log(`- Title: ${article.title}, Body: ${article.body}`);
    });
    console.log('\n');
    });
    */
   ///update data
   /*
   const user = await prisma.user.update({
    where :{
        id:1
    },
    data:{
        name:'Mr Carlo',
    }
   })
*/
/*
   //Delete data
   const article = await prisma.article.delete({
    where :{
        id:1,
    }
   })
   */
}
main()
    .then(async () =>{
        await prisma.$disconnect();
    })
    .catch(async (e)=>{
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });