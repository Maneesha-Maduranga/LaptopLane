import userImg from '../assets/user.png';

import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../slices/modalSlice';
import { useProfileQuery } from '../slices/authApiSlice';

import Spinner from '../Components/Spinner';
import Modal from '../Components/Modal';

function ProfileScreen() {
  const { data, isLoading } = useProfileQuery();

  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  let user;

  if (!isLoading) {
    user = data.data.user;
  }

  return (
    <div className='flex flex-col items-center my-32 lg:my-20 h-auto'>
      {isLoading && <Spinner />}
      {modal && <Modal />}
      {!isLoading && (
        <div
          className={
            !modal
              ? `w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`
              : `hidden`
          }
        >
          <div className='flex flex-col items-center pb-10'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src={userImg}
              alt='Bonnie image'
            />
            <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
              {user.username}
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              {user.email}
            </span>
            <div className='flex mt-4 space-x-3 md:mt-6'>
              <button
                className='inline-flex bg-sky-400 items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 '
                onClick={() => dispatch(openModal())}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileScreen;
