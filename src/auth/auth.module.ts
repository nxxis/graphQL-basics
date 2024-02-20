import { Module } from '@nestjs/common';
import { PetsModule } from '../pets/pets.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { providers } from './auth.providers';

@Module({
  providers: providers,
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'insanelySecretkey',
      signOptions: { expiresIn: '1d' },
    }),
    PetsModule,
    UserModule,
  ],
  exports: [AuthModule, ...providers, JwtModule],
})
export class AuthModule {}
