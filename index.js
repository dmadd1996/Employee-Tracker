//inquirer is used to add data to the db
//"view all", "add", etc... function for each

//queryby console.table
db.query(`SELECT * FROM employees`, (err, rows) => {
    console.log(rows);
  });