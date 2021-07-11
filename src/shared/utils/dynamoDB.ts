import { DynamoDB } from 'aws-sdk';

export const getDynamoDBDocumentClient = () => {
  return new DynamoDB.DocumentClient(
    process.env.IS_OFFLINE
      ? {
          region: 'localhost',
          endpoint: 'http://localhost:8000',
        }
      : {},
  );
};
