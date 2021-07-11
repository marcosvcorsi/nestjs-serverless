import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { DynamoDbRepository } from 'src/shared/repositories/dynamodb.repository';
import { CreateFighterDto } from '../dto/create-fighter.dto';
import { Fighter } from '../entities/fighter.entity';

@Injectable()
export class FightersRepository {
  private readonly dynamoDbRepository: DynamoDbRepository<Fighter>;

  constructor() {
    this.dynamoDbRepository = new DynamoDbRepository(
      String(process.env.FIGHTERS_TABLE_NAME),
    );
  }

  async create(data: CreateFighterDto): Promise<Fighter> {
    const id = uuid();

    const tech: Fighter = {
      id,
      ...data,
    };

    await this.dynamoDbRepository.create(tech);

    return tech;
  }

  async find(): Promise<Fighter[]> {
    return this.dynamoDbRepository.findAll();
  }

  async delete(id: string): Promise<void> {
    await this.dynamoDbRepository.delete(id);
  }

  async findById(id: string): Promise<Fighter> {
    return this.dynamoDbRepository.findById(id);
  }

  async update(id: string, data: Partial<Fighter>): Promise<void> {
    return this.dynamoDbRepository.update({ id, data });
  }
}
