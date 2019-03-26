import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { CoursesUseCase } from '../src/courses/usecase/Courses.useCase';
import { INestApplication } from '@nestjs/common'
import { CoursesModule } from '../src/courses/courses.module';

describe('Course', () => {

  let app: INestApplication;
  let coursesUseCase = {
    findAll: () =>
      [{ id: "123456", name: "Chatbots", description: "desc Chatbot" }]
  }

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CoursesModule],
    })
      .overrideProvider(CoursesUseCase)
      .useValue(coursesUseCase)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/ GET courses', () => {

    return request(app.getHttpServer())
      .get('/apis/v1/courses')
      .expect(200)
  });

  afterAll(async () => {
    await app.close();
  });

});
