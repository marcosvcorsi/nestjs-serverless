import { PartialType } from '@nestjs/mapped-types';
import { CreateFighterDto } from './create-fighter.dto';

export class UpdateFighterDto extends PartialType(CreateFighterDto) {}
