import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreateUserResponse {
  @IsNotEmpty()
  @Field()
  token: string;
}
