
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({isActive}) => isActive ? "bg-black text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";


  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            
            <NavLink to="/" className="text-white text-2xl font-bold">
              Logo
            </NavLink>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/AboutPage" className={activeLink}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/ProjectsPage" className={activeLink}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/ContactPage" className={activeLink}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
