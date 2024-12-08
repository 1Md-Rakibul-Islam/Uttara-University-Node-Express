import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import {
    AcademicSemesterCode,
    AcademicSemesterName,
    Months,
} from "./academicSemester.constant";

const academicSemesterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            enum: AcademicSemesterName,
        },
        year: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
            enum: AcademicSemesterCode,
        },
        startMonth: {
            type: String,
            enum: Months,
        },
        endMonth: {
            type: String,
            enum: Months,
        },
    },
    {
        timestamps: true,
    },
);

export const AcademicSemester = model<TAcademicSemester>(
    "AcademicSemester",
    academicSemesterSchema,
);
