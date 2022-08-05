const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /religions should return a list of all religions', async () => {
    const res = await request(app).get('/religions');
    expect(res.body.length).toEqual(3);
    expect(res.body[0]).toEqual(
      {
        id: expect.any(String),
        type: expect.any(String)
      });
  });

  afterAll(() => {
    pool.end();
  });

});
