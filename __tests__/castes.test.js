const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /castes should return a list of all caste names', async () => {
    const res = await request(app).get('/castes');
    expect(res.body.length).toEqual(3);
    expect(res.body[0]).toEqual(
      {
        id: expect.any(String),
        name: expect.any(String)
      });
  });

  it('#GET /castes/:id should return caste with all information by id', async () => {
    const res = await request(app).get('/castes/1');
    expect (res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      meaning: expect.any(String)
    });
  });

  it('#POST /castes should add a new Caste', async () => {
    const newCaste = {
      name: 'Shakya',
      meaning: 'of Buddha'
    };
    const resp = await request(app).post('/castes').send(newCaste);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newCaste
    });
  });

  it('#PUT /castes/:id should update an existing caste', async () => {
    const resp = await request(app).put('/castes/1').send({
      name: 'Thamang',
    });
    console.log(resp.body);
    expect(resp.status).toBe(200);
    expect(resp.body.name).toBe('Thamang');
  });

  it('#DELETE /castes/:id should delete a caste', async () => {
    //i have stuff
    const res = await request(app).get('/castes');
    expect(res.body.length).toEqual(3);

    const resp = await request(app).delete('/castes/1');
    console.log(resp.body, 'hello from resp.body');
    expect(resp.status).toBe(200);
    //data has been modified by delete
    const fullResponse = await request(app).get('/castes');
    console.log(fullResponse.body);
    expect(fullResponse.body.length).toEqual(2);
  });

  afterAll(() => {
    pool.end();
  });
});
