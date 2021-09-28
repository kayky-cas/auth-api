import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '~@resources/user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne({ username });

    if (user !== null && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...safeUser } = user;
      return safeUser;
    }

    return null;
  }

  async login(user: User) {
    const { id, username, name } = user;

    return {
      access_token: this.jwtService.sign({ username, name, sub: id }),
    };
  }
}
