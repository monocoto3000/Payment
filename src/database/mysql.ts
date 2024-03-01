import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { Signale } from "signale";

dotenv.config();
const signale = new Signale();
 export const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
};


export async function query(sql: string, params: any[]) {
  try {
    const pool = mysql.createPool(config);
    const conn = await pool.getConnection();
    signale.success("Conexión exitosa a la base de datos");
    const result = await conn.execute(sql, params);
    conn.release();
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  }
}
