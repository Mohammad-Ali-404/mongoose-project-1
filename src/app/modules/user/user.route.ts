import express from "express";
import { userControllers } from "./user.controller";
const router = express.Router();

// will call controller
router.post("/create-student", userControllers.createStudent);

export const userRoutes = router;