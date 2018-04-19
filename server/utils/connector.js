const mysql = require('promise-mysql')

const createConnection = async () => await mysql.createConnection({
  host: 'localhost',
  port: 6603,
  user: 'root',
  password: 'password',
  database: 'db167074_42'
})

module.exports = {
  createConnection
}