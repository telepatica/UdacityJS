import path from 'path';
import { promises as fs } from 'fs';
import cache from '../routes/resize.js';
it('should find a buffer for processed image', async () => {
    const filePath = path.resolve('src/routes/image.png');
    const fileBuffer = await fs.readFile(filePath);
    expect(fileBuffer).toBeInstanceOf(Buffer);
});
it('should check if cache exists', async () => {
    const filePath = path.resolve('src/routes/image.png');
    const cacheKey = filePath;
    expect(cache).hasOwnProperty(cacheKey);
});
