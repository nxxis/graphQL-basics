import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bycrpt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async createUserService(data) {
    try {
      const userExist = await this.userService.checkUserExistService(
        data.email
      );

      if (userExist) {
        throw new Error('User already exist');
      }

      data.password = await bycrpt.hash(data.password, 12);
      const newUser = await this.userService.createUserService(data);
      const payload = { name: newUser.name, email: newUser.email };
      const token = this.jwtService.sign(payload);
      return { token };
    } catch (error) {
      return error;
    }
  }
}
