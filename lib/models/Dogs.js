const pool = require('../utils/pool')

module.exports = class Dog{ 
    id;
    dog_name;
    breed

    constructor(row) { 
        this.id = row.id;
        this.dog_name = row.dog_name;
        this.breed = row.breed
    }

    static async insert(dogs) { 
        const { rows } = await pool.query(
            'INSERT INTO dogs (dog_name, breed) VALUES ($1, $2) RETURNING*;',
            [dogs.dog_name, dogs.breed]
        );

        return new Dog(rows[0]);
    }
}