const { Router } = require('express');
const DogService = require('../services/DogService');
const Dog = require('../models/Dogs')


module.exports = Router()
    .post('/', async (req, res, next) => { 
       try { 
           const request = await DogService.create(req.body);
           res.send(request);
       } catch (err) { 
           next(err);
       }

    })

    .get('/:id', async (req, res, next) => { 
        try { 
            const request = await Dog.findById(req.params.id);
            res.send(request); 
        } catch (err) { 
            next(err);
        }
    })
    .get('/', (req, res, next) => { 
            Dog
            .getAll()
            .then(dog => res.send(dog))
            .catch(next);
    })
    .put('/:id', (req, res, next) => {
        
        const dogNum = Number(req.params.id);
            Dog
            .updateDog(dogNum, req.body)
            .then(dog => res.send(dog))
            .catch(next);
    })

    .delete('/:id', async (req, res, next) => { 
        const dogNum = Number(req.params.id);
        try { 
            const request = await Dog.deleteDog(dogNum);
             res.send(request);
        } catch (err) { 
            next(err);
        }

    })
