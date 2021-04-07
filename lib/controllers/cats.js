const { Router } = require('express');
const CatService = require('../services/CatService');
const Cat = require('../models/Cats')

module.exports = Router()
    .post('/', async (req, res, next) => { 
       try { 
           const request = await CatService.create(req.body);
           res.send(request);
       } catch (err) { 
           next(err);
       }

    })

    .get('/:id', async (req, res, next) => { 
        try { 
            const request = await Cat.findById(req.params.id);
            res.send(request); 
        } catch (err) { 
            next(err);
        }
    })
    .get('/', (req, res, next) => { 
            Cat
            .getAll()
            .then(cat => res.send(cat))
            .catch(next);
    })
    // .put('/:id')
    .delete('/:id', (req, res, next) => { 
        
    })

