import { Response }
from "express";

import prisma
from "../config/prisma";

import {
  AuthRequest
}
from "../middleware/auth.middleware";

export class UserController {

  static async profile(
    req: AuthRequest,
    res: Response
  ) {

    const user =
      await prisma.user.findUnique({
        where: {
          id: req.userId
        }
      });

    return res.json(user);
  }
}
