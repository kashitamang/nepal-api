const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('#GET /districts should return a list of all districts', async () => {
    const res = await request(app).get('/districts');
    expect(res.body.length).toEqual(3);
    expect(res.body[0]).toEqual(
      {
        id: expect.any(String),
        name: expect.any(String),
        population: expect.any(String)
      });
  });

  afterAll(() => {
    pool.end();
  });
});
