import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async isLogged(@Request() req) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...rest } = req.user;
    return rest;
  }
}
