import { type Request, type Response } from "express";

export function getCoursesController(req: Request, res: Response){
    res.json({
        message: "Testing this controller bro"
    });
}