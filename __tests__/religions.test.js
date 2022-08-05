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

  it('#GET /religions/:id should return religion with all information by id', async () => {
    const res = await request(app).get('/religions/1');
    expect (res.body).toEqual({
      id: expect.any(String),
      type: expect.any(String),
      percentage_2011: expect.any(String)
    });
  });

  it('#POST /religions should add a new Religion', async () => {
    const newReligion = {
      type: 'Nature Worship',
      percentage_2011: '0.46%'
    };
    const resp = await request(app).post('/religions').send(newReligion);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newReligion
    });
  });

  it('#PUT /religions/:id should update an existing flower', async () => {
    const resp = await request(app).put('/religions/1').send({
      type: 'Bon',
    });
    console.log(resp.body);
    expect(resp.status).toBe(200);
    expect(resp.body.type).toBe('Bon');
  });

  afterAll(() => {
    pool.end();
  });

});
