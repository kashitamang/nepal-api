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
};
