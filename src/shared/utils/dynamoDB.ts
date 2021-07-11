import * as AWS from 'aws-sdk';

export const getDynamoDBDocumentClient = () => {
  return new AWS.DynamoDB.DocumentClient(
    process.env.IS_OFFLINE
      ? {
          region: 'localhost',
          endpoint: process.env.DYNAMODB_ENDPOINT,
        }
      : {},
  );
};
