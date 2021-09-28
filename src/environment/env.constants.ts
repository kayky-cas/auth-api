import { Environment } from '~@interfaces/environment.interface';

export const env: Environment = {
  API_PORT: parseInt(process.env.API_PORT || '3000'),
  API_TOKEN: process.env.API_TOKEN || 'secret123',
};
