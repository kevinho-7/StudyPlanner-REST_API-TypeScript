import { type Request, type Response } from "express";
import { CourseService } from "../services/courseService.js";
import type { Course } from "../models/Course.js";
import { courseSchema } from "../validations/courseValidation.js";

const _courseService = new CourseService();

export class CourseController{

    async getCourses(req: Request, res: Response) {

        const result = await _courseService.getAllCourses();
        res.send(result);
    }

    async getCourseById(req: Request, res: Response) {

        const id: number = Number(req.params.id)

        const result = await _courseService.getCourseById(id);
        res.send(result);

    }

    // async createCourse(req: Request, res: Response){

    //     const data: Course = courseSchema.safeParse(req.body);

    //     const result = await _courseService.createCourse(data);
    //     res.status(201).json({
    //         message: "The course has been created",
    //         result
    //     })

    // }

}