import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { studentRoute } from "../modules/student/student.route";

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
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
