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
      const payload = {
        name: newUser.name,
        email: newUser.email,
        id: newUser._id,
      };
      const token = this.jwtService.sign(payload);
      return { token, email: newUser.email, id: newUser._id };
    } catch (error) {
      return error;
    }
  }

  async loginUserService(data) {
    try {
      const user = await this.userService.checkUserExistService(data.email);

      if (!user) {
        throw new Error('email/password is incorrect');
      }

      const valid = await bycrpt.compare(data.password, user.password);

      if (!valid) {
        throw new Error('email/password is incorrect');
      }

      const payload = { name: user.name, email: user.email, id: user._id };
      const token = this.jwtService.sign(payload);
      return { token, email: user.email, id: user._id };
    } catch (error) {
      return error;
    }
  }
}
