import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
import { ValidationChain } from "express-validator";

const router = express.Router();

router.get(
  "/",
  jwtCheck,
  jwtParse as express.RequestHandler,
  MyUserController.getCurrentUser as express.RequestHandler
);
router.post(
  "/",
  jwtCheck,
  MyUserController.createCurrentUser as express.RequestHandler
);

router.put(
  "/",
  jwtCheck,
  jwtParse as express.RequestHandler,
  validateMyUserRequest as ValidationChain[],
  MyUserController.updateCurrentUser as express.RequestHandler
);

export default router;
