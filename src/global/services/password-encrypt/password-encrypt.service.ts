import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as CryptoJS from 'crypto-js';
import { Environment } from '~@environment/env.constants';

@Injectable()
export class PasswordEncryptService {

  constructor(private configService: ConfigService) {}

  private secretKey = this.configService.get<string>(Environment.API_KEY_KEY);

  sing(password: string) {
    return CryptoJS.AES.encrypt(password, this.secretKey).toString();
  }
  decode(encryptedPassword: string) {
    return CryptoJS.AES.decrypt(encryptedPassword, this.secretKey).toString(
      CryptoJS.enc.Utf8,
    );
  }
}
