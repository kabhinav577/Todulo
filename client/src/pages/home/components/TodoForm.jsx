import { FaCalendarAlt } from 'react-icons/fa';

const TodoForm = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] p-2 md:p-4 lg:p-6 px-4 rounded-lg flex justify-between items-center bg-slate-50 shadow-md mb-2">
      <form action="" className="w-full flex items-center justify-between">
        <input
          className="bg-transparent border-none outline-none min-w-[65%]"
          type="text"
          placeholder="What work you do?"
        />
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
