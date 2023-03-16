import { Router } from "express";
const router = Router();
import * as userCtrl from "../controllers/users.controller";
import { authJwt } from "../middlewares";
router.get("/", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.createUser);

export default router;
