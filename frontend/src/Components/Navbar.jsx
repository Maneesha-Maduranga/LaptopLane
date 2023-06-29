import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { Link } from 'react-router-dom';

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      {/* Large View */}
      <div className='fixed top-0 navbar flex justify-around items-center h-16 w-full bg-slate-900 text-white font-black z-20'>
        <div className='logo text-amber-400 text-2xl font-bold'>LaptopLane</div>
        <ul className='flex items-center'>
          <Link to='/' className='px-4'>
            Home
          </Link>
          <li className='px-4'>Product</li>
        </ul>
        <ul className='flex items-center'>
          <li className='px-4 hidden md:block'>Cart</li>
          <li className='px-4 hidden md:block'>Log In</li>
          <li
            className='px-4 block md:hidden'
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            {showNav ? (
              <AiOutlineMenu size={28} />
            ) : (
              <AiOutlineClose size={28} />
            )}
          </li>
        </ul>
      </div>
      {/* Mobile View */}

      <ul
        className={
          showNav
            ? 'hidden'
            : `flex justify-evenly items-center h-12 mt-16 bg-sky-100 `
        }
      >
        <li className='px-4 '>Cart</li>
        <li className='px-4 '>Log In</li>
      </ul>
    </>
  );
}

export default Navbar;
