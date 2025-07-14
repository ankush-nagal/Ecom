import React from 'react';
import { Menu, X } from 'lucide-react';

function Header({ isOpen, toggle }) {
  return (
   <div>
    <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden z-50 fixed top-0 left-0 right-0">
  <button onClick={toggle}>
    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
  <div  className="absolute top-1 right-0 text-white px-3 py-1 rounded"><img className='h-9' src="https://i.etsystatic.com/41635376/r/il/77bc92/5337560994/il_570xN.5337560994_s657.jpg" alt="" /></div>
  
</header>
<div  className="absolute md:top-1  md:right-10 text-white px-3 py-1 rounded"><img className='md:h-18 h-0' src="https://i.etsystatic.com/41635376/r/il/77bc92/5337560994/il_570xN.5337560994_s657.jpg" alt="" /></div>
   </div>

  );
}

export default Header;
