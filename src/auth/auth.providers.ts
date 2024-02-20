import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PetsService } from 'src/pets/pets.service';
import { JwtStrategy } from './strategies/jwt.strategy';

export const providers = [AuthResolver, AuthService, PetsService, JwtStrategy];
