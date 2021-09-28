import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { env } from '~@environment/env.constants';
import { JwtSingedUser } from '../interfaces/jwt-singed-user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.API_KEY,
    });
  }

  async validate(payload: JwtSingedUser) {
    const { sub, username, name } = payload;
    return { id: sub, username, name };
  }
}
