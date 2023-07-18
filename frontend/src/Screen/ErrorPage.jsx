import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='grid h-screen px-4 bg-white place-content-center'>
      <div className='text-center'>
        <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Uh-oh!
        </p>

        <p className='mt-4 text-gray-500'>
          Try searching again, or return home to start from the beginning.
        </p>
        <Link
          to='/'
          className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-sky-400 rounded hover:bg-sky-500 focus:outline-none focus:ring'
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
