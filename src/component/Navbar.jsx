import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="leftSection text-xl font-bold text-white">
          <span>Pomodoro</span>
        </div>
        <div className="rightSection">
          <ul className="flex space-x-6 text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-blue-400'
                    : 'hover:text-blue-300 transition duration-200'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-blue-400'
                    : 'hover:text-blue-300 transition duration-200'
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
