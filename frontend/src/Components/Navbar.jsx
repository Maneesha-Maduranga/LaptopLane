import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSignOutMutation } from '../slices/authApiSlice';
import { ToastContainer, toast } from 'react-toastify';
import { removeUser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import NavDropDown from './NavDropdown';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const { total } = useSelector((state) => state.cart);
  const [signOut] = useSignOutMutation();
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await signOut().unwrap();
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
      {/* Large View */}
      <div className='fixed top-0 navbar flex justify-around items-center h-16 w-full bg-slate-900 text-white font-black z-20'>
        <div className='logo text-amber-400 text-2xl font-bold'>LaptopLane</div>
        <ul className='flex items-center'>
          <Link to='/' className='px-4'>
            Home
          </Link>
          <Link to='/products' className='px-4'>
            Products
          </Link>
        </ul>
        <ul className='flex items-center'>
          <Link to='/cart' className='px-4 hidden md:block'>
            Cart
            {total > 0 && (
              <span className='inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full'>
                {total}
              </span>
            )}
          </Link>
          {user ? (
            <>
              <Link className='px-4 hidden md:block'>{`Hello ${user.name}`}</Link>
              {user.role === 'admin' && (
                <div className='px-4 hidden md:block'>
                  <NavDropDown />
                </div>
              )}
              <Link className='px-4 hidden md:block' onClick={handleSignout}>
                Sign Out
              </Link>
            </>
          ) : (
            <Link to='/auth/signin' className='px-4 hidden md:block'>
              Sign In
            </Link>
          )}

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

      <div
        className={
          showNav
            ? `absolute md:hidden p-6 rounded-lg bg-slate-900 left-6 right-6 top-20 z-20 opacity-90`
            : 'hidden'
        }
      >
        <div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm'>
          <Link to='/cart' className='px-4 border-b-2 border-b-gray-50'>
            Cart
          </Link>

          {user ? (
            <>
              <Link className='px-4 border-b-2 border-b-gray-50'>Profile</Link>
              {user.role === 'admin' && (
                <>
                  <Link
                    className='px-4 border-b-2 border-b-gray-50'
                    to='/admin/products'
                  >
                    View Products
                  </Link>
                  <Link
                    className='px-4 border-b-2 border-b-gray-50'
                    to='/admin/orders'
                  >
                    View Orders
                  </Link>
                  <Link
                    className='px-4 border-b-2 border-b-gray-50'
                    to='/admin/users'
                  >
                    View Users
                  </Link>
                </>
              )}
              <Link
                onClick={handleSignout}
                className='px-4 border-b-2 border-b-gray-50'
              >
                Sign Out
              </Link>
            </>
          ) : (
            <Link to='auth/signin' className='px-4 border-b-2 border-b-gray-50'>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
