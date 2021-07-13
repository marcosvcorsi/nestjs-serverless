import { DynamoDB } from 'aws-sdk';
import { getDynamoDBDocumentClient } from '../utils/dynamoDB';

export type UpdateOptions<T> = {
  id?: string;
  data?: Partial<T>;
  key?: any;
  updateExpression?: string;
  expressionAttributeNames?: any;
  expressionAttributeValues?: any;
};

export class DynamoDbRepository<T> {
  private readonly dynamoDb: DynamoDB.DocumentClient;

  constructor(private readonly tableName: string) {
    this.dynamoDb = getDynamoDBDocumentClient();
  }

  async findAll(): Promise<Array<T>> {
    const { Items } = await this.dynamoDb
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return Items as T[];
  }

  async findById(id: string): Promise<T> {
    const { Item } = await this.dynamoDb
      .get({
        TableName: this.tableName,
        Key: { id },
      })
      .promise();

    return Item as T;
  }

  async create(data: T): Promise<T> {
    await this.dynamoDb
      .put({
        TableName: this.tableName,
        Item: data,
      })
      .promise();

    return data;
  }

  async delete(id: string): Promise<void> {
    await this.dynamoDb
      .delete({
        TableName: this.tableName,
        Key: { id },
      })
      .promise();
  }

  private mountUpdateExpression(data: Partial<T>): string {
    return `set ${Object.keys(data)
      .map((key) => `#${key} = :${key}`)
      .join(', ')}`;
  }

  private mountExpressionAttributeNames(data: Partial<T>): any {
    return Object.keys(data).reduce((object, key) => {
      return {
        ...object,
        [`#${key}`]: String(key),
      };
    }, {});
  }

  private mountExpressionAttributeValues(data: Partial<T>): any {
    return Object.entries(data).reduce((object, [key, value]) => {
      return {
        ...object,
        [`:${key}`]: value,
      };
    }, {});
  }

  async update({
    id,
    data,
    key,
    updateExpression,
    expressionAttributeNames,
    expressionAttributeValues,
  }: UpdateOptions<T>): Promise<T> {
    const { Attributes } = await this.dynamoDb
      .update({
        TableName: this.tableName,
        Key: key || { id },
        UpdateExpression: updateExpression || this.mountUpdateExpression(data),
        ExpressionAttributeNames:
          expressionAttributeNames ||
          (this.mountExpressionAttributeNames(data) as any),
        ExpressionAttributeValues:
          expressionAttributeValues ||
          this.mountExpressionAttributeValues(data),
        ReturnValues: 'ALL_NEW',
      })
      .promise();

    return Attributes as T;
  }
}
