//requirements
// Build a command-line application that at a minimum allows the user to:
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles

// Bonus points if you're able to:
// Update employee managers
// View employees by manager
// Delete departments, roles, and employees
// View the total utilized budget of a department -- ie the combined salaries of all employees in that department

//================================================

//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

//create the connection for database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_management_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log('connection established!');
    start();
});

// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
function start() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Nothing"
        ]
    }).then((answer) => {
        switch (answer.action) {
            case "View all departments":
                viewDepts();

            case "View all roles":
                viewRoles();

            case "View all employees":
                viewEes();

            case "Add a department":
                addDept();

            case "Add a role":
                addRole();

            case "Add an employee":
                addEe();

            case "Update employee role":
                update();

            case "Nothing":
                connection.end();
        }
    });
}

//===================functions=====================

// function to View all departments,
function viewDepts() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input"
            },
        ])
        .then(answer => {
            connection.query(

            )
        })
}

// function to View all roles
function viewRoles() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input"
            },
        ])
        .then(answer => {
            connection.query(

            )
        })
}

// function to View all employees
function viewEes() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input"
            },
        ])
        .then(answer => {
            connection.query(

            )
        })
}

// function to Add a department
function addDept() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input"
            },
        ])
        .then(answer => {
            connection.query(

            )
        })
}

// function to Add a role
function addRole() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input"
            },
        ])
        .then(answer => {
            connection.query(

            )
        })
}

// function to Add an employee
function addEe() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input"
            },
        ])
        .then(answer => {
            connection.query(

            )
        })
}

// function to Update employee role
function update() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input"
            },
        ])
        .then(answer => {
            connection.query(

            )
        })
}

