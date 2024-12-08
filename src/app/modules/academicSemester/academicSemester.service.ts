import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = () => {
  const result = AcademicSemester.create();

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
