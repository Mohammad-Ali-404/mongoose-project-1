import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students is retrieved successfully",
    data: result,
  });
});
const getSingleStudents: RequestHandler = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students is retrieved successfully",
    data: result,
  });
});
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
