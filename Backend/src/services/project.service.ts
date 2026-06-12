import prisma
from "../config/prisma";

export class ProjectService {

 static async create(
   userId:string,
   name:string,
   targetUrl:string
 ) {

   return prisma.project.create({
     data:{
       name,
       targetUrl
     }
   });
 }
}
