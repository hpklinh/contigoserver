
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cotigo',
  password: 'Kl0356584807',
  port: 5432,
})

module.exports = pool;