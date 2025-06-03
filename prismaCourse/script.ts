import { PrismaClient } from "./generated/prisma";
const prisma= new PrismaClient();


//Create 
/*
async function main(){
   // await prisma.user.deleteMany();
    const user= await prisma.user.create({
        data:{
            name :'Carlo',
            email :'carloquinteros@gmail.com',
            age : 24,
            userPreference:{
                create:{
                    emailUpdates:true
                }
            }

        },
        include:{
            userPreference:true
        }
    })
    console.log(user);                        
}
*/
//Create many
/*
async function main(){
   const category= await prisma.category.createMany({
        data:[{
            name:'Nordic Mythology'
        },
        {
            name:'Informative'        
        }]
    })
    console.log(category);
}
*/

// reading findUnique, findFirst , findMany
/*
async function main(){
    const users= await prisma.user.findUnique({
        where:{
            email:'carloq24@gmail.com'
        }
    })

    console.log(users);
}
*/
///FIND MANY
/*
async function main(){
    const users= await prisma.user.findMany({
        where:{
            OR:[
                {name :'Carlo',age : {gt:30}}
            ],
            
            //name :{not:'Carlo'},
            //name : {equals:'Carlo'}
            // name : {in : ['Carlo','Andrea']}
            //age : {lt:30},
            //age : {lte:30},
            //age : {gte:30},
            

            //email :{contains : '@gmail.com'},
            //email :{endsWith : '@gmail.com'}
            //email :{startsWith : '@gmail.com'}

        },
        orderBy:{
            age:"desc",
        },
       // take:2,
       //skip:1,
    })

    console.log(users);
}
*/

//UPDATE

async function main(){
    const user= await prisma.user.update({
         where:{
            email:'carloq24@homail.com'
        },
        data:{
            email:'carlito@gmail.com',
        }
    })
    console.log(user);
}

main()
    .catch(e =>{
        console.error(e.message)
    })
    .finally(async () =>{
        await prisma.$disconnect()
    })
    