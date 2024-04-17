import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function adding(work:string) {
    const user=await prisma.user.create({
        data:{
            work
        },
    }
    )

    
}
export async function reading(){
    const user=await prisma.user.findMany();
    await user.sort(function(a,b){return a.id-b.id});
    return user;
    
}

export async function updating(id:number,work:string) {
    const users=await prisma.user.update(
    
        { 
          
          where:{
            id,
          },
          data:{
            work
          }
    
          
        }
       
      );

    
}
export async function deleting(id:number) {
  const deleteUsers = await prisma.user.delete({
    where:{
      id
    }
  })

    
}


