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
    
    static async findById(catsId) { 
        const { rows } = await pool.query(
            'SELECT * FROM cats WHERE id=$1', [catsId]
        );

        return rows[0];
    }

    static async getAll() { 
        const { rows } = await pool.query(
            'SELECT * FROM cats;'
        );

        return rows.map(row => new Cat(row));
    }

    static async deleteCat(catsId) { 
        await pool.query(
            'DELETE FROM cats WHERE id=$1', [catsId]
        );
    }

    static async updateCat(catsId, updateName) { 
        const { rows } = await pool.query( 
            'UPDATE cats SET cat_name=$2 WHERE id=$1 RETURNING *;',
            [catsId, updateName.cat_name]

        );
            return rows[0];
    }
}
