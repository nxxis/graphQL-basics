import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUserService(data) {
    try {
      return await this.userRepository.createUserRepository(data);
    } catch (error) {
      return error;
    }
  }

  async checkUserExistService(email: string) {
    return await this.userRepository.checkUserExistRepository(email);
  }
}
