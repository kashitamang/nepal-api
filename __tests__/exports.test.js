const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /exports should return a list of all exports', async () => {
    const res = await request(app).get('/exports');
    expect(res.body.length).toEqual(3);
    expect(res.body[0]).toEqual(
      {
        id: expect.any(String),
        type: expect.any(String)
      });
  });

  it('#GET /exports/:id should return religion with all information by id', async () => {
    const res = await request(app).get('/exports/1');
    expect (res.body).toEqual({
      id: expect.any(String),
      type: expect.any(String),
      revenue_2020: expect.any(String)
    });
  });

  afterAll(() => {
    pool.end();
  });

});
