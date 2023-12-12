// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="p-2 md:p-8 my-8 md:my-4 lg:p-16 xl:p-20 w-full h-full">
      {children}
    </div>
  );
};

export default Layout;
