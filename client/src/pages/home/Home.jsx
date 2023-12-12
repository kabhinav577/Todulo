import IfLoggedIn from './IfLoggedIn';
import IfNotLoggedIn from './IfNotLoggedIn';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user);
  return <>{user ? <IfLoggedIn /> : <IfNotLoggedIn />}</>;
};

export default Home;
