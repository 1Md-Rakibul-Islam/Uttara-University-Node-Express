import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import User from "./user.model";
import { generateStudenId } from "./user.utils";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";

const createStudentIntoDb = async (password: string, payload: TStudent) => {

  // create a new user
  const userData: Partial<TUser> = {};

  // if password not provided then set default password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = "student";

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  // auto generate student id
  userData.id = await generateStudenId(admissionSemester as TAcademicSemester);

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length > 0) {
    // set id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; // reference _id
    const newStudent = await Student.create(payload);
    return newStudent;
  }

  return newUser;
};

export const UserServices = {
  createStudentIntoDb,
};
