import { ObjectType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@ObjectType()
export class CreatePetResponse {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  type: string;
}

@ObjectType()
class Pet {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  type: string;
}

@ObjectType()
export class FindAllPetsResponse {
  @Field(() => [Pet])
  pets: Pet[];
}
