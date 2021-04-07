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

    static async findById(dogsId) { 
        const { rows } = await pool.query(
            'SELECT * FROM dogs WHERE id=$1', [dogsId]
        );

        return rows[0];
    }

    static async getAll() { 
        const { rows } = await pool.query(
            'SELECT * FROM dogs;'
        );

        return rows.map(row => new Dog(row));
    }

    static async deleteDog(dogsId) { 
        await pool.query(
            'DELETE FROM dogs WHERE id=$1', [dogsId]
        );
    }

    static async updateDog(dogsId, updateName) { 
        const { rows } = await pool.query( 
            'UPDATE dogs SET dog_name=$2 WHERE id=$1 RETURNING *;',
            [dogsId, updateName.dog_name]

        );
            return rows[0];
    }
}
