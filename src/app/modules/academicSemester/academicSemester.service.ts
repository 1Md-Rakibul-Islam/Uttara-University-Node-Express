import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = (playload: TAcademicSemester) => {

    if (academicSemesterNameCodeMapper[playload.name] !== playload.code) {
        throw new Error("Invalid Semester Code");
    };

    const result = AcademicSemester.create(playload);

    return result;
};

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
};
