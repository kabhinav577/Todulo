import express from 'express';
import todosRoutes from './todos.js';

const router = express.Router();

router.use('/tasks', todosRoutes);

export default router;
