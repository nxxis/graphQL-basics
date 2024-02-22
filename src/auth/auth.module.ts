import { Module } from '@nestjs/common';
import { PetsModule } from '../pets/pets.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { providers } from './auth.providers';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: providers,
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
    PetsModule,
    UserModule,
  ],
  exports: [AuthModule, ...providers, JwtModule],
})
export class AuthModule {}
