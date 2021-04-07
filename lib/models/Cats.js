const pool = require('../utils/pool')

module.exports = class Cat{ 
    id;
    cat_name;
    breed

    constructor(row) { 
        this.id = row.id;
        this.cat_name = row.cat_name;
        this.breed = row.breed
    }

    static async insert(cats) { 
        const { rows } = await pool.query(
            'INSERT INTO cats (cat_name, breed) VALUES ($1, $2) RETURNING*;',
            [cats.cat_name, cats.breed]
        );

        return new Cat(rows[0]);
    }
}
