import { Router }
from "express";

import {
 authenticate
}
from "../middleware/auth.middleware";

import {
 ScanController
}
from "../controllers/scan.controller";

const router = Router();

router.post(
 "/start",
 authenticate,
 ScanController.start
);

router.get(
 "/history",
 authenticate,
 ScanController.history
);

export default router;
