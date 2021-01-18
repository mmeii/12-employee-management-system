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
            "Exit"
        ]
    }).then((answer) => {
        switch (answer.action) {
            case "View all departments":
                viewDepts();
                break;

            case "View all roles":
                viewRoles();
                break;

            case "View all employees":
                viewEes();
                break;

            case "Add a department":
                addDept();
                break;

            case "Add a role":
                addRole();
                break;

            case "Add an employee":
                addEe();
                break;

            case "Update employee role":
                update();
                break;

            case "Exit":
                connection.end();
                break;
        }
    });
}

//===================functions=====================

// function to View all departments,
function viewDepts() {
    connection.query("SELECT * FROM department", (err, data) => {
        if (err) throw err;
        console.log("Displaying all departments:");
        console.table(data);
        start();
    });
}

// function to View all roles
function viewRoles() {
    connection.query("SELECT * FROM role", (err, data) => {
        if (err) throw err;
        console.log("Displaying all roles:");
        console.table(data);
        start();
    });
}

// function to View all employees
function viewEes() {
    connection.query("SELECT * FROM employee", (err, data) => {
        if (err) throw err;
        console.log("Displaying all employees:");
        console.table(data);
        start();
    });
}

// function to Add a department
function addDept() {
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the new department name?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter department name.");
                }
            }
        },
    ]).then(answer => {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: answer.department
            },
            (err) => {
                if (err) throw err;
                console.log(`New department ${answer.department} has been added!`);
                start();
            }
        );
    });
}

// function to Add a role; prompt role, salary and department
const addRole = () => {
    const deptSql = "SELECT * FROM department";
    connection.query(deptSql, (err, results) => {
        if (err) throw err;

        console.log("List of current departments:");
        console.table(results);
        console.log(typeof (results));

        inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title for the new role?",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the title.");
                    }
                }
            },
            {
                name: "salary",
                type: "input",
                message: "What is this new role's salary",
                validate: (value) => {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    console.log("Please enter a number");
                }
            },
            {
                name: "department",
                type: "rawlist",
                choices: () => {
                    let choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].name);
                    }
                    return choiceArray;
                },
                message: "What department is this new role under?",
            }
        ]).then(answer => {
            let chosenDept;
            for (let i = 0; i < results.length; i++) {
                if (results[i].name === answer.department) {
                    chosenDept = results[i];
                }
            }

            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: chosenDept.id
                },
                (err) => {
                    if (err) throw err;
                    console.log(`New role ${answer.title} has been added!`);
                    start();
                }
            )
        });
    });
}

// function to Add an employee; prompt first_name, last_name, role and manager
function addEe() {
    inquirer.prompt([
        {
            name: "department",
            type: "input"
        },
    ]).then(answer => {
        connection.query(

        )
    })
}

// function to Update employee role
function update() {
    inquirer.prompt([
        {
            name: "department",
            type: "input"
        },
    ]).then(answer => {
        connection.query(

        )
    })
}

