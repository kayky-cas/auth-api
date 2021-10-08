import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Environment } from '~@environment/env.constants';
import { JwtSingedUser } from '../interfaces/jwt-singed-user.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(Environment.API_KEY_KEY),
    });
  }

  async validate(payload: JwtSingedUser) {
    const { sub, username, name } = payload;
    return { id: sub, username, name };
  }
}
