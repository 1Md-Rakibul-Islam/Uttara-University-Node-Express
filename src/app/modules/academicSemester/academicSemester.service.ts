import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

// create new academic semester
const createAcademicSemesterIntoDB = (playload: TAcademicSemester) => {

    if (academicSemesterNameCodeMapper[playload.name] !== playload.code) {
        throw new Error("Invalid Semester Code");
    };

    const result = AcademicSemester.create(playload);

    return result;
};

// get all academic semester from db
const getAllAcademicSemesterIntoDB = () => {

    const result = AcademicSemester.find({});

    return result;
};

// get single academic semester from db by id
const getSingleAcademicSemesterIntoDB = (id: string) => {

    const result = AcademicSemester.findById(id);

    return result;
};

// update academic semester
const updateAcademicSemesterIntoDB = (id: string, playload: Partial<TAcademicSemester>) => {

    const result = AcademicSemester.updateOne({ _id: id }, playload);

    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterIntoDB,
    getSingleAcademicSemesterIntoDB,
    updateAcademicSemesterIntoDB,
};
