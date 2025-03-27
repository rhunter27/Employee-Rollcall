# Employee Rollcall Database

## Description

- This project sets up a database for tracking employee information including departments, roles, salaries, and employee details. The database is designed to help organizations manage their workforce data efficiently.


## Table of Contents

* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Installation

* Node.js (v16 or higher)
* Python (v3.8 or higher)
* Git
* Postgres
  
## Usage

1. Clone the repository git clone https://github.com/rhunter27/Employee-Rollcall

2. Navigate to the project directory cd your-repo

3. Install dependencies npm install

4. make an intergreated terminal for file "schema.sql"

5. type command "psql -U postgress"

6. type password

7. type "postgres=# \i schema.sql" to drop amd create database to connect to "company_db" database.

8. type "\i seeds.sql;" to in order to "select" a table

9 company_db=#, type "SELECT * FROM roles;" to display list table of employee roles,salary, and department id.
id |          title           |  salary   | department_id 
----+--------------------------+-----------+---------------
  1 | Software Engineer        |  80000.00 |             1
  2 | Senior Software Engineer | 100000.00 |             1
  3 | Sales Lead               |  70000.00 |             2
  4 | Salesperson              |  50000.00 |             2
  5 | Accountant               |  75000.00 |             3
  6 | HR Manager               |  65000.00 |             4
(6 rows)

10. company_db=#, type "SELECT * FROM departments;" to display list table of departments.
 id |      name       
----+-----------------
  1 | Engineering
  2 | Sales
  3 | Finance
  4 | Human Resources
(4 rows)

11. company_db=#, type "SELECT * FROM  employees;" to display list tables of employee names.
 id | first_name | last_name | role_id | manager_id 
----+------------+-----------+---------+------------
  1 | John       | Doe       |       1 |           
  2 | Jane       | Smith     |       2 |          1
  3 | Anthony    | Johnson   |       3 |           
  4 | Emily      | Davis     |       4 |          1
  5 | Jada       | Summers   |       5 |           
  6 | Damien     | Dawson    |       6 |           
(6 rows)


## License

MIT

Contribution

John Brown (Instructor), and Rene Trevino (TA) Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change

Test

https://drive.google.com/file/d/1zTHYnqsF1l4dazNayFC32jHCwuyyWTiE/view?usp=sharing

Questions

If you have any questions, please contact me: GitHub: [rhunter27] (https://github.com/rhunter27) email: [ravenhunter207@gmail.com] (mailto:ravenhunter207@gmail.com)

