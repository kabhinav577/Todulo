import { createPool } from 'mysql2/promise';

const db = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Mrrobot@123',
  database: 'todo_app',
  port: 3306,
};

const pool = createPool(db);

// Listen for the connection event
pool.on('connection', (connection) => {
  console.log('Database connection established:', connection.threadId);
});

// Listen for errors
pool.on('error', (err) => {
  console.error('Database connection error:', err);
});

export { pool };
