const Dogs = require('../models/Dogs');

module.exports = class DogService { 
    static async create(dog) { 
        console.log('in the dogService')
        return Dogs.insert(dog);
    }
}