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

    async createCourse(data: Course): Promise<Course>{

        const course: Course = {
            id: coursesJson.length + 1,
            name: data.name,
            description: data.description
        }

        coursesJson.push(course)

        const newCourseFile = JSON.stringify(coursesJson, null, 2);

        await fs.writeFile(filePath, newCourseFile);

        return course;
    }

    async updateCourse(id: number, updates: Course): Promise<Course>{

        const index = coursesJson.findIndex(c => c.id == id);

        if(index === -1){
            throw new NotFoundError("Course not found");
        }

        const updatedCourse = coursesJson[index] = {
            id: id,
            name: updates.name,
            description: updates.description
        }

        const appliedUpdates = JSON.stringify(coursesJson, null, 2);

        await fs.writeFile(filePath, appliedUpdates);

        return updatedCourse;
    }

    async deleteCourse(id: number){

        const index = coursesJson.findIndex(c => c.id == id);

        if(index === -1){
            throw new NotFoundError("Course not found");
        }
        
        coursesJson.splice(index, 1);

        const appliedDelete = JSON.stringify(coursesJson, null, 2);

        await fs.writeFile(filePath, appliedDelete);

    }

}