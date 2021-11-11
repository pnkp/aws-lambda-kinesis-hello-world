import { Kinesis } from 'aws-sdk';
import { config } from 'dotenv';

config();

async function run() {
  const kinesis = new Kinesis({ region: 'eu-north-1' });
  const record: Kinesis.Types.PutRecordInput = {
    StreamName: 'kinesis-test',
    Data: 'test data',
    PartitionKey: 'test',
  }
  await putRecord(record);

  function putRecord(record: Kinesis.Types.PutRecordInput) {
    return new Promise((resolve, reject) => {
      kinesis.putRecord(record, (err, output) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(output);
        }
      })
    });
  }
}
run();
