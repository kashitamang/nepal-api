const pool = require('../utils/pool');

module.exports = class District {
  id;
  name;
  population;

  constructor({ id, name, population }){
    this.id = id;
    this.name = name;
    this.population = population;
  } 

  //get all 

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM districts;');
    return rows.map((row) => new District(row));
  }
  
  //get by id
  //post 
  //patch
  //delete
};
