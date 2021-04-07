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

    // .get('/:id', (req, res, next) => { 
    //     try { 
    //         const request = 
    //     }
    // })
    // .get('/')
    // .put('/:id')
    // .delete('/:id')
