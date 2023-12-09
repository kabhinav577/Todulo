import express from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from '../../controllers/todosController.js';

const router = express.Router();

router.get('/', getAllTodos);

router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
