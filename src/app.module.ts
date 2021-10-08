import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '~@resources/auth/guards/jwt-auth.guard';
import { AuthModule } from './resources/auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [AuthModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
