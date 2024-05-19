import { Schema, model, connect } from "mongoose";
import { User } from "./student.interface";

const userSchema = new Schema<User>({
  id: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  gender: ["male", "female"],
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  avatar: String,
});

// 3. Create a Model.
const User = model<User>("User", userSchema);
