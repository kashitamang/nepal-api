const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const District = require('../lib/models/District');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /districts should return a list of all district names', async () => {
    const res = await request(app).get('/districts');
    expect(res.body.length).toEqual(3);
    expect(res.body[0]).toEqual(
      {
        id: expect.any(String),
        name: expect.any(String)
      });
  });

  it('#GET /districts/:id should return district with all information by id', async () => {
    const res = await request(app).get('/districts/1');
    expect (res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      population: expect.any(String)
    });
  });
  
  it('#POST /districts should add a new district', async () => {
    const newDistrict = {
      name: 'Dhading',
      population: '336,067'
    };
    const resp = await request(app).post('/districts').send(newDistrict);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newDistrict
    });
  });

  it('#PUT /districts/:id should update an existing district', async () => {
    const resp = await request(app).put('/districts/1').send({
      name: 'Dhading District',
    });
    console.log(resp.body);
    expect(resp.status).toBe(200);
    expect(resp.body.name).toBe('Dhading District');
  });

  it('#DELETE /districts/:id should delete a district', async () => {
    //i have stuff
    const res = await request(app).get('/districts');
    expect(res.body.length).toEqual(3);

    const resp = await request(app).delete('/districts/1');
    console.log(resp.body, 'hello from resp.body');
    expect(resp.status).toBe(200);
    //data has been modified by delete
    const fullResponse = await request(app).get('/districts');
    console.log(fullResponse.body);
    expect(fullResponse.body.length).toEqual(2);
  });

  afterAll(() => {
    pool.end();
  });
});