import { CiLocationOn, CiCreditCard2, CiReceipt } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function Steps({ addres, summary }) {
  return (
    <div className='w-1/2 mx-auto mb-5'>
      <div className='overflow-hidden rounded-full bg-gray-200'>
        <div className='h-2 w-1/2 rounded-full bg-blue-500'></div>
      </div>

      <ol className='mt-4 grid grid-cols-3 text-sm font-medium text-gray-500'>
        {addres ? (
          <Link
            className='flex items-center justify-start text-blue-600 sm:gap-1.5 cursor-pointer'
            to='/checkout'
          >
            <span className='hidden sm:inline'> Address </span>

            <CiLocationOn />
          </Link>
        ) : (
          <li className='flex items-center justify-start text-blue-600 sm:gap-1.5'>
            <span className='hidden sm:inline'> Address </span>

            <CiLocationOn />
          </li>
        )}
        {summary ? (
          <Link
            className='flex items-center justify-end sm:gap-1.5'
            to='/orderDetail'
          >
            <span className='hidden sm:inline'> Order Summary </span>
            <CiReceipt />
          </Link>
        ) : (
          <li className='flex items-center justify-end sm:gap-1.5'>
            <span className='hidden sm:inline'> Order Summary </span>
            <CiReceipt />
          </li>
        )}
      </ol>
    </div>
  );
}

export default Steps;
