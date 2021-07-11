import { Injectable } from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';

@Injectable()
export class FightersService {
  create(createFighterDto: CreateFighterDto) {
    return 'This action adds a new fighter';
  }

  findAll() {
    return `This action returns all fighters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fighter`;
  }

  update(id: number, updateFighterDto: UpdateFighterDto) {
    return `This action updates a #${id} fighter`;
  }

  remove(id: number) {
    return `This action removes a #${id} fighter`;
  }
}