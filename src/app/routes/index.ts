import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { studentRoute } from "../modules/student/student.route";
import { AcademicSemisterRoutes } from "../modules/academicSemister/academicSemister.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/students",
    route: studentRoute,
  },
  {
    path: "/academic-semisters",
    route: AcademicSemisterRoutes,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
