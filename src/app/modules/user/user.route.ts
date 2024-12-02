import express from 'express';
import { UserControlers } from './user.controler';

const router = express.Router();

router.post("/create-student", UserControlers.createStudent);

export const UserRoutes = router;