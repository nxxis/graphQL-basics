import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { JwtService } from '@nestjs/jwt';

export const providers = [
  UserService,
  UserRepository,
  UserResolver,
  JwtService,
];
