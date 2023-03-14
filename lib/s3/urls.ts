const fileName = (key: string) => {
  return key.toLowerCase().replace(' ', '_');
};

const thumbnailUrl = (key: string, type: 'map' | 'scan' = 'scan') => {
  return `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${
    process.env.NEXT_PUBLIC_S3_REGION
  }.amazonaws.com/${type}s/thumbnails/${fileName(key)}.webp`;
};

const scanUrl = (key: string, type: 'map' | 'scan') => {
  return `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${
    process.env.NEXT_PUBLIC_S3_REGION
  }.amazonaws.com/scans/models/${fileName(key)}.glb`;
};

export { thumbnailUrl, scanUrl };
