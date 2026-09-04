import { Router } from "express";
import { CourseController } from "../controllers/courseController.js";

const courseRoutes = Router();
const courseController = new CourseController();

//GET 
courseRoutes.get("/courses", courseController.getCourses);
courseRoutes.get("/courses/:id", courseController.getCourseById);



export default courseRoutes;