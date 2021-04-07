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