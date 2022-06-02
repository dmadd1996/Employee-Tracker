USE employees;

INSERT INTO department (name)
VALUES ('Finance'),('Engineering'),('HR'),('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Accountant', 60000.00, 1),
('Controller', 100000.00, 1),
('Engineer', 70000.00, 2),
('Lead Engineer', 130000.00, 2),
('HR Associate', 55000.00, 3),
('HR Lead', 70000.00, 3),
('Salesperson', 50000.00, 4),
('Head Salesperson', 65000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Bob', 'Bobby', 2, NULL),
('Michael', 'Scott', 8, NULL),
('Richard', 'Beuford', 4, NULL),
('Toby', 'Flenderson', 6, NULL),
('Bill', 'Billy', 1, 1),
('Holly', 'Flax', 5, 4),
('Dick', 'Williams', 3, 3),
('Jim', 'Halpert', 7, 2),
('Dwight', 'Schrute', 7, 2),
('Andrew', 'Bernard', 7, 2);
