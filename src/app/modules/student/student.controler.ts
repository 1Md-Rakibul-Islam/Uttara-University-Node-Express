import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await StudentServices.getAllStudentsFromDB();

        res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            data: result,
        })

    } catch (error) {
        // res.status(500).json({
        //     success: false,
        //     message: (error as Error).message || "Something went wrong",
        //     error: error,
        // });
        next(error);
    }
}

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { studentId } = req.params;

        const result = await StudentServices.getSingleStudentFromDB(studentId);

        res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            data: result,
        })

    } catch (error) {
        next(error);
    }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;

        const result = await StudentServices.deleteStudentFromDB(studentId);

        res.status(200).json({
            success: true,
            message: "Students deleted successfully",
            data: result,
        })
    } catch (error) {
        next(error);
    }
}

export const StudentController = {
    getAllStudents,
    getSingleStudent,
    deleteStudent
};