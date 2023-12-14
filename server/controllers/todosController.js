import { pool } from '../config/db.js';

// Get all tasks
export const getAllTodos = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await pool.query('SELECT * FROM todos WHERE user_id = ?', [
      userId,
    ]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    const todo = rows[0];
    res.json(todo);
  } catch (error) {
    console.error('Error getting todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a new task
export const createTodo = async (req, res) => {
  try {
    const { user_id, title, status } = req.body;

    const [result] = await pool.query(
      'INSERT INTO todos (user_id, title, status) VALUES (?, ?, ?)',
      [user_id, title, status]
    );

    const insertedTodoId = result.insertId;
    res.json({ id: insertedTodoId, user_id, title, status });
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update task completion status
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    const [result] = await pool.query(
      'UPDATE todos SET title=?, status=? WHERE id=?',
      [title, status, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    res.json({ id, title, status });
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a task
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM todos WHERE id=?', [id]);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
