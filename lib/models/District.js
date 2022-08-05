const pool = require('../utils/pool');

module.exports = class District {
  id;
  name;
  population;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.population = row.population;
  } 

  //get all 

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM districts;');
    return rows.map((row) => new District(row));
  }
  
  //get by id
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT id, name, population from districts
      WHERE districts.id = $1
      GROUP BY districts.id`,
      [id]
    );
    return new District(rows[0]);
  }

  //post 
  static async insert({ name, population }) {
    const { rows } = await pool.query(
      `
      INSERT INTO districts (name, population)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [name, population]
    );
    return new District(rows[0]);
  }

  //patch
  static async updateById(id, edit) {
    const district = await District.getById(id);

    if (!district) return null;

    const updatedData = { ...district, ...edit };

    const { rows } = await pool.query(
      `
      UPDATE districts
      SET name = $2, population = $3
      WHERE id = $1
      RETURNING *;
    `,
      [
        id,
        updatedData.name,
        updatedData.population,
      ]
    );
    return new District(rows[0]);
  }
  //delete
  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE from districts
      WHERE id = $1
      RETURNING *
    `,
      [id]
    );
    console.log(rows, 'hello from model');
  }
};
