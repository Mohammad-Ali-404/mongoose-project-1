import { Schema, model } from "mongoose";
import { User, UserName } from "./student.interface";

const nameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const userSchema = new Schema<User>({
  id: { type: String, required: true },
  name: nameSchema,
  gender: ["male", "female"],
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  phone: { type: String, required: true },
  emergencyContact: { type: String },
  bloodGrp: ["A+", "B+", "AB+"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  avatar: String,
});

// 3. Create a Model.
export const UsersModel = model<User>("students", userSchema);
