import { Injectable } from '@nestjs/common';
import { PetsRepository } from './pets.repository';
import { CreatePetInput } from './dtos/input/pets.input';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class PetsService {
  constructor(
    private petsRepository: PetsRepository,
    private userRepository: UserRepository
  ) {}

  async createPetService(body: CreatePetInput, userId) {
    const pet = await this.petsRepository.createPetRepository({ ...body });
    await this.userRepository.addPetToUserRepository(userId, pet._id);
    return pet;
  }

  async getPetsService(userId) {
    const petsId = await this.userRepository.getUserPetsRepository(userId);
    const pets = [];

    for (let i = 0; i < petsId.length; i++) {
      const pet = await this.petsRepository.findPetRepository(petsId[i]);
      pets.push(pet);
    }
    return pets;
  }
}
