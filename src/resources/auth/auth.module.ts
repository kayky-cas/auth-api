import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '~@resources/user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { env } from '~@environment/env.constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PasswordEncryptService } from '~@services/password-encrypt/password-encrypt.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: env.API_KEY,
      signOptions: { expiresIn: env.SESSION_TIMEOUT + 's' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, PasswordEncryptService],
})
export class AuthModule {}
