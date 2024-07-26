import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Erstellen Sie eine Verbindung zur Datenbank
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.PORT) || 3306,
});

const promisePool = pool.promise();

export default promisePool;
