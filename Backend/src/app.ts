import express from "express";
import cors from "cors";

import authRoutes
from "./routes/auth.routes";

import userRoutes
from "./routes/user.routes";
import helmet from "helmet";
import morgan from "morgan";

app.use(helmet());

app.use(morgan("dev"));
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message:
      "SecureScan API"
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/users",
  userRoutes
);

export default app;
