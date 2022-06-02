const mysql = require('mysql2')
const inquirer = require('inquirer')

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

//inquirer is used to add data to the db
//"view all", "add", etc... function for each

//queryby console.table

//present options for view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function directory(){
  inquirer.prompt([
    {
      type: 'list',
      name: 'userChoice',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }
  ]).then((userInput)=>{
    switch (userInput.userChoice) {
      case 'View all departments':
        viewDept()
        break
      case 'View all roles':
        viewRole()
        break
      case 'View all employees':
        viewEmpl()
        break
      case 'Add a department':
        addDept()
        break
      case 'Add a role':
        addRole()
        break      
      case 'Add an employee':
        addEmpl()
        break
      case 'Update an employee role':
        updtRole ()
        break
    }
  })
}

function viewDept() {
  db.query(`SELECT * FROM department`, (err, rows) => {
    console.table(rows)
  })
}

function viewRole() {
  db.query(`SELECT * FROM role`, (err, rows) => {
    console.table(rows);
  });
}

function viewEmpl() {
  db.query(`SELECT * FROM employee`, (err, rows) => {
    console.table(rows);
  });
}

function addDept() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'deptName',
      message: 'What is the department name?'
    }
  ]).then((userInput)=>{
    db.query(
      `INSERT INTO department (name)
      VALUES ('${userInput.deptName}')`
    )
    db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows);
    });
  })
}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the role title?'
    },
    {
      type: 'number',
      name: 'salary',
      message: 'What is the yearly salary? (Whole numbers only, no commas)'
    },
    {
      type: 'number',
      name: 'dept_id',
      message: 'What is the department id?'
    }
  ]).then((userInput)=>{
    db.query(
      `INSERT INTO role (title, salary, department_id)
      VALUES ('${userInput.title}','${userInput.salary}','${userInput.dept_id}')`
    )
    db.query(`SELECT * FROM role`, (err, rows) => {
        console.table(rows);
    });
  })
}

function addEmpl() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'fn',
      message: 'What is the first name?'
    },
    {
      type: 'input',
      name: 'ln',
      message: 'What is the last name'
    },
    {
      type: 'number',
      name: 'role_id',
      message: 'What is the role id?'
    },
    {
      type: 'number',
      name: 'manager_id',
      message: 'What is the manager id? (leave empty if none)'
    }
  ]).then((userInput)=>{
    db.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES ('${userInput.fn}','${userInput.ln}','${userInput.role_id}',${userInput.manager_id})`
    )
    db.query(`SELECT * FROM employee`, (err, rows) => {
        console.table(rows);
    });
  })
}

function updtRole(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'roleIndex',
      message: 'What is the role index?'
    },
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to edit?',
      choices: ['title', 'salary', 'department_id']
    },
    {
      type: 'input',
      name: 'value',
      message: 'Input new value:'
    }
  ]).then((userInput)=>{
    db.query(
      `UPDATE role SET ${userInput.choice} = '${userInput.value}' WHERE id = ${userInput.roleIndex}`
    )
    db.query(`SELECT * FROM role`, (err, rows) => {
      console.table(rows);
    });
  })
}

directory()