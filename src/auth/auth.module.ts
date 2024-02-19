import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PetsModule } from '../pets/pets.module';
import { PetsService } from 'src/pets/pets.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [AuthResolver, AuthService, PetsService],
  imports: [
    JwtModule.register({
      secret: 'insanelysecretkey',
      signOptions: { expiresIn: '1d' },
    }),
    PetsModule,
    UserModule,
  ],
})
export class AuthModule {}
