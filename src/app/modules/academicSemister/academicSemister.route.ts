import express from "express";
import { AcademicSemisterController } from "./academicSemister.controller";
import validateRequest from "../../middlewares/validRequest";
import { AcademicSemisterValidation } from "./academicSemister.validation";
const router = express.Router();

// will call controller
router.post(
  "/create-academic-semister",
  validateRequest(
    AcademicSemisterValidation.createAcademicSemisterValidationSchema
  ),
  AcademicSemisterController.createAcademicSemister
);
router.get("/", AcademicSemisterController.getAllAcademicSemister);

router.get(
  "/:semisterId",
  AcademicSemisterController.getSingleAcademicSemister
);

router.patch(
  "/:semisterId",
  validateRequest(
    AcademicSemisterValidation.updateAcademicSemisterValidationSchema
  ),
  AcademicSemisterController.updateAcademicSemister
);

export const AcademicSemisterRoutes = router;
