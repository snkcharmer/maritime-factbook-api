import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import commonConfig from '@src/config/common.config';

@Module({
  imports: [
    JwtModule.register({}),
    ConfigModule.forFeature(commonConfig),
    UsersModule,
    PassportModule,
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: '1h' },
    // }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  // exports: [JwtModule],
})
export class AuthModule {}
