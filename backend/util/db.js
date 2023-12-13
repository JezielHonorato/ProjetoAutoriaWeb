const mysql = require('mysql');

const senhaBanco = process.env.SENHA_BANCO || "";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'autoriaweb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;