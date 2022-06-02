const mysql = require('mysql2')

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Soccerball21',
      database: 'employees'
    },
    console.log('Connected to the employee database.')
);

module.exports = connection

// db.query(`SELECT * FROM department`, (err, rows) => {
//     console.log(rows);
// });