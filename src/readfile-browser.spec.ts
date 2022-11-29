import { describe, it, expect } from '@jest/globals';
import { readFile } from './readfile-browser';

describe('readFile', () => {
  it('correctly returns the blob encoded as a base64 data URL', async () => {
    const blobContent = 'test';
    const blob = new Blob([blobContent], { type: 'text/plain' });
    const encoded = Buffer.from(blobContent).toString('base64');
    await expect(readFile(blob)).resolves.toBe(
      `data:${blob.type};base64,${encoded}`,
    );
  });
});
