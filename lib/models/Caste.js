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


  //patch

  //delete

};
