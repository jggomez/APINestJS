import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { logger } from './courses/endpoint/middleware/logger.middleware';
import { CourseController } from './courses/endpoint/courses.controller';

@Module({
    imports: [CoursesModule]
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(logger)
            .forRoutes(CourseController);
    }
}
