import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dtos/input/user.input';
import { CreateUserResponse } from './dtos/response/user.response';
import { NotAcceptableException } from '@nestjs/common';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => CreateUserResponse)
  async createUser(@Args('CreateUserInput') body: CreateUserInput) {
    const user = await this.userService.checkUserExistService(body.email);
    if (user) {
      throw new NotAcceptableException('User already exist');
    }
    return await this.userService.createUserService(body);
  }
}
