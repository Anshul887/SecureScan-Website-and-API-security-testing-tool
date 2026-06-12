import { Worker }
from "bullmq";

import redis
from "../config/redis";

import {
 ScanService
}
from "../services/scan.service";

new Worker(

 "security-scan",

 async(job)=>{

  await ScanService.start(
   job.data.userId,
   job.data.projectId
  );

 },

 {
  connection: redis
 }

);
