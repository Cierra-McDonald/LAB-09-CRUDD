const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('lab-08-CRRUD-build routes', () => {
  beforeAll(() => {
    return setup(pool);
  });
  it('creates a cat and updates in the cats database', () => { 
    return request(app)
      .post('/api/v1/cats')
      .send({ cat_name: 'Garfield', breed: 'Orange Tabby Cat'})
      .then((res) => { 
        expect(res.body).toEqual({
          id: '1',
          cat_name: 'Garfield',
          breed: 'Orange Tabby Cat'
        });
      });

  });
  it('gets a cat by the id', async () => { 
    const response = await request(app)
      .get('/api/v1/cats/1')

      expect(response.body).toEqual({ 
        id: '1',
        cat_name: 'Garfield',
        breed: 'Orange Tabby Cat'
      });
  })
  it('gets all cats', async () => { 
    const response = await request(app)
      .get('/api/v1/cats')

      expect(response.body).toEqual([
        {
          id: '1',
          cat_name: 'Garfield',
          breed: 'Orange Tabby Cat'
        }
      ]);
  })
  it('gets a cat by id and deletes from the database', async () => { 
    const response = await request(app)
      .delete('/api/v1/cats')

      expect(response.body).toEqual({})
  })

});
