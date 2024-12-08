import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  // data validation using zod
  // const zodParseData = studentValidationSchema.parse(studentData);

  // Proceed with database operation if validation is successful
  const result = await UserServices.createStudentIntoDb(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

export const UserControlers = {
  createStudent,
};
