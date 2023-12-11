import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, MoonIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/todo-96.svg';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../state';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
];

const mobileNavigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
];

const profileLink = [
  { name: 'Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickProfileModal = () => {
    setProfileModal(!profileModal);
  };

  return (
    <header className="bg-gray-50 z-10">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-center  sm:justify-start">
              <div className="absolute left-[50%] top-4">
                <img className="h-8 w-auto" src={Logo} alt="TODULO" />
              </div>

              {/* Desktop Navigation  */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex md:space-x-2 lg:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-200 text-gray-700'
                          : 'text-gray-700 hover:bg-gray-100',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Dark Mode ICon  */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:right-5 md:bottom-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-100 p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Dark Mode</span>
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                {user !== null ? (
                  <>
                    <div>
                      <button
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={handleClickProfileModal}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>

                    {/* PROFIL DRAWER  */}
                    {profileModal ? (
                      <motion.ul
                        initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-[50%] flex flex-col z-30 py-4 justify-between items-center fixed bg-white rounded-lg shadow-md -right-[6rem] top-36 sm:w-[40%] md:w-[30%] lg:w-[20%]"
                      >
                        {profileLink.map((item) => (
                          <li className="relative group mb-2" key={item.name}>
                            <Link
                              to={item.href}
                              className="block bg-transparent px-4 py-2 text-lg text-gray-700"
                            >
                              {item.name}
                              <span className="h-[1px] inline-block bg-gray-700 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  w-0 hover:w-full">
                                &nbsp;
                              </span>
                            </Link>
                          </li>
                        ))}

                        <li className="relative group">
                          <button
                            onClick={() => dispatch(setLogout())}
                            className="block bg-transparent px-4 py-2 text-lg text-red-700 hover:text-red-600 font-medium"
                          >
                            Sign out
                            <span className="h-[1px] inline-block bg-red-600 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  w-0 hover:w-full">
                              &nbsp;
                            </span>
                          </button>
                        </li>
                      </motion.ul>
                    ) : null}
                  </>
                ) : (
                  <div className="hidden sm:flex md:space-x-2">
                    <Link
                      to="/signin"
                      className="text-gray-700 hover:bg-gray-100 rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="text-gray-700 hover:bg-gray-100 rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation  */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 text-gray-200 rounded-lg backdrop-blur-md py-32 md:hidden"
          >
            <nav className="flex items-center  flex-col justify-center">
              {mobileNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative group mb-2"
                  onClick={handleClick}
                >
                  {item.name}
                  <span className="h-[1px] inline-block bg-gray-100 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  w-0 hover:w-full">
                    &nbsp;
                  </span>
                </Link>
              ))}
            </nav>
            <nav className="flex items-center text-sky-400 justify-center flex-wrap mt-4 font-medium">
              <Link to="/signin" className="relative group hover:text-red-400">
                SignIn
                <span className="h-[1px] inline-block bg-gray-100 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  w-0 hover:w-full">
                  &nbsp;
                </span>
              </Link>
              <Link
                to="/signup"
                className="ml-2 relative group hover:text-red-400"
              >
                SignUp
                <span className="h-[1px] inline-block bg-gray-100 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  w-0 hover:w-full ">
                  &nbsp;
                </span>
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </>
    </header>
  );
};

export default Navbar;
