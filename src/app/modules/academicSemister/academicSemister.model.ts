import { Schema, model } from "mongoose";
import { TAcademicSemister } from "./academicSemister.interface";
import {
  AcademicSemisterCode,
  AcademicSemisterName,
  months,
} from "./academicSemister.constant";

const academicSemisterSchema = new Schema<TAcademicSemister>({
  name: {
    type: String,
    enum: AcademicSemisterName,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemisterCode,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: months,
    required: true,
  },
});

academicSemisterSchema.pre("save", async function name(next) {
  const isSemisterExists = await AcademicSemister.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemisterExists) {
    throw new Error("Semester Already Exists");
  }
  next();
});

export const AcademicSemister = model<TAcademicSemister>(
  "academicSemister",
  academicSemisterSchema
);
