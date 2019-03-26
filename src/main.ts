import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
  await app.listen(4000);
}
bootstrap();
