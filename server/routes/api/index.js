import express from 'express';
import todosRoutes from './todos.js';
import usersRoutes from './users.js';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/tasks', todosRoutes);

export default router;
