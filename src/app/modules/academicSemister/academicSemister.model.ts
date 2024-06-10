import { Schema, model } from "mongoose";
import {
  TAcademicSemister,
  TAcademicSemisterCode,
  TAcademicSemisterName,
  TMonth,
} from "./academicSemister.interface";
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

export const AcademicSemister = model<TAcademicSemister>(
  "academicSemister",
  academicSemisterSchema
);
