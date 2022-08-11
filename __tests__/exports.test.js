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

  it('#POST /exports should add a new export', async () => {
    const newExport = {
      type: 'Knotted Carpets',
      revenue_2020: '$55.2M'
    };
    const resp = await request(app).post('/exports').send(newExport);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newExport
    });
  });

  it('#PUT /exports/:id should update an existing export', async () => {
    const resp = await request(app).put('/exports/1').send({
      type: 'Soybean Oil',
    });
    console.log(resp.body);
    expect(resp.status).toBe(200);
    expect(resp.body.type).toBe('Soybean Oil');
  });

  it('#DELETE /exports/:id should delete a religion', async () => {
    //i have stuff
    const res = await request(app).get('/exports');
    expect(res.body.length).toEqual(3);

    const resp = await request(app).delete('/exports/1');
    console.log(resp.body, 'hello from resp.body');
    expect(resp.status).toBe(200);
    //data has been modified by delete
    const fullResponse = await request(app).get('/exports');
    console.log(fullResponse.body);
    expect(fullResponse.body.length).toEqual(2);
  });

  afterAll(() => {
    pool.end();
  });

});
