import express from "express";
import { studentController } from "./Student.Controller";
const router = express.Router();

// will call controller

router.get("/", studentController.getAllStudents);

router.get("/:studentId", studentController.getSingleStudents);

router.delete("/:studentId", studentController.deleteStudent);

export const studentRoute = router;
