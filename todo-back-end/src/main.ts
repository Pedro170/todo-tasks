import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('TODOApp API')
    .setDescription('Aqui você poderá criar, apagar e atualizar uma lista de tarefas')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes( new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }) );
  await app.listen(3000);
}
bootstrap();

// rm -rf dist && yarn run start:dev
