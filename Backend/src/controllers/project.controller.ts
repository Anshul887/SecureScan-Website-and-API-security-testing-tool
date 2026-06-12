import { Request, Response }
from "express";

import {
 ProjectService
}
from "../services/project.service";

export class ProjectController {

 static async create(
  req:Request,
  res:Response
 ) {

  const {
   name,
   targetUrl
  } = req.body;

  const project =
   await ProjectService.create(
     "",
     name,
     targetUrl
   );

  return res.status(201).json(
   project
  );
 }
}
