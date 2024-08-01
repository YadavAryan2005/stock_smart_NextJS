"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
function Nav() {
  const pathname=usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 z-20 text-white fixed w-full top-0">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="w-16" />
            <h1 className="text-xl font-bold font-serif">STOCK SMART</h1>
          </div>
          <div className="hidden md:flex gap-5 flex-1 justify-end space-x-4 text-lg font-serif">
            <a href="./" className={`hover:text-gray-200 ${pathname===""?"bg-white":"bg-blue"}`}>
              Home
            </a>
            <a href="./client" className="hover:text-gray-200">
              Clients
            </a>
            <a href="./feedback" className="hover:text-gray-200">
              Feedback
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 text-lg font-semibold">
            <li>
              <a
                href="./"
                className="block px-3 py-2 rounded-md hover:text-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./client"
                className="block px-3 py-2 rounded-md hover:text-gray-200"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="./feedback"
                className="block px-3 py-2 rounded-md hover:text-gray-200"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Nav;
