import { Module } from '@nestjs/common';
import { FightersModule } from './fighters/fighters.module';

@Module({
  imports: [FightersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
