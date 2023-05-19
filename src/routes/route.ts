import express from "express";
import { HomeController, UsersController } from "../controller/HomeController";
import { exampleMiddleware } from "../middleware/exampleMiddleware";
const router = express.Router();
router.get("/", exampleMiddleware, HomeController);
router.get("/users", UsersController);

export default router;
