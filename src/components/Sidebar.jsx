import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      className={`bg-white w-65 min-h-screen border-r fixed top-15 left-0 transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block`}
    >
      <div ><img className='h-20 pl-2.5 ' src="https://ecom.ngo/wp-content/uploads/2025/01/ecom-logo-full-color-rgb-01.jpg" alt="" /></div>
      <nav className="px-6 space-y-3">
        <Link to="/" onClick={toggle} className="block text-blue-600 hover:underline">
          E-Commerce
        </Link>
        <Link to="/signup" onClick={toggle} className="block text-blue-600 hover:underline">
          Signup
        </Link>
        <Link to="/signin" onClick={toggle} className="block text-blue-600 hover:underline">
          Sign In
        </Link>
      </nav>
    </aside>
  );
}


export default Sidebar;


