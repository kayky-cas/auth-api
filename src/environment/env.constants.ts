import { Environment } from '~@interfaces/environment.interface';

export const env: Environment = {
  API_PORT: parseInt(process.env.API_PORT || '3000'),
  API_KEY: process.env.API_KEY || 'secret123',
  SESSION_TIMEOUT: parseInt(process.env.SESSION_TIMEOUT || '60'),
};
