import { UsersModel } from "./student.model";

const getAllStudentFromDB = async () => {
  const result = await UsersModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await UsersModel.findOne({ id });
  console.log(result);
};
export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
