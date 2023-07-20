import { useDispatch } from 'react-redux';
import { closeModal } from '../slices/modalSlice';
import { useChangePasswordMutation } from '../slices/authApiSlice';

import { ToastContainer, toast } from 'react-toastify';

import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

function Modal() {
  const dispatch = useDispatch();
  const [changePassword, { isError, isLoading }] = useChangePasswordMutation();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassowrd, setConfirmPassword] = useState('');

  const [btn, setBtn] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oldPassword == '') {
      toast.warn('Please Enter Old Password');
      return;
    }
    if (newPassword !== confirmPassowrd) {
      setOldPassword('');
      setConfirmPassword('');
      setNewPassword('');
      toast.warn('Password Dont Match');
      return;
    }
    let password = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    try {
      const { error } = await changePassword(password);
      if (error) {
        toast.error(error?.data?.error);
        return;
      }
      toast.success('Password Updated');
      setOldPassword('');
      setConfirmPassword('');
      setNewPassword('');
      dispatch(closeModal());
    } catch (error) {
      toast.error('Password Update Failed');
    }
  };

  return (
    <div className='relative'>
      <div className='relative w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow-lg border-2'>
          <button
            type='button'
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <AiOutlineClose color='red' />
          </button>
          <div className='p-6 text-center'>
            <h2 className='mb-5 text-xl font-semibold  text-gray-500 dark:text-gray-400'>
              Change Password
            </h2>
            <h3 className='mb-5 text-sm font-normal text-gray-500 dark:text-gray-400'>
              Plese enter your current password for confirmation
            </h3>
            <form
              className='mx-auto mb-0 mt-8 max-w-md space-y-4'
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor='email' className='sr-only'>
                  Current Password
                </label>

                <div className='relative'>
                  <input
                    type='password'
                    className='w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm'
                    placeholder='Enter Current Password'
                    value={oldPassword}
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' className='sr-only'>
                  New Password
                </label>

                <div className='relative'>
                  <input
                    type='password'
                    className='w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm'
                    placeholder='Enter New password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                    className='w-full rounded-lg border-gray-200 p-2 pe-12 text-sm shadow-sm'
                    placeholder='Confirm password'
                    value={confirmPassowrd}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value), setBtn(false);
                    }}
                  />
                </div>
              </div>
              <button
                type='submit'
                className='text-gray-500 bg-sky-400 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10'
                disabled={btn}
              >
                Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
