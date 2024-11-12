import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import dbConfig from '../config/database.config';
import commonConfig from '../config/common.config';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    ConfigModule.forFeature(dbConfig),
    ConfigModule.forFeature(commonConfig),
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forFeature(dbConfig)],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongoUri'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService, MongooseModule],
})
export class DatabaseModule {}
