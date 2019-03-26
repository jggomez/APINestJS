import { Module } from '@nestjs/common';
import { CourseController } from './endpoint/courses.controller';
import { CoursesUseCase } from './usecase/Courses.useCase';

@Module({  
  controllers: [CourseController],
  providers: [CoursesUseCase],
})
export class CoursesModule { }
