import { Router }
from "express";

import fs from "fs";

const router = Router();

router.get(
 "/:file",

 (req,res)=>{

  const file =
   `reports/${req.params.file}`;

  if(!fs.existsSync(file)){

   return res.status(404)
   .json({
    message:"Not found"
   });
  }

  res.download(file);
 }
);

export default router;
