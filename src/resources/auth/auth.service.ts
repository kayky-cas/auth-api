import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PasswordEncryptService } from '~@services/password-encrypt/password-encrypt.service';
import { UserService } from '../user/user.service';
import { JwtSingedUser } from './dto/jwt-singed-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly passwordEncrypt: PasswordEncryptService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne({ username });

    const decryptedPassword = this.passwordEncrypt.decode(user.password || '');

    if (user !== null && decryptedPassword === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...nonPasswordUser } = user;
      return nonPasswordUser;
    }

    return null;
  }

  async login(user: User) {
    const { id, username, name } = user;

    const payload = { sub: id, username, name };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
