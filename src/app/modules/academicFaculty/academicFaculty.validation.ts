import { z } from "zod";

const createacademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Academic Faculty must be a string",
  }),
});
const updateacademicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Academic Faculty must be a string",
    })
    .optional(),
});

export const academicFacultyValidation = {
  createacademicFacultyValidationSchema,
  updateacademicFacultyValidationSchema,
};
