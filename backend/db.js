const mysql = require('mysql2/promise');
const config = require('./database');
let connection;

async function query(sql, params) {
   connection = await mysql.createConnection(config.db);
  const [results,] = await connection.execute(sql, params);

  return results;
}

function closeConnection() {
  if (connection) {
    connection.end(); // Close the connection
    connection = null; // Reset the connection variable
  }
}

module.exports = {
  query, closeConnection
}

