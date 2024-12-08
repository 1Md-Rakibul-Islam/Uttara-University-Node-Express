import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constant";
import { z } from "zod";

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
    year: z.date(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    startDate: z.enum([...Months] as [string, ...string[]]),
    endDate: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterValidationSchema,
};
