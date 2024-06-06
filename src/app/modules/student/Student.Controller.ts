import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import { z } from "zod";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const createStudent = catchAsync(async (req, res, next) => {
  // creating a schema validation using joi
  const { student: studentData } = req.body;
  const studentValidationSchema = z.object({
    id: z.string(),
    name: z.object({
      firstName: z.string(),
      middleName: z.string(),
      lastName: z.string(),
    }),
  });
});

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: "Students are retrieved successfully",
    data: result,
  });
});
const getSingleStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Students is retrieved successfully",
      data: result,
    });
  }
);
export const studentController = {
  getAllStudents,
  getSingleStudents,
  createStudent,
};
