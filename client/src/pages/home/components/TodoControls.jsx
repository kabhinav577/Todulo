import { TbCaretUpDownFilled } from 'react-icons/tb';

const TodoControls = () => {
  return (
    <div className="w-full flex justify-end items-end gap-8 p-4">
      {/* Filter Todo  */}
      <div className="flex justify-between gap-2 items-center relative w-36">
        <label htmlFor="">Filter:</label>
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-300 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>All</option>
          <option>Completed</option>
          <option>Active</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <TbCaretUpDownFilled size={18} />
        </div>
      </div>

      {/* Sorting Todo  */}
      <div className="flex justify-between gap-2 items-center relative w-36">
        <label htmlFor="">Sort:</label>
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-300 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>Added Deu Date</option>
          <option>Due Date</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <TbCaretUpDownFilled size={18} />
        </div>
      </div>
    </div>
  );
};

export default TodoControls;
