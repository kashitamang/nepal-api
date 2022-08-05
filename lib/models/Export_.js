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
  
  // eslint-disable-next-line indent
    //patch
  static async updateById(id, edit) {
    const export_ = await Export_.getById(id);
      
    if (!export_) return null;
      
    const updatedData = { ...export_, ...edit };
      
    const { rows } = await pool.query(
      `
            UPDATE exports
            SET type = $2, revenue_2020 = $3
            WHERE id = $1
            RETURNING *;
          `,
      [
        id,
        updatedData.type,
        updatedData.revenue_2020,
      ]
    );
    return new Export_(rows[0]);
  }

  //delete
  static async delete(id) {
    const { rows } = await pool.query(
      `
                DELETE from exports
                WHERE id = $1
                RETURNING *
              `,
      [id]
    );
    console.log(rows, 'hello from model');
  }
    
};
