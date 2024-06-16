import mongoose from "mongoose";
import { Student } from "./student.model";

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchQuery = Student.find({
    $or: ["email", "name.firstName", "presentAddress"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });

  // filtering
  const excludeFields = ["searchTerm", "sort", "limit"];
  excludeFields.forEach((el) => delete queryObj[el]);
  const filterQuery = await searchQuery
    .find(queryObj)
    // .populate("admissionSemister")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });

  let sort = "-createAt";

  if (query.sort) {
    sort = query.sort as string;
  }

  const sortQuery = await filterQuery.sort();

  let limit = 1;
  if (query.limit) {
    limit = query.limit;
  }

  const limitQuery = await sortQuery.limit(limit);
  return limitQuery;
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
