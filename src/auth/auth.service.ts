import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('auth-ms');
  onModuleInit() {
    this.$connect();
    this.logger.log('MongoDB connected');
  }
}
