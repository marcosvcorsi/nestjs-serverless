import { Module } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersController } from './fighters.controller';
import { FightersRepository } from './repositories/fighters.repository';

@Module({
  controllers: [FightersController],
  providers: [FightersRepository, FightersService],
})
export class FightersModule {}
