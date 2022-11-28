import type { Blob } from 'node:buffer';

export const readFile = async (blob: Blob): Promise<string> => {
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return `data:${blob.type};base64,${buffer.toString('base64')}`;
};
