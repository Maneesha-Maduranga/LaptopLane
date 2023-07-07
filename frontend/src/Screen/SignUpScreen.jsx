import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSignUpMutation } from '../slices/authApiSlice';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {
  const secreat = {
    username: '',
    email: '',
    password: '',
    passwordTwo: '',
  };
  const [credential, setCredential] = useState(secreat);
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credential.password !== credential.passwordTwo) {
      toast.info('Password Does Not Match');
      return;
    }
    // console.log(credential);

    try {
      const { data } = await signUp(credential).unwrap();

      navigate('/auth/signin');
    } catch (err) {
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
        <h1 className='text-2xl font-bold sm:text-3xl'>Get started today!</h1>

        <p className='mt-4 text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form
        className='mx-auto mb-0 mt-8 max-w-md space-y-4'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='name' className='sr-only'>
            User Name
          </label>

          <div className='relative'>
            <input
              type='text'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter User Name'
              value={credential.username}
              onChange={(e) => {
                setCredential({ ...credential, username: e.target.value });
              }}
            />
          </div>
        </div>

        <div>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>

          <div className='relative'>
            <input
              type='email'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter email'
              value={credential.email}
              onChange={(e) => {
                setCredential({ ...credential, email: e.target.value });
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
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Enter password'
              value={credential.password}
              onChange={(e) => {
                setCredential({ ...credential, password: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor='password' className='sr-only'>
            Confirm Password
          </label>

          <div className='relative'>
            <input
              type='password'
              className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Confirm Password'
              value={credential.passwordTwo}
              onChange={(e) => {
                setCredential({ ...credential, passwordTwo: e.target.value });
              }}
            />
          </div>
        </div>

        <div className='flex flex-col items-center justify-between'>
          <div>
            <button
              type='submit'
              className='inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white'
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpScreen;
