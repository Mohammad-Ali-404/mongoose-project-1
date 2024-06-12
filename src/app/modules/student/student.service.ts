import { Student } from "./student.model";

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  console.log(result);
};
export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
