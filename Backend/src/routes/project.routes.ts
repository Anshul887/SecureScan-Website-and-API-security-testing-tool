import { Router }
from "express";

import {
 ProjectController
}
from "../controllers/project.controller";

import {
 authenticate
}
from "../middleware/auth.middleware";

const router = Router();

router.post(
 "/",
 authenticate,
 ProjectController.create
);

export default router;
