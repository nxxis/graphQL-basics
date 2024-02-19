import { PetsRepository } from './pets.repository';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
export const providers = [PetsService, PetsRepository, PetsResolver];
