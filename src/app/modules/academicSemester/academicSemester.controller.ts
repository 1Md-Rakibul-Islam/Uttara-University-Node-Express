import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";

// create new academic semester
const createAcademicSemester = catchAsync(async (req, res) => {

    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester created successfully",
        data: result,
    });
});

// get all academic semester from db
const getAllAcademicSemester = catchAsync(async (req, res) => {

    const result = await AcademicSemesterServices.getAllAcademicSemesterIntoDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester fetched successfully",
        data: result,
    });
});

// get single academic semester from db by id
const getSingleAcademicSemester = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result = await AcademicSemesterServices.getSingleAcademicSemesterIntoDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester fetched successfully",
        data: result,
    });

});

// update academic semester
const updateAcademicSemester = catchAsync(async (req, res) => {

    const { id } = req.params;

    const updatedAcademicSemesterData = req.body;

    const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(id, updatedAcademicSemesterData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester updated successfully",
        data: result,
    });
});


export const AcademicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester
};
