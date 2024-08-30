import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import express from 'express';
const resize = express.Router();
const cache = {}; // initialize cache
resize.get('/', async (req, res) => {
    const filePath = path.resolve('src/routes/image.png');
    const cacheKey = filePath; // unique cache key based on file path and dimensions
    try {
        // check if cache exists 
        if (cache.hasOwnProperty(cacheKey)) {
            return res.type('image/png').send(cache[cacheKey]);
        }
        const fileBuffer = await fs.readFile(filePath);
        const newPayload = (fileBuffer) => {
            return new Promise((resolve, reject) => {
                sharp(fileBuffer)
                    .resize(200, 200)
                    .toBuffer()
                    .then((resizedImage) => {
                    resolve(resizedImage);
                })
                    .catch((error) => {
                    reject(error);
                });
            });
        };
        const resizedImage = await newPayload(fileBuffer);
        res.type('png'); //set respose type to png
        res.send(resizedImage);
    }
    catch (err) {
        console.error('image', err);
        res.status(500).send('Image Error');
    }
    ;
});
export default resize;
