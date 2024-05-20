import express from "express";
import { studentController } from "./Student.Controller";
const router = express.Router();

// will call controller
router.post("/create-student", studentController.createStudent);

router.get("/", studentController.getAllStudents);

router.get("/:studentId", studentController.getSingleStudents);

export const studentRoute = router;
