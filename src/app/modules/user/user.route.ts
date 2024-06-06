import express, { NextFunction, Request, Response } from "express";
import { userControllers } from "./user.controller";
const router = express.Router();

// will call controller
const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log("i am a shena bahini");
};
router.post("/create-student", shenaBahini, userControllers.createStudent);

export const userRoutes = router;
