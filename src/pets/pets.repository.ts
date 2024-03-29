import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './schema/pets.schema';
import mongoose from 'mongoose';

@Injectable()
export class PetsRepository {
  constructor(@InjectModel(Pet.name) private petModel: mongoose.Model<Pet>) {}

  async createPetRepository(data) {
    try {
      const pet = new this.petModel({ ...data });
      if (!pet) {
        throw new Error('Error creating pet');
      }
      return pet.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findPetRepository(id) {
    try {
      const pet = await this.petModel.findById(id);
      if (!pet) {
        throw new Error('Error fetching pet');
      }
      return pet;
    } catch (error) {
      throw new Error(error);
    }
  }
}
