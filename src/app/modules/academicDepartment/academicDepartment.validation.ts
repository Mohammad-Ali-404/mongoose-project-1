import { z } from "zod";

const createacademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department must be a string",
      required_error: "Name is require",
    }),
    academicDepartment: z.string({
      invalid_type_error: "Academic Department must be a string",
      required_error: "Department is require",
    }),
  }),
});
const updateacademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Academic Department must be a string",
        required_error: "Name is require",
      })
      .optional(),
    academicDepartment: z
      .string({
        invalid_type_error: "Academic Department must be a string",
        required_error: "Department is require",
      })
      .optional(),
  }),
});
export const academicDepartmentValidation = {
  createacademicDepartmentValidationSchema,
  updateacademicDepartmentValidationSchema,
};
