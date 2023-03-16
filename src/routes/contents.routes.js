import { Router } from "express";
const router = Router();
import * as contentCtrl from "../controllers/contents.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  contentCtrl.createContent
);
router.get("/", contentCtrl.getContents);
router.get("/:contentId", contentCtrl.getContentById);
router.put("/:contentId", [authJwt.verifyToken,authJwt.isModerator || authJwt.isAdmin], contentCtrl.updateContentById);
router.delete(
  "/:contentId",
  [authJwt.verifyToken, authJwt.isAdmin],
  contentCtrl.deleteContentById
);

export default router;
