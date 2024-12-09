import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

// create new academic semester
const createAcademicSemesterIntoDB = async (playload: TAcademicSemester) => {

    if (academicSemesterNameCodeMapper[playload.name] !== playload.code) {
        throw new Error("Invalid Semester Code");
    };

    const result = await AcademicSemester.create(playload);

    return result;
};

// get all academic semester from db
const getAllAcademicSemesterIntoDB = async () => {

    const result = await AcademicSemester.find({});

    return result;
};

// get single academic semester from db by id
const getSingleAcademicSemesterIntoDB = async (id: string) => {

    const result = await AcademicSemester.findById(id);

    return result;
};

// update academic semester
const updateAcademicSemesterIntoDB = async (id: string, playload: Partial<TAcademicSemester>) => {

    // const result = AcademicSemester.updateOne({ _id: id }, playload);

    if (
        playload.name && playload.code && academicSemesterNameCodeMapper[playload.name] !== playload.code
    ) {
        throw new Error("Invalid Semester Code");
    };

    const result = await AcademicSemester.findByIdAndUpdate({ _id: id }, playload, { new: true });

    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterIntoDB,
    getSingleAcademicSemesterIntoDB,
    updateAcademicSemesterIntoDB,
};
