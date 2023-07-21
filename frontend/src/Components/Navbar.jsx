import { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

import Logo from './Logo';
import { SlLogin, SlLogout } from 'react-icons/sl';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSignOutMutation } from '../slices/authApiSlice';
import { ToastContainer, toast } from 'react-toastify';
import { removeUser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import NavDropDown from './NavDropdown';

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const { total } = useSelector((state) => state.cart);
  const [signOut] = useSignOutMutation();
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      await signOut().unwrap();
      dispatch(removeUser());
      toast.success('Sign Out');
      navigate('/');
    } catch (error) {
      toast.warn('Please  Try again');
      console.log(error);
    }
  };

  return (
    <>
      <div className='fixed top-0 w-full z-20'>
        {/* Top Banner */}
        <ul className='flex justify-between items-center p-6 bg-white z-30'>
          <li>
            <Logo />
          </li>
          <li className='block md:hidden '>
            {showNav ? (
              <AiOutlineMenu
                size={28}
                onClick={() => {
                  setShowNav(!showNav);
                }}
              />
            ) : (
              <AiOutlineClose
                size={28}
                onClick={() => {
                  setShowNav(!showNav);
                }}
              />
            )}
          </li>

          <li className='hidden md:block'>
            <button className='bg-sky-400 text-xs p-2 text-white hover:bg-white hover:text-sky-400'>
              HOT LINE – 076 356 563x
            </button>
          </li>
        </ul>
        {/* Links */}
        <div className='hidden md:flex flex-row justify-between h-16 bg-slate-100 px-10 text-sm'>
          <ul className='flex gap-5 items-center'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? 'hover:text-sky-400 font-semibold text-sky-400'
                    : 'hover:text-sky-400 font-semibold'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/products'
                className={({ isActive }) =>
                  isActive
                    ? 'hover:text-sky-400 font-semibold text-sky-400'
                    : 'hover:text-sky-400 font-semibold'
                }
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive
                    ? 'hover:text-sky-400 font-semibold text-sky-400'
                    : 'hover:text-sky-400 font-semibold'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  isActive
                    ? 'hover:text-sky-400 font-semibold text-sky-400'
                    : 'hover:text-sky-400 font-semibold'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className='flex flex-row gap-5 items-center '>
            {/* Conditionaliy Render Signout & Admin */}
            {user ? (
              <>
                <li>
                  <NavLink
                    className='flex items-center hover:text-sky-400 font-semibold'
                    to='/profile'
                  >
                    {`Hello ${user.name}`}
                  </NavLink>
                </li>
                {user.role === 'admin' && (
                  <div className='px-4 hidden md:block'>
                    <NavDropDown />
                  </div>
                )}

                <li>
                  <NavLink
                    className='flex items-center hover:text-sky-400 font-semibold'
                    onClick={handleSignout}
                  >
                    <span className='inline-flex px-2'>
                      <SlLogout color='#1E68CB' size={28} />
                    </span>
                    Sign Out
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  className='flex items-center  hover:text-sky-400 font-semibold'
                  to='/auth/signin'
                >
                  <span className='inline-flex px-2'>
                    <SlLogin color='#1E68CB' size={28} />
                  </span>
                  Sign In
                </NavLink>
              </li>
            )}

            {/* Cart */}
            <li>
              <NavLink
                className='relative inline-flex flex-shrink-0 justify-center items-center  hover:text-sky-400 font-semibold'
                to='/cart'
              >
                <AiOutlineShoppingCart size={28} color='#1E68CB' />
                {total > 0 && (
                  <span className='absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-sky-400 text-white'>
                    {total}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          showNav
            ? `hidden`
            : `fixed top-24 inset-0 z-20  flex-col items-center self-end w-full  h-screen px-6 py-1 pt-10 pb-4 tracking-widest text-white uppercase divide-y divide-white opacity-90 bg-sky-400`
        }
      >
        <div className='w-full py-3 text-center hover:text-sky-800'>
          <NavLink to='/'>Home</NavLink>
        </div>
        <div className='w-full py-3 text-center  hover:text-sky-800'>
          <NavLink to='/products'>All Products</NavLink>
        </div>
        <div className='w-full py-3 text-center  hover:text-sky-800'>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div className='w-full py-3 text-center  hover:text-sky-800'>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className='w-full py-3 text-center  hover:text-sky-800'>
          <NavLink to='/cart'>Cart</NavLink>
        </div>
        <div className='w-full py-3 text-center  hover:text-sky-800'>
          {user ? (
            <>
              <NavLink
                className='px-4 border-b-2 border-b-gray-50'
                to='/profile'
              >{`Hello ${user.name}`}</NavLink>
              {user.role === 'admin' && (
                <>
                  <NavLink
                    className='px-4 border-b-2 border-b-gray-50'
                    to='/admin/products'
                  >
                    View Products
                  </NavLink>
                </>
              )}
            </>
          ) : (
            <NavLink
              to='auth/signin'
              className='px-4 border-b-2 border-b-gray-50'
            >
              Sign In
            </NavLink>
          )}
        </div>
        <div className='w-full py-3 text-center  hover:text-sky-800'>
          {user && (
            <NavLink
              onClick={handleSignout}
              className='px-4 border-b-2  border-b-gray-50'
            >
              Sign Out
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
