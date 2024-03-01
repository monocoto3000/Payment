import mysql from "mysql2/promise";
import { config } from "../mysql";
import { Signale } from "signale";

const signale = new Signale();

const tableName = 'payments';
const tableColumns = [
    'id INT AUTO_INCREMENT PRIMARY KEY',
    'name VARCHAR(100)',
    'concept VARCHAR(255)',
    'total INT(255)',
    'paydate TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
];

async function MessageInitializeSchema() {
    try {
      const connection = await mysql.createConnection(config); 
      signale.success('Conexión exitosa a la base de datos');
      const createTable = `CREATE TABLE IF NOT EXISTS ${tableName} (${tableColumns.join(', ')})`;
      await connection.query(createTable); 
      signale.success('Tabla creada con exito');
      connection.end(); 
    } catch (error) {
      signale.error('Error al inicializar el esquema:', error);
    }
  }
  
  MessageInitializeSchema();

//   Comando para compilar este documento ->  npm run start:schema