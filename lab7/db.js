// Подключение к нашей БД

const Pool = require('pg').Pool;
const pool = new Pool({
user: "postgres",
password: "qwerty1234",
host: "localhost",
port: 5432,
database: "postgres"
});

module.exports = pool;