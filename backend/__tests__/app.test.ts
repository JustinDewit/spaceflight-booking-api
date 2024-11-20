import request from 'supertest';
import app from '../app';

describe('GET /api/flights', () => {
  // TODO: Need to setup MongoDB test connection
  // TODO: Add beforeAll/afterAll hooks to handle database cleanup
  // TODO: Increase timeout or handle connection properly
  it('should return a list of flights', async () => {
    const response = await request(app).get('/api/flights');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});