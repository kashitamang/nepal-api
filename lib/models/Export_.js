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

  //get by id
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT id, type, revenue_2020 from exports
            WHERE exports.id = $1
            GROUP BY exports.id`,
      [id]
    );
    return new Export_(rows[0]);
  }
  
  //post 
  static async insert({ type, revenue_2020 }) {
    const { rows } = await pool.query(
      `
            INSERT INTO exports (type, revenue_2020)
            VALUES ($1, $2)
            RETURNING *;
            `,
      [type, revenue_2020]
    );
    return new Export_(rows[0]);
  }
  
};
