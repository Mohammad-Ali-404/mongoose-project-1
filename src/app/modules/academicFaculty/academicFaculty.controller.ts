import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { academicFacultyServices } from "./academicFaculty.service";

const createAcademiFaculty = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await academicFacultyServices.createAcademicFacultyIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty is created successfully",
    data: result,
  });
});
const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await academicFacultyServices.getAllAcademicFacultiesFromDB();
    res.status(200).json({
      success: true,
      message: "Academic faculty are retrieved successfully",
      data: result,
    });
  }
);
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await academicFacultyServices.getSingleAcademicFacultiesFromDB(facultyId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty is retrieved successfully",
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await academicFacultyServices.updateAcademicFacultiesIntoDB(
    facultyId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty is retrieved successfully",
    data: result,
  });
});
export const AcademicFacultyController = {
  createAcademiFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
