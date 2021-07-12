import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFighterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  country: string;

  @IsString()
  birthDate: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;
}
