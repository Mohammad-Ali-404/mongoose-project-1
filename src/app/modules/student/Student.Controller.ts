import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";
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
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: "Students is deleted successfully",
    data: result,
  });
});
export const studentController = {
  getAllStudents,
  getSingleStudents,
  deleteStudent,
};
