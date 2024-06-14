import { Student } from "./student.model";

const getAllStudentFromDB = async () => {
  const result = await Student.find()
    // .populate("admissionSemister")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id).populate({
    path: "academicDepartment",
    populate: {
      path: "academicFaculty",
    },
  });
  console.log(result);
};
export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
