import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { ALLOW_UNAUTHORIZED_REQUEST_KEY } from '../meta/allow-unauthorized-request.metadata';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    const allow = this.reflector.get<boolean>(
      ALLOW_UNAUTHORIZED_REQUEST_KEY,
      context.getHandler(),
    );
    return allow || super.canActivate(context);
  }
}
