const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('lab-08-CRRUD-build CAT routes', () => {
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
  
  it('should update a cat by id', async () => { 
    await request(app)
    .post('/api/v1/cats')
    .send({cat_name: 'Garfield', breed: 'Orange Tabby Cat'})
    
    await request(app)
    .put('/api/v1/cats/1')
    .send({ cat_name: 'GaRfIeLd', breed: 'Orange Tabby Cat'})
    
    const result = await request(app)
    .get('/api/v1/cats/1')
    console.log(result.body);
    expect(result.body).toEqual({ 
      id: '1',
      cat_name: 'GaRfIeLd',
      breed: 'Orange Tabby Cat'
    })
  })
  it('gets a cat by id and deletes from the database', async () => { 
    const response = await request(app)
      .delete('/api/v1/cats/1')

      expect(response.body).toEqual({})
  })
  
  });


  describe('lab-08-CRRUD-build DOG routes', () => {
    beforeAll(() => {
      return setup(pool);
    });
    it('creates a dog and updates in the cats database', () => { 
      return request(app)
        .post('/api/v1/dogs')
        .send({ dog_name: 'Smokey', breed: 'Black Lab'})
        .then((res) => { 
          expect(res.body).toEqual({
            id: '1',
            dog_name: 'Smokey',
            breed: 'Black Lab'
          });
        });
  
    });
    it('gets a dog by the id', async () => { 
      const response = await request(app)
        .get('/api/v1/dogs/1')
  
        expect(response.body).toEqual({ 
          id: '1',
          dog_name: 'Smokey',
          breed: 'Black Lab'
        });
    })
    it('gets all dogs', async () => { 
      const response = await request(app)
        .get('/api/v1/dogs')
  
        expect(response.body).toEqual([
          {
            id: '1',
            dog_name: 'Smokey',
            breed: 'Black Lab'
          }
        ]);
    })
    
    it('should update a dog by id', async () => { 
      await request(app)
      .post('/api/v1/dogs')
      .send({dog_name: 'Smokey', breed: 'Black Lab'})
      
      await request(app)
      .put('/api/v1/dogs/1')
      .send({ dog_name: 'Smokerss', breed: 'Black Lab'})
      
      const result = await request(app)
      .get('/api/v1/dogs/1')
      console.log(result.body);
      expect(result.body).toEqual({ 
        id: '1',
        dog_name: 'Smokerss',
        breed: 'Black Lab'
      })
    })

    it('gets a dog by id and deletes from the database', async () => { 
      const response = await request(app)
        .delete('/api/v1/dogs/1')
  
        expect(response.body).toEqual({})
    })
    
    });
  
