import { type Request, type Response } from "express";
import { CourseService } from "../services/courseService.js";
import type { Course } from "../models/Course.js";
import { courseSchema } from "../validations/courseValidation.js";
import { BadRequestError } from "../errors/badRequestError.js";

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

    async createCourse(req: Request, res: Response){
        
        const dataBody = courseSchema.safeParse(req.body);

        if(!dataBody.success){
            throw new BadRequestError("Invalid body");  
        }

        const validData: Course = dataBody.data; 

        const result = await _courseService.createCourse(validData);
        res.status(201).json({
            message: "The course has been created",
            result
        });

    }

    async updateCourse(req: Request, res: Response){

        const id: number = Number(req.params.id);

        const dataBody = courseSchema.safeParse(req.body);

        if(!dataBody.success){
            throw new BadRequestError("Invalid body"); 
        }

        const validData: Course = dataBody.data;

        const result = await _courseService.updateCourse(id, validData)
        res.status(200).json({
            message: "The course has been updated",
            result
        });

    }

    async deleteCourse(req: Request, res: Response){

        const id: number = Number(req.params.id);

        const result = _courseService.deleteCourse(id);
        res.status(200).json({
            message: "The course has been deleted",
            result
        });

    }

}