import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { academicSemisterServices } from "./academicSemister.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createAcademicSemister = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await academicSemisterServices.createAcademicSemisterIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semister is created successfully",
    data: result,
  });
});

export const AcademicSemisterController = {
  createAcademicSemister,
};
