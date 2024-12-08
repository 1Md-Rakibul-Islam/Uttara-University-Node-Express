import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = (playload: TAcademicSemester) => {

    const result = AcademicSemester.create(playload);

    return result;
};

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
};
