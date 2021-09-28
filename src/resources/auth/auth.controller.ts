import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AllowUnauthorizedRequest } from './meta/allow-unauthorized-request.metadata';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  @AllowUnauthorizedRequest()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get()
  async isLogged(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...rest } = req.user;
    return rest;
  }
}
