import { User } from "./student.interface";
import { UsersModel } from "./student.model";

const createStudentToDB = async (student: User) => {
  const result = await UsersModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentToDB,
};
