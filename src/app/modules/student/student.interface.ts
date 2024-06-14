import { Types } from "mongoose";

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: UserName;
  gender: "male" | "female";
  email: string;
  dateOfBirth?: Date;
  phone: string;
  emergencyContact?: string;
  bloodGrp?: "A+" | "B+" | "AB+";
  presentAddress: string;
  permanentAddress: string;
  admissionSemister: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  avatar?: string;
};
