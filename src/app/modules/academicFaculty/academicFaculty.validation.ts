import { z } from "zod";

const createacademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Faculty must be a string",
    }),
  }),
});
const updateacademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Faculty must be a string",
    }),
  }),
});
export const academicFacultyValidation = {
  createacademicFacultyValidationSchema,
  updateacademicFacultyValidationSchema,
};
