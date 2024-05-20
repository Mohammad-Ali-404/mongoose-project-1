import { User } from "./student.interface";
import { UsersModel } from "./student.model";

const createStudentToDB = async (student: User) => {
  const result = await UsersModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await UsersModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await UsersModel.findOne({ id });
  console.log(result);
};
export const StudentServices = {
  createStudentToDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
