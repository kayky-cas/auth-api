import { Module } from '@nestjs/common';
import { DatabaseService } from '~@services/database/database.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PasswordEncryptService } from '~@services/password-encrypt/password-encrypt.service';

@Module({
  exports: [UserService],
  providers: [UserService, DatabaseService, PasswordEncryptService],
  controllers: [UserController],
})
export class UserModule {}
