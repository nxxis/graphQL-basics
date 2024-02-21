import { Resolver } from '@nestjs/graphql';
import { Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput, LoginUserInput } from './dtos/input/user.input';
import {
  CreateUserResponse,
  LoginUserResponse,
} from './dtos/response/user.response';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => CreateUserResponse)
  async SignUp(@Args('CreateUserInput') body: CreateUserInput) {
    return await this.authService.createUserService(body);
  }

  @Mutation(() => LoginUserResponse)
  async Login(@Args('LoginUserInput') body: LoginUserInput) {
    return await this.authService.loginUserService(body);
  }
}
