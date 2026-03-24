import request from 'supertest';
import { app } from './app';

describe('Products', () => {
  it('should list all products', async () => {
    const response = await request(app).get('/products');
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });
});
