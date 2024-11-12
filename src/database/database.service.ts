import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import mongoose from 'mongoose';

import cConfig from '@src/config/common.config';
import dbConfig from '@src/config/database.config';

@Injectable()
export class DatabaseService {
  private dbInstance: typeof mongoose | null = null;

  constructor(
    @Inject(dbConfig.KEY)
    private readonly databaseConfig: ConfigType<typeof dbConfig>,
    @Inject(cConfig.KEY)
    private readonly commonConfig: ConfigType<typeof cConfig>,
  ) {
    // Ensure Mongo URI is set
    if (!this.databaseConfig.mongoUri) {
      throw new Error(
        'Please define the MONGO_URI environment variable inside .env',
      );
    }

    // Attempt connection when service is initialized
    this.connect();
  }

  // Connect to the MongoDB database
  async connect() {
    try {
      const connection = await mongoose.connect(this.databaseConfig.mongoUri);
      this.dbInstance = connection;
      console.log('Database connection succeeded');
    } catch (err) {
      console.error('Error connecting to the database:', err);
      throw new Error(`Database connection failed: ${err.message}`);
    }

    // Enable mongoose debug mode in sandbox environment
    if (this.commonConfig.environment === 'sandbox') {
      mongoose.set('debug', true);
    }
  }

  // Return the mongoose instance
  db() {
    if (!this.dbInstance) {
      throw new Error('Database connection is not established.');
    }
    return this.dbInstance;
  }
}
