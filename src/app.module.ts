import { Module } from '@nestjs/common';
import { AuthModule } from './resources/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
