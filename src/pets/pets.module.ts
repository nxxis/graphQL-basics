import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './schema/pets.schema';
import { providers } from './pets.providers';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }]),
    JwtModule,
    UserModule,
  ],
  providers: providers,
  exports: [PetsModule, ...providers],
})
export class PetsModule {}
