import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useSignInMutation } from '../slices/authApiSlice';
import { ToastContainer, toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { storeUser } from '../slices/userSlice';

function SignInScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn] = useSignInMutation();

  let { search } = useLocation();
  const serachParms = new URLSearchParams(search);

  const redirect = serachParms.get('redirect') || '/';

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(redirect);
      }, 1000);
    }
  }, [user, navigate, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.warning('Please Fill the Credential');
      return;
    }

    setEmail('');
    setPassword('');
    try {
      const { data } = await signIn({ email, password }).unwrap();

      dispatch(storeUser(data));
      toast.success('Sign In');
    } catch (err) {
      console.log(err);
      if (err.data) {
        toast.error(err?.data?.error);
      } else {
        toast.warn('Try again');
      }
    }
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-16 h-screen'>
      <div className='mx-auto max-w-lg text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Welcome Back today!</h1>

        <p className='mt-4 text-gray-500'>Sign in to your Account</p>
      </div>

      <form
        className='mx-auto mb-0 mt-8 max-w-md space-y-4'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>

          <div className='relative'>
            <input
              type='email'
              className='w-full rounded-lg border-gray-200 p-2 lg:p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
          <label htmlFor='password' className='sr-only'>
            Password
          </label>

          <div className='relative'>
            <input
              type='password'
              className='w-full rounded-lg border-gray-200 p-2 lg:p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500'>
            No account?
            <Link to='/auth/signup' className='underline'>
              Sign up
            </Link>
          </p>

          <button
            type='submit'
            className='inline-block rounded-lg bg-sky-500 px-5 py-3 text-sm font-medium text-white'
            // disabled={email === '' || password === '' ? true : false}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInScreen;
