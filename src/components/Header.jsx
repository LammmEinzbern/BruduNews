import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="py-6 px-8 sm:px-16 lg:px-22 flex items-center justify-between bg-gray-600">
        <h2 className="text-xl sm:text-2xl text-white font-bold">Brudu News</h2>
        <button className="text-white sm:hidden" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className="hidden sm:flex sm:ml-auto">
          <ul className="flex gap-5">
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "font-bold text-white"
                    : "text-white"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/internasional"
                className={
                  location.pathname === "/internasional"
                    ? "font-bold text-white"
                    : "text-white"
                }
              >
                International
              </Link>
            </li>
            <li>
              <Link
                to="/nasional"
                className={
                  location.pathname === "/nasional"
                    ? "font-bold text-white"
                    : "text-white"
                }
              >
                Nasional
              </Link>
            </li>
            <li>
              <Link
                to="/olahraga"
                className={
                  location.pathname === "/olahraga"
                    ? "font-bold text-white"
                    : "text-white"
                }
              >
                Olahraga
              </Link>
            </li>
            <li>
              <Link
                to="/teknologi"
                className={
                  location.pathname === "/teknologi"
                    ? "font-bold text-white"
                    : "text-white"
                }
              >
                Teknologi
              </Link>
            </li>
            <li>
              <Link
                to="/hiburan"
                className={
                  location.pathname === "/hiburan"
                    ? "font-bold text-white"
                    : "text-white"
                }
              >
                Hiburan
              </Link>
            </li>
            <li>
              <Link
                to="/gaya-hidup"
                className={
                  location.pathname === "/gaya-hidup"
                    ? "font-bold text-white"
                    : "text-white"
                }
              >
                Gaya Hidup
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {isOpen && (
        <nav className="sm:hidden bg-gray-700">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "font-bold text-white"
                    : "text-white"
                }
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/internasional"
                className={
                  location.pathname === "/internasional"
                    ? "font-bold text-white"
                    : "text-white"
                }
                onClick={toggleMenu}
              >
                International
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/nasional"
                className={
                  location.pathname === "/nasional"
                    ? "font-bold text-white"
                    : "text-white"
                }
                onClick={toggleMenu}
              >
                Nasional
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/olahraga"
                className={
                  location.pathname === "/olahraga"
                    ? "font-bold text-white"
                    : "text-white"
                }
                onClick={toggleMenu}
              >
                Olahraga
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/teknologi"
                className={
                  location.pathname === "/teknologi"
                    ? "font-bold text-white"
                    : "text-white"
                }
                onClick={toggleMenu}
              >
                Teknologi
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/hiburan"
                className={
                  location.pathname === "/hiburan"
                    ? "font-bold text-white"
                    : "text-white"
                }
                onClick={toggleMenu}
              >
                Hiburan
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/gaya-hidup"
                className={
                  location.pathname === "/gaya-hidup"
                    ? "font-bold text-white"
                    : "text-white"
                }
                onClick={toggleMenu}
              >
                Gaya Hidup
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
