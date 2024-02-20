import { Injectable } from '@nestjs/common';
import { PetsRepository } from './pets.repository';
import { CreatePetInput } from './dtos/input/pets.input';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}

  async createPetService(body: CreatePetInput) {
    return await this.petsRepository.createPetRepository({ ...body });
  }
  async getPetsService() {
    return await this.petsRepository.findAllPetsRepository();
  }
}
