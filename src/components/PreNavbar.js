import React from 'react';
import { Link } from 'react-router-dom';


const PreNavbar = () => {
  return (
    <>
    <nav className="container-fluid mx-auto flex items-center justify-between py-0 px-4 text-white " >
      <Link to="">
        <img style={{ height: 45 }} src="/images/2.png" alt="logo" />
      </Link>
      <ul className="flex items-center  ">
        <li className='hover:text-blue-900 font-bold '>
          <Link to="/">Account</Link>
        </li>
        <span className='ml-2 '>|</span>
        <li className="ml-4 mr-4  hover:text-blue-600 font-bold ">
          <Link  to="/Login">Login</Link>
        </li>
        <span>|</span>
        <li className="ml-4 mr-28  hover:text-blue-600 font-bold ">
          <Link  to="/SignUp">SignUp</Link>
        </li>
       
      </ul>
    </nav>
  </>
  )
}

export default PreNavbar