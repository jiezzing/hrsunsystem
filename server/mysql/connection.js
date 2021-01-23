const dotenv = require('dotenv');
const mysql = require('mysql');
const config = dotenv.config({ path: './config/config.env' });

if (config.error) {
  throw config.error;
}

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: config.parsed.DB_USER,
  password: config.parsed.DB_PASS,
  database: config.parsed.DB_NAME
});

module.exports = connection;
