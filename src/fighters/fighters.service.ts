import { Injectable } from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { FightersRepository } from './repositories/fighters.repository';

@Injectable()
export class FightersService {
  constructor(private readonly fightersRepository: FightersRepository) {}

  create(createFighterDto: CreateFighterDto) {
    return this.fightersRepository.create(createFighterDto);
  }

  async findAll() {
    return this.fightersRepository.find();
  }

  findOne(id: string) {
    return this.fightersRepository.findById(id);
  }

  update(id: string, updateFighterDto: UpdateFighterDto) {
    return this.fightersRepository.update(id, updateFighterDto);
  }

  remove(id: string) {
    return this.fightersRepository.delete(id);
  }
}
