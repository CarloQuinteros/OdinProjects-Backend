const pool = require("./pool");

async function getAllMenssages() {
  const { rows } = await pool.query("select id,nombre,mensaje,to_char(fecha_mensaje,'DD-MON-YYYY HH24:MI:SS') as fecha_mensaje from mensajes;");
  return rows;
}

async function insertMessage(nombre,mensaje) {
  await pool.query("INSERT INTO mensajes (nombre,mensaje) VALUES ($1,$2)", [nombre,mensaje]);
}

module.exports = {
  getAllMenssages,
  insertMessage,
};
