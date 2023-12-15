/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaTrashAlt, FaSortDown } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';

const TodoListItem = ({
  id,
  title,
  status,
  createdAt,
  handleDelete,
  handleUpdate,
}) => {
  const [selectedValue, setSelectedValue] = useState(status);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDeleteClick = async () => {
    await handleDelete(id);
  };
  // eslint-disable-next-line react/prop-types
  const date = createdAt.substring(0, 10);
  const reversedDateString = date.split('-').reverse().join('-');

  return (
    <div className="w-full h-[4rem] md:h-[5rem] bg-slate-50/80 shadow-lg rounded-lg flex justify-between items-center px-2 md:px-4">
      <div className="flex items-center justify-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 md:w-6 md:h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
        />
        <label
          htmlFor="default-checkbox"
          className="ms-3 text-sm md:text-base font-medium text-gray-700"
        >
          {title}
        </label>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="w-[120px] relative">
          <select
            className="block appearance-none w-full bg-white border border-slate-100/80 hover:border-gray-200 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="on-hold">on-hold</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
          </select>
          <div className=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pb-2">
            <FaSortDown size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-end gap-4 md:gap-5 items-center">
            <span className="text-sky-700 cursor-pointer ">
              <GrEdit size={18} />
            </span>
            <span
              className="text-red-600 cursor-pointer "
              onClick={handleDeleteClick}
            >
              <FaTrashAlt size={18} />
            </span>
          </div>
          <div className="flex justify-center items-center text-xs md:text-base text-gray-400">
            <BsInfoCircle size={15} className="mr-1" /> {reversedDateString}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
