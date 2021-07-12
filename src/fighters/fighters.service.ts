import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { FightersRepository } from './repositories/fighters.repository';

@Injectable()
export class FightersService {
  constructor(private readonly fightersRepository: FightersRepository) {}

  async create(createFighterDto: CreateFighterDto) {
    return this.fightersRepository.create(createFighterDto);
  }

  async findAll() {
    return this.fightersRepository.find();
  }

  async findOne(id: string) {
    const fighter = await this.fightersRepository.findById(id);

    if (!fighter) {
      return new NotFoundException();
    }

    return fighter;
  }

  async update(id: string, updateFighterDto: UpdateFighterDto) {
    return this.fightersRepository.update(id, updateFighterDto);
  }

  async remove(id: string) {
    return this.fightersRepository.delete(id);
  }
}
