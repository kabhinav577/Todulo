import { BsInfoCircle } from 'react-icons/bs';
import { FaTrashAlt, FaSortDown } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import TodoControls from './TodoControls';

const TodoList = () => {
  return (
    <>
      <TodoControls />
      <div className="w-full flex flex-col gap-4 items-center justify-center p-2 md:p-8 lg:p-12">
        <div className="w-full h-[3.5rem] md:h-[5rem] bg-slate-50/80 shadow-lg rounded-lg flex justify-between items-center px-2 md:px-4">
          <div className="flex items-center justify-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 md:w-6 md:h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm md:text-base font-medium text-gray-700"
            >
              Default checkbox
            </label>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="w-[120px] relative">
              <select className="block appearance-none w-full bg-white border border-slate-100/80 hover:border-gray-200 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base">
                <option>on-Hold</option>
                <option>in-progress</option>
                <option>Completed</option>
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
                <span className="text-red-600 cursor-pointer ">
                  <FaTrashAlt size={18} />
                </span>
              </div>
              <div className="flex justify-center items-center text-xs md:text-base text-gray-400">
                <BsInfoCircle size={15} className="mr-1" /> 12th Dec 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
