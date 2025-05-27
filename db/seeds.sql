-- Insert sample departments
INSERT INTO departments (name) VALUES
('Engineering'),
('Sales'),
('Finance'),
('Human Resources');

-- Insert sample roles
INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Senior Software Engineer', 100000, 1),
('Sales Lead', 70000, 2),
('Salesperson', 50000, 2),
('Accountant', 75000, 3),
('HR Manager', 65000, 4);

-- Insert sample employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL), -- John Doe is a Software Engineer with no manager
('Jane', 'Smith', 2, 1),  -- Jane Smith is a Senior Software Engineer managed by John Doe
('Anthony', 'Johnson', 3, NULL), -- Anthony Johnson is a Sales Lead with no manager
('Emily', 'Davis', 4, 1), -- Emily Davis is a Salesperson managed by John Doe
('Jada', 'Summers', 5, NULL), -- Jada Summers is an Accountant with no manager
('Damien', 'Dawson', 6, NULL); -- Damien Dawson is an HR Manager with no manager