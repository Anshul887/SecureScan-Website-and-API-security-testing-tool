import { Request,
Response,
NextFunction }
from "express";

import jwt from "jsonwebtoken";

import { env }
from "../config/env";

export interface AuthRequest
extends Request {

  userId?: string;
}

export const authenticate =
(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  const header =
    req.headers.authorization;

  if (!header) {

    return res.status(401)
      .json({
        message:
          "Token missing"
      });
  }

  const token =
    header.split(" ")[1];

  try {

    const decoded =
      jwt.verify(
        token,
        env.JWT_SECRET
      ) as any;

    req.userId =
      decoded.userId;

    next();

  } catch {

    return res.status(401)
      .json({
        message:
          "Invalid token"
      });
  }
};
