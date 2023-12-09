import db from '../config/db.js';

// Get all tasks
export const getAllTodos = (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) throw err;
    res.json('SENT SUCCESSFULLY');
  });
};

// Add a new task
export const createTodo = (req, res) => {
  const { task } = req.body;
  db.query('INSERT INTO todos (task) VALUES (?)', [task], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId });
  });
};

// Update task completion status
export const updateTodo = (req, res) => {
  const taskId = req.params.id;
  db.query(
    'UPDATE todos SET completed = NOT completed WHERE id = ?',
    [taskId],
    (err) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
};

// Delete a task
export const deleteTodo = (req, res) => {
  const taskId = req.params.id;
  db.query('DELETE FROM todos WHERE id = ?', [taskId], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
};
