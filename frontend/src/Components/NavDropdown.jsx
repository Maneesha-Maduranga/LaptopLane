import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function NavDropDown({ show }) {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div className='relative'>
      <div className='inline-flex items-center overflow-hidden rounded-md border bg-white'>
        <button
          className='h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700'
          onClick={() => {
            setShowDrop(!showDrop);
          }}
        >
          <span className='sr-only'>Menu</span>
          <BsChevronDown />
        </button>
      </div>

      <div
        className={
          showDrop
            ? `absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg`
            : `hidden`
        }
      >
        <div className='p-2'>
          <Link
            to='/admin/products'
            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            role='menuitem'
          >
            View Products
          </Link>

          <Link
            to='/admin/orders'
            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            role='menuitem'
          >
            View Orders
          </Link>

          <Link
            to='/admin/users'
            className='block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            role='menuitem'
          >
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavDropDown;
