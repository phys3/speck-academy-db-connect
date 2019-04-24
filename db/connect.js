const { Pool } = require('pg');

const pool = new Pool({
  user: 'damjanco', //marinokol
  host: '138.68.87.73',
  database: 'db_damjanco', // db_marinokol
  password: 'R>2agKcM', // your password
  port: 5432, // 5432
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}

