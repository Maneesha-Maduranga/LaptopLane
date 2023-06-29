import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ProductCard({ laptop }) {
  return (
    <Link to={`/${laptop.id}`} className='group relative block overflow-hidden'>
      <button className='absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75'>
        <span className='sr-only'>Wishlist</span>

        <BsHeart color='red' />
      </button>

      <img
        src='https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80'
        alt=''
        className='h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
      />

      <div className='relative border border-gray-100 bg-white p-6'>
        <span className='whitespace-nowrap bg-amber-400 px-3 py-1.5 text-xs font-medium'>
          New
        </span>

        <h3 className='mt-4 text-lg font-medium text-gray-900'>රු275,000.00</h3>

        <p className='mt-1.5 text-sm text-gray-700'>
          HP ENVY x360 14-es0013dx Core i5 13th Gen Touch Screen 2-in-1 Laptop
        </p>

        <form className='mt-4'>
          <button className='block w-full rounded bg-slate-900 p-4 text-sm font-medium transition hover:scale-105 text-white'>
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
}

export default ProductCard;
