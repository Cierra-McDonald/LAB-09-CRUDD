const Cats = require('../models/Cats');

module.exports = class CatService { 
    static async create(cat) { 
        console.log('in the catService')
        return Cats.insert(cat);
    }
}