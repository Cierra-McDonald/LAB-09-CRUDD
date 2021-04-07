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
    .put('/:id', (req, res, next) => {
        
        const catNum = Number(req.params.id);
            Cat
            .updateCat(catNum, req.body)
            .then(cat => res.send(cat))
            .catch(next);
    })

    .delete('/:id', async (req, res, next) => { 
        const catNum = Number(req.params.id);
        try { 
            const request = await Cat.deleteCat(catNum);
             res.send(request);
        } catch (err) { 
            next(err);
        }

    })

