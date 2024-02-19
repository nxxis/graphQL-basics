import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { CreatePetInput } from './dtos/input/pets.input';
import {
  CreatePetResponse,
  FindAllPetsResponse,
} from './dtos/input/pets.response';

@Resolver()
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => FindAllPetsResponse)
  async getPets() {
    const pets = await this.petsService.getPetsService();
    return { pets };
  }

  @Mutation(() => CreatePetResponse)
  async createPet(@Args('CreatePetInput') body: CreatePetInput) {
    return await this.petsService.createPetService(body);
  }
}
