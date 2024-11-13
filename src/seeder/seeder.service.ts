import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeederService {
  private readonly logger = new Logger(SeederService.name);

  constructor(private readonly usersService: UsersService) {}

  async seedAdmin() {
    const adminEmail = 'admin@gmail.com';

    const existingAdmin = await this.usersService.findByEmail(adminEmail);
    if (existingAdmin) {
      this.logger.log('Admin user already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash('admin', 10);
    await this.usersService.create({
      email: adminEmail,
      password: hashedPassword,
    });
    this.logger.log('Admin user created successfully');
  }
}
