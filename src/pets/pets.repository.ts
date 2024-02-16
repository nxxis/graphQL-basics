import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './schema/pets.schema';
import mongoose from 'mongoose';

@Injectable()
export class PetsRepository {
  constructor(@InjectModel(Pet.name) private petModel: mongoose.Model<Pet>) {}

  async createPetRepository(data: Pet) {
    try {
      const pet = new this.petModel({ name: data.name, type: data.type });
      if (!pet) {
        throw new Error('Error creating pet');
      }
      return pet.save();
    } catch (error) {
      throw new Error(error);
    }
  }
}
