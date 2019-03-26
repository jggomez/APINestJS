import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from '../src/courses/endpoint/courses.controller';
import { CoursesUseCase } from '../src/courses/usecase/Courses.useCase';
import { Course } from 'src/courses/usecase/domain/course.interface';

describe('CourseController', () => {

  let courseController: CourseController;
  let coursesUseCase: CoursesUseCase

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [CoursesUseCase],
    }).compile();

    coursesUseCase = app.get<CoursesUseCase>(CoursesUseCase);
    courseController = app.get<CourseController>(CourseController);
  });

  it('Debería retornar un arreglo de Cursos (FindAll GET)', async () => {
    const result: Course[] = [{ id: "123456", name: "Chatbots", description: "desc Chatbot" }];

    jest.spyOn(coursesUseCase, 'findAll').mockImplementation(() => {
      return new Promise(resolve => {
        resolve(result);
      })
    });

    expect(await courseController.findAll()).toBe(result);
  });

  it('Debería Insertar un Curso', async () => {
    const data: Course = { id: "123456789", name: "Chatbots", description: "desc Chatbot" };
    await courseController.create(data);
    expect(await courseController.findById("123456789")).toBe(data);
  });

});
