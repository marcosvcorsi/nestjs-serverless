import { Module } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersController } from './fighters.controller';

@Module({
  controllers: [FightersController],
  providers: [FightersService]
})
export class FightersModule {}
