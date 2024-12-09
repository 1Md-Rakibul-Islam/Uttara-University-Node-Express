import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../middlwares/validateRequest";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.post(
    "/create-academic-semester",
    validateRequest(
        AcademicSemesterValidations.createAcademicSemesterValidationSchema,
    ),
    AcademicSemesterController.createAcademicSemester,
);

router.get("/", AcademicSemesterController.getAllAcademicSemester);

router.get("/:id", AcademicSemesterController.getSingleAcademicSemester);

router.patch("/:id", validateRequest(AcademicSemesterValidations.updateAcademicSemesterValidationSchema), AcademicSemesterController.updateAcademicSemester);


export const AcademicSemesterRoutes = router;
