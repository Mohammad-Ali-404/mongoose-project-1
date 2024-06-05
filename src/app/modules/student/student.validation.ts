import Joi from "joi";

const nameSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
});
const studentSchema = Joi.object({
  id: Joi.string().required(),
  name: nameSchema,
  gender: Joi.string().valid("male", "female", "other").required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.string().isoDate(),
  phone: Joi.string().required(),
  emergencyContact: Joi.string(),
  bloodGrp: Joi.string().valid("A+", "B+", "AB+"),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  avatar: Joi.string().uri(),
});

export default studentSchema;
