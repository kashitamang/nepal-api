const pool = require('../utils/pool');

module.exports = class Flower {
  id;
  name;
  color;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.color = row.color;
  } 

  //get all 

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM flowers;');
    return rows.map((row) => new Flower(row));
  }

  //get by id
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT id, name, color from flowers
          WHERE flowers.id = $1
          GROUP BY flowers.id`,
      [id]
    );
    return new Flower(rows[0]);
  }

  //post 
  static async insert({ name, color }) {
    const { rows } = await pool.query(
      `
      INSERT INTO flowers (name, color)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [name, color]
    );
    return new Flower(rows[0]);
  }

//patch
  static async updateById(id, edit) {
    const flower = await Flower.getById(id);
    
    if (!flower) return null;
    
    const updatedData = { ...flower, ...edit };
    
    const { rows } = await pool.query(
      `
          UPDATE flowers
          SET name = $2, color = $3
          WHERE id = $1
          RETURNING *;
        `,
      [
        id,
        updatedData.name,
        updatedData.color,
      ]
    );
    return new Flower(rows[0]);
  }
    
};
