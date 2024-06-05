import { z } from "zod";

const usersSchemaValidation = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: "passoword can not be more the 20 words" }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["student", "admin", "faculty"]),
  status: z.enum(["in-prgress", "blocked"]),
  isDeleted: z.boolean().optional().default(false),
});

export default usersSchemaValidation;
