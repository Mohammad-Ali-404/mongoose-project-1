import { z } from "zod";
import {
  AcademicSemisterCode,
  AcademicSemisterName,
  months,
} from "./academicSemister.constant";

const createAcademicSemisterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemisterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemisterCode] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const AcademicSemisterValidation = {
  createAcademicSemisterValidationSchema,
};
