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
const getAllAcademicSemister = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await academicSemisterServices.getAllAcademicSemisterFromDB();
    res.status(200).json({
      success: true,
      message: "Academic Semister are retrieved successfully",
      data: result,
    });
  }
);
const getSingleAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params;
  const result =
    await academicSemisterServices.getSingleAcademicSemisterFromDB(semisterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semister is retrieved successfully",
    data: result,
  });
});

const updateAcademicSemister = catchAsync(async (req, res) => {
  const { semisterId } = req.params;
  const result = await academicSemisterServices.updateAcademicSemisterIntoDB(
    semisterId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semister is retrieved successfully",
    data: result,
  });
});
export const AcademicSemisterController = {
  createAcademicSemister,
  getAllAcademicSemister,
  getSingleAcademicSemister,
  updateAcademicSemister,
};
