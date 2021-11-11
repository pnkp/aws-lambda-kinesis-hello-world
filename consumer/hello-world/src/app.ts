import { APIGatewayProxyResult, Context, KinesisStreamEvent } from "aws-lambda";
import { Buffer } from "buffer";

export const lambdaHandler = async (
  event: KinesisStreamEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  let data: string[];
  try {
    data = event.Records.map(({ kinesis }) => Buffer.from(kinesis.data, 'base64').toString('utf-8'));
    console.log({ data });
  } catch (e) {
    console.error(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ test: data ?? `Hello` })
  }
};
