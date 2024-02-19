import { Module } from '@nestjs/common';
import { providers } from './user.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: providers,
  exports: [UserModule, ...providers],
})
export class UserModule {}
