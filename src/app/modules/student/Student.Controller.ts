import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentSchema from "./student.validation";
import { z } from "zod";

const createStudent = async (req: Request, res: Response) => {
  try {
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
    // const { value, error } = studentSchema.validate(studentData);
    // console.log(error, value);
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Students are retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Students is retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studentController = {
  getAllStudents,
  getSingleStudents,
  createStudent,
};
