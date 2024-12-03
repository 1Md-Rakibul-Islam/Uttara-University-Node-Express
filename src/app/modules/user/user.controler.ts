import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;

        // data validation using zod
        // const zodParseData = studentValidationSchema.parse(studentData);

        // Proceed with database operation if validation is successful
        const result = await UserServices.createStudentIntoDb(password, studentData);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student created successfully",
            data: result
        })
    } catch (error) {
        next(error);
    }
};

export const UserControlers = {
    createStudent,
} 