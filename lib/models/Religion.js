const pool = require('../utils/pool');

module.exports = class Religion {
  id;
  type;
  population;

  constructor(row){
    this.id = row.id;
    this.type = row.type;
    this.population = row.population;
  } 

  //get all 

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM religions;');
    return rows.map((row) => new Religion(row));
  }
};
