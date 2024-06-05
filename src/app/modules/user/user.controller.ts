import { Request, RequestHandler, Response, response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await userServices.createStudentToDB(password, studentData);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student create successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userControllers = {
  createStudent,
};
