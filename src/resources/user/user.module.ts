import { Module } from '@nestjs/common';
import { DatabaseService } from '~@services/database/database.service';
import { UserService } from './user.service';

@Module({
  exports: [UserService],
  providers: [UserService, DatabaseService],
})
export class UserModule {}
