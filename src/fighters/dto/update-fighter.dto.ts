import { PartialType } from '@nestjs/swagger';
import { CreateFighterDto } from './create-fighter.dto';

export class UpdateFighterDto extends PartialType(CreateFighterDto) {}
