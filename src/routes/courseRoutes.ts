import { Router } from "express";
import { CourseController } from "../controllers/courseController.js";

const courseRoutes = Router();
const courseController = new CourseController();

// GET 
courseRoutes.get("/courses", courseController.getCourses);
courseRoutes.get("/courses/:id", courseController.getCourseById);

// POST
courseRoutes.post("/courses", courseController.createCourse);

// PUT
courseRoutes.put("/courses/:id", courseController.updateCourse);

// DELETE
courseRoutes.delete("/courses/:id", courseController.deleteCourse);

export default courseRoutes;