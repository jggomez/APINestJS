
import { Controller, Get, Post, HttpCode, Header, Param, Body, Put, Query, UsePipes } from '@nestjs/common';
import { Course } from '../usecase/domain/course.interface';
import { CourseDto } from './DTO/course.dto';
import { CoursesUseCase } from '../usecase/Courses.useCase';
import { ValidationPipe } from './pipes/ValidationPipe';
import { coursesSchema } from './pipes/course.schema';

@Controller('apis/v1/courses')
export class CourseController {

    constructor(private readonly coursesUseCase: CoursesUseCase) { }

    @Get()
    async findAll(): Promise<Course[]> {
        return this.coursesUseCase.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Course> {
        const course = await this.coursesUseCase.findById(id);
        console.log(course);
        return course;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() courseDto: CourseDto) {
        return `Se actualiza el curso con id=${id} ${courseDto.name} - ${courseDto.description}`;
    }

    @Post()
    @HttpCode(200)
    @UsePipes(new ValidationPipe(coursesSchema))
    @Header('Cache-Control', 'none')
    async create(@Body() courseDto: CourseDto) {
        this.coursesUseCase.create(courseDto);
    }
}

