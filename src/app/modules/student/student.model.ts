import { Schema, model } from "mongoose";
import { TStudent, UserName } from "./student.interface";
const nameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, "First name is required"] },
  middleName: { type: String, required: [true, "Middle name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
});

const userSchema = new Schema<TStudent>({
  // id: { type: String, required: [true, "ID is required"] },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user is required"],
    unique: true,
    ref: "User",
  },
  name: nameSchema,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Gender is required"],
  },
  email: { type: String, required: [true, "Email is required"] },
  dateOfBirth: { type: String },
  phone: { type: String, required: [true, "Phone number is required"] },
  emergencyContact: { type: String },
  bloodGrp: {
    type: String,
    enum: {
      values: ["A+", "B+", "AB+"],
      message: 'Blood group must be one of "A+", "B+", "AB+"',
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  avatar: String,
});

// Create a Model.
export const Student = model<TStudent>("students", userSchema);
