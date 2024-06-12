import config from "../../config";
import { AcademicSemister } from "../academicSemister/academicSemister.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.module";
import { genarateStudentId } from "./user.utils";

const createStudentToDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  userData.role = "student";

  const admissionSemister = await AcademicSemister.findById(
    payload.admissionSemister
  );
  userData.id = await genarateStudentId(admissionSemister);

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
  } else {
  }
  return newUser;
};
export const userServices = {
  createStudentToDB,
};
