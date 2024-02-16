import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './schema/pets.schema';
import { PetsRepository } from './pets.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }])],
  providers: [PetsService, PetsResolver, PetsRepository],
})
export class PetsModule {}
