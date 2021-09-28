import {
  Body,
  ConflictException,
  Controller,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '~@resources/auth/guards/jwt-auth.guard';
import { PasswordEncryptService } from '~@services/password-encrypt/password-encrypt.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly passwordEncrypt: PasswordEncryptService,
  ) {}

  @Put()
  @UseGuards(JwtAuthGuard)
  async singIn(@Body() user: CreateUserDto) {
    let reThrow = false;

    const creatableUser = user;

    creatableUser.password = this.passwordEncrypt.sing(user.password);

    try {
      await this.userService.create(creatableUser);
    } catch (err) {
      reThrow = true;
    } finally {
      if (reThrow) {
        throw new ConflictException(undefined, 'Email already in use.');
      }

      return { message: 'User created!' };
    }
  }
}
