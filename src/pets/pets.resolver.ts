import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { CreatePetInput } from './dtos/input/pets.input';
import {
  CreatePetResponse,
  FindAllPetsResponse,
} from './dtos/input/pets.response';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CurrentUser } from 'src/decorators/current-user';

@Resolver()
@UseGuards(JwtAuthGuard)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => FindAllPetsResponse)
  async getPets(@CurrentUser() user) {
    const pets = await this.petsService.getPetsService(user.id);
    return { pets };
  }

  @Mutation(() => CreatePetResponse)
  async createPet(
    @Args('CreatePetInput') body: CreatePetInput,
    @CurrentUser() user
  ) {
    return await this.petsService.createPetService(body, user.id);
  }
}
