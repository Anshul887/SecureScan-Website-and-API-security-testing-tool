import prisma
from "../config/prisma";

import {
 scanHeaders
}
from "../scanners/headersScanner";

import {
 sslScan
}
from "../scanners/sslScanner";

import {
 corsScan
}
from "../scanners/corsScanner";

export class ScanService {

 static async start(
  userId:string,
  projectId:string
 ) {

  const project =
   await prisma.project.findUnique({
    where:{
      id:projectId
    }
   });

  if(!project)
   throw new Error(
     "Project not found"
   );

  const scan =
   await prisma.scan.create({
    data:{
      projectId,
      userId,
      status:"RUNNING"
    }
   });

  const findings = [

   ...(await scanHeaders(
      project.targetUrl
   )),

   ...(await sslScan(
      project.targetUrl
   )),

   ...(await corsScan(
      project.targetUrl
   ))

  ];

  for(
   const finding
   of findings
  ){

   await prisma.scanResult.create({

    data:{

     scanId:scan.id,

     title:finding.title,

     description:
      finding.description,

     severity:
      finding.severity as any,

     recommendation:
      finding.recommendation

    }

   });
  }

  await prisma.scan.update({

   where:{
    id:scan.id
   },

   data:{
    status:"COMPLETED",

    completedAt:
      new Date(),

    score:
      Math.max(
       0,
       100 -
       findings.length * 10
      )
   }

  });

  return scan;
 }
}
