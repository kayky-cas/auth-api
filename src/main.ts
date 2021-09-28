import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from '~@environment/env.constants';
import { INestApplication } from '@nestjs/common';

class Api {
  static async bootstrap() {
    const cleanApp = await NestFactory.create(AppModule);
    const app = this.configuration(cleanApp);
    await app.listen(env.API_PORT);
  }

  static configuration(app: INestApplication) {
    app.setGlobalPrefix('api');
    return app;
  }
}

Api.bootstrap();
