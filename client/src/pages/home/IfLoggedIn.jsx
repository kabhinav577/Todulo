import Layout from '../../components/Layout';
import { FaCalendarAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { TbCaretUpDownFilled } from 'react-icons/tb';
import { BsInfoCircle } from 'react-icons/bs';

const IfLoggedIn = () => {
  return (
    <Layout>
      <main className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col justify-center items-center gap-8">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] p-2 md:p-4 lg:p-6 px-4 rounded-lg flex justify-between items-center bg-slate-50 shadow-md">
          <form action="" className="w-full flex items-center justify-between">
            <input
              className="bg-transparent border-none outline-none"
              type="text"
              placeholder="What work you do?"
            />
            <div className="flex items-center justify-between gap-4">
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

        <hr className="w-full h-[1px] bg-gray-800" />

        <div className="w-full flex justify-end items-end gap-8 p-4">
          {/* Filter Todo  */}
          <div className="flex justify-between gap-2 items-center relative w-36">
            <label htmlFor="">Filter:</label>
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
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
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Added Deu Date</option>
              <option>Due Date</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <TbCaretUpDownFilled size={18} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 items-center justify-center p-2 md:p-8 lg:p-12">
          <div className="w-full h-[3.5rem] md:h-[4rem] bg-white shadow-lg rounded-lg flex justify-between items-center px-2 md:px-4">
            <div className="flex items-center justify-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 md:w-6 md:h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-base font-medium text-gray-900"
              >
                Default checkbox
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-end gap-4 md:gap-5 items-center">
                <span className="text-sky-700 cursor-pointer ">
                  <FaEdit size={18} />
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
      </main>
    </Layout>
  );
};

export default IfLoggedIn;
