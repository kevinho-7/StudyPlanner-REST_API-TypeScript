import { NotFoundError } from "../errors/notFoundError.js";
import { type Course } from "../models/Course.js";
import { promises as fs } from "node:fs";

const filePath = "./src/data/courses.json";
const data = await fs.readFile(filePath, "utf-8");
const coursesJson: Course[] = JSON.parse(data);

export class CourseService {

    async getAllCourses(): Promise<Course[]> {
        return coursesJson;
    }

    async getCourseById(id: number): Promise<Course> {

        const courseById = coursesJson.find(c => c.id == id);

        if(!courseById){
            throw new NotFoundError("Course not found");        
        }

        return courseById;
    }

    async createCourse(data: Course): Promisse<Course>{

        const course: Course = {
            id: coursesJson.length + 1,
            name: data.name,
            description: data.description
        }

        coursesJson.push(course)

        return course;

    }

}