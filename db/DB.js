// connection to database nd method
import { pool } from './connection.js';

class DB {
    constructor(pool) {
        this.pool = pool;
    }

    // `SELECT * FROM employees WHERE id = $1;`

    async query(queryString, params) {
        try {
            const result = await this.pool.query(queryString, params);
            return result.rows;
        } catch (error) {
            console.error('Error executing query', error);
            throw error;
        }
    }

    async viewAllEmployees() {
        const queryString = 'SELECT * FROM employees';
        return this.query(queryString);
    }

    async viewAllDepartments() {
        const queryString = 'SELECT id, name FROM departments';
        return this.query(queryString);
    }

    
}

export default new DB(pool);