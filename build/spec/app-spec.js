import app from '../app.js';
import supertest from 'supertest';
const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the app endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
});
