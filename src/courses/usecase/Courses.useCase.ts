import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Course } from './domain/course.interface'

@Injectable()
export class CoursesUseCase {

    private readonly courses: Course[] = [];

    async findAll(): Promise<Course[]> {
        return this.courses;
    }

    async findById(id: string): Promise<Course> {
        const course = await this.courses.find(course => course.id === id);
        if (!course) {
            throw new HttpException("Course does not exist!", HttpStatus.NOT_FOUND);
        }
        return course;
    }

    async create(course: Course) {
        this.courses.push(course);
    }

}