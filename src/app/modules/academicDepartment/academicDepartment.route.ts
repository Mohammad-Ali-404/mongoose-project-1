import express from "express";
import { academicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDepartment.controller";
import validateRequest from "../../middlewares/validRequest";
const router = express.Router();

// will call controller
router.post(
  "/create-academic-department",
  // validateRequest(
  //   academicDepartmentValidation.createacademicDepartmentValidationSchema
  // ),
  AcademicDepartmentController.createAcademiDepartment
);
router.get("/", AcademicDepartmentController.getAllAcademicDepartment);

router.get(
  "/:departmentId",
  AcademicDepartmentController.getSingleAcademicDepartment
);

router.patch(
  "/:departmentId",
  validateRequest(
    academicDepartmentValidation.updateacademicDepartmentValidationSchema
  ),
  AcademicDepartmentController.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
