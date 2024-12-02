import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { password, student: studentData } = req.body;

        // data validation using zod
        // const zodParseData = studentValidationSchema.parse(studentData);

        // Proceed with database operation if validation is successful
        const result = await UserServices.createStudentIntoDb(password, studentData);

        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message || "Student creation failed",
            error: error,
        });
    }
};

export const UserControlers = {
    createStudent,
} 