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

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      console.log('Error deleting task:', response.statusText);
      return;
    }

    // If deletion is successful, update the Redux store
    dispatch(setTodos({ todos: todos.filter((todo) => todo.id !== id) }));
  };

  const handleUpdate = async (id, newStatus, newIsChecked) => {
    try {
      const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_checked: newIsChecked, status: newStatus }),
      });

      if (!response.ok) {
        console.log('Error updating task:', response.statusText);
        return;
      }

      // Fetch the updated todos from the server
      const updatedResponse = await fetch(
        `http://localhost:3001/api/tasks/${user.id}`,
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!updatedResponse.ok) {
        console.log(
          'Error fetching updated todos:',
          updatedResponse.statusText
        );
        return;
      }

      const updatedData = await updatedResponse.json();

      // Update the Redux store with the fetched updated todos
      dispatch(setTodos({ todos: updatedData }));
    } catch (error) {
      console.error('Error during update:', error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [user, token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <TodoControls />
      {Array.from(todos).map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          status={todo.status}
          createdAt={todo.created_at}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </>
  );
};

export default TodoList;
