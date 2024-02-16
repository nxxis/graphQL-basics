import { Injectable } from '@nestjs/common';
import { PetsRepository } from './pets.repository';
import { CreatePetInput } from './input/pets.input';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}
  async createPet(body: CreatePetInput) {
    return this.petsRepository.createPetRepository({ ...body });
  }
}
