import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';

export const providers = [UserService, UserRepository, UserResolver];
