import { Response }
from "express";

import {
 AuthRequest
}
from "../middleware/auth.middleware";

import {
 ScanService
}
from "../services/scan.service";

export class ScanController {

 static async start(
  req:AuthRequest,
  res:Response
 ) {

  const {
   projectId
  } = req.body;

  const result =
   await ScanService.start(
    req.userId!,
    projectId
   );

  return res.json(result);
 }

 static async history(
  req:AuthRequest,
  res:Response
 ) {

   return res.json({
     message:
      "Coming soon"
   });
 }
}
