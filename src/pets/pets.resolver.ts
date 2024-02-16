import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './schema/pets.schema';
import { CreatePetInput } from './input/pets.input';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  async getPets() {
    return [{ name: 'ram', type: 'Munnna' }];
  }

  @Mutation(() => Pet)
  async createPet(@Args('CreatePetInput') body: CreatePetInput) {
    return this.petsService.createPet(body);
  }
}
