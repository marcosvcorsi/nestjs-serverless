import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { FightersService } from './fighters.service';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('fighters')
export class FightersController {
  constructor(private readonly fightersService: FightersService) {}

  @Post()
  async create(@Body() createFighterDto: CreateFighterDto) {
    return this.fightersService.create(createFighterDto);
  }

  @ApiResponse({ status: HttpStatus.OK })
  @Get()
  async findAll() {
    return this.fightersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.fightersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFighterDto: UpdateFighterDto,
  ) {
    return this.fightersService.update(id, updateFighterDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.fightersService.remove(id);
  }
}
