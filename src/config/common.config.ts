import { registerAs } from '@nestjs/config';

// export type TEnvironment = 'production' | 'staging' | 'sandbox';

export default registerAs('common', () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3333,
  //   jwtSecret: process.env.JWT_SECRET,
  environment: process.env.NODE_ENV || 'development',
}));
