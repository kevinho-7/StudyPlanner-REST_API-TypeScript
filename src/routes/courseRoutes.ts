import { Router } from "express";
import { getCoursesController } from "../controllers/courseController.js";

const courseRoutes = Router();

courseRoutes.get("/courses", getCoursesController);

export default courseRoutes;