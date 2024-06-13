import express from "express";
import validateRequest from "../../middlewares/validRequest";
import { academicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";
const router = express.Router();

// will call controller
router.post(
  "/create-academic-faculty",
  validateRequest(
    academicFacultyValidation.createacademicFacultyValidationSchema
  ),
  AcademicFacultyController.createAcademiFaculty
);
router.get("/", AcademicFacultyController.getAllAcademicFaculty);

router.get("/:facultyId", AcademicFacultyController.getSingleAcademicFaculty);

router.patch(
  "/:facultyId",
  validateRequest(
    academicFacultyValidation.updateacademicFacultyValidationSchema
  ),
  AcademicFacultyController.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
