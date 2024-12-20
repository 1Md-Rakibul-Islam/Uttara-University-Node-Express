import express from "express";
import { StudentController } from "./student.controler";

const router = express.Router();

router.get("/", StudentController.getAllStudents);

router.get("/:studentId", StudentController.getSingleStudent);

router.delete("/:studentId", StudentController.deleteStudent);

export const StudentRoutes = router;
