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


  //post 


  //patch

  //delete

};
