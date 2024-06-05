import { Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await userServices.createStudentToDB(password, studentData);
    res.status(200).json({
      success: true,
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
