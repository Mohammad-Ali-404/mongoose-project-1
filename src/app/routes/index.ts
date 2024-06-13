import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { studentRoute } from "../modules/student/student.route";
import { AcademicSemisterRoutes } from "../modules/academicSemister/academicSemister.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";

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
  {
    path: "/academic-departments",
    route: AcademicDepartmentRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
