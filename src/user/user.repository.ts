import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>
  ) {}

  async createUserRepository(data) {
    try {
      const user = new this.userModel(data);
      if (!user) {
        throw new Error('error while creating user');
      }
      return await user.save();
    } catch (error) {
      return error;
    }
  }

  async checkUserExistRepository(email: string) {
    try {
      const user = await this.userModel.findOne({ email });
      return user;
    } catch (error) {
      return error;
    }
  }
}
