import express from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from '../../controllers/todosController.js';
import { verifyToken } from '../../middleware/auth.js';

const router = express.Router();

router.get('/:userId', verifyToken, getAllTodos);

router.post('/', verifyToken, createTodo);

router.put('/:id', verifyToken, updateTodo);

router.delete('/:id', verifyToken, deleteTodo);

export default router;
