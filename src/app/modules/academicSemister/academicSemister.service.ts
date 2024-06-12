import { academicSemisterNameCodeMapper } from "./academicSemister.constant";
import { TAcademicSemister } from "./academicSemister.interface";
import { AcademicSemister } from "./academicSemister.model";

const createAcademicSemisterIntoDB = async (payload: TAcademicSemister) => {
  if (academicSemisterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("invalid semester code");
  }
  const result = await AcademicSemister.create(payload);
  return result;
};

export const academicSemisterServices = {
  createAcademicSemisterIntoDB,
};
