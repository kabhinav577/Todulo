import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Calendar from './pages/calendar/Calendar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          element={
            <>
              <Navbar /> <Outlet />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
