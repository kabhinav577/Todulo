import { useDispatch, useSelector } from 'react-redux';

import TodoControls from './TodoControls';
import { setTodos } from '../../../state/index';
import { useEffect } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const todos = useSelector((state) => state.todos);
  const user = useSelector((state) => state.user);
  // console.log(user.id);

  const getTodos = async () => {
    const response = await fetch(`http://localhost:3001/api/tasks/${user.id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      console.log('ERROR IN FETCHING TODOS');
      return;
    }

    const data = await response.json();

    dispatch(setTodos({ todos: data }));
  };

  useEffect(() => {
    getTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <TodoControls />
      {Array.from(todos).map((todo) => (
        <TodoListItem
          key={todo.id}
          title={todo.title}
          status={todo.status}
          createdAt={todo.created_at}
        />
      ))}
    </>
  );
};

export default TodoList;
