import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { env } from '~@environment/env.constants';
import { User } from '~@resources/user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.API_TOKEN,
    });
  }

  async validate(payload: any) {
    const { sub, username, name } = payload;

    return { id: sub, username, name };
  }
}
