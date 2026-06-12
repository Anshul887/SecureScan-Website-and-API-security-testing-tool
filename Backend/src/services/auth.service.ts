import prisma from "../config/prisma";

import bcrypt from "bcryptjs";

import {
  generateAccessToken,
  generateRefreshToken
} from "../utils/jwt";

export class AuthService {

  static async register(
    name: string,
    email: string,
    password: string
  ) {

    const existingUser =
      await prisma.user.findUnique({
        where: { email }
      });

    if (existingUser) {
      throw new Error(
        "User already exists"
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword
        }
      });

    return user;
  }

  static async login(
    email: string,
    password: string
  ) {

    const user =
      await prisma.user.findUnique({
        where: { email }
      });

    if (!user) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const valid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!valid) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const accessToken =
      generateAccessToken(user.id);

    const refreshToken =
      generateRefreshToken(user.id);

    return {
      user,
      accessToken,
      refreshToken
    };
  }
}
