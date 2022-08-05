const pool = require('../utils/pool');

module.exports = class Religion {
  id;
  type;
  percentage_2011;

  constructor(row){
    this.id = row.id;
    this.type = row.type;
    this.percentage_2011 = row.percentage_2011;
  } 

  //get all 

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM religions;');
    return rows.map((row) => new Religion(row));
  }

  //get by id
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT id, type, percentage_2011 from religions
          WHERE religions.id = $1
          GROUP BY religions.id`,
      [id]
    );
    return new Religion(rows[0]);
  }

  //post 
  static async insert({ type, percentage_2011 }) {
    const { rows } = await pool.query(
      `
          INSERT INTO religions (type, percentage_2011)
          VALUES ($1, $2)
          RETURNING *;
          `,
      [type, percentage_2011]
    );
    return new Religion(rows[0]);
  }


};
