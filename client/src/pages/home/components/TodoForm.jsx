import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCalendarAlt } from 'react-icons/fa';
import { setTodos } from '../../../state';

const TodoForm = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    user_id: user.id,
    title: '',
    status: 'in-progress',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/api/tasks/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error('API call failed:', response.statusText);
        return;
      }

      const newTodo = await response.json();

      dispatch(setTodos({ todos: [...todos, newTodo] }));
      setFormData({ user_id: user.id, title: '', status: 'in-progress' });
    } catch (error) {
      console.log('Error in Creating Todo', error);
    }
  };

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] p-2 md:p-4 lg:p-6 px-4 rounded-lg flex justify-between items-center bg-slate-50 shadow-md mb-2">
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-between"
      >
        <input
          className="bg-transparent border-none outline-none min-w-[65%]"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="What work you do?"
        />
        <input type="hidden" name="status" value={formData.status} />
        <div className="flex items-center justify-between gap-2 md:gap4">
          <span className="cursor-pointer">
            <FaCalendarAlt size={20} color="green" />
          </span>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium lg:font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
