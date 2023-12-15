import Layout from '../../components/Layout';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const IfLoggedIn = () => {
  return (
    <Layout>
      <main className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col justify-center items-center gap-6">
        <TodoForm />

        <hr className="w-full h-[1px] bg-gray-800" />

        <TodoList />

        <div className="w-full flex justify-between items-center mt-4">
          <button className="bg-white hover:bg-gray-50 border-[1px] border-yellow-300 text-gray-700 font-medium lg:font-bold py-2 px-4 rounded">
            Select all
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium lg:font-bold py-2 px-4 rounded">
            Clear all
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default IfLoggedIn;
