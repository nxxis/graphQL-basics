import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreateUserResponse {
  @IsNotEmpty()
  @Field()
  token: string;

  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  id: string;
}

@ObjectType()
export class LoginUserResponse {
  @IsNotEmpty()
  @Field()
  token: string;

  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  id: string;
}
