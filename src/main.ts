import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Environment } from '~@environment/env.constants';
import { ConfigService } from '@nestjs/config';

class Api {
  static async main() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.setGlobalPrefix('api');

    const configService = app.get<ConfigService>(ConfigService);

    await app.listen(configService.get(Environment.API_PORT_KEY));
  }
}

Api.main();
