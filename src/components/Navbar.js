import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";


const Navbar = () => {

  const cartstyle = {
   
  
    display:'flex'
   
  };
  const {cart} = useContext(CartContext);
  return (
    <>
      <div className="container-fluid mx-auto flex items-center justify-between py-7 px-5 bg-blue-100 ">
        <Link to="">
          <img style={{ height: 50 }} src="/images/logo.png" alt="logo" />
        </Link>
        <ul className="flex items-center  ">
          <li className="hover:text-blue-900 mr-3  ">
            <Link to="/">HOME</Link>
          </li>

          <li className="ml-4 mr-3  hover:text-indigo-900  ">
            <Link to="/About">WOMEN</Link>
          </li>

          <li className="ml-4 mr-3  hover:text-indigo-900  ">
            <Link to="/About">MEN</Link>
          </li>
          <li className="ml-4 mr-3  hover:text-indigo-900  ">
            <Link to="/About">OTHERS</Link>
          </li>
          <li className="ml-4 mr-28  hover:text-indigo-900 ">
            <Link to="/About">PURCHASE</Link>
          </li>
          <li className="ml-4 mr-28  hover:text-indigo-900 ">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div class="relative">
                <input
                  type="search"
                  id="default-search"
                  class="block p-1 pl-10 py-2  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                />
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <button
                  type="submit"
                  class="text-white absolute right-0.5 bottom-2.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0 mx-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </li>
          <li className="hover:text-indigo-900  ">
            <Link to="/Cart">
            <div style={cartstyle}>
               
                <img className="ml-2  " src="/Images/cart.png" alt="cart-icon" />
                <span className="pt-2 font-bold"> cart(0)</span>
               
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
