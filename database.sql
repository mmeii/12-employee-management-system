CREATE DATABASE employee_management_db;

USE employee_management_db;

CREATE TABLE department (
    id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY Key (id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INT,
    PRIMARY Key (id)
);


