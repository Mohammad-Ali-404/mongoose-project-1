import { z } from "zod";

const nameSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
});

const studentSchema = z.object({
  body: z.object({
    student: z.object({
      id: z.string(),
      name: nameSchema,
      gender: z.enum(["male", "female", "other"]),
      email: z.string().email(),
      dateOfBirth: z.string().optional(),
      phone: z.string(),
      emergencyContact: z.string().optional(),
      bloodGrp: z.enum(["A+", "B+", "AB+"]).optional(),
      presentAddress: z.string(),
      admissionSemister: z.string(),
      permanentAddress: z.string(),
    }),
  }),
});

export const studentValidationSchema = {
  studentSchema,
};
