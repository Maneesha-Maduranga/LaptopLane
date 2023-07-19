import { Link } from 'react-router-dom';

function Paginate({ count, pages }) {
  return (
    <div className='flex flex-col md:flex-row  items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div>
        <p className='text-sm text-gray-700'>
          <span className='font-medium mx-1'>{count}</span> Products
        </p>
      </div>
      <div>
        <nav
          className='isolate inline-flex -space-x-px rounded-md shadow-sm'
          aria-label='Pagination'
        >
          {[...Array(pages).keys()].map((item) => (
            <Link
              key={item}
              to={`/products/page/${item + 1}`}
              aria-current='page'
              className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            >
              {item + 1}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Paginate;
