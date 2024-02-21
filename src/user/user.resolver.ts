import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from '../auth/dtos/input/user.input';
import { CreateUserResponse } from '../auth/dtos/response/user.response';
import { BadRequestException, NotAcceptableException } from '@nestjs/common';

@Resolver()
export class UserResolver {}
