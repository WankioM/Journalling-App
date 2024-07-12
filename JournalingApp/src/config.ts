import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',  // replace with your MySQL host
  user: 'root',       // replace with your MySQL username
  password: '4096',   // replace with your MySQL password
  database: 'journal_app', // replace with your MySQL database name
});

export default pool;
