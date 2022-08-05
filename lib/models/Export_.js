const pool = require('../utils/pool');

module.exports = class Export_ {
  id;
  type;
  revenue_2020;

  constructor(row){
    this.id = row.id;
    this.type = row.type;
    this.revenue_2020 = row.revenue_2020;
  } 

  //get all 

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM exports;');
    return rows.map((row) => new Export_(row));
  }
};
