import { Request, RequestHandler, Response, response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  console.log(studentData);
  const result = await userServices.createStudentToDB(password, studentData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Student create successfully",
    data: result,
  });
});

export const userControllers = {
  createStudent,
};
