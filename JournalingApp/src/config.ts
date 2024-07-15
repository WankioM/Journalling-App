import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',  
  user: 'root',       
  password: '4096',  
  database: 'journal_app', 
});

export default pool;
