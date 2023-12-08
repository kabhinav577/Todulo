import { createConnection } from 'mysql';

// MySQL Connection
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mrrobot@123',
  database: 'todo_app',
});

db.connect((err) => {
  if (err) {
    console.log('MySQL Connection Error: ', err);
  } else {
    console.log('MySQL Connected!');
  }
});

export default db;
