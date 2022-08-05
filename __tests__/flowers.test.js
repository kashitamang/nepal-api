const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /flowers should return a list of all flower names', async () => {
    const res = await request(app).get('/flowers');
    expect(res.body.length).toEqual(3);
    expect(res.body[0]).toEqual(
      {
        id: expect.any(String),
        name: expect.any(String)
      });
  });

  it('#GET /flowers/:id should return flower with all information by id', async () => {
    const res = await request(app).get('/flowers/1');
    expect (res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      color: expect.any(String)
    });
  });

  it('#POST /flowers should add a new Flower', async () => {
    const newFlower = {
      name: 'Marigold',
      color: 'orange'
    };
    const resp = await request(app).post('/flowers').send(newFlower);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newFlower
    });
  });

});
