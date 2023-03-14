import { S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({
  credentials: {
    accessKeyId: `${process.env.S3_KEY}`,
    secretAccessKey: `${process.env.S3_SECRET}`,
  },
  region: `${process.env.NEXT_PUBLIC_S3_REGION}`,
});

export default client;
