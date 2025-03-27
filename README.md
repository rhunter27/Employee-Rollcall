# Employee Rollcall Database

## Description

## This project sets up a database for tracking employee information including departments, roles, salaries, and employee details. The database is designed to help organizations manage their workforce data efficiently.

## Database Schema

## Tables Structure

1. Departments
### id: Primary key (INT, AUTO_INCREMENT)
### name: Department name (VARCHAR)

2. Roles
### id: Primary key (INT, AUTO_INCREMENT)
### title: Job title (VARCHAR)
### salary: Salary amount (DECIMAL)
### department_id: Foreign key referencing Departments(id)

3. Employees
### id: Primary key (INT, AUTO_INCREMENT)
### first_name: Employee's first name (VARCHAR)
### last_name: Employee's last name (VARCHAR)
### role_id: Foreign key referencing Roles(id)
### manager_id: Foreign key referencing Employees(id) (nullable for employees without managers)


## Installation

1. Clone this repository
2. Ensure you have MySQL installed
3. Create the database by running the schema file:
   mysql -u username -p < schema.sql
4. Seed the database with sample data:
   mysql -u username -p < seeds.sql

## Usage
After setting up the database, you can perform various queries such as:

### View all employees with their roles and departments
### Add new employees, departments, or roles
### Update employee information
### Generate reports on departmental staffing

## Dependencies

### MySQL or compatible database system

## Liscense

### This project is licensed under the MIT License.

