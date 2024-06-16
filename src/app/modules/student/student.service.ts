import mongoose from "mongoose";
import { Student } from "./student.model";

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const result = await Student.find({
    $or: ["email", "name.firstName", "presentAddress"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  })
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
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const result = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );
    return result;
  } catch (error) {}
};
export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
