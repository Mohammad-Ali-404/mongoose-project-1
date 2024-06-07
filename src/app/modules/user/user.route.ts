import express, { NextFunction, Request, Response } from "express";
import { userControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { studentValidationSchema } from "../student/student.validation";
import validateRequest from "../../middlewares/validRequest";
const router = express.Router();

// will call controller

router.post(
  "/create-student",
  validateRequest(studentValidationSchema.studentSchema),
  userControllers.createStudent
);

export const userRoutes = router;
