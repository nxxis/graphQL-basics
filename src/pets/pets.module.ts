import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './schema/pets.schema';
import { providers } from './pets.providers';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }])],
  providers: providers,
  exports: [PetsModule, ...providers],
})
export class PetsModule {}
