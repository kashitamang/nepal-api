const pool = require('../utils/pool');

module.exports = class Caste {
  id;
  name;
  meaning;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.meaning = row.meaning;
  } 

  //get all 

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM Castes;');
    return rows.map((row) => new Caste(row));
  }
  
  //get by id
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT id, name, meaning from castes
      WHERE castes.id = $1
      GROUP BY castes.id`,
      [id]
    );
    return new Caste(rows[0]);
  }

  //post 
  static async insert({ name, meaning }) {
    const { rows } = await pool.query(
      `
      INSERT INTO castes (name, meaning)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [name, meaning]
    );
    return new Caste(rows[0]);
  }

  //patch
  static async updateById(id, edit) {
    const caste = await Caste.getById(id);

    if (!caste) return null;

    const updatedData = { ...caste, ...edit };

    const { rows } = await pool.query(
      `
      UPDATE castes
      SET name = $2, meaning = $3
      WHERE id = $1
      RETURNING *;
    `,
      [
        id,
        updatedData.name,
        updatedData.meaning,
      ]
    );
    return new Caste(rows[0]);
  }

  //delete
  static async delete(id) {
    const { rows } = await pool.query(
      `
      DELETE from castes
      WHERE id = $1
      RETURNING *
    `,
      [id]
    );
    console.log(rows, 'hello from model');
  }
};
