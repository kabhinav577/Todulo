import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import db from './config/db.js';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Get all tasks
app.get('/api/tasks', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const { task } = req.body;
  db.query('INSERT INTO todos (task) VALUES (?)', [task], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId });
  });
});

// Update task completion status
app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  db.query(
    'UPDATE todos SET completed = NOT completed WHERE id = ?',
    [taskId],
    (err) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  db.query('DELETE FROM todos WHERE id = ?', [taskId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
