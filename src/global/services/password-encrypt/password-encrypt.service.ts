import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
import { env } from '~@environment/env.constants';

@Injectable()
export class PasswordEncryptService {
  private secretKey = env.API_KEY;

  sing(password: string) {
    return CryptoJS.AES.encrypt(password, this.secretKey).toString();
  }
  decode(encryptedPassword: string) {
    return CryptoJS.AES.decrypt(encryptedPassword, this.secretKey).toString(
      CryptoJS.enc.Utf8,
    );
  }
}
