import mongoose from "mongoose";
import config from "../../config";
import { AcademicSemister } from "../academicSemister/academicSemister.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { User } from "./user.module";
import { genarateStudentId } from "./user.utils";

const createStudentToDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);
  userData.role = "student";

  const admissionSemister = await AcademicSemister.findById(
    payload.admissionSemister
  );

  if (!admissionSemister) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid semester ID");
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    userData.id = await genarateStudentId(admissionSemister);

    // Create a user
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // Create a student
    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
    }

    await session.commitTransaction();
    return newStudent[0];
  } catch (error) {
    await session.abortTransaction();
    throw error; // Re-throw the error after aborting the transaction
  } finally {
    await session.endSession();
  }
};

export const userServices = {
  createStudentToDB,
};
