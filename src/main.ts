import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from '~@environment/env.constants';

class Api {
  static async main() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.setGlobalPrefix('api');
    await app.listen(env.API_PORT);
  }
}

Api.main();
