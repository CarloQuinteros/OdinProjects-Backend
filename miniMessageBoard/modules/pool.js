const { Pool } = require("pg");
// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();



module.exports=new Pool({
  host: process.env.DB_HOST,      // Usar la variable de entorno DB_HOST
  user: process.env.DB_USER,      // Usar la variable de entorno DB_USER
  database: process.env.DB_NAME,  // Usar la variable de entorno DB_NAME
  password: process.env.DB_PASSWORD, // Usar la variable de entorno DB_PASSWORD
  port: process.env.DB_PORT,      // Usar la variable de entorno DB_PORT
});