import { Resolver } from '@nestjs/graphql';
import { Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from '../user/dtos/input/user.input';
import { CreateUserResponse } from '../user/dtos/response/user.response';
import { BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => CreateUserResponse)
  async createUser(@Args('CreateUserInput') body: CreateUserInput) {
    return await this.authService.createUserService(body);
  }
}
