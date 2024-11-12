import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';

  app.setGlobalPrefix(globalPrefix, {});

  const config = new DocumentBuilder()
    .setTitle(process.env.API_TITLE || '')
    .setDescription(process.env.API_DESCRIPTION || '')
    .setVersion(process.env.API_VERSION || '')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.enableVersioning({
    type: VersioningType.URI, // Versioning based on URL (e.g., api/v1/)
    defaultVersion: '1',
  });

  app.enableCors({});

  await app.listen(3333);
}
bootstrap();
