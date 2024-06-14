import mongoose from "mongoose";
import config from "../../config";
import { AcademicSemister } from "../academicSemister/academicSemister.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.module";
import { genarateStudentId } from "./user.utils";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createStudentToDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  userData.role = "student";

  const admissionSemister = await AcademicSemister.findById(
    payload.admissionSemister
  );
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    userData.id = await genarateStudentId(admissionSemister);
    // create a student transaction -1
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create a student transaction -2

    const newStudent = await Student.create([payload], { session });
    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};
export const userServices = {
  createStudentToDB,
};
