const { Pool } = require("pg");

// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
/*module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "odin_project",
  database: "top_users",
  password: "welcome1",
  port: 5432 // The default port
});
*/

module.exports=new Pool({
  host: process.env.DB_HOST,      // Usar la variable de entorno DB_HOST
  user: process.env.DB_USER,      // Usar la variable de entorno DB_USER
  database: process.env.DB_NAME,  // Usar la variable de entorno DB_NAME
  password: process.env.DB_PASSWORD, // Usar la variable de entorno DB_PASSWORD
  port: process.env.DB_PORT,      // Usar la variable de entorno DB_PORT
});