import Layout from '../../components/Layout';
import TodoForm from './components/TodoForm';
import TodoControls from './components/TodoControls';
import TodoList from './components/TodoList';

const IfLoggedIn = () => {
  return (
    <Layout>
      <main className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col justify-center items-center gap-8">
        <TodoForm />

        <hr className="w-full h-[1px] bg-gray-800" />

        <TodoControls />

        <TodoList />

        <div className="w-full flex justify-end items-center">
          <button className="bg-red-500 hover:bg-red-700 text-white font-medium lg:font-bold py-2 px-4 rounded">
            Clear all
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default IfLoggedIn;
