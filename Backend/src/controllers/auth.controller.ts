import { Request, Response } from "express";

import { AuthService }
from "../services/auth.service";

import {
  registerSchema,
  loginSchema
}
from "../validators/auth.validator";

export class AuthController {

  static async register(
    req: Request,
    res: Response
  ) {

    try {

      const data =
        registerSchema.parse(
          req.body
        );

      const user =
        await AuthService.register(
          data.name,
          data.email,
          data.password
        );

      return res.status(201).json({
        success: true,
        user
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  static async login(
    req: Request,
    res: Response
  ) {

    try {

      const data =
        loginSchema.parse(
          req.body
        );

      const result =
        await AuthService.login(
          data.email,
          data.password
        );

      return res.json(result);

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}
