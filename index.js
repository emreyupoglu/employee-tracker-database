const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'Dolphinlovers',
      database: 'employees_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

function mainMenu() {
    inquirer.prompt(
        [
            {   type: "list",
                message: "What would you like to do?",
                name: "MenuSelection",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"] 
            }
        ]
    )
  }

mainMenu();





//   const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });

// Query database
db.query('SELECT * FROM employees', function (err, results) {
    console.log(results);
  });